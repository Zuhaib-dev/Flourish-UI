'use client'

import { useEffect, useMemo, useState } from 'react'
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
  Search,
  Terminal,
  X,
} from 'lucide-react'
import { categories, components, installCommand, stats } from '@/config/components'
import { playUiSound } from '../ui-sounds'

export default function CatalogBrowser() {
  const [selectedCategory, setSelectedCategory] = useState('All components')
  const [searchQuery, setSearchQuery] = useState('')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [copiedSlug, setCopiedSlug] = useState<string | null>(null)
  const [paletteOpen, setPaletteOpen] = useState(false)
  const [savedSlugs, setSavedSlugs] = useState<string[]>([])
  const [savedReady, setSavedReady] = useState(false)
  const [savedOnly, setSavedOnly] = useState(false)

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
  }), [selectedCategory, searchQuery, savedOnly, savedSlugs])

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
      <button className="catalog-search-trigger catalog-island-search" onClick={openSearch}><Search size={14} /><span>Search library</span><kbd><Command size={10} /> K</kbd></button>
        <section className="catalog-browser" aria-label="Browse component collection">
          <div className="catalog-toolbar">
            <div className="catalog-toolbar-title"><span>01</span><div><strong>Browse the collection</strong><small>{filteredComponents.length} {filteredComponents.length === 1 ? 'result' : 'results'}</small></div></div>
            <div className="catalog-controls">
              <label className="catalog-search"><Search size={14} /><input value={searchQuery} onChange={(event) => setSearchQuery(event.target.value)} placeholder="Search components" aria-label="Search components" />{searchQuery && <button onClick={() => setSearchQuery('')} aria-label="Clear search"><X size={13} /></button>}</label>
              <button className={`saved-filter${savedOnly ? ' selected' : ''}`} onClick={() => setSavedOnly((active) => !active)} aria-pressed={savedOnly}><Heart size={13} fill={savedOnly ? 'currentColor' : 'none'} /><span>Saved</span><span>{savedSlugs.length}</span></button>
              <div className="catalog-view-switch" aria-label="View mode"><button onClick={() => setViewMode('grid')} className={viewMode === 'grid' ? 'selected' : ''} aria-label="Grid view"><LayoutGrid size={15} /></button><button onClick={() => setViewMode('list')} className={viewMode === 'list' ? 'selected' : ''} aria-label="List view"><List size={15} /></button></div>
            </div>
          </div>

          <div className="catalog-category-row"><span className="category-label">FILTER BY</span><div className="catalog-categories">{categories.map((category) => <button key={category} onClick={() => { if (category !== selectedCategory) playUiSound('tab'); setSelectedCategory(category) }} className={selectedCategory === category ? 'selected' : ''}>{category}<span>{categoryCounts[category] ?? 0}</span></button>)}</div></div>

          {filteredComponents.length ? viewMode === 'grid' ? (
            <div className="premium-card-grid">
              
                {filteredComponents.map((item, index) => (
                  <article key={item.slug} className="premium-component-card">
                    <div className="premium-card-visual"><a href={`/components/${item.slug}`} className="premium-card-image"><Image src={item.previewImage} alt={item.title} fill sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw" loading="lazy" /><span className="card-image-index">{String(index + 1).padStart(2, '0')} <ArrowUpRight size={13} /></span></a><a className="card-open-new-tab" href={`/previews/${item.slug}`} target="_blank" rel="noopener noreferrer" aria-label={`Preview ${item.title} in a new tab`} title="Open live preview in a new tab"><ExternalLink size={14} /><span>Live preview</span></a><button className={`save-component${savedSlugs.includes(item.slug) ? ' is-saved' : ''}`} onClick={() => toggleSaved(item.slug)} aria-label={`${savedSlugs.includes(item.slug) ? 'Remove' : 'Save'} ${item.title}${savedSlugs.includes(item.slug) ? ' from' : ' to'} saved components`} aria-pressed={savedSlugs.includes(item.slug)} title={savedSlugs.includes(item.slug) ? 'Remove from saved' : 'Save component'}><Heart size={15} fill={savedSlugs.includes(item.slug) ? 'currentColor' : 'none'} /></button></div>
                    <div className="premium-card-content"><div className="premium-card-category"><span>{item.category}</span><span>{item.dependencies.length ? `${item.dependencies.length} packages` : 'No dependencies'}</span></div><a href={`/components/${item.slug}`} className="premium-card-title">{item.title}</a><p>{item.description}</p><div className="premium-card-footer"><a href={`/components/${item.slug}`}>Explore component <ArrowRight size={13} /></a><button onClick={() => copyCommand(item.slug)} aria-label={`Copy install command for ${item.title}`}>{copiedSlug === item.slug ? <Check size={13} /> : <Copy size={13} />}<span>{copiedSlug === item.slug ? 'Copied' : 'Copy CLI'}</span></button></div></div>
                  </article>
                ))}
              
            </div>
          ) : (
            <div className="premium-list">{filteredComponents.map((item, index) => <article key={item.slug} className="premium-list-row"><span className="list-index">{String(index + 1).padStart(2, '0')}</span><a href={`/components/${item.slug}`} className="list-thumb"><Image src={item.previewImage} alt="" fill sizes="72px" loading="lazy" /></a><div className="list-copy"><a href={`/components/${item.slug}`}>{item.title}</a><p>{item.description}</p></div><span className="list-category">{item.category}</span><button className="list-save" onClick={() => toggleSaved(item.slug)} aria-label={`${savedSlugs.includes(item.slug) ? 'Remove' : 'Save'} ${item.title}${savedSlugs.includes(item.slug) ? ' from' : ' to'} saved components`} aria-pressed={savedSlugs.includes(item.slug)}><Heart size={14} fill={savedSlugs.includes(item.slug) ? 'currentColor' : 'none'} /></button><button className="list-copy-command" onClick={() => copyCommand(item.slug)} aria-label={`Copy install command for ${item.title}`}>{copiedSlug === item.slug ? <Check size={13} /> : <Copy size={13} />}<span>{copiedSlug === item.slug ? 'Copied' : 'Copy CLI'}</span></button><a className="list-open" href={`/previews/${item.slug}`} target="_blank" rel="noopener noreferrer" aria-label={`Preview ${item.title} in a new tab`} title="Open live preview in a new tab"><ExternalLink size={15} /></a></article>)}</div>
          ) : <div className="catalog-empty"><span>{savedOnly ? 'YOUR SHORTLIST' : 'NO MATCHES'}</span><strong>{savedOnly && savedSlugs.length === 0 ? 'Save a few to start.' : 'Nothing here just yet.'}</strong><p>{savedOnly && savedSlugs.length === 0 ? 'Tap the heart on any component and it will be waiting here.' : 'Try a different search or clear the selected filters.'}</p><button onClick={() => { setSearchQuery(''); setSelectedCategory('All components'); setSavedOnly(false) }}>{savedOnly && savedSlugs.length === 0 ? 'Browse all components' : 'Reset filters'} <ArrowRight size={13} /></button></div>}
        </section>
      {paletteOpen && <div className="search-overlay" onMouseDown={(event) => { if (event.target === event.currentTarget) closeSearch() }}><div className="search-dialog"><div className="search-dialog-input"><Search size={17} /><input autoFocus value={searchQuery} onChange={(event) => setSearchQuery(event.target.value)} placeholder="Find a component..." /><button onClick={closeSearch} aria-label="Close search"><X size={16} /></button></div><div className="search-results">{visibleSearchResults.map((item) => <a key={item.slug} href={`/components/${item.slug}`}><Image src={item.previewImage} alt="" width={108} height={76} sizes="54px" /><span><strong>{item.title}</strong><small>{item.category}</small></span><ArrowUpRight size={14} /></a>)}{visibleSearchResults.length === 0 && <p className="search-empty">No components found. Try another phrase.</p>}</div><div className="search-hint"><span>Search by title, style, or category</span><kbd>ESC</kbd></div></div></div>}
    </>
  )
}
