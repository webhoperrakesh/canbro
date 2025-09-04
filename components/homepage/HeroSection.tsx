import React from 'react'
import Link from 'next/link'

const HeroSection = () => {
    return (
        <section className="relative h-auto md:h-[60vh] lg:h-[70vh] xl:h-[80vh] overflow-hidden bg-[url(/images/hero-bg.png)] bg-center bg-no-repeat bg-cover lg:bg-[length:100%_100%]">
            <div className="container mx-auto px-4 py-12 md:py-26 lg:py-30">
                <div className="flex flex-col md:flex-row items-center">

                    {/* Left content - Text */}
                    <div className="w-full md:w-1/2 text-white z-10 mb-10 md:mb-0">
                        <p className="text-lg md:text-2xl lg:text-3xl font-light mb-2">Committed to better</p>
                        <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold mb-4 leading-tight">
                            Nephrology &<br />Urology Care
                        </h1>
                        <p className="text-sm md:text-[14px] max-w-md mb-8">
                            We use only the best quality materials on the market in order to provide the best products to our
                            patients, so don't worry about anything and leave yourself.
                        </p>
                        <Link href="/" className="text-sm md:text-[16px] bg-orange-500 hover:bg-orange-600 text-white rounded-full px-8 py-2">
                            Read More
                        </Link>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default HeroSection