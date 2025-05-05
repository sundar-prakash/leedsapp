// app/components/RelatedGuides.tsx
"use client";
import Link from "next/link";
import Image from "next/image";
import { hexToRgb } from "@/lib/utils";
import { DocRoute } from "@/lib/documentation";
import { usePathname } from "next/navigation";

interface RelatedGuidesProps {
  currentSlug: string;
  allRoutes: DocRoute[];
  limit?: number;
}

export default function RelatedGuides({
  currentSlug,
  allRoutes,
  limit = 4,
}: RelatedGuidesProps) {
  const pathname = usePathname();

  // Filter out the current guide and get the specified number of related guides
  const related = allRoutes
    .filter((route) => route.slug !== currentSlug)
    .slice(0, limit);

  if (related.length === 0) {
    return null;
  }
  const basePath = pathname.startsWith("/app/product-guide")
    ? "/app/product-guide"
    : "/product-guide";

  return (
    <div className="mt-12 border-t py-6 px-4">
      <h2 className="text-xl font-semibold mb-4">Related Product Guides</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {related.map((guide) => (
          <Link
            key={guide.slug}
            href={`${basePath}/${guide.slug}`}
            className="flex border rounded-xl items-center gap-3 px-3 py-3 transition group hover:bg-[#ED3059]/10"
          >
            {/* Icon */}
            {guide.icon && (
              <div
                className="rounded-[0.4rem] flex-shrink-0 w-9 h-9 flex items-center justify-center"
                style={{
                  backgroundColor: `rgba(${hexToRgb(guide.icon.color)}, 0.1)`,
                }}
              >
                <Image
                  src={guide.icon?.url}
                  alt=""
                  width={24}
                  height={24}
                  className="object-contain"
                />
              </div>
            )}
            <div>
              <div className="text-base font-semibold">{guide.title}</div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
