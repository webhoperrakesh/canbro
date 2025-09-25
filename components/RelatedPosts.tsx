"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";


type Category = {
  id: number
  title: string
  slug: string
}

type Post = {
  id: number;
  name: string;
  slug: string;
  image?: string;
  categories?: { id: number; name: string; slug: string }[];
};

type RelatedPostsProps = {
  post: Post;
  productscat?: Category[];
};


export default function RelatedPosts({
  post,
  productscat = [],
}: RelatedPostsProps) {
  const [relatedPosts, setRelatedPosts] = useState<Post[]>([]);

  useEffect(() => {
    async function fetchRelated() {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`);
        if (!res.ok) return;

        const data = await res.json();
        const allPosts: Post[] = data.data || [];

        const categorySlugs = post.categories?.map((c) => c.slug) || [];

        const related = allPosts
          .filter((p) => p.id !== post.id)
          .filter((p) => {
            const postCats = p.categories?.map((c) => c.slug) || [];
            return postCats.some((c) => categorySlugs.includes(c));
          })
          .slice(0, 3);

        setRelatedPosts(related);
      } catch (err) {
        console.error("Failed to fetch related posts:", err);
      }
    }

    if (post) fetchRelated();
  }, [post]);

//   if (relatedPosts.length === 0) return null;

  return (
   <aside className="lg:border-l lg:pl-6 lg:border-[#022169]">
      <div className="flex items-center justify-between cursor-pointer p-4 bg-[#19065f] text-white mb-4">
        <h2 className="lg:text-[16px] xl:text-lg font-medium">
          Related Posts
        </h2>
      </div>
      {relatedPosts.length > 0 ? (
        <ul className="space-y-4">
          {relatedPosts.map((related) => (
            <li key={related.id}>
              <Link href={`/blog/${related.slug}`} className="block group">
                <div className="flex gap-4 items-center">
                  <Image
                    src={
                      related.image ||
                      "https://placehold.co/64x64.png?text=No+Image"
                    }
                    alt={related.name || "Blog post"}
                    width={80}
                    height={80}
                    className="w-20 h-20 rounded-lg object-cover"
                    sizes="80px"
                    loading="lazy"
                  />
                  <div>
                    <h3 className="text-sm lg:text-[16px] text-[#3C3C3C] font-normal line-clamp-2 transition-colors hover:text-[#212088]">
                      {related.name ?? ""}
                    </h3>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-sm text-gray-500">No related posts found.</p>
      )}

      <div className="mt-6">
        <div className="flex items-center justify-between cursor-pointer p-4 bg-[#19065f] text-white mb-4">
          <h2 className="lg:text-[16px] xl:text-lg font-medium">
            Product Categories
          </h2>
        </div>
        <ul className="space-y-4 list-disc pl-[14px]">
          {productscat.map((category: any) => {
            return (
              <li key={category.id}>
                <Link
                  href={`/product-category/${category.slug}`}
                  className="text-sm lg:text-[16px] text-[#3C3C3C] font-normal line-clamp-2 transition-colors hover:text-[#212088]"
                >
                  {category.title}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>

    </aside>



  );
}
