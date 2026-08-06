/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/webp'],
    qualities: [75, 80, 82, 85, 90, 92],
  },
};

module.exports = nextConfig;
