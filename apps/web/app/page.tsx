'use client'

import React, { useState, useMemo, useEffect } from 'react'
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from 'framer-motion'
import {
  Search,
  Command,
  Copy,
  Check,
  ArrowUpRight,
  Sparkles,
  Terminal,
  ExternalLink,
  Layers,
  LayoutGrid,
  List,
  Code2,
  Cpu,
  Boxes,
  Zap,
  X,
} from 'lucide-react'
import { categories, components, installCommand, stats, ComponentEntry } from '@/config/components'

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

export default function Page() {
  const [selectedCategory, setSelectedCategory] = useState('All components')
  const [searchQuery, setSearchQuery] = useState('')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [copiedSlug, setCopiedSlug] = useState<string | null>(null)
  const [toastMessage, setToastMessage] = useState<string | null>(null)
  const [isCmdOpen, setIsCmdOpen] = useState(false)

  // 3D Tilt for Hero Specimen
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springConfig = { damping: 22, stiffness: 160 }
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), springConfig)
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), springConfig)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5)
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  const handleMouseLeave = () => {
    mouseX.set(0)
    mouseY.set(0)
  }

  // Filter components
  const filteredComponents = useMemo(() => {
    return components.filter((comp) => {
      const matchesCategory =
        selectedCategory === 'All components' || comp.category === selectedCategory
      const matchesQuery =
        searchQuery === '' ||
        `${comp.title} ${comp.description} ${comp.category} ${comp.tags.join(' ')}`
          .toLowerCase()
          .includes(searchQuery.toLowerCase().trim())
      return matchesCategory && matchesQuery
    })
  }, [selectedCategory, searchQuery])

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { 'All components': components.length }
    components.forEach((c) => {
      counts[c.category] = (counts[c.category] || 0) + 1
    })
    return counts
  }, [])

  // Clipboard copy helper
  const copyToClipboard = async (text: string, slug?: string) => {
    try {
      await navigator.clipboard.writeText(text)
      if (slug) setCopiedSlug(slug)
      setToastMessage(`Copied: ${text}`)
      setTimeout(() => setCopiedSlug(null), 1800)
      setTimeout(() => setToastMessage(null), 3000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  // Cmd + K shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setIsCmdOpen((prev) => !prev)
      } else if (e.key === 'Escape') {
        setIsCmdOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  // Featured flagship specimen
  const flagship = components.find((c) => c.slug === 'admit-one-3-d-holographic-ticket') || components[0]

  return (
    <div className="relative min-h-screen bg-[#fafafa] text-[#09090b] overflow-x-hidden">
      <div className="noise-overlay" />
      <div className="blueprint-grid" />
      <div className="radial-glow glow-primary" />
      <div className="radial-glow glow-secondary" />

      {/* Global Navigation Header */}
      <header className="site-header">
        <div className="site-container h-full flex items-center justify-between">
          <a href="/" className="flex items-center gap-3 font-semibold text-base tracking-tight group">
            <div className="w-8 h-8 rounded-lg border border-zinc-200 bg-white grid place-items-center group-hover:border-violet-500/60 group-hover:shadow-[0_0_15px_rgba(139,92,246,0.2)] transition-all shadow-xs">
              <span className="w-2.5 h-2.5 rounded bg-violet-600 group-hover:scale-110 transition-transform" />
            </div>
            <div className="flex items-center gap-1.5 font-bold tracking-tight text-zinc-950">
              <span>Flourish</span>
              <span className="text-violet-600">/</span>
              <span className="text-zinc-600">UI</span>
            </div>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-violet-50 text-violet-700 border border-violet-200">
              Registry 2.0
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-zinc-600">
            <a href="#catalog" className="hover:text-zinc-950 transition-colors flex items-center gap-1.5">
              <span>Components</span>
              <span className="text-xs font-mono px-1.5 py-0.5 rounded bg-zinc-100 text-violet-700 border border-zinc-200">
                {stats.components}
              </span>
            </a>
            <a href="#manifesto" className="hover:text-zinc-950 transition-colors">
              Manifesto
            </a>
            <a
              href="https://github.com/Zuhaib-dev/Flourish-UI"
              target="_blank"
              rel="noreferrer"
              className="hover:text-zinc-950 transition-colors flex items-center gap-1.5"
            >
              <GithubIcon size={14} /> <span>GitHub</span> <ExternalLink size={11} className="opacity-50" />
            </a>
            <a
              href="https://www.zuhaibrashid.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-zinc-950 transition-colors flex items-center gap-1.5 text-zinc-800"
            >
              <span>Zuhaib Rashid</span> <ExternalLink size={11} className="opacity-50" />
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsCmdOpen(true)}
              className="flex items-center gap-2.5 px-3.5 py-2 rounded-xl border border-zinc-200 bg-white hover:border-violet-400 hover:bg-zinc-50 text-xs text-zinc-600 hover:text-zinc-900 transition-all font-mono shadow-xs"
            >
              <Search size={13} className="text-zinc-400" />
              <span className="hidden sm:inline">Search 35 specimens...</span>
              <kbd className="px-1.5 py-0.5 rounded bg-zinc-100 text-[10px] border border-zinc-200 text-zinc-500 font-mono">
                ⌘K
              </kbd>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="site-container pt-16 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headlines & CTA */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-violet-200 bg-violet-50/80 text-violet-700 text-xs font-mono w-fit shadow-xs">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="font-semibold tracking-wide">35 ARTISANAL SPECIMENS</span>
              <span className="text-zinc-300">•</span>
              <span className="text-zinc-500">REACT 19 / TAILWIND V4</span>
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-zinc-950 leading-[1.08]">
              Interfaces with <span className="text-violet-600 font-serif italic font-normal">character</span>.<br />
              <span className="text-zinc-800">
                Engineered for depth.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-zinc-600 max-w-xl leading-relaxed">
              A curated suite of 35 tactile, shader-driven, and physically-grounded UI specimens. Zero monolithic runtime lock-in — install clean, readable TypeScript source directly into your repository with the shadcn CLI.
            </p>

            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <a
                href="#catalog"
                style={{ color: '#ffffff' }}
                className="px-6 py-3.5 rounded-xl bg-zinc-950 font-bold text-sm hover:bg-zinc-800 transition-all flex items-center gap-2 shadow-[0_4px_20px_rgba(0,0,0,0.12)]"
              >
                <span>Explore Collection ({stats.components})</span>
                <ArrowUpRight size={16} />
              </a>

              <a
                href="https://github.com/Zuhaib-dev/Flourish-UI"
                target="_blank"
                rel="noreferrer"
                className="px-5 py-3.5 rounded-xl border border-zinc-200 bg-white text-zinc-800 hover:bg-zinc-50 hover:border-zinc-300 transition-all font-semibold text-sm flex items-center gap-2 shadow-xs"
              >
                <GithubIcon size={16} /> <span>Star on GitHub</span>
              </a>

              <a
                href="https://www.zuhaibrashid.com"
                target="_blank"
                rel="noreferrer"
                className="px-4 py-3.5 rounded-xl border border-zinc-200/80 bg-white/60 hover:bg-white hover:border-zinc-300 text-zinc-600 hover:text-zinc-950 transition-all text-xs font-mono flex items-center gap-1.5 shadow-2xs"
              >
                <span>by Zuhaib Rashid</span> <ArrowUpRight size={12} className="opacity-50" />
              </a>
            </div>

            {/* Quick Terminal Snippet */}
            <div className="mt-3 p-3.5 rounded-xl border border-zinc-200 bg-white shadow-xs flex items-center justify-between gap-3 font-mono text-xs max-w-xl">
              <div className="flex items-center gap-2.5 overflow-hidden text-zinc-800">
                <Terminal size={14} className="text-violet-600 shrink-0" />
                <span className="text-zinc-400 shrink-0">$</span>
                <span className="truncate text-zinc-900 font-medium">
                  {installCommand(flagship.slug)}
                </span>
              </div>
              <button
                onClick={() => copyToClipboard(installCommand(flagship.slug), flagship.slug)}
                className="shrink-0 p-1.5 px-2.5 rounded-lg border border-zinc-200 bg-zinc-50 hover:bg-zinc-100 text-zinc-700 hover:text-zinc-950 transition-all flex items-center gap-1.5 text-[11px]"
                aria-label="Copy featured command"
              >
                {copiedSlug === flagship.slug ? (
                  <>
                    <Check size={12} className="text-emerald-600" />
                    <span className="text-emerald-600 font-semibold">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy size={12} />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right Column: 3D Showcase Stage */}
          <div
            className="lg:col-span-5 relative"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ perspective: 1200 }}
          >
            <motion.div
              style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
              className="relative rounded-2xl border border-zinc-200/90 bg-white p-4 shadow-2xl shadow-zinc-200/60 group transition-shadow duration-300"
            >
              {/* Window Frame Bar */}
              <div className="flex items-center justify-between pb-3 px-1 border-b border-zinc-100 text-xs font-mono text-zinc-500">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                  <span className="ml-2 text-zinc-400 text-[11px]">flagship-preview.tsx</span>
                </div>
                <span className="text-emerald-700 font-mono font-medium text-[10px] px-2 py-0.5 rounded bg-emerald-50 border border-emerald-200">
                  INTERACTIVE
                </span>
              </div>

              {/* Clean Preview Canvas */}
              <a
                href={`/components/${flagship.slug}`}
                className="relative aspect-[16/10] rounded-xl overflow-hidden mt-3 bg-zinc-50 border border-zinc-100 block group/img shadow-inner"
              >
                <img
                  src={flagship.previewImage}
                  alt={flagship.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-105"
                />
              </a>

              {/* Specimen Info Card Below Image */}
              <div className="pt-3.5 px-1 flex items-center justify-between">
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-violet-600 font-semibold">
                    Featured Specimen
                  </div>
                  <h3 className="text-base font-bold text-zinc-950 tracking-tight">
                    {flagship.title}
                  </h3>
                </div>
                <a
                  href={`/components/${flagship.slug}`}
                  className="px-3 py-1.5 rounded-lg border border-zinc-200 bg-zinc-50 hover:bg-violet-600 hover:text-white hover:border-violet-600 transition-all text-xs font-mono flex items-center gap-1.5 text-zinc-700 font-medium"
                >
                  <span>Inspect</span> <ArrowUpRight size={12} />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* High-polish Stats Ribbon */}
      <section className="site-container pb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl border border-zinc-200/80 bg-white shadow-xs hover:border-zinc-300 hover:shadow-md transition-all">
            <div className="flex items-center justify-between text-zinc-500 mb-2">
              <span className="text-xs font-mono uppercase tracking-wider font-medium">Total Pieces</span>
              <Boxes size={16} className="text-violet-600" />
            </div>
            <div className="text-3xl font-extrabold text-zinc-950 tracking-tight">35+</div>
            <div className="text-xs text-zinc-500 mt-1">Ready for copy-paste</div>
          </div>

          <div className="p-5 rounded-2xl border border-zinc-200/80 bg-white shadow-xs hover:border-zinc-300 hover:shadow-md transition-all">
            <div className="flex items-center justify-between text-zinc-500 mb-2">
              <span className="text-xs font-mono uppercase tracking-wider font-medium">Bundle Lock-in</span>
              <Zap size={16} className="text-amber-500" />
            </div>
            <div className="text-3xl font-extrabold text-zinc-950 tracking-tight">0 kb</div>
            <div className="text-xs text-zinc-500 mt-1">Direct source code</div>
          </div>

          <div className="p-5 rounded-2xl border border-zinc-200/80 bg-white shadow-xs hover:border-zinc-300 hover:shadow-md transition-all">
            <div className="flex items-center justify-between text-zinc-500 mb-2">
              <span className="text-xs font-mono uppercase tracking-wider font-medium">Architecture</span>
              <Cpu size={16} className="text-emerald-600" />
            </div>
            <div className="text-3xl font-extrabold text-zinc-950 tracking-tight">React 19</div>
            <div className="text-xs text-zinc-500 mt-1">Next.js & Tailwind v4</div>
          </div>

          <div className="p-5 rounded-2xl border border-zinc-200/80 bg-white shadow-xs hover:border-zinc-300 hover:shadow-md transition-all">
            <div className="flex items-center justify-between text-zinc-500 mb-2">
              <span className="text-xs font-mono uppercase tracking-wider font-medium">Distribution</span>
              <Terminal size={16} className="text-blue-600" />
            </div>
            <div className="text-3xl font-extrabold text-zinc-950 tracking-tight">shadcn</div>
            <div className="text-xs text-zinc-500 mt-1">One-command install</div>
          </div>
        </div>
      </section>

      {/* Catalog & Filter Section */}
      <section className="site-container pb-32 scroll-mt-24" id="catalog">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-zinc-200">
          <div>
            <div className="text-xs font-mono text-violet-600 uppercase tracking-wider font-semibold mb-2 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-600" />
              <span>01 // THE COMPONENT ARCHIVE</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-950">
              Artisanal UI Archive
            </h2>
          </div>
          <p className="text-sm text-zinc-600 max-w-md leading-relaxed">
            WebGL shaders, tactile skeuomorphism, generative canvas physics, and full-bleed hero stages designed for modern applications.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 py-6 border-b border-zinc-200/80 mb-8">
          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
            {categories.map((cat) => {
              const count = categoryCounts[cat] || 0
              const isActive = selectedCategory === cat
              return (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`filter-pill ${isActive ? 'active' : ''}`}
                >
                  <span>{cat}</span>
                  <span className={`text-[10px] ${isActive ? 'text-zinc-300' : 'text-zinc-400'}`}>
                    ({count})
                  </span>
                </button>
              )
            })}
          </div>

          {/* Search Field & View Switcher */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="relative min-w-[220px] sm:min-w-[260px]">
              <Search size={14} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by title, tag, category..."
                className="w-full pl-9 pr-8 py-2 rounded-xl border border-zinc-200 bg-white text-xs font-mono text-zinc-900 placeholder-zinc-400 focus:outline-none focus:border-violet-500 transition-colors shadow-2xs"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-800"
                >
                  <X size={13} />
                </button>
              )}
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center p-1 rounded-xl border border-zinc-200 bg-white shadow-2xs">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded-lg transition-colors ${
                  viewMode === 'grid' ? 'bg-zinc-100 text-zinc-950 font-bold shadow-2xs' : 'text-zinc-400 hover:text-zinc-800'
                }`}
                title="Grid View"
                aria-label="Grid View"
              >
                <LayoutGrid size={15} />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-1.5 rounded-lg transition-colors ${
                  viewMode === 'list' ? 'bg-zinc-100 text-zinc-950 font-bold shadow-2xs' : 'text-zinc-400 hover:text-zinc-800'
                }`}
                title="List View"
                aria-label="List View"
              >
                <List size={15} />
              </button>
            </div>
          </div>
        </div>

        {/* View Mode: Grid */}
        {viewMode === 'grid' && (
          <div className="catalog-grid">
            <AnimatePresence mode="popLayout">
              {filteredComponents.map((comp, idx) => (
                <motion.article
                  key={comp.slug}
                  className="group rounded-2xl border border-zinc-200/80 bg-white hover:border-violet-400 hover:shadow-xl hover:shadow-zinc-200/50 transition-all duration-300 flex flex-col overflow-hidden shadow-xs"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.25, delay: Math.min(idx * 0.02, 0.2) }}
                >
                  {/* Framed Specimen Matte Container */}
                  <a
                    href={`/components/${comp.slug}`}
                    className="relative aspect-[16/10] overflow-hidden bg-zinc-50/80 border-b border-zinc-100 block group/card"
                  >
                    {/* Inner Specimen Image */}
                    <img
                      src={comp.previewImage}
                      alt={comp.title}
                      loading="lazy"
                      className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/card:scale-105"
                    />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity flex items-end justify-between p-4 text-xs font-mono text-white">
                      <span className="flex items-center gap-1.5 px-2 py-1 rounded bg-black/60 backdrop-blur-sm border border-white/10">
                        <Sparkles size={11} className="text-amber-400" />
                        <span>#{String(idx + 1).padStart(2, '0')}</span>
                      </span>
                      <span className="flex items-center gap-1 font-semibold text-white px-2 py-1 rounded bg-black/60 backdrop-blur-sm border border-white/20">
                        <span>OPEN SPECIMEN</span>
                        <ArrowUpRight size={13} />
                      </span>
                    </div>
                  </a>

                  {/* Card Body */}
                  <div className="p-5 flex flex-col flex-1">
                    <div className="flex items-center justify-between text-[11px] font-mono mb-2">
                      <span className="text-violet-700 font-semibold px-2 py-0.5 rounded bg-violet-50 border border-violet-100">
                        {comp.category}
                      </span>
                      <span className="text-zinc-500">{comp.dependencies.length} deps</span>
                    </div>

                    <a href={`/components/${comp.slug}`}>
                      <h3 className="text-lg font-bold text-zinc-950 tracking-tight group-hover:text-violet-600 transition-colors">
                        {comp.title}
                      </h3>
                    </a>

                    <p className="text-xs text-zinc-600 leading-relaxed mt-1.5 mb-5 line-clamp-2">
                      {comp.description}
                    </p>

                    {/* Card Footer Actions */}
                    <div className="mt-auto pt-3 border-t border-zinc-100 flex items-center justify-between gap-2">
                      <div className="flex items-center gap-1.5 flex-wrap">
                        {comp.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 rounded text-[10px] font-mono bg-zinc-100 text-zinc-600 border border-zinc-200/60"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>

                      <button
                        onClick={() => copyToClipboard(installCommand(comp.slug), comp.slug)}
                        className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-zinc-200 hover:border-violet-300 bg-zinc-50 hover:bg-violet-50 text-xs font-mono text-zinc-700 hover:text-violet-700 transition-all shrink-0"
                        aria-label={`Copy command for ${comp.title}`}
                      >
                        {copiedSlug === comp.slug ? (
                          <>
                            <Check size={12} className="text-emerald-600" />
                            <span className="text-emerald-600 font-medium">Copied</span>
                          </>
                        ) : (
                          <>
                            <Terminal size={12} />
                            <span>CLI</span>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>
        )}

        {/* View Mode: Compact List */}
        {viewMode === 'list' && (
          <div className="catalog-list">
            {filteredComponents.map((comp, idx) => (
              <div
                key={comp.slug}
                className="p-4 rounded-xl border border-zinc-200/80 bg-white hover:bg-zinc-50 hover:border-violet-300 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-2xs"
              >
                <div className="flex items-center gap-4">
                  <div className="w-16 h-12 rounded-lg overflow-hidden bg-zinc-100 border border-zinc-200 shrink-0">
                    <img src={comp.previewImage} alt={comp.title} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <a href={`/components/${comp.slug}`} className="font-bold text-zinc-950 hover:text-violet-600 transition-colors text-sm">
                      {comp.title}
                    </a>
                    <p className="text-xs text-zinc-500 line-clamp-1 mt-0.5">{comp.description}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 shrink-0 font-mono text-xs text-zinc-600">
                  <span className="px-2 py-0.5 rounded bg-zinc-100 border border-zinc-200 text-[11px] text-violet-700 font-medium">
                    {comp.category}
                  </span>
                  <button
                    onClick={() => copyToClipboard(installCommand(comp.slug), comp.slug)}
                    className="px-3 py-1.5 rounded-lg border border-zinc-200 hover:border-violet-300 bg-zinc-50 text-zinc-700 hover:text-violet-700 transition-all flex items-center gap-1.5 text-xs font-mono"
                  >
                    {copiedSlug === comp.slug ? <Check size={12} className="text-emerald-600" /> : <Terminal size={12} />}
                    <span>{copiedSlug === comp.slug ? 'Copied' : 'Copy CLI'}</span>
                  </button>
                  <a
                    href={`/components/${comp.slug}`}
                    className="px-3 py-1.5 rounded-lg bg-zinc-100 hover:bg-violet-600 hover:text-white transition-all text-xs font-mono flex items-center gap-1 font-medium"
                  >
                    <span>View</span> <ArrowUpRight size={12} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {filteredComponents.length === 0 && (
          <div className="py-24 text-center text-zinc-400">
            <p className="text-base font-medium">No specimens found matching &ldquo;{searchQuery}&rdquo;</p>
            <p className="text-xs font-mono mt-1">Try another keyword or select &ldquo;All components&rdquo;.</p>
          </div>
        )}
      </section>

      {/* Manifesto Section */}
      <section className="site-container pb-28 border-t border-zinc-200 pt-20" id="manifesto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-3 text-xs font-mono text-violet-600 uppercase tracking-widest font-semibold flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-violet-600" />
            <span>MANIFESTO // 02</span>
          </div>
          <div className="lg:col-span-5">
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-zinc-950 leading-tight">
              Useful can <br />
              <span className="font-serif italic font-normal text-violet-600">still be tactile.</span>
            </h2>
          </div>
          <div className="lg:col-span-4 flex flex-col gap-4 text-zinc-600 text-sm leading-relaxed">
            <p>
              Digital interfaces shouldn&apos;t feel like flat corporate forms. Flourish UI explores physical depth, light refraction, and procedural shaders — while adhering to strict production-grade TypeScript and Tailwind CSS standards.
            </p>
            <div className="pt-2">
              <a
                href="https://www.zuhaibrashid.com"
                target="_blank"
                rel="noreferrer"
                className="text-violet-600 hover:text-violet-700 font-semibold inline-flex items-center gap-1.5 transition-colors"
              >
                Portfolio of Zuhaib Rashid <ArrowUpRight size={13} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-200 py-12 bg-white">
        <div className="site-container flex flex-col sm:flex-row items-center justify-between gap-6 text-xs text-zinc-500 font-mono">
          <div className="flex items-center gap-3">
            <a href="/" className="font-bold text-zinc-950 text-sm tracking-tight flex items-center gap-1.5">
              <span className="w-2 h-2 rounded bg-violet-600" />
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

      {/* Floating Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            className="toast-bar"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            transition={{ type: 'spring', damping: 20, stiffness: 280 }}
          >
            <Check size={15} className="text-emerald-400 shrink-0" />
            <span className="truncate max-w-sm">{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Command Palette Modal (Cmd + K) */}
      <AnimatePresence>
        {isCmdOpen && (
          <motion.div
            className="cmd-palette-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCmdOpen(false)}
          >
            <motion.div
              className="cmd-palette-box"
              initial={{ scale: 0.96, y: -16 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.96, y: -16 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center gap-3 px-5 py-4 border-b border-zinc-200">
                <Search size={16} className="text-zinc-400" />
                <input
                  autoFocus
                  placeholder="Search 35+ specimens..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-transparent border-0 outline-none text-sm text-zinc-950 placeholder-zinc-400 font-mono"
                />
                <kbd className="px-1.5 py-0.5 rounded bg-zinc-100 text-[10px] font-mono border border-zinc-200 text-zinc-500">
                  ESC
                </kbd>
              </div>

              <div className="max-h-80 overflow-y-auto p-2">
                {filteredComponents.slice(0, 8).map((comp) => (
                  <a
                    key={comp.slug}
                    href={`/components/${comp.slug}`}
                    onClick={() => setIsCmdOpen(false)}
                    className="flex items-center justify-between p-3 rounded-xl hover:bg-zinc-100 transition-colors group"
                  >
                    <div>
                      <div className="text-sm font-semibold text-zinc-950 group-hover:text-violet-600 transition-colors">
                        {comp.title}
                      </div>
                      <div className="text-xs text-zinc-500 line-clamp-1">{comp.description}</div>
                    </div>
                    <span className="text-[10px] font-mono text-zinc-500 border border-zinc-200 px-2 py-0.5 rounded bg-zinc-50">
                      {comp.category}
                    </span>
                  </a>
                ))}

                {filteredComponents.length === 0 && (
                  <div className="p-8 text-center text-xs font-mono text-zinc-400">
                    No components found matching query.
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
