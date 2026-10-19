import type { Metadata } from 'next'
import Image from 'next/image'
import { ArrowRight, ArrowUpRight, Sparkles, GitBranch, Layers, Rocket, Wrench, Package } from 'lucide-react'
import { components, recentlyAddedSlugs } from '@/config/components'

export const metadata: Metadata = {
  title: 'Changelog — Updates, New Components & Releases | Flourish UI',
  description: 'Track the latest component releases, design improvements, live previews, and shadcn registry updates in Flourish UI.',
  keywords: [
    'Flourish UI changelog',
    'react components release notes',
    'new shadcn components',
    'tailwind ui library updates',
    'web animation releases',
    'UI library releases',
    'open source changelog',
  ],
  alternates: { canonical: 'https://flourish-ui.vercel.app/changelog' },
  openGraph: {
    title: 'Changelog — Updates, New Components & Releases | Flourish UI',
    description: 'Track the latest component releases, design improvements, live previews, and shadcn registry updates in Flourish UI.',
    type: 'website',
    url: 'https://flourish-ui.vercel.app/changelog',
    siteName: 'Flourish UI',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Flourish UI Changelog',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Changelog — Updates, New Components & Releases | Flourish UI',
    description: 'Track the latest component releases, design improvements, live previews, and shadcn registry updates in Flourish UI.',
    creator: '@zuhaibrashid',
    images: ['/og-image.png'],
  },
}

