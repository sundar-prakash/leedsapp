import { getDocumentationBySlug } from "@/lib/documentation"
import DocContent from "@/app/components/doc-content"
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Product Guide - LeedsApp",
  description: "Comprehensive guide and tutorials for LeedsApp users to optimize lead management.",
  metadataBase: new URL('https://leedsapp.com/product-guide'),
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
  },
  alternates: {
    canonical: `https://leedsapp.com/product-guide`,
  },
  icons: {
    icon: "/guide-icon.png",
  },
  openGraph: {
    type: 'article',
    locale: 'en_US',
    url: 'https://leedsapp.com/product-guide',
    siteName: 'LeedsApp',
    title: 'Product Guide - LeedsApp',
    description: 'Comprehensive guide and tutorials for LeedsApp users to optimize lead management.',
  },
};

export default function ProductGuideHome() {
  const doc = getDocumentationBySlug("introduction")

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Product Guide</h1>
      <p className="text-gray-600 mb-8">
        Welcome to the LeedsApp product guide. Here you'll find everything you need to know about using our platform
        effectively.
      </p>

      {doc ? <DocContent content={doc.content} /> : <p>Loading documentation...</p>}
    </div>
  )
}
