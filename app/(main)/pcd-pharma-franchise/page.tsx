import React from 'react'
import Image from 'next/image'
import ContactForm from '@/components/ContactForm';
import { getPageData } from '@/utils/getPageData';
import { generateSeoMetadata } from "@/utils/generateSeoMetadata"
import { getAbsoluteUrl } from "@/utils/helper"
import OurCommitment from '@/components/homepage/OurCommitment';
import OurCertification from "@/components/homepage/OurCertification"
import ProductSlider from '@/components/homepage/ProductSlider';

export const generateMetadata = async () => {

    const data = await getPageData('pcd-pharma-franchise');
    const pageUrl = getAbsoluteUrl("/pcd-pharma-franchise");

    return generateSeoMetadata(data.meta.seo_meta, pageUrl, "article");
};

const PharmaFranchise = async () => {

    const pageData = await getPageData('pcd-pharma-franchise');

    if (!pageData.customFields || pageData.customFields.length === 0) return null;

    const [commitmentResult, certificationResult] = await Promise.allSettled([
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/block/ourcommitment`, {
            next: { revalidate: 600 },
        }),
        fetch(`${process.env.NEXT_PUBLIC_API_URL}/block/ourcertification`, {
            next: { revalidate: 600 },
        }),
    ]);

    let commitment = [];
    let certificates = [];

    if (commitmentResult.status === "fulfilled") {
        const commitmentRes = await commitmentResult.value.json();
        commitment = commitmentRes.block_data || {};
    }

    if (certificationResult.status === "fulfilled") {
        const certificationRes = await certificationResult.value.json();
        certificates = certificationRes.block_data || {};
    }


    return (
        <>
            <div className='bg-[url(/images/slider-bg-1.png)] bg-center bg-no-repeat bg-cover lg:bg-[length:100%_100%]'>
                <div className='container mx-auto px-4 py-12 md:py-15'>
                    <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-12 gap-10 md:gap-6 items-center'>

                        <div className="md:col-span-7 relative">
                            <h1 className="text-3xl md:text-3xl lg:text-[45px] font-semibold capitalize text-white mb-4">Best Nephrology & Urology <br /> PCD Franchise Company</h1>
                            <h4 className='capitalize text-white text-2xl mb-2'>canbro healthcare</h4>
                            <p className='text-white'>Quality Products at Low Prices</p>
                        </div>
                        <div className='md:col-span-5 md:pr-0 lg:pr-10'>
                            <div className="lg:col-span-1 bg-white shadow-lg border border-gray-100 rounded-2xl p-4">
                                <div className="pb-6 text-center">
                                    <h2 className='text-2xl md:text-3xl lg:text-3xl font-semibold text-[#EF7F1B] capitalize mb-4'>
                                        Get Product & Price List
                                    </h2>
                                    <p className="text-[#3C3C3C] lg:text-[18px] font-semibold opacity-90">Don't Post Job Queries</p>
                                </div>
                                <div className="">
                                    <ContactForm />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <section id='about'>
                <div className='container mx-auto px-4 py-12 md:py-15'>
                    <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-12 gap-10 md:gap-6 items-center'>
                        <div className="md:col-span-5 relative">
                            <Image
                                src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/${pageData.customFields[0].image}` || "https://placehold.co/800x800.png?text=No\nImage"}
                                width={500}
                                height={500}
                                className='w-full h-auto rounded-2xl aspect-[2/2]'
                                alt='PCD Franchise'
                                priority
                            />
                        </div>
                        <div className='md:col-span-7 md:pl-0 lg:pl-10'>
                            <h2 className='text-2xl md:text-3xl lg:text-[45px] font-semibold text-[#38A0A7] capitalize mb-4 custom-heading-color-blue' dangerouslySetInnerHTML={{ __html: pageData.customFields[0].heading ?? '' }} />
                            <div className='mb-6 text-sm text-[#3C3C3C] lg:text-[16px] font-normal leading-[1.8rem] lg:mb-12' dangerouslySetInnerHTML={{ __html: pageData.customFields[0].content ?? '' }} />

                        </div>
                    </div>
                </div>

                {commitment &&
                    <OurCommitment CommitmentData={commitment} />
                }
                <ProductSlider showText={false} ShowSlider = {true} />

                {certificates &&
                    <OurCertification OurCertificationData={certificates} />
                }

                <div className='bg-[#38a0a7]'>
                    <div className='container mx-auto px-4 py-12 md:py-15'>
                        <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-12 gap-10 md:gap-6 items-center'>
                            <div className='md:col-span-6 md:pr-0 lg:pr-10'>
                                <div className="lg:col-span-1 bg-white shadow-lg border border-gray-100 rounded-2xl p-8 md:p-10">
                                    <div className="pb-6 text-center">
                                        <h2 className='text-2xl md:text-3xl lg:text-4xl font-semibold text-[#EF7F1B] capitalize mb-4'>
                                            Get Product & Price List
                                        </h2>
                                        <p className="text-[#3C3C3C] lg:text-[18px] font-semibold opacity-90">Don't Post Job Queries</p>
                                    </div>
                                    <div className="">
                                        <ContactForm />
                                    </div>
                                </div>
                            </div>

                            <div className="md:col-span-6 relative">
                                <Image
                                    src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/${pageData.customFields[1].image}` || "https://placehold.co/800x800.png?text=No\nImage"}
                                    width={800}
                                    height={800}
                                    className='w-[90%] h-auto object-cover rounded-2xl'
                                    alt='About Us'
                                    priority
                                />
                            </div>
                        </div>

                    </div>
                </div>

            </section>
        </>

    )
}

export default PharmaFranchise