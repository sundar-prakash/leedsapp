"use client";
import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";
import { ReactNode } from "react";

export default function ConditionalLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const isProductGuide = pathname.startsWith("/product-guide");

  return (
    <>
      {/* Header - Hidden on mobile, visible on desktop for product guide */}
      <div className={isProductGuide ? "hidden md:block" : ""}>
        <Header />
      </div>

      {children}

      {/* Footer - Completely hidden in product guide */}
      {!isProductGuide && <Footer />}
    </>
  );
}
