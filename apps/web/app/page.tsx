import Image from 'next/image'
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Code2,
  Layers3,
  MousePointer2,
  Sparkles,
  Terminal,
  WandSparkles,
} from 'lucide-react'
import { components, recentlyAddedSlugs, stats } from '@/config/components'
import { HomeSearch, CopyInstallCommand } from './home-interactions'
import SoundToggle from './sound-toggle'

const FEATURED_SLUGS = [
  'admit-one-3-d-holographic-ticket',
  'bloom-select',
  'cold-flame-drift',
  'digital-journal-album',
  'flow-ai-canvas',
  'credit-card-form',
]

export default function LandingPage() {
  const featured = FEATURED_SLUGS.map((slug) => components.find((item) => item.slug === slug)).filter((item) => item !== undefined)
  const recentlyAdded = recentlyAddedSlugs.map((slug) => components.find((item) => item.slug === slug)).filter((item) => item !== undefined).reverse()

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
          <div className="home-nav-actions"><SoundToggle /><HomeSearch items={components} /></div>
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
            <Image src={featured[0]?.previewImage ?? '/placeholder.svg'} alt={featured[0]?.title ?? 'Holographic ticket component preview'} fill sizes="(max-width: 760px) 78vw, 38vw" preload />
            <span className="preview-caption"><span><small>01 / FEATURED</small><strong>{featured[0]?.title}</strong></span><ArrowUpRight size={16} /></span>
          </a>
          <a className="hero-preview hero-preview-small" href={`/components/${featured[1]?.slug}`}>
            <Image src={featured[1]?.previewImage ?? '/placeholder.svg'} alt={featured[1]?.title ?? 'Bloom Select component preview'} fill sizes="(max-width: 760px) 34vw, 17vw" />
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

      <section className="home-bento" aria-labelledby="bento-title">
        <div className="bento-heading">
          <div><span className="section-kicker">PICK A DIRECTION</span><h2 id="bento-title">A better place to begin.</h2></div>
          <a href="/components" className="bento-all-link">Explore all {stats.components} <ArrowRight size={14} /></a>
        </div>
        <div className="bento-grid">
          <article className="bento-tile bento-play">
            <div className="bento-play-head"><span className="bento-live"><i /> LIVE COMPONENT</span><a href="/previews/bloom-select" target="_blank" rel="noreferrer" aria-label="Open Bloom Select live preview in a new tab"><ArrowUpRight size={15} /></a></div>
            <div className="bento-interaction">
              <iframe src="/previews/bloom-select" title="Interactive Bloom Select component preview" loading="lazy" />
              <span className="bento-play-overlay"><MousePointer2 size={14} /> Try it, right here</span>
            </div>
            <div className="bento-tile-copy"><span>01 / PLAY</span><h3>Feel the details.</h3><p>Interact with a real component before you bring it into your project.</p><a className="bento-card-link" href="/components/bloom-select">Explore Bloom Select <ArrowUpRight size={13} /></a></div>
          </article>

          <a className="bento-tile bento-motion" href="/components/cold-flame-drift">
            <Image src={components.find((item) => item.slug === 'cold-flame-drift')?.previewImage ?? '/placeholder.svg'} alt="Cold Flame Drift component" fill sizes="(max-width: 760px) 100vw, 40vw" />
            <div className="bento-image-shade" />
            <span className="bento-corner-icon"><WandSparkles size={15} /></span>
            <div className="bento-tile-copy"><span>02 / MOTION & EFFECTS</span><h3>Make the quiet parts move.</h3><p>Shaders, physics, and expressive motion.</p><span className="bento-card-link">Explore the live demo <ArrowUpRight size={13} /></span></div>
          </a>

          <a className="bento-tile bento-work" href="/components/property-comparison-dashboard">
            <Image src={components.find((item) => item.slug === 'property-comparison-dashboard')?.previewImage ?? '/placeholder.svg'} alt="Property Comparison Dashboard component" fill sizes="(max-width: 760px) 100vw, 40vw" />
            <div className="bento-work-copy"><span>03 / TOOLS THAT WORK</span><h3>Useful can be beautiful.</h3><span>Dashboards, editors, and workflows <ArrowUpRight size={13} /></span></div>
          </a>

          <div className="bento-tile bento-index">
            <div className="bento-index-top"><span>04 / THE COLLECTION</span><Layers3 size={16} /></div>
            <strong>{String(stats.components).padStart(2, '0')}</strong>
            <p>components. Many points of view. All ready to explore and make your own.</p>
            <a href="/components" className="bento-index-link">Find your starting point <ArrowRight size={14} /></a>
            <span className="bento-index-flower" aria-hidden="true">✳</span>
          </div>
        </div>
      </section>

      <section className="selected-section recently-added-section" aria-labelledby="recent-title">
        <div className="section-heading"><div><span className="section-kicker">FRESH FROM THE STUDIO</span><h2 id="recent-title">Recently added.</h2></div><a href="/components" className="bento-all-link">Browse the full collection <ArrowRight size={14} /></a></div>
        <div className="selected-grid">
          {recentlyAdded.slice(0, 3).map((item, index) => <a key={item.slug} href={`/components/${item.slug}`} className={`selected-card selected-card-${index + 1}`}>
            <div className="selected-image"><Image src={item.previewImage} alt={item.title} fill sizes="(max-width: 760px) 100vw, 33vw" loading="lazy" /><span className="card-open"><ArrowUpRight size={15} /></span></div>
            <div className="selected-meta"><span>{item.category}</span><span>NEW</span></div><h3>{item.title}</h3><p>{item.description}</p>
          </a>)}
        </div>
      </section>

      <section className="selected-section" id="selected">
        <div className="section-heading">
          <div><span className="section-kicker">A SMALL TOUR</span><h2>Distinct by design.</h2></div>
          <p>From playful motion to carefully considered interfaces, every piece starts with a point of view.</p>
        </div>
        <div className="selected-grid">
          {featured.slice(1).map((item, index) => (
            <a
              key={item.slug}
              href={`/components/${item.slug}`}
              className={`selected-card selected-card-${index + 1}`}
            >
              <div className="selected-image"><Image src={item.previewImage} alt={item.title} fill sizes="(max-width: 760px) 100vw, 33vw" loading="lazy" /><span className="card-open"><ArrowUpRight size={15} /></span></div>
              <div className="selected-meta"><span>{item.category}</span><span>{String(index + 2).padStart(2, '0')}</span></div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="install-section">
        <div className="install-copy"><span className="section-kicker">YOURS TO SHAPE</span><h2>Start with the good part.</h2><p>Each component comes as source code. Bring it into your project, tune the details, and make it feel like yours.</p><a href="/components" className="install-link">Browse all {stats.components} components <ArrowRight size={15} /></a></div>
        <div className="terminal-card">
          <div className="terminal-top"><div className="terminal-lights"><i /><i /><i /></div><span>YOUR TERMINAL</span><CopyInstallCommand /></div>
          <div className="terminal-command"><span className="terminal-prompt">$</span><code>pnpm dlx shadcn@latest add<br /><span>https://flourish-ui.vercel.app/r/admit-one-3-d-holographic-ticket.json</span></code></div>
          <div className="terminal-bottom"><Terminal size={13} /> One command. Full source. <span>Ready when you are</span></div>
        </div>
      </section>

      <footer className="home-footer">
        <a href="/" className="brand"><span className="brand-mark" aria-hidden="true"><svg viewBox="0 0 32 32"><circle className="brand-orbit" cx="16" cy="16" r="12.5" /><g className="brand-flower"><ellipse cx="16" cy="10.2" rx="3.2" ry="5.2" /><ellipse cx="21.8" cy="16" rx="5.2" ry="3.2" /><ellipse cx="16" cy="21.8" rx="3.2" ry="5.2" /><ellipse cx="10.2" cy="16" rx="5.2" ry="3.2" /></g><circle className="brand-seed" cx="16" cy="16" r="2.2" /></svg></span><span>flourish<span className="brand-dot">.</span></span></a>
        <span>A collection by <a href="https://www.zuhaibrashid.com" target="_blank" rel="noreferrer">Zuhaib Rashid</a></span>
        <a className="footer-github" href="https://github.com/Zuhaib-dev/Flourish-UI" target="_blank" rel="noreferrer"><Code2 size={15} /> GitHub <ArrowUpRight size={12} /></a>
        <span>© 2026</span>
      </footer>

    </main>
  )
}
