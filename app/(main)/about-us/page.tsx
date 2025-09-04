import React from 'react'
import Breadcrumbs from '@/components/Breadcrumbs'
import Image from 'next/image'
import { getPageData } from '@/utils/getPageData'
import AboutCoreValues from '@/components/AboutCoreValues'
import { generateSeoMetadata } from "@/utils/generateSeoMetadata"
import { getAbsoluteUrl } from "@/utils/helper"

export const generateMetadata = async () => {

  const data = await getPageData('about-us');
  const pageUrl = getAbsoluteUrl("/about-us");

  return generateSeoMetadata(data.meta.seo_meta, pageUrl, "article");
};

const AboutUsPage = async () => {

  const pageData = await getPageData('about-us');

  if (!pageData.customFields || pageData.customFields.length === 0) return null;

 
  return (
    <>
      <Breadcrumbs title="About Us" bgImage="/images/slider-bg-1.png" />
      <section id='about-us'>
        <div className='container mx-auto px-4 py-12 md:py-15'>
          <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-12 gap-10 md:gap-6 items-center'>
            <div className='md:col-span-5 relative'>
              <Image
                src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/${pageData.customFields[0].image}`|| "https://placehold.co/800x800.png?text=No\nImage"}
                width={800}
                height={800}
                className='w-full h-auto object-cover rounded-2xl'
                alt='About Us'
                priority
              />
              {/* <div className="hidden md:block absolute -bottom-6 -right-6 bg-[#ff6900] text-white p-4 rounded-lg">
                <div className="text-2xl font-bold">7+</div>
                <div className="text-sm">Years Experience</div>
              </div> */}
            </div>
            <div className='md:col-span-7 md:pl-0 lg:pl-10'>

              <h2 className='text-2xl md:text-3xl lg:text-[45px] font-semibold text-[#38A0A7] capitalize mb-4 custom-heading-color-blue' dangerouslySetInnerHTML={{ __html: pageData.customFields[0].heading ?? '' }} />
               
              <div className='mb-6 text-sm text-[#3C3C3C] md:text-[16px] font-normal leading-[1.8rem] lg:mb-12' dangerouslySetInnerHTML={{ __html: pageData.customFields[0].content ?? '' }} />
               
            </div>
          </div>
        </div>

        <div className='bg-[url(/images/certificate-bg.png)] bg-center bg-no-repeat bg-cover lg:bg-[length:100%_100%]' id='our-certificate'>
          <div className='container mx-auto px-4 py-12 md:py-15'>
            <div className='flex flex-col justify-center items-center gap-4'>
              <h2 className='text-center text-2xl md:text-3xl lg:text-[45px] text-white font-semibold capitalize leading-12 custom-heading-color-light' dangerouslySetInnerHTML={{ __html: pageData.customFields[1].heading ?? '' }}/>
                
              <p className="text-xl text-white font-semibold italic">
                "{pageData.customFields[1].sub_heading}"
              </p>
              <div className="max-w-5xl text-center mx-auto text-sm md:text-[16px] font-normal text-white leading-[1.8rem]" dangerouslySetInnerHTML={{ __html: pageData.customFields[1].content ?? '' }} />
            </div>
          </div>
        </div>


        <div className='container mx-auto px-4 py-12 md:py-15'>
          <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-12 gap-10 md:gap-6 items-center'>

            <div className='md:col-span-7 md:pl-0 lg:pl-10'>

              <h2 className='text-2xl md:text-3xl lg:text-[45px] font-semibold text-[#38A0A7] capitalize mb-4 custom-heading-color-blue' dangerouslySetInnerHTML={{ __html: pageData.customFields[2].heading ?? '' }}/>
                

              <div className='mb-6 text-sm text-[#3C3C3C] md:text-[16px] font-normal leading-[1.8rem] lg:mb-12' dangerouslySetInnerHTML={{ __html: pageData.customFields[2].content ?? '' }} />
                
            </div>
            <div className='md:col-span-5'>
              <Image
                src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/${pageData.customFields[2].image}`|| "https://placehold.co/800x800.png?text=No\nImage"}
                width={800}
                height={800}
                className='w-full h-auto object-cover rounded-2xl'
                alt='About Us'
                priority
              />
            </div>
          </div>
        </div>

        <AboutCoreValues />
      
      </section>
    </>
  )
}

export default AboutUsPage