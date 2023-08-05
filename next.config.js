// import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    // includePaths: [path.join('/', 'styles')],
  },
  images: {
    disableStaticImages: true,
    domains: ['ongate-s3.s3.ap-southeast-1.amazonaws.com'],
    deviceSizes: [375, 720, 1080],
    imageSizes: [300, 600, 900],
  },
};

module.exports = nextConfig;
