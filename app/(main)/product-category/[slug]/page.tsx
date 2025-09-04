import React from 'react'
import Breadcrumbs from '@/components/Breadcrumbs'
import { CategorySidebar } from '@/components/CategorySidebar'
import { notFound } from 'next/navigation'
import { getMetaData } from '@/utils/getMetaData'
import { generateSeoMetadata } from "@/utils/generateSeoMetadata"
import { getAbsoluteUrl } from "@/utils/helper"
import dynamic from 'next/dynamic';

type Params = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: Params }) {
  const { slug } = await params;

  const data = await getMetaData(slug,'Category');
  const pageUrl = getAbsoluteUrl(`/product-category/${slug}`);

  return generateSeoMetadata(data.seo_meta || {}, pageUrl, "article");
}

type Category = {
  id: number;
  title: string;
  desc: string | TrustedHTML;
  short_desc: string | null;
  image: string | null;
  status: 'published' | 'draft' | string;
  slug: string;
};

type ProductCategory = {
  id: number;
  title: string;
  slug: string;
};

type Product = {
  id: number;
  title: string;
  slug: string;
  price?: number;
  image: string | null;
  short_description?: string;
  status: {
    value: string;
    label: string;
  };
  categories: ProductCategory[];
};

type CategoryResponse = {
  success: boolean;
  data: Category;
  message: string;
};

type ProductResponse = {
  success: boolean;
  data: Product[];
  message: string;
};

const ProductCard = dynamic(() => import("@/components/ProductCard"))

const ProductCategoryPage = async ({ params }: { params: Params }) => {

  const { slug } = await params

  let category: Category | null = null;
  let products: Product[] = [];

  try {
    const [catRes, prodRes] = await Promise.all([
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/product-category/${slug}`, {
        next: { revalidate: 600 },
      }),
      fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/category/${slug}`, {
        next: { revalidate: 600 },
      }),
    ]);

    if (!catRes.ok) throw new Error('Failed to fetch category');

    const catJson: CategoryResponse = await catRes.json();
    const prodJson: ProductResponse = await prodRes.json();

    category = catJson.data;
    products = prodJson.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return notFound();
  }

  if (!category) return notFound();

    return (
        <>
            <Breadcrumbs title={category.title} bgImage="/images/slider-bg-1.png" />

            <div className='container mx-auto px-4 py-12 md:py-15'>
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">


                    {/* Sidebar with categories */}
                    <aside className="md:col-span-1 lg:sticky lg:top-40 lg:h-[calc(100vh-4rem)] lg:overflow-y-auto hide-scroll">
                        <CategorySidebar />
                    </aside>

                    <div className="md:col-span-3">
                        {/* <h1 className="text-3xl font-bold mb-2">{category.name}</h1> */}
                        <div className="flex items-center">
                            {/* <div className="h-1 w-16 bg-teal-500 rounded-full"></div> */}
                            <span className="text-sm text-gray-600 mb-6">{products.length} Products Available</span>
                        </div>
                        {products.length > 0 ? (
                            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                                {products.map((product) => (
                                    <ProductCard key={product.id} product={product} />
                                ))}
                            </div>
                        ) : (
                            <p>No products found in this category.</p>
                        )}

                        {products.length > 0 &&
                            <div
                                className="custom-font-style mt-5"
                                dangerouslySetInnerHTML={{ __html: category.desc }}
                            />
                        }

                    </div>

                </div>
            </div>
        </>
    )
}

export default ProductCategoryPage