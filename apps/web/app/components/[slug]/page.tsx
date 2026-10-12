import { ArrowLeft, ArrowUpRight, Check, Copy, ExternalLink, GitBranch, Package, Terminal, Code2, Sparkles, Layers } from 'lucide-react'
import { notFound } from 'next/navigation'
import { components, getComponent, installCommand } from '@/config/components'
import ClientDetailTabs from './client-tabs'

export function generateStaticParams() {
  return components.map(({ slug }) => ({ slug }))
}

export default async function ComponentPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const component = getComponent(slug)
  if (!component) notFound()

  return (
    <main className="detail-page theme-dark">
      <div className="noise-overlay" />
      <header className="site-header">
        <a href="/" className="wordmark">
          <div className="brand-mark">
            <span />
          </div>
          <span>Flourish<span style={{ color: 'var(--accent)' }}>/</span>UI</span>
        </a>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/Zuhaib-dev/Flourish-UI"
            target="_blank"
            rel="noreferrer"
            className="detail-github"
          >
            <GitBranch size={14} /> View Monorepo <ArrowUpRight size={12} />
          </a>
        </div>
      </header>

      <div className="detail-wrap">
        <a href="/" className="back-link">
          <ArrowLeft size={14} /> Back to Component Registry
        </a>

        <div className="detail-heading">
          <div>
            <div className="eyebrow">
              <span className="eyebrow-rule" />
              <span>{component.category}</span>
            </div>
            <h1>{component.title}</h1>
            <p>{component.description}</p>
          </div>

          <div className="detail-tags">
            {component.tags.map((tag) => (
              <span key={tag}>#{tag}</span>
            ))}
          </div>
        </div>

        {/* High-Resolution Preview Stage */}
        <section className="relative rounded-2xl overflow-hidden border border-[var(--border)] mb-12 shadow-2xl bg-zinc-950">
          <div className="relative aspect-[16/9] max-h-[560px] w-full flex items-center justify-center overflow-hidden">
            <img
              src={component.previewImage}
              alt={component.title}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="border-t border-zinc-800 bg-zinc-900/80 px-6 py-3 flex items-center justify-between text-xs font-mono text-zinc-400">
            <span className="flex items-center gap-2">
              <Sparkles size={13} className="text-amber-400" />
              SPECIMEN SPEC: {component.slug}
            </span>
            <span>{component.dependencies.length} DEPENDENCIES REQUIRED</span>
          </div>
        </section>

        {/* Interactive Client Installation & Code Tabs */}
        <ClientDetailTabs component={component} />
      </div>

      <footer className="site-footer">
        <a href="/" className="wordmark">
          <div className="brand-mark">
            <span />
          </div>
          <span>Flourish<span style={{ color: 'var(--accent)' }}>/</span>UI</span>
        </a>
        <p>
          Artisanal UI component registry by Zuhaib Rashid.<br />
          Licensed under MIT. Open to humans and AI agents.
        </p>
        <span className="copyright">© 2026 Zuhaib Rashid</span>
      </footer>
    </main>
  )
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const component = getComponent(slug)
  return {
    title: component ? `${component.title} — Flourish UI` : 'Component not found',
    description: component?.description,
  }
}
