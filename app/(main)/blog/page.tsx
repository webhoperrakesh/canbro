import React from 'react'
import Breadcrumbs from '@/components/Breadcrumbs'
import ClientLoadMore from './LoadMorePosts'
import { blogPosts } from '@/fakeData/blogData'

const Blogs = () => {
    return (
        <>
            <Breadcrumbs title="Blog" bgImage="/images/slider-bg-1.png" />
            <section id="our-blogs-section">
                <div className='container mx-auto px-4 py-12 md:py-15'>

                    {blogPosts.length > 0 ? (
                        <ClientLoadMore allPosts={blogPosts} />
                    ) : (
                        <div className='flex items-center justify-center'>
                            No blog posts found.
                        </div>
                    )}


                </div>
            </section>
        </>
    )
}

export default Blogs