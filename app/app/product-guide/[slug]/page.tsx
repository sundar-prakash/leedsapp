import {
  getDocumentationBySlug,
  getAllDocumentationRoutes,
} from "@/lib/documentation";
import DocContent from "@/app/components/doc-content";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Metadata, ResolvingMetadata } from "next";

import ShareButtons from "@/app/components/ShareBtn";
import FeedbackButtons from "@/app/components/FeedbackButtons";
import Image from "next/image";
import { hexToRgb } from "@/lib/utils";
export async function generateStaticParams() {
  const routes = getAllDocumentationRoutes();
  return routes.map((route) => ({
    slug: route.slug,
  }));
}
type Params = Promise<{ slug: string }>;
export async function generateMetadata(
  { params }: { params: Params },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const parentMetadata = await parent;

  const { slug } = await params;
  const doc = getDocumentationBySlug(slug);
  if (!doc) {
    return {
      title: "Guide Post Not Found - Leedsapp Blog",
      description: "The requested  post could not be found.",
      openGraph: {
        title: " Post Not Found",
        description: "The requested post could not be found.",
        images: [],
        type: "article",
        locale: "en_US",
      },
    };
  }
  const imageFromContent = doc.content.find(
    (item) => item.type === "image"
  )?.src;
  const imageFromCarousel = doc.content.find((item) => item.type === "carousel")
    ?.items?.[0]?.src;

  const imageUrl =
    imageFromContent || imageFromCarousel || "/default-image.png";
  return {
    title: `${doc?.title} - LeedsApp Guide`,
    description: doc.description || `LeedsApp product guide for ${doc.title}`,
    openGraph: {
      title: doc?.title,
      description: doc.description || `LeedsApp product guide for ${doc.title}`,
      images: [imageUrl],
      type: "article",
      locale: "en_US",
    },
  };
}

export default async function DocumentationPage({
  params,
}: {
  params: Params;
}) {
  const { slug } = await params;
  const doc = getDocumentationBySlug(slug);

  if (!doc) {
    notFound();
  }

  // Get all routes and filter out the current one
  const allRoutes = getAllDocumentationRoutes();
  const related = allRoutes.filter((route) => route.slug !== slug).slice(1, 5); // Pick the first 4, or randomize if you want

  return (
    <div>
      {/* Share button and title */}

      <h1 className="px-4 pt-8  md:px-2  text-3xl font-bold mb-4">
        {doc.title}
      </h1>

      {doc.description && (
        <p className="px-4  pb-8 md:px-2  text-gray-600 mb-8">
          {doc.description}
        </p>
      )}

      <DocContent content={doc.content} />
      <FeedbackButtons title={doc.title} slug={doc.slug} />
      <ShareButtons title={doc.title} slug={doc.slug} />
      {/* Related Product Guides */}
      <div className="mt-12 border-t py-6 px-4">
        <h2 className="text-xl font-semibold mb-4">Related Product Guides</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {related.map((guide) => (
            <Link
              key={guide.slug}
              href={`/${guide.slug}`}
              className={
                "flex border rounded-xl items-center gap-3 px-3 py-3 transition group hover:bg-[#ED3059]/10"
              }
            >
              {/* Icon */}
              {guide.icon && (
                <div
                  className={`rounded-[0.4rem] flex-shrink-0 w-9 h-9 flex items-center justify-center`}
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
                <div className={`text-base font-semibold `}>{guide.title}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
