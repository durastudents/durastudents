/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // static site: deploys to Cloudflare Pages or GitHub Pages
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
