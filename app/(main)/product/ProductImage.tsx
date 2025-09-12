"use client"

import React, { useState } from 'react'
import Image from 'next/image'

type ProductImageGalleryProps = {
    mainImage: string;
    productTitle: string;
    visualAidImage: string;
}

const ProductImage = ({ mainImage, productTitle, visualAidImage }: ProductImageGalleryProps) => {

    const [selectedImage, setSelectedImage] = useState(mainImage)

    return (
        <>
        <div className="rounded-2xl bg-white shadow overflow-hidden">
        <Image
            src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/${selectedImage}` || 'https://placehold.co/600x400.png?text=No+Image'}
            alt={productTitle}
            width={800}
            height={800}
            className="w-full h-auto max-h-[500px] object-fill aspect-[1/1]"
            priority
        />
        </div>

        <div className="flex gap-3 overflow-x-auto pb-2 mt-2">
         
            <button
              onClick={() => setSelectedImage(mainImage)}
              className="flex-shrink-0 rounded-lg overflow-hidden border-1 transition-all duration-200 border-gray-200 hover:border-gray-300 hover: cursor-pointer"
            >
              <Image
                src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/${mainImage}` || 'https://placehold.co/600x400.png?text=No+Image'}
                alt={productTitle}
                width={80}
                height={80}
                className="w-20 h-20 object-fill"
                priority
              />
            </button>

           {visualAidImage && 
            <button
              onClick={() => setSelectedImage(visualAidImage)}
              className="flex-shrink-0 rounded-lg overflow-hidden border-1 transition-all duration-200 border-gray-200 hover:border-gray-300 hover: cursor-pointer"
            >
              <Image
                src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/${visualAidImage}` || 'https://placehold.co/600x400.png?text=No+Image'}
                alt={productTitle}
                width={80}
                height={80}
                className="w-20 h-20 object-fill"
                priority
              />
            </button>
             }
        
        </div>
        </>

    )
}

export default ProductImage