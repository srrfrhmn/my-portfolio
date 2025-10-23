/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  turbopack: {},  // Enable Turbopack with default settings
  experimental: {
    // Handle PDF files in the public directory instead
    outputFileTracingExcludes: {
      '/public/**/*.pdf': true,
    },
  },
};


module.exports = nextConfig
