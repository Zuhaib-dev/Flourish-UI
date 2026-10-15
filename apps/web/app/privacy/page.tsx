import type { Metadata } from 'next'
import { ArrowRight, ArrowUpRight, CheckCircle2, Lock, ShieldCheck, Terminal } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Privacy Policy & Data Ethics — Flourish UI',
  description:
    'Flourish UI privacy policy. Zero tracking cookies, zero runtime telemetry, and complete privacy for developers and end-users. Read our transparent data ethics.',
  keywords: [
    'Flourish UI privacy policy',
    'zero tracking React components',
    'open source privacy policy',
    'cookie policy Flourish UI',
    'developer privacy ethics',
  ],
  authors: [{ name: 'Zuhaib Rashid', url: 'https://www.zuhaibrashid.com' }],
  creator: 'Zuhaib Rashid',
  publisher: 'Flourish UI',
  alternates: { canonical: 'https://flourish-ui.vercel.app/privacy' },
  openGraph: {
    type: 'website',
    title: 'Privacy Policy & Data Ethics — Flourish UI',
    description:
      'Flourish UI privacy policy. Zero tracking cookies, zero runtime telemetry, and complete user respect. Read our transparent data practices.',
    url: 'https://flourish-ui.vercel.app/privacy',
    siteName: 'Flourish UI',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Flourish UI Privacy Policy' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Privacy Policy & Data Ethics — Flourish UI',
    description:
      'Zero tracking cookies, zero runtime telemetry, and complete user privacy. Read our transparent data ethics.',
    creator: '@xuhaibx9',
    images: ['/og-image.png'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebPage',
      '@id': 'https://flourish-ui.vercel.app/privacy#webpage',
      url: 'https://flourish-ui.vercel.app/privacy',
      name: 'Flourish UI Privacy Policy',
      description: 'Transparent privacy and data practices for Flourish UI website and open-source components.',
      specialty: 'Privacy Policy',
      publisher: { '@id': 'https://flourish-ui.vercel.app/#organization' },
      isPartOf: { '@id': 'https://flourish-ui.vercel.app/#website' },
      datePublished: '2026-10-01',
      dateModified: '2026-10-15',
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
          name: 'Privacy Policy',
          item: 'https://flourish-ui.vercel.app/privacy',
        },
      ],
    },
  ],
}

