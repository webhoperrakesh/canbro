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
        router.push(`/product/${slug}`);
        toggleSearch(); // Trigger parent's toggleSearch
    };

    const handleBackdropClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            toggleSearch()
        }
    }

    return (
        <div className="absolute -right-[20rem] lg:-right-[15px] top-[40px] z-1111 animate-in fade-in duration-200 flex items-center justify-center" onClick={handleBackdropClick} >

        {/* // <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-1111 animate-in fade-in duration-200 flex items-center justify-center"
        //     onClick={handleBackdropClick}
        // > */}
            <div className="w-full max-w-4xl mx-auto mt-4 px-4">
                <div className="bg-white rounded-lg shadow-xl border p-4 animate-in slide-in-from-top-2 duration-200">
                    <div className="flex items-center space-x-3">
                        <IoSearchSharp className="h-6 w-6 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search products..."
                           className={`flex-1 text-lg border-none focus:ring-0 focus:outline-none text-black placeholder:text-gray-400 transition-all duration-300 ${
                                inputWidth ? 'w-[220px]' : ''
                            }`}
                            autoFocus
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                        />
                        <button
                            className="text-gray-400 hover:text-gray-600 p-2 hover:bg-gray-100 rounded-full transition-colors flex-shrink-0 hover:cursor-pointer"
                            onClick={() => toggleSearch()}
                        >
                            <IoMdClose className="h-5 w-5" />
                        </button>
                    </div>

                    {loading && (
                        <div className="text-sm text-gray-500 py-2">
                            <div className="flex items-center space-x-2">
                                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-gray-400"></div>
                                <span>Searching...</span>
                            </div>
                        </div>
                    )}

                    {suggestions.length > 0 && (
                        <div className="border-t border-gray-100 mt-4">
                            <ul className="max-h-80 overflow-y-auto">
                                {suggestions.map((product) => (
                                    <li
                                        key={product.slug}
                                        onClick={() => handleSuggestionClick(product.slug)}
                                        className="px-3 py-3 text-gray-700 hover:bg-gray-50 cursor-pointer border-b border-gray-50 last:border-b-0 transition-colors"
                                    >
                                        <div className="flex items-center space-x-2">
                                            <IoSearchSharp className="h-4 w-4 text-gray-400" />
                                            <span>{product.title}</span>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                    {!loading && suggestions.length === 0 && query.length >= 2 && (
                        <div className="text-sm text-gray-500 mt-4 py-8 text-center border-t border-gray-100">
                            <div className="flex flex-col items-center space-y-2">
                                <IoSearchSharp className="h-8 w-8 text-gray-300" />
                                <span>No products found for "{query}"</span>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default HeaderSearchForm