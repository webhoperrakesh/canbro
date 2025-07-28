"use client"

import React, { useState } from 'react'
import TopHeader from './Topheader';
import { IoSearchSharp } from "react-icons/io5";
import { IoIosMenu, IoMdClose } from "react-icons/io";
import Link from 'next/link';



const navItems = [
  { name: "Home", href: "/", active: true },
  { name: "About us", href: "/about-us" },
  { name: "Our Products", href: "#" },
  { name: "PCD Pharma Franchise", href: "#" },
  { name: "Our Certificates", href: "/our-certificate" },
]

const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }



  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen)
  }

  return (
    <header className="bg-white fixed top-0 w-full z-100">
      <div className='flex mx-auto w-full justify-between items-center'>
        <div className="container mx-auto px-4 py-3">
          <TopHeader />
        </div>
      </div>

      <nav className="bg-[#19065f] text-white">
        <div className="container mx-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              {/* Desktop Navigation */}

              <div className="hidden lg:flex w-full items-center lg:justify-center xl:justify-between lg:space-x-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`px-3 py-2 lg:text-[16px] xl:text-lg font-medium transition-colors duration-200 ${item.active
                      ? "text-[#38A0A7]"
                      : "text-white hover:text-[#38A0A7]"
                      }`}
                  >
                    {item.name}
                  </Link>
                ))}


                {/* Contact Us Button and Search - Desktop */}

                <Link
                  href="/contact"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-medium transition-colors duration-200 hover:cursor-pointer">
                  Contact Us
                </Link>


                {/* Search Overlay */}
                <div className="relative">
                  {isSearchOpen && (
                    <div className="absolute top-14 right-0 bg-white rounded-lg shadow-lg border p-4 z-50 animate-in slide-in-from-top-2 duration-200">
                      <div className="flex items-center space-x-2">
                        <IoSearchSharp className="h-5 w-5 text-gray-400" />
                        <input
                          type="text"
                          placeholder="Search..."
                          className="flex-1 border-none focus:ring-0 focus:outline-none text-black placeholder:text-gray-400"
                          autoFocus
                        />
                        <button
                          onClick={toggleSearch}
                          className="text-gray-400 hover:text-gray-600 h-8 w-8"
                        >
                          <IoMdClose className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  )}

                  <button className="p-2 border-2 border-#fff rounded-full hover:cursor-pointer transition-colors duration-200" onClick={toggleSearch}>
                    <IoSearchSharp className="h-5 w-5" />
                  </button>
                </div>

              </div>



              {/* Mobile menu button */}
              <div className="lg:hidden w-full flex justify-between items-center space-x-4">
                <div className="relative">
                  {isSearchOpen && (
                    <div className="absolute top-14 bg-white rounded-lg shadow-lg border p-4 z-50 animate-in slide-in-from-top-2 duration-200">
                      <div className="flex items-center space-x-2">
                        <IoSearchSharp className="h-5 w-5 text-gray-400" />
                        <input
                          type="text"
                          placeholder="Search..."
                          className="flex-1 w-[190px] border-none focus:ring-0 focus:outline-none text-black placeholder:text-gray-400"
                          autoFocus
                        />
                        <button
                          onClick={toggleSearch}
                          className="text-gray-400 hover:text-gray-600 h-8 w-8"
                        >
                          <IoMdClose className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  )}
                  <button className="p-2 rounded-full hover:bg-indigo-800 transition-colors duration-200 hover:cursor-pointer" onClick={toggleSearch}>
                    <IoSearchSharp className="h-5 w-5" />
                  </button>
                </div>

                <button onClick={toggleMenu} className="p-2 rounded-md hover:bg-indigo-800 transition-colors duration-200 hover:cursor-pointer">
                  {isMenuOpen ? <IoMdClose className="h-6 w-6" /> : <IoIosMenu className="h-6 w-6" />}
                </button>
              </div>
            </div>

            {/* Mobile Navigation Menu */}
            {isMenuOpen && (
              <div className="lg:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1 border-t border-indigo-800">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`block px-3 py-2 text-base font-medium transition-colors duration-200 ${item.active
                        ? "text-[#38A0A7]"
                        : "text-white hover:text-[#38A0A7]"
                        }`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <div className="pt-4 pb-2">
                    <Link
                      href="/contact"
                      className="w-[160px] bg-orange-500 hover:bg-orange-600 text-white py-2 rounded-full font-medium transition-colors duration-200"
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>

    </header>
  )
}

export default Header