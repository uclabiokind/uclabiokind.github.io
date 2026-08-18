import type { NextConfig } from "next";

const isGitHubPagesBuild = process.env.GITHUB_PAGES === "true";
const pagesBasePath = isGitHubPagesBuild
  ? (process.env.PAGES_BASE_PATH ?? "")
  : "";
const pagesBaseUrl = isGitHubPagesBuild
  ? (process.env.PAGES_BASE_URL ?? "")
  : "";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  assetPrefix: pagesBaseUrl || undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: pagesBasePath,
    NEXT_PUBLIC_SITE_URL:
      pagesBaseUrl ||
      process.env.NEXT_PUBLIC_SITE_URL ||
      "http://localhost:3000",
  },
};

export default nextConfig;
