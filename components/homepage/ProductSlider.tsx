import ProductSliderClient from "../ProductSliderClient"

const products = [
  {
    id: 1,
    name: "ALFUCAN-D ER",
    subtitle: "Alfuzosin Extended-release & Dutasteride Tablets",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    mainImage: "/images/product-2.png",
    color: "bg-orange-500",
  },
  {
    id: 2,
    name: "CARDIO-PLUS",
    subtitle: "Advanced Cardiovascular Support Formula",
    description:
      "A comprehensive cardiovascular support supplement designed to promote heart health and circulation. Formulated with clinically studied ingredients to support optimal cardiovascular function and overall wellness for active individuals.",
    mainImage: "/images/product-3.png",
    color: "bg-blue-600",
  },
  {
    id: 3,
    name: "IMMUNO-BOOST",
    subtitle: "Natural Immune System Enhancement",
    description:
      "Strengthen your body's natural defenses with our advanced immune support formula. Contains essential vitamins, minerals, and herbal extracts that work synergistically to support immune function and overall health.",
    mainImage: "/images/product-4.png",
    color: "bg-green-600",
  },
]

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
  message: string;
};

export default async function ProductSlider() {

  let products: Product[] = [];

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/featured-products`, {
      next: { revalidate: 3600 },
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
         <h2 className='text-2xl md:text-3xl lg:text-4xl text-[#212088] font-semibold capitalize mb-4 leading-12 text-center'>
            Our <span className='text-[#38A0A7]'>Featured Products</span>
          </h2>
        </div>

        {/* Slider Container */}
        <ProductSliderClient products = {products} />
      </div>
    </section>
  )
}
