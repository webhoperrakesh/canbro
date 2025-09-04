export type SeoMeta = {
  seo_title: string;
  seo_description: string;
  index: "index" | "noindex";
};

export type ApiResponse = {
    seo_meta: SeoMeta;
};


export async function getMetaData(slug: string, type: string): Promise<ApiResponse> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/metadata/${slug}?reference_type=${type}`, {
   next: { revalidate: 600 },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch page data');
  }

  return res.json();
}