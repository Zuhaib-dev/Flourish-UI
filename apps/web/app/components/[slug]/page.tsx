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
import { components, getComponent, installCommand } from '@/config/components'
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

  // Find related specimens (same category or next ones)
  const relatedComponents = components
    .filter((c) => c.slug !== component.slug && c.category === component.category)
    .slice(0, 3)

  return (
    <div className="relative min-h-screen bg-[#09090b] text-[#f4f4f5] overflow-x-hidden">
      <div className="noise-overlay" />
      <div className="blueprint-grid" />
      <div className="radial-glow glow-primary" />
      <div className="radial-glow glow-secondary" />

      {/* Global Header */}
      <header className="site-header">
        <div className="detail-container h-full flex items-center justify-between">
          <a href="/" className="flex items-center gap-3 font-semibold text-base tracking-tight group">
            <div className="w-8 h-8 rounded-lg border border-white/20 bg-zinc-900 grid place-items-center group-hover:border-violet-500/60 transition-all">
              <span className="w-2.5 h-2.5 rounded bg-violet-400 group-hover:scale-110 transition-transform" />
            </div>
            <div className="flex items-center gap-1.5 font-bold tracking-tight">
              <span>Flourish</span>
              <span className="text-violet-400">/</span>
              <span className="text-zinc-300">UI</span>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-violet-500/10 text-violet-300 border border-violet-500/20">
              Registry 2.0
            </span>
          </a>

          <div className="flex items-center gap-4 text-xs font-mono text-zinc-400">
            <a
              href="https://github.com/Zuhaib-dev/Flourish-UI"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/10 bg-zinc-900/80 hover:bg-zinc-800"
            >
              <GithubIcon size={14} /> <span>Monorepo</span> <ExternalLink size={11} className="opacity-50" />
            </a>
            <a
              href="https://www.zuhaibrashid.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-white/5 hover:border-white/20"
            >
              <span>Zuhaib Rashid</span> <ArrowUpRight size={11} className="opacity-50" />
            </a>
          </div>
        </div>
      </header>

      {/* Main Specimen Wrap */}
      <main className="detail-container pt-8 pb-24">
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 mb-8 flex-wrap">
          <a href="/" className="hover:text-white transition-colors flex items-center gap-1">
            <ArrowLeft size={13} />
            <span>Registry</span>
          </a>
          <ChevronRight size={12} className="text-zinc-600" />
          <span className="text-zinc-400">{component.category}</span>
          <ChevronRight size={12} className="text-zinc-600" />
          <span className="text-violet-400 font-semibold">{component.title}</span>
        </div>

        {/* Specimen Header & Title */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-white/10 mb-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-violet-500/25 bg-violet-500/10 text-violet-300 text-xs font-mono mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />
              <span>{component.category.toUpperCase()}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              {component.title}
            </h1>

            <p className="text-base text-zinc-400 mt-3 leading-relaxed max-w-2xl">
              {component.description}
            </p>

            <div className="flex items-center gap-2 mt-4 flex-wrap">
              {component.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-lg text-xs font-mono bg-zinc-900 border border-white/10 text-zinc-400"
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
              className="px-4 py-2.5 rounded-xl border border-white/10 bg-zinc-900/90 hover:bg-zinc-800 text-xs font-mono text-zinc-200 hover:text-white transition-all flex items-center gap-2"
            >
              <GithubIcon size={14} />
              <span>Source on GitHub</span>
              <ArrowUpRight size={13} />
            </a>
          </div>
        </div>

        {/* Specimen Showcase Stage Canvas */}
        <section className="rounded-2xl border border-white/15 bg-zinc-900/90 shadow-2xl backdrop-blur-2xl overflow-hidden mb-12">
          {/* macOS Titlebar */}
          <div className="px-4 py-3 border-b border-white/10 flex items-center justify-between text-xs font-mono text-zinc-400 bg-zinc-950/60">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
              <span className="ml-3 text-zinc-400 text-[11px]">
                components/ui/{component.slug}.tsx
              </span>
            </div>
            <div className="flex items-center gap-2 text-[11px] text-emerald-400 font-medium">
              <Sparkles size={12} className="text-amber-400" />
              <span>READY FOR REGISTRY CLI</span>
            </div>
          </div>

          {/* Canvas Preview Area */}
          <div className="relative aspect-[16/9] max-h-[580px] w-full flex items-center justify-center bg-[#09090c] p-4 sm:p-8">
            <div className="relative w-full h-full max-w-4xl max-h-[500px] rounded-xl overflow-hidden border border-white/10 shadow-2xl bg-zinc-950 flex items-center justify-center">
              <img
                src={component.previewImage}
                alt={component.title}
                className="w-full h-full object-contain"
              />
            </div>
          </div>

          {/* Specimen Specification Footer Strip */}
          <div className="border-t border-white/10 bg-zinc-950/80 px-6 py-3.5 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-zinc-400">
            <div className="flex items-center gap-4 flex-wrap">
              <span className="flex items-center gap-1.5 text-zinc-300">
                <Cpu size={13} className="text-violet-400" />
                <span>Next.js 16 • React 19 • TypeScript</span>
              </span>
              <span className="text-zinc-600">•</span>
              <span className="flex items-center gap-1.5 text-zinc-300">
                <Layers size={13} className="text-emerald-400" />
                <span>Tailwind CSS v4</span>
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-zinc-500">Registry Slug:</span>
              <code className="text-violet-300 bg-zinc-900 px-2 py-0.5 rounded border border-white/5">
                {component.slug}
              </code>
            </div>
          </div>
        </section>

        {/* Client Tabs: CLI Installation & Source Code */}
        <ClientDetailTabs component={component} />

        {/* Related Specimens in Same Category */}
        {relatedComponents.length > 0 && (
          <section className="mt-20 pt-12 border-t border-white/10">
            <div className="flex items-center justify-between mb-6">
              <div>
                <div className="text-xs font-mono text-violet-400 uppercase tracking-wider font-semibold">
                  EXPLORE MORE
                </div>
                <h3 className="text-2xl font-bold text-white tracking-tight mt-1">
                  More in {component.category}
                </h3>
              </div>
              <a
                href="/#catalog"
                className="text-xs font-mono text-zinc-400 hover:text-white transition-colors flex items-center gap-1"
              >
                <span>View all 35</span> <ArrowUpRight size={13} />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedComponents.map((rel) => (
                <a
                  key={rel.slug}
                  href={`/components/${rel.slug}`}
                  className="group p-4 rounded-xl border border-white/10 bg-zinc-900/50 hover:bg-zinc-900/90 hover:border-violet-500/40 transition-all flex flex-col overflow-hidden"
                >
                  <div className="aspect-[16/10] rounded-lg overflow-hidden bg-zinc-950 border border-white/10 mb-3">
                    <img
                      src={rel.previewImage}
                      alt={rel.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="text-sm font-bold text-white group-hover:text-violet-300 transition-colors">
                    {rel.title}
                  </div>
                  <p className="text-xs text-zinc-400 line-clamp-2 mt-1">
                    {rel.description}
                  </p>
                </a>
              ))}
            </div>
          </section>
        )}
      </main>

      {/* Global Footer */}
      <footer className="border-t border-white/10 py-12 bg-zinc-950/60">
        <div className="detail-container flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-zinc-400 font-mono">
          <div className="flex items-center gap-3">
            <a href="/" className="font-bold text-white text-sm tracking-tight flex items-center gap-1.5">
              <span className="w-2 h-2 rounded bg-violet-400" />
              <span>Flourish<span className="text-violet-400">/</span>UI</span>
            </a>
            <span>•</span>
            <span>Crafted by Zuhaib Rashid</span>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/Zuhaib-dev/Flourish-UI"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <GithubIcon size={14} /> GitHub
            </a>
            <a
              href="https://x.com/xuhaib_x9"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1.5"
            >
              <XIcon size={13} /> X
            </a>
            <a
              href="https://www.linkedin.com/in/zuhaib-rashid-661345318/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors flex items-center gap-1.5"
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
