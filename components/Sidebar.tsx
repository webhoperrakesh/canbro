import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

type Post = {
    id: number;
    title: string;
    image: string,
    slug: string,
    readMoreLink: string
};

const Sidebar = ({ latestPosts }: { latestPosts: Post[] }) => {

    return (
        <aside className="border-l pl-6 border-[#022169]">
            <h2 className="text-xl font-semibold mb-4">Latest Posts</h2>
            <ul className="space-y-4">
                {latestPosts.map((item: Post) => (
                    <li key={item.id}>
                        <Link href={`/blogs/${item.slug}`} className="block group">
                            <div className="flex gap-4 items-center">
                                    <Image
                                        src={item.image || 'https://placehold.co/64x64.png?text=No+Image'}
                                        alt={item.title || 'Blog post'}
                                        width={80}
                                        height={80}
                                        className="w-20 h-20 rounded-lg object-cover"
                                        sizes="80px"
                                        loading="lazy"
                                    />
                                <div>
                                    <h3 className="text-sm text-[#19065f] font-medium line-clamp-2 transition-colors">
                                        {item.title || ''}
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