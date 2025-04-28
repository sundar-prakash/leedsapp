"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import type { DocRoute } from "@/lib/documentation"

export default function DocSidebar({ routes, onNavClick }: { routes: DocRoute[]; onNavClick?: () => void }) {
  const pathname = usePathname()

  // Handle link click - close mobile sidebar if needed
  const handleLinkClick = () => {
    if (onNavClick) {
      onNavClick()
    }
  }

  // Sort routes by order (just in case)
  const sortedRoutes = [...routes].sort((a, b) => a.order - b.order)

  return (
    <nav className="space-y-1">
      {sortedRoutes.map((route) => (
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
    </nav>
  )
}
