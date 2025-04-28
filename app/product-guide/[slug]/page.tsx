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
  const related = allRoutes
    .filter((route) => route.slug !== slug)
    .slice(1, 4); // Pick the first 3, or randomize if you want

  return (
    <div>
      {/* Share button and title */}
      <div className="flex items-center justify-between mb-6">
       

        <h1 className="text-3xl font-bold">{doc.title}</h1>
        <ShareButtons title={doc.title} slug={doc.slug} />
      </div>
      {doc.description && (
        <p className="text-gray-600 mb-8">{doc.description}</p>
      )}

      <DocContent content={doc.content} />
      <FeedbackButtons slug={doc.slug} />

      {/* Related Product Guides */}
      <div className="mt-12 border-t pt-6">
        <h2 className="text-xl font-semibold mb-4">Related Product Guides</h2>
        <ul className="space-y-2">
          {related.map((guide) => (
            <li key={guide.slug}>
              <Link
                href={`/product-guide/${guide.slug}`}
                className="text-[#ED3059] hover:underline"
              >
                {guide.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
