/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    qualities: [70, 75, 80, 82, 85, 90, 95],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ],
  },
};

export default nextConfig;
