"use client"

import React, { useState } from 'react'
import { LuFileCheck, LuAward, LuShield, LuZoomIn } from "react-icons/lu";
import { IoCloseOutline } from "react-icons/io5";
import Image from 'next/image';

type Certificate = {
    heading: string;
    sub_heading?: string | null;
    image: string;
}

type BlockData = {
    heading: string;
    description: string;
    repeater_fields: Certificate[] | string;
}

type OurCertificateProps = {
    certificates: BlockData;
}

const icons = [
    { icon: <LuFileCheck className="w-6 h-6" /> },
    { icon: <LuAward className="w-6 h-6" /> },
    { icon: <LuShield className="w-6 h-6" /> },
];

// Custom Button Component
const Button = ({
    children,
    onClick,
    className = "",
    variant = "primary",
}: {
    children: React.ReactNode
    onClick?: () => void
    className?: string
    variant?: "primary" | "outline"
}) => {
    const baseClasses =
        "inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2"
    const variantClasses = {
        primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
        outline: "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50 focus:ring-blue-500",
    }

    return (
        <button onClick={onClick} className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
            {children}
        </button>
    )
}

// Custom Modal Component
const Modal = ({
    isOpen,
    onClose,
    children,
}: {
    isOpen: boolean
    onClose: () => void
    children: React.ReactNode
}) => {
    if (!isOpen) return null

    return (
        <div className="fixed inset-0 z-1111 flex items-center justify-center">
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" onClick={onClose} />

            {/* Modal Content */}
            <div className="relative z-9999 w-full max-w-4xl h-[90vh] mx-4">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 z-20 p-2 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors hover:cursor-pointer"
                >
                    <IoCloseOutline className="w-6 h-6" />
                </button>

                {children}
            </div>
        </div>
    )
}

const OurCertificate: React.FC<OurCertificateProps> = ({ certificates }) => {

    const repeaterFields = JSON.parse(certificates.repeater_fields as string);

    const [selectedCertificate, setSelectedCertificate] = useState<(typeof repeaterFields)[0] | null>(null)

    const openModal = (certificate: (typeof repeaterFields)[0]) => {
        setSelectedCertificate(certificate)
    }

    const closeModal = () => {
        setSelectedCertificate(null)
    }

    return (
        <>
            {repeaterFields.map((certificate: Certificate, index: number) => {

                const icon = icons[index % icons.length].icon;
                return (
                    <div key={index} className="group cursor-pointer" onClick={() => openModal({ ...certificate, icon })}>
                        <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                            {/* Certificate Preview */}
                            <div className="relative aspect-[3/4] overflow-hidden bg-gray-50">
                                <Image
                                    src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/${certificate.image}` || "/placeholder.svg"}
                                    alt={certificate.heading}
                                    fill
                                    className="object-fill group-hover:scale-105 transition-transform duration-300"
                                />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="bg-[#ff6900] backdrop-blur-sm rounded-full p-2">
                                        <LuZoomIn className="w-5 h-5 text-white" />
                                    </div>
                                </div>
                            </div>

                            {/* Certificate Info */}
                            <div className="p-6">
                                <div className="flex items-start gap-3 mb-3">
                                    <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#38A0A7] text-white">{icon}</div>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="text-[#19065f] text-[18px] font-bold text-xl mb-1">{certificate.heading}</h3>
                                        <p className="text-sm lg:text-[16px] font-medium text-gray-600 mb-2">{certificate.sub_heading}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}

            {/* Custom Modal for Lightbox */}
            <Modal isOpen={!!selectedCertificate} onClose={closeModal}>
                {selectedCertificate && (
                    <div className="relative w-full h-full bg-black rounded-lg overflow-hidden">
                        <Image
                            src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/${selectedCertificate.image}` || "/placeholder.svg"}
                            alt={selectedCertificate.heading}
                            fill
                            className="object-contain"
                            quality={100}
                        />

                        {/* Certificate Info Overlay */}
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                            <div className="text-white">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#38A0A7] text-white">{selectedCertificate.icon}</div>
                                    <div>
                                        <h3 className="text-white text-[18px] font-bold text-xl mb-1">{selectedCertificate.heading}</h3>
                                        <p className="text-sm lg:text-[16px] font-medium text-white">{selectedCertificate.sub_heading}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </Modal>
        </>
    )
}

export default OurCertificate