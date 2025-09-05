"use client"

import { useState, useEffect } from "react"
import Image from "next/image";


type sliderItem = {
    image: string;
};

type BlockData = {
    repeater_fields: sliderItem[] | string;
}

type HeroSectionProps = {
    sliderData: BlockData;
}

export default function NewHeroSlider({ sliderData }: HeroSectionProps) {
    const [currentSlide, setCurrentSlide] = useState(0)

    const { repeater_fields } = sliderData;
    const sliderItems = JSON.parse(repeater_fields as string);

    // Auto-advance slides every 5 seconds
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % sliderItems.length)
        }, 5000)

        return () => clearInterval(timer)
    }, [])

    const goToSlide = (index: number) => {
        setCurrentSlide(index)
    }

    if (!sliderItems.length) return null;

    return (
        <section className="relative overflow-hidden main-slider">
        {/* <section className="relative h-[30vh] sm:h-[35vh] md:h-[50vh] lg:h-[65vh] xl:h-[75vh] 2xl:h-[80vh] overflow-hidden main-slider"> */}
            <div className="relative w-full h-full">
                {sliderItems.map((slide: any, index: any) => (
                    <Image
                        key={index}
                        src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/${slide.image}?height=800&width=1920&query=slider image ${index + 1}`}
                        alt={`Slide ${index + 1}`}
                        fill
                        sizes="100vw"
                        placeholder="blur"
                        quality={85}
                        priority={index === 0} // Prioritize first image
                        className={`object-fill transition-opacity duration-1000 ease-in-out ${index === currentSlide ? "opacity-100" : "opacity-0"
                            }`}
                        blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                    />
                ))}
            </div>

            {/* Slide Indicators */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 flex space-x-3">
                {sliderItems.map((_: any, index: any) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 hover:cursor-pointer ${index === currentSlide
                            ? "bg-orange-500 scale-125 shadow-lg"
                            : "bg-[#3C3C3C]  hover:scale-110"
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            {/* Slide Counter */}
            {/* <div className="absolute top-6 right-6 z-30 bg-black/30 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                {currentSlide + 1} / {sliderItems.length}
            </div> */}
        </section>

    )
}
