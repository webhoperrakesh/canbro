"use client"

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaWhatsapp } from "react-icons/fa6";
import { PiMapPinLineBold, PiPhoneCallFill } from "react-icons/pi";
import { BsTelephone } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";
import getIconComponent from '@/utils/getIconComponent';
import ContactForm from './ContactForm';
import MapEmbed from './MapEmbed';

type MenuItem = {
  id: number;
  title: string;
  url: string;
  icon: string;
  target: string;
};

type Menu = {
  id: number;
  name: string;
  slug: string;
  items: MenuItem[];
}[];

type FooterProps = {
  footerMenu: Menu;
  footerData: {
    settings: {
      copyright: string;
      address: string;
      phone: string;
      contact_email: string;
      site_description: string;
    };
  };
};

const Footer: React.FC<FooterProps> = ({ footerMenu, footerData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

  const handleWhatsAppClick = () => {

    const message = "Hi, I need Nephrology PCD Franchise"
      window.open(`https://wa.me/${footerData?.settings?.phone.split(',')[0].replace(/-/g, "")}?text=${encodeURIComponent(message)}`, "_blank")
    }

  const handleCallClick = () => {
    window.location.href = `tel:${footerData?.settings?.phone.split(',')[0].replace(/-/g, "")}`
  }

  // Handle click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        formRef.current &&
        !formRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      <footer className="bg-[url(/images/footer-bg.png)] bg-center bg-no-repeat bg-cover lg:bg-[length:100%_100%] text-white">
        <div className="container mx-auto px-4 py-15">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

            {/* Company Info Section */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <Link href="/">
                  <Image
                    src="/images/canbro-footer-logo.png"
                    alt="CANBRO Nephrology and Urology Care"
                    width={250}
                    height={100}
                    className="object-contain"
                  />
                </Link>
              </div>

              <div className="mb-6">
                {footerData?.settings?.site_description &&
                  <p className="xl:mr-20 text-[#fff] text-sm lg:text-[14px] font-normal leading-relaxed" style={{ hyphens: "auto" }} dangerouslySetInnerHTML={{ __html: footerData?.settings?.site_description }} />
                }
              </div>

              {/* Social Media Icons */}
              {footerMenu[0] &&
                <div className="flex space-x-3 flex-wrap">
                  {footerMenu[0]?.items?.map((item, index) => {
                    const Icon = getIconComponent(item.icon);
                    return (
                      <Link
                        key={index}
                        href={item.url}
                        target="_blank"
                        className="w-8 h-8 mt-[6px] bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
                      >
                        {Icon && (
                          <span className="w-5 h-5 text-[#212088]">
                            <Icon size={20} />
                          </span>
                        )}
                      </Link>
                    );
                  })}
                </div>
              }
            </div>


            {/* Company Links */}
            <div className="lg:col-span-1">
              {footerMenu[1] &&
                <>
                  <h4 className="text-[16px] font-normal mb-6 text-white uppercase">quick links</h4>
                  <ul className="space-y-3">
                    {footerMenu[1]?.items?.map((link, index) => (
                      <li key={index}>
                        <Link
                          href={link.url}
                          className="text-white capitalize transition-colors text-sm lg:[14px] font-normal flex items-center"
                        >
                          <span className="mr-2 text-cyan-300">
                            <Image
                              src="/images/footer-arrow.png"
                              alt="clock"
                              width={5}
                              height={5}
                              className="object-contain"
                            />
                          </span> {link.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              }
            </div>


            {/* Quick Links */}
            <div className="lg:col-span-1">
              <h4 className="text-[16px] font-normal mb-6 text-white uppercase">visit us</h4>
              <MapEmbed height="200" address="Canbro Healthcare | Dermatology Company | PCD Pharma Franchise in Derma Plot No.374,Phase 3,Sector 3,Industrial Area, HSIIDC, Karnal, Haryana 132001, India" />
              {/* {footerMenu[2] &&
                <>
                  <h4 className="text-[16px] font-normal mb-6 text-white uppercase">quick links</h4>
                  <ul className="space-y-3">
                    {footerMenu[2]?.items?.map((link, index) => (
                      <li key={index}>
                        <Link
                          href={link.url}
                          className="text-white capitalize transition-colors text-sm lg:[14px] font-medium flex items-center"
                        >
                          <span className="mr-2 text-cyan-300"><Image
                            src="/images/footer-arrow.png"
                            alt="clock"
                            width={5}
                            height={5}
                            className="object-contain"
                          /></span> {link.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              } */}
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-1">
              <div className="space-y-6">

               {/* Phone */}
                <div className="flex items-start space-x-3">
                  {footerData?.settings?.phone &&
                    <>
                      <BsTelephone className="w-5 h-5 text-[#38A0A7] mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-white text-sm lg:text-[16px] font-normal mb-1">PCD Pharma Franchise</p>
                        <p className="text-white text-sm lg:text-[16px] font-normal">
                          <Link href={`tel:${footerData?.settings?.phone.split(',')[0].replace(/-/g, "")}`}>{footerData?.settings?.phone.split(',')[0]}</Link>, <Link href={`tel:${footerData?.settings?.phone.split(',')[1].replace(/-/g, "")}`}>{footerData?.settings?.phone.split(',')[1]}</Link>
                        </p>
                      </div>
                    </>
                  }
                </div>

                {/* Address */}
                <div className="flex items-start space-x-3">
                  {footerData?.settings?.address &&
                    <>
                      <PiMapPinLineBold className="w-5 h-5 text-[#38A0A7] mt-1 flex-shrink-0" />
                      <div>
                        <p className="text-white text-sm lg:text-[16px] font-normal leading-relaxed" dangerouslySetInnerHTML={{ __html: footerData?.settings?.address }} />
                      </div>
                    </>
                  }
                </div>

                {/* Email */}
                <div className="flex items-start space-x-3">
                  {footerData?.settings?.contact_email &&
                    <>
                      <TfiEmail className="w-5 h-5 text-[#38A0A7] mt-1 flex-shrink-0" />
                      <div>
                        <Link
                          href={`mailto:${footerData?.settings?.contact_email}`}
                          className="text-white transition-colors text-sm lg:text-[16px] font-normal"
                        >
                          {footerData?.settings?.contact_email}
                        </Link>
                      </div>
                    </>
                  }
                </div>

                 

              </div>
            </div>

          </div>
        </div>
      </footer>

      {/* Copyright Section */}
      {footerData?.settings?.copyright &&
        <div className="bg-[#19065f] py-4 mb-10 md:mb-0" style={{ marginTop: "-1px" }}>
          <div className="container mx-auto px-4">
            <p className="text-center text-white text-[12px]">
              {footerData?.settings?.copyright
                ? footerData.settings.copyright.replace("%Y", new Date().getFullYear().toString())
                : `© ${new Date().getFullYear()} All rights reserved.`} | Web Development and Marketing By{" "}
              <span className="text-orange-400 font-semibold uppercase"><span className='text-[#4375c0]'>WEB</span>HOPERS</span>
            </p>
          </div>
        </div>
      }

      <div className="hidden fixed md:-right-[30px] md:top-1/2 md:transform md:-translate-y-1/2 z-50 md:flex flex-col gap-3 call-to-action">
        {/* WhatsApp Button */}
        <button
          id="whatsapp-button"
          onClick={handleWhatsAppClick}
          className="w-[100px] h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-start group hover:cursor-pointer"
          aria-label="Contact via WhatsApp"
        >
          <FaWhatsapp id="whatsapp-button" className="ml-[15px] w-8 h-8 group-hover:scale-110 transition-transform duration-200" />
        </button>

        {/* Email Button */}
        <button
          id="call-button"
          onClick={handleCallClick}
          className="w-[100px] h-14 bg-orange-500 hover:bg-orange-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-start group hover:cursor-pointer"
          aria-label="Contact via Email"
        >
          <PiPhoneCallFill id="call-button" className="ml-[15px] w-8 h-8 group-hover:scale-110 transition-transform duration-200" />
        </button>
      </div>


      <div ref={formRef} className="hidden md:block fixed bottom-0 right-0 z-50 w-80">
        {/* Toggle Header */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="bg-[#19065f] uppercase text-center text-white lg:text-[16px] xl:text-lg font-medium px-4 py-2 cursor-pointer rounded-t-lg"
        >
          place a query
        </div>

        {/* Form Container */}
        <div
          className={`transition-all duration-500 ease-in-out bg-white shadow-sm border border-gray-200 overflow-auto hide-scroll ${isOpen ? 'max-h-[500px] p-4' : 'max-h-0 p-0'
            }`}
        >
          <div className='place-a-query'>
            <ContactForm />
          </div>
        </div>
      </div>



    </>


  )
}

export default Footer