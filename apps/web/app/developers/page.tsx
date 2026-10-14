import type { Metadata } from 'next'
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  Braces,
  CheckCircle2,
  Code2,
  Cpu,
  FileCode,
  Globe,
  Layers,
  Package,
  Terminal,
} from 'lucide-react'
import ApiTester from './api-tester'
import { components, stats } from '@/config/components'

export const metadata: Metadata = {
  title: 'Developer Portal & Public REST API | Flourish UI',
  description:
    'Programmatic access to Flourish UI components. Official REST API endpoints, OpenAPI 3.1.0 specification, WebMCP agent tools, and interactive API sandbox.',
  keywords: [
    'Flourish UI API',
    'OpenAPI specification',
    'developer portal',
    'WebMCP browser tools',
    'AI agent tools',
    'shadcn registry API',
    'React components API',
  ],
  alternates: { canonical: 'https://flourish-ui.vercel.app/developers' },
  openGraph: {
    title: 'Developer Portal & Public REST API | Flourish UI',
    description:
      'Programmatic access to Flourish UI components. Official REST API endpoints, OpenAPI 3.1.0 specification, WebMCP agent tools, and interactive API sandbox.',
    type: 'website',
    url: 'https://flourish-ui.vercel.app/developers',
    siteName: 'Flourish UI',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Flourish UI Developer Portal' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Developer Portal & Public REST API | Flourish UI',
    description: 'Programmatic access to Flourish UI components. REST API, OpenAPI 3.1.0 spec, and WebMCP agent tools.',
    creator: '@xuhaibx9',
    images: ['/og-image.png'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'TechArticle',
      headline: 'Flourish UI Developer Portal & API Reference',
      description:
        'Official documentation for Flourish UI REST API, OpenAPI 3.1.0 specification, and WebMCP agent integration.',
      url: 'https://flourish-ui.vercel.app/developers',
      author: { '@id': 'https://www.zuhaibrashid.com/#person' },
      publisher: { '@id': 'https://flourish-ui.vercel.app/#organization' },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://flourish-ui.vercel.app',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Developer Portal',
          item: 'https://flourish-ui.vercel.app/developers',
        },
      ],
    },
  ],
}

const endpoints = [
  {
    method: 'GET',
    path: '/api/components',
    desc: 'List all components with optional filters: ?category, ?search, ?tag, ?limit, ?offset.',
    sample: 'https://flourish-ui.vercel.app/api/components?limit=10',
  },
  {
    method: 'GET',
    path: '/api/components/{slug}',
    desc: 'Fetch full metadata, dependencies, and install commands for a specific component.',
    sample: 'https://flourish-ui.vercel.app/api/components/liquid-glass-folder-stack',
  },
  {
    method: 'GET',
    path: '/api/components/{slug}/source',
    desc: 'Fetch raw TypeScript/React source code for direct injection or inspection.',
    sample: 'https://flourish-ui.vercel.app/api/components/liquid-glass-folder-stack/source',
  },
  {
    method: 'GET',
    path: '/api/categories',
    desc: 'List all 6 component design categories with descriptions and item counts.',
    sample: 'https://flourish-ui.vercel.app/api/categories',
  },
  {
    method: 'GET',
    path: '/openapi.json',
    desc: 'Official machine-readable OpenAPI 3.1.0 specification describing all endpoints and schemas.',
    sample: 'https://flourish-ui.vercel.app/openapi.json',
  },
  {
    method: 'GET',
    path: '/r/{slug}.json',
    desc: 'Machine-readable shadcn registry item specification consumed by `shadcn add`.',
    sample: 'https://flourish-ui.vercel.app/r/liquid-glass-folder-stack.json',
  },
]

export default function DevelopersPage() {
  return (
    <main className="developers-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Nav ─────────────────────────────── */}
      <header className="premium-nav">
        <div className="premium-nav-inner">
          <a href="/" className="catalog-brand" aria-label="Flourish UI home">
            <span className="catalog-brand-mark" aria-hidden="true">
              <svg viewBox="0 0 32 32">
                <circle className="brand-orbit" cx="16" cy="16" r="12.5" />
                <g className="brand-flower">
                  <ellipse cx="16" cy="10.2" rx="3.2" ry="5.2" />
                  <ellipse cx="21.8" cy="16" rx="5.2" ry="3.2" />
                  <ellipse cx="16" cy="21.8" rx="3.2" ry="5.2" />
                  <ellipse cx="10.2" cy="16" rx="5.2" ry="3.2" />
                </g>
                <circle className="brand-seed" cx="16" cy="16" r="2.2" />
              </svg>
            </span>
            <span>flourish<span className="brand-dot">.</span></span>
          </a>
          <nav className="catalog-nav-links" aria-label="Main navigation">
            <a href="/components">Components</a>
            <a href="/registry">Registry</a>
            <a href="/changelog">Changelog</a>
            <a className="active" href="/developers">Developers</a>
          </nav>
        </div>
      </header>

      {/* ── Content Layout ─────────────────── */}
      <div className="developers-layout">

        {/* Breadcrumb */}
        <div className="catalog-breadcrumb registry-breadcrumb">
          <a href="/">Home</a>
          <span>/</span>
          <span>Developer Portal</span>
        </div>

        {/* ── Hero ─────────────────────────── */}
        <section className="developers-hero" aria-labelledby="dev-hero-heading">
          <div className="developers-hero-inner">
            <div className="developers-hero-copy">
              <span className="catalog-kicker"><i />DEVELOPER PORTAL &amp; PUBLIC API</span>
              <h1 id="dev-hero-heading">
                Build with Flourish UI<br />
                <em>programmatically.</em>
              </h1>
              <p>
                A public REST API, OpenAPI 3.1.0 specification, WebMCP browser agent tool surface,
                and machine-readable shadcn registry. No API keys required, zero rate-limit hurdles,
                and full CORS enabled out of the box.
              </p>
              <div className="developers-hero-actions">
                <a href="/openapi.json" target="_blank" className="registry-cta-primary">
                  <Braces size={14} /> View OpenAPI 3.1 Spec <ArrowUpRight size={13} />
                </a>
                <a href="#sandbox" className="registry-cta-ghost">
                  Try Interactive Sandbox <ArrowRight size={13} />
                </a>
                <a href="https://github.com/Zuhaib-dev/Flourish-UI" target="_blank" rel="noreferrer" className="registry-cta-ghost">
                  <Terminal size={13} /> GitHub <ArrowUpRight size={11} />
                </a>
              </div>
            </div>

            <div className="developers-stat-cluster" aria-label="API statistics">
              <div className="registry-stat">
                <strong>{components.length}</strong>
                <span>COMPONENTS</span>
              </div>
              <div className="registry-stat-divider" aria-hidden="true" />
              <div className="registry-stat">
                <strong>0</strong>
                <span>AUTH KEYS</span>
              </div>
              <div className="registry-stat-divider" aria-hidden="true" />
              <div className="registry-stat">
                <strong>3.1</strong>
                <span>OPENAPI</span>
              </div>
              <div className="registry-stat-divider" aria-hidden="true" />
              <div className="registry-stat">
                <strong>MCP</strong>
                <span>READY</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── Quickstarts Section ────────────── */}
        <section className="developers-quickstarts" aria-labelledby="quickstarts-heading">
          <div className="developers-section-header">
            <span className="catalog-kicker"><i />QUICKSTART EXAMPLES</span>
            <h2 id="quickstarts-heading">Connect in any language or agent runtime.</h2>
          </div>

          <div className="developers-code-grid">
            <div className="dev-code-card">
              <div className="dev-code-card-header">
                <div className="dev-code-card-title">
                  <Terminal size={14} />
                  <span>cURL</span>
                </div>
                <code>bash</code>
              </div>
              <pre className="dev-code-block">
                <code>{`# 1. List components with category filter
curl -s "https://flourish-ui.vercel.app/api/components?category=Shaders%20%26%20WebGL"

# 2. Get single component install commands & dependencies
curl -s "https://flourish-ui.vercel.app/api/components/liquid-glass-folder-stack"

# 3. Download raw TypeScript component source
curl -s "https://flourish-ui.vercel.app/api/components/liquid-glass-folder-stack/source"`}</code>
              </pre>
            </div>

            <div className="dev-code-card">
              <div className="dev-code-card-header">
                <div className="dev-code-card-title">
                  <FileCode size={14} />
                  <span>TypeScript / JavaScript Fetch</span>
                </div>
                <code>ts</code>
              </div>
              <pre className="dev-code-block">
                <code>{`// Fetch components programmatically
const res = await fetch("https://flourish-ui.vercel.app/api/components");
const { components, total } = await res.json();

console.log(\`Found \${total} components!\`);
console.log(components[0].title, components[0].installCommand);`}</code>
              </pre>
            </div>

            <div className="dev-code-card">
              <div className="dev-code-card-header">
                <div className="dev-code-card-title">
                  <Bot size={14} />
                  <span>WebMCP / Browser AI Agent</span>
                </div>
                <code>modelContext</code>
              </div>
              <pre className="dev-code-block">
                <code>{`// AI agents call in-page tools via WebMCP standard:
const mc = document.modelContext || navigator.modelContext;

// Agent tool invocation:
const results = await mc.callTool("search_components", {
  query: "liquid glass",
  category: "Skeuomorphic & 3D"
});`}</code>
              </pre>
            </div>

            <div className="dev-code-card">
              <div className="dev-code-card-header">
                <div className="dev-code-card-title">
                  <Package size={14} />
                  <span>shadcn CLI Direct Install</span>
                </div>
                <code>cli</code>
              </div>
              <pre className="dev-code-block">
                <code>{`# Add any Flourish UI component straight into components/flourish/
pnpm dlx shadcn@latest add https://flourish-ui.vercel.app/r/liquid-glass-folder-stack.json

# Or using npx, bunx, or yarn dlx
npx shadcn@latest add https://flourish-ui.vercel.app/r/raster-dynamics-wordmark.json`}</code>
              </pre>
            </div>
          </div>
        </section>

        {/* ── Interactive Sandbox ────────────── */}
        <section className="developers-sandbox-section" id="sandbox" aria-labelledby="sandbox-heading">
          <div className="developers-section-header">
            <span className="catalog-kicker"><i />LIVE EXPLORER</span>
            <h2 id="sandbox-heading">Interactive API Sandbox.</h2>
            <p>Test live queries against the Flourish UI REST API in real time.</p>
          </div>
          <ApiTester />
        </section>

        {/* ── Endpoints Reference Table ──────── */}
        <section className="developers-endpoints-section" aria-labelledby="endpoints-heading">
          <div className="developers-section-header">
            <span className="catalog-kicker"><i />REST API REFERENCE</span>
            <h2 id="endpoints-heading">Available Public Endpoints.</h2>
            <p>All endpoints return JSON (or raw TypeScript text for source code) with full CORS permissions.</p>
          </div>

          <div className="developers-endpoints-table-wrap">
            <table className="developers-endpoints-table">
              <thead>
                <tr>
                  <th>Method</th>
                  <th>Route</th>
                  <th>Description</th>
                  <th>Live Sample</th>
                </tr>
              </thead>
              <tbody>
                {endpoints.map((ep) => (
                  <tr key={ep.path}>
                    <td>
                      <span className="api-pill-get">{ep.method}</span>
                    </td>
                    <td>
                      <code>{ep.path}</code>
                    </td>
                    <td>{ep.desc}</td>
                    <td>
                      <a href={ep.sample} target="_blank" rel="noreferrer" className="dev-table-link">
                        Try <ArrowUpRight size={11} />
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ── WebMCP Standard ───────────────── */}
        <section className="developers-webmcp-section" aria-labelledby="webmcp-heading">
          <div className="developers-webmcp-inner">
            <div className="developers-webmcp-copy">
              <span className="catalog-kicker"><i />AI AGENT INTEROPERABILITY</span>
              <h2 id="webmcp-heading">WebMCP in-page tools for browser agents.</h2>
              <p>
                Flourish UI implements the WebMCP standard for autonomous browser agents (such as ChatGPT browser, Claude,
                and Chrome Origin Trial agents). Tools are registered dynamically via <code>document.modelContext.registerTool()</code> and
                declarative server-rendered forms.
              </p>
              <div className="developers-webmcp-features">
                <div className="webmcp-feat">
                  <CheckCircle2 size={16} />
                  <span><code>search_components</code> tool</span>
                </div>
                <div className="webmcp-feat">
                  <CheckCircle2 size={16} />
                  <span><code>get_component</code> metadata tool</span>
                </div>
                <div className="webmcp-feat">
                  <CheckCircle2 size={16} />
                  <span><code>get_component_source</code> code tool</span>
                </div>
                <div className="webmcp-feat">
                  <CheckCircle2 size={16} />
                  <span><code>list_categories</code> taxonomy tool</span>
                </div>
              </div>
            </div>

            <div className="developers-webmcp-panel">
              <div className="webmcp-panel-header">
                <Bot size={16} />
                <span>WebMCP Spec Summary</span>
              </div>
              <div className="webmcp-panel-body">
                <p><strong>Primary registration:</strong> <code>document.modelContext.registerTool()</code></p>
                <p><strong>Fallback registration:</strong> <code>navigator.modelContext.registerTool()</code></p>
                <p><strong>Declarative forms:</strong> <code>&lt;form toolname=&quot;...&quot; tooldescription=&quot;...&quot;&gt;</code></p>
                <p><strong>OpenAPI Endpoint:</strong> <a href="/openapi.json" target="_blank">/openapi.json</a></p>
                <p><strong>LLM Agent Manifest:</strong> <a href="/llms.txt" target="_blank">/llms.txt</a></p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Endcap CTA ───────────────────── */}
        <section className="registry-endcap" aria-label="Explore components">
          <div className="registry-endcap-inner">
            <div>
              <span className="catalog-kicker"><i />OPEN ECOSYSTEM</span>
              <p>Ready to build something distinctive?<br /><em>Explore the components.</em></p>
            </div>
            <a href="/components" className="registry-cta-primary">
              Explore library <ArrowRight size={14} />
            </a>
          </div>
        </section>

      </div>

      {/* ── Footer ──────────────────────────── */}
      <footer className="catalog-footer">
        <a href="/" className="catalog-brand">
          <span className="catalog-brand-mark" aria-hidden="true">✳</span>
          <span>flourish<span>.</span></span>
        </a>
        <span>Made with care by <a href="https://www.zuhaibrashid.com" target="_blank" rel="noreferrer">Zuhaib Rashid</a></span>
        <a href="https://github.com/Zuhaib-dev/Flourish-UI" target="_blank" rel="noreferrer">
          <Terminal size={13} /> GitHub <ArrowUpRight size={11} />
        </a>
        <span>© 2026</span>
      </footer>
    </main>
  )
}
