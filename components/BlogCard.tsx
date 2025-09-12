import React from 'react'
import Image from 'next/image';
import Link from 'next/link';


type Post = {
  id: number;
  name: string;
  image: string,
  slug: string,
};

type PostCardProps = {
  post: Post
}

const BlogCard = ({ post }: PostCardProps) => {
  return (
    <article
      key={post.id}
      className="bg-white overflow-hidden"
    >
      {/* Blog Image */}
      <div className="relative h-60 lg:h-70 overflow-hidden rounded-2xl">
        <Image
          src={post.image || "https://placehold.co/600x400.png?text=No+Image"}
          alt={post.name}
          fill
          className="object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Blog Content */}
      <div className="py-4">
        <h3 className="text-lg sm:text-lg lg:text-[24px] font-semibold text-[#333333] mb-4 leading-tight line-clamp-2">{post.name}</h3>
        <Link
          href={`/blog/${post.slug}`}
          className="text-lg sm:text-lg lg:text-[18px] inline-flex items-center text-[#3A3276] hover:cursor-pointer font-medium transition-colors duration-200"
        >
          Read More...
        </Link>
        <hr className="w-[110px] border-t-2 border-[#3A3276]" />
      </div>
    </article>
  )
}

export default BlogCard