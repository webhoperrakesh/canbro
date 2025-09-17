"use client";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

type Product = {
    id: number;
    title: string;
    slug: string;
    image: string | null;
    composition: string;
    long_dec: string | TrustedHTML;
    visual_aids_image: string;
};

type RelatedProductResponse = {
    data: Product[];
};

export default function RelatedProducts({ slug }: { slug: string }) {
    const [related, setRelated] = useState<Product[]>([]);

    useEffect(() => {
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/related/${slug}`)
            .then(res => res.json())
            .then((json: RelatedProductResponse) => setRelated(json.data || []));
    }, [slug]);

    return (
        <>
        {related.length > 0 &&
        <div className="mt-12">
            {related.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 mt-4">
                    {related.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            ) : (
                <p className="mt-2">No related products found.</p>
            )}
        </div>
}
        </>
    );
}
