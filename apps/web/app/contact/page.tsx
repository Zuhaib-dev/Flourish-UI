import type { Metadata } from 'next'
import { ArrowRight, ArrowUpRight, HelpCircle, Mail, MessageSquare, Send, Sparkles, Terminal, Wrench } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact and Developer Support',
  description:
    'Get in touch with the Flourish UI team for developer support, custom WebGL shader engineering, feature requests, design consultations, or community collaborations.',
  keywords: [
    'Contact Flourish UI',
    'Flourish UI support',
    'custom React components',
    'custom WebGL shader development',
    'Next.js UI engineer contact',
    'Zuhaib Rashid email',
    'open source UI support',
  ],
  authors: [{ name: 'Zuhaib Rashid', url: 'https://www.zuhaibrashid.com' }],
  creator: 'Zuhaib Rashid',
  publisher: 'Flourish UI',
  alternates: { canonical: 'https://flourish-ui.vercel.app/contact' },
  openGraph: {
    type: 'website',
    title: 'Contact & Developer Support — Flourish UI',
    description:
      'Get in touch with the Flourish UI team for developer support, custom WebGL shader engineering, feature requests, or community collaborations.',
    url: 'https://flourish-ui.vercel.app/contact',
    siteName: 'Flourish UI',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Contact Flourish UI' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact & Developer Support — Flourish UI',
    description:
      'Reach out for developer support, custom component engineering, or collaboration inquiries.',
    creator: '@xuhaibx9',
    images: ['/og-image.png'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ContactPage',
      '@id': 'https://flourish-ui.vercel.app/contact#webpage',
      url: 'https://flourish-ui.vercel.app/contact',
      name: 'Contact Flourish UI',
      description: 'Support channels, direct email contact, and engineering consultations for Flourish UI.',
      publisher: { '@id': 'https://flourish-ui.vercel.app/#organization' },
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
          name: 'Contact',
          item: 'https://flourish-ui.vercel.app/contact',
        },
      ],
    },
  ],
}

