/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  experimental: {
    largePageDataBytes: 256 * 1024,
  },
};

module.exports = nextConfig;
