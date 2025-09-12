import React from 'react'
import BlogCard from '../BlogCard'


const BlogsSection = async () => {

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts?per_page=3`, {
  next: { revalidate: 600 },
  headers: {
    'Cache-Control': 'public, max-age=3600, stale-while-revalidate=7200',
  },
}).catch((error) => {
  console.error('Network error:', error);
  throw new Error('Failed to load blog posts (Network issue)');
});

if (!response.ok) {
  console.error('API error:', response.statusText);
  throw new Error('Failed to load blog posts (API error)');
}

const postData = await response.json();

const allPosts = postData.data || [];



  return (
  allPosts.length > 0 && (
    <section id='latest-blogs'>
      <div className='container mx-auto px-4 py-10 md:py-10 lg:py-0 mb-6'>
        {/* Header Section */}
        <div className="text-center lg:text-left mb-8">
          <p className="mx-auto lg:mx-0 text-sm lg:font-[16px] font-medium text-white uppercase bg-[#38A0A7] rounded-full w-fit py-2 px-4 mb-4">
            our blogs
          </p>

          <h2 className='text-2xl md:text-3xl lg:text-[45px] text-[#212088] font-semibold capitalize leading-12'>
            Our Latest <span className='text-[#38A0A7]'>Blogs</span>
          </h2>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {allPosts.map((post: any) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  )
);
}

export default BlogsSection