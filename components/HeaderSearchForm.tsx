import React, { useState, useEffect } from 'react'
import { IoSearchSharp } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { useRouter } from "next/navigation";

type Product = {
    title: string;
    slug: string;
};

type Props = {
  toggleSearch: () => void;
  rightClass: boolean;
  inputWidth: boolean;
};

const HeaderSearchForm = ({ toggleSearch, rightClass, inputWidth }: Props) => {

    const [query, setQuery] = useState('');
        const [suggestions, setSuggestions] = useState<Product[]>([]);
        const [loading, setLoading] = useState(false);
        const router = useRouter();
    
        useEffect(() => {
            const delayDebounce = setTimeout(() => {
                if (query.length >= 3) {
                    fetchSuggestions(query);
                } else {
                    setSuggestions([]);
                }
            }, 1000); // debounce delay
    
            return () => clearTimeout(delayDebounce);
        }, [query]);
    
        const fetchSuggestions = async (q: string) => {
            try {
                setLoading(true);
                const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/suggest?q=${encodeURIComponent(q)}`);
                const json = await res.json();
                setSuggestions(json.data || []);
            } catch (error) {
                console.error('Error fetching suggestions:', error);
            } finally {
                setLoading(false);
            }
        };
    
        const handleSuggestionClick = (slug: string) => {
            toggleSearch(); // Trigger parent's toggleSearch
            router.push(`/product/${slug}`);
        };

  return (
    <div className={`absolute top-14 ${rightClass ? "right-0" : ''} bg-white rounded-lg shadow-lg border p-4 z-50 animate-in slide-in-from-top-2 duration-200`}>
                <div className="flex items-center space-x-2 mb-2">
                    <IoSearchSharp className="h-5 w-5 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search..."
                        className={`flex-1 ${inputWidth ? "w-[190px]" : "" } border-none focus:ring-0 focus:outline-none text-black placeholder:text-gray-400`}
                        autoFocus
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <button
                        className="text-gray-400 hover:text-gray-600 h-8 w-8 hover:cursor-pointer"
                        onClick={() => toggleSearch()}
                    >
                        <IoMdClose className="h-4 w-4" />
                    </button>
                </div>
    
                {loading && <div className="text-sm text-gray-500">Loading...</div>}
    
                {suggestions.length > 0 && (
                    <ul className="mt-2 border-t border-gray-100">
                        {suggestions.map((product) => (
                            <li
                                key={product.slug}
                                onClick={() => handleSuggestionClick(product.slug)}
                                className="px-2 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                            >
                                {product.title}
                            </li>
                        ))}
                    </ul>
                )}
    
                {!loading && suggestions.length === 0 && query.length >= 2 && (
                    <div className="text-sm text-gray-500 mt-2">No products found.</div>
                )}
            </div>
  )
}

export default HeaderSearchForm