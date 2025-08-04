import React from 'react'
import Image from 'next/image';
import Link from 'next/link';


type Post = {
  id: number;
  name: string;
  image: string,
  slug: string,
  readMoreLink: string
};

type PostCardProps = {
  post: Post
}

const BlogCard = ({ post }: PostCardProps) => {
  return (
    <article
      key={post.id}
      className="bg-white rounded-2xl overflow-hidden"
    >
      {/* Blog Image */}
      <div className="relative h-48 sm:h-52 lg:h-60 overflow-hidden">
        <Image
          src={post.image || "https://placehold.co/600x400.png?text=No+Image"}
          alt={post.name}
          fill
          className="object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Blog Content */}
      <div className="py-4">
        <h3 className="text-lg sm:text-lg font-semibold text-[#333333] mb-4 leading-tight line-clamp-2">{post.name}</h3>
        <Link
          href={`/blog/${post.slug}`}
          className="inline-flex items-center underline text-[#212088] hover:cursor-pointer font-medium transition-colors duration-200"
        >
          Read More...
        </Link>
      </div>
    </article>
  )
}

export default BlogCard