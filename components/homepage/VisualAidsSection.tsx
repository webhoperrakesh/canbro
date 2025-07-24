"use client"

import { useState } from "react"
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Image from "next/image"

interface SlideData {
  id: number
  badge: string
  title: {
    main: string
    highlight: string
  }
  product: {
    name: string
    composition: string
    indications: string[]
  }
  productImage: string
}

const slidesData: SlideData[] = [
  {
    id: 1,
    badge: "OUR VISUAL AIDS",
    title: {
      main: "Visual Learning,",
      highlight: "Real Impact",
    },
    product: {
      name: "AMPLUR-CV 625 LB",
      composition: "Amoxycillin 500mg, Clavulanic 125mg, & Lactic Acid Bacillus 60 million spores tablets",
      indications: [
        "Respiratory Tract Infection",
        "Urinary Tract Infection",
        "Sinusitis, Pharyngitis & Tonsillitis",
        "Upper Respiratory track Infection",
        "Lower Respiratory Track Infection",
      ],
    },
    productImage: "/images/product-1.png",
  },
  // Add more slides as needed
  {
    id: 2,
    badge: "OUR VISUAL AIDS",
    title: {
      main: "Visual Learning,",
      highlight: "Real Impact",
    },
    product: {
      name: "SAMPLE PRODUCT 2",
      composition: "Sample composition for demonstration",
      indications: [
        "Sample Indication 1",
        "Sample Indication 2",
        "Sample Indication 3",
        "Sample Indication 4",
        "Sample Indication 5",
      ],
    },
    productImage: "/images/blog-3.png",
  },
]


export default function AmplurCVSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slidesData.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slidesData.length) % slidesData.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const currentData = slidesData[currentSlide]

  return (
    <section id='visual-aids'>
      <div className='container mx-auto px-4 py-12 md:py-15'>
        {/* Header Badge */}
        <div className="text-center">
          <p className="inline-block text-sm text-white uppercase bg-[#38A0A7] rounded-full py-2 px-4 mb-4">
            {currentData.badge}
          </p>
        </div>

        {/* Main Title */}
        <div className="text-center mb-8">
          <h2 className='text-2xl md:text-3xl lg:text-4xl font-bold text-[#38A0A7] capitalize'>
            <span className="text-[#212088]">{currentData.title.main} </span>{currentData.title.highlight}
          </h2>
        </div>

        {/* Slider Container */}
        <div className="relative">
          <div className="bg-white rounded-3xl overflow-hidden">
            <div className="flex flex-col lg:flex-row lg:min-h-[500px]">
              {/* Left Section - Product Info */}
              <div className="bg-[url(/images/slider-bg-1.png)] bg-center bg-no-repeat bg-cover lg:bg-[length:100%_100%] flex flex-col items-start justify-center rounded-2xl text-white p-8 lg:p-12 lg:w-3/5 lg:pr-28" style={{ backgroundSize: "100% 100%" }}>
                <h2 className="text-2xl md:text-3xl font-bold text-orange-400 mb-4">{currentData.product.name}</h2>

                <p className="text-sm md:text-base mb-6 opacity-90">{currentData.product.composition}</p>

                <ul className="space-y-3 mb-8">
                  {currentData.product.indications.map((indication, index) => (
                    <li key={index} className="flex items-center text-sm md:text-base">
                      <div className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0"></div>
                      {indication}
                    </li>
                  ))}
                </ul>

                <button className="text-sm md:text-[16px] bg-orange-500 hover:bg-orange-600 text-white rounded-full px-8 py-2 w-fit">
                  Read more...
                </button>
              </div>

              {/* Right Section - Product Image */}
              <div className="-ml-[98px] hidden lg:w-1/2 lg:flex items-center justify-center xl:-ml-30 z-10">
                <div className="relative w-full min-h-[360px] flex items-center justify-center h-auto">
                  <Image
                    src={currentData.productImage || "/placeholder.svg"}
                    alt={`${currentData.product.name} product packaging`}
                    fill
                    className="w-full rounded-2xl"
                    priority
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
                  className={`w-3 h-3 rounded-full transition-colors ${index === currentSlide ? "bg-orange-500" : "bg-gray-300"
                    }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Arrow Controls */}
            <div className="flex flex-row gap-2">
              <button
                onClick={prevSlide}
                className="w-8 h-8 rounded-full p-0 bg-orange-500 hover:bg-orange-600 flex items-center justify-center"
                aria-label="Previous slide"
              >
                <FaArrowLeft className="text-white" />
              </button>
              <button
                onClick={nextSlide}
                className="w-8 h-8 rounded-full p-0 bg-orange-500 hover:bg-orange-600 flex items-center justify-center"
                aria-label="Next slide"
              >
                <FaArrowRight className="text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}