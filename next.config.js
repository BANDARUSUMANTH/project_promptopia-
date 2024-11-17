/** @type {import('next').NextConfig} */
const nextConfig = {
  // Replace the deprecated 'experimental' options
  serverExternalPackages: ["mongoose"], // for external packages like mongoose
  
  images: {
    domains: ['lh3.googleusercontent.com'],
  },
  
  webpack(config) {
    config.experiments = {
      ...config.experiments,
      topLevelAwait: true,
    }
    return config
  }
}

module.exports = nextConfig;
