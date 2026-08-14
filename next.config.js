/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
    formats: ['image/webp'],
    qualities: [70, 75, 80, 82, 85, 88, 90, 92, 95],
  },
};

module.exports = nextConfig;
