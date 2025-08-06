import Breadcrumbs from '@/components/Breadcrumbs';
import ProductCard from '@/components/ProductCard';
import { CategorySidebar } from '@/components/CategorySidebar';
import { Metadata } from 'next';
import { getMetaData } from '@/utils/getMetaData';

export async function generateMetadata(): Promise<Metadata> {

  const data = await getMetaData('products', 'Page');
  const seo = data.seo_meta;

  return {
    title: seo.seo_title || 'Default Title',
    description: seo.seo_description || 'Default Description',
    robots: seo.index === 'index' ? 'index,follow' : 'noindex,nofollow',
  };
}

type Product = {
  id: number;
  title: string;
  image: string;
  slug: string;
};

type ProductResponse = {
  success: boolean;
  data: Product[];
  message: string;
};

export default async function ProductsPage() {

  let products: Product[] = [];

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`, {
      next: { revalidate: 3600 },
    });

    if (!res.ok) throw new Error('Failed to fetch products');

    const json: ProductResponse = await res.json();
    products = json.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    products = [];
  }
  
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

            {products.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
                {products.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <p>No products found.</p>
            )}

          </div>
        </div>
      </div>
    </>
  );
}
