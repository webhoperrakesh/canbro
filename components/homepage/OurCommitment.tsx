import React from 'react'
import Image from 'next/image'

const features = [
    {
        imgSrc: "/images/pricing-icon.png",
        alt: "BEST Pricing",
        heading: "BEST",
        subheading: "Pricing",
    },
    {
        imgSrc: "/images/monopoly-icon.png",
        alt: "MONOPOLY Ensured",
        heading: "MONOPOLY",
        subheading: "Ensured",
    },
    {
        imgSrc: "/images/dcgi-icon.png",
        alt: "DCGI Products",
        heading: "NEW DCGI",
        subheading: "Products",
    },
    {
        imgSrc: "/images/stock-icon.png",
        alt: "HIGH Stocks",
        heading: "HIGH",
        subheading: "Stocks",
    },
];


const OurCommitment = () => {
    return (
        <section className='bg-[#F6F6F6]' id='our-commitment'>
            <div className='container mx-auto px-4 py-8'>
                <div className='flex flex-col justify-center items-center gap-4'>
                    <h2 className='text-2xl md:text-3xl lg:text-4xl text-[#212088] font-semibold capitalize mb-4 leading-12'>
                        Our <span className='text-[#38A0A7]'>Commitment</span>
                    </h2>
                    {/* Features Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 items-center w-fit md:w-full lgw-full">
                        {features.map((item, index) => (
                            <div
                                key={index}
                                className="flex flex-row items-center text-center justify-start md:justify-center lg:justify-center gap-4"
                            >
                                <Image
                                    src={item.imgSrc}
                                    width={75}
                                    height={75}
                                    className="h-auto object-cover"
                                    alt={item.alt}
                                    priority
                                />
                                <div className="text-left">
                                    <h3 className="text-[#38A0A7] font-bold text-lg uppercase">{item.heading}</h3>
                                    <p className="text-gray-800 font-semibold text-2xl capitalize">{item.subheading}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurCommitment