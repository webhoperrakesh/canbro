"use client"

import { useState } from "react"
import { BiChevronDown, BiChevronUp } from "react-icons/bi"
import Link from "next/link"
import { usePathname } from "next/navigation"

type Category = {
  id: number
  title: string
  slug: string
}

type Props = {
  categories: Category[]
  activeSlug?: string
}

export default function CategorySidebarClient({
  categories,
  activeSlug,
}: Props) {
  const [isExpanded, setIsExpanded] = useState(true)
  const pathname = usePathname()

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
      <div
        className="flex items-center justify-between cursor-pointer p-4 bg-[#19065f] text-white"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <h2 className="lg:text-[16px] xl:text-lg font-medium">
          Product Categories
        </h2>
        {isExpanded ? (
          <BiChevronDown className="h-5 w-5" />
        ) : (
          <BiChevronUp className="h-5 w-5" />
        )}
      </div>

      {isExpanded && (
        <div className="p-4">
          <div className="space-y-1 overflow-y-auto">
            {categories.map((category) => {
              const isActive = pathname === `/product-category/${category.slug}`
              return (
                <Link
                  key={category.id}
                  href={`/product-category/${category.slug}`}
                  className={`line-clamp-1 pl-1 block w-full text-left py-3 text-sm md:text-[16px] font-medium rounded-lg transition-colors duration-200 border-l-2
                    ${isActive
                      ? "bg-teal-50 text-[#38A0A7] border-[#38A0A7]"
                      : "text-[#3C3C3C] hover:bg-teal-50 hover:text-[#38A0A7] border-transparent hover:border-[#38A0A7]"}
                  `}
                >
                  {category.title}
                </Link>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}
