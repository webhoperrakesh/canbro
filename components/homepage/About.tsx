import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const About = () => {
    return (
        <section id='about'>
            <div className='container mx-auto px-4 py-12 md:py-15'>
                <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-12 gap-10 md:gap-6 items-center'>
                    <div className='md:col-span-5'>
                        <Image
                            src="/images/about.png"
                            width={500}
                            height={500}
                            className='w-full h-auto object-cover'
                            alt='About Us'
                            priority
                        />
                    </div>
                    <div className='md:col-span-7 md:pl-0 lg:pl-10'>
                        <p className="text-sm text-white uppercase bg-[#38A0A7] rounded-full w-[160px] py-2 px-4 mb-4">
                            welcome to
                        </p>
                        <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold text-[#38A0A7] capitalize mb-4'>
                            <span className='text-[#212088]'>Canbro</span> Healthcare
                        </h2>
                        <p className="text-sm text-[#3C3C3C] md:text-[14px] leading-[1.8rem] mb-12">
                            Canbro Healthcare is a trusted and leading pharmaceutical company specializing in high-quality Nephrology and Urology products in India. We are committed to delivering effective, patient-centric solutions for conditions related to the kidneys, ureters, bladder, and urethra. Our medicines are manufactured under strict QA/QC standards, ensuring optimal efficacy, safety, and consistent results for our consumers. With the rising demand for renal and urinary healthcare, we focus on innovation, quality, and reliability—earning the trust of healthcare professionals across the globe.
                        </p>
                        {/* Read More Button */}
                        <Link href="/" className="text-sm md:text-[16px] bg-orange-500 hover:bg-orange-600 text-white rounded-full px-8 py-2">
                            Read More
                        </Link>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default About