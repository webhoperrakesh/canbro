"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { BiChevronLeft, BiChevronRight } from "react-icons/bi"

const slides = [
  {
    id: 1,
    subtitle: "Committed to better",
    title: "Nephrology &\nUrology Care",
    description:
      "We use only the best quality materials on the market in order to provide the best products to our patients, so don't worry about anything and leave yourself.",
    buttonText: "Read More",
    buttonLink: "/",
    backgroundImage: "/images/CANBRO-1.png",
  },
  {
    id: 2,
    subtitle: "Excellence in",
    title: "Advanced Medical\nTreatments",
    description:
      "Our state-of-the-art facilities and experienced medical professionals ensure you receive the highest standard of care with personalized treatment plans.",
    buttonText: "Learn More",
    buttonLink: "/",
    backgroundImage: "/images/CANBRO-2.png",
  },
  {
    id: 3,
    subtitle: "Dedicated to",
    title: "Patient-Centered\nHealthcare",
    description:
      "We prioritize your comfort and well-being with comprehensive medical services designed to meet your individual needs and health goals.",
    buttonText: "Discover More",
    buttonLink: "/",
    backgroundImage: "/images/CANBRO-2.png",
  },
]

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Auto-advance slides every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  return (
    <section className="relative h-[35vh] md:h-[50vh] lg:h-[70vh] xl:h-[80vh] overflow-hidden">
      {/* Background Images with Smooth Transitions */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 bg-center bg-no-repeat bg-cover lg:bg-[length:100%_100%] transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${slide.backgroundImage})`,
          }}
        />
      ))}

      {/* Overlay for better text readability */}
      {/* <div className="absolute inset-0 bg-black/40 z-10"></div> */}

      <div className="container mx-auto px-4 py-12 md:py-26 lg:py-30 relative z-20">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 text-white z-10 mb-10 md:mb-0">
            <div className="transition-all duration-700 ease-in-out transform">
              <p
                key={`subtitle-${currentSlide}`}
                className="text-lg md:text-2xl lg:text-3xl font-light mb-2 animate-fade-in-up"
              >
                {slides[currentSlide].subtitle}
              </p>
              <h1
                key={`title-${currentSlide}`}
                className="text-4xl lg:text-6xl xl:text-7xl font-bold mb-4 leading-tight animate-fade-in-up animation-delay-200"
              >
                {slides[currentSlide].title.split("\n").map((line, index) => (
                  <span key={index}>
                    {line}
                    {index < slides[currentSlide].title.split("\n").length - 1 && <br />}
                  </span>
                ))}
              </h1>
              <p
                key={`description-${currentSlide}`}
                className="text-sm md:text-[16px] font-medium max-w-md mb-8 animate-fade-in-up animation-delay-400"
              >
                {slides[currentSlide].description}
              </p>
              <Link
                href={slides[currentSlide].buttonLink}
                className="inline-block text-sm md:text-[16px] bg-orange-500 hover:bg-orange-600 text-white rounded-full px-10 py-3 transition-all duration-300 hover:scale-105 animate-fade-in-up animation-delay-600"
              >
                {slides[currentSlide].buttonText}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm"
        aria-label="Previous slide"
      >
        <BiChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 backdrop-blur-sm"
        aria-label="Next slide"
      >
        <BiChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 hover:cursor-pointer ${
              index === currentSlide
                ? "bg-orange-500 scale-125 shadow-lg"
                : "bg-white/50 hover:bg-white/70 hover:scale-110"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Slide Counter */}
      <div className="absolute top-6 right-6 z-30 bg-black/30 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
        {currentSlide + 1} / {slides.length}
      </div>
    </section>
  )
}
