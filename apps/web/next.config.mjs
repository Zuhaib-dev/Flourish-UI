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
  reactStrictMode: true,
  experimental: {
    agentUpgrade: 'security',
    optimizeServerReact: true,
    optimizePackageImports: ['lucide-react'],
  },
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
  },
  async headers() {
    return [
      ...[
        '/api/:path*',
        '/r/:path*',
        '/openapi.json',
        '/llms.txt',
        '/llms-full.txt',
        '/pricing.md',
        '/AGENTS.md',
        '/okf/:path*',
        '/.well-known/:path*',
      ].map((source) => ({
        source,
        headers: [{ key: 'X-Robots-Tag', value: 'noindex' }],
      })),
      {
        source: '/(.*)\\.(png|jpg|jpeg|webp|avif|svg|ico)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Only send LLM discovery headers on navigable HTML pages, not API/JSON endpoints
        source: '/((?!api|_next|r/|openapi\.json|feed\.xml|sitemap\.xml|robots\.txt|.*\.json|.*\.txt|.*\.md|.*\.xml).*)',
        headers: [
          {
            key: 'Link',
            value: '</llms.txt>; rel="alternate"; type="text/markdown", </llms-full.txt>; rel="alternate"; type="text/markdown", </pricing.md>; rel="describedby"; type="text/markdown", </okf/index.md>; rel="describedby"; type="text/markdown", </AGENTS.md>; rel="help"; type="text/markdown"',
          },
          {
            key: 'Vary',
            value: 'Accept',
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

