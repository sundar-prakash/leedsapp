"use client";

import { cn } from "@/lib/utils";
import React, { ReactNode, useEffect, useState } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  href?: string;
}

const StoreRedirectButton: React.FC<ButtonProps> = ({
  children,
  className,
  href,
}) => {
  const [storeUrl, setStoreUrl] = useState("");

  useEffect(() => {
    const userAgent = navigator.userAgent.toLowerCase();
    const isIOS = /iphone|macOS|ipad|ipod/.test(userAgent);

    setStoreUrl(
      isIOS
        ? "https://itunes.apple.com/us/app/apple-store/id6453606859?mt=8%27"
        : "https://play.google.com/store/apps/details?id=com.leedsapp"
    );
  }, []);

  return (
    <a
      href={href ? href : storeUrl}
      className={cn(
        "rounded-full bg-[#ED3059] px-4 py-2 text-white",
        className
      )}
    >
      {children}
    </a>
  );
};

export default StoreRedirectButton;
