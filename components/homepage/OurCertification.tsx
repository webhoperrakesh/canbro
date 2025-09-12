import React from 'react'
import Image from 'next/image'

type CertificationItem = {
    image: string;
}

type BlockData = {
    heading: string;
    sub_heading: string;
    repeater_fields: CertificationItem[] | string;
};

type CertificationSectionProps = {
    OurCertificationData: BlockData;
};

const OurCertification = ({ OurCertificationData }: CertificationSectionProps) => {

    const { heading, sub_heading, repeater_fields } = OurCertificationData;
    const certificateImages = JSON.parse(repeater_fields as string);

    return (
        <section className='bg-[url(/images/certificate-bg.png)] bg-center bg-no-repeat bg-cover lg:bg-[length:100%_100%]' id='our-certificate'>
            <div className='container mx-auto px-4 py-12 md:py-15'>
                <div className='flex flex-col justify-center items-center gap-4'>
                    {sub_heading &&
                        <p className="text-sm lg:font-[16px] font-medium text-white uppercase bg-orange-500 rounded-full w-max py-2 px-6 mb-4">
                            {sub_heading}
                        </p>
                    }

                    {heading &&
                        <h2 className='text-center text-2xl md:text-3xl lg:text-[45px] text-white font-semibold capitalize mb-4 leading-12 custom-heading-color-light' dangerouslySetInnerHTML={{ __html: heading ?? '' }} />
                    }

                    {certificateImages.length > 0 &&
                        <div className='flex items-center justify-center flex-row w-full gap-10'>
                            {certificateImages.slice(0, 6).map((item: any, index: number) => (
                                <Image
                                    key={index}
                                    src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/${item.image}` || "https://placehold.co/138x138.png?text=No\nImage"}
                                    width={138}
                                    height={138}
                                    className='h-auto object-cover'
                                    alt={item.heading}
                                    priority
                                />
                            ))}
                        </div>
                    }
                </div>
            </div>
        </section>
    )
}

export default OurCertification