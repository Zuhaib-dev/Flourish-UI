import type { Metadata } from 'next'
import { ArrowUpRight, ShieldCheck, Terminal } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Privacy Policy — Flourish UI',
  description:
    'Flourish UI privacy policy. We believe in privacy by design: zero tracking cookies, zero runtime telemetry, and complete user respect.',
  alternates: { canonical: 'https://flourish-ui.vercel.app/privacy' },
  openGraph: {
    type: 'website',
    title: 'Privacy Policy — Flourish UI',
    description:
      'Flourish UI privacy policy. We believe in privacy by design: zero tracking cookies, zero runtime telemetry, and complete user respect.',
    url: 'https://flourish-ui.vercel.app/privacy',
    siteName: 'Flourish UI',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Flourish UI Privacy Policy' }],
  },
}

export default function PrivacyPage() {
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
          <span>Privacy Policy</span>
        </div>

        <section className="developers-hero" style={{ borderBottom: 'none', paddingBottom: 24 }}>
          <div className="developers-hero-copy" style={{ maxWidth: '100%' }}>
            <span className="catalog-kicker"><i />TRANSPARENCY &amp; TRUST</span>
            <h1>Privacy Policy &amp; <em>Data Ethics.</em></h1>
            <p style={{ maxWidth: '100%', fontSize: 15, lineHeight: 1.8 }}>
              Effective Date: October 2026. Flourish UI is an open-source educational and developer resource.
              We hold a simple, uncompromising stance on user privacy: we do not collect personal data, sell information,
              or track your activities across the web.
            </p>
          </div>
        </section>

        <article style={{ fontSize: 14, lineHeight: 1.8, color: 'var(--muted-ink)' }}>
          <h2 style={{ font: '500 22px Georgia, serif', color: 'var(--ink)', margin: '28px 0 14px' }}>1. Zero Runtime Telemetry</h2>
          <p style={{ marginBottom: 16 }}>
            None of the code components provided in Flourish UI contain background analytics, trackers, beacons, or third-party phone-home telemetry.
            When you copy a component or install it using the shadcn CLI, you receive clean, standalone TypeScript and React code that executes solely
            within your local environment and under your exclusive control.
          </p>

          <h2 style={{ font: '500 22px Georgia, serif', color: 'var(--ink)', margin: '28px 0 14px' }}>2. Website Analytics &amp; Cookies</h2>
          <p style={{ marginBottom: 16 }}>
            The public showcase website (flourish-ui.vercel.app) uses lightweight, privacy-friendly Vercel Web Analytics in production.
            This analytics layer is fully cookie-less, does not log IP addresses, and does not track personal identifying information (PII).
            Its sole function is measuring aggregate site performance, such as overall page views and browser errors, to maintain site uptime.
          </p>

          <h2 style={{ font: '500 22px Georgia, serif', color: 'var(--ink)', margin: '28px 0 14px' }}>3. Public API &amp; Agent Logs</h2>
          <p style={{ marginBottom: 16 }}>
            Our public REST API (<code>/api/components</code>) and machine-readable endpoints (<code>/openapi.json</code>, <code>/llms.txt</code>, <code>/pricing.md</code>)
            do not require user registration or API authentication keys. Standard web server access logs (including requested URLs and HTTP user-agents)
            are processed temporarily for abuse prevention, DDoS mitigation, and rate stability, and are discarded automatically.
          </p>

          <h2 style={{ font: '500 22px Georgia, serif', color: 'var(--ink)', margin: '28px 0 14px' }}>4. Third-Party Integrations</h2>
          <p style={{ marginBottom: 16 }}>
            Flourish UI code repositories are hosted publicly on GitHub. Any contributions, pull requests, or issues you submit are governed
            by GitHub&apos;s Terms of Service and Privacy Statement. We do not transfer your GitHub account information to any internal databases.
          </p>

          <h2 style={{ font: '500 22px Georgia, serif', color: 'var(--ink)', margin: '28px 0 14px' }}>5. Contact &amp; Questions</h2>
          <p style={{ marginBottom: 24 }}>
            If you have questions or concerns regarding our privacy practices, you can reach founder Zuhaib Rashid directly at{' '}
            <a href="mailto:zuhaibrashid01@gmail.com" style={{ color: 'var(--orange)', fontWeight: 600 }}>zuhaibrashid01@gmail.com</a>.
          </p>
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
