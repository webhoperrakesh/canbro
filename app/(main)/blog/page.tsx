import React from 'react'
import Breadcrumbs from '@/components/Breadcrumbs'
import ClientLoadMore from './LoadMorePosts'
import { getMetaData } from '@/utils/getMetaData'
import { generateSeoMetadata } from "@/utils/generateSeoMetadata"
import { getAbsoluteUrl } from "@/utils/helper"
import Sidebar from '@/components/Sidebar'


export const generateMetadata = async () => {

  const data = await getMetaData('blog','Page');;
  const pageUrl = getAbsoluteUrl("/blog");

  return generateSeoMetadata(data.seo_meta, pageUrl, "article");
};

export default async function Blogs() {

    try {
        const [postRes] = await Promise.allSettled([
            fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`, {
                next: { revalidate: 600 },
                headers: {
                    'Cache-Control': 'public, max-age=600, stale-while-revalidate=7200',
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
                        <div className="mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
                       
                       <div className="lg:col-span-2">
                        {allPosts.length > 0 ? (
                            <ClientLoadMore allPosts={allPosts} />
                        ) : (
                            <div className='flex items-center justify-center'>
                                No blog posts found.
                            </div>
                        )}
                        </div>
                        <Sidebar />
                    </div>
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