"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
// import { ChevronDownIcon } from "@heroicons/react/24/outline"
import { useState } from "react"
import { cn } from "@/lib/utils"
import type { DocRoute } from "@/lib/documentation"
import { ChevronDownIcon } from "@sanity/icons"

export default function DocSidebar({ routes, onNavClick }: { routes: DocRoute[]; onNavClick?: () => void }) {
  const pathname = usePathname()
  const [openCategories, setOpenCategories] = useState<string[]>([])

  const toggleCategory = (category: string) => {
    setOpenCategories((prev) => (prev.includes(category) ? prev.filter((c) => c !== category) : [...prev, category]))
  }

  // Group routes by category
  const groupedRoutes: Record<string, DocRoute[]> = {}
  routes.forEach((route) => {
    if (!groupedRoutes[route.category]) {
      groupedRoutes[route.category] = []
    }
    groupedRoutes[route.category].push(route)
  })

  // Handle link click - close mobile sidebar if needed
  const handleLinkClick = () => {
    if (onNavClick) {
      onNavClick()
    }
  }

  return (
    <nav className="space-y-1">
      <Link
        href="/product-guide"
        className={cn(
          "block px-3 py-2 rounded-md text-sm font-medium",
          pathname === "/product-guide" ? "bg-[#ED3059]/10 text-[#ED3059]" : "text-gray-700 hover:bg-gray-100",
        )}
        onClick={handleLinkClick}
      >
        Overview
      </Link>

      {Object.entries(groupedRoutes).map(([category, categoryRoutes]) => (
        <div key={category} className="space-y-1">
          <button
            onClick={() => toggleCategory(category)}
            className="w-full flex items-center justify-between px-3 py-2 text-sm font-medium text-gray-900 hover:bg-gray-100 rounded-md"
          >
            <span>{category}</span>
            <ChevronDownIcon
              className={cn(
                "w-4 h-4 transition-transform",
                openCategories.includes(category) ? "transform rotate-180" : "",
              )}
            />
          </button>

          {openCategories.includes(category) && (
            <div className="ml-4 space-y-1 border-l border-gray-200 pl-2">
              {categoryRoutes.map((route) => (
                <Link
                  key={route.slug}
                  href={`/product-guide/${route.slug}`}
                  className={cn(
                    "block px-3 py-2 rounded-md text-sm",
                    pathname === `/product-guide/${route.slug}`
                      ? "bg-[#ED3059]/10 text-[#ED3059] font-medium"
                      : "text-gray-600 hover:bg-gray-100",
                  )}
                  onClick={handleLinkClick}
                >
                  {route.title}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </nav>
  )
}
