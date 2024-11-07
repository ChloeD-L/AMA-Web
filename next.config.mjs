// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/public_html", // Only if you're hosting in a subdirectory like "/public_html"
  images: {
    unoptimized: true, // Important if images are stored locally and not on external CDN
  },
  reactStrictMode: true,
  trailingSlash: true, // Ensures a trailing slash for each route (useful for static exports)
};

export default nextConfig;
