import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import { Montserrat } from "@/lib/font";
import { ReactNode } from "react";
import ConditionalLayout from "./components/ConditionalLayout";

export const metadata: Metadata = {
  title: {
  default: 'LeedsApp - Never Miss a Follow-Up Again',
  template: '%s - LeedsApp',
  },
  description: "Lead Management & Followup",
  metadataBase: new URL('https://leedsapp.com'),
  robots: {
  index: true,
  follow: true,
  'max-image-preview': 'large',
  },
  alternates: {
  canonical: `https://leedsapp.com/`,
  },
  icons: {
  icon: "/logo.png",
  },
  openGraph: {
  type: 'website',
  locale: 'en_US',
  url: 'https://leedsapp.com',
  siteName: 'LeedsApp',
  title: 'LeedsApp - Never Miss a Follow-Up Again',
  description: 'Lead Management & Followup',
  },
}

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  // 👇 Must be used inside a Client Component!
  // So, we need to wrap this logic in a Client Component below
  return (
    <html lang="en">
      <body className={Montserrat.className}>
        <ConditionalLayout>
          {children}
        </ConditionalLayout>
        <Script
          id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "LeedsApp",
              url: "https://leedsapp.com",
              description: "Lead Management & Followup",
              publisher: {
                "@type": "Organization",
                name: "LeedsApp",
                logo: {
                  "@type": "ImageObject",
                  url: "/logo.png",
                },
              },
            }),
          }}
        />
      </body>
    </html>
  );
}

