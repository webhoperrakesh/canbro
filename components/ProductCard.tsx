import React from 'react'
import Image from "next/image"
import Link from 'next/link'

type Product = {
  id: number
  name: string
  slug: string
  imageUrl: string
}

type ProductCardProps = {
  product: Product
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
     <Link
     href={`/product/${product.slug}`}
     >
     <div className="bg-white rounded-2xl shadow-sm border border-gray-200 hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer">
      <div className="relative aspect-[4/3] bg-gradient-to-br from-gray-50 to-teal-50">
        <Image
          src={product.imageUrl || "https://placehold.co/600x400.png?text=No+Image"}
          alt={product.name}
          fill
          className="object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="p-6">
        <div className="text-center">
          <h3 className="text-[#19065f] text-[18px] font-bold m">{product.name}</h3>
        </div>
      </div>
    </div>
    </Link>
  )
}

export default ProductCard