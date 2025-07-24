"use client"

import type React from "react"

import { useState, useRef, useCallback } from "react"
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

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
  const [touchStart, setTouchStart] = useState(0)
  const [touchEnd, setTouchEnd] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const [dragOffset, setDragOffset] = useState(0)

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

  const goToSlide = useCallback(
    (index: number) => {
      if (isTransitioning || index === currentSlide) return
      setIsTransitioning(true)
      setCurrentSlide(index)
      setTimeout(() => setIsTransitioning(false), 500)
    },
    [isTransitioning, currentSlide],
  )

  // Touch handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX)
    setIsDragging(true)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return
    const currentTouch = e.targetTouches[0].clientX
    const diff = touchStart - currentTouch
    setDragOffset(diff)
  }

  const handleTouchEnd = () => {
    if (!isDragging) return
    setIsDragging(false)
    setDragOffset(0)

    const minSwipeDistance = 50
    const swipeDistance = touchStart - touchEnd

    if (Math.abs(swipeDistance) > minSwipeDistance) {
      if (swipeDistance > 0) {
        nextSlide()
      } else {
        prevSlide()
      }
    }
  }

  // Mouse handlers for desktop
  const handleMouseDown = (e: React.MouseEvent) => {
    setTouchStart(e.clientX)
    setIsDragging(true)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    const diff = touchStart - e.clientX
    setDragOffset(diff)
  }

  const handleMouseUp = (e: React.MouseEvent) => {
    if (!isDragging) return
    setTouchEnd(e.clientX)
    handleTouchEnd()
  }

  const handleMouseLeave = () => {
    if (isDragging) {
      setIsDragging(false)
      setDragOffset(0)
    }
  }

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
    <section id='feature-products'>
      <div className='container mx-auto px-4 py-12 md:py-15'>
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className='text-2xl md:text-3xl lg:text-4xl text-[#212088] font-semibold capitalize mb-4 leading-12 text-center'>
            Our <span className='text-[#38A0A7]'>Featured Products</span>
          </h2>
        </div>

        {/* Slider Container */}
        <div
          className="relative overflow-hidden cursor-grab active:cursor-grabbing"
          ref={sliderRef}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseLeave}
        >
          <div
            className="transition-all duration-500 ease-out"
            style={{
              transform: `translateX(${(dragOffset / (sliderRef.current?.offsetWidth || 1)) * 100}px)`,
            }}
          >
            <div className="flex items-center justify-center min-h-[500px] px-4">
              {/* Left Product Image - Previous Product */}
              <div
                className="hidden lg:block flex-shrink-0 mr-8 transform transition-all duration-500 cursor-pointer group"
                onClick={handleLeftImageClick}
              >
                <div className="relative">
                  <img
                    src={previousProduct.mainImage || "/placeholder.svg"}
                    alt={`Previous product - ${previousProduct.name}`}
                    className="w-48 h-64 object-contain drop-shadow-lg group-hover:scale-105 transition-transform duration-300 opacity-60 group-hover:opacity-90"
                    draggable={false}
                  />
                  {/* <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-0 transition-all duration-300 rounded-lg"></div> */}
                </div>
                {/* <div className="text-center mt-3">
                <p className="text-sm text-gray-600 font-medium group-hover:text-blue-600 transition-colors">
                  {previousProduct.name}
                </p>
                <p className="text-xs text-gray-400 mt-1">Previous</p>
              </div> */}
              </div>

              {/* Center Content - Current Product */}
              <div className="flex items-center justify-center flex-1 transition-all duration-500 rounded-2xl overflow-hidden">
                {/* Center Image */}
                <div className="flex-shrink-0 w-1/2">
                  <img
                    src={currentProduct.mainImage || "/placeholder.svg"}
                    alt={`Current product - ${currentProduct.name}`}
                    className="w-64 h-80 object-contain shadow-2xl"
                    draggable={false}
                  />
                </div>

                {/* Product Info Card */}
                <div
                  className={`${currentProduct.color} text-white p-8 max-w-md shadow-2xl w-1/2`}
                >
                  <h3 className="text-2xl font-bold mb-2">{currentProduct.name}</h3>
                  <div className="w-12 h-0.5 bg-white mb-4"></div>
                  <h4 className="text-lg font-medium mb-4">{currentProduct.subtitle}</h4>
                  <p className="text-sm leading-relaxed opacity-90">{currentProduct.description}</p>
                </div>
              </div>

              {/* Right Product Image - Next Product */}
              <div
                className="hidden lg:block flex-shrink-0 ml-8 transform transition-all duration-500 cursor-pointer group"
                onClick={handleRightImageClick}
              >
                <div className="relative">
                  <img
                    src={nextProduct.mainImage || "/placeholder.svg"}
                    alt={`Next product - ${nextProduct.name}`}
                    className="w-48 h-64 object-contain drop-shadow-lg group-hover:scale-105 transition-transform duration-300 opacity-60 group-hover:opacity-90"
                    draggable={false}
                  />
                  {/* <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-0 transition-all duration-300 rounded-lg"></div> */}
                </div>
                {/* <div className="text-center mt-3">
                <p className="text-sm text-gray-600 font-medium group-hover:text-blue-600 transition-colors">
                  {nextProduct.name}
                </p>
                <p className="text-xs text-gray-400 mt-1">Next</p>
              </div> */}
              </div>
            </div>

            {/* Mobile Product Preview */}
            <div className="lg:hidden flex justify-center space-x-6 mt-8">
              <div className="text-center cursor-pointer" onClick={handleLeftImageClick}>
                <img
                  src={previousProduct.mainImage || "/placeholder.svg"}
                  alt={`Previous - ${previousProduct.name}`}
                  className="w-20 h-28 object-contain drop-shadow-md opacity-60 hover:opacity-90 transition-opacity"
                  draggable={false}
                />
                <p className="text-xs text-gray-600 mt-2">{previousProduct.name}</p>
                <p className="text-xs text-gray-400">Previous</p>
              </div>
              <div className="text-center cursor-pointer" onClick={handleRightImageClick}>
                <img
                  src={nextProduct.mainImage || "/placeholder.svg"}
                  alt={`Next - ${nextProduct.name}`}
                  className="w-20 h-28 object-contain drop-shadow-md opacity-60 hover:opacity-90 transition-opacity"
                  draggable={false}
                />
                <p className="text-xs text-gray-600 mt-2">{nextProduct.name}</p>
                <p className="text-xs text-gray-400">Next</p>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-blue-800 hover:bg-blue-700 text-white border-blue-800 rounded-full w-12 h-12 shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={prevSlide}
            disabled={isTransitioning}
          >
            <FaArrowLeft className="h-6 w-6" />
          </button>

          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-blue-800 hover:bg-blue-700 text-white border-blue-800 rounded-full w-12 h-12 shadow-lg hover:shadow-xl transition-all duration-300"
            onClick={nextSlide}
            disabled={isTransitioning}
          >
            <FaArrowRight className="h-6 w-6" />
          </button>
        </div>

        {/* Product Navigation */}
        {/* <div className="flex justify-center mt-6 space-x-4">
        <button
          onClick={prevSlide}
          className="flex items-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
          disabled={isTransitioning}
        >
          <FaArrowLeft className="w-4 h-4" />
          <span className="text-sm font-medium">{previousProduct.name}</span>
        </button>
        <button
          onClick={nextSlide}
          className="flex items-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
          disabled={isTransitioning}
        >
          <span className="text-sm font-medium">{nextProduct.name}</span>
          <FaArrowRight className="w-4 h-4" />
        </button>
      </div> */}
      </div>
    </section>
  )
}
