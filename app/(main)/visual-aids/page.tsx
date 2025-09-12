import VisualAidsClient from "./VisualAidsClient"
import Breadcrumbs from "@/components/Breadcrumbs"
import { generateSeoMetadata } from "@/utils/generateSeoMetadata"
import { getAbsoluteUrl } from "@/utils/helper"

export const generateMetadata = async () => {

  const defaultSeo = {
    seo_title: "Visual Aids | Canbro",
    seo_description:
      "visual aids seo description",
  };
  const pageUrl = getAbsoluteUrl("/contact");

  return generateSeoMetadata(defaultSeo, pageUrl, "article");
};

type Product = {
    id: number;
    title: string;
    visual_aids_image: string;
};

type ProductResponse = {
    success: boolean;
    data: Product[];
    message: string;
};

export default async function VisualAidsPage() {

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

    const seenImages = new Set<string>();
    const productsWithVisualAids = products.filter((p) => {
        if (!p.visual_aids_image) return false; // skip empty
        if (seenImages.has(p.visual_aids_image)) return false; // skip duplicates
        seenImages.add(p.visual_aids_image);
        return true;
    });


    return (
        <>
            <Breadcrumbs title="Visual Aids Gallery" bgImage="/images/slider-bg-1.png" />

            {productsWithVisualAids.length > 0 && <VisualAidsClient galleryImages={productsWithVisualAids} />}
        </>


    )
}
