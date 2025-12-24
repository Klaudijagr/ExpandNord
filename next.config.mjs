/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    qualities: [75, 90],
  },
  // Next.js 16: Enable React Compiler for automatic memoization
  reactCompiler: true,
  experimental: {
    // Turbopack file system caching for faster dev rebuilds
    turbopackFileSystemCacheForDev: true,
  },
}

export default nextConfig