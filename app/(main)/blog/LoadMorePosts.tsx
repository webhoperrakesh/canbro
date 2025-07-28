'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

type Post = {
    id: number;
    title: string;
    image: string,
    slug: string,
    readMoreLink: string
};

const ClientLoadMore = ({ allPosts }: { allPosts: Post[] }) => {


    const CHUNK = 6;

    const [visibleCount, setVisibleCount] = useState(CHUNK);
    const [isLoading, setIsLoading] = useState(false);

    const visiblePosts = allPosts.slice(0, visibleCount);
    const canLoadMore = visibleCount < allPosts.length;

    const handleLoadMore = () => {
        setIsLoading(true);
        // Simulate loading delay
        setTimeout(() => {
            setVisibleCount((prev) => prev + CHUNK);
            setIsLoading(false);
        }, 500);
    };


    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
                {visiblePosts.map((post: any) => (
                    <article
                        key={post.id}
                        className="bg-white rounded-lg overflow-hidden"
                    >
                        {/* Blog Image */}
                        <div className="relative h-48 sm:h-52 lg:h-60 overflow-hidden">
                            <Image
                                src={post.image || 'https://placehold.co/600x400.png?text=No+Image'}
                                alt={post.title || 'Blog post'}
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-300"
                                loading="lazy"
                            />
                        </div>

                        {/* Blog Content */}
                        <div className="py-4">
                            <h3 className="text-lg sm:text-lg font-semibold text-[#333333] mb-4 leading-tight line-clamp-2">{post.title}</h3>
                            <Link
                                href={post.readMoreLink}
                                className="inline-flex items-center underline text-[#212088] hover:cursor-pointer font-medium transition-colors duration-200"
                            >
                                Read More...
                            </Link>
                        </div>
                    </article>
                ))}
            </div>
            {canLoadMore && (
                <div className='flex align-middle justify-center'>
                    <button
                        onClick={handleLoadMore}
                        disabled={isLoading}
                        className="mt-8 inline-block text-sm md:text-[16px] bg-orange-500 hover:bg-orange-600 text-white rounded-full px-10 py-3 transition-all duration-300 hover:cursor-pointer hover:scale-105 disabled:cursor-not-allowed"
                    >
                        {isLoading ? 'Loading...' : 'Load More'}
                    </button>
                </div>
            )}
        </>

    )
}

export default ClientLoadMore