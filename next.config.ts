import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    images: {
        remotePatterns: [
            { hostname: 'horizons-cdn.hostinger.com' },
            { hostname: 'images.unsplash.com' },
        ],
    },
};

export default nextConfig;
