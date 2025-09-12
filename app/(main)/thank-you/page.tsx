import React from 'react'
import { BiHome } from 'react-icons/bi'
import { BsArrowRight } from 'react-icons/bs'
import Link from 'next/link'
import { IoMdCheckmarkCircleOutline } from "react-icons/io";


const ThankYou = () => {
    return (
        <div className="min-h-[500px] bg-background flex items-center justify-center">
            <div className="container mx-auto px-4 py-16 text-center">
                <div className="mx-auto max-w-3xl flex items-center justify-center flex-col">

                    <IoMdCheckmarkCircleOutline className="mb-3" color='green' size={60}/>

                    <h1 className="text-4xl font-bold mb-3 text-[#19065f]">
                        Thank You for Your Inquiry!
                    </h1>

                    <p className="mb-6 text-sm text-[#3C3C3C] md:text-[16px] font-normal leading-[1.8rem]">
                        We appreciate your interest in CANBRO's nephrology and urology care solutions.
                    </p>

                    <div className="mt-6 flex items-center justify-center flex-col md:flex-row gap-4">
                        <Link
                            href="/products"
                            className="bg-[#19065F] capitalize text-white px-6 py-3 rounded-full flex items-center justify-center gap-2 hover:cursor-pointer font-normal lg:font-[16px]">
                            View Our Products
                            <BsArrowRight className="ml-2 h-5 w-5" />
                        </Link>

                        <Link
                            href="/"
                            className="bg-orange-500 hover:bg-orange-600 capitalize text-white px-6 py-3 rounded-full flex items-center justify-center gap-2 hover:cursor-pointer font-normal lg:font-[16px]"
                        >
                            <BiHome className="mr-2 h-5 w-5" />
                            Back to Home
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ThankYou