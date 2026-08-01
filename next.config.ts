import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  allowedDevOrigins: ["synchronicity-one.dev.41.pl", "*.dev.41.pl"]
};

export default nextConfig;
