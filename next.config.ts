import type { NextConfig } from "next";

const repo = "/portfolio";
const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  reactStrictMode: true,
  basePath: isProd ? repo : "",
  assetPrefix: isProd ? repo : undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? repo : "",
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
