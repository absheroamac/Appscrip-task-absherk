/** @type {import('next').NextConfig} */
const nextConfig = {
  // Turbopack configuration for development
  experimental: {
    turbo: {
      rules: {
        "*.svg": {
          loaders: ["@svgr/webpack"],
          as: "*.js",
        },
      },
    },
  },

  // Production configuration
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

  // Webpack configuration that works in both environments
  webpack(config, { isServer, dev }) {
    // Only add the rule in production or when not using Turbopack
    if (!dev || !process.env.TURBOPACK) {
      config.module.rules.push({
        test: /\.svg$/,
        use: ["@svgr/webpack"],
      });
    }

    return config;
  },
};

export default nextConfig;
