import { ArrowLeft, ArrowRight, Search } from 'lucide-react'
import type { Metadata } from 'next'
import { components, recentlyAddedSlugs } from '@/config/components'

export const metadata: Metadata = {
  title: 'Page Not Found — 404 | Flourish UI',
  description: 'The page you are looking for does not exist on Flourish UI. Explore our open-source, expressive React components.',
  robots: {
    index: false,
    follow: false,
  },
}

const suggestions = recentlyAddedSlugs
  .slice(0, 3)
  .map((slug) => components.find((c) => c.slug === slug))
  .filter(Boolean)

export default function NotFound() {
  return (
    <div className="not-found-page">
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
          </nav>
        </div>
      </header>

      {/* ── 404 Body ────────────────────────── */}
      <main className="not-found-main">

        {/* Big editorial 404 number */}
        <div className="not-found-display" aria-hidden="true">
          <span>4</span>
          <span className="not-found-zero">
            <svg viewBox="0 0 100 100" fill="none" aria-hidden="true">
              <circle cx="50" cy="50" r="44" stroke="currentColor" strokeWidth="1.5" strokeDasharray="8 5" />
              <circle cx="50" cy="50" r="28" stroke="currentColor" strokeWidth="1" />
              <g className="brand-flower" style={{ transformOrigin: '50px 50px' }}>
                <ellipse cx="50" cy="34" rx="10" ry="16" fill="currentColor" opacity=".55" />
                <ellipse cx="66" cy="50" rx="16" ry="10" fill="currentColor" opacity=".45" />
                <ellipse cx="50" cy="66" rx="10" ry="16" fill="currentColor" opacity=".55" />
                <ellipse cx="34" cy="50" rx="16" ry="10" fill="currentColor" opacity=".45" />
              </g>
              <circle cx="50" cy="50" r="7" fill="var(--paper)" stroke="currentColor" strokeWidth="1.2" />
            </svg>
          </span>
          <span>4</span>
        </div>

        {/* Copy */}
        <div className="not-found-copy">
          <span className="catalog-kicker"><i />PAGE NOT FOUND</span>
          <h1>This page doesn&apos;t exist.</h1>
          <p>
            The URL may have changed, or it never existed. Try browsing the component
            library — there are plenty of interesting starting points.
          </p>

          <div className="not-found-actions">
            <a href="/" className="registry-cta-primary">
              <ArrowLeft size={14} /> Back to home
            </a>
            <a href="/components" className="registry-cta-ghost">
              Browse components <ArrowRight size={13} />
            </a>
          </div>
        </div>

        {/* Suggestions */}
        {suggestions.length > 0 && (
          <div className="not-found-suggestions">
            <div className="not-found-suggestions-heading">
              <Search size={13} aria-hidden="true" />
              <span>Or jump to something recent</span>
            </div>
            <div className="not-found-suggestions-list">
              {suggestions.map((component) => component && (
                <a key={component.slug} href={`/components/${component.slug}`} className="not-found-suggestion-card">
                  <div>
                    <span className="not-found-suggestion-cat">{component.category}</span>
                    <strong>{component.title}</strong>
                  </div>
                  <ArrowRight size={13} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* ── Footer ──────────────────────────── */}
      <footer className="catalog-footer">
        <a href="/" className="catalog-brand">
          <span className="catalog-brand-mark" aria-hidden="true">✳</span>
          <span>flourish<span>.</span></span>
        </a>
        <span>Made with care by <a href="https://www.zuhaibrashid.com" target="_blank" rel="noreferrer">Zuhaib Rashid</a></span>
        <span>© 2026</span>
      </footer>
    </div>
  )
}
