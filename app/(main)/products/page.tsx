import Breadcrumbs from '@/components/Breadcrumbs';
import { CategorySidebar } from '@/components/CategorySidebar';
import { getMetaData } from '@/utils/getMetaData';
import { getAbsoluteUrl } from "@/utils/helper";
import { generateSeoMetadata } from "@/utils/generateSeoMetadata";
import dynamic from 'next/dynamic';

export const generateMetadata = async () => {
  const data = await getMetaData('products', 'Page');
  const pageUrl = getAbsoluteUrl("/products");

  return generateSeoMetadata(data.seo_meta, pageUrl, "article");
};

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

const ProductCard = dynamic(() => import("@/components/ProductCard"))

export default async function ProductsPage() {

  let products: Product[] = [];

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`, {
      next: { revalidate: 600 },
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
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar with categories */}
          <aside className="md:col-span-1 lg:sticky lg:top-40 lg:h-[calc(100vh-4rem)] lg:overflow-y-auto hide-scroll">
            <CategorySidebar />
          </aside>

          {/* Product Grid */}
          <div className="md:col-span-3">

            <div className="flex items-center">
              <span className="text-md text-gray-600 mb-6">
                {products.length} {products.length === 1 ? 'Product' : 'Products'} Available
              </span>
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
