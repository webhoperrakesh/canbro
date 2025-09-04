import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    loader: 'default',
    unoptimized: true, // ✅ disables optimization globally
    remotePatterns: [
      {
        protocol: "https",
        hostname: "canbro.whdev.in",
        pathname: "/storage/**",
      },
      {
        protocol: "https",
        hostname: "placehold.co", // keep your placeholder fallback working
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
