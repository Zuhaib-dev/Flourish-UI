import type { Metadata } from 'next'
import { ArrowRight, ArrowUpRight, Code2, Cpu, Heart, Layers, ShieldCheck, Sparkles, Terminal, Zap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Flourish UI — Open Source Expressive React Components & Story',
  description:
    'Discover the story behind Flourish UI. Created by Zuhaib Rashid, Flourish UI brings tactile skeuomorphism, WebGL shaders, and feeling back to modern React and Next.js interfaces under the MIT license.',
  keywords: [
    'About Flourish UI',
    'Zuhaib Rashid',
    'React component library',
    'expressive UI components',
    'open source React',
    'shadcn registry library',
    'WebGL shaders React',
    'tactile skeuomorphism',
    'Next.js UI design',
  ],
  authors: [{ name: 'Zuhaib Rashid', url: 'https://www.zuhaibrashid.com' }],
  creator: 'Zuhaib Rashid',
  publisher: 'Flourish UI',
  alternates: { canonical: 'https://flourish-ui.vercel.app/about' },
  openGraph: {
    type: 'website',
    title: 'About Flourish UI — Open Source Expressive React Components & Story',
    description:
      'Discover the story behind Flourish UI. Created by Zuhaib Rashid, Flourish UI brings tactile skeuomorphism, WebGL shaders, and feeling back to modern React and Next.js interfaces.',
    url: 'https://flourish-ui.vercel.app/about',
    siteName: 'Flourish UI',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'About Flourish UI' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Flourish UI — Open Source Expressive React Components & Story',
    description:
      'Created by Zuhaib Rashid, Flourish UI brings tactile skeuomorphism, WebGL shaders, and feeling back to modern React interfaces.',
    creator: '@xuhaibx9',
    images: ['/og-image.png'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'AboutPage',
      '@id': 'https://flourish-ui.vercel.app/about#webpage',
      url: 'https://flourish-ui.vercel.app/about',
      name: 'About Flourish UI',
      description:
        'The origins, mission, and architectural philosophy behind the Flourish UI open-source React component library.',
      publisher: { '@id': 'https://flourish-ui.vercel.app/#organization' },
      about: { '@id': 'https://flourish-ui.vercel.app/#organization' },
      isPartOf: { '@id': 'https://flourish-ui.vercel.app/#website' },
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
          name: 'About',
          item: 'https://flourish-ui.vercel.app/about',
        },
      ],
    },
  ],
}

