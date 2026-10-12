import React from 'react'
import {
  ArrowLeft,
  ArrowUpRight,
  Sparkles,
  ExternalLink,
  Terminal,
  Code2,
  Package,
  Layers,
  ChevronRight,
  Boxes,
  Cpu,
} from 'lucide-react'
import { notFound } from 'next/navigation'
import { components, getComponent, installCommand, stats } from '@/config/components'
import ClientDetailTabs from './client-tabs'

function GithubIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}

function XIcon({ size = 13 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

function LinkedinIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

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
  const hasLivePreview = component.slug === 'admit-one-3-d-holographic-ticket'

  // Find related specimens in the same category
  const relatedComponents = components
    .filter((c) => c.slug !== component.slug && c.category === component.category)
    .slice(0, 3)

  return (
    <div className="premium-detail relative min-h-screen overflow-x-hidden">
      <div className="noise-overlay" />
      <div className="blueprint-grid" />
      <div className="radial-glow glow-primary" />
      <div className="radial-glow glow-secondary" />

      {/* Global Header */}
      <header className="site-header">
        <div className="detail-container h-full flex items-center justify-between">
          <a href="/" className="detail-brand flex items-center gap-3 font-semibold text-base tracking-tight group">
            <span className="detail-brand-mark" aria-hidden="true"><svg viewBox="0 0 32 32"><circle className="brand-orbit" cx="16" cy="16" r="12.5" /><g className="brand-flower"><ellipse cx="16" cy="10.2" rx="3.2" ry="5.2" /><ellipse cx="21.8" cy="16" rx="5.2" ry="3.2" /><ellipse cx="16" cy="21.8" rx="3.2" ry="5.2" /><ellipse cx="10.2" cy="16" rx="5.2" ry="3.2" /></g><circle className="brand-seed" cx="16" cy="16" r="2.2" /></svg></span>
            <div className="flex items-center gap-1.5 font-bold tracking-tight text-zinc-950">
              <span>Flourish</span><span className="text-violet-600">/</span><span className="text-zinc-600">UI</span>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-violet-50 text-violet-700 border border-violet-200">
              Registry 2.0
            </span>
          </a>

          <div className="flex items-center gap-3 sm:gap-4 text-xs font-mono text-zinc-600">
            <a
              href="/components"
              className="px-3 py-1.5 rounded-lg border border-zinc-200/90 bg-white hover:bg-zinc-50 hover:border-violet-300 text-zinc-800 hover:text-violet-700 transition-all shadow-2xs font-semibold flex items-center gap-1.5"
            >
              <span>Components</span>
              <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-violet-100 text-violet-700 font-mono">
                {stats.components}
              </span>
            </a>
            <a
              href="https://github.com/Zuhaib-dev/Flourish-UI"
              target="_blank"
              rel="noreferrer"
              className="hover:text-zinc-950 transition-colors hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-200 bg-white hover:bg-zinc-50 shadow-2xs"
            >
              <GithubIcon size={14} /> <span>Monorepo</span> <ExternalLink size={11} className="opacity-50" />
            </a>
            <a
              href="https://www.zuhaibrashid.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-zinc-950 transition-colors hidden md:flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-200/80 hover:bg-zinc-50 shadow-2xs"
            >
              <span>Zuhaib Rashid</span> <ArrowUpRight size={11} className="opacity-50" />
            </a>
          </div>
        </div>
      </header>

      {/* Main Specimen Wrap */}
      <main className="detail-container premium-detail-container pt-8 pb-24">
        {/* Breadcrumb Navigation */}
        <div className="detail-breadcrumb flex items-center gap-2 text-xs font-mono text-zinc-500 mb-8 flex-wrap">
          <a href="/" className="hover:text-zinc-950 transition-colors flex items-center gap-1 font-medium">
            <ArrowLeft size={13} />
            <span>Home</span>
          </a>
          <ChevronRight size={12} className="text-zinc-300" />
          <a href="/components" className="hover:text-violet-700 transition-colors font-medium">
            Components
          </a>
          <ChevronRight size={12} className="text-zinc-300" />
          <span className="text-violet-700 font-semibold">{component.title}</span>
        </div>

        {/* Specimen Header & Title */}
        <div className="detail-heading flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-zinc-200 mb-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-violet-200 bg-violet-50 text-violet-700 text-xs font-mono mb-4 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-600" />
              <span>{component.category.toUpperCase()}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-950 leading-tight">
              {component.title}
            </h1>

            <p className="text-base text-zinc-600 mt-3 leading-relaxed max-w-2xl">
              {component.description}
            </p>

            <div className="flex items-center gap-2 mt-4 flex-wrap">
              {component.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-lg text-xs font-mono bg-white border border-zinc-200 text-zinc-600 shadow-2xs"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <a
              href={`https://github.com/Zuhaib-dev/Flourish-UI/tree/main/${component.slug}`}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2.5 rounded-xl border border-zinc-200 bg-white hover:bg-zinc-50 text-xs font-mono text-zinc-800 hover:text-zinc-950 transition-all flex items-center gap-2 shadow-2xs"
            >
              <GithubIcon size={14} />
              <span>Source on GitHub</span>
              <ArrowUpRight size={13} />
            </a>
          </div>
        </div>

        <div className="detail-workspace">
        <section className="detail-preview rounded-2xl border border-zinc-200/90 bg-white shadow-xl shadow-zinc-200/60 overflow-hidden">
          {/* macOS Titlebar */}
          <div className="px-4 py-3 border-b border-zinc-100 flex items-center justify-between text-xs font-mono text-zinc-500 bg-zinc-50/80">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
              <span className="ml-3 text-zinc-500 text-[11px]">
                components/flourish/{component.slug}.tsx
              </span>
            </div>
            <div className="flex items-center gap-2 text-[11px] text-emerald-700 font-medium">
              <Sparkles size={12} className="text-amber-500" />
              <span>{hasLivePreview ? 'LIVE PREVIEW' : 'PREVIEW IMAGE'}</span>
            </div>
          </div>

          {/* Canvas Preview Area */}
          <div className="detail-preview-stage relative aspect-[16/9] max-h-[580px] w-full flex items-center justify-center bg-zinc-100/60 p-4 sm:p-8">
            <div className="relative w-full h-full max-w-4xl max-h-[500px] rounded-xl overflow-hidden border border-zinc-200 shadow-md bg-white flex items-center justify-center">
              {hasLivePreview ? (
                <iframe
                  title={`${component.title} interactive preview`}
                  src={`/previews/${component.slug}`}
                  className="live-component-frame"
                  loading="lazy"
                  sandbox="allow-scripts allow-same-origin"
                />
              ) : (
                <img
                  src={component.previewImage}
                  alt={component.title}
                  className="w-full h-full object-contain"
                />
              )}
            </div>
          </div>

          {/* Specimen Specification Footer Strip */}
          <div className="border-t border-zinc-100 bg-zinc-50/80 px-6 py-3.5 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-zinc-600">
            <div className="flex items-center gap-4 flex-wrap">
              <span className="flex items-center gap-1.5 text-zinc-800">
                <Cpu size={13} className="text-violet-600" />
                <span>Next.js 16 • React 19 • TypeScript</span>
              </span>
              <span className="text-zinc-300">•</span>
              <span className="flex items-center gap-1.5 text-zinc-800">
                <Layers size={13} className="text-emerald-600" />
                <span>Tailwind CSS v4</span>
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-zinc-500">Registry Slug:</span>
              <code className="text-violet-700 bg-violet-50 px-2 py-0.5 rounded border border-violet-100 font-semibold">
                {component.slug}
              </code>
            </div>
          </div>
        </section>

        <aside className="detail-install-panel">
          <div className="detail-install-heading"><span>QUICKSTART</span><h2>Make it yours.</h2><p>Install the source, then customize it in your project.</p></div>
          <ClientDetailTabs component={component} />
        </aside>
        </div>

        {/* Related Specimens in Same Category */}
        {relatedComponents.length > 0 && (
          <section className="mt-20 pt-12 border-t border-zinc-200">
            <div className="flex items-center justify-between mb-6">
              <div>
                <div className="text-xs font-mono text-violet-600 uppercase tracking-wider font-semibold">
                  EXPLORE MORE
                </div>
                <h3 className="text-2xl font-bold text-zinc-950 tracking-tight mt-1">
                  More in {component.category}
                </h3>
              </div>
              <a
                href="/components"
                className="text-xs font-mono text-zinc-500 hover:text-zinc-950 transition-colors flex items-center gap-1"
              >
                <span>View all {stats.components}</span> <ArrowUpRight size={13} />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedComponents.map((rel) => (
                <a
                  key={rel.slug}
                  href={`/components/${rel.slug}`}
                  className="group p-4 rounded-xl border border-zinc-200 bg-white hover:border-violet-300 hover:shadow-md transition-all flex flex-col overflow-hidden shadow-2xs"
                >
                  <div className="aspect-[16/10] rounded-lg overflow-hidden bg-zinc-50 border border-zinc-100 mb-3">
                    <img
                      src={rel.previewImage}
                      alt={rel.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="text-sm font-bold text-zinc-950 group-hover:text-violet-600 transition-colors">
                    {rel.title}
                  </div>
                  <p className="text-xs text-zinc-500 line-clamp-2 mt-1">
                    {rel.description}
                  </p>
                </a>
              ))}
            </div>
          </section>
        )}
      </main>

      {/* Global Footer */}
      <footer className="border-t border-zinc-200 py-12 bg-white">
        <div className="detail-container flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-zinc-500 font-mono">
          <div className="flex items-center gap-3">
            <a href="/" className="font-bold text-zinc-950 text-sm tracking-tight flex items-center gap-1.5">
              <span className="detail-brand-mark" aria-hidden="true"><svg viewBox="0 0 32 32"><circle className="brand-orbit" cx="16" cy="16" r="12.5" /><g className="brand-flower"><ellipse cx="16" cy="10.2" rx="3.2" ry="5.2" /><ellipse cx="21.8" cy="16" rx="5.2" ry="3.2" /><ellipse cx="16" cy="21.8" rx="3.2" ry="5.2" /><ellipse cx="10.2" cy="16" rx="5.2" ry="3.2" /></g><circle className="brand-seed" cx="16" cy="16" r="2.2" /></svg></span>
              <span>Flourish<span className="text-violet-600">/</span>UI</span>
            </a>
            <span>•</span>
            <span>Crafted by Zuhaib Rashid</span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/Zuhaib-dev/Flourish-UI"
              target="_blank"
              rel="noreferrer"
              className="hover:text-zinc-950 transition-colors flex items-center gap-1.5"
            >
              <GithubIcon size={14} /> GitHub
            </a>
            <a
              href="https://x.com/xuhaib_x9"
              target="_blank"
              rel="noreferrer"
              className="hover:text-zinc-950 transition-colors flex items-center gap-1.5"
            >
              <XIcon size={13} /> X
            </a>
            <a
              href="https://www.linkedin.com/in/zuhaib-rashid-661345318/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-zinc-950 transition-colors flex items-center gap-1.5"
            >
              <LinkedinIcon size={14} /> LinkedIn
            </a>
          </div>

          <span>© 2026 Zuhaib Rashid</span>
        </div>
      </footer>
    </div>
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
