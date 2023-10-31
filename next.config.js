/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: false,
  },
  // experimental: {
  //   ppr: true,
  // },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
  images: {
    dangerouslyAllowSVG: true,
    domains: ['res.cloudinary.com', 'api.dicebear.com'],
  },
};

module.exports = nextConfig;
