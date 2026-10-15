import type { Metadata } from 'next'
import { ArrowUpRight, Mail, MessageSquare, Send, Sparkles, Terminal } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact & Support — Flourish UI',
  description:
    'Get in touch with the Flourish UI team for support, custom component engineering, feature requests, or community collaborations.',
  alternates: { canonical: 'https://flourish-ui.vercel.app/contact' },
  openGraph: {
    type: 'website',
    title: 'Contact & Support — Flourish UI',
    description:
      'Get in touch with the Flourish UI team for support, custom component engineering, feature requests, or community collaborations.',
    url: 'https://flourish-ui.vercel.app/contact',
    siteName: 'Flourish UI',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Contact Flourish UI' }],
  },
}

export default function ContactPage() {
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
          <span>Contact</span>
        </div>

        <section className="developers-hero" style={{ borderBottom: 'none', paddingBottom: 24 }}>
          <div className="developers-hero-copy" style={{ maxWidth: '100%' }}>
            <span className="catalog-kicker"><i />GET IN TOUCH</span>
            <h1>We&apos;d love to hear from <em>you.</em></h1>
            <p style={{ maxWidth: '100%', fontSize: 15, lineHeight: 1.8 }}>
              Whether you have questions about integrating Flourish UI components into your Next.js application,
              suggestions for new shader directions, or inquiries about custom design system engineering, we are here to help.
            </p>
          </div>
        </section>

        <article className="contact-methods-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 20, margin: '24px 0 40px' }}>
          <div style={{ padding: 24, background: '#faf9f5', border: '1px solid var(--line)', borderRadius: 8 }}>
            <Mail size={22} style={{ color: 'var(--orange)', marginBottom: 12 }} />
            <h3 style={{ margin: '0 0 8px', fontSize: 16, color: 'var(--ink)' }}>Direct Email</h3>
            <p style={{ margin: '0 0 16px', fontSize: 13, color: 'var(--muted-ink)', lineHeight: 1.6 }}>
              For support inquiries, commercial consultations, or general questions:
            </p>
            <a href="mailto:zuhaibrashid01@gmail.com" style={{ color: 'var(--orange)', fontWeight: 600, fontSize: 13, display: 'inline-flex', alignItems: 'center', gap: 4 }}>
              zuhaibrashid01@gmail.com <ArrowUpRight size={12} />
            </a>
          </div>

          <div style={{ padding: 24, background: '#faf9f5', border: '1px solid var(--line)', borderRadius: 8 }}>
            <MessageSquare size={22} style={{ color: 'var(--orange)', marginBottom: 12 }} />
            <h3 style={{ margin: '0 0 8px', fontSize: 16, color: 'var(--ink)' }}>GitHub Discussions</h3>
            <p style={{ margin: '0 0 16px', fontSize: 13, color: 'var(--muted-ink)', lineHeight: 1.6 }}>
              Open an issue, share a component request, or submit a pull request on our repo:
            </p>
            <a href="https://github.com/Zuhaib-dev/Flourish-UI/issues" target="_blank" rel="noreferrer" style={{ color: 'var(--orange)', fontWeight: 600, fontSize: 13, display: 'inline-flex', alignItems: 'center', gap: 4 }}>
              Open GitHub Issue <ArrowUpRight size={12} />
            </a>
          </div>

          <div style={{ padding: 24, background: '#faf9f5', border: '1px solid var(--line)', borderRadius: 8 }}>
            <Sparkles size={22} style={{ color: 'var(--orange)', marginBottom: 12 }} />
            <h3 style={{ margin: '0 0 8px', fontSize: 16, color: 'var(--ink)' }}>Author Portfolio</h3>
            <p style={{ margin: '0 0 16px', fontSize: 13, color: 'var(--muted-ink)', lineHeight: 1.6 }}>
              Explore the personal work and portfolio of founder Zuhaib Rashid:
            </p>
            <a href="https://www.zuhaibrashid.com" target="_blank" rel="noreferrer" style={{ color: 'var(--orange)', fontWeight: 600, fontSize: 13, display: 'inline-flex', alignItems: 'center', gap: 4 }}>
              zuhaibrashid.com <ArrowUpRight size={12} />
            </a>
          </div>
        </article>

        <section style={{ padding: 28, background: '#f0eee6', border: '1px solid var(--line)', borderRadius: 8, fontSize: 13, lineHeight: 1.8, color: 'var(--muted-ink)' }}>
          <h2 style={{ font: '500 20px Georgia, serif', color: 'var(--ink)', margin: '0 0 10px' }}>Custom Design &amp; Shader Engineering</h2>
          <p style={{ margin: 0 }}>
            Need a custom interactive 3D WebGL hero, a proprietary skeuomorphic dashboard widget, or an enterprise design system token architecture?
            We partner with select startups and studios for custom engineering engagements. Reach out directly to discuss timelines, specifications, and scope.
          </p>
        </section>
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
