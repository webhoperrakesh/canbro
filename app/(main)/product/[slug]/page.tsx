import React from 'react';
import Link from 'next/link';
import ProductCard from '@/components/ProductCard'
import Image from 'next/image';
import { RiArrowRightDoubleFill } from "react-icons/ri";
import { CategorySidebar } from '@/components/CategorySidebar';
import { notFound } from 'next/navigation';
import { getMetaData } from '@/utils/getMetaData';
import { Metadata } from 'next';
import SendEnquiry from '@/components/SendEnquiry';

type Params = Promise<{ slug: string }>

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
    const { slug } = await params;
    const data = await getMetaData(slug, 'Product');
    const seo = data.seo_meta;

    return {
        title: seo.seo_title || 'Default Title',
        description: seo.seo_description || 'Default Description',
        robots: seo.index === 'index' ? 'index,follow' : 'noindex,nofollow',
    };
}

type Category = {
    id: number;
    title: string;
    slug: string;
};

type Product = {
    id: number;
    title: string;
    image: string;
    status: {
        value: string;
        label: string;
    };
    desc: string | null;
    long_dec: string | null;
    brand_name: string;
    composition: string;
    pack: string;
    slug: string;
    categories: Category[];
};

type ProductResponse = {
    success: boolean;
    data: Product;
    message: string;
};

type RelatedProductResponse = {
    success: boolean;
    data: Product[];
    message: string;
};

const ProductDetailPage = async ({ params }: { params: Params }) => {
    const { slug } = await params;

    let product: Product | null = null;
    let relatedProducts: Product[] = [];

    try {
        const [prodRes, relatedRes] = await Promise.all([
            fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${slug}`, {
                next: { revalidate: 3600 },
            }),
            fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/related/${slug}`, {
                next: { revalidate: 3600 },
            }),
        ]);

        if (!prodRes.ok) throw new Error('Failed to fetch product');

        const prodJson: ProductResponse = await prodRes.json();
        product = prodJson.data;

        if (relatedRes.ok) {
            const relatedJson: RelatedProductResponse = await relatedRes.json();
            relatedProducts = relatedJson.data;
        }
    } catch (error) {
        console.error('Error fetching product:', error);
        return notFound();
    }

    if (!product) return notFound();

    return (
        <div className='container mx-auto px-4 py-12 md:py-15'>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                <div className="md:col-span-3">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

                        {/* Product Image */}
                        <div>
                            <nav className="text-sm text-gray-600 mb-6">
                                <ol className="list-reset flex items-center space-x-2 text-lg">
                                    <li>
                                        <Link href="/" className="hover:underline text-[#212088]">Home</Link>
                                    </li>
                                    <RiArrowRightDoubleFill size={20} color='text-white' />
                                    <li>
                                        <Link href="/products" className="hover:underline text-[#212088]">Products</Link>
                                    </li>
                                    <RiArrowRightDoubleFill size={20} color='text-white' />
                                    <li className="text-gray-900 font-medium">{product.title}</li>
                                </ol>
                            </nav>
                            <div className="rounded-2xl bg-white shadow overflow-hidden">
                                <Image
                                    src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/${product.image}` || 'https://placehold.co/600x400.png?text=No+Image'}
                                    alt={product.title}
                                    width={800}
                                    height={800}
                                    className="w-full h-auto max-h-[500px] object-cover aspect-[1/1]"
                                />
                            </div>
                        </div>

                        {/* Product Info */}
                        <div>
                            <h1 className="text-3xl font-bold mb-3 text-[#19065f]">{product.title}</h1>
                            {/* <div className="text-2xl text-green-600 font-semibold mb-4">₹{product.price}</div> */}

                            {product.desc &&
                                <p className="mb-6 text-sm text-[#3C3C3C] md:text-[16px] font-medium leading-[1.8rem]">{product.desc}</p>
                            }

                            {/* Categories */}
                            {product.categories.length > 0 &&
                                <div className="mb-6">
                                    <h3 className="text-[#19065f] text-[18px] font-bold mt-4 mb-2">Categories:</h3>
                                    <div className="flex flex-wrap gap-2 mt-2">
                                        {product.categories.map((cat, index) => (
                                            <Link
                                                key={index}
                                                href={`/product-category/${cat.slug}`}
                                                className="text-sm bg-gray-100 hover:bg-gray-200 text-gray-800 px-3 py-1 rounded-full mr-2"
                                            >
                                                {cat.title}
                                            </Link>
                                        ))}


                                    </div>
                                </div>
                            }

                            {(product.brand_name || product.composition || product.pack) && (
                                <div className="mt-4">
                                    <h3 className="text-[#19065f] text-lg font-bold mb-2">Additional Info</h3>
                                    <div className="space-y-2 text-sm text-[#3C3C3C] md:text-base font-medium">
                                        {product.brand_name && (
                                            <p>
                                                <span className="text-[#19065f] font-semibold">Brand:</span> {product.brand_name}
                                            </p>
                                        )}
                                        {product.composition && (
                                            <p>
                                                <span className="text-[#19065f] font-semibold">Composition:</span> {product.composition}
                                            </p>
                                        )}
                                        {product.pack && (
                                            <p>
                                                <span className="text-[#19065f] font-semibold">Pack:</span> {product.pack}
                                            </p>
                                        )}
                                    </div>
                                    <div className="w-full h-px bg-gray-300 my-3"></div>
                                </div>
                            )}



                            <div className="mt-6 flex items-center justify-start gap-4">
                                
                                <SendEnquiry subject = {product.title} />
                            </div>
                        </div>
                    </div>

                    {/* Optional: Full Description */}
                    {product.long_dec && (
                        <div className="mt-12 space-y-4">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl text-[#212088] font-semibold capitalize leading-tight">
                                Product <span className="text-[#38A0A7]">Description</span>
                            </h2>
                            <div className="text-[#3C3C3C] text-sm md:text-base font-medium leading-relaxed" dangerouslySetInnerHTML={{ __html: product.long_dec }} />
                        </div>
                    )}

                    {/* Related Products */}
                    {relatedProducts.length > 0 && (
                        <div className="mt-16">
                            <h2 className='text-2xl md:text-3xl lg:text-4xl text-[#212088] font-semibold capitalize leading-12'>
                                Related <span className='text-[#38A0A7]'>Products</span>
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 mt-4">
                                {relatedProducts.map((product) => (
                                    <ProductCard key={product.id} product={product} />
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                <aside className="md:col-span-1">
                    <CategorySidebar />
                </aside>

            </div>
        </div>
    );
};

export default ProductDetailPage;
