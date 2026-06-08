import type { NextConfig } from "next";

// Deployed to GitHub Pages at https://bfirst-ai.github.io/accumax/.
// A basePath is required so assets and routes resolve under the repo sub-path.
// Only applied in production builds so `next dev` stays at localhost:3000/.
const isProd = process.env.NODE_ENV === "production";
const basePath = isProd ? "/accumax" : "";

const nextConfig: NextConfig = {
  output: "export", // static HTML export -> /out, served by GitHub Pages
  basePath,
  trailingSlash: true, // emit about/index.html so directory URLs work on Pages
  images: { unoptimized: true }, // no Image Optimization server on Pages
  env: { NEXT_PUBLIC_BASE_PATH: basePath }, // exposed to client for raw <img> src
  reactCompiler: true,
  devIndicators: false,
};

export default nextConfig;
