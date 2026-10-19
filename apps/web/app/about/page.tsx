import type { Metadata } from 'next'
import Image from 'next/image'
import { ArrowRight, ArrowUpRight, Code2, Cpu, Globe, Heart, Layers, ShieldCheck, Sparkles, Terminal, Zap } from 'lucide-react'
import { stats } from '@/config/components'

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
    {
      '@type': 'Person',
      '@id': 'https://www.zuhaibrashid.com/#person',
      name: 'Zuhaib Rashid',
      url: 'https://www.zuhaibrashid.com',
      image: 'https://flourish-ui.vercel.app/zuhaib-rashid.webp',
      jobTitle: 'Full-Stack Developer & UI Engineer',
      sameAs: [
        'https://www.linkedin.com/in/zuhaib-rashid-661345318/',
        'https://github.com/Zuhaib-dev',
        'https://x.com/xuhaib_x9',
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
            <strong>{stats.components}+</strong>
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
          <div
            style={{
              padding: '28px',
              background: '#faf9f5',
              border: '1px solid var(--line)',
              borderRadius: '16px',
              display: 'flex',
              flexDirection: 'row',
              gap: '24px',
              alignItems: 'center',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.03)',
            }}
          >
            <div style={{ position: 'relative', flexShrink: 0 }}>
              <div
                style={{
                  width: '84px',
                  height: '84px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                  border: '2.5px solid #fff',
                  boxShadow: '0 4px 16px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(0, 0, 0, 0.06)',
                  position: 'relative',
                  background: '#eceae3',
                }}
              >
                <Image
                  src="/zuhaib-rashid.webp"
                  alt="Zuhaib Rashid"
                  width={84}
                  height={84}
                  priority
                  style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                />
              </div>
              <span
                style={{
                  position: 'absolute',
                  bottom: '2px',
                  right: '2px',
                  width: '14px',
                  height: '14px',
                  borderRadius: '50%',
                  background: '#10b981',
                  border: '2px solid #fff',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.15)',
                }}
                title="Active Developer & Creator"
              />
            </div>

            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap', marginBottom: '6px' }}>
                <strong style={{ color: 'var(--ink)', fontSize: '18px', fontWeight: 600, letterSpacing: '-0.01em' }}>
                  Zuhaib Rashid
                </strong>
                <span
                  style={{
                    fontSize: '11px',
                    fontFamily: 'monospace',
                    color: 'var(--orange)',
                    background: 'rgba(232, 96, 52, 0.08)',
                    padding: '2px 8px',
                    borderRadius: '12px',
                    fontWeight: 600,
                    letterSpacing: '0.04em',
                  }}
                >
                  CREATOR &amp; MAINTAINER
                </span>
              </div>

              <p style={{ margin: '0 0 14px', fontSize: '13.5px', lineHeight: 1.65, color: 'var(--muted-ink)' }}>
                Full-stack developer and creative technologist based in Srinagar, Jammu &amp; Kashmir. Dedicated to crafting thoughtful, high-performance digital software blending tactile physics, WebGL visuals, and zero-lock-in components.
              </p>

              <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                <a
                  href="https://www.linkedin.com/in/zuhaib-rashid-661345318/"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '12px',
                    fontWeight: 500,
                    color: '#0a66c2',
                    background: '#fff',
                    border: '1px solid #d0d7de',
                    padding: '6px 13px',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    transition: 'all 0.15s ease',
                    boxShadow: '0 1px 2px rgba(0,0,0,0.03)',
                  }}
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                  </svg>
                  <span>LinkedIn</span>
                  <ArrowUpRight size={11} />
                </a>

                <a
                  href="https://www.zuhaibrashid.com"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '12px',
                    fontWeight: 500,
                    color: 'var(--ink)',
                    background: '#fff',
                    border: '1px solid #d0d7de',
                    padding: '6px 13px',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    transition: 'all 0.15s ease',
                    boxShadow: '0 1px 2px rgba(0,0,0,0.03)',
                  }}
                >
                  <Globe size={13} style={{ color: 'var(--orange)' }} />
                  <span>Portfolio</span>
                  <ArrowUpRight size={11} />
                </a>

                <a
                  href="https://github.com/Zuhaib-dev"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '12px',
                    fontWeight: 500,
                    color: 'var(--ink)',
                    background: '#fff',
                    border: '1px solid #d0d7de',
                    padding: '6px 13px',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    transition: 'all 0.15s ease',
                    boxShadow: '0 1px 2px rgba(0,0,0,0.03)',
                  }}
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                  <span>GitHub</span>
                  <ArrowUpRight size={11} />
                </a>

                <a
                  href="https://x.com/xuhaib_x9"
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '12px',
                    fontWeight: 500,
                    color: 'var(--ink)',
                    background: '#fff',
                    border: '1px solid #d0d7de',
                    padding: '6px 13px',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    transition: 'all 0.15s ease',
                    boxShadow: '0 1px 2px rgba(0,0,0,0.03)',
                  }}
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                  <span>Twitter / X</span>
                  <ArrowUpRight size={11} />
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
