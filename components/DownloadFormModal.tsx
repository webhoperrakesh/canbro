"use client";

import React, { useState } from 'react'
import { IoMdClose } from "react-icons/io";
import { FiDownloadCloud } from "react-icons/fi";
import ContactForm from './ContactForm';


const DownloadFormModal = () => {

    const [showform, setShowForm] = useState(false);

    return (
        <>
            {showform &&
                <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/50">
                    <div className="relative bg-white w-full max-w-xl p-6 rounded-lg shadow-lg">
                        <IoMdClose size={30} color='gray-700'
                            className='absolute right-4 top-2 z-10 hover:cursor-pointer'
                            onClick={() => {
                                setShowForm(false);
                            }}
                        />
                        <ContactForm downloadOnSuccess />
                    </div>
                </div>
            }

            <button
                onClick={() => setShowForm(true)}
                className="bg-[#19065F] capitalize text-white px-6 py-3 rounded-full flex items-center justify-center gap-2 hover:cursor-pointer font-normal lg:font-[16px]">
                <FiDownloadCloud size={20} className='text-white' />
                <span className='hidden md:block'>download</span> product list
            </button>
        </>
    )
}

export default DownloadFormModal