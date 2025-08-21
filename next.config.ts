import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "nvnrchmn.github.io",
        pathname: "/nova-resume/**",
      },
    ],
  },
};

export default nextConfig;