export default function PrivacyPage() {
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
          <span>Privacy Policy</span>
        </div>

        {/* ── Hero ─────────────────────────── */}
        <section className="developers-hero" aria-labelledby="privacy-heading" style={{ borderBottom: 'none', paddingBottom: 20 }}>
          <div className="developers-hero-copy" style={{ maxWidth: '100%' }}>
            <span className="catalog-kicker"><i />TRANSPARENCY &amp; ETHICS</span>
            <h1 id="privacy-heading">
              Privacy Policy &amp;<br />
              <em>Data Ethics.</em>
            </h1>
            <p style={{ maxWidth: '100%', fontSize: 16, lineHeight: 1.8 }}>
              Effective Date: October 2026 · Last Updated: October 15, 2026.
              Flourish UI is built on a simple foundation of respect: we do not collect personal data,
              sell information, or inject tracking beacons into open-source code.
            </p>
          </div>
        </section>

        {/* ── Highlights Grid ───────────────── */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16, margin: '16px 0 36px' }}>
          <div style={{ padding: 18, background: '#faf9f5', border: '1px solid var(--line)', borderRadius: 8, display: 'flex', gap: 12, alignItems: 'center' }}>
            <ShieldCheck size={20} style={{ color: 'var(--orange)', flexShrink: 0 }} />
            <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--ink)' }}>0 Tracking Cookies</span>
          </div>
          <div style={{ padding: 18, background: '#faf9f5', border: '1px solid var(--line)', borderRadius: 8, display: 'flex', gap: 12, alignItems: 'center' }}>
            <Lock size={20} style={{ color: 'var(--orange)', flexShrink: 0 }} />
            <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--ink)' }}>0 Runtime Telemetry</span>
          </div>
          <div style={{ padding: 18, background: '#faf9f5', border: '1px solid var(--line)', borderRadius: 8, display: 'flex', gap: 12, alignItems: 'center' }}>
            <CheckCircle2 size={20} style={{ color: 'var(--orange)', flexShrink: 0 }} />
            <span style={{ fontSize: 13, fontWeight: 600, color: 'var(--ink)' }}>100% Code Ownership</span>
          </div>
        </div>

        {/* ── Policy Articles ───────────────── */}
        <article style={{ fontSize: 14, lineHeight: 1.8, color: 'var(--muted-ink)' }}>
          <h2 style={{ font: '500 22px Georgia, serif', color: 'var(--ink)', margin: '28px 0 12px' }}>1. Zero Runtime Telemetry</h2>
          <p style={{ marginBottom: 16 }}>
            None of the code components published on Flourish UI contain background analytics, trackers, beacons,
            or third-party network pings. When you copy a component or install it using the shadcn CLI, you receive clean,
            standalone TypeScript and React code that executes exclusively within your application and user browsers.
          </p>

          <h2 style={{ font: '500 22px Georgia, serif', color: 'var(--ink)', margin: '28px 0 12px' }}>2. Website Analytics &amp; Cookies</h2>
          <p style={{ marginBottom: 16 }}>
            The public showcase website (flourish-ui.vercel.app) uses lightweight, privacy-friendly Vercel Web Analytics in production.
            This analytics layer is completely cookie-less, does not store or process IP addresses, and does not track personal identifying information (PII).
            Its sole function is measuring aggregate site performance, such as overall page views and browser errors, to maintain site uptime.
          </p>

          <h2 style={{ font: '500 22px Georgia, serif', color: 'var(--ink)', margin: '28px 0 12px' }}>3. Public API &amp; Agent Machine Endpoints</h2>
          <p style={{ marginBottom: 16 }}>
            Our public REST API (<code>/api/components</code>) and machine-readable endpoints (<code>/openapi.json</code>, <code>/llms.txt</code>, <code>/pricing.md</code>)
            do not require registration or personal authentication tokens. Standard web server access logs (including requested URLs and HTTP user-agents)
            are processed temporarily for DDoS mitigation, bot verification, and rate stability, and are discarded automatically.
          </p>

          <h2 style={{ font: '500 22px Georgia, serif', color: 'var(--ink)', margin: '28px 0 12px' }}>4. Third-Party Code Repositories</h2>
          <p style={{ marginBottom: 16 }}>
            Flourish UI source code is hosted publicly on GitHub. Any contributions, pull requests, or issues you submit are governed
            by GitHub&apos;s Terms of Service and Privacy Statement. We do not transfer your GitHub profile information to external databases.
          </p>

          <h2 style={{ font: '500 22px Georgia, serif', color: 'var(--ink)', margin: '28px 0 12px' }}>5. Contact &amp; Questions</h2>
          <p style={{ marginBottom: 32 }}>
            If you have questions or concerns regarding our privacy practices, you can contact founder Zuhaib Rashid directly at{' '}
            <a href="mailto:zuhaibrashid01@gmail.com" style={{ color: 'var(--orange)', fontWeight: 600 }}>zuhaibrashid01@gmail.com</a>.
          </p>
        </article>

        {/* ── Endcap CTA ───────────────────── */}
        <section className="registry-endcap" aria-label="Explore components" style={{ marginTop: 24 }}>
          <div className="registry-endcap-inner">
            <div>
              <span className="catalog-kicker"><i />TRANSPARENT &amp; OPEN</span>
              <p>Ready to install expressive components?<br /><em>Check out the full library.</em></p>
            </div>
            <a href="/components" className="registry-cta-primary">
              Browse components <ArrowRight size={14} />
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
