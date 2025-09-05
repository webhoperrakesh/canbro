"use client"

import React, { useState, useEffect } from 'react'
import TopHeader from './Topheader';
import { IoSearchSharp } from "react-icons/io5";
import { IoIosMenu, IoMdClose } from "react-icons/io";
import Link from 'next/link';
import { usePathname, useRouter } from "next/navigation";
import HeaderSearchForm from './HeaderSearchForm';


type MenuItem = {
  id: number;
  title: string;
  url: string;
  icon: string;
  target: string;
  has_child: number;
};

type Menu = {
  id: number;
  name: string;
  slug: string;
  items: MenuItem[];
};

type Logo = {
  value: string;
};

type HeaderProps = {
  mainMenu: Menu;
  logo: Logo[];
  topHeaderData: {
    settings:{
      phone: string;
      business_hours: string;
      contact_email: string;
    }
    };
};


const Header: React.FC<HeaderProps> = ({ mainMenu, logo, topHeaderData }) => {

  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen)
    console.log("Search Toggled:", !isSearchOpen);
  }

  const currentPath = usePathname();

  const logoImg = logo
    ? `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/${logo[0].value}`
    : "https://placehold.co/200x100.png";


  return (
    <header className="bg-white fixed top-0 w-full z-100">
      <div className='flex mx-auto w-full justify-between items-center'>
        <div className="container mx-auto px-4 md:px-0 py-[18px]">
          <TopHeader logo={logoImg} workingHour = {topHeaderData?.settings?.business_hours} email = {topHeaderData?.settings?.contact_email} phone = {topHeaderData?.settings?.phone} />
        </div>
      </div>

      <nav className="bg-[#19065F] text-white">
        <div className="container mx-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-14">
              {/* Desktop Navigation */}

              <div className="hidden lg:flex w-full items-center lg:justify-center gap-[30px] lg:space-x-4">
                {mainMenu?.items.map((item: any, index: any) => {
                  const isActive = item.url === currentPath;

                  return (
                    <Link
                      key={item.title || index}
                      href={item.url}
                      className={`px-3 py-2 lg:text-[16px] xl:text-lg font-normal transition-colors duration-200 ${isActive ? "text-[#38A0A7]" : "text-white hover:text-[#38A0A7]"
                        }`}
                    >
                      {item.title}
                    </Link>
                  );
                })}



                {/* Contact Us Button and Search - Desktop */}
                <Link
                  href="/contact"
                  className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-normal transition-colors duration-200 hover:cursor-pointer">
                  Contact Us
                </Link>


                {/* Search Overlay */}
                <div className="relative">
                      {isSearchOpen && (
                       <HeaderSearchForm toggleSearch={toggleSearch} rightClass = {true} inputWidth = {false} />
                      )}
                
                      <button
                        className="p-2 border-2 border-white rounded-full hover:cursor-pointer transition-colors duration-200 lg:-ml-[20px]"
                        onClick={toggleSearch}
                      >
                        <IoSearchSharp className="h-5 w-5" />
                      </button>
                    </div>

              </div>



              {/* Mobile menu button */}
              <div className="lg:hidden w-full flex justify-between items-center space-x-4">
                <div className="relative">
                  {isSearchOpen && (
                    <HeaderSearchForm toggleSearch={toggleSearch} rightClass = {false} inputWidth = {true} />
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
                  {mainMenu?.items.map((item: any, index: any) => {

                    const isActive = item.url === currentPath;
                    return (
                      <Link
                        key={item.title || index}
                        href={item.url}
                        className={`block py-2 text-base font-normal transition-colors duration-200 ${isActive
                          ? "text-[#38A0A7]"
                          : "text-white hover:text-[#38A0A7]"
                          }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.title}
                      </Link>
                    );
                  })}
                  <div className="pt-4 pb-2">
                    <Link
                      href="/contact"
                      onClick={() => setIsMenuOpen(false)}
                      className="inline-block w-fit bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full font-normal transition-colors duration-200"
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