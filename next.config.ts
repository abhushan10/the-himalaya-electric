import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/the-himalaya-electric',
  images: { unoptimized: true }
};

export default nextConfig;
