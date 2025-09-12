import VisualAidsClientSection from "../VisualAidsClientSection";

type Product = {
  id: number;
  title: string;
  image: string;
  visual_aids_image: string;
  composition: string;
  long_dec: string | TrustedHTML;
  slug: string;
};

type ProductResponse = {
  success: boolean;
  data: Product[];
  message: string;
};

export default async function AmplurCVSlider() {

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

  const productsWithVisualAids = products.filter(
  (p) => p.visual_aids_image
).slice(0, 4);

  return (
    <section id='visual-aids'>
      <div className='container mx-auto px-4 py-12 md:py-15'>
        {/* Header Badge */}
        <div className="text-center">
          <p className="inline-block text-sm lg:font-[16px] font-medium text-white uppercase bg-[#38A0A7] rounded-full py-2 px-4 mb-6">
            our visual aids
          </p>
        </div>

        {/* Main Title */}
        <div className="text-center mb-10">
          <h2 className='text-2xl md:text-3xl lg:text-[45px] font-semibold text-[#38A0A7] capitalize'>
            <span className="text-[#212088]">Visual Learning, </span>Real Impact
          </h2>
        </div>

        {/* Slider Container */}
        <VisualAidsClientSection slidesData = {productsWithVisualAids} />
      </div>
    </section>
  );
}