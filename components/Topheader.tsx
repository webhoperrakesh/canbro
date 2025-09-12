import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import DownloadFormModal from './DownloadFormModal';

type TopHeaderProps = {
    logo: string;
    workingHour: string;
    email: string;
    phone: string;
};

const TopHeader = ({ logo, workingHour, email, phone }: TopHeaderProps) => {


    return (
        <div className="flex items-center justify-between">
            <Link href="/">
                <Image
                    src={logo}
                    alt="CANBRO Nephrology and Urology Care"
                    width={310}
                    height={100}
                    className="object-contain main-logo"
                />
            </Link>

            <div className="hidden lg:flex items-center space-x-8">
                {/* Working Days */}
                {workingHour && 
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
                    <div className='flex flex-col gap-1'>
                        <div className="text-[14px] font-bold text-[#000]">Working Days</div>
                        <div className="text-[14px] font-normal text-[#3C3C3C]">{workingHour}</div>
                    </div>
                </div>
                }
            </div>

            {/* PCD Pharma Franchise */}
            <div className="hidden md:flex items-center space-x-2">
                 {(email || phone) && (
                <div className="flex items-center justify-center gap-4">
                    <div>
                    <Image
                        src="/images/building.png"
                        alt="building"
                        width={30}
                        height={30}
                        className="object-contain"
                    />
                    </div>
                    <div className="flex flex-col gap-1">
                    <div className="text-[14px] font-bold text-[#000]">
                        PCD Pharma Franchise
                    </div>
                    {email && <div className="text-[14px] font-normal text-[#3C3C3C]">{email}</div>}
                    {phone &&
                    <div className="text-[14px] font-normal text-[#3C3C3C]">
                       {phone}
                    </div>
                   }
                    </div>
                </div>
                )}
            </div>

           <DownloadFormModal />
           
        </div>
    )
}

export default TopHeader