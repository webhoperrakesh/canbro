import React from 'react'
import Breadcrumbs from '@/components/Breadcrumbs'
import Link from "next/link"
import MapEmbed from '@/components/MapEmbed';
import { PiMapPinLine, PiClock } from "react-icons/pi";
import { TfiEmail } from "react-icons/tfi";
import ContactForm from '@/components/ContactForm';
import getIconComponent from '@/utils/getIconComponent';
import { generateSeoMetadata } from "@/utils/generateSeoMetadata"
import { getAbsoluteUrl } from "@/utils/helper"


export const generateMetadata = async () => {

  const defaultSeo = {
    seo_title: "Contact Us | Canbro",
    seo_description:
      "Get in touch with inquiries. Reach us at our offices or send us a message online.",
  };
  const pageUrl = getAbsoluteUrl("/contact");

  return generateSeoMetadata(defaultSeo, pageUrl, "article");
};

const ContactUs = async () => {

  const [contactInfo, socialLinks] = await Promise.all([
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/settings`, {
      next: { revalidate: 600 },
    }).then((res) => res.json()),

    fetch(`${process.env.NEXT_PUBLIC_API_URL}/menus/social`, {
      next: { revalidate: 600 },
    }).then((res) => res.json()),
  ]);


  return (
    <>
      <Breadcrumbs title="Contact us" bgImage="/images/slider-bg-1.png" />
      <section id='contact-us' className='bg-[#F6F6F6]'>
        <div className='container mx-auto px-4 py-12 md:py-15'>


          <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-12 gap-10 md:gap-6 items-center'>
            <div className='md:col-span-6'>

              <div className="pb-6 text-left">
                <h2 className='text-2xl md:text-3xl lg:text-[45px] font-semibold text-[#38A0A7] capitalize mb-4'>
                  <span className='text-[#212088]'>Contact</span> Information
                </h2>
                <p className="mb-6 text-sm text-[#3C3C3C] lg:text-[18px] font-semibold opacity-90">Find all the ways to get in touch with us.</p>

                <div className="grid grid-rows-1 md:grid-rows-1 lg:grid-rows-1 gap-8">

                  {contactInfo.settings.address && (
                    <div className='lg:col-span-1 py-4'>
                      <div className="flex items-start justify-start space-x-4">
                        <div className='w-12 h-12  mt-1 rounded-full flex items-center justify-center bg-[#38A0A7]'>
                          <PiMapPinLine className="h-6 w-6 shrink-0 text-white" />
                        </div>
                        <div>
                          <h3 className="text-[#19065f] font-bold text-xl">Our Address</h3>
                          <p className="text-gray-600 max-w-[270px]">
                            {contactInfo.settings.address}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {(contactInfo.settings.contact_email || contactInfo.settings.phone) && (
                    <div className='lg:col-span-1 py-4'>
                      <div className="flex items-start justify-start space-x-4">
                        <div className='w-12 h-12 mt-1 rounded-full flex items-center justify-center bg-[#38A0A7]'>
                          <TfiEmail className="h-6 w-6 text-white shrink-0" />
                        </div>
                        <div>
                          <h3 className="text-[#19065f] font-bold text-xl">PCD Pharma Franchise</h3>
                          <p className="text-gray-600">
                            <Link href={`mailto:${contactInfo.settings.contact_email}`}>
                              {contactInfo.settings.contact_email}
                            </Link>
                          </p>
                          <p className="text-gray-600 flex items-center">
                            <Link href={`tel:${contactInfo?.settings?.phone.split(',')[0].replace(/-/g, "")}`}>{contactInfo?.settings?.phone.split(',')[0]}</Link>, <Link href={`tel:${contactInfo?.settings?.phone.split(',')[1].replace(/-/g, "")}`}>{contactInfo?.settings?.phone.split(',')[1]}</Link>
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {contactInfo.settings.business_hours && (
                    <div className='lg:col-span-1 py-4'>
                      <div className="flex items-start justify-start space-x-4">
                        <div className='w-12 h-12 rounded-full mt-1 flex items-center justify-center bg-[#38A0A7]'>
                          <PiClock className="h-6 w-6 text-white shrink-0" />
                        </div>
                        <div>
                          <h3 className="text-[#19065f] font-bold text-xl">Office Hours</h3>
                          <p className="text-gray-600">{contactInfo?.settings?.business_hours}</p>
                          {/* <p className="text-gray-600 flex items-center">
                          9:00 am - 6:00 pm
                        </p> */}
                        </div>
                      </div>
                    </div>
                  )}

                  {socialLinks.items.length > 0 &&
                    <div className="text-left">
                      <p className="text-lg text-[#19065f] font-semibold mb-4">Follow Us</p>
                      <div className="flex justify-start space-x-3">

                        {socialLinks.items.map((item: any, index: number) => {
                          const Icon = getIconComponent(item.icon);
                          return (
                            <Link
                              key={index}
                              href={item.url}
                              target="_blank"
                              className={`w-10 h-10 text-white ${item.css_class} rounded-full flex items-center justify-center transition-colors cursor-pointer`}
                            >
                              {Icon && (
                                <span className="text-white">
                                  <Icon size={20} />
                                </span>
                              )}
                            </Link>
                          );
                        })}

                      </div>
                    </div>
                  }
                </div>
              </div>

            </div>
            <div className='md:col-span-6'>
              <div className="flex items-center justify-center">
                {/* Empty column for spacing on left */}
                {/* Form in the middle column */}
                <div className="lg:col-span-1 bg-white shadow-2xl border border-gray-100 rounded-xl p-8 md:p-10">
                  <div className="pb-6 text-center">
                    <h2 className='text-2xl md:text-3xl lg:text-4xl font-semibold text-[#EF7F1B] capitalize mb-4'>
                      Send Us a Message
                    </h2>
                    <p className="text-[#3C3C3C] lg:text-[18px] font-semibold opacity-90">Have a question or need assistance? Fill out the form below.</p>
                  </div>
                  <div className="">
                    <ContactForm />
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>
      
      
        <div className='container mx-auto px-4 py-12 md:py-15'>
          {/* Our Location Map (Full Width) */}
          {/* <div className="bg-white shadow-lg border border-gray-100 rounded-xl p-8 md:p-10 lg:p-12"> */}
          <div className="text-center">
            <h2 className='text-2xl md:text-3xl lg:text-[45px] font-semibold text-[#38A0A7] capitalize mb-4'>
              <span className='text-[#212088]'>Our</span> Location
            </h2>
            <p className="mb-6 text-sm text-[#3C3C3C] lg:text-[18px] font-semibold opacity-90">Visit us at our office.</p>
          </div>

          <div className="relative h-96 w-full rounded-lg overflow-hidden border border-gray-200">
            <MapEmbed height="400" address="Canbro Healthcare | Dermatology Company | PCD Pharma Franchise in Derma Plot No.374,Phase 3,Sector 3,Industrial Area, HSIIDC, Karnal, Haryana 132001, India" />
          </div>

          {/* </div> */}
        </div>

    </>

  )
}

export default ContactUs