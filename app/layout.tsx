import type { Metadata } from "next";
import { Montserrat, Roboto } from "next/font/google";
import "./globals.css";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Script from "next/script";

// Configure Montserrat font
const montserrat = Montserrat({
  variable: "--font-montserrat",
  weight: ["300", "400", "600", "700"], // Specify weights
  subsets: ["latin"],
});

// Configure Roboto font
const roboto = Roboto({
  variable: "--font-roboto",
  weight: ["400", "700", "900"], // Specify weights
  display: "swap", // Add display option
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LeedsApp - Never Miss a Follow-Up Again",
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

 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const jsonLdData = {
    
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
    // sameAs: siteConfig.SOCIAL_LINKS.map((e) => e.url), // Add your social media links here if available
  };
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${montserrat.variable} font-mono`}>
        <Header /> 
        {children}
        <Footer />
        <Script
        id="json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLdData),
          }}
        />
      </body>
    </html>
  );
}
