"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaFacebookF, FaGooglePlusG, FaYoutube, FaXTwitter, FaWhatsapp } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { PiMapPinLineBold } from "react-icons/pi";
import { BsTelephone } from "react-icons/bs";
import { TfiEmail } from "react-icons/tfi";
import { BiMessageRoundedDetail } from "react-icons/bi";

const companyLinks = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/about-us" },
  { label: "Our Products", href: "/products" },
  { label: "PCD Pharma Franchise", href: "/pcd-pharma-franchise" },
];

const quickLinks = [
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
  { label: "Privacy policy", href: "/privacy-policy" },
  { label: "Terms & Condition", href: "/terms-and-condition" },
];


const socialLinks = [
  { icon: <FaFacebookF className="w-5 h-5 text-[#212088]" />, href: "#" },
  { icon: <FaGooglePlusG className="w-5 h-5 text-[#212088]" />, href: "#" },
  { icon: <AiFillInstagram className="w-5 h-5 text-[#212088]" />, href: "#" },
  { icon: <FaYoutube className="w-5 h-5 text-[#212088]" />, href: "#" },
  { icon: <FaXTwitter className="w-5 h-5 text-[#212088]" />, href: "#" },
];


const handleWhatsAppClick = () => {
    // Replace with your WhatsApp number
    const phoneNumber = "919306012364"
    const message = "Hello! I'd like to get in touch."
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, "_blank")
  }

  const handleEmailClick = () => {
    // Replace with your email
    window.location.href = "mailto:canbrohc@gmail.com"
  }


const Footer = () => {
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
                  src="/images/footer-logo.png"
                  alt="CANBRO Nephrology and Urology Care"
                  width={200}
                  height={120}
                  className="object-contain"
                />
              </Link>
            </div>

            <div className="mb-6">
              <p className="md:mr-20 text-[#fff] text-sm lg:text-[14px] font-medium leading-relaxed mb-2 text-justify" style={{hyphens: "auto"}}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              </p>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-3">
              {socialLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  target="_blank"
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
                >
                  {link.icon}
                </Link>
              ))}
            </div>

          </div>


          {/* Company Links */}
          <div className="lg:col-span-1">
            <h3 className="text-[16px] font-medium mb-6 text-white uppercase">company</h3>
            <ul className="space-y-3">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-white capitalize transition-colors text-sm lg:[14px] font-medium flex items-center"
                  >
                    <span className="mr-2 text-cyan-300">›</span> {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h3 className="text-[16px] font-medium mb-6 text-white uppercase">quick links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-white capitalize transition-colors text-sm lg:[14px] font-medium flex items-center"
                  >
                    <span className="mr-2 text-cyan-300">›</span> {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1">
            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start space-x-3">
                <PiMapPinLineBold className="w-5 h-5 text-cyan-300 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white text-sm lg:text-[16px] font-medium leading-relaxed">
                    NH1 Karnal-132001 State : Haryana
                    <br />
                    Country : India
                  </p>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-3">
                <BsTelephone className="w-5 h-5 text-cyan-300 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-white text-sm lg:text-[16px] font-medium mb-1">PCD Pharma Franchise</p>
                  <p className="text-white text-sm lg:text-[16px] font-medium">+91-9306012364, +91-9992222198</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start space-x-3">
                <TfiEmail className="w-5 h-5 text-cyan-300 mt-1 flex-shrink-0" />
                <div>
                  <a
                    href="mailto:canbrohc@gmail.com"
                    className="text-white transition-colors text-sm lg:text-[16px] font-medium"
                  >
                    canbrohc@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </footer>

    {/* Copyright Section */}
      <div className="bg-[#19065f] py-4" style={{marginTop: "-1px"}}>
        <div className="container mx-auto px-4">
          <p className="text-center text-white text-sm">
            Copyright by © 2018-{new Date().getFullYear()} canbrohealthcare | Web Development and Marketing By{" "}
            <span className="text-orange-400 font-semibold uppercase"><span className='text-[#4375c0]'>WEB</span>HOPERS</span>
          </p>
        </div>
      </div>

     <div className="fixed -right-[30px] top-1/2 transform -translate-y-1/2 z-50 flex flex-col gap-3">
        {/* WhatsApp Button */}
        <button
          onClick={handleWhatsAppClick}
          className="w-[100px] h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-start group hover:cursor-pointer"
          aria-label="Contact via WhatsApp"
        >
          <FaWhatsapp className="ml-[15px] w-8 h-8 group-hover:scale-110 transition-transform duration-200" />
        </button>

        {/* Email Button */}
        <button
          onClick={handleEmailClick}
          className="w-[100px] h-14 bg-orange-500 hover:bg-orange-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-start group hover:cursor-pointer"
          aria-label="Contact via Email"
        >
          <BiMessageRoundedDetail className="ml-[15px] w-8 h-8 group-hover:scale-110 transition-transform duration-200" />
        </button>
      </div>



      </>


  )
}

export default Footer