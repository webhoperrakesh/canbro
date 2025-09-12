'use client';

import { useState } from 'react';
import BlogCard from '@/components/BlogCard'

type Post = {
    id: number;
    name: string;
    image: string,
    slug: string,
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
                {visiblePosts.map((post: Post) => (
                    <BlogCard key={post.id} post={post} />
                ))}
            </div>
            {canLoadMore && (
                <div className='flex align-middle justify-center'>
                    <button
                        onClick={handleLoadMore}
                        disabled={isLoading}
                        className={`mt-8 inline-block text-sm md:text-[16px] ${isLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-orange-500 hover:bg-orange-600'} text-white rounded-full px-10 py-3 transition-all duration-300 hover:cursor-pointer hover:scale-105 disabled:cursor-not-allowed`}
                    >
                        {isLoading ? 'Loading...' : 'Load More'}
                    </button>
                </div>
            )}
        </>

    )
}

export default ClientLoadMore