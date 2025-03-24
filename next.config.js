/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.sanity.io'],
  },
  // Remove experimental.serverActions as it's now enabled by default
};

module.exports = nextConfig;