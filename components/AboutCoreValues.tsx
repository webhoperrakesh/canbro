import React from 'react'
import { LuHeart, LuShield, LuUser, LuAward } from 'react-icons/lu'
import Image from 'next/image';

const icons = [
    { icon: <LuHeart className="w-6 h-6" /> },
    { icon: <LuShield className="w-6 h-6" /> },
    { icon: <LuUser className="w-6 h-6" /> },
    { icon: <LuAward className="w-6 h-6" /> },
];

const AboutCoreValues = async () => {

    const corevaluesData = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/block/about-core-values`, {
        next: { revalidate: 600 },
    });
    const blockData = await corevaluesData.json();

    const coreValues = blockData.block_data || {};
    const repeaterFields = JSON.parse(coreValues.repeater_fields as string);

    if (!repeaterFields || repeaterFields.length === 0) return null;

    return (
        <div className="bg-[#f6f6f6]">
            <div className='container mx-auto px-4 py-12 md:py-15'>
                <div className="text-center mb-16">
                    <h2 className='text-2xl md:text-3xl lg:text-[45px] font-semibold text-[#38A0A7] capitalize mb-4 custom-heading-color-blue' dangerouslySetInnerHTML={{ __html: coreValues.heading ?? '' }} />

                    <p className="text-[#3C3C3C] lg:text-[18px] font-semibold opacity-90 max-w-3xl mx-auto">
                        {coreValues.description ?? ''}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {repeaterFields.map((item: any, index: number) => {
                        const icon = icons[index % icons.length].icon;
                        return (
                            <div
                                key={index}
                                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
                            >
                                <div className="w-12 h-12 inline-flex items-center justify-center bg-[#38A0A7] rounded-full mb-4 text-white">
                                    <Image
                                        src={
                                            item.image
                                                ? `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/${item.image}`
                                                : "https://placehold.co/48x48.svg?text=No+Image"
                                        }
                                        alt={item.heading || "Placeholder"}
                                        width={5}
                                        height={5}
                                        className='w-6 h-6 invert'
                                    />

                                </div>

                                <h3 className="text-[#19065f] text-[18px] font-bold text-xl mb-3">{item.heading}</h3>
                                <p className="leading-relaxed text-sm lg:text-[16px] font-normal text-gray-600 mb-2">{item.content}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export default AboutCoreValues