import React from 'react'
import Image from 'next/image'
import Breadcrumbs from '@/components/Breadcrumbs'
import Sidebar from '@/components/Sidebar'
import { blogPosts } from '@/fakeData/blogData'

const Page = ({ params }: { params: { slug: string } }) => {
  const { slug } = params

  const latestPosts = blogPosts.slice(0, 6)

  const post = blogPosts.find((post) => post.slug === slug)

  if (!post) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl font-semibold text-red-600">Post not found</h2>
      </div>
    )
  }

  return (
    <>
      <Breadcrumbs title={post.title} bgImage="/images/slider-bg-1.png" />
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Post */}
          <div className="lg:col-span-2">
            {post.image && (
              <Image
                src={post.image || 'https://placehold.co/800x400?text=No+Image'}
                alt={post.title}
                width={800}
                height={400}
                priority
                className="w-full h-auto mb-6 rounded-xl object-cover shadow"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            )}

            <div
              className="mb-6 text-sm text-[#3C3C3C] md:text-[16px] font-medium leading-[1.8rem] prose prose-lg max-w-none custom-font-style"
              dangerouslySetInnerHTML={{ __html: post.description || '<p>No content available.</p>' }}
            />
          </div>

          {/* Sidebar */}
          <Sidebar latestPosts={latestPosts} />
        </div>
      </div>
    </>
  )
}

export default Page
