import type { Metadata } from 'next'
import { ArrowRight, ArrowUpRight, Sparkles } from 'lucide-react'
import { components, recentlyAddedSlugs } from '@/config/components'

export const metadata: Metadata = {
  title: 'Changelog',
  description: 'New components, live previews, and improvements to the Flourish UI registry.',
  alternates: { canonical: '/changelog' },
}

const updates = [
  { date: 'Latest release', title: 'A smoother way to explore the library', body: 'Added interactive previews across the catalog, new-tab preview controls, saved components, sorting, category pages, and clearer registry installation guidance.' },
  { date: 'Registry 2.0', title: 'Install source straight into your project', body: 'Every component can now be added with the shadcn CLI, including dependency guidance and copyable commands for pnpm, npm, Bun, and Yarn.' },
]

export default function ChangelogPage() {
  const recent = recentlyAddedSlugs.map((slug) => components.find((component) => component.slug === slug)).filter(Boolean)
  return <main className="changelog-page"><header className="premium-nav"><div className="premium-nav-inner"><a href="/" className="catalog-brand"><span className="catalog-brand-mark" aria-hidden="true">✳</span><span>flourish<span>.</span></span></a><nav className="catalog-nav-links" aria-label="Main navigation"><a href="/components">Components</a><a href="/registry">Registry</a><a className="active" href="/changelog">Changelog</a></nav></div></header><div className="changelog-content"><div className="catalog-breadcrumb"><a href="/">Home</a><span>/</span><span>Changelog</span></div><section className="changelog-hero"><span className="catalog-kicker"><i /> WHAT’S NEW</span><h1>Built in the open.<br /><em>Always improving.</em></h1><p>A concise record of what has arrived in Flourish UI, from new source components to better ways to explore and install them.</p></section><section className="release-list" aria-label="Product updates">{updates.map((update) => <article key={update.title}><span>{update.date}</span><div><Sparkles size={16} /><h2>{update.title}</h2><p>{update.body}</p></div></article>)}</section><section className="recent-components"><div><span className="section-kicker">RECENTLY ADDED</span><h2>Fresh starting points.</h2></div><div className="recent-component-list">{recent.map((component) => component && <a key={component.slug} href={`/components/${component.slug}`}><span>{component.category}</span><strong>{component.title}</strong><ArrowUpRight size={15} /></a>)}</div></section><a className="registry-browse-link" href="/components">Explore the collection <ArrowRight size={15} /></a></div></main>
}
