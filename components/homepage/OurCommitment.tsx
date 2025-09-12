import React from 'react'
import Image from 'next/image'

type CommitmentItem = {
    heading: string;
    sub_heading: string;
    image: string;
}

type BlockData = {
    heading: string;
    repeater_fields: CommitmentItem[] | string;
};

type CommitmentSectionProps = {
    CommitmentData: BlockData;
};

const OurCommitment = ({ CommitmentData }: CommitmentSectionProps) => {

    const { heading, repeater_fields } = CommitmentData;

    const commitmentItems = JSON.parse(repeater_fields as string);

    return (
        <section className='bg-[#F6F6F6]' id='our-commitment'>
            <div className='container mx-auto px-4 py-8'>
                <div className='flex flex-col justify-center items-center gap-4'>

                    {heading &&
                        <h2 className='text-2xl md:text-3xl lg:text-[45px] font-semibold text-[#38A0A7] capitalize mb-6 custom-heading-color-blue' dangerouslySetInnerHTML={{ __html: heading }} />
                    }

                    {/* Features Grid */}
                    {commitmentItems.length > 0 &&
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 items-center w-fit md:w-full lgw-full">
                            {commitmentItems.slice(0, 4).map((item: any, index: number) => (
                                <div
                                    key={index}
                                    className="flex flex-row items-center text-center justify-start md:justify-center lg:justify-center gap-4"
                                >
                                    <Image
                                        src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/${item.image}` || "https://placehold.co/75x75.png?text=No\nImage"}
                                        width={75}
                                        height={75}
                                        className="h-auto object-cover"
                                        alt={item.heading}
                                        priority
                                    />
                                    <div className="text-left">
                                        <h3 className="text-[#38A0A7] font-bold lg:text-[24px] uppercase">{item.heading}</h3>
                                        <p className="text-gray-800 font-semibold lg:text-[30px] capitalize">{item.sub_heading}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    }
                </div>
            </div>
        </section>
    )
}

export default OurCommitment