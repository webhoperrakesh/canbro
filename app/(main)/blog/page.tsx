import React from 'react'
import Breadcrumbs from '@/components/Breadcrumbs'
import ClientLoadMore from './LoadMorePosts'
import { getMetaData } from '@/utils/getMetaData'
import { generateSeoMetadata } from "@/utils/generateSeoMetadata"
import { getAbsoluteUrl } from "@/utils/helper"

// export async function generateMetadata(): Promise<Metadata> {

//     const data = await getMetaData('blog','Page');
//     const seo = data.seo_meta;

//     return {
//         title: seo.seo_title || 'Default Title',
//         description: seo.seo_description || 'Default Description',
//         robots: seo.index === 'index' ? 'index,follow' : 'noindex,nofollow',
//     };
// }


export const generateMetadata = async () => {

  const data = await getMetaData('blog','Page');;
  const pageUrl = getAbsoluteUrl("/about-us");

  return generateSeoMetadata(data.seo_meta, pageUrl, "article");
};

export default async function Blogs() {

    try {
        const [postRes] = await Promise.allSettled([
            fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts?per_page=100`, {
                next: { revalidate: 3600 },
                headers: {
                    'Cache-Control': 'public, max-age=3600, stale-while-revalidate=7200',
                },
            })
        ]);

        if (postRes.status === 'rejected' || !postRes.value.ok) {
            console.error('Failed to fetch posts:', postRes.status === 'rejected' ? postRes.reason : postRes.value.statusText);
            throw new Error('Failed to load blog posts');
        }

        const postData = await postRes.value.json();
        const allPosts = postData.data || [];

        return (
            <>
                <Breadcrumbs title="Blog" bgImage="/images/slider-bg-1.png" />
                <section id="our-blogs-section">
                    <div className='container mx-auto px-4 py-12 md:py-15'>

                        {allPosts.length > 0 ? (
                            <ClientLoadMore allPosts={allPosts} />
                        ) : (
                            <div className='flex items-center justify-center'>
                                No blog posts found.
                            </div>
                        )}

                    </div>
                </section>
            </>
        );

    } catch (error) {
        console.log('Error loading blogs page:', error);
        return (
            <>
                <Breadcrumbs title="Blogs" bgImage="" />
                <div className="container mx-auto px-4 md:px-6 py-12">
                    <div className="text-center">
                        <h1 className="text-2xl font-bold text-gray-800 mb-4">Unable to load blog posts</h1>
                        <p className="text-gray-600">Please try again later.</p>
                    </div>
                </div>
            </>
        );
    }
}