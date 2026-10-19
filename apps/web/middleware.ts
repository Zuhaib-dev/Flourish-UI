import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const HOMEPAGE_MARKDOWN = `# Flourish UI — Expressive React & Next.js Components

> An open collection of 45+ expressive, interactive React components with live previews, tactile skeuomorphism, WebGL shaders, and shadcn CLI registry support.

- **Website**: https://flourish-ui.vercel.app
- **Components Directory**: https://flourish-ui.vercel.app/components
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

const COMPONENTS_MARKDOWN = `# Flourish UI — 45+ Component Catalog

> A curated collection of 45+ interactive, expressive React components ready for one-command installation via shadcn CLI.

## Design Categories
1. **Shaders & WebGL**: Shader backgrounds, OKLab wave simulations, WebGL 3D ticket foil.
2. **Skeuomorphic & 3D**: Tactile 3D cards, digital flipbooks, retro audio decks, Nordic savings goal cards.
3. **Canvas & Generative**: Particle wordmarks, storybook play canvases, generative ink loops.
4. **Motion & Physics**: Spring physics grids, gesture cards, velocity-driven sliders.
5. **Dashboards & Editors**: Visual workflow nodes, podcast studio workspaces, SEO agent chat UIs.
6. **Interactive Surfaces**: Editorial cottagecore footers, antique cyanotype engravings, fine-art heroes, offline error pages.

## Ingest All 45 Components
- **Full Single-File Knowledge Bundle**: https://flourish-ui.vercel.app/llms-full.txt
- **Component Directory API**: https://flourish-ui.vercel.app/api/components
- **shadcn Registry Catalog**: https://flourish-ui.vercel.app/r/registry.json
`

const DEVELOPERS_MARKDOWN = `# Flourish UI — Developer Portal & Agent APIs

All endpoints return JSON with full CORS permissions:
- \`GET https://flourish-ui.vercel.app/api/components\`: List all components with filtering & pagination.
- \`GET https://flourish-ui.vercel.app/api/components/{slug}\`: Fetch detailed component metadata & dependencies.
- \`GET https://flourish-ui.vercel.app/api/components/{slug}/source\`: Download raw TypeScript React source code.
- \`GET https://flourish-ui.vercel.app/api/categories\`: List all design categories and counts.

## OpenAPI 3.1 Spec
Available at: https://flourish-ui.vercel.app/openapi.json

## WebMCP (Browser Agent Protocol)
Exposed in-browser via \`document.modelContext.registerTool()\`:
- \`search_components(query, category)\`
- \`get_component(slug)\`
- \`get_component_source(slug)\`
- \`list_categories()\`
- \`get_install_command(slug, packageManager)\`
`

const ABOUT_MARKDOWN = `# About Flourish UI

> Flourish UI is an open-source laboratory for expressive React and Next.js components created by full-stack developer Zuhaib Rashid.

## The Mission
Modern design systems have accomplished wonders for baseline usability, but have also fostered a visual monoculture. Flourish UI blends hardware-accelerated WebGL shaders, tactile physical skeuomorphism, dynamic audio synthesis, and fluid spring curves to bring feeling back to web software.

## Key Stats
- 45+ Ready Components
- 100% Free under MIT License
- 0 Vendor Lock-In (Source-first via shadcn CLI)
- Agent-Ready (OpenAPI, WebMCP, OKF)

## Author Profile
- **Created by**: Zuhaib Rashid (Full-Stack Developer & UI Engineer)
- **LinkedIn**: https://www.linkedin.com/in/zuhaib-rashid-661345318/
- **Portfolio**: https://www.zuhaibrashid.com
- **GitHub**: https://github.com/Zuhaib-dev
- **Twitter / X**: https://x.com/xuhaib_x9
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
  '/AGENTS.md',
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
          'Link': '</llms-full.txt>; rel="alternate"; type="text/markdown", </pricing.md>; rel="describedby"; type="text/markdown", </okf/index.md>; rel="describedby"; type="text/markdown"',
        },
      })
    }

    if (pathname === '/components') {
      return new NextResponse(COMPONENTS_MARKDOWN, {
        status: 200,
        headers: {
          'Content-Type': 'text/markdown; charset=utf-8',
          'Vary': 'Accept',
          'Link': '</llms-full.txt>; rel="alternate"; type="text/markdown", </api/components>; rel="service-desc"',
        },
      })
    }

    if (pathname.startsWith('/components/')) {
      const slug = pathname.replace('/components/', '').split('/')[0]
      const componentMarkdown = `# Flourish UI Component: \`${slug}\`

- **Official Page**: https://flourish-ui.vercel.app/components/${slug}
- **Live Interactive Preview**: https://flourish-ui.vercel.app/previews/${slug}
- **Raw TypeScript Source Code**: https://flourish-ui.vercel.app/api/components/${slug}/source
- **Component JSON Metadata**: https://flourish-ui.vercel.app/api/components/${slug}
- **shadcn Registry Schema**: https://flourish-ui.vercel.app/r/${slug}.json

## One-Command Installation (shadcn CLI)
\`\`\`bash
# Using pnpm
pnpm dlx shadcn@latest add https://flourish-ui.vercel.app/r/${slug}.json

# Using npm
npx shadcn@latest add https://flourish-ui.vercel.app/r/${slug}.json

# Using bun
bunx --bun shadcn@latest add https://flourish-ui.vercel.app/r/${slug}.json
\`\`\`
`
      return new NextResponse(componentMarkdown, {
        status: 200,
        headers: {
          'Content-Type': 'text/markdown; charset=utf-8',
          'Vary': 'Accept',
          'Link': `<https://flourish-ui.vercel.app/api/components/${slug}/source>; rel="alternate"; type="text/markdown", <https://flourish-ui.vercel.app/r/${slug}.json>; rel="describedby"; type="application/json"`,
        },
      })
    }

    if (pathname === '/developers') {
      return new NextResponse(DEVELOPERS_MARKDOWN, {
        status: 200,
        headers: {
          'Content-Type': 'text/markdown; charset=utf-8',
          'Vary': 'Accept',
          'Link': '</openapi.json>; rel="service-desc", </.well-known/mcp.json>; rel="describedby"',
        },
      })
    }

    if (pathname === '/about') {
      return new NextResponse(ABOUT_MARKDOWN, {
        status: 200,
        headers: {
          'Content-Type': 'text/markdown; charset=utf-8',
          'Vary': 'Accept',
          'Link': '<https://www.linkedin.com/in/zuhaib-rashid-661345318/>; rel="me", <https://www.zuhaibrashid.com>; rel="author"',
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
