import React from 'react';
import { GoArrowUpRight, GoPlus } from "react-icons/go";
import Link from 'next/link';
import Image from 'next/image';

type Category = {
    id: number;
    title: string;
    image: string;
    slug: string;
    short_desc: string;
};

type CategoryResponse = {
    success: boolean;
    data: Category[];
    message: string;
};

const SpecilizationSection = async () => {
    
    let categories: Category[] = [];

    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/product-categories`, {
            next: { revalidate: 600 },
        });

        if (!res.ok) throw new Error('Failed to fetch categories');

        const json: CategoryResponse = await res.json();
        categories = json.data;
    } catch (error) {
        console.error('Error fetching categories:', error);
        categories = [];
    }

    if (categories.length === 0) return null;

    return (
        <section className='bg-[#F6F6F6]' id='specilization-section'>
            <div className='container mx-auto px-4 py-12 md:py-15'>
                {/* Header */}
                <div className="text-center">
                    <p className="inline-block text-sm lg:font-[16px] font-medium text-white uppercase bg-orange-500 rounded-full w-max py-2 px-6 mb-6">
                        OUR PRODUCT CATEGORY
                    </p>
                    <h2 className='text-center text-2xl md:text-3xl lg:text-[45px] text-[#212088] font-semibold capitalize mb-6 leading-12'>
                        Specialized Renal & <span className="text-[#38A0A7]">Urology Portfolio</span>
                    </h2>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12 lg:pt-4">
                    {categories.slice(0,8).map((category: any, index: number) => (
                        <div
                            key={index} className='relative card flex rounded-2xl group transition-all duration-300 border-0 bg-white lg:bg-transparent lg:bg-[url(/images/card-bg.png)] lg:bg-center lg:bg-no-repeat bg-cover lg:bg-[length:100%_100%] hover:bg-[url(/images/hover-bg.png)]'>
                            <div className="p-6 flex flex-col justify-between w-full">
                                {/* Icon */}
                                <div className="flex justify-between items-end mb-3">
                                   
                                    {/* <div className="mb-3"> */}
                                    <span className='text-sm lg:text-[14px] font-medium text-[#38a0a7] group-hover:text-white'>
                                        Nephrology & Urology Care
                                    </span>
                                {/* </div> */}

                                    <div className='w-14 h-14'>
                                        <Image
                                            src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/${category.image}` || "https://placehold.co/64x64.png?text=No+Image"}
                                            width={64}
                                            height={64}
                                            alt={category.title}
                                            priority
                                            className="group-hover:invert group-hover:brightness-0 group-hover:contrast-200"
                                        />
                                    </div>
                                </div>

                                {/* Category */}
                                {/* <div className="mb-3">
                                    <span className='text-sm lg:text-[14px] font-medium text-[#38a0a7]'>
                                        Nephrology & Urology Care
                                    </span>
                                </div> */}

                                {/* Title */}
                                <h3
                                    className='text-[#212088] text-[18px] font-bold mb-2 min-h-[3rem] flex items-center justify-start group-hover:text-white'>
                                    {category.title}
                                </h3>

                                {/* Description */}
                                <p
                                    className='text-sm lg:text-[14px] font-small mb-3 leading-relaxed text-gray-600 line-clamp-3 group-hover:text-white'>
                                    {category.short_desc}
                                </p>

                                <div className="w-25 lg:w-25 h-[1px] bg-gray-300 mb-3 group-hover:text-white" />

                                {/* Read More Button */}
                                <div className="flex items-center justify-between">
                                    {/* <Link href={`/product-category/${category.slug}`} className='text-sm font-medium text-[#19065f] group-hover:text-white'>
                                        <span className='w-[10px] h-[10px] inline-block bg-[#19065f] rounded-full hover:cursor-pointer group-hover:bg-white'></span> Read More
                                    </Link> */}
                                    <Link href={`/product-category/${category.slug}`} className='lg:absolute right-0 bottom-0 flex items-center justify-center w-10 h-10 rounded-full p-0 bg-orange-500 text-white hover:bg-orange-600 transition-all duration-300 hover:scale-105 hover:cursor-pointer'>
                                        <GoArrowUpRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All Products Button */}
                <div className="text-center">
                    <Link href={`/products`} className="inline-flex items-center justify-center w-14 h-14 border-1 border-grey-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:cursor-pointer group mb-4">
                        <GoPlus size={20} className="text-gray-600 group-hover:text-teal-500 transition-colors duration-300" />
                    </Link>
                    <div className="text-gray-600">View all Products</div>
                </div>
            </div>
        </section>
    );
};

export default SpecilizationSection;