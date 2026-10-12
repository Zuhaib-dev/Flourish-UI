'use client'

import { useEffect, useMemo, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Check,
  Command,
  Copy,
  Code2,
  Layers3,
  Search,
  Sparkles,
  Terminal,
  X,
} from 'lucide-react'
import { components, installCommand, stats } from '@/config/components'

const FEATURED_SLUGS = [
  'admit-one-3-d-holographic-ticket',
  'bloom-select',
  'cold-flame-drift',
  'digital-journal-album',
  'flow-ai-canvas',
  'credit-card-form',
]

export default function LandingPage() {
  const [query, setQuery] = useState('')
  const [paletteOpen, setPaletteOpen] = useState(false)
  const [copied, setCopied] = useState(false)
  const featured = useMemo(
    () => FEATURED_SLUGS.map((slug) => components.find((item) => item.slug === slug)).filter((item) => item !== undefined),
    [],
  )
  const results = useMemo(() => {
    const normalized = query.trim().toLowerCase()
    return components
      .filter((item) => !normalized || `${item.title} ${item.description} ${item.category} ${item.tags.join(' ')}`.toLowerCase().includes(normalized))
      .slice(0, 7)
  }, [query])

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault()
        setPaletteOpen((open) => !open)
      }
      if (event.key === 'Escape') setPaletteOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  async function copyCommand(command: string) {
    try {
      await navigator.clipboard.writeText(command)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    } catch {
      setCopied(false)
    }
  }

  return (
    <main className="flourish-home min-h-screen overflow-hidden text-[#191916]">
      <div className="home-grain" aria-hidden="true" />
      <header className="home-nav">
        <div className="home-nav-inner">
          <a href="/" className="brand" aria-label="Flourish UI home">
            <span className="brand-mark" aria-hidden="true"><svg viewBox="0 0 32 32"><circle className="brand-orbit" cx="16" cy="16" r="12.5" /><g className="brand-flower"><ellipse cx="16" cy="10.2" rx="3.2" ry="5.2" /><ellipse cx="21.8" cy="16" rx="5.2" ry="3.2" /><ellipse cx="16" cy="21.8" rx="3.2" ry="5.2" /><ellipse cx="10.2" cy="16" rx="5.2" ry="3.2" /></g><circle className="brand-seed" cx="16" cy="16" r="2.2" /></svg></span>
            <span>flourish<span className="brand-dot">.</span></span>
          </a>
          <nav className="nav-links" aria-label="Main navigation">
            <a className="nav-current" href="/components">Components <span>{stats.components}</span></a>
            <a href="https://github.com/Zuhaib-dev/Flourish-UI" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={13} /></a>
          </nav>
          <button className="nav-search" onClick={() => setPaletteOpen(true)} aria-label="Search components">
            <Search size={15} /><span>Search</span><kbd><Command size={10} /> K</kbd>
          </button>
        </div>
      </header>

      <section className="home-hero">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-dot" /> AN OPEN COMPONENT LIBRARY <span className="eyebrow-rule" /> {stats.components} AND GROWING</div>
          <h1>Good interfaces<br />have a little <em>feeling.</em></h1>
          <p className="hero-description">Expressive React components with the details left in. Built to explore, easy to make your own.</p>
          <div className="hero-actions">
            <a href="/components" className="button-dark">Explore the library <ArrowRight size={15} /></a>
            <a href="#selected" className="button-text">See what’s inside <ArrowDownRight size={15} /></a>
          </div>
          <div className="hero-footnote"><span className="stack-dots"><i>R</i><i>↗</i><i>✳</i></span><span>React · Next.js · shadcn registry</span></div>
        </div>

        <div className="hero-art" aria-label="A selection of Flourish UI component previews">
          <div className="hero-art-note"><Sparkles size={13} /> LITTLE DETAILS, BIG PRESENCE</div>
          <a className="hero-preview hero-preview-main" href={`/components/${featured[0]?.slug}`}>
            <img src={featured[0]?.previewImage} alt={featured[0]?.title ?? 'Holographic ticket component preview'} />
            <span className="preview-caption"><span><small>01 / FEATURED</small><strong>{featured[0]?.title}</strong></span><ArrowUpRight size={16} /></span>
          </a>
          <a className="hero-preview hero-preview-small" href={`/components/${featured[1]?.slug}`}>
            <img src={featured[1]?.previewImage} alt={featured[1]?.title ?? 'Bloom Select component preview'} />
          </a>
          <div className="hero-stamp"><span>MADE TO<br />BE USED</span><span className="stamp-star">✳</span></div>
          <span className="art-index">FIG. 01 — A FEW THINGS FROM THE COLLECTION</span>
        </div>
      </section>

      <section className="collection-strip" aria-label="Library highlights">
        <div className="strip-item"><span className="strip-number">{String(stats.components).padStart(2, '0')}</span><span>thoughtful components</span></div>
        <span className="strip-separator">✳</span>
        <div className="strip-item"><span className="strip-number">{String(stats.categories).padStart(2, '0')}</span><span>creative directions</span></div>
        <span className="strip-separator">✳</span>
        <div className="strip-item"><Layers3 size={16} strokeWidth={1.6} /><span>Copy the source. Make it yours.</span></div>
      </section>

      <section className="selected-section" id="selected">
        <div className="section-heading">
          <div><span className="section-kicker">A SMALL TOUR</span><h2>Distinct by design.</h2></div>
          <p>From playful motion to carefully considered interfaces, every piece starts with a point of view.</p>
        </div>
        <div className="selected-grid">
          {featured.slice(1).map((item, index) => (
            <motion.a
              key={item.slug}
              href={`/components/${item.slug}`}
              className={`selected-card selected-card-${index + 1}`}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
            >
              <div className="selected-image"><img src={item.previewImage} alt={item.title} loading="lazy" /><span className="card-open"><ArrowUpRight size={15} /></span></div>
              <div className="selected-meta"><span>{item.category}</span><span>{String(index + 2).padStart(2, '0')}</span></div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </motion.a>
          ))}
        </div>
      </section>

      <section className="install-section">
        <div className="install-copy"><span className="section-kicker">YOURS TO SHAPE</span><h2>Start with the good part.</h2><p>Each component comes as source code. Bring it into your project, tune the details, and make it feel like yours.</p><a href="/components" className="install-link">Browse all {stats.components} components <ArrowRight size={15} /></a></div>
        <div className="terminal-card">
          <div className="terminal-top"><div className="terminal-lights"><i /><i /><i /></div><span>YOUR TERMINAL</span><button onClick={() => copyCommand(installCommand('admit-one-3-d-holographic-ticket'))} aria-label="Copy install command">{copied ? <Check size={14} /> : <Copy size={14} />}</button></div>
          <div className="terminal-command"><span className="terminal-prompt">$</span><code>pnpm dlx shadcn@latest add<br /><span>https://flourish-ui.dev/r/admit-one-3-d-holographic-ticket.json</span></code></div>
          <div className="terminal-bottom"><Terminal size={13} /> One command. Full source. <span>{copied ? 'Copied' : 'Ready when you are'}</span></div>
        </div>
      </section>

      <footer className="home-footer">
        <a href="/" className="brand"><span className="brand-mark" aria-hidden="true"><svg viewBox="0 0 32 32"><circle className="brand-orbit" cx="16" cy="16" r="12.5" /><g className="brand-flower"><ellipse cx="16" cy="10.2" rx="3.2" ry="5.2" /><ellipse cx="21.8" cy="16" rx="5.2" ry="3.2" /><ellipse cx="16" cy="21.8" rx="3.2" ry="5.2" /><ellipse cx="10.2" cy="16" rx="5.2" ry="3.2" /></g><circle className="brand-seed" cx="16" cy="16" r="2.2" /></svg></span><span>flourish<span className="brand-dot">.</span></span></a>
        <span>A collection by <a href="https://www.zuhaibrashid.com" target="_blank" rel="noreferrer">Zuhaib Rashid</a></span>
        <a className="footer-github" href="https://github.com/Zuhaib-dev/Flourish-UI" target="_blank" rel="noreferrer"><Code2 size={15} /> GitHub <ArrowUpRight size={12} /></a>
        <span>© 2026</span>
      </footer>

      <AnimatePresence>
        {paletteOpen && (
          <motion.div className="search-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onMouseDown={(event) => { if (event.target === event.currentTarget) setPaletteOpen(false) }}>
            <motion.div className="search-dialog" initial={{ opacity: 0, y: 12, scale: 0.98 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 8, scale: 0.98 }}>
              <div className="search-dialog-input"><Search size={17} /><input autoFocus value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Find a component..." /><button onClick={() => setPaletteOpen(false)} aria-label="Close search"><X size={16} /></button></div>
              <div className="search-results">{results.map((item) => <a key={item.slug} href={`/components/${item.slug}`}><img src={item.previewImage} alt="" /><span><strong>{item.title}</strong><small>{item.category}</small></span><ArrowUpRight size={14} /></a>)}{results.length === 0 && <p className="search-empty">No components found. Try another phrase.</p>}</div>
              <div className="search-hint"><span>Search by title, style, or category</span><kbd>ESC</kbd></div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}
