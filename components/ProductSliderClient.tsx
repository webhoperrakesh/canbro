"use client"

import React from 'react'
import { useState, useRef, useCallback } from "react"
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Image from "next/image"

type Product = {
    id: number;
    title: string;
    image: string;
    slug: string;
    desc: string;
    composition: string;
};

type ProductsProps = {
    products: Product[];
    showText?: boolean;
}

const ProductSliderClient = ({ products, showText = true }: ProductsProps) => {
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
        <div className="relative" ref={sliderRef}>
            <div className="flex items-center justify-center min-h-[400px]">
                {/* Left Product Image - Previous Product (Desktop Only) */}
                <div
                    className="hidden xl:flex flex-shrink-0 mr-4 lg:mr-8 transform transition-all duration-500 cursor-pointer group items-center justify-center"
                    onClick={handleLeftImageClick}
                >
                    <div className="relative p-0 2xl:p-0">
                        <Image
                            src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/${previousProduct.image}` || "https://placehold.co/200x280.png?text=No+Image"}
                            alt={`Previous product - ${previousProduct.title}`}
                            width={200}
                            height={280}
                            className="w-32 lg:w-40 2xl:w-48 rounded-2xl h-auto object-contain drop-shadow-lg group-hover:scale-105 transition-transform duration-300"
                            draggable={false}
                        />
                        <div className="absolute inset-0 bg-black/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                </div>

                {/* Center Content - Current Product */}
                <div className="relative flex-1">
                    {/* Navigation Buttons */}
                    <button
                        className="absolute -left-4 md:-left-6 top-1/2 -translate-y-1/2 z-20 bg-[#212088] hover:bg-[#1a1a6b] text-white rounded-full w-11 h-11 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center group hover:cursor-pointer"
                        onClick={prevSlide}
                        disabled={isTransitioning}
                        aria-label="Previous product"
                    >
                        <FaArrowLeft className="md:h-6" />
                    </button>

                    <button
                        className="absolute -right-4 md:-right-6 top-1/2 -translate-y-1/2 z-20 bg-[#212088] hover:bg-[#1a1a6b] text-white rounded-full w-11 h-11 shadow-lg hover:shadow-xl ttransition-all duration-300 hover:scale-105 flex items-center justify-center group hover:cursor-pointer"
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
                            <div className="lg:w-1/2 relative bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center min-h-[300px] lg:min-h-[400px] lg:rounded-tl-2xl lg:rounded-bl-2xl">
                                {/* Background Pattern */}
                                <div className="absolute inset-0">
                                    <div className="w-full h-full bg-[url('/images/feature-bg.png')] bg-center bg-no-repeat bg-cover lg:bg-cover lg:rounded-tl-2xl lg:rounded-bl-2xl" />
                                </div>

                                {/* Product Image */}
                                <div className="lg:absolute lg:bottom-[-4rem] z-10 transform transition-transform duration-700 hover:scale-105">
                                    <Image
                                        src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/${currentProduct.image}` || "https://placehold.co/400x500.png?text=No+Image"}
                                        alt={`Current product - ${currentProduct.title}`}
                                        width={400}
                                        height={500}
                                        className="w-[250px] rounded-2xl max-w-[250px] md:max-w-[300px] lg:max-w-[350px] h-auto object-contain drop-shadow-2xl"
                                        draggable={false}
                                        priority
                                    />
                                </div>
                            </div>

                            {/* Content Section */}
                            <div
                                className={`lg:w-1/2 bg-orange-500 text-white p-[20px] md:p-8 lg:p-10 flex flex-col justify-center relative overflow-hidden lg:rounded-tr-2xl lg:rounded-br-2xl`}
                            >
                                {/* Background Decoration */}
                                <div className="relative z-10">
                                    <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-[36px] font-bold mb-3 lg:mb-4 leading-tight lg:line-clamp-1">
                                        {currentProduct.title}
                                    </h3>
                                   
                                   {showText && (
                                    <div className="flex-wrap md:flex-nowrap flex items-start mb-4 lg:mb-6 gap-4">
                                        <div className="w-12 lg:w-16 h-0.5 bg-white/80 mt-[14px]" />
                                        <h4 className="[word-wrap:anywhere] text-base md:text-[22px] lg:text-[22px] font-medium leading-relaxed opacity-95 lg:line-clamp-2">
                                            {currentProduct.composition}
                                        </h4>
                                    </div>
                                    )}

                                    {showText && (
                                    <p className="text-sm md:text-[16px] lg:text-[16px] leading-relaxed font-normal opacity-90 line-clamp-4 lg:line-clamp-5">
                                        {currentProduct.desc}
                                    </p>
                                    )}
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
                    <div className="relative p-0 2xl:p-0">
                        <Image
                            src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/${nextProduct.image}` || "https://placehold.co/200x280.png?text=No+Image"}
                            alt={`Next product - ${nextProduct.title}`}
                            width={200}
                            height={280}
                            className="w-32 lg:w-40 2xl:w-48 rounded-2xl h-auto object-contain drop-shadow-lg group-hover:scale-105 transition-transform duration-300"
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
    )
}

export default ProductSliderClient