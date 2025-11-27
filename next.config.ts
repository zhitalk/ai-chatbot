import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Disabled PPR due to conflict with dynamic routes using cookies() and auth()
    // ppr: true,
  },
  images: {
    remotePatterns: [
      {
        hostname: "avatar.vercel.sh",
      },
      {
        protocol: "https",
        //https://nextjs.org/docs/messages/next-image-unconfigured-host
        hostname: "*.public.blob.vercel-storage.com",
      },
    ],
  },
};

export default nextConfig;