export default function AboutPage() {
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
            <a href="/developers">Developers</a>
          </nav>
        </div>
      </header>

      {/* ── Content Layout ─────────────────── */}
      <div className="developers-layout" style={{ maxWidth: 880 }}>
        {/* Breadcrumb */}
        <div className="catalog-breadcrumb registry-breadcrumb">
          <a href="/">Home</a>
          <span>/</span>
          <span>About</span>
        </div>

        {/* ── Hero ─────────────────────────── */}
        <section className="developers-hero" aria-labelledby="about-heading" style={{ borderBottom: 'none', paddingBottom: 20 }}>
          <div className="developers-hero-copy" style={{ maxWidth: '100%' }}>
            <span className="catalog-kicker"><i />OUR MISSION &amp; ORIGINS</span>
            <h1 id="about-heading">
              Good interfaces have<br />
              a little <em>feeling.</em>
            </h1>
            <p style={{ maxWidth: '100%', fontSize: 16, lineHeight: 1.8 }}>
              Flourish UI is an open-source laboratory for expressive React and Next.js components.
              Created by full-stack developer Zuhaib Rashid, Flourish UI was born from a desire to bring craft,
              tactile feedback, and aesthetic distinction back to everyday web interfaces.
            </p>
          </div>
        </section>

        {/* ── Key Stats ────────────────────── */}
        <div className="developers-stat-cluster" style={{ margin: '16px 0 40px', justifyContent: 'flex-start' }} aria-label="Flourish UI stats">
          <div className="registry-stat">
            <strong>37+</strong>
            <span>COMPONENTS</span>
          </div>
          <div className="registry-stat-divider" aria-hidden="true" />
          <div className="registry-stat">
            <strong>100%</strong>
            <span>MIT LICENSE</span>
          </div>
          <div className="registry-stat-divider" aria-hidden="true" />
          <div className="registry-stat">
            <strong>0</strong>
            <span>LOCK-IN</span>
          </div>
          <div className="registry-stat-divider" aria-hidden="true" />
          <div className="registry-stat">
            <strong>MCP</strong>
            <span>AGENT READY</span>
          </div>
        </div>

        {/* ── Core Philosophy Articles ──────── */}
        <article className="about-content" style={{ fontSize: 14, lineHeight: 1.8, color: 'var(--muted-ink)' }}>
          <h2 style={{ font: '500 24px Georgia, serif', color: 'var(--ink)', margin: '36px 0 16px' }}>The Problem with Monoculture</h2>
          <p style={{ marginBottom: 16 }}>
            Modern design systems have accomplished wonders for consistency and baseline usability. However, they have also
            unintentionally fostered a visual monoculture. When every application relies on the exact same neutral border-radius,
            the same gray hover states, and the same sterile buttons, digital software loses its personality and charm.
          </p>
          <p style={{ marginBottom: 24 }}>
            Flourish UI asks what happens when we leave the details in. We blend hardware-accelerated WebGL shaders,
            generative particle mechanics, physical skeuomorphism, dynamic audio synthesis, and fluid spring curves to create
            interfaces that surprise, delight, and linger in memory.
          </p>

          <h2 style={{ font: '500 24px Georgia, serif', color: 'var(--ink)', margin: '36px 0 16px' }}>Our Three Design Pillars</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20, marginBottom: 32 }}>
            <div style={{ padding: 22, background: '#faf9f5', border: '1px solid var(--line)', borderRadius: 8 }}>
              <Sparkles size={20} style={{ color: 'var(--orange)', marginBottom: 10 }} />
              <strong style={{ display: 'block', color: 'var(--ink)', fontSize: 15, marginBottom: 6 }}>Tactile Craft</strong>
              <p style={{ margin: 0, fontSize: 12.5, lineHeight: 1.6 }}>
                Every element is handcrafted with physical consideration — from holographic foil sheens to responsive spring hinges and spatial depth.
              </p>
            </div>
            <div style={{ padding: 22, background: '#faf9f5', border: '1px solid var(--line)', borderRadius: 8 }}>
              <Layers size={20} style={{ color: 'var(--orange)', marginBottom: 10 }} />
              <strong style={{ display: 'block', color: 'var(--ink)', fontSize: 15, marginBottom: 6 }}>Zero Vendor Lock-In</strong>
              <p style={{ margin: 0, fontSize: 12.5, lineHeight: 1.6 }}>
                Source-first philosophy. Code lives in your repository via the shadcn CLI registry. Modify any line, theme, or animation forever.
              </p>
            </div>
            <div style={{ padding: 22, background: '#faf9f5', border: '1px solid var(--line)', borderRadius: 8 }}>
              <Cpu size={20} style={{ color: 'var(--orange)', marginBottom: 10 }} />
              <strong style={{ display: 'block', color: 'var(--ink)', fontSize: 15, marginBottom: 6 }}>Dual-Native Architecture</strong>
              <p style={{ margin: 0, fontSize: 12.5, lineHeight: 1.6 }}>
                Built equally for human developers and autonomous AI evaluation agents through OpenAPI specs, WebMCP in-page tools, and structured pricing.
              </p>
            </div>
          </div>

          <h2 style={{ font: '500 24px Georgia, serif', color: 'var(--ink)', margin: '36px 0 16px' }}>Open Source &amp; Community Commitment</h2>
          <p style={{ marginBottom: 16 }}>
            Flourish UI is published under the open-source MIT License. You are free to use every component in personal side projects,
            venture-backed SaaS applications, client engagements, and open-source packages without paying licensing fees or requiring attribution.
          </p>
          <p style={{ marginBottom: 32 }}>
            There are no hidden telemetries, no tracking cookies, and no runtime paywalls. You inspect the full code before you install it,
            ensuring complete privacy and reliability.
          </p>

          {/* Author Card */}
          <div style={{ padding: '26px', background: '#faf9f5', border: '1px solid var(--line)', borderRadius: 8, display: 'flex', gap: 18, alignItems: 'center' }}>
            <div style={{ width: 48, height: 48, borderRadius: '50%', background: '#eceae3', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <span style={{ font: '600 18px Georgia, serif', color: 'var(--orange)' }}>Z</span>
            </div>
            <div>
              <strong style={{ color: 'var(--ink)', fontSize: 16, display: 'block', marginBottom: 4 }}>Created by Zuhaib Rashid</strong>
              <p style={{ margin: '0 0 6px', fontSize: 13, lineHeight: 1.6 }}>
                Full-stack developer and UI engineer based in Srinagar, Jammu &amp; Kashmir. Focused on building thoughtful, high-performance web software.
              </p>
              <div style={{ display: 'flex', gap: 14 }}>
                <a href="https://www.zuhaibrashid.com" target="_blank" rel="noreferrer" style={{ color: 'var(--orange)', fontWeight: 600, fontSize: 12, display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                  Personal Portfolio <ArrowUpRight size={11} />
                </a>
                <a href="https://x.com/xuhaib_x9" target="_blank" rel="noreferrer" style={{ color: 'var(--orange)', fontWeight: 600, fontSize: 12, display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                  Twitter / X <ArrowUpRight size={11} />
                </a>
                <a href="https://github.com/Zuhaib-dev" target="_blank" rel="noreferrer" style={{ color: 'var(--orange)', fontWeight: 600, fontSize: 12, display: 'inline-flex', alignItems: 'center', gap: 4 }}>
                  GitHub <ArrowUpRight size={11} />
                </a>
              </div>
            </div>
          </div>
        </article>

        {/* ── Endcap CTA ───────────────────── */}
        <section className="registry-endcap" aria-label="Explore components" style={{ marginTop: 48 }}>
          <div className="registry-endcap-inner">
            <div>
              <span className="catalog-kicker"><i />EXPLORE THE WORK</span>
              <p>Ready to bring feeling to your next project?<br /><em>Browse the collection.</em></p>
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
        <div style={{ display: 'flex', gap: 16 }}>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
          <a href="/privacy">Privacy</a>
          <a href="/developers">Developers</a>
          <a href="https://github.com/Zuhaib-dev/Flourish-UI" target="_blank" rel="noreferrer">
            <Terminal size={12} /> GitHub <ArrowUpRight size={10} />
          </a>
        </div>
        <span>© 2026</span>
      </footer>
    </main>
  )
}