const releases = [
  {
    date: 'October 2026',
    tag: 'NEW RELEASES (45+ TOTAL)',
    icon: <Sparkles size={15} />,
    title: 'Letters from the Garden & Sequel Frontier Footer',
    body: 'Two new artisanal editorial footer components join Flourish UI: Letters from the Garden (an idyllic cottagecore editorial footer with interactive breeze physics, countryside clothesline artwork, and newsletter subscription) and Sequel Frontier Footer (an antique cyanotype woodcut engraving footer with lone cowboy rider on horseback, cobalt blue textured aesthetic, and 4-column directory). Library expands to 45+ components with full shadcn CLI support.',
    tags: ['interactive surfaces', 'editorial', 'cottagecore', 'engraving', 'footers'],
    accent: '#2b3d36',
  },
  {
    date: 'October 2026',
    tag: 'ARTISANAL RELEASES',
    icon: <Sparkles size={15} />,
    title: '6 Artisanal Components & Expanded Interactive Catalog',
    body: 'Six new expressive components join Flourish UI: Offline Pixel 404 Error (with playable Chrome dinosaur), Create from the Heart (editorial fine-art hero with audio stems), Design with Soul (painterly landscape hero & impasto studio dock), Genesis Onboarding Card (pastel skeuomorphic 3D wizard), House Savings Goal Card (Nordic A-frame fintech savings goal), and Storybook Play Canvas (whimsical drawing easel).',
    tags: ['skeuomorphic', 'canvas', 'fine-art', '404', 'fintech'],
    accent: '#d86b43',
  },
  {
    date: 'October 2026',
    tag: 'NEW COMPONENTS',
    icon: <Sparkles size={15} />,
    title: 'Liquid Glass Folder Stack & Raster Dynamics Wordmark',
    body: 'Two new skeuomorphic and generative components land in the library. Liquid Glass Folder Stack brings tactile 3-D frosted-glass folders with spring-hinge physics and procedural liquid marble artwork. Raster Dynamics Wordmark renders a halftone dot-matrix wordmark using a custom HTML Canvas renderer with real-time dithering.',
    tags: ['skeuomorphic', 'canvas', 'generative'],
    accent: '#d86b43',
  },
  {
    date: 'Latest release',
    tag: 'LIBRARY UPDATE',
    icon: <Layers size={15} />,
    title: 'A smoother way to explore the library',
    body: 'Added interactive live previews across the catalog with new-tab controls, saved components (persisted in localStorage), sorting by recency / name / dependencies, category pages for every component group, and clearer registry installation guidance.',
    tags: ['catalog', 'ux', 'search'],
    accent: '#5a6e4a',
  },
  {
    date: 'Registry 2.0',
    tag: 'INFRASTRUCTURE',
    icon: <GitBranch size={15} />,
    title: 'Install source straight into your project',
    body: 'Every component can now be added with the shadcn CLI using a single command. Each component page shows copyable install commands for pnpm, npm, Bun, and Yarn, along with a full dependency guide so setup is predictable.',
    tags: ['registry', 'cli', 'shadcn'],
    accent: '#3b6ea5',
  },
  {
    date: 'Foundation',
    tag: 'LAUNCH',
    icon: <Rocket size={15} />,
    title: 'Flourish UI opens to the public',
    body: 'The initial library ships with a hand-curated set of expressive React components — from WebGL shaders and procedural canvas work to skeuomorphic interfaces and motion-driven surfaces. Open source, no subscriptions, every piece fully editable.',
    tags: ['launch', 'open-source'],
    accent: '#7c4d8a',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'CollectionPage',
      name: 'Flourish UI Changelog',
      description: 'A running record of new components, previews, and improvements across Flourish UI.',
      url: 'https://flourish-ui.vercel.app/changelog',
      mainEntity: {
        '@type': 'ItemList',
        itemListElement: releases.map((release, idx) => ({
          '@type': 'ListItem',
          position: idx + 1,
          name: release.title,
          description: release.body,
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
          name: 'Changelog',
          item: 'https://flourish-ui.vercel.app/changelog',
        },
      ],
    },
  ],
}

export default function ChangelogPage() {
  const recent = recentlyAddedSlugs
    .map((slug) => components.find((c) => c.slug === slug))
    .filter(Boolean)
    .slice(0, 6)

  return (
    <main className="changelog-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

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
            <a className="active" href="/changelog">Changelog</a>
            <a href="/developers">Developers</a>
          </nav>
        </div>
      </header>

      {/* ── Content ─────────────────────────── */}
      <div className="changelog-layout">

        {/* Breadcrumb */}
        <div className="catalog-breadcrumb registry-breadcrumb">
          <a href="/">Home</a>
          <span>/</span>
          <span>Changelog</span>
        </div>

        {/* ── Hero ─────────────────────────── */}
        <section className="changelog-hero" aria-labelledby="changelog-hero-heading">
          <span className="catalog-kicker"><i />WHAT&apos;S NEW</span>
          <h1 id="changelog-hero-heading">
            Built in the open.<br />
            <em>Always improving.</em>
          </h1>
          <p>
            A running record of what has arrived in Flourish UI — from new source components to
            sharper ways to explore and install them.
          </p>
        </section>

        {/* ── Release Timeline ─────────────── */}
        <section className="changelog-timeline" aria-label="Product release timeline">
          <div className="changelog-timeline-track" aria-hidden="true" />
          {releases.map((release) => (
            <article key={release.title} className="changelog-entry">
              <div className="changelog-entry-meta">
                <time className="changelog-date">{release.date}</time>
                <span className="changelog-tag" style={{ '--tag-color': release.accent } as React.CSSProperties}>
                  {release.icon}
                  {release.tag}
                </span>
              </div>
              <div className="changelog-entry-body">
                <h2>{release.title}</h2>
                <p>{release.body}</p>
                <div className="changelog-tags">
                  {release.tags.map((tag) => (
                    <span key={tag} className="changelog-tag-pill">#{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </section>

        {/* ── Recently Added ───────────────── */}
        <section className="changelog-recent" aria-labelledby="recent-heading">
          <div className="changelog-recent-header">
            <div>
              <span className="catalog-kicker"><i />RECENTLY ADDED</span>
              <h2 id="recent-heading">Fresh starting points.</h2>
            </div>
            <a href="/components" className="registry-cta-ghost">
              See all <ArrowRight size={13} />
            </a>
          </div>
          <div className="changelog-recent-grid">
            {recent.map((component) => component && (
              <a key={component.slug} href={`/components/${component.slug}`} className="changelog-recent-card">
                <div className="changelog-recent-thumb relative" style={{ position: 'relative' }}>
                  <Image
                    src={component.previewImage}
                    alt={component.title}
                    fill
                    sizes="(max-width: 600px) 100vw, 33vw"
                    className="changelog-recent-img"
                  />
                </div>
                <div className="changelog-recent-info">
                  <span>{component.category}</span>
                  <strong>{component.title}</strong>
                </div>
                <ArrowUpRight size={14} className="changelog-recent-arrow" aria-hidden="true" />
              </a>
            ))}
          </div>
        </section>

        {/* ── Bottom CTA ───────────────────── */}
        <section className="registry-endcap" aria-label="Explore library">
          <div className="registry-endcap-inner">
            <div>
              <span className="catalog-kicker"><i />OPEN SOURCE</span>
              <p>The whole library, all the source.<br /><em>Nothing held back.</em></p>
            </div>
            <a href="https://github.com/Zuhaib-dev/Flourish-UI" target="_blank" rel="noreferrer" className="registry-cta-primary">
              View on GitHub <ArrowUpRight size={14} />
            </a>
          </div>
        </section>

      </div>

      {/* ── Footer ──────────────────────────── */}
      <footer className="catalog-footer">
        <a href="/" className="catalog-brand">
          <span className="catalog-brand-mark" aria-hidden="true">✳</span>
          <span>flourish<span>.</span></span>
        </a>
        <span>Made with care by <a href="https://www.zuhaibrashid.com" target="_blank" rel="noreferrer">Zuhaib Rashid</a></span>
        <a href="https://github.com/Zuhaib-dev/Flourish-UI" target="_blank" rel="noreferrer">
          <ArrowUpRight size={13} /> GitHub
        </a>
        <span>© 2026</span>
      </footer>
    </main>
  )
}
