/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Force App Router by specifying page extensions
  pageExtensions: ['tsx', 'ts'],
  // Ensure we're using App Router
  trailingSlash: false,

}

export default nextConfig
