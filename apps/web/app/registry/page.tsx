import type { Metadata } from 'next'
import { ArrowRight, ArrowUpRight, CheckCircle2, CircleHelp, PackageCheck, Terminal } from 'lucide-react'
import RegistryCommands from './registry-commands'
import { components } from '@/config/components'

export const metadata: Metadata = {
  title: 'Flourish UI Registry — Install React Components via shadcn CLI',
  description: 'Install Flourish UI components directly into your project with the shadcn CLI. One command brings the complete, editable TypeScript & Tailwind source into your codebase.',
  keywords: [
    'Flourish UI registry',
    'shadcn registry',
    'shadcn cli add',
    'React UI components',
    'Tailwind CSS components',
    'Next.js UI library',
    'open source react components',
    'copy paste components',
  ],
  alternates: { canonical: 'https://flourish-ui.vercel.app/registry' },
  openGraph: {
    title: 'Flourish UI Registry — Install React Components via shadcn CLI',
    description: 'Install Flourish UI components directly into your project with the shadcn CLI. One command brings the complete, editable source into your codebase.',
    type: 'website',
    url: 'https://flourish-ui.vercel.app/registry',
    siteName: 'Flourish UI',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Flourish UI Registry Guide',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Flourish UI Registry — Install React Components via shadcn CLI',
    description: 'Install Flourish UI components directly into your project with the shadcn CLI. Full source code ownership.',
    creator: '@zuhaibrashid',
    images: ['/og-image.png'],
  },
}

const steps = [
  {
    index: '01',
    icon: <PackageCheck size={17} aria-hidden="true" />,
    title: 'Initialize shadcn',
    body: 'Run once in a React or Next.js project. Scaffolds the components folder and config file.',
    code: 'pnpm dlx shadcn@latest init',
  },
  {
    index: '02',
    icon: <ArrowRight size={17} aria-hidden="true" />,
    title: 'Pick a component',
    body: 'Open any component page, copy its one-line install command, and run it from your project root.',
    code: 'pnpm dlx shadcn@latest add <url>',
  },
  {
    index: '03',
    icon: <CheckCircle2 size={17} aria-hidden="true" />,
    title: 'Make it yours',
    body: 'Source lands directly in your codebase. Edit markup, motion, and styling without limits.',
    code: 'components/flourish/<component>.tsx',
  },
]

const faqs = [
  {
    q: 'The command cannot find shadcn',
    a: 'Initialize your project first with shadcn@latest init. No global install needed — dlx handles it.',
  },
  {
    q: 'A package is missing after install',
    a: 'Check the component\'s Dependencies section and copy the package install command for your package manager.',
  },
  {
    q: 'The import path is different in my app',
    a: 'Keep the generated component where it was installed, or update its import aliases to match your project\'s components.json.',
  },
  {
    q: 'Can I install multiple components at once?',
    a: 'Not yet via the registry, but each component is fully self-contained. Install them sequentially and they\'ll coexist cleanly.',
  },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'HowTo',
      name: 'How to install Flourish UI components with shadcn CLI',
      description: 'Step-by-step guide to installing open-source Flourish UI React components using the shadcn CLI.',
      step: steps.map((s, idx) => ({
        '@type': 'HowToStep',
        position: idx + 1,
        name: s.title,
        text: s.body,
        itemListElement: [
          {
            '@type': 'HowToDirection',
            text: `Run the command: ${s.code}`,
          },
        ],
      })),
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.a,
        },
      })),
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
          name: 'Registry Guide',
          item: 'https://flourish-ui.vercel.app/registry',
        },
      ],
    },
  ],
}


const totalComponents = components.length

