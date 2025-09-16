import React from 'react';
import Link from 'next/link';
import { RiArrowRightDoubleFill } from "react-icons/ri";
import { CategorySidebar } from '@/components/CategorySidebar';
import { notFound } from 'next/navigation';
import { getMetaData } from '@/utils/getMetaData';
import SendEnquiry from '@/components/SendEnquiry';
import ProductImage from '../ProductImage';
import RelatedProducts from '@/components/RelatedProducts';
import { generateSeoMetadata } from "@/utils/generateSeoMetadata"
import { getAbsoluteUrl } from "@/utils/helper"
import Breadcrumbs from '@/components/Breadcrumbs';

type Params = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: Params }) {
  const { slug } = await params;

  const data = await getMetaData(slug,'Product');
  const pageUrl = getAbsoluteUrl(`/product/${slug}`);

  return generateSeoMetadata(data.seo_meta || {}, pageUrl, "article");
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
    visual_aids_image: string;
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

    // let product: Product | null = null;
    // let relatedProducts: Product[] = [];

    // try {
    //     const [prodRes, relatedRes] = await Promise.all([
    //         fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${slug}`, {
    //             next: { revalidate: 600 },
    //         }),
    //         fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/related/${slug}`, {
    //             next: { revalidate: 600 },
    //         }),
    //     ]);

    //     if (!prodRes.ok) throw new Error('Failed to fetch product');

    //     const prodJson: ProductResponse = await prodRes.json();
    //     product = prodJson.data;

    //     if (relatedRes.ok) {
    //         const relatedJson: RelatedProductResponse = await relatedRes.json();
    //         relatedProducts = relatedJson.data;
    //     }
    // } catch (error) {
    //     console.error('Error fetching product:', error);
    //     return notFound();
    // }

    // if (!product) return notFound();

    const prodRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${slug}`, {
        next: { revalidate: 600 },
    });

    if (!prodRes.ok) return notFound();

    const prodJson: ProductResponse = await prodRes.json();
    const product = prodJson.data;

    return (
<>

      <Breadcrumbs title={`${product.title}`} bgImage="/images/slider-bg-1.png" />

        <div className='container mx-auto px-4 py-12 md:py-15'>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                <div className="md:col-span-3">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

                        {/* Product Image */}
                        <div>
                            {/* <nav className="text-sm text-gray-600 mb-6">
                                <ol className="list-reset flex items-center space-x-2 text-sm md:text-lg">
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
                            </nav> */}
                            {/* <div className="rounded-2xl bg-white shadow overflow-hidden"> */}
                            {/* <Image
                                    src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/${product.image}` || 'https://placehold.co/600x400.png?text=No+Image'}
                                    alt={product.title}
                                    width={800}
                                    height={800}
                                    className="w-full h-auto max-h-[500px] object-cover aspect-[1/1]"
                                /> */}
                            <ProductImage mainImage={product.image} productTitle={product.title} visualAidImage={product.visual_aids_image} />

                            {/* </div> */}
                        </div>

                        {/* Product Info */}
                        <div>
                            <h2 className="text-3xl font-bold mb-3 text-[#19065f]">{product.title}</h2>
                            {/* <div className="text-2xl text-green-600 font-semibold mb-4">₹{product.price}</div> */}

                            {product.desc &&
                                <p className="mb-6 text-sm text-[#3C3C3C] md:text-[16px] font-normal leading-[1.8rem]">{product.desc}</p>
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

                                <SendEnquiry subject={product.title} />
                            </div>
                        </div>
                    </div>

                    {/* Optional: Full Description */}
                    {product.long_dec && (
                        <div className="mt-12 space-y-4">
                            <h2 className="text-2xl md:text-3xl lg:text-[45px] text-[#212088] font-semibold capitalize leading-tight">
                                Product <span className="text-[#38A0A7]">Description</span>
                            </h2>
                            <div className="text-[#3C3C3C] text-sm md:text-[16px] lg:font-[16px] font-normal leading-relaxed product-description" dangerouslySetInnerHTML={{ __html: product.long_dec }} />
                        </div>
                    )}

                    {/* Related Products */}
                    <RelatedProducts slug={slug} />
                </div>

                <aside className="md:col-span-1 lg:sticky lg:top-40 lg:h-[calc(100vh-4rem)] lg:overflow-y-auto hide-scroll">
                    <CategorySidebar />
                </aside>

            </div>
        </div>
        </>
    );
};

export default ProductDetailPage;
