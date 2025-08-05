import React from 'react'
import Breadcrumbs from '@/components/Breadcrumbs'
import Link from "next/link"
import MapEmbed from '@/components/MapEmbed';
import { FaFacebookF, FaYoutube, FaXTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { PiMapPinLine, PiClock  } from "react-icons/pi";
import { TfiEmail } from "react-icons/tfi";
import ContactForm from '@/components/ContactForm';


const socialIcons = [
  {
    icon: <FaFacebookF className="w-5 h-5" />,
    bgColor: "bg-blue-600",
    hoverColor: "hover:bg-blue-700",
  },
  {
    icon: <FaYoutube className="w-5 h-5" />,
    bgColor: "bg-red-500",
    hoverColor: "hover:bg-red-600",
  },
  {
    icon: <FaXTwitter className="w-5 h-5" />,
    bgColor: "bg-black",
    hoverColor: "hover:bg-gray-800",
  },
  {
    icon: <FaInstagram className="w-5 h-5" />,
    bgColor: "bg-pink-500",
    hoverColor: "hover:bg-pink-600",
  },
  {
    icon: <FaLinkedinIn className="w-5 h-5" />,
    bgColor: "bg-blue-700",
    hoverColor: "hover:bg-blue-800",
  },
];


const ContactUs = () => {
  return (
    <>
      <Breadcrumbs title="Contact us" bgImage="/images/slider-bg-1.png" />
      <section id='contact-us'>
        <div className='container mx-auto px-4 py-12 md:py-15'>

    
          {/* Contact Information (Full Width) */}
        
          <div className="pb-6 text-center">
            <h2 className='text-2xl md:text-3xl lg:text-4xl font-semibold text-[#38A0A7] capitalize mb-4'>
              <span className='text-[#212088]'>Contact</span> Information
            </h2>
            <p className="mb-6 text-sm text-[#3C3C3C] lg:text-[18px] font-semibold opacity-90">Find all the ways to get in touch with us.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            <div className='lg:col-span-1 bg-white shadow-lg border border-gray-100 rounded-xl p-8 md:p-10'>
              <div className="flex items-start justify-center space-x-4">
                <div className='w-12 h-12  mt-1 rounded-full flex items-center justify-center bg-[#38A0A7]'>
                <PiMapPinLine className="h-6 w-6 shrink-0 text-white" />
                </div>
                <div>
                  <h3 className="text-[#19065f] font-bold text-xl">Our Address</h3>
                  <p className="text-gray-600">
                    NH-I Karnal-132001
                    <br />
                    State: Haryana
                    <br />
                    Country: India
                  </p>
                </div>
              </div>
            </div>

            <div className='lg:col-span-1 bg-white shadow-lg border border-gray-100 rounded-xl p-8 md:p-10'>
              <div className="flex items-start justify-center space-x-4">
                <div className='w-12 h-12 mt-1 rounded-full flex items-center justify-center bg-[#38A0A7]'>
                <TfiEmail className="h-6 w-6 text-white shrink-0" />
                </div>
                <div>
                  <h3 className="text-[#19065f] font-bold text-xl">PCD Pharma Franchise</h3>
                  <p className="text-gray-600">canbrohc@gmail.com</p>
                  <p className="text-gray-600 flex items-center">
                    +91-9306022364, +91-9992222198
                  </p>
                </div>
              </div>
            </div>

            <div className='lg:col-span-1 bg-white shadow-lg border border-gray-100 rounded-xl p-8 md:p-10'>
              <div className="flex items-start justify-center space-x-4">
                <div className='w-12 h-12 rounded-full mt-1 flex items-center justify-center bg-[#38A0A7]'>
                <PiClock className="h-6 w-6 text-white shrink-0" />
                </div>
                <div>
                  <h3 className="text-[#19065f] font-bold text-xl">Office Hours</h3>
                  <p className="text-gray-600">Monday to Saturday</p>
                  <p className="text-gray-600 flex items-center">
                    9:00 am - 6:00 pm
                  </p>
                </div>
              </div>
            </div>

          </div>
          <div className="mt-10 text-center">
            <p className="inline-block text-sm lg:font-[16px] font-medium text-white uppercase bg-orange-500 rounded-full w-max py-2 px-6 mb-6">Follow Us</p>
            <div className="flex justify-center space-x-6">

              {socialIcons.map((item, index) => (
                <Link href="#"
                  key={index}
                  className={`w-10 h-10 text-white ${item.bgColor} rounded-full flex items-center justify-center ${item.hoverColor} transition-colors cursor-pointer`}
                >
                  {item.icon}
                </Link>
              ))}

            </div>
          </div>
        </div>

        <div className='bg-[#38a0a7]'>
          <div className='container mx-auto px-4 py-12 md:py-15'>
            <div className="flex items-center justify-center">
              {/* Empty column for spacing on left */}
              {/* Form in the middle column */}
              <div className="lg:col-span-1 bg-white shadow-lg border border-gray-100 rounded-xl p-8 md:p-10">
                <div className="pb-6 text-center">
                  <h2 className='text-2xl md:text-3xl lg:text-4xl font-semibold text-[#EF7F1B] capitalize mb-4'>
                  Send Us a Message
                  </h2>
                  <p className="text-[#3C3C3C] lg:text-[18px] font-semibold opacity-90">Have a question or need assistance? Fill out the form below.</p>
                </div>
                <div className="pt-6">
                  <ContactForm />
                </div>
              </div>

            </div>
          </div>
        </div>


        <div className='container mx-auto px-4 py-12 md:py-15'>
          {/* Our Location Map (Full Width) */}
          {/* <div className="bg-white shadow-lg border border-gray-100 rounded-xl p-8 md:p-10 lg:p-12"> */}
          <div className="text-center">
            <h2 className='text-2xl md:text-3xl lg:text-4xl font-semibold text-[#38A0A7] capitalize mb-4'>
              <span className='text-[#212088]'>Our</span> Location
            </h2>
            <p className="mb-6 text-sm text-[#3C3C3C] lg:text-[18px] font-semibold opacity-90">Visit us at our office.</p>
          </div>

          <div className="relative h-96 w-full rounded-lg overflow-hidden border border-gray-200">
            <MapEmbed address="Plot No.374,Phase 3,Sector 3,Industrial Area, HSIIDC, Karnal, Haryana 132001" />
          </div>

          {/* </div> */}
        </div>


      </section>
    </>

  )
}

export default ContactUs