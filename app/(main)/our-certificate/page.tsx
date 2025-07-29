"use client"

import React, { useState } from 'react'
import Breadcrumbs from '@/components/Breadcrumbs'
import { LuFileCheck, LuAward, LuShield, LuZoomIn } from "react-icons/lu";
import { IoCloseOutline } from "react-icons/io5";
import Image from 'next/image';



const certificates = [
  {
    id: 1,
    title: "G.L.P. Certificate",
    subtitle: "Good Laboratory Practice",
    description: "Certified by Office of the State Drugs Controller, Haryana Food and Drug Administration",
    image: "/certificates/glp.jpg",
    icon: <LuFileCheck className="w-6 h-6" />,
    validUntil: "Valid for three years from date of issue",
    category: "Laboratory Practice",
  },
  {
    id: 2,
    title: "G.M.P. Certificate",
    subtitle: "Good Manufacturing Practice",
    description: "Manufacturing license compliance certification from Haryana FDA",
    image: "/certificates/gmp.jpg", // Using same image for demo
    icon: <LuAward className="w-6 h-6" />,
    validUntil: "Valid for three years from date of issue",
    category: "Manufacturing",
  },
  {
    id: 3,
    title: "WHO-GMP Certificate",
    subtitle: "World Health Organization GMP",
    description: "International WHO-GMP certification scheme compliance",
    image: "/certificates/who-gmp.jpg", // Using same image for demo
    icon: <LuShield className="w-6 h-6" />,
    validUntil: "Valid as per WHO certification guidelines",
    category: "International Standard",
  },
]

// Custom Badge Component
const Badge = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium uppercase bg-[#ff6900] text-white ${className}`}
    >
      {children}
    </span>
  )
}

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
    <div className="fixed inset-0 z-111 flex items-center justify-center">
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

const OurCertificate = () => {

const [selectedCertificate, setSelectedCertificate] = useState<(typeof certificates)[0] | null>(null)

  const openModal = (certificate: (typeof certificates)[0]) => {
    setSelectedCertificate(certificate)
  }

  const closeModal = () => {
    setSelectedCertificate(null)
  }

  return (
    <>
    <Breadcrumbs title="Our Certificate" bgImage="/images/slider-bg-1.png" />
    {/* Header Section */}
          {/* <div className="bg-white">
             <div className='container mx-auto px-4 py-12 md:py-15'>
              <div className="text-center">
                <h2 className='text-2xl md:text-3xl lg:text-4xl font-semibold text-[#38A0A7] capitalize mb-4'>
              <span className='text-[#212088]'>Our</span> Certifications
            </h2>
                <p className="text-sm text-[#3C3C3C] lg:text-[18px] font-semibold opacity-90 max-w-3xl mx-auto">
                  We maintain the highest standards of quality and compliance through our comprehensive certifications from
                  regulatory authorities.
                </p>
              </div>
            </div>
          </div> */}

          <div className="bg-white">
             <div className='container mx-auto px-4 py-12 md:py-15'>
              <div className="text-center">
                 <h2 className='text-2xl md:text-3xl lg:text-4xl font-semibold text-[#38A0A7] capitalize mb-4'>
                  <span className='text-[#212088]'>Commitment to</span> Quality & Compliance
                  </h2>
                <p className="text-sm text-[#3C3C3C] lg:text-[18px] font-semibold opacity-90 max-w-3xl mx-auto">
                  Our certifications demonstrate our unwavering commitment to maintaining the highest standards in
                  pharmaceutical manufacturing and laboratory practices, ensuring product quality and safety.
                </p>
              </div>
            </div>
          </div>
    
          {/* Certificates Grid */}
          <div className='bg-[#F6F6F6]'>
          <div className='container mx-auto px-4 py-12 md:py-15'>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {certificates.map((certificate) => (
                <div key={certificate.id} className="group cursor-pointer" onClick={() => openModal(certificate)}>
                  <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                    {/* Certificate Preview */}
                    <div className="relative aspect-[3/4] overflow-hidden bg-gray-50">
                      <Image
                        src={certificate.image || "/placeholder.svg"}
                        alt={certificate.title}
                        fill
                        className="object-fill group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-[#ff6900] backdrop-blur-sm rounded-full p-2">
                          <LuZoomIn className="w-5 h-5 text-white" />
                        </div>
                      </div>
                      {/* <div className="absolute top-4 left-4">
                        <Badge className="bg-[#38A0A7]/90 backdrop-blur-sm">{certificate.category}</Badge>
                      </div> */}
                    </div>
    
                    {/* Certificate Info */}
                    <div className="p-6">
                      <div className="flex items-start gap-3 mb-3">
                        <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#38A0A7] text-white">{certificate.icon}</div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-[#19065f] text-[18px] font-bold text-xl mb-1">{certificate.title}</h3>
                          <p className="text-sm lg:text-[16px] font-medium text-gray-600 mb-2">{certificate.subtitle}</p>
                        </div>
                      </div>
    
                      {/* <p className="text-sm text-gray-600 mb-4 line-clamp-2">{certificate.description}</p> */}
    
                      {/* <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">{certificate.validUntil}</span>
                        <Button
                          variant="outline"
                          className="group-hover:bg-blue-50 group-hover:border-blue-200 bg-transparent text-xs px-3 py-1"
                        >
                          View Certificate
                        </Button>
                      </div> */}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          </div>


    
          {/* Custom Modal for Lightbox */}
          <Modal isOpen={!!selectedCertificate} onClose={closeModal}>
            {selectedCertificate && (
              <div className="relative w-full h-full bg-black rounded-lg overflow-hidden">
                <Image
                  src={selectedCertificate.image || "/placeholder.svg"}
                  alt={selectedCertificate.title}
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
                        <h3 className="text-white text-[18px] font-bold text-xl mb-1">{selectedCertificate.title}</h3>
                        <p className="text-sm lg:text-[16px] font-medium text-white">{selectedCertificate.subtitle}</p>
                      </div>
                    </div>
                    {/* <p className="text-sm text-gray-200 mb-2">{selectedCertificate.description}</p>
                    <p className="text-xs text-gray-300">{selectedCertificate.validUntil}</p> */}
                  </div>
                </div>
              </div>
            )}
          </Modal>
    
          {/* Additional Info Section */}
          {/* <div className="bg-white">
             <div className='container mx-auto px-4 py-12 md:py-15'>
              <div className="text-center">
                 <h2 className='text-2xl md:text-3xl lg:text-4xl font-semibold text-[#38A0A7] capitalize mb-4'>
                  <span className='text-[#212088]'>Commitment to</span> Quality & Compliance
                  </h2>
                <p className="text-sm text-[#3C3C3C] lg:text-[18px] font-semibold opacity-90 max-w-3xl mx-auto">
                  Our certifications demonstrate our unwavering commitment to maintaining the highest standards in
                  pharmaceutical manufacturing and laboratory practices, ensuring product quality and safety.
                </p>
              </div>
            </div>
          </div> */}
    </>
    
  )
}

export default OurCertificate