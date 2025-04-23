import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
        // You can add a pathname if necessary, e.g., pathname: '/images/*'
      },
    ],
  },
};

export default nextConfig;
