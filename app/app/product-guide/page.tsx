import { redirect } from "next/navigation";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product Guide - LeedsApp",
  description:
    "Comprehensive guide and tutorials for LeedsApp users to optimize lead management.",
  metadataBase: new URL("https://leedsapp.com/product-guide"),
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
  },
  alternates: {
    canonical: `https://leedsapp.com/product-guide`,
  },
  icons: {
    icon: "/guide-icon.png",
  },
  openGraph: {
    type: "article",
    locale: "en_US",
    url: "https://leedsapp.com/product-guide",
    siteName: "LeedsApp",
    title: "Product Guide - LeedsApp",
    description:
      "Comprehensive guide and tutorials for LeedsApp users to optimize lead management.",
  },
};

export default function ProductGuideHome() {
  redirect('/app/product-guide/calls');
  
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <h1>Loading guide...</h1>
    </div>
  );
}
