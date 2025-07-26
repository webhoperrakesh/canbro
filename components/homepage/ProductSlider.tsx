"use client"
import { useState, useRef, useCallback } from "react"
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Image from "next/image"

const products = [
  {
    id: 1,
    name: "ALFUCAN-D ER",
    subtitle: "Alfuzosin Extended-release & Dutasteride Tablets",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    mainImage: "/images/product-2.png",
    color: "bg-orange-500",
  },
  {
    id: 2,
    name: "CARDIO-PLUS",
    subtitle: "Advanced Cardiovascular Support Formula",
    description:
      "A comprehensive cardiovascular support supplement designed to promote heart health and circulation. Formulated with clinically studied ingredients to support optimal cardiovascular function and overall wellness for active individuals.",
    mainImage: "/images/product-3.png",
    color: "bg-blue-600",
  },
  {
    id: 3,
    name: "IMMUNO-BOOST",
    subtitle: "Natural Immune System Enhancement",
    description:
      "Strengthen your body's natural defenses with our advanced immune support formula. Contains essential vitamins, minerals, and herbal extracts that work synergistically to support immune function and overall health.",
    mainImage: "/images/product-4.png",
    color: "bg-green-600",
  },
]

export default function ProductSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)
  const sliderRef = useRef<HTMLDivElement>(null)

  // Get current, previous, and next products
  const getCurrentProduct = () => products[currentSlide]
  const getPreviousProduct = () => products[(currentSlide - 1 + products.length) % products.length]
  const getNextProduct = () => products[(currentSlide + 1) % products.length]

  const nextSlide = useCallback(() => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentSlide((prev) => (prev + 1) % products.length)
    setTimeout(() => setIsTransitioning(false), 500)
  }, [isTransitioning])

  const prevSlide = useCallback(() => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrentSlide((prev) => (prev - 1 + products.length) % products.length)
    setTimeout(() => setIsTransitioning(false), 500)
  }, [isTransitioning])

  // const goToSlide = useCallback(
  //   (index: number) => {
  //     if (isTransitioning || index === currentSlide) return
  //     setIsTransitioning(true)
  //     setCurrentSlide(index)
  //     setTimeout(() => setIsTransitioning(false), 500)
  //   },
  //   [isTransitioning, currentSlide],
  // )

  // Click handlers for side images
  const handleLeftImageClick = () => {
    prevSlide()
  }

  const handleRightImageClick = () => {
    nextSlide()
  }

  const currentProduct = getCurrentProduct()
  const previousProduct = getPreviousProduct()
  const nextProduct = getNextProduct()

  return (
    <section id="feature-products" className="lg:mb-16">
      <div className="container mx-auto px-4 py-8 md:py-12 lg:py-16">
        {/* Title */}
        <div className="text-center mb-8">
         <h2 className='text-2xl md:text-3xl lg:text-4xl text-[#212088] font-semibold capitalize mb-4 leading-12 text-center'>
            Our <span className='text-[#38A0A7]'>Featured Products</span>
          </h2>
        </div>

        {/* Slider Container */}
        <div className="relative" ref={sliderRef}>
          <div className="flex items-center justify-center min-h-[400px]">
            {/* Left Product Image - Previous Product (Desktop Only) */}
            <div
              className="hidden xl:flex flex-shrink-0 mr-4 lg:mr-8 transform transition-all duration-500 cursor-pointer group items-center justify-center"
              onClick={handleLeftImageClick}
            >
              <div className="relative p-4">
                <Image
                  src={previousProduct.mainImage || "/placeholder.svg"}
                  alt={`Previous product - ${previousProduct.name}`}
                  width={200}
                  height={280}
                  className="w-32 lg:w-48 h-auto object-contain drop-shadow-lg group-hover:scale-105 transition-transform duration-300"
                  draggable={false}
                />
                <div className="absolute inset-0 bg-black/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>

            {/* Center Content - Current Product */}
            <div className="relative flex-1">
              {/* Navigation Buttons */}
              <button
                className="absolute -left-4 md:-left-4 top-1/2 -translate-y-1/2 z-20 bg-[#212088] hover:bg-[#1a1a6b] text-white rounded-full w-8 h-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center group hover:cursor-pointer"
                onClick={prevSlide}
                disabled={isTransitioning}
                aria-label="Previous product"
              >
                <FaArrowLeft className="md:h-6" />
              </button>

              <button
                className="absolute -right-4 md:-right-4 top-1/2 -translate-y-1/2 z-20 bg-[#212088] hover:bg-[#1a1a6b] text-white rounded-full w-8 h-8 shadow-lg hover:shadow-xl ttransition-all duration-300 hover:scale-105 flex items-center justify-center group hover:cursor-pointer"
                onClick={nextSlide}
                disabled={isTransitioning}
                aria-label="Next product"
              >
                <FaArrowRight className="md:h-6" />
              </button>

              {/* Main Product Card */}
              <div className="bg-white rounded-2xl overflow-hidden lg:overflow-visible shadow-xl transition-all duration-500">
                <div className="flex flex-col lg:flex-row">
                  {/* Image Section */}
                  <div className="lg:w-1/2 relative bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-8 lg:p-12 min-h-[300px] lg:min-h-[450px] lg:rounded-tl-2xl lg:rounded-bl-2xl">
                    {/* Background Pattern */}
                    <div className="absolute inset-0">
                      <div className="w-full h-full bg-[url('/images/feature-bg.png')] bg-center bg-no-repeat bg-cover lg:bg-[length:100%_100%]" />
                    </div>

                    {/* Product Image */}
                    <div className="lg:absolute lg:bottom-[-4rem] z-10 transform transition-transform duration-700 hover:scale-105">
                      <Image
                        src={currentProduct.mainImage || "/placeholder.svg"}
                        alt={`Current product - ${currentProduct.name}`}
                        width={400}
                        height={500}
                        className="w-full max-w-[250px] md:max-w-[300px] lg:max-w-[350px] h-auto object-contain drop-shadow-2xl"
                        draggable={false}
                        priority
                      />
                    </div>
                  </div>

                  {/* Content Section */}
                  <div
                    className={`lg:w-1/2 ${currentProduct.color} text-white p-6 md:p-8 lg:p-12 flex flex-col justify-center relative overflow-hidden lg:rounded-tr-2xl lg:rounded-br-2xl`}
                  >
                    {/* Background Decoration */}
                    <div className="relative z-10">
                      <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-3 lg:mb-4 leading-tight lg:line-clamp-1">
                        {currentProduct.name}
                      </h3>
                      
                      <div className="flex items-baseline mb-4 lg:mb-6 gap-4">
                      <div className="w-12 lg:w-16 h-0.5 bg-white/80" />

                      <h4 className="text-base md:text-lg lg:text-[22px] font-medium leading-relaxed opacity-95 lg:line-clamp-2">
                        {currentProduct.subtitle}
                      </h4>
                      </div>


                      <p className="text-sm md:text-base lg:text-lg leading-relaxed opacity-90 line-clamp-4 lg:line-clamp-5">
                        {currentProduct.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Product Image - Next Product (Desktop Only) */}
            <div
              className="hidden xl:flex flex-shrink-0 ml-4 lg:ml-8 transform transition-all duration-500 cursor-pointer group items-center justify-center"
              onClick={handleRightImageClick}
            >
              <div className="relative p-4">
                <Image
                  src={nextProduct.mainImage || "/placeholder.svg"}
                  alt={`Next product - ${nextProduct.name}`}
                  width={200}
                  height={280}
                  className="w-32 lg:w-48 h-auto object-contain drop-shadow-lg group-hover:scale-105 transition-transform duration-300"
                  draggable={false}
                />
                <div className="absolute inset-0 bg-black/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </div>
          </div>

          {/* Slide Indicators */}
          {/* <div className="flex justify-center space-x-2 mt-6 md:mt-8">
            {products.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide ? "bg-[#212088] scale-125" : "bg-gray-300 hover:bg-gray-400"
                }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div> */}
        </div>
      </div>
    </section>
  )
}
