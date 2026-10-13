import { ArrowRight, ArrowUpRight, ExternalLink } from 'lucide-react'
import { categories, categorySlug, components, stats } from '@/config/components'
import CatalogBrowser from './catalog-browser'

export default function ComponentsArchivePage() {
  const counts = Object.fromEntries(categories.map((category) => [category, category === 'All components' ? components.length : components.filter((item) => item.category === category).length]))
  return (
    <div className="premium-catalog">
      <header className="premium-nav"><div className="premium-nav-inner">
        <a href="/" className="catalog-brand"><span className="catalog-brand-mark" aria-hidden="true"><svg viewBox="0 0 32 32"><circle className="brand-orbit" cx="16" cy="16" r="12.5" /><g className="brand-flower"><ellipse cx="16" cy="10.2" rx="3.2" ry="5.2" /><ellipse cx="21.8" cy="16" rx="5.2" ry="3.2" /><ellipse cx="16" cy="21.8" rx="3.2" ry="5.2" /><ellipse cx="10.2" cy="16" rx="5.2" ry="3.2" /></g><circle className="brand-seed" cx="16" cy="16" r="2.2" /></svg></span><span>flourish<span>.</span></span></a>
        <nav className="catalog-nav-links" aria-label="Main navigation"><a href="/">Home</a><a className="active" href="/components">Components <span>{stats.components}</span></a><a href="https://github.com/Zuhaib-dev/Flourish-UI" target="_blank" rel="noreferrer">GitHub <ExternalLink size={12} /></a></nav>
      </div></header>
      <main className="catalog-main">
        <div className="catalog-breadcrumb"><a href="/">Home</a><span>/</span><span>Components</span></div>
        <section className="catalog-intro"><div className="catalog-intro-copy"><span className="catalog-kicker"><i /> THE COLLECTION</span><h1>Find your next<br /><em>starting point.</em></h1><p>A considered set of expressive React components. Explore the details, then bring the source into your own project.</p><div className="catalog-category-links">{categories.slice(1).map((category) => <a key={category} href={`/categories/${categorySlug(category)}`}>{category}<span>{counts[category]}</span></a>)}</div></div><div className="catalog-summary"><div><strong>{String(stats.components).padStart(2, '0')}</strong><span>COMPONENTS</span></div><i /><div><strong>{String(stats.categories).padStart(2, '0')}</strong><span>CATEGORIES</span></div><a href="https://github.com/Zuhaib-dev/Flourish-UI" target="_blank" rel="noreferrer">OPEN SOURCE <ArrowUpRight size={13} /></a></div></section>
        <CatalogBrowser />
        <section className="catalog-endcap"><span className="section-kicker">OPEN SOURCE, FULLY YOURS</span><p>Every piece is a starting point.<br /><em>Take it somewhere new.</em></p><a href="https://github.com/Zuhaib-dev/Flourish-UI" target="_blank" rel="noreferrer">Explore the repository <ArrowUpRight size={14} /></a></section>
      </main>
      <footer className="catalog-footer"><a href="/" className="catalog-brand"><span className="catalog-brand-mark" aria-hidden="true">✳</span><span>flourish<span>.</span></span></a><span>Made with care by <a href="https://www.zuhaibrashid.com" target="_blank" rel="noreferrer">Zuhaib Rashid</a></span><a href="https://github.com/Zuhaib-dev/Flourish-UI" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={12} /></a><span>© 2026</span></footer>
    </div>
  )
}
