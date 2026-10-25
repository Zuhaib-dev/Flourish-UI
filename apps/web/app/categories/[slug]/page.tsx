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
  const pageUrl = `https://flourish-ui.vercel.app/categories/${slug}`
  return {
    title: `${category} Components — Expressive React Library | Flourish UI`,
    description,
    keywords: [
      category,
      `${category} React components`,
      'interactive UI components',
      'Next.js components',
      'shadcn registry',
      'Flourish UI',
      'Zuhaib Rashid',
    ],
    authors: [{ name: 'Zuhaib Rashid', url: 'https://www.zuhaibrashid.com' }],
    creator: 'Zuhaib Rashid',
    publisher: 'Flourish UI',
    alternates: { canonical: pageUrl },
    openGraph: {
      type: 'website',
      siteName: 'Flourish UI',
      title: `${category} Components | Flourish UI`,
      description,
      url: pageUrl,
      images: ['/og-image.png'],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${category} Components | Flourish UI`,
      description,
      creator: '@xuhaib_x9',
      images: ['/og-image.png'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
        'max-video-preview': -1,
      },
    },
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
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://flourish-ui.vercel.app/' },
          { '@type': 'ListItem', position: 2, name: 'Components', item: 'https://flourish-ui.vercel.app/components' },
          { '@type': 'ListItem', position: 3, name: `${category} Components`, item: pageUrl },
        ],
      },
      {
        '@type': 'CollectionPage',
        '@id': `${pageUrl}#collection`,
        name: `${category} Components | Flourish UI`,
        description: categoryDescriptions[category],
        url: pageUrl,
        isPartOf: { '@id': 'https://flourish-ui.vercel.app/#website' },
        mainEntity: {
          '@type': 'ItemList',
          numberOfItems: items.length,
          itemListElement: items.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            url: `https://flourish-ui.vercel.app/components/${item.slug}`,
            name: item.title,
            image: `https://flourish-ui.vercel.app${item.previewImage}`,
          })),
        },
      },
    ],
  }
  return <main className="premium-catalog category-page">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }} />
    <header className="premium-nav">
      <div className="premium-nav-inner">
        <a href="/" className="catalog-brand"><span className="catalog-brand-mark">✳</span><span>flourish<span>.</span></span></a>
        <nav className="catalog-nav-links" aria-label="Main navigation">
          <a href="/">Home</a>
          <a className="active" href="/components">Components <span>{stats.components}</span></a>
          <a href="/registry">Registry</a>
          <a href="/changelog">Changelog</a>
          <a href="/developers">Developers</a>
          <a href="https://github.com/Zuhaib-dev/Flourish-UI" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={12} /></a>
        </nav>
      </div>
    </header>
    <div className="catalog-main">
      <div className="catalog-breadcrumb"><a href="/">Home</a><span>/</span><a href="/components">Components</a><span>/</span><span>{category}</span></div>
      <section className="catalog-intro category-intro"><div className="catalog-intro-copy"><span className="catalog-kicker"><i /> BROWSE BY CATEGORY</span><h1>{category.split(' & ').map((part, index) => <span key={part}>{index > 0 && <> &amp; </>}<em>{part}</em></span>)}</h1><p>{categoryDescriptions[category]}</p></div><div className="catalog-summary"><div><strong>{String(items.length).padStart(2, '0')}</strong><span>COMPONENTS</span></div><a href="/components">ALL {stats.components} COMPONENTS <ArrowUpRight size={13} /></a></div></section>
      <section className="category-card-grid" aria-label={`${category} components`}>
        {items.map((item, index) => <article className="premium-component-card category-component-card" key={item.slug}>
          <a href={`/components/${item.slug}`} className="premium-card-image"><Image src={item.previewImage} alt={item.title} fill sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw" /><span className="card-image-index">{String(index + 1).padStart(2, '0')} <ArrowUpRight size={13} /></span></a>
          <div className="premium-card-content"><div className="premium-card-category"><span>{item.category}</span><span>{item.dependencies.length ? `${item.dependencies.length} packages` : 'No dependencies'}</span></div><a href={`/components/${item.slug}`} className="premium-card-title">{item.title}</a><p>{item.description}</p><div className="premium-card-footer"><a href={`/components/${item.slug}`}>Explore component <ArrowUpRight size={13} /></a></div></div>
        </article>)}
      </section>
      <section className="category-explorer" aria-labelledby="category-explorer-heading"><div><span className="section-kicker">KEEP EXPLORING</span><h2 id="category-explorer-heading">Find another direction.</h2></div><div>{categoryNames.filter((item) => item !== category).map((item) => <a key={item} href={`/categories/${categorySlug(item)}`}>{item}<span>{components.filter((component) => component.category === item).length}</span><ArrowUpRight size={13} /></a>)}</div></section>
      <a className="category-back-link" href="/components"><ArrowLeft size={14} /> Browse all components</a>
    </div>
    <footer className="catalog-footer">
      <a href="/" className="catalog-brand"><span className="catalog-brand-mark">✳</span><span>flourish<span>.</span></span></a>
      <nav className="catalog-footer-nav" aria-label="Footer navigation">
        <a href="/components">Components</a>
        <a href="/registry">Registry</a>
        <a href="/developers">Developers</a>
        <a href="/about">About</a>
        <a href="/changelog">Changelog</a>
        <a href="/contact">Contact</a>
      </nav>
      <span>Made with care by <a href="https://www.zuhaibrashid.com" target="_blank" rel="noreferrer">Zuhaib Rashid</a></span>
      <a href="https://github.com/Zuhaib-dev/Flourish-UI" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={12} /></a>
      <span>© 2026</span>
    </footer>
  </main>
}
