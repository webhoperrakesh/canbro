import React from 'react'
import Image from 'next/image'

const OurCertification = () => {
    return (
        <section className='bg-[url(/images/certificate-bg.png)] bg-auto bg-center bg-no-repeat' style={{ backgroundSize: "100% 100%" }} id='our-certificate'>
            <div className='container mx-auto px-4 py-12 md:py-15'>
                <div className='flex flex-col justify-center items-center gap-4'>
                    <p className="text-sm text-white uppercase bg-orange-500 rounded-full w-max py-2 px-6 mb-4">
                        Our Certification
                    </p>
                    <h2 className='text-center text-2xl md:text-3xl lg:text-4xl text-white font-bold capitalize mb-4 leading-12'>
                        Backed by Standards. <span className='text-[#38A0A7]'>Trusted by Professionals</span>
                    </h2>
                    <div className='flex items-center justify-center flex-row w-full gap-10'>
                        <Image
                            src="/images/iso-certificate.png"
                            width={138}
                            height={138}
                            className='h-auto object-cover'
                            alt='ISO Certificate'
                            priority
                        />
                        <Image
                            src="/images/qlt-certificate.png"
                            width={140}
                            height={140}
                            className='h-auto object-cover'
                            alt='Qlt Certificaet'
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurCertification