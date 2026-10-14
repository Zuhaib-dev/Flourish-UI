import path from 'node:path'
import { fileURLToPath } from 'node:url'

const appDirectory = path.dirname(fileURLToPath(import.meta.url))
const sharedPackages = [
  '@paper-design/shaders-react',
  'framer-motion',
  'gsap',
  'lucide-react',
  'motion',
  'react-signature-canvas',
  'tailwindcss',
]
const sharedPackageAliases = Object.fromEntries(
  sharedPackages.map((packageName) => [
    packageName,
    path.join(appDirectory, 'node_modules', packageName),
  ]),
)

/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000,
  },
  async headers() {
    return [
      {
        source: '/previews/:path*',
        headers: [
          { key: 'X-Robots-Tag', value: 'noindex, follow' },
        ],
      },
      {
        source: '/(.*)\\.(png|jpg|jpeg|webp|avif|svg|ico)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ]
  },
  turbopack: {
    root: path.resolve(appDirectory, '../..'),
    resolveAlias: {
      ...sharedPackageAliases,
      react: path.join(appDirectory, 'node_modules/react'),
      'react-dom': path.join(appDirectory, 'node_modules/react-dom'),
    },
  },
}

export default nextConfig

