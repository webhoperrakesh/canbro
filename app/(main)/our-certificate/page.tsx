import React from 'react'
import Breadcrumbs from '@/components/Breadcrumbs'
import OurCertificate from './OurCertificate';
import { getPageData } from '@/utils/getPageData';
import { generateSeoMetadata } from "@/utils/generateSeoMetadata"
import { getAbsoluteUrl } from "@/utils/helper"


export const generateMetadata = async () => {

  const data = await getPageData('our-certificate');
  const pageUrl = getAbsoluteUrl("/our-certificate");

  return generateSeoMetadata(data.meta.seo_meta, pageUrl, "article");
};



const OurCertificatePage = async () => {

  const certificatesData = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/block/our-certificate`, {
    next: { revalidate: 600 },
  });
  const blockData = await certificatesData.json();

  const certificates = blockData.block_data || {};

  return (
    <>
      <Breadcrumbs title="Our Certificate" bgImage="/images/slider-bg-1.png" />
      {/* Header Section */}
      <div className="bg-white">
        <div className='container mx-auto px-4 py-12 md:py-15'>
          <div className="text-center">
            <h2 className='text-2xl md:text-3xl lg:text-4xl font-semibold text-[#38A0A7] capitalize mb-4 custom-heading-color-blue' dangerouslySetInnerHTML={{ __html: certificates.heading ?? '' }} />
            {certificates?.description &&
              <p className="text-sm text-[#3C3C3C] lg:text-[18px] font-semibold opacity-90 max-w-3xl mx-auto">
                {certificates?.description}
              </p>
            }

          </div>
        </div>
      </div>

      {/* Certificates Grid */}
      <div className='bg-[#F6F6F6]'>
        <div className='container mx-auto px-4 py-12 md:py-15'>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <OurCertificate certificates={certificates} />
          </div>
        </div>
      </div>
    </>

  )
}

export default OurCertificatePage