"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";
import { IoCloseOutline } from "react-icons/io5";

type GalleryItem = {
id: number;
    title: string;
    visual_aids_image: string;
};

type GalleryItemProps = {
  galleryImages: GalleryItem[];
}

const VisualAidsClient = ({galleryImages}: GalleryItemProps) => {
    const [selectedImage, setSelectedImage] = useState<number | null>(null)
      const [currentIndex, setCurrentIndex] = useState(0)
    
      // Handle keyboard navigation
      useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
          if (selectedImage === null) return
    
          switch (event.key) {
            case "Escape":
              setSelectedImage(null)
              break
            case "ArrowLeft":
              goToPrevious()
              break
            case "ArrowRight":
              goToNext()
              break
          }
        }
    
        document.addEventListener("keydown", handleKeyDown)
        return () => document.removeEventListener("keydown", handleKeyDown)
      }, [selectedImage, currentIndex])
    
      // Prevent body scroll when lightbox is open
      useEffect(() => {
        if (selectedImage !== null) {
          document.body.style.overflow = "hidden"
        } else {
          document.body.style.overflow = "unset"
        }
    
        return () => {
          document.body.style.overflow = "unset"
        }
      }, [selectedImage])
    
      const openLightbox = (imageId: number) => {
        const index = galleryImages.findIndex((img) => img.id === imageId)
        setCurrentIndex(index)
        setSelectedImage(imageId)
      }
    
      const closeLightbox = () => {
        setSelectedImage(null)
      }
    
      const goToNext = () => {
        const nextIndex = (currentIndex + 1) % galleryImages.length
        setCurrentIndex(nextIndex)
        setSelectedImage(galleryImages[nextIndex].id)
      }
    
      const goToPrevious = () => {
        const prevIndex = currentIndex === 0 ? galleryImages.length - 1 : currentIndex - 1
        setCurrentIndex(prevIndex)
        setSelectedImage(galleryImages[prevIndex].id)
      }
    
      const currentImage = galleryImages[currentIndex]
  return (
    <>
    {/* Gallery Grid */}
      <div className='container mx-auto px-4 py-12 md:py-15'>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {galleryImages.map((image) => (
            <div
              key={image.id}
              className="group relative aspect-[4/3] overflow-hidden shadow-sm rounded-2xl bg-gray-200 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg"
              onClick={() => openLightbox(image.id)}
            >
              <Image
                src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/${image.visual_aids_image}` || "https://placehold.co/600x400.png?text=No+Image"}
                alt={image.title}
                fill
                className="object-fill transition-all duration-300 group-hover:brightness-110"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-white text-sm font-medium truncate">{image.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-1111 flex items-center justify-center bg-black/80">
          {/* Backdrop */}
          <div className="absolute inset-0 cursor-pointer" onClick={closeLightbox} />

          {/* Content */}
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 z-10 p-2 text-white hover:bg-white/20 rounded-full transition-colors duration-200"
              onClick={closeLightbox}
              aria-label="Close lightbox"
            >
              <IoCloseOutline className="h-6 w-6" />
            </button>

            {/* Navigation Buttons */}
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 text-white hover:bg-white/20 rounded-full transition-colors duration-200 hover:cursor-pointer"
              onClick={goToPrevious}
              aria-label="Previous image"
            >
              <BiChevronLeft className="h-8 w-8" />
            </button>

            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 text-white hover:bg-white/20 rounded-full transition-colors duration-200 hover:cursor-pointer"
              onClick={goToNext}
              aria-label="Next image"
            >
              <BiChevronRight className="h-8 w-8" />
            </button>

            {/* Main Image */}
            {currentImage && (
              <div className="relative w-full h-full flex items-center justify-center p-8">
                <div className="relative max-w-full max-h-full">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/${currentImage.visual_aids_image}` || "https://placehold.co/800x800.png?text=No+Image"}
                    alt={currentImage.title}
                    width={800}
                    height={800}
                    className="max-w-full max-h-full object-contain"
                    priority
                  />
                </div>

                {/* Image Info */}
                <div className="absolute bottom-[5rem] left-1/2 -translate-x-1/2 text-center">
                  <h3 className="text-white text-lg font-semibold mb-1">{currentImage.title}</h3>
                  <p className="text-white text-sm">
                    {currentIndex + 1} of {galleryImages.length}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
      </>
  )
}

export default VisualAidsClient