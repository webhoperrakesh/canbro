import React from 'react'
import Image from 'next/image'

const divisions = [
    {
        imgSrc: "/images/division-1.png",
        alt: "Nephrology and Urology Care",
    },
    {
        imgSrc: "/images/division-2.png",
        alt: "Cosmetology",
    },
    {
        imgSrc: "/images/division-3.png",
        alt: "Dermatology & Nutraceuticals",
    },
];


const PharmaDivision = () => {
    return (
        <section className='bg-[#F6F6F6]' id='pharma-division'>
            <div className='container mx-auto px-4 py-8'>
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
                    {/* Left side - Text content */}
                    <div className="text-center lg:text-left flex-2">
                        <h1 className="text-2xl lg:text-3xl xl:text-[40px] font-normal text-gray-900 leading-tight">
                            Innovating Through
                            <br />
                            Our Specialty <span className="text-teal-600 font-bold">Pharma <br />
                                Divisions</span>
                        </h1>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-center justify-between flex-3">
                        {divisions.map((division, index) => (
                            <Image
                                key={index}
                                src={division.imgSrc}
                                alt={division.alt}
                                width={200}
                                height={100}
                                className="object-contain"
                            />
                        ))}
                    </div>

                </div>
            </div>
        </section>
    )
}

export default PharmaDivision