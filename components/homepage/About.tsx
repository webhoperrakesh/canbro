import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

type BlockData = {
    heading: string;
    sub_heading: string;
    cta_text: string | null;
    cta_link: string | null;
    description: string;
    image: string;
};

type ABoutUsSectionProps = {
    AboutUsData: BlockData;
};

const About = ({ AboutUsData }: ABoutUsSectionProps) => {

    const { heading, sub_heading, cta_text, cta_link, description, image } = AboutUsData;

    return (
        <section id='about'>
            <div className='container mx-auto px-4 py-12 md:py-15'>
                <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-12 gap-10 md:gap-6 items-center'>
                    <div className='md:col-span-5'>
                        <Image
                            src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/${image}` || "https://placehold.co/800x800.png?text=No\nImage"}
                            width={500}
                            height={500}
                            className='w-full h-auto object-cover rounded-2xl'
                            alt='About Us'
                            priority
                        />
                    </div>
                    <div className='md:col-span-7 md:pl-0 lg:pl-10'>
                        {sub_heading &&
                            <p className="text-sm lg:font-[16px] font-small text-white uppercase bg-[#38A0A7] rounded-full w-max py-2 px-6 mb-4">
                                {sub_heading}
                            </p>
                        }

                        {heading &&
                            <h2 className='text-2xl md:text-3xl lg:text-[45px] font-semibold text-[#38A0A7] capitalize mb-6 custom-heading-color-blue' dangerouslySetInnerHTML={{ __html: heading ?? '' }} />
                        }

                        {description &&
                            <p className="mb-6 text-sm text-[#3C3C3C] md:text-[16px] font-normal leading-[1.8rem] lg:mb-12">
                                {description}
                            </p>
                        }

                        {/* Read More Button */}
                        {cta_text &&
                            <Link href={`${cta_link ?? '#'}`} className="inline-block capitalize text-sm md:text-[16px] bg-orange-500 hover:bg-orange-600 text-white rounded-full px-10 py-3 transition-all duration-300 hover:scale-105">
                                {cta_text}
                            </Link>
                        }

                    </div>
                </div>
            </div>
        </section>
    )
}

export default About