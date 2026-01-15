import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    images: {
        remotePatterns: [
            { hostname: 'horizons-cdn.hostinger.com' },
            { hostname: 'images.unsplash.com' },
            { protocol: 'https', hostname: 'www.myreport.fr' },
            { protocol: 'https', hostname: 'www.finthesis.io' },
            { protocol: 'https', hostname: 'upload.wikimedia.org' },
            { protocol: 'https', hostname: 'www.getyooz.com' },
            { protocol: 'https', hostname: 'img.logo.dev' },
            { protocol: 'https', hostname: 'logo.clearbit.com' },
        ],
    },
};

export default nextConfig;
