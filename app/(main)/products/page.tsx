import { products } from '@/fakeData/productsFakeData'
import Breadcrumbs from '@/components/Breadcrumbs';
import ProductCard from '@/components/ProductCard';
import { CategorySidebar } from '@/components/CategorySidebar';

export default function ProductsPage() {
    return (
        <>
            <Breadcrumbs title="Products" bgImage="/images/slider-bg-1.png" />
            <div className='container mx-auto px-4 py-12 md:py-15'>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Sidebar with categories */}
                <aside className="md:col-span-1">
                    <CategorySidebar />
                </aside>

                {/* Product Grid */}
                <div className="md:col-span-3">
                    
                    <div className="flex items-center">
                            <span className="text-sm text-gray-600 mb-6">{products.length} Products Available</span>
                        </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
                        {products.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </div>
            </div>
        </>
    );
}
