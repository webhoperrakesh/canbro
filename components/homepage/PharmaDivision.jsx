import React from 'react'
import Image from 'next/image'

const PharmaDivision = () => {
    return (
        <section className='bg-[#F6F6F6]' id='pharma-division'>
            <div className='container mx-auto px-4 py-8'>
                <div className="flex flex-col lg:flex-row items-center justify-evenly gap-8 lg:gap-12">
                    {/* Left side - Text content */}
                    <div className="text-center lg:text-left">
                        <h1 className="text-2xl sm:text-3xl lg:text-4xl text-gray-900 leading-tight">
                            Innovating Through
                            <br />
                            Our Specialty <span className="text-teal-600 font-bold">Pharma <br />
                            Divisions</span>
                        </h1>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-center">
                        <Image
                            src="/images/logo.png"
                            alt="CANBRO Nephrology and Urology Care"
                            width={200}
                            height={100}
                            className="object-contain"
                        />
                        <Image
                            src="/images/logo.png"
                            alt="CANBRO Nephrology and Urology Care"
                            width={200}
                            height={100}
                            className="object-contain"
                        />
                        <Image
                            src="/images/logo.png"
                            alt="CANBRO Nephrology and Urology Care"
                            width={200}
                            height={100}
                            className="object-contain"
                        />
                    </div>

                </div>
            </div>
        </section>
    )
}

export default PharmaDivision