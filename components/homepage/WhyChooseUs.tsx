import React from 'react'
import Image from 'next/image'

type BlockData = {
    heading: string;
    content: string;
    image: string;
};

type ChooseUsSectionProps = {
    ChooseUsData: BlockData;
};

const WhyChooseUs = ({ ChooseUsData }: ChooseUsSectionProps) => {

    const { heading, content, image } = ChooseUsData;

    return (
        <section id='chooseus'>
            <div className='container mx-auto px-4 py-12 md:py-15'>
                <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-12 gap-10 md:gap-6 items-center'>
                    <div className='md:col-span-5'>
                        <Image
                            src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/${image}` || "https://placehold.co/800x800.png?text=No\nImage"}
                            width={500}
                            height={500}
                            className='w-full h-auto object-cover rounded-2xl'
                            alt='Choose Us'
                            priority
                        />
                    </div>
                    <div className='md:col-span-7 md:pl-0 lg:pl-10'>

                        {heading &&
                            <h1 className='text-2xl md:text-3xl lg:text-[45px] font-semibold text-[#38A0A7] capitalize mb-6 custom-heading-color-blue' dangerouslySetInnerHTML={{ __html: heading ?? '' }} />
                        }

                        {content &&
                            <div className="mb-6 text-sm text-[#3C3C3C] md:text-[16px] font-normal leading-[1.8rem] lg:mb-12 custom-font-style" dangerouslySetInnerHTML={{ __html: content ?? '' }} />
                        }

                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyChooseUs