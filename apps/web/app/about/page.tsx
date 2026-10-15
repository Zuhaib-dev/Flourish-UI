import type { Metadata } from 'next'
import { ArrowLeft, ArrowUpRight, Code2, Heart, Sparkles, Terminal } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Flourish UI — Open Source Expressive React Components',
  description:
    'Learn about Flourish UI, our mission to bring craft and feeling back to modern web interfaces, and the story behind our open-source component collection.',
  alternates: { canonical: 'https://flourish-ui.vercel.app/about' },
  openGraph: {
    type: 'website',
    title: 'About Flourish UI — Open Source Expressive React Components',
    description:
      'Learn about Flourish UI, our mission to bring craft and feeling back to modern web interfaces, and the story behind our open-source component collection.',
    url: 'https://flourish-ui.vercel.app/about',
    siteName: 'Flourish UI',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'About Flourish UI' }],
  },
}

export default function AboutPage() {
  return (
    <div className="developers-page">
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
            <a href="/developers">Developers</a>
          </nav>
        </div>
      </header>

      <main className="developers-layout" style={{ maxWidth: 840 }}>
        <div className="catalog-breadcrumb registry-breadcrumb">
          <a href="/">Home</a>
          <span>/</span>
          <span>About</span>
        </div>

        <section className="developers-hero" style={{ borderBottom: 'none', paddingBottom: 24 }}>
          <div className="developers-hero-copy" style={{ maxWidth: '100%' }}>
            <span className="catalog-kicker"><i />ABOUT THE PROJECT</span>
            <h1>Good interfaces have a little <em>feeling.</em></h1>
            <p style={{ maxWidth: '100%', fontSize: 15, lineHeight: 1.8 }}>
              Flourish UI was created by full-stack developer and UI engineer Zuhaib Rashid to push back against the
              sterile, cookie-cutter aesthetics of modern design systems. We believe digital products should evoke delight,
              tactile curiosity, and memorable emotional engagement.
            </p>
          </div>
        </section>

        <article className="about-content" style={{ fontSize: 14, lineHeight: 1.8, color: 'var(--muted-ink)' }}>
          <h2 style={{ font: '500 24px Georgia, serif', color: 'var(--ink)', margin: '32px 0 16px' }}>Our Design Philosophy</h2>
          <p style={{ marginBottom: 16 }}>
            Every component in Flourish UI starts with a point of view. Rather than wrapping standard browser primitives
            in neutral gray borders, we explore WebGL shaders, fluid canvas dynamics, nostalgic skeuomorphism, dynamic audio synthesis,
            and spring-loaded physical interactions.
          </p>
          <p style={{ marginBottom: 16 }}>
            We adhere strictly to a source-first, zero vendor lock-in model. When you find a component you love, you copy the
            TypeScript source code directly into your repository or install it with a single command via the shadcn CLI. The code is yours
            to tweak, reshape, and brand forever.
          </p>

          <h2 style={{ font: '500 24px Georgia, serif', color: 'var(--ink)', margin: '32px 0 16px' }}>Open Source &amp; Free Forever</h2>
          <p style={{ marginBottom: 16 }}>
            Flourish UI is published under the permissive MIT Open Source License. It is 100% free for personal websites,
            commercial client work, SaaS products, and open-source applications. There are no paid subscription tiers, no hidden usage limits,
            and no analytics telemetry injected into your components.
          </p>

          <h2 style={{ font: '500 24px Georgia, serif', color: 'var(--ink)', margin: '32px 0 16px' }}>Built for Developers &amp; Agents</h2>
          <p style={{ marginBottom: 24 }}>
            In addition to high-craft human interfaces, Flourish UI is designed from the ground up for autonomous AI evaluation agents
            and automated build tools. We publish full machine-readable pricing specifications at <code>/pricing.md</code>, complete single-file
            knowledge bundles at <code>/llms-full.txt</code>, and browser-callable tools via the emerging WebMCP standard.
          </p>

          <div style={{ padding: '24px', background: '#faf9f5', border: '1px solid var(--line)', borderRadius: 8, display: 'flex', gap: 16, alignItems: 'center' }}>
            <Sparkles size={24} style={{ color: 'var(--orange)', flexShrink: 0 }} />
            <div>
              <strong style={{ color: 'var(--ink)', display: 'block', marginBottom: 4 }}>Created by Zuhaib Rashid</strong>
              <span>Full-stack developer and creator based in Srinagar, Jammu &amp; Kashmir. Discover more work at <a href="https://www.zuhaibrashid.com" target="_blank" rel="noreferrer" style={{ color: 'var(--orange)', fontWeight: 600 }}>zuhaibrashid.com</a>.</span>
            </div>
          </div>
        </article>
      </main>

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
    </div>
  )
}
