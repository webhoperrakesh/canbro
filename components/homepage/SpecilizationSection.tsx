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
                    <p className="inline-block text-sm text-white uppercase bg-orange-500 rounded-full w-max py-2 px-6 mb-4">
                        OUR PRODUCT CATEGORY
                    </p>
                    <h2 className='text-center text-2xl md:text-3xl lg:text-4xl text-[#19065f] font-bold capitalize mb-4 leading-12'>
                        Specialized Renal & <span className="text-teal-500">Urology Portfolio</span>
                    </h2>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12 lg:pt-4">
                    {products.map((product) => (
                        <div
                            key={product.id} className='relative card flex rounded-2xl group transition-all duration-300 border-0 bg-[url(/images/card-bg.png)] bg-auto bg-center bg-no-repeat' style={{ backgroundSize: "100% 100%" }}>
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
                                    <span className='text-sm font-medium text-teal-500'>
                                        Nephrology & Urology Care
                                    </span>
                                </div>

                                {/* Title */}
                                <h3
                                    className='text-[#19065f] text-lg font-bold mb-4 min-h-[3rem] flex items-center justify-start'>
                                    {product.title}
                                </h3>

                                {/* Description */}
                                <p
                                    className='text-sm mb-6 leading-relaxed text-gray-600'>
                                    {product.description}
                                </p>

                                {/* Read More Button */}
                                <div className="flex items-center justify-between">
                                    <Link href="#" className='text-sm font-medium text-[#19065f]'>
                                        <span className='w-[10px] h-[10px] inline-block bg-[#19065f] rounded-full'></span> Read More
                                    </Link>
                                    <button className='absolute right-0 bottom-0 flex items-center justify-center w-10 h-10 rounded-full p-0 bg-orange-500 text-white hover:bg-orange-600'>
                                        <GoArrowUpRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All Products Button */}
                <div className="text-center">
                    <button className="inline-flex items-center justify-center w-12 h-12 border-1 border-grey-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 group mb-4">
                        <GoPlus size={20} className="text-gray-600 group-hover:text-teal-500 transition-colors duration-300" />
                    </button>
                    <div className="text-gray-600">View all Products</div>
                </div>
            </div>

            {/* Floating Animation Elements */}
            <div className="fixed inset-0 pointer-events-none overflow-hidden">
                <div className="absolute top-20 left-10 w-2 h-2 bg-teal-300 rounded-full animate-pulse opacity-60"></div>
                <div className="absolute top-1/3 right-20 w-3 h-3 bg-orange-300 rounded-full animate-bounce opacity-40"></div>
                <div className="absolute bottom-1/4 left-1/4 w-1 h-1 bg-blue-300 rounded-full animate-ping opacity-50"></div>
                <div className="absolute bottom-20 right-1/3 w-2 h-2 bg-teal-400 rounded-full animate-pulse opacity-30"></div>
            </div>
        </section>
    );
};

export default SpecilizationSection;