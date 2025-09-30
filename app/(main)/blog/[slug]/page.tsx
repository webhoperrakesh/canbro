import React from 'react'
import Image from 'next/image'
import Breadcrumbs from '@/components/Breadcrumbs'
import { getMetaData } from '@/utils/getMetaData'
import { notFound } from 'next/navigation'
import { getAbsoluteUrl } from "@/utils/helper";
import { generateSeoMetadata } from "@/utils/generateSeoMetadata";
import RelatedPosts from '@/components/RelatedPosts'
import { generateToc } from '@/utils/generateToc'
import parse from 'html-react-parser';

type Params = Promise<{ slug: string }>;

export async function generateMetadata({ params }: { params: Params }) {
  const { slug } = await params;

  const data = await getMetaData(slug,'Post');
  const pageUrl = getAbsoluteUrl(`/blog/${slug}`);

  return generateSeoMetadata(data.seo_meta || {}, pageUrl, "article");
}

const Page = async ({ params }: { params: Params }) => {
  const { slug } = await params;

  try {
    // Fetch single post
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/posts/${slug}`,
      {
        next: { revalidate: 300 }, // Cache for 5 minutes
        headers: {
          "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600",
        },
      }
    );

    if (!res.ok) {
      console.error("Failed to fetch post data:", res.statusText);
      notFound();
    }

    const data = await res.json();
    const post = data.data;
    const ContentWithToc = generateToc(post.content);

    const catRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/product-categories`, {
    next: { revalidate: 600 },
  })

  const { data: categories = [] } = await catRes.json()
    return (
      <>
        <Breadcrumbs title={post.name} bgImage="/images/slider-bg-1.png" />
        <div className="container mx-auto px-4 py-12 md:py-15">
          <div className="mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Main Post */}
            <div className="lg:col-span-2">
              {post.image && (
                <Image
                  src={post.image || 'https://placehold.co/400x900?text=No+Image'}
                  alt={post.name}
                  width={800}
                  height={400}
                  priority
                  className="w-full h-100 mb-6 rounded-xl object-cover shadow"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              )}

              <div
                className="mb-6 text-sm text-[#3C3C3C] md:text-[16px] font-normal leading-[1.8rem] prose prose-lg max-w-none custom-font-style">
                  {parse(ContentWithToc)}
                </div>
            
            </div>

            <RelatedPosts post = {post} productscat ={categories} />
          </div>
        </div>
      </>
    )

  } catch (error) {
    console.error('Error loading blog post:', error);
    notFound();
  }
}

export default Page
