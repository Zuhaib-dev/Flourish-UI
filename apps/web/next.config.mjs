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
  turbopack: {
    root: path.resolve(appDirectory, '../..'),
    resolveAlias: {
      ...sharedPackageAliases,
      react: path.join(appDirectory, 'node_modules/react'),
      'react-dom': path.join(appDirectory, 'node_modules/react-dom'),
    },
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
