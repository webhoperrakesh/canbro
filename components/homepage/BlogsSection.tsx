import React from 'react'
import Image from "next/image"
import Link from "next/link"

const BlogsSection = () => {

  const blogPosts = [
    {
      id: 1,
      title: "Best Thiosalchicoside Manufacturer In India",
      image: "/images/blog-1.png",
      readMoreLink: "#",
    },
    {
      id: 2,
      title: "Best Dabigatran Capsules 110 / 150 Mg Manufacturers In India",
      image: "/images/blog-2.png",
      readMoreLink: "#",
    },
    {
      id: 3,
      title: "Top 10 Injection Manufacturing Companies In India",
      image: "/images/blog-3.png",
      readMoreLink: "#",
    },
  ]

  return (
    <section id='latest-blogs'>
      <div className='container mx-auto px-4 py-10 md:py-10 lg:py-0'>
        {/* Header Section */}
        <div className="text-center lg:text-left mb-8">
          <p className="mx-auto lg:mx-0 text-sm text-white uppercase bg-[#38A0A7] rounded-full w-fit py-2 px-4 mb-4">
            our blogs
          </p>

          <h2 className='text-2xl md:text-3xl lg:text-4xl text-[#212088] font-semibold capitalize leading-12'>
            Our Latest <span className='text-[#38A0A7]'>Blogs</span>
          </h2>

        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-lg overflow-hidden"
            >
              {/* Blog Image */}
              <div className="relative h-48 sm:h-52 lg:h-60 overflow-hidden">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Blog Content */}
              <div className="py-4">
                <h3 className="text-lg sm:text-lg font-semibold text-[#333333] mb-4 leading-tight">{post.title}</h3>
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
      </div>
    </section>
  )
}

export default BlogsSection