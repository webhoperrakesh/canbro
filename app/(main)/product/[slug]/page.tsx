import React from 'react';
import { products, categories } from '@/fakeData/productsFakeData';
import Link from 'next/link';
import ProductCard from '@/components/ProductCard'
import Image from 'next/image';
import { RiArrowRightDoubleFill } from "react-icons/ri";
import { CategorySidebar } from '@/components/CategorySidebar';

type Params = Promise<{ slug: string }>;

const ProductDetailPage = async ({ params }: { params: Params }) => {
    const { slug } = await params;

    const product = products.find((p) => p.slug === slug);

    if (!product) {
        return <div className="p-8 text-center text-red-500">Product not found</div>;
    }

    const productCategories = categories.filter((cat) =>
        product.categorySlugs.includes(cat.slug)
    );

    const relatedProducts = products.filter(
        (p) =>
            p.id !== product.id &&
            p.categorySlugs.some((slug) => product.categorySlugs.includes(slug))
    ).slice(0, 3);

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
                                        <Link href="/" className="hover:underline text-blue-600">Home</Link>
                                    </li>
                                    <RiArrowRightDoubleFill size={20} color='text-white' />
                                    <li>
                                        <Link href="/products" className="hover:underline text-blue-600">Products</Link>
                                    </li>
                                    <RiArrowRightDoubleFill size={20} color='text-white' />
                                    <li className="text-gray-900 font-medium">{product.name}</li>
                                </ol>
                            </nav>
                            <div className="rounded-lg bg-white shadow overflow-hidden">
                                <Image
                                    src={product.imageUrl}
                                    alt={product.name}
                                    width={800}
                                    height={800}
                                    className="w-full h-auto max-h-[500px] object-cover"
                                />
                            </div>
                        </div>

                        {/* Product Info */}
                        <div>
                            <h1 className="text-3xl font-bold mb-3 text-[#19065f]">{product.name}</h1>
                            {/* <div className="text-2xl text-green-600 font-semibold mb-4">₹{product.price}</div> */}

                            <p className="mb-6 text-sm text-[#3C3C3C] md:text-[16px] font-medium leading-[1.8rem]">{product.description}</p>

                            {/* Categories */}
                            <div className="mb-6">
                                <h2 className="font-semibold text-sm text-gray-600 mb-1">Categories:</h2>
                                <div className="flex flex-wrap gap-2">
                                    {productCategories.map((cat) => (
                                        <Link
                                            key={cat.id}
                                            href={`/product-category/${cat.slug}`}
                                            className="text-sm bg-gray-100 hover:bg-gray-200 text-gray-800 px-3 py-1 rounded-full"
                                        >
                                            {cat.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h3 className="text-lg font-semibold mt-4 mb-2">Additional Info:</h3>
                                <ul className="space-y-1">
                                    {product.additioninfo.map((info, index) => (
                                        <li key={index} className="py-1 mb-2">
                                            <p><strong className='text-[#19065f] text-[18px] font-bold'>Brand:</strong> {info.brandName}</p>
                                            <p><strong className='text-[#19065f] text-[18px] font-bold'>Composition:</strong> {info.composition}</p>
                                            <p><strong className='text-[#19065f] text-[18px] font-bold'>Pack:</strong> {info.pack}</p>
                                        </li>
                                    ))}
                                </ul>
                                <div className="w-full h-[1px] bg-gray-300 mb-3"></div>
                            </div>

                            <div className="mt-6 flex items-center justify-start gap-4">
                                <Link href="/products" className="text-blue-500 hover:underline text-sm">
                                    ← Back to Products
                                </Link>
                                <button className="inline-block text-sm md:text-[16px] bg-orange-500 hover:bg-orange-600 text-white rounded-full px-10 py-3 transition-all duration-300 hover:scale-105 hover:cursor-pointer">
                                    Send An Enquiry
                                </button>
                            </div>
                        </div>
                    </div>
                    {/* Optional: Full Description */}
                    <div className="mt-12">
                        <h2 className='text-2xl md:text-3xl lg:text-4xl text-[#212088] font-semibold capitalize leading-12'>
                            Product <span className='text-[#38A0A7]'>Description</span>
                        </h2>
                        <p className="text-sm text-[#3C3C3C] md:text-[16px] font-medium leading-[1.8rem]">{product.description}</p>
                    </div>

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
