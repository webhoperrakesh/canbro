import React from 'react';
import { GoArrowUpRight, GoPlus } from "react-icons/go";
import Link from 'next/link';
import Image from 'next/image';


const SpecilizationSection = () => {
    const products = [
        {
            id: 1,
            title: "Benign Prostatic Hyperplasia (BPH)",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum",
            icon: "/images/bladder_icon.png",
            featured: false,
        },
        {
            id: 2,
            title: "Anti-Spasmodic",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            icon: "/images/muscles_icon_1.png",
            featured: true,
        },
        {
            id: 3,
            title: "Overactive Bladder (OAB)",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            icon: "/images/prostate_icon.png",
            featured: false,
        },
        {
            id: 4,
            title: "Diuretic",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            icon: "/images/urinary_icon.png",
            featured: false,
        },
        {
            id: 5,
            title: "Xanthine Oxidase Inhibitors (URIC ACID)",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            icon: "/images/kidney_icon.png",
            featured: false,
        },
        {
            id: 6,
            title: "Immuno Suppressive Agents",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            icon: "/images/immune_icon.png",
            featured: false,
        },
        {
            id: 7,
            title: "Renal Disorder",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            icon: "/images/Layer_icon.png",
            featured: false,
        },
        {
            id: 8,
            title: "Urinary Alkalinizer",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
            icon: "/images/bladder_icon_1.png",
            featured: false,
        },
    ]

    return (
        <section className='bg-[#F6F6F6]' id='specilization-section'>
            <div className='container mx-auto px-4 py-12 md:py-15'>
                {/* Header */}
                <div className="text-center">
                    <p className="inline-block text-sm lg:font-[16px] font-medium text-white uppercase bg-orange-500 rounded-full w-max py-2 px-6 mb-4">
                        OUR PRODUCT CATEGORY
                    </p>
                    <h2 className='text-center text-2xl md:text-3xl lg:text-4xl text-[#19065f] font-semibold capitalize mb-4 leading-12'>
                        Specialized Renal & <span className="text-teal-500">Urology Portfolio</span>
                    </h2>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12 lg:pt-4">
                    {products.map((product) => (
                        <div
                            key={product.id} className='relative card flex rounded-2xl group transition-all duration-300 border-0 bg-[url(/images/card-bg.png)] bg-center bg-no-repeat bg-cover lg:bg-[length:100%_100%]'>
                            <div className="p-6 flex flex-col justify-between">
                                {/* Icon */}
                                <div className="flex items-center justify-end -mb-4">
                                    <div
                                        className='w-14 h-14 rounded-full flex items-center justify-center text-2xl'>
                                        
                                            <Image
                                                src={product.icon || "/placeholder.svg"}
                                                width={64}
                                                height={64}
                                                alt={product.title}
                                                priority
                                            />

                                    </div>
                                </div>

                                {/* Category */}
                                <div className="mb-3">
                                    <span className='text-sm lg:text-[14px] font-medium text-teal-500'>
                                        Nephrology & Urology Care
                                    </span>
                                </div>

                                {/* Title */}
                                <h3
                                    className='text-[#19065f] text-[18px] font-bold mb-2 min-h-[3rem] flex items-center justify-start'>
                                    {product.title}
                                </h3>

                                {/* Description */}
                                <p
                                    className='text-sm lg:text-[14px] font-medium mb-3 leading-relaxed text-gray-600'>
                                    {product.description}
                                </p>

                                 <div className="w-25 lg:w-25 h-[1px] bg-gray-300 mb-3" />

                                {/* Read More Button */}
                                <div className="flex items-center justify-between">
                                    <Link href="#" className='text-sm font-medium text-[#19065f]'>
                                        <span className='w-[10px] h-[10px] inline-block bg-[#19065f] rounded-full hover:cursor-pointer'></span> Read More
                                    </Link>
                                    <button className='absolute right-0 bottom-0 flex items-center justify-center w-10 h-10 rounded-full p-0 bg-orange-500 text-white hover:bg-orange-600 transition-all duration-300 hover:scale-105 hover:cursor-pointer'>
                                        <GoArrowUpRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All Products Button */}
                <div className="text-center">
                    <button className="inline-flex items-center justify-center w-12 h-12 border-1 border-grey-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:cursor-pointer group mb-4">
                        <GoPlus size={20} className="text-gray-600 group-hover:text-teal-500 transition-colors duration-300" />
                    </button>
                    <div className="text-gray-600">View all Products</div>
                </div>
            </div>
        </section>
    );
};

export default SpecilizationSection;