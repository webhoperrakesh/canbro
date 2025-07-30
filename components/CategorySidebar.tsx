"use client"

import { useState } from "react"
import { BiChevronDown, BiChevronUp } from "react-icons/bi"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { categories } from "@/fakeData/productsFakeData"

export function CategorySidebar() {
  const [isExpanded, setIsExpanded] = useState(true)
  const pathname = usePathname()

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <div
        className="flex items-center justify-between cursor-pointer p-6 bg-[#19065f] text-white"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h2 className="lg:text-[16px] xl:text-lg font-medium">Product Categories</h2>
        {isExpanded ? <BiChevronDown className="h-5 w-5" /> : <BiChevronUp className="h-5 w-5" />}
      </div>

      {isExpanded && (
        <div className="p-4">
          <div className="space-y-1 overflow-y-auto">
            {categories.map((category: any, index: any) => {
              const isActive = pathname === `/product-category/${category.slug}`
              return (
                <Link
                  key={index}
                  href={`/product-category/${category.slug}`}
                  className={`line-clamp-1 block w-full text-left px-4 py-3 text-sm md:text-[16px] font-medium rounded-lg transition-colors duration-200 border-l-2
                    ${isActive
                      ? "bg-teal-50 text-[#38A0A7] border-teal-500"
                      : "text-[#3C3C3C] hover:bg-teal-50 hover:text-[#38A0A7] border-transparent hover:border-teal-500"}
                  `}
                >
                  {category.name}
                </Link>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}

