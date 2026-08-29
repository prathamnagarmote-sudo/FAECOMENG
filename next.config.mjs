/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    loader: 'custom',
    loaderFile: './lib/cloudinaryLoader.js',
  },
};

export default nextConfig;
