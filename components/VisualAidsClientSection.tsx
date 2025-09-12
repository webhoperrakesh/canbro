"use client"

import { useState, useEffect } from "react"
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Image from "next/image"
import Link from "next/link";

type Product = {
  id: number;
  title: string;
  slug: string;
  image: string | null;
  composition: string;
  long_dec: string | TrustedHTML;
  visual_aids_image: string;
}

type ProductCardProps = {
  slidesData: Product[];
}

const VisualAidsClientSection = ({ slidesData }: ProductCardProps) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [imageLoaded, setImageLoaded] = useState(false)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slidesData.length)
    setImageLoaded(false) // Reset loader state for next image
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slidesData.length) % slidesData.length)
    setImageLoaded(false)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setImageLoaded(false)
  }

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000)
    return () => clearInterval(interval)
  }, [slidesData.length])

  const currentData = slidesData[currentSlide]

  return (
    <div className="relative">
      <div className="bg-white rounded-3xl overflow-hidden">
        <div className="flex flex-col lg:flex-row lg:min-h-[550px]">
          {/* Left Section - Product Info */}
          <div className="bg-[url(/images/slider-bg-1.png)] bg-center bg-no-repeat bg-cover lg:bg-[length:100%_100%] flex flex-col items-start justify-center rounded-2xl text-white p-8 lg:p-12 lg:w-3/5 lg:pr-28" style={{ backgroundSize: "100% 100%" }}>
            <h2 className="text-2xl md:text-[40px] font-bold text-orange-400 mb-4">{currentData.title}</h2>

            <p className="text-sm lg:text-[20px] text-white font-semibold mb-6 opacity-90">{currentData.composition}</p>

            <div className="space-y-3 mr-4 mb-8 line-clamp-6 font-normal" dangerouslySetInnerHTML={{ __html: currentData.long_dec }} />

            <Link
              href={`/product/${currentData.slug}`}
              className="text-sm md:text-[16px] bg-orange-500 hover:bg-orange-600 text-white rounded-md px-6 py-3 w-fit transition-all duration-300 hover:scale-105 hover:cursor-pointer"
            >
              Read more...
            </Link>
          </div>

          {/* Right Section - Product Image */}
          <div className="-ml-[98px] hidden lg:w-1/2 lg:flex items-center justify-center xl:-ml-30 z-10 overflow-hidden">
            <div className="relative w-full flex items-center justify-center aspect-square lg:aspect-[16/10]">
              {!imageLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-2xl">
                  <span className="animate-spin border-4 border-orange-400 border-t-transparent rounded-full w-10 h-10"></span>
                </div>
              )}
              <Image
                src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/${currentData.visual_aids_image}` || "https://placehold.co/600x400.png?text=No+Image"}
                alt={`${currentData.title} product packaging`}
                fill
                className={`w-full rounded-2xl transition-opacity duration-300 ${imageLoaded ? "opacity-100" : "opacity-0"}`}
                priority
                onLoadingComplete={() => setImageLoaded(true)}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="mt-5 justify-center lg:absolute lg:mt-0 lg:justify-end right-0 top-0 flex flex-row items-center gap-3 z-20">
        {/* Dots Indicator */}
        <div className="hidden lg:flex flex-row gap-2">
          {slidesData.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${index === currentSlide ? "bg-orange-500" : "bg-gray-300"}`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Arrow Controls */}
        <div className="flex flex-row gap-2">
          <button
            onClick={prevSlide}
            className="w-11 h-11 rounded-full p-0 bg-orange-500 hover:bg-orange-600 flex items-center justify-center transition-all duration-300 hover:scale-105 hover:cursor-pointer"
            aria-label="Previous slide"
          >
            <FaArrowLeft className="text-white group-hover:scale-110 transition-transform" />
          </button>
          <button
            onClick={nextSlide}
            className="w-11 h-11 rounded-full p-0 bg-orange-500 hover:bg-orange-600 flex items-center justify-center transition-all duration-300 hover:scale-105 hover:cursor-pointer"
            aria-label="Next slide"
          >
            <FaArrowRight className="text-white group-hover:scale-110 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default VisualAidsClientSection
