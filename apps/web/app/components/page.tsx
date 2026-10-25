import type { Metadata } from 'next'
import { ArrowRight, ArrowUpRight, ExternalLink } from 'lucide-react'
import { categories, categorySlug, components, stats } from '@/config/components'
import CatalogBrowser from './catalog-browser'
import SoundToggle from '../sound-toggle'

export const metadata: Metadata = {
  title: 'Explore 50+ Expressive React Components | Flourish UI',
  description: 'Browse the complete collection of 50+ expressive React components with live previews, motion design, WebGL shaders, and shadcn CLI registry support.',
  keywords: [
    'React components',
    'Next.js component library',
    'shadcn UI components',
    'Tailwind CSS animations',
    'interactive UI components',
    'WebGL shaders React',
    'skeuomorphic UI components',
    'Flourish UI catalog',
  ],
  alternates: { canonical: 'https://flourish-ui.vercel.app/components' },
  openGraph: {
    title: 'Explore 50+ Expressive React Components | Flourish UI',
    description: 'Browse the complete collection of 50+ expressive React components with live previews and shadcn CLI registry support.',
    type: 'website',
    url: 'https://flourish-ui.vercel.app/components',
    siteName: 'Flourish UI',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Flourish UI Components Catalog',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Explore 50+ Expressive React Components | Flourish UI',
    description: 'Browse 50+ expressive React components with live previews, spring physics, and shadcn CLI registry support.',
    creator: '@xuhaibx9',
    images: ['/og-image.png'],
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'CollectionPage',
      name: 'Flourish UI Component Collection',
      description: 'A curated library of interactive, expressive React and Next.js components with live previews.',
      url: 'https://flourish-ui.vercel.app/components',
      isPartOf: { '@id': 'https://flourish-ui.vercel.app/#website' },
      mainEntity: {
        '@type': 'ItemList',
        numberOfItems: components.length,
        itemListElement: components.map((comp, idx) => ({
          '@type': 'ListItem',
          position: idx + 1,
          name: comp.title,
          url: `https://flourish-ui.vercel.app/components/${comp.slug}`,
          image: `https://flourish-ui.vercel.app${comp.previewImage}`,
        })),
      },
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
          name: 'Components',
          item: 'https://flourish-ui.vercel.app/components',
        },
      ],
    },
  ],
}

export default function ComponentsArchivePage() {
  const counts = Object.fromEntries(categories.map((category) => [category, category === 'All components' ? components.length : components.filter((item) => item.category === category).length]))
  return (
    <div className="premium-catalog">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c') }}
      />
      <header className="premium-nav"><div className="premium-nav-inner">
        <a href="/" className="catalog-brand" aria-label="Flourish UI Home"><span className="catalog-brand-mark" aria-hidden="true"><svg viewBox="0 0 32 32"><circle className="brand-orbit" cx="16" cy="16" r="12.5" /><g className="brand-flower"><ellipse cx="10.2" cy="16" rx="5.2" ry="3.2" /><ellipse cx="21.8" cy="16" rx="5.2" ry="3.2" /><ellipse cx="16" cy="10.2" rx="3.2" ry="5.2" /><ellipse cx="16" cy="21.8" rx="3.2" ry="5.2" /></g><circle className="brand-seed" cx="16" cy="16" r="2.2" /></svg></span><span>flourish<span>.</span></span></a>
        <nav className="catalog-nav-links" aria-label="Main navigation"><a href="/">Home</a><a className="active" href="/components" aria-current="page">Components <span>{stats.components}</span></a><a href="/registry">Registry</a><a href="/changelog">Changelog</a><a href="/developers">Developers</a><a href="https://github.com/Zuhaib-dev/Flourish-UI" target="_blank" rel="noreferrer" aria-label="Flourish UI on GitHub">GitHub <ExternalLink size={12} aria-hidden="true" /></a><SoundToggle /></nav>
      </div></header>
      <main className="catalog-main">
        <nav className="catalog-breadcrumb" aria-label="Breadcrumb"><a href="/">Home</a><span aria-hidden="true">/</span><span aria-current="page">Components</span></nav>
        <section className="catalog-intro"><div className="catalog-intro-copy"><span className="catalog-kicker"><i aria-hidden="true" /> THE COLLECTION</span><h1>Find your next<br /><em>starting point.</em></h1><p>A considered set of expressive React components. Explore the details, then bring the source into your own project.</p><div className="catalog-category-links" role="navigation" aria-label="Component categories">{categories.slice(1).map((category) => <a key={category} href={`/categories/${categorySlug(category)}`} aria-label={`Browse ${category} category (${counts[category]} components)`}>{category}<span>{counts[category]}</span></a>)}</div></div><div className="catalog-summary"><div><strong>{String(stats.components).padStart(2, '0')}</strong><span>COMPONENTS</span></div><i aria-hidden="true" /><div><strong>{String(stats.categories).padStart(2, '0')}</strong><span>CATEGORIES</span></div><a href="https://github.com/Zuhaib-dev/Flourish-UI" target="_blank" rel="noreferrer" aria-label="Open source repository on GitHub">OPEN SOURCE <ArrowUpRight size={13} aria-hidden="true" /></a></div></section>
        <CatalogBrowser />
        <section className="catalog-endcap"><span className="section-kicker">OPEN SOURCE, FULLY YOURS</span><p>Every piece is a starting point.<br /><em>Take it somewhere new.</em></p><a href="https://github.com/Zuhaib-dev/Flourish-UI" target="_blank" rel="noreferrer" aria-label="Explore the Flourish UI GitHub repository">Explore the repository <ArrowUpRight size={14} aria-hidden="true" /></a></section>
      </main>
      <footer className="catalog-footer">
        <a href="/" className="catalog-brand" aria-label="Flourish UI Home"><span className="catalog-brand-mark" aria-hidden="true">✳</span><span>flourish<span>.</span></span></a>
        <nav className="catalog-footer-nav" aria-label="Footer navigation">
          <a href="/components">Components</a>
          <a href="/registry">Registry</a>
          <a href="/developers">Developers</a>
          <a href="/about">About</a>
          <a href="/changelog">Changelog</a>
          <a href="/contact">Contact</a>
        </nav>
        <span>Made with care by <a href="https://www.zuhaibrashid.com" target="_blank" rel="noreferrer" aria-label="Zuhaib Rashid's personal website">Zuhaib Rashid</a></span>
        <a href="https://github.com/Zuhaib-dev/Flourish-UI" target="_blank" rel="noreferrer" aria-label="Flourish UI on GitHub">GitHub <ArrowUpRight size={12} aria-hidden="true" /></a>
        <span>© 2026</span>
      </footer>
    </div>
  )
}
