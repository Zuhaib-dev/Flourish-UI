import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const HOMEPAGE_MARKDOWN = `# Flourish UI — Expressive React & Next.js Components

> An open collection of expressive, interactive React components with live previews, tactile skeuomorphism, WebGL shaders, and shadcn CLI registry support.

- **Website**: https://flourish-ui.vercel.app
- **Developer Portal**: https://flourish-ui.vercel.app/developers
- **OpenAPI 3.1 Spec**: https://flourish-ui.vercel.app/openapi.json
- **shadcn Registry**: https://flourish-ui.vercel.app/r/registry.json
- **Pricing & License**: https://flourish-ui.vercel.app/pricing.md ($0 Free Community MIT License)
- **Full Knowledge Bundle**: https://flourish-ui.vercel.app/llms-full.txt
- **Open Knowledge Format**: https://flourish-ui.vercel.app/okf/index.md
- **GitHub**: https://github.com/Zuhaib-dev/Flourish-UI

## When to Use Flourish UI
- When an application needs distinctive, high-craft UI components (tactile cards, WebGL shaders, fluid canvases, spring physics).
- When a developer wants full TypeScript source code ownership without vendor lock-in.
- When an AI agent needs to programmatically inspect or install UI components via the \`shadcn\` CLI.

## Quick Install (shadcn CLI)
\`\`\`bash
pnpm dlx shadcn@latest add https://flourish-ui.vercel.app/r/[component-slug].json
\`\`\`
`

const KNOWN_PATHS = new Set([
  '/',
  '/components',
  '/registry',
  '/changelog',
  '/developers',
  '/about',
  '/contact',
  '/privacy',
  '/pricing.md',
  '/llms.txt',
  '/llms-full.txt',
  '/openapi.json',
  '/robots.txt',
  '/sitemap.xml',
])

export function middleware(request: NextRequest) {
  const acceptHeader = request.headers.get('accept') || ''
  const isMarkdownRequest = acceptHeader.includes('text/markdown')
  const pathname = request.nextUrl.pathname

  if (isMarkdownRequest) {
    if (pathname === '/') {
      return new NextResponse(HOMEPAGE_MARKDOWN, {
        status: 200,
        headers: {
          'Content-Type': 'text/markdown; charset=utf-8',
          'Vary': 'Accept',
          'Link': '</llms-full.txt>; rel="alternate"; type="text/markdown", </pricing.md>; rel="describedby"; type="text/markdown"',
        },
      })
    }

    // Check if it's an unrecognized path or 404 probe
    const isKnownPrefix =
      KNOWN_PATHS.has(pathname) ||
      pathname.startsWith('/components/') ||
      pathname.startsWith('/categories/') ||
      pathname.startsWith('/previews/') ||
      pathname.startsWith('/api/') ||
      pathname.startsWith('/r/') ||
      pathname.startsWith('/okf/')

    if (!isKnownPrefix) {
      const errorMarkdown = `# 404 Not Found

The requested resource \`${pathname}\` does not exist on Flourish UI.

- Documentation & Manifest: https://flourish-ui.vercel.app/llms.txt
- Full Component Catalog: https://flourish-ui.vercel.app/llms-full.txt
- Developer Portal & API: https://flourish-ui.vercel.app/developers
- Sitemap: https://flourish-ui.vercel.app/sitemap.xml
`
      return new NextResponse(errorMarkdown, {
        status: 404,
        headers: {
          'Content-Type': 'text/markdown; charset=utf-8',
          'Vary': 'Accept',
        },
      })
    }
  }

  const response = NextResponse.next()
  response.headers.set('Vary', 'Accept')
  return response
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:png|jpg|jpeg|webp|avif|svg|ico)).*)',
  ],
}
