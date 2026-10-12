'use client'

import React, { useState, useMemo, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from 'framer-motion'
import {
  Search,
  Command,
  Sun,
  Moon,
  Copy,
  Check,
  ArrowUpRight,
  Sparkles,
  Terminal,
  Layers,
  Box,
  Compass,
  Code2,
  ExternalLink,
} from 'lucide-react'

function GithubIcon({ size = 14 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  )
}

function XIcon({ size = 14 }: { size?: number }) {
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
import { categories, components, installCommand, stats } from '@/config/components'

export default function Page() {
  const [selectedCategory, setSelectedCategory] = useState('All components')
  const [searchQuery, setSearchQuery] = useState('')
  const [isDark, setIsDark] = useState(true)
  const [copiedSlug, setCopiedSlug] = useState<string | null>(null)
  const [toastMessage, setToastMessage] = useState<string | null>(null)
  const [isCmdOpen, setIsCmdOpen] = useState(false)
  const [cmdIndex, setCmdIndex] = useState(0)

  // 3D Tilt for Hero Stage
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)
  const springConfig = { damping: 25, stiffness: 200 }
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), springConfig)
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), springConfig)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    mouseX.set(x)
    mouseY.set(y)
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
          .includes(searchQuery.toLowerCase())
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
      setTimeout(() => {
        setCopiedSlug(null)
      }, 1800)
      setTimeout(() => {
        setToastMessage(null)
      }, 3000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  // Keyboard shortcut listener for Cmd + K
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

  // Featured flagship component for Hero
  const flagship = components.find((c) => c.slug === 'admit-one-3-d-holographic-ticket') || components[0]

  return (
    <div className={`flourish ${isDark ? 'theme-dark' : ''}`}>
      <div className="noise-overlay" />
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      {/* Navigation Header */}
      <header className="site-header">
        <a href="/" className="wordmark">
          <div className="brand-mark">
            <span />
          </div>
          <span>Flourish<span style={{ color: 'var(--accent)' }}>/</span>UI</span>
          <span className="brand-badge">Registry 2.0</span>
        </a>

        <nav className="desktop-nav">
          <a href="#catalog">
            Components <span>({stats.components})</span>
          </a>
          <a href="#manifesto">Manifesto</a>
          <a href="https://github.com/Zuhaib-dev/Flourish-UI" target="_blank" rel="noreferrer">
            GitHub <ExternalLink size={12} />
          </a>
          <a href="https://www.zuhaibrashid.com" target="_blank" rel="noreferrer">
            Author <ExternalLink size={12} />
          </a>
        </nav>

        <div className="header-tools">
          <button
            className="command-trigger"
            onClick={() => setIsCmdOpen(true)}
            aria-label="Search registry"
          >
            <Search size={14} />
            <span>Search 35+ components...</span>
            <kbd>
              <Command size={10} />K
            </kbd>
          </button>

          <button
            className="theme-toggle"
            onClick={() => setIsDark(!isDark)}
            aria-label="Toggle color theme"
          >
            {isDark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="eyebrow-rule" />
            <span>Artisanal Component Registry</span>
          </div>

          <h1>
            Interfaces with <em>character</em>.<br />
            <span>Physically grounded.</span>
          </h1>

          <p className="hero-description">
            A curated suite of 35 production-ready UI components built with React 19, Next.js, and Framer Motion. Zero monolithic bundle lock-in — install directly into your project via the shadcn CLI.
          </p>

          <div className="hero-buttons">
            <a href="#catalog" className="button button-solid">
              Explore Collection ({stats.components}) <ArrowUpRight size={15} />
            </a>
            <a
              href="https://github.com/Zuhaib-dev/Flourish-UI"
              target="_blank"
              rel="noreferrer"
              className="button button-secondary"
            >
              <GithubIcon size={15} /> GitHub Repository
            </a>
          </div>
        </div>

        {/* Interactive 3D Hero Stage */}
        <div
          className="hero-stage"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ perspective: 1000 }}
        >
          <div className="hero-stage-grid" />
          <div className="hero-stage-badge">
            <span />
            <span>FEATURED SPECIMEN: FLR-001</span>
          </div>

          <motion.div
            style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
            className="relative cursor-pointer rounded-2xl overflow-hidden border border-[var(--border)] shadow-2xl bg-[var(--card)]"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative aspect-[16/10] overflow-hidden bg-zinc-950">
              <img
                src={flagship.previewImage}
                alt={flagship.title}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-5">
                <div>
                  <div className="text-[10px] font-mono tracking-wider text-emerald-400 uppercase font-semibold">
                    Interactive Specimen
                  </div>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {flagship.title}
                  </h3>
                  <p className="text-xs text-zinc-300 mt-1 line-clamp-1">
                    {flagship.description}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Interactive Live Terminal Box */}
          <div className="terminal-window">
            <div className="terminal-header">
              <div className="terminal-dots">
                <span />
                <span />
                <span />
              </div>
              <span className="terminal-label">SHADCN REGISTRY INSTALL</span>
            </div>
            <div className="terminal-command">
              <code>{installCommand(flagship.slug)}</code>
              <button
                className="terminal-copy-btn"
                onClick={() => copyToClipboard(installCommand(flagship.slug), flagship.slug)}
                aria-label="Copy terminal install command"
              >
                {copiedSlug === flagship.slug ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Library Statistics Row */}
      <section className="stats-row">
        <div className="stat-box">
          <strong>35+</strong>
          <span>Crafted Specimens</span>
        </div>
        <div className="stat-box">
          <strong>0 kb</strong>
          <span>Shared Bundle Bloat</span>
        </div>
        <div className="stat-box">
          <strong>100%</strong>
          <span>Source Code Ownership</span>
        </div>
        <div className="stat-box">
          <strong>shadcn</strong>
          <span>Native CLI Integration</span>
        </div>
      </section>

      {/* Catalog & Filter Section */}
      <section className="catalog-section" id="catalog">
        <div className="section-intro">
          <div>
            <div className="eyebrow">
              <span className="eyebrow-rule" />
              <span>01 / The Registry Archive</span>
            </div>
            <h2>
              Inspect & <span>Acquire.</span>
            </h2>
          </div>
          <p>
            Filter through shaders, tactile skeuomorphism, generative canvases, and full-bleed hero compositions. Copy the raw source or pull directly with the CLI.
          </p>
        </div>

        {/* Controls Bar */}
        <div className="catalog-controls">
          <div className="filter-row">
            {categories.map((cat) => {
              const count = categoryCounts[cat] || 0
              const isActive = selectedCategory === cat
              return (
                <button
                  key={cat}
                  className={`filter ${isActive ? 'active' : ''}`}
                  onClick={() => setSelectedCategory(cat)}
                >
                  <span>{cat}</span>
                  <span className="badge-count">({count})</span>
                </button>
              )
            })}
          </div>

          <label className="search-field">
            <Search size={15} />
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by keyword, tag..."
            />
          </label>
        </div>

        {/* Component Grid */}
        <div className="component-grid">
          <AnimatePresence mode="popLayout">
            {filteredComponents.map((comp, idx) => (
              <motion.article
                key={comp.slug}
                className="component-card"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25, delay: Math.min(idx * 0.03, 0.3) }}
              >
                <a href={`/components/${comp.slug}`} className="card-preview-link">
                  <img
                    src={comp.previewImage}
                    alt={comp.title}
                    loading="lazy"
                  />
                  <div className="card-preview-overlay">
                    <span className="flex items-center gap-1 font-mono">
                      <Sparkles size={11} className="text-amber-300" />
                      SPECIMEN #{String(idx + 1).padStart(2, '0')}
                    </span>
                    <span className="flex items-center gap-1">
                      VIEW DEMO <ArrowUpRight size={12} />
                    </span>
                  </div>
                </a>

                <div className="card-body">
                  <div className="card-kicker">
                    <span className="card-category-tag">{comp.category}</span>
                    <span className="font-mono">{comp.dependencies.length} deps</span>
                  </div>

                  <a href={`/components/${comp.slug}`}>
                    <h3>{comp.title}</h3>
                  </a>

                  <p>{comp.description}</p>

                  <div className="card-footer">
                    <div className="card-tags">
                      {comp.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="tag-chip">
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <button
                      className="copy-btn"
                      onClick={() => copyToClipboard(installCommand(comp.slug), comp.slug)}
                      aria-label={`Copy command for ${comp.title}`}
                    >
                      {copiedSlug === comp.slug ? (
                        <>
                          <Check size={12} className="text-emerald-500" />
                          <span>Copied</span>
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

        {filteredComponents.length === 0 && (
          <div className="text-center py-20 text-[var(--muted)]">
            <Box size={40} className="mx-auto mb-3 opacity-40" />
            <p className="text-base font-medium">No specimens found matching &ldquo;{searchQuery}&rdquo;</p>
            <p className="text-xs font-mono mt-1">Try another keyword or select &ldquo;All components&rdquo;.</p>
          </div>
        )}
      </section>

      {/* Manifesto Section */}
      <section className="manifesto-section" id="manifesto">
        <div className="manifesto-number">MANIFESTO / 02</div>
        <div className="manifesto-title">
          <h2>
            Useful can<br />
            <span>still be tactile.</span>
          </h2>
        </div>
        <div className="manifesto-copy">
          <p>
            Digital design has spent a decade flattening into sterile conformity. Flourish UI is an exploration of physical depth, light refraction, and procedural shaders — built with clean code that slides effortlessly into real production codebases.
          </p>
          <a href="https://www.zuhaibrashid.com" target="_blank" rel="noreferrer">
            Crafted by Zuhaib Rashid <ArrowUpRight size={13} />
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="site-footer">
        <a href="/" className="wordmark">
          <div className="brand-mark">
            <span />
          </div>
          <span>Flourish<span style={{ color: 'var(--accent)' }}>/</span>UI</span>
        </a>

        <p>
          Artisanal UI component registry by{' '}
          <a href="https://www.zuhaibrashid.com" className="font-semibold underline">
            Zuhaib Rashid
          </a>
          .<br />
          Licensed under MIT. Open to humans and AI agents.
        </p>

        <div className="footer-links">
          <a href="https://github.com/Zuhaib-dev/Flourish-UI" target="_blank" rel="noreferrer" className="flex items-center gap-1.5">
            <GithubIcon size={13} /> GitHub
          </a>
          <a href="https://x.com/xuhaib_x9" target="_blank" rel="noreferrer" className="flex items-center gap-1.5">
            <XIcon size={12} /> X (@xuhaibx9)
          </a>
          <a href="https://www.linkedin.com/in/zuhaib-rashid-661345318/" target="_blank" rel="noreferrer" className="flex items-center gap-1.5">
            <LinkedinIcon size={13} /> LinkedIn
          </a>
        </div>

        <span className="copyright">© 2026 Zuhaib Rashid</span>
      </footer>

      {/* Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            className="toast-notice"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: 'spring', damping: 20, stiffness: 300 }}
          >
            <Check size={16} />
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Command Palette Modal (Cmd + K) */}
      <AnimatePresence>
        {isCmdOpen && (
          <motion.div
            className="cmd-dialog-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCmdOpen(false)}
          >
            <motion.div
              className="cmd-dialog"
              initial={{ scale: 0.95, y: -20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: -20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="cmd-input-bar">
                <Search size={18} className="text-[var(--muted)]" />
                <input
                  autoFocus
                  placeholder="Type to search 35 components or jump directly..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <kbd className="text-[10px] font-mono bg-[var(--subtle)] px-2 py-1 rounded border border-[var(--border)]">
                  ESC
                </kbd>
              </div>

              <div className="cmd-results">
                {filteredComponents.slice(0, 8).map((comp, i) => (
                  <a
                    key={comp.slug}
                    href={`/components/${comp.slug}`}
                    className={`cmd-item ${i === cmdIndex ? 'active' : ''}`}
                    onClick={() => setIsCmdOpen(false)}
                  >
                    <div>
                      <div className="cmd-item-title">{comp.title}</div>
                      <div className="cmd-item-cat">{comp.description}</div>
                    </div>
                    <span className="text-[11px] font-mono opacity-60">
                      {comp.category}
                    </span>
                  </a>
                ))}

                {filteredComponents.length === 0 && (
                  <div className="p-6 text-center text-sm text-[var(--muted)]">
                    No components matching query.
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
