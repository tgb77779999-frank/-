const isGitHubPages = process.env.GITHUB_ACTIONS === "true";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: isGitHubPages ? "/-" : "",
  assetPrefix: isGitHubPages ? "/-/" : "",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
