import type { Metadata } from 'next'
import Image from 'next/image'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { notFound } from 'next/navigation'
import { categories, categoryDescriptions, categorySlug, components, stats } from '@/config/components'

const categoryNames = categories.slice(1)
export function generateStaticParams() {
  return categoryNames.map((category) => ({ slug: categorySlug(category) }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const category = categoryNames.find((item) => categorySlug(item) === slug)
  if (!category) return { title: 'Category not found | Flourish UI' }
  const description = categoryDescriptions[category]
  return {
    title: `${category} Components | Flourish UI`,
    description,
    alternates: { canonical: `https://flourish-ui.vercel.app/categories/${slug}` },
    openGraph: { title: `${category} Components | Flourish UI`, description, url: `https://flourish-ui.vercel.app/categories/${slug}`, images: ['/og-image.png'] },
  }
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const category = categoryNames.find((item) => categorySlug(item) === slug)
  if (!category) notFound()
  const items = components.filter((item) => item.category === category)
  const pageUrl = `https://flourish-ui.vercel.app/categories/${slug}`
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: `${category} Components | Flourish UI`,
    description: categoryDescriptions[category],
    url: pageUrl,
    isPartOf: { '@id': 'https://flourish-ui.vercel.app/#website' },
    mainEntity: { '@type': 'ItemList', itemListElement: items.map((item, index) => ({ '@type': 'ListItem', position: index + 1, url: `https://flourish-ui.vercel.app/components/${item.slug}`, name: item.title })) },
  }
  return <main className="premium-catalog category-page">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }} />
    <header className="premium-nav"><div className="premium-nav-inner"><a href="/" className="catalog-brand"><span className="catalog-brand-mark">✳</span><span>flourish<span>.</span></span></a><nav className="catalog-nav-links" aria-label="Main navigation"><a href="/">Home</a><a className="active" href="/components">Components <span>{stats.components}</span></a></nav></div></header>
    <div className="catalog-main">
      <div className="catalog-breadcrumb"><a href="/">Home</a><span>/</span><a href="/components">Components</a><span>/</span><span>{category}</span></div>
      <section className="catalog-intro category-intro"><div className="catalog-intro-copy"><span className="catalog-kicker"><i /> BROWSE BY CATEGORY</span><h1>{category.split(' & ').map((part, index) => <span key={part}>{index > 0 && <> &amp; </>}<em>{part}</em></span>)}</h1><p>{categoryDescriptions[category]}</p></div><div className="catalog-summary"><div><strong>{String(items.length).padStart(2, '0')}</strong><span>COMPONENTS</span></div><a href="/components">ALL {stats.components} COMPONENTS <ArrowUpRight size={13} /></a></div></section>
      <section className="category-card-grid" aria-label={`${category} components`}>
        {items.map((item, index) => <article className="premium-component-card category-component-card" key={item.slug}>
          <a href={`/components/${item.slug}`} className="premium-card-image"><Image src={item.previewImage} alt={item.title} fill sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw" /><span className="card-image-index">{String(index + 1).padStart(2, '0')} <ArrowUpRight size={13} /></span></a>
          <div className="premium-card-content"><div className="premium-card-category"><span>{item.category}</span><span>{item.dependencies.length ? `${item.dependencies.length} packages` : 'No dependencies'}</span></div><a href={`/components/${item.slug}`} className="premium-card-title">{item.title}</a><p>{item.description}</p><div className="premium-card-footer"><a href={`/components/${item.slug}`}>Explore component <ArrowUpRight size={13} /></a></div></div>
        </article>)}
      </section>
      <a className="category-back-link" href="/components"><ArrowLeft size={14} /> Browse all components</a>
    </div>
    <footer className="catalog-footer"><a href="/" className="catalog-brand"><span className="catalog-brand-mark">✳</span><span>flourish<span>.</span></span></a><span>Made with care by <a href="https://www.zuhaibrashid.com" target="_blank" rel="noreferrer">Zuhaib Rashid</a></span><span>© 2026</span></footer>
  </main>
}
