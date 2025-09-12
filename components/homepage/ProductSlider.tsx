import ProductSliderClient from "../ProductSliderClient"

type Product = {
  id: number;
  title: string;
  image: string;
  slug: string;
  desc: string;
  composition: string;
};

type ProductResponse = {
  success: boolean;
  data: Product[];
  showText?: boolean;
  message: string;
};

export default async function ProductSlider( {showText = true} ) {

  let products: Product[] = [];

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/featured-products`, {
      next: { revalidate: 600 },
    });

    if (!res.ok) throw new Error('Failed to fetch products');
    
    const json: ProductResponse = await res.json();
    products = json.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    products = [];
  }

  if(products.length === 0) return null;

  return (
    <section id="feature-products" className="lg:mb-16">
      <div className="container mx-auto px-4 py-8 md:py-12 lg:py-16">
        {/* Title */}
        <div className="text-center mb-8">
         <h2 className='text-2xl md:text-3xl lg:text-[45px] text-[#212088] font-semibold capitalize mb-6 leading-12 text-center'>
            Our Featured<span className='text-[#38A0A7]'> Products</span>
          </h2>
        </div>

        {/* Slider Container */}
        <ProductSliderClient products = {products} showText={showText} />
      </div>
    </section>
  )
}
