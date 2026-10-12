import path from 'node:path'
import { fileURLToPath } from 'node:url'

const appDirectory = path.dirname(fileURLToPath(import.meta.url))

/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: path.resolve(appDirectory, '../..'),
    resolveAlias: {
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
