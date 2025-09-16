import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CategorySidebar } from '@/components/CategorySidebar'

type Post = {
  id: number;
  name: string;
  image: string;
  slug: string;
};

const Sidebar = async () => {
  let latestPosts: Post[] = [];

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/posts?per_page=6`,
      {
        next: { revalidate: 300 }, // cache for 5 minutes
        headers: {
          "Cache-Control": "public, s-maxage=300, stale-while-revalidate=600",
        },
      }
    );

    if (res.ok) {
      const data = await res.json();
      latestPosts = data.data || [];
    }
  } catch (error) {
    console.error("Failed to fetch latest posts:", error);
  }

  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/product-categories`, {
    next: { revalidate: 600 },
  })

  const { data: categories = [] } = await res.json()

  return (
    <aside className="lg:border-l lg:pl-6 lg:border-[#022169]">
      <div className="flex items-center justify-between cursor-pointer p-4 bg-[#19065f] text-white mb-4">
        <h2 className="lg:text-[16px] xl:text-lg font-medium">
          Latest Posts
        </h2>
      </div>
      {latestPosts.length > 0 ? (
        <ul className="space-y-4">
          {latestPosts.map((item) => (
            <li key={item.id}>
              <Link href={`/blog/${item.slug}`} className="block group">
                <div className="flex gap-4 items-center">
                  <Image
                    src={
                      item.image ||
                      "https://placehold.co/64x64.png?text=No+Image"
                    }
                    alt={item.name || "Blog post"}
                    width={80}
                    height={80}
                    className="w-20 h-20 rounded-lg object-cover"
                    sizes="80px"
                    loading="lazy"
                  />
                  <div>
                    <h3 className="text-sm lg:text-[16px] text-[#3C3C3C] font-normal line-clamp-2 transition-colors hover:text-[#212088]">
                      {item.name ?? ""}
                    </h3>
                  </div>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-sm text-gray-500">No posts found.</p>
      )}

      <div className="mt-6">
        <div className="flex items-center justify-between cursor-pointer p-4 bg-[#19065f] text-white mb-4">
          <h2 className="lg:text-[16px] xl:text-lg font-medium">
            Product Categories
          </h2>
        </div>
        <ul className="space-y-4 list-disc pl-[14px]">
          {categories.map((category: any) => {
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
};

export default Sidebar;
