/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    deviceSizes: [640, 1280, 1600, 1920],
    formats: ["image/avif", "image/webp"],
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
