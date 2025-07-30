import React from 'react'
import { categories, products } from '@/fakeData/productsFakeData'
import Breadcrumbs from '@/components/Breadcrumbs'
import ProductCard from '@/components/ProductCard'
import { CategorySidebar } from '@/components/CategorySidebar'

type Params = Promise<{ slug: string }>

const ProductCategoryPage = async ({ params }: { params: Params }) => {

    const { slug } = await params

    if (!slug || typeof slug !== 'string') return <div>Loading...</div>;

    const category = categories.find((cat) => cat.slug === slug);
    const categoryProducts = products.filter((product) =>
        product.categorySlugs.includes(slug)
    );

    if (!category) return <div>Category not found</div>;

    return (
        <>
            <Breadcrumbs title={category.name} bgImage="/images/slider-bg-1.png" />

            <div className='container mx-auto px-4 py-12 md:py-15'>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">


                    {/* Sidebar with categories */}
                    <aside className="md:col-span-1">
                        <CategorySidebar />
                    </aside>

                    <div className="md:col-span-3">
                        {/* <h1 className="text-3xl font-bold mb-2">{category.name}</h1> */}
                        <div className="flex items-center">
                            {/* <div className="h-1 w-16 bg-teal-500 rounded-full"></div> */}
                            <span className="text-sm text-gray-600 mb-6">{categoryProducts.length} Products Available</span>
                        </div>
                        {categoryProducts.length > 0 ? (
                            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                                {categoryProducts.map((product) => (
                                    <ProductCard key={product.id} product={product} />
                                ))}
                            </div>
                        ) : (
                            <p>No products found in this category.</p>
                        )}

                       {categoryProducts.length > 0 &&
                        <div
                            className="custom-font-style mt-5"
                            dangerouslySetInnerHTML={{ __html: category.description }}
                        />
                       }

                    </div>

                </div>
            </div>
        </>
    )
}

export default ProductCategoryPage