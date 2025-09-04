import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

type Post = {
    id: number;
    name: string;
    image: string,
    slug: string
};

const Sidebar = ({ latestPosts }: { latestPosts: Post[] }) => {

    return (
        <aside className="lg:border-l lg:pl-6 lg:border-[#022169]">
            <h2 className="text-xl mb-4 lg:text-[16px] xl:text-lg font-normal text-[#212088]">Latest Posts</h2>
            <ul className="space-y-4">
                {latestPosts.map((item: Post) => (
                    <li key={item.id}>
                        <Link href={`/blog/${item.slug}`} className="block group">
                            <div className="flex gap-4 items-center">
                                    <Image
                                        src={item.image || 'https://placehold.co/64x64.png?text=No+Image'}
                                        alt={item.name || 'Blog post'}
                                        width={80}
                                        height={80}
                                        className="w-20 h-20 rounded-lg object-cover"
                                        sizes="80px"
                                        loading="lazy"
                                    />
                                <div>
                                    <h3 className="text-sm lg:text-[16px] text-[#3C3C3C] font-normal line-clamp-2 transition-colors hover:text-[#212088]">
                                        {item.name ?? ''}
                                    </h3>
                                </div>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </aside>
    );
}

export default Sidebar