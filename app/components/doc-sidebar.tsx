"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import type { DocRoute } from "@/lib/documentation";

export default function DocSidebar({
  routes,
  onNavClick,
}: {
  routes: DocRoute[];
  onNavClick?: () => void;
}) {
  const pathname = usePathname();

  // Handle link click - close mobile sidebar if needed
  const handleLinkClick = () => {
    if (onNavClick) onNavClick();
  };

  // Sort routes by order (just in case)
  const sortedRoutes = [...routes].sort((a, b) => a.order - b.order);

  return (
    <nav className="space-y-2">
      {sortedRoutes.map((route) => (
        <Link
          key={route.slug}
          href={`/product-guide/${route.slug}`}
          className={cn(
            "flex items-start gap-3 px-3 py-3 rounded-lg transition group",
            pathname === `/product-guide/${route.slug}`
              ? "bg-[#ED3059]/10 text-[#ED3059] font-medium"
              : "text-gray-700 hover:bg-gray-100"
          )}
          onClick={handleLinkClick}
        >
          {/* Icon */}
          {route.icon && (
            <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-green-50 flex items-center justify-center">
              <Image
                src={route.icon?.url}
                alt=""
                width={24}
                height={24}
                className="object-contain"
              />
            </div>
          )}
          {/* Title and description */}
          <div>
            <div className={`text-base font-semibold `}>{route.title}</div>
            {route.description && (
              <div className="text-xs text-gray-500 mt-0.5">
                {route.description}
              </div>
            )}
          </div>
        </Link>
      ))}
    </nav>
  );
}
