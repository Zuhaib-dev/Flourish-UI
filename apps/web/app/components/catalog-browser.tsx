'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import Image from 'next/image'
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  Command,
  Copy,
  ExternalLink,
  Heart,
  LayoutGrid,
  List,
  ArrowDownUp,
  Search,
  Terminal,
  X,
} from 'lucide-react'
import { categories, components, installCommand, recentlyAddedSlugs, stats } from '@/config/components'
import { playUiSound } from '../ui-sounds'

const INITIAL_BATCH = 18
const BATCH_INCREMENT = 18

function recentlyAddedRank(slug: string) {
  const index = recentlyAddedSlugs.indexOf(slug)
  return index === -1 ? Number.MAX_SAFE_INTEGER : index
}

export default function CatalogBrowser() {
  const [selectedCategory, setSelectedCategory] = useState('All components')
  const [searchQuery, setSearchQuery] = useState('')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [copiedSlug, setCopiedSlug] = useState<string | null>(null)
  const [paletteOpen, setPaletteOpen] = useState(false)
  const [savedSlugs, setSavedSlugs] = useState<string[]>([])
  const [savedReady, setSavedReady] = useState(false)
  const [savedOnly, setSavedOnly] = useState(false)
  const [sortBy, setSortBy] = useState<'recent' | 'name' | 'lightest'>('recent')
  const [visibleLimit, setVisibleLimit] = useState(INITIAL_BATCH)
  const sentinelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    try {
      const saved = JSON.parse(window.localStorage.getItem('flourish:saved-components') ?? '[]')
      if (Array.isArray(saved)) {
        const available = new Set(components.map((item) => item.slug))
        setSavedSlugs([...new Set(saved.filter((slug): slug is string => typeof slug === 'string' && available.has(slug)))])
      }
    } catch { /* Keep the catalog usable when storage is unavailable. */ }
    setSavedReady(true)
  }, [])

  useEffect(() => {
    if (!savedReady) return
    try { window.localStorage.setItem('flourish:saved-components', JSON.stringify(savedSlugs)) } catch { /* Saving is optional when storage is unavailable. */ }
  }, [savedSlugs, savedReady])

  const filteredComponents = useMemo(() => components.filter((item) => {
    const matchesCategory = selectedCategory === 'All components' || item.category === selectedCategory
    const matchesQuery = !searchQuery.trim() || `${item.title} ${item.description} ${item.category} ${item.tags.join(' ')}`.toLowerCase().includes(searchQuery.trim().toLowerCase())
    const matchesSaved = !savedOnly || savedSlugs.includes(item.slug)
    return matchesCategory && matchesQuery && matchesSaved
  }).sort((first, second) => {
    if (sortBy === 'name') return first.title.localeCompare(second.title)
    if (sortBy === 'lightest') return first.dependencies.length - second.dependencies.length || first.title.localeCompare(second.title)
    const firstIndex = recentlyAddedRank(first.slug)
    const secondIndex = recentlyAddedRank(second.slug)
    return firstIndex - secondIndex || first.title.localeCompare(second.title)
  }), [selectedCategory, searchQuery, savedOnly, savedSlugs, sortBy])

  useEffect(() => {
    setVisibleLimit(INITIAL_BATCH)
  }, [selectedCategory, searchQuery, savedOnly, sortBy])

  useEffect(() => {
    if (visibleLimit >= filteredComponents.length) return
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setVisibleLimit((prev) => Math.min(prev + BATCH_INCREMENT, filteredComponents.length))
        }
      },
      { rootMargin: '500px' }
    )
    const node = sentinelRef.current
    if (node) observer.observe(node)
    return () => observer.disconnect()
  }, [visibleLimit, filteredComponents.length])

  const displayedComponents = useMemo(() => {
    return filteredComponents.slice(0, visibleLimit)
  }, [filteredComponents, visibleLimit])

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { 'All components': components.length }
    components.forEach((item) => { counts[item.category] = (counts[item.category] ?? 0) + 1 })
    return counts
  }, [])

  function openSearch() {
    setPaletteOpen(true)
    playUiSound('open')
  }

  function closeSearch() {
    setPaletteOpen(false)
    playUiSound('close')
  }

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault()
        playUiSound(paletteOpen ? 'close' : 'open')
        setPaletteOpen((open) => !open)
      }
      if (event.key === 'Escape' && paletteOpen) closeSearch()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [paletteOpen])

  async function copyCommand(slug: string) {
    try {
      await navigator.clipboard.writeText(installCommand(slug))
      playUiSound('copy')
      setCopiedSlug(slug)
      window.setTimeout(() => setCopiedSlug(null), 1800)
    } catch { setCopiedSlug(null) }
  }

  function toggleSaved(slug: string) {
    playUiSound(savedSlugs.includes(slug) ? 'unsave' : 'save')
    setSavedSlugs((current) => current.includes(slug) ? current.filter((saved) => saved !== slug) : [...current, slug])
  }

  const visibleSearchResults = useMemo(() => {
    const query = searchQuery.trim().toLowerCase()
    return components.filter((item) => !query || `${item.title} ${item.description} ${item.category} ${item.tags.join(' ')}`.toLowerCase().includes(query)).slice(0, 7)
  }, [searchQuery])

  return (
    <>
      <button
        type="button"
        className="catalog-search-trigger catalog-island-search"
        onClick={openSearch}
        aria-label="Search component library (Command K)"
      >
        <Search size={14} aria-hidden="true" />
        <span>Search library</span>
        <kbd aria-hidden="true"><Command size={10} /> K</kbd>
      </button>

      <section className="catalog-browser" aria-label="Browse component collection">
        <div className="catalog-toolbar">
          <div className="catalog-toolbar-title">
            <span aria-hidden="true">01</span>
            <div>
              <strong>Browse the collection</strong>
              <small>{filteredComponents.length} {filteredComponents.length === 1 ? 'result' : 'results'}</small>
            </div>
          </div>
          <div className="catalog-controls">
            <label className="catalog-search">
              <Search size={14} aria-hidden="true" />
              <input
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Search components"
                aria-label="Search components"
              />
              {searchQuery && (
                <button type="button" onClick={() => setSearchQuery('')} aria-label="Clear search">
                  <X size={13} aria-hidden="true" />
                </button>
              )}
            </label>
            <label className="catalog-sort">
              <ArrowDownUp size={13} aria-hidden="true" />
              <span className="sr-only">Sort components</span>
              <select
                value={sortBy}
                onChange={(event) => { playUiSound('filter'); setSortBy(event.target.value as typeof sortBy) }}
                aria-label="Sort components"
              >
                <option value="recent">Recently added</option>
                <option value="name">Name: A to Z</option>
                <option value="lightest">Fewest dependencies</option>
              </select>
            </label>
            <button
              type="button"
              className={`saved-filter${savedOnly ? ' selected' : ''}`}
              onClick={() => { playUiSound('filter'); setSavedOnly((active) => !active) }}
              aria-label={savedOnly ? 'Show all components' : `Show saved components only (${savedSlugs.length})`}
              aria-pressed={savedOnly}
            >
              <Heart size={13} fill={savedOnly ? 'currentColor' : 'none'} aria-hidden="true" />
              <span>Saved</span>
              <span>{savedSlugs.length}</span>
            </button>
            <div className="catalog-view-switch" role="group" aria-label="View mode">
              <button
                type="button"
                onClick={() => { if (viewMode !== 'grid') playUiSound('tab'); setViewMode('grid') }}
                className={viewMode === 'grid' ? 'selected' : ''}
                aria-label="Grid view"
                aria-pressed={viewMode === 'grid'}
              >
                <LayoutGrid size={15} aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => { if (viewMode !== 'list') playUiSound('tab'); setViewMode('list') }}
                className={viewMode === 'list' ? 'selected' : ''}
                aria-label="List view"
                aria-pressed={viewMode === 'list'}
              >
                <List size={15} aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>

        <div className="catalog-category-row">
          <span className="category-label">FILTER BY</span>
          <div className="catalog-categories" role="group" aria-label="Filter by component category">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => { if (category !== selectedCategory) playUiSound('filter'); setSelectedCategory(category) }}
                className={selectedCategory === category ? 'selected' : ''}
                aria-label={`Filter by ${category} (${categoryCounts[category] ?? 0} components)`}
                aria-pressed={selectedCategory === category}
              >
                {category}
                <span>{categoryCounts[category] ?? 0}</span>
              </button>
            ))}
          </div>
        </div>

        {filteredComponents.length ? (
          viewMode === 'grid' ? (
            <>
              <div className="premium-card-grid">
                {displayedComponents.map((item, index) => (
                  <article key={item.slug} className="premium-component-card">
                    <div className="premium-card-visual">
                      <a
                        href={`/components/${item.slug}`}
                        className="premium-card-image"
                        aria-label={`View details and live demo for ${item.title}`}
                      >
                        <Image
                          src={item.previewImage}
                          alt={item.title}
                          fill
                          sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
                          priority={index === 0}
                          fetchPriority={index === 0 ? 'high' : 'auto'}
                          loading={index === 0 ? 'eager' : 'lazy'}
                        />
                        <span className="card-image-index">
                          {String(index + 1).padStart(2, '0')} <ArrowUpRight size={13} aria-hidden="true" />
                        </span>
                      </a>
                      <a
                        className="card-open-new-tab"
                        href={`/previews/${item.slug}`}
                        onClick={() => playUiSound('preview')}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Open live preview of ${item.title} in a new tab`}
                        title="Open live preview in a new tab"
                      >
                        <ExternalLink size={14} aria-hidden="true" />
                        <span>Live preview</span>
                      </a>
                      <button
                        type="button"
                        className={`save-component${savedSlugs.includes(item.slug) ? ' is-saved' : ''}`}
                        onClick={() => toggleSaved(item.slug)}
                        aria-label={`${savedSlugs.includes(item.slug) ? 'Remove' : 'Save'} ${item.title}${savedSlugs.includes(item.slug) ? ' from' : ' to'} saved components`}
                        aria-pressed={savedSlugs.includes(item.slug)}
                        title={savedSlugs.includes(item.slug) ? 'Remove from saved' : 'Save component'}
                      >
                        <Heart size={15} fill={savedSlugs.includes(item.slug) ? 'currentColor' : 'none'} aria-hidden="true" />
                      </button>
                    </div>
                    <div className="premium-card-content">
                      <div className="premium-card-category">
                        <span>{item.category}</span>
                        <span>{item.dependencies.length ? `${item.dependencies.length} packages` : 'No dependencies'}</span>
                      </div>
                      <a href={`/components/${item.slug}`} className="premium-card-title">
                        {item.title}
                      </a>
                      <p>{item.description}</p>
                      <div className="premium-card-footer">
                        <a
                          href={`/components/${item.slug}`}
                          aria-label={`Explore details and copy code for ${item.title}`}
                        >
                          Explore component <ArrowRight size={13} aria-hidden="true" />
                        </a>
                        <button
                          type="button"
                          onClick={() => copyCommand(item.slug)}
                          aria-label={`Copy install command for ${item.title}`}
                        >
                          {copiedSlug === item.slug ? <Check size={13} aria-hidden="true" /> : <Copy size={13} aria-hidden="true" />}
                          <span>{copiedSlug === item.slug ? 'Copied' : 'Copy CLI'}</span>
                        </button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {visibleLimit < filteredComponents.length && (
                <div ref={sentinelRef} className="catalog-load-sentinel">
                  <button
                    type="button"
                    onClick={() => setVisibleLimit((prev) => Math.min(prev + BATCH_INCREMENT, filteredComponents.length))}
                    className="catalog-load-more-btn"
                    aria-label={`Load more components (${filteredComponents.length - visibleLimit} remaining)`}
                  >
                    <span>Showing {displayedComponents.length} of {filteredComponents.length} components</span>
                    <small>Scroll down to reveal more</small>
                  </button>
                </div>
              )}
            </>
          ) : (
            <>
              <div className="premium-list">
                {displayedComponents.map((item, index) => (
                  <article key={item.slug} className="premium-list-row">
                    <span className="list-index">{String(index + 1).padStart(2, '0')}</span>
                    <a
                      href={`/components/${item.slug}`}
                      className="list-thumb"
                      aria-label={`View details for ${item.title}`}
                    >
                      <Image
                        src={item.previewImage}
                        alt=""
                        fill
                        sizes="72px"
                        priority={index === 0}
                        loading={index === 0 ? 'eager' : 'lazy'}
                      />
                    </a>
                    <div className="list-copy">
                      <a href={`/components/${item.slug}`}>{item.title}</a>
                      <p>{item.description}</p>
                    </div>
                    <span className="list-category">{item.category}</span>
                    <button
                      type="button"
                      className="list-save"
                      onClick={() => toggleSaved(item.slug)}
                      aria-label={`${savedSlugs.includes(item.slug) ? 'Remove' : 'Save'} ${item.title}${savedSlugs.includes(item.slug) ? ' from' : ' to'} saved components`}
                      aria-pressed={savedSlugs.includes(item.slug)}
                    >
                      <Heart size={14} fill={savedSlugs.includes(item.slug) ? 'currentColor' : 'none'} aria-hidden="true" />
                    </button>
                    <button
                      type="button"
                      className="list-copy-command"
                      onClick={() => copyCommand(item.slug)}
                      aria-label={`Copy install command for ${item.title}`}
                    >
                      {copiedSlug === item.slug ? <Check size={13} aria-hidden="true" /> : <Copy size={13} aria-hidden="true" />}
                      <span>{copiedSlug === item.slug ? 'Copied' : 'Copy CLI'}</span>
                    </button>
                    <a
                      className="list-open"
                      href={`/previews/${item.slug}`}
                      onClick={() => playUiSound('preview')}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Preview ${item.title} in a new tab`}
                      title="Open live preview in a new tab"
                    >
                      <ExternalLink size={15} aria-hidden="true" />
                    </a>
                  </article>
                ))}
              </div>

              {visibleLimit < filteredComponents.length && (
                <div ref={sentinelRef} className="catalog-load-sentinel">
                  <button
                    type="button"
                    onClick={() => setVisibleLimit((prev) => Math.min(prev + BATCH_INCREMENT, filteredComponents.length))}
                    className="catalog-load-more-btn"
                    aria-label={`Load more components (${filteredComponents.length - visibleLimit} remaining)`}
                  >
                    <span>Showing {displayedComponents.length} of {filteredComponents.length} components</span>
                    <small>Scroll down to reveal more</small>
                  </button>
                </div>
              )}
            </>
          )
        ) : (
          <div className="catalog-empty">
            <span>{savedOnly ? 'YOUR SHORTLIST' : 'NO MATCHES'}</span>
            <strong>{savedOnly && savedSlugs.length === 0 ? 'Save a few to start.' : 'Nothing here just yet.'}</strong>
            <p>{savedOnly && savedSlugs.length === 0 ? 'Tap the heart on any component and it will be waiting here.' : 'Try a different search or clear the selected filters.'}</p>
            <button
              type="button"
              onClick={() => { setSearchQuery(''); setSelectedCategory('All components'); setSavedOnly(false) }}
            >
              {savedOnly && savedSlugs.length === 0 ? 'Browse all components' : 'Reset filters'} <ArrowRight size={13} aria-hidden="true" />
            </button>
          </div>
        )}
      </section>

      {paletteOpen && (
        <div className="search-overlay" onMouseDown={(event) => { if (event.target === event.currentTarget) closeSearch() }}>
          <div className="search-dialog" role="dialog" aria-modal="true" aria-label="Component search dialog">
            <div className="search-dialog-input">
              <Search size={17} aria-hidden="true" />
              <input
                autoFocus
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Find a component..."
                aria-label="Find a component by name, category, or tag"
              />
              <button type="button" onClick={closeSearch} aria-label="Close search">
                <X size={16} aria-hidden="true" />
              </button>
            </div>
            <div className="search-results">
              {visibleSearchResults.map((item) => (
                <a key={item.slug} href={`/components/${item.slug}`} aria-label={`${item.title} — ${item.category}`}>
                  <Image src={item.previewImage} alt="" width={108} height={76} sizes="54px" />
                  <span>
                    <strong>{item.title}</strong>
                    <small>{item.category}</small>
                  </span>
                  <ArrowUpRight size={14} aria-hidden="true" />
                </a>
              ))}
              {visibleSearchResults.length === 0 && (
                <p className="search-empty">No components found. Try another phrase.</p>
              )}
            </div>
            <div className="search-hint">
              <span>Search by title, style, or category</span>
              <kbd aria-hidden="true">ESC</kbd>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