export default function ContactPage() {
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
          <span>Contact</span>
        </div>

        {/* ── Hero ─────────────────────────── */}
        <section className="developers-hero" aria-labelledby="contact-heading" style={{ borderBottom: 'none', paddingBottom: 20 }}>
          <div className="developers-hero-copy" style={{ maxWidth: '100%' }}>
            <span className="catalog-kicker"><i />REACH OUT &amp; CONNECT</span>
            <h1 id="contact-heading">
              We&apos;d love to hear<br />
              from <em>you.</em>
            </h1>
            <p style={{ maxWidth: '100%', fontSize: 16, lineHeight: 1.8 }}>
              Have questions about integrating components, ideas for new shader experiments, or inquiries
              regarding bespoke UI/UX engineering engagements? We respond to every email and message promptly.
            </p>
          </div>
        </section>

        {/* ── Direct Contact Cards ──────────── */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: 20, margin: '20px 0 36px' }}>
          <div style={{ padding: 24, background: '#faf9f5', border: '1px solid var(--line)', borderRadius: 8 }}>
            <Mail size={22} style={{ color: 'var(--orange)', marginBottom: 12 }} />
            <h3 style={{ margin: '0 0 6px', fontSize: 16, color: 'var(--ink)' }}>Direct Inquiries</h3>
            <p style={{ margin: '0 0 14px', fontSize: 13, color: 'var(--muted-ink)', lineHeight: 1.6 }}>
              For general questions, component feedback, or custom engineering quotes:
            </p>
            <a href="mailto:zuhaibrashid01@gmail.com" style={{ color: 'var(--orange)', fontWeight: 600, fontSize: 13, display: 'inline-flex', alignItems: 'center', gap: 4 }}>
              zuhaibrashid01@gmail.com <ArrowUpRight size={12} />
            </a>
          </div>

          <div style={{ padding: 24, background: '#faf9f5', border: '1px solid var(--line)', borderRadius: 8 }}>
            <MessageSquare size={22} style={{ color: 'var(--orange)', marginBottom: 12 }} />
            <h3 style={{ margin: '0 0 6px', fontSize: 16, color: 'var(--ink)' }}>GitHub Community</h3>
            <p style={{ margin: '0 0 14px', fontSize: 13, color: 'var(--muted-ink)', lineHeight: 1.6 }}>
              Report a bug, submit a component PR, or start a technical discussion:
            </p>
            <a href="https://github.com/Zuhaib-dev/Flourish-UI/issues" target="_blank" rel="noreferrer" style={{ color: 'var(--orange)', fontWeight: 600, fontSize: 13, display: 'inline-flex', alignItems: 'center', gap: 4 }}>
              Open GitHub Issue <ArrowUpRight size={12} />
            </a>
          </div>

          <div style={{ padding: 24, background: '#faf9f5', border: '1px solid var(--line)', borderRadius: 8 }}>
            <Sparkles size={22} style={{ color: 'var(--orange)', marginBottom: 12 }} />
            <h3 style={{ margin: '0 0 6px', fontSize: 16, color: 'var(--ink)' }}>Founder Portfolio</h3>
            <p style={{ margin: '0 0 14px', fontSize: 13, color: 'var(--muted-ink)', lineHeight: 1.6 }}>
              Learn more about creator Zuhaib Rashid and other creative web projects:
            </p>
            <a href="https://www.zuhaibrashid.com" target="_blank" rel="noreferrer" style={{ color: 'var(--orange)', fontWeight: 600, fontSize: 13, display: 'inline-flex', alignItems: 'center', gap: 4 }}>
              zuhaibrashid.com <ArrowUpRight size={12} />
            </a>
          </div>
        </div>

        {/* ── Guidance Articles ─────────────── */}
        <article style={{ fontSize: 14, lineHeight: 1.8, color: 'var(--muted-ink)' }}>
          <h2 style={{ font: '500 22px Georgia, serif', color: 'var(--ink)', margin: '32px 0 14px' }}>Bespoke Engineering &amp; Custom Systems</h2>
          <p style={{ marginBottom: 16 }}>
            Do you need an exclusive WebGL hero shader for an upcoming product launch, a complex tactile canvas dashboard,
            or bespoke component migrations for your team’s Next.js repository? We partner with selected startups, creative studios,
            and enterprise engineering teams for tailored contracting work.
          </p>
          <p style={{ marginBottom: 28 }}>
            When requesting custom engineering, please include a brief overview of your project requirements, target launch timeline,
            and any design files (Figma, screenshots, or motion references) in your email.
          </p>

          <h2 style={{ font: '500 22px Georgia, serif', color: 'var(--ink)', margin: '32px 0 14px' }}>Reporting Issues &amp; Vulnerabilities</h2>
          <p style={{ marginBottom: 32 }}>
            If you encounter a browser compatibility bug, accessibility obstacle, or performance regression in any Flourish UI component,
            please open an issue on our GitHub repository with minimal reproduction steps. We prioritize accessibility fixes and
            cross-browser parity across Chrome, Safari, Firefox, and Edge.
          </p>
        </article>

        {/* ── Endcap CTA ───────────────────── */}
        <section className="registry-endcap" aria-label="Explore components" style={{ marginTop: 24 }}>
          <div className="registry-endcap-inner">
            <div>
              <span className="catalog-kicker"><i />EXPLORE THE LIBRARY</span>
              <p>Looking for a specific component?<br /><em>Check out the full catalog.</em></p>
            </div>
            <a href="/components" className="registry-cta-primary">
              View components <ArrowRight size={14} />
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
        <nav className="catalog-footer-nav" aria-label="Footer navigation">
          <a href="/components">Components</a>
          <a href="/registry">Registry</a>
          <a href="/developers">Developers</a>
          <a href="/about">About</a>
          <a href="/changelog">Changelog</a>
          <a href="/contact">Contact</a>
        </nav>
        <a href="https://github.com/Zuhaib-dev/Flourish-UI" target="_blank" rel="noreferrer">
          <Terminal size={12} /> GitHub <ArrowUpRight size={10} />
        </a>
        <span>© 2026</span>
      </footer>
    </main>
  )
}
