'use client'

import { useEffect, useMemo, useState } from 'react'
import { createPortal } from 'react-dom'
import Image from 'next/image'
import { Check, Command, Copy, Search, X, ArrowUpRight } from 'lucide-react'
import { installCommand, type ComponentEntry } from '@/config/components'
import { playUiSound } from './ui-sounds'

export function HomeSearch({ items }: { items: ComponentEntry[] }) {
  const [query, setQuery] = useState('')
  const [open, setOpen] = useState(false)
  const results = useMemo(() => {
    const value = query.trim().toLowerCase()
    return items.filter((item) => !value || `${item.title} ${item.description} ${item.category} ${item.tags.join(' ')}`.toLowerCase().includes(value)).slice(0, 7)
  }, [items, query])

  function openSearch() {
    setOpen(true)
    playUiSound('open')
  }

  function closeSearch() {
    setOpen(false)
    playUiSound('close')
  }

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault()
        playUiSound(open ? 'close' : 'open')
        setOpen((value) => !value)
      }
      if (event.key === 'Escape' && open) closeSearch()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  return <>
    <button className="nav-search" onClick={openSearch} aria-label="Search components"><Search size={15} /><span>Search</span><kbd><Command size={10} /> K</kbd></button>
    {open && createPortal(<div className="search-overlay" onMouseDown={(event) => { if (event.target === event.currentTarget) closeSearch() }}>
      <div className="search-dialog" role="dialog" aria-modal="true" aria-label="Search components">
        <div className="search-dialog-input"><Search size={17} /><input autoFocus value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Find a component..." /><button onClick={closeSearch} aria-label="Close search"><X size={16} /></button></div>
        <div className="search-results">{results.map((item) => <a key={item.slug} href={`/components/${item.slug}`}><Image src={item.previewImage} alt="" width={108} height={76} sizes="54px" /><span><strong>{item.title}</strong><small>{item.category}</small></span><ArrowUpRight size={14} /></a>)}{results.length === 0 && <p className="search-empty">No components found. Try another phrase.</p>}</div>
        <div className="search-hint"><span>Search by title, style, or category</span><kbd>ESC</kbd></div>
      </div>
    </div>, document.body)}
  </>
}

export function CopyInstallCommand() {
  const [copied, setCopied] = useState(false)
  async function copy() {
    try {
      await navigator.clipboard.writeText(installCommand('admit-one-3-d-holographic-ticket'))
      playUiSound('copy')
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    } catch { setCopied(false) }
  }
  return <button onClick={copy} aria-label="Copy install command">{copied ? <Check size={14} /> : <Copy size={14} />}</button>
}