export default function RegistryPage() {
  return (
    <main className="registry-page">
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
            <a className="active" href="/registry">Registry</a>
            <a href="/changelog">Changelog</a>
          </nav>
        </div>
      </header>

      {/* ── Content ─────────────────────────── */}
      <div className="registry-layout">

        {/* Breadcrumb */}
        <div className="catalog-breadcrumb registry-breadcrumb">
          <a href="/">Home</a>
          <span>/</span>
          <span>Registry guide</span>
        </div>

        {/* ── Hero ─────────────────────────── */}
        <section className="registry-hero" aria-labelledby="registry-hero-heading">
          <div className="registry-hero-inner">
            <div className="registry-hero-copy">
              <span className="catalog-kicker"><i />FLOURISH REGISTRY</span>
              <h1 id="registry-hero-heading">
                Source lands<br />
                <em>right in your project.</em>
              </h1>
              <p>
                Every component is a shadcn registry item. One command copies the full, editable
                source into your codebase — no abstraction layers, no hidden internals.
              </p>
              <div className="registry-hero-actions">
                <a href="/components" className="registry-cta-primary">
                  Browse {totalComponents} components <ArrowRight size={14} />
                </a>
                <a href="#how-it-works" className="registry-cta-ghost">
                  How it works <ArrowRight size={13} />
                </a>
              </div>
            </div>

            <div className="registry-hero-stat-cluster" aria-label="Registry stats">
              <div className="registry-stat">
                <strong>{totalComponents}</strong>
                <span>COMPONENTS</span>
              </div>
              <div className="registry-stat-divider" aria-hidden="true" />
              <div className="registry-stat">
                <strong>1</strong>
                <span>COMMAND</span>
              </div>
              <div className="registry-stat-divider" aria-hidden="true" />
              <div className="registry-stat">
                <strong>0</strong>
                <span>LOCK-IN</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── Command Panel ─────────────────── */}
        <section className="registry-command-section" aria-label="Install command">
          <RegistryCommands />
        </section>

        {/* ── Steps ────────────────────────── */}
        <section className="registry-steps-section" id="how-it-works" aria-labelledby="steps-heading">
          <div className="registry-steps-header">
            <span className="catalog-kicker"><i />HOW IT WORKS</span>
            <h2 id="steps-heading">Three steps. Then it's yours.</h2>
          </div>
          <ol className="registry-steps-list">
            {steps.map((step) => (
              <li key={step.index} className="registry-step">
                <div className="registry-step-number">{step.index}</div>
                <div className="registry-step-icon" aria-hidden="true">{step.icon}</div>
                <div className="registry-step-body">
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                  <code className="registry-step-code">{step.code}</code>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* ── FAQ / Troubleshooting ─────────── */}
        <section className="registry-faq-section" aria-labelledby="faq-heading">
          <div className="registry-faq-inner">
            <div className="registry-faq-copy">
              <span className="catalog-kicker"><i />DEPENDENCIES &amp; HELP</span>
              <h2 id="faq-heading">Clear setup,<br />fewer surprises.</h2>
              <p>
                Every component page lists required packages before you install.
                The CLI adds registry files — install any listed external packages separately.
              </p>
              <a href="/components" className="registry-faq-browse">
                Browse components <ArrowUpRight size={13} />
              </a>
            </div>

            <div className="registry-faq-list" aria-label="Frequently asked questions">
              <h3 className="registry-faq-sub"><CircleHelp size={15} aria-hidden="true" /> Troubleshooting</h3>
              {faqs.map((faq) => (
                <details key={faq.q} className="registry-faq-item">
                  <summary>{faq.q}</summary>
                  <p>{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── Bottom CTA ───────────────────── */}
        <section className="registry-endcap" aria-label="Explore components">
          <div className="registry-endcap-inner">
            <div>
              <span className="catalog-kicker"><i />OPEN SOURCE, FULLY YOURS</span>
              <p>Every piece is a starting point.<br /><em>Take it somewhere new.</em></p>
            </div>
            <a href="/components" className="registry-cta-primary">
              Explore the full library <ArrowRight size={14} />
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
          <Terminal size={13} /> GitHub <ArrowUpRight size={11} />
        </a>
        <span>© 2026</span>
      </footer>
    </main>
  )
}
