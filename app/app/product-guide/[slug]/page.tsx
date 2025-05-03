// Original file with updated code
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
import RelatedGuides from "@/app/components/RelatedProductGuide";

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
      description: "The requested post could not be found.",
      openGraph: {
        title: "Post Not Found",
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

  // Get all routes for related guides
  const allRoutes = getAllDocumentationRoutes();

  return (
    <div>
      <h1 className="px-4 pt-8 md:px-2 text-3xl font-bold mb-4">
        {doc.title}
      </h1>

      {doc.description && (
        <p className="px-4 pb-8 md:px-2 text-gray-600 mb-8">
          {doc.description}
        </p>
      )}

      <DocContent content={doc.content} />
      <FeedbackButtons title={doc.title} slug={doc.slug} />
      <ShareButtons title={doc.title} slug={doc.slug} />
      
      {/* Related guides component */}
      <RelatedGuides
        currentSlug={slug} 
        allRoutes={allRoutes} 
        limit={4} 
      />
    </div>
  );
}
