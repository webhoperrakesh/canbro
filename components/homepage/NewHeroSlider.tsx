"use client"

import { useState, useEffect } from "react"


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

        <section className="relative h-[35vh] md:h-[50vh] lg:h-[70vh] xl:h-[80vh] overflow-hidden">
            {sliderItems.map((slide: any, index: any) => (
                <img
                    key={index}
                    src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/${slide.image}`}
                    alt={`Slide ${index + 1}`}
                    className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${index === currentSlide ? "opacity-100" : "opacity-0"
                        }`}
                />
            ))}

            {/* Slide Indicators */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 flex space-x-3">
                {sliderItems.map((_: any, index: any) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 hover:cursor-pointer ${index === currentSlide
                            ? "bg-orange-500 scale-125 shadow-lg"
                            : "bg-white/50 hover:bg-white/70 hover:scale-110"
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            {/* Slide Counter */}
            <div className="absolute top-6 right-6 z-30 bg-black/30 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                {currentSlide + 1} / {sliderItems.length}
            </div>
        </section>

    )
}
