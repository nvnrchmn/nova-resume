import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? "/nova-resume" : undefined,
  assetPrefix: isProd ? "/nova-resume/" : undefined,
  images: {
    unoptimized: true,
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
