/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: true,

  images: {
    domains: [],
  },

  reactStrictMode: true,

  eslint: {
    ignoreDuringBuilds: false,
  },
  typescript: {
    ignoreBuildErrors: false,
  },

  webpack(config, { isServer }) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
};

export default nextConfig;
