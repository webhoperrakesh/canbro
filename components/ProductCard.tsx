import React from 'react'
import Image from "next/image"
import Link from 'next/link'

type Product = {
  id: number;
  title: string;
  slug: string;
  image: string | null;
}

type ProductCardProps = {
  product: Product;
}


const ProductCard = ({ product }: ProductCardProps) => {

  const imageUrl = product.image
    ? product.image.startsWith('http')
      ? product.image
      : `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL || ''}/${product.image}`
    : 'https://placehold.co/600x400.png?text=No+Image';

  return (
    <Link
      href={`/product/${product.slug}`}
    >
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer">
        <div className="relative aspect-[1/1] bg-gradient-to-br from-gray-50 to-teal-50">
          <Image
            src={imageUrl}
            alt={product.title}
            fill
            className="object-fill hover:scale-105 transition-transform duration-300"
            placeholder="blur"
            blurDataURL="https://placehold.co/600x400.png"
            loading="lazy"
          />
        </div>

        <div className="p-4">
          <div className="text-center">
            <h3 className="text-[#19065f] text-[18px] font-bold m uppercase">{product.title}</h3>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ProductCard