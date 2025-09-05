import React from 'react'
import Image from 'next/image'

type DivisionsItem = {
    image: string;
    heading: string;
}

type BlockData = {
    heading: string;
    repeater_fields: DivisionsItem[] | string;
};

type DivisionsSectionProps = {
    DivisionsData: BlockData;
};

const PharmaDivision = ({ DivisionsData }: DivisionsSectionProps) => {

    const { heading, repeater_fields } = DivisionsData;

    const divisions = JSON.parse(repeater_fields as string);

    return (
        <section className='bg-[#F6F6F6]' id='pharma-division'>
            <div className='container mx-auto px-4 py-10'>
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
                    {/* Left side - Text content */}
                    <div className="text-center lg:text-left flex-2">
                       {heading &&
                       <h2 className="text-2xl lg:text-3xl xl:text-[40px] font-normal text-gray-900 leading-tight" dangerouslySetInnerHTML={{ __html: heading }} />
                       }

                    </div>

                    {divisions.length > 0 &&
                        <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-center justify-between flex-3">
                            {divisions.map((item: any, index: number) => (
                                <Image
                                    key={index}
                                    src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/${item.image}` || "https://placehold.co/200x100.png?text=No\nImage"}
                                    alt={item.heading}
                                    width={200}
                                    height={100}
                                    className="object-contain w-full"
                                />
                            ))}
                        </div>
                    }
                </div>
            </div>
        </section>
    )
}

export default PharmaDivision