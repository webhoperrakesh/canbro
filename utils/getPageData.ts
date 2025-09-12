import { notFound } from "next/navigation";

export type PageData = {
  id: number;
  name: string;
  content: string | TrustedHTML;
  description: string;
  image: string | null;
};

export type SeoMeta = {
  seo_title: string;
  seo_description: string;
  index: "index" | "noindex";
};

export type CustomFieldItem = {
  field_item_id: number;
  type: string;
  slug: string;
  value: string;
};

export type RepeaterField = CustomFieldItem[];

export type CustomFields = {
  id: number;
  use_for: string;
  use_for_id: number;
  field_item_id: number;
  type: string;
  slug: string;
  value: string;
};

export type ApiResponse = {
  pageData: PageData[];
  customFields: any;
  meta: {
    seo_meta: SeoMeta;
  };
};


export async function getPageData(slug: string): Promise<ApiResponse> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/page/${slug}`, {
   next: { revalidate: 600 },
  });

  if (!res.ok) {
    notFound();
    // throw new Error('Failed to fetch page data');
  }

  return res.json();
}