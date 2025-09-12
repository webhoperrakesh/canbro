import React from 'react'
import Image from 'next/image'

type BlockData = {
    heading: string;
    sub_heading: string;
    cta_text: string | null;
    cta_link: string | null;
    description: string;
    image: string;
};

type WhoWeAreSectionProps = {
    WhoWeAreData: BlockData;
};

const Whoweare = ({ WhoWeAreData }: WhoWeAreSectionProps) => {

    const { heading, sub_heading, description, image } = WhoWeAreData;

    return (
        <section className='bg-[url(/images/whoweare-bg.png)] bg-center bg-no-repeat bg-cover lg:bg-[length:100%_100%]' id='who-we-are' >
            <div className='container mx-auto px-4 py-12 md:py-25'>
                <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-12 gap-10 md:gap-6 items-start'>
                    <div className='md:col-span-5'>
                        <Image
                            src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/${image}` || "https://placehold.co/800x800.png?text=No\nImage"}
                            width={500}
                            height={500}
                            className='w-full h-auto rounded-2xl aspect-[2/2]'
                            alt='Who We Are'
                            priority
                        />
                    </div>
                    <div className='md:col-span-7 md:pl-0 lg:pl-10'>
                        {sub_heading &&
                            <p className="text-sm lg:font-[16px] font-small text-white uppercase bg-orange-500 rounded-full w-max py-2 px-6 mb-6">
                                {sub_heading}
                            </p>
                        }
                        {heading &&
                            <h2 className='text-2xl md:text-3xl lg:text-[45px] text-white font-semibold capitalize mb-6 leading-12 custom-heading-color-light' dangerouslySetInnerHTML={{ __html: heading ?? '' }} />
                        }
                        {description &&
                            <p className="text-sm md:text-[16px] font-light text-white leading-[1.8rem] lg:mb-12">
                                {description}
                            </p>
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Whoweare
