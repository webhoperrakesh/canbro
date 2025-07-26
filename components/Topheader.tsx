import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FiDownloadCloud } from "react-icons/fi";

const TopHeader = () => {
    return (
        <div className="flex items-center justify-between">
            <Link href="/">
                <Image
                    src="/images/logo.png"
                    alt="CANBRO Nephrology and Urology Care"
                    width={200}
                    height={100}
                    className="object-contain"
                />
            </Link>

            <div className="hidden lg:flex items-center space-x-8">
                {/* Working Days */}
                <div className="flex items-center space-x-2">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center">
                        <Image
                            src="/images/clock.png"
                            alt="clock"
                            width={30}
                            height={30}
                            className="object-contain"
                        />
                    </div>
                    <div className='flex flex-col gap-0.5'>
                        <div className="text-sm font-semibold text-[#000]">Working Days</div>
                        <div className="text-xs text-[#3C3C3C]">Mon-Sat: 9:00 to 6:00</div>
                    </div>
                </div>
            </div>

            {/* PCD Pharma Franchise */}
            <div className="hidden md:flex items-center space-x-2">
                <div className="flex items-center justify-center">
                    <Image
                        src="/images/building.png"
                        alt="building"
                        width={30}
                        height={30}
                        className="object-contain"
                    />
                </div>
                <div className='flex flex-col gap-0.5'>
                    <div className="text-sm font-semibold text-[#000]">PCD Pharma Franchise</div>
                    <div className="text-xs text-[#3C3C3C]">canbrohc@gmail.com</div>
                    <div className="text-xs text-[#3C3C3C]">+91-93060-12364 / +91-99922-22198</div>
                </div>
            </div>

            <button className="bg-[#19065F] capitalize text-white px-6 py-3 rounded-full flex items-center justify-center gap-2 hover:cursor-pointer">
                <FiDownloadCloud size={20} className='text-white' />
                <span className='hidden md:block'>download</span> product list
            </button>
        </div>
    )
}

export default TopHeader