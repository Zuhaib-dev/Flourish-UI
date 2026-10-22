'use client'

import React, { useRef, useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowLeft, ArrowRight, X, Eye } from 'lucide-react'

export interface RitualItem {
  id: string
  time: string
  timeMinutes: number
  title: string
  shortAction: string
  description: string
  tag: string
  tagBg: string
  tagText: string
  cardBg: string
  imageSrc: string
  edition: string
  dimensions: string
  palette: string[]
  notes: string
}

export const DEFAULT_RITUALS: RitualItem[] = [
  {
    id: 'brew',
    time: '07:45',
    timeMinutes: 465,
    title: 'Brew',
    shortAction: 'brew coffee',
    description: 'Moka on the smallest flame. The gurgle is the actual alarm.',
    tag: 'KITCHEN',
    tagBg: '#b4cddc',
    tagText: '#274355',
    cardBg: '#40769b',
    imageSrc: '/moka-pot.jpg',
    edition: '41 / 50',
    dimensions: '240 × 300 mm',
    palette: ['#40769b', '#fdfbf7', '#181715'],
    notes: 'Dedicated to the morning espresso ritual. Stipple screen angle set to 45° for rich mechanical texture.',
  },
  {
    id: 'breakfast',
    time: '08:00',
    timeMinutes: 480,
    title: 'Breakfast',
    shortAction: 'breakfast',
    description: 'Two eggs, soft. The third one is for whoever shows up.',
    tag: 'EAT',
    tagBg: '#f6b2a0',
    tagText: '#6a1e0f',
    cardBg: '#f03f19',
    imageSrc: '/egg-carton.jpg',
    edition: '19 / 50',
    dimensions: '240 × 300 mm',
    palette: ['#f03f19', '#55768e', '#fbf8f2'],
    notes: 'Warm Cadmium Red background flood with dual-tone pulp carton shading in steel blue.',
  },
  {
    id: 'wake-up',
    time: '07:00',
    timeMinutes: 420,
    title: 'Wake up',
    shortAction: 'wake up',
    description: 'The bell rings once. You let it ring twice more, out of principle.',
    tag: 'SOUND',
    tagBg: '#a9c7d8',
    tagText: '#1e3e50',
    cardBg: '#488ca6',
    imageSrc: '/alarm-clock.jpg',
    edition: '12 / 50',
    dimensions: '240 × 300 mm',
    palette: ['#ea421b', '#f4ede2', '#181715'],
    notes: 'Printed using Fluorescent Red and Federal Blue risograph drums on warm Fabriano Unica 250gsm paper.',
  },
  {
    id: 'get-dressed',
    time: '07:10',
    timeMinutes: 430,
    title: 'Get dressed',
    shortAction: 'get dressed',
    description: 'Same socks as yesterday. Different day, so it counts as an outfit.',
    tag: 'WEAR',
    tagBg: '#e3bcd7',
    tagText: '#5a234b',
    cardBg: '#cf81b7',
    imageSrc: '/socks.jpg',
    edition: '27 / 50',
    dimensions: '240 × 300 mm',
    palette: ['#cf81b7', '#938936', '#181715'],
    notes: 'Two-pass soy-based ink with manual registration offset to honor authentic tactile printing imperfections.',
  },
  {
    id: 'walk-the-dog',
    time: '07:20',
    timeMinutes: 440,
    title: 'Walk the dog',
    shortAction: 'walk the dog',
    description: 'Twenty minutes, one block, four stops. He decides the route.',
    tag: 'OUTSIDE',
    tagBg: '#b8c59f',
    tagText: '#384624',
    cardBg: '#a18b38',
    imageSrc: '/walk-dog.jpg',
    edition: '08 / 50',
    dimensions: '240 × 300 mm',
    palette: ['#a18b38', '#ea86a4', '#181715'],
    notes: 'Features Hunter Green and Coral riso inks layered to create rich mossy foliage midtones.',
  },
]

export interface TimelineTick {
  label: string
  minutes: number
  ritualId?: string
}

export const TIMELINE_TICKS: TimelineTick[] = [
  { label: '07:00', minutes: 420, ritualId: 'wake-up' },
  { label: '07:10', minutes: 430, ritualId: 'get-dressed' },
  { label: '07:20', minutes: 440, ritualId: 'walk-the-dog' },
  { label: '07:45', minutes: 465, ritualId: 'brew' },
  { label: '08:00', minutes: 480, ritualId: 'breakfast' },
  { label: '09:00', minutes: 540 },
]

export interface MorningMostlyRitualsProps {
  rituals?: RitualItem[]
  brandName?: string
  headlineMain?: string
  headlineAccent?: string
  headlineEnd?: string
  description?: string
  scrollCta?: string
  printDetails?: string
  attributionText?: string
  attributionUrl?: string
  className?: string
}

export function MorningMostlyRituals({
  rituals = DEFAULT_RITUALS,
  brandName = 'MORNING, MOSTLY',
  headlineMain = 'Five small rituals',
  headlineAccent = 'before',
  headlineEnd = 'nine a.m.',
  description = 'A print series about the hour that belongs to no one else. Scroll sideways to walk through the morning.',
  scrollCta = 'SCROLL TO MOVE TIME ──→',
  printDetails = 'Risograph, 3 colours per print · 240 × 300 mm · edition of 50',
  attributionText = 'Made at Tubik Studio, mostly in the morning',
  attributionUrl = 'https://flourish-ui.vercel.app',
  className = '',
}: MorningMostlyRitualsProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  // Default to index 2 (Wake up, 07:00) so it matches the reference screenshot composition
  const [activeIndex, setActiveIndex] = useState<number>(2)
  const [selectedRitual, setSelectedRitual] = useState<RitualItem | null>(null)
  const [isDragging, setIsDragging] = useState(false)
  const [startX, setStartX] = useState(0)
  const [scrollLeftState, setScrollLeftState] = useState(0)

  const activeRitual = rituals[activeIndex] || rituals[2] || rituals[0]

  // Track which card is closest to focus
  const handleScroll = useCallback(() => {
    const el = scrollContainerRef.current
    if (!el) return

    const cardElements = el.querySelectorAll<HTMLElement>('[data-ritual-card]')
    if (cardElements.length === 0) return

    let closestIdx = 0
    let minDistance = Infinity
    // Focus zone is around 40% from the left edge of the viewport
    const focusTarget = el.getBoundingClientRect().left + el.clientWidth * 0.42

    cardElements.forEach((card, idx) => {
      const rect = card.getBoundingClientRect()
      const cardCenter = rect.left + rect.width / 2
      const dist = Math.abs(focusTarget - cardCenter)
      if (dist < minDistance) {
        minDistance = dist
        closestIdx = idx
      }
    })

    setActiveIndex(closestIdx)
  }, [])

  // Initial scroll position: center "Wake up" card
  useEffect(() => {
    const el = scrollContainerRef.current
    if (!el) return

    const cardElements = el.querySelectorAll<HTMLElement>('[data-ritual-card]')
    if (cardElements[2]) {
      const card = cardElements[2]
      const targetScroll = card.offsetLeft - (el.clientWidth * 0.42 - card.clientWidth / 2)
      el.scrollLeft = Math.max(0, targetScroll)
    }

    // Convert mouse wheel vertical delta to horizontal scroll
    const onWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault()
        el.scrollLeft += e.deltaY * 1.15
      }
    }

    el.addEventListener('scroll', handleScroll, { passive: true })
    el.addEventListener('wheel', onWheel, { passive: false })

    handleScroll()

    return () => {
      el.removeEventListener('scroll', handleScroll)
      el.removeEventListener('wheel', onWheel)
    }
  }, [handleScroll])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedRitual) {
        if (e.key === 'Escape') setSelectedRitual(null)
        return
      }
      if (e.key === 'ArrowRight') {
        scrollToIndex(Math.min(activeIndex + 1, rituals.length - 1))
      } else if (e.key === 'ArrowLeft') {
        scrollToIndex(Math.max(activeIndex - 1, 0))
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [activeIndex, selectedRitual, rituals.length])

  // Scroll smoothly to a specific card index
  const scrollToIndex = (idx: number) => {
    const el = scrollContainerRef.current
    if (!el) return
    const cardElements = el.querySelectorAll<HTMLElement>('[data-ritual-card]')
    if (cardElements[idx]) {
      const card = cardElements[idx]
      const targetScroll = card.offsetLeft - (el.clientWidth * 0.42 - card.clientWidth / 2)
      el.scrollTo({ left: Math.max(0, targetScroll), behavior: 'smooth' })
    }
  }

  // Scroll to a specific ritual by ID
  const scrollToRitualId = (id: string) => {
    const idx = rituals.findIndex((r) => r.id === id)
    if (idx !== -1) {
      scrollToIndex(idx)
    }
  }

  // Touch & Mouse Drag to Scroll handlers
  const onMouseDown = (e: React.MouseEvent) => {
    const el = scrollContainerRef.current
    if (!el) return
    setIsDragging(true)
    setStartX(e.pageX - el.offsetLeft)
    setScrollLeftState(el.scrollLeft)
  }

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return
    e.preventDefault()
    const el = scrollContainerRef.current
    if (!el) return
    const x = e.pageX - el.offsetLeft
    const walk = (x - startX) * 1.35
    el.scrollLeft = scrollLeftState - walk
  }

  const onMouseUpOrLeave = () => {
    setIsDragging(false)
  }

  return (
    <div
      className={`min-h-screen w-full bg-[#ede4d4] riso-paper-texture text-[#161513] flex flex-col justify-between selection:bg-[#ea421b] selection:text-white relative select-none ${className}`}
    >
      {/* 1. TOP HEADER & NAVIGATION */}
      <header className="w-full px-6 sm:px-10 lg:px-14 pt-8 pb-4 flex items-center justify-between border-b border-[#d8cdbc]/50">
        {/* Brand Logo */}
        <div className="flex items-center gap-2">
          <span className="text-xl sm:text-2xl font-black tracking-[-0.03em] uppercase text-[#161513]">
            {brandName}
          </span>
          <span className="w-2.5 h-2.5 rounded-full bg-[#ea421b] inline-block animate-pulse" />
        </div>

        {/* Center Nav Links */}
        <nav className="hidden md:flex items-center gap-9 lg:gap-12 text-[12px] font-bold tracking-[0.22em] text-[#161513]/75">
          <a
            href="#rituals"
            className="hover:text-[#ea421b] transition-colors uppercase cursor-pointer"
          >
            RITUALS
          </a>
          <a
            href="#prints"
            onClick={(e) => {
              e.preventDefault()
              if (activeRitual) setSelectedRitual(activeRitual)
            }}
            className="hover:text-[#ea421b] transition-colors uppercase cursor-pointer"
          >
            PRINTS
          </a>
          <a
            href="#shop"
            className="hover:text-[#ea421b] transition-colors uppercase cursor-pointer"
          >
            SHOP
          </a>
          <a
            href="#about"
            className="hover:text-[#ea421b] transition-colors uppercase cursor-pointer"
          >
            ABOUT
          </a>
        </nav>

        {/* Right Active Time Indicator */}
        <div className="flex items-center gap-2 text-sm sm:text-base">
          <span className="font-mono-time font-semibold text-[#ea421b] tracking-tight">
            {activeRitual.time}
          </span>
          <span className="text-[#161513]/85 font-medium lowercase">
            {activeRitual.shortAction}
          </span>
        </div>
      </header>

      {/* 2. HERO HEADLINE & EDITORIAL INTRO */}
      <section className="w-full px-6 sm:px-10 lg:px-14 pt-8 sm:pt-10 pb-6 grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
        {/* Massive Editorial Headline */}
        <div className="lg:col-span-7">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[72px] xl:text-[80px] font-black tracking-[-0.04em] leading-[0.95] text-[#161513]">
            <span className="block">{headlineMain}</span>
            <span className="block">
              <span className="text-[#ea421b] mr-3">{headlineAccent}</span>
              <span>{headlineEnd}</span>
            </span>
          </h1>
        </div>

        {/* Right Intro Description & Scroll CTA */}
        <div className="lg:col-span-5 flex flex-col justify-end space-y-4">
          <p className="text-[14.5px] sm:text-[15.5px] text-[#161513]/80 leading-relaxed font-normal max-w-md">
            {description}
          </p>

          {/* Interactive Scroll Indicator */}
          <div className="flex items-center justify-between pt-2">
            <button
              type="button"
              onClick={() => scrollToIndex(Math.min(activeIndex + 1, rituals.length - 1))}
              className="group flex items-center gap-3 text-[11px] font-bold tracking-[0.24em] text-[#161513]/70 hover:text-[#ea421b] uppercase transition-colors cursor-pointer"
            >
              <span>{scrollCta}</span>
            </button>
          </div>
        </div>
      </section>

      {/* 3. HORIZONTAL SCROLL GALLERY OF RISOGRAPH PRINTS */}
      <section className="w-full relative py-4 sm:py-6 overflow-hidden">
        <div
          ref={scrollContainerRef}
          onMouseDown={onMouseDown}
          onMouseMove={onMouseMove}
          onMouseUp={onMouseUpOrLeave}
          onMouseLeave={onMouseUpOrLeave}
          className={`w-full overflow-x-auto no-scrollbar flex items-stretch gap-6 sm:gap-8 lg:gap-10 px-6 sm:px-10 lg:px-14 scroll-smooth ${
            isDragging ? 'cursor-grabbing select-none' : 'cursor-grab'
          }`}
        >
          {rituals.map((ritual, idx) => {
            const isActive = idx === activeIndex

            return (
              <div
                key={ritual.id}
                data-ritual-card
                onClick={() => setSelectedRitual(ritual)}
                className="w-[280px] sm:w-[310px] md:w-[335px] lg:w-[350px] shrink-0 flex flex-col justify-between group cursor-pointer"
              >
                {/* Print Art Frame */}
                <div
                  className="w-full aspect-[3/4] relative overflow-hidden transition-all duration-300 shadow-sm group-hover:shadow-xl group-hover:-translate-y-1"
                  style={{ backgroundColor: ritual.cardBg }}
                >
                  <Image
                    src={ritual.imageSrc}
                    alt={`${ritual.title} - ${ritual.time}`}
                    fill
                    className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-103"
                    sizes="(max-width: 768px) 310px, 360px"
                    priority={idx < 4}
                  />

                  {/* Risograph Registration Edge */}
                  <div className="absolute inset-0 border border-black/10 pointer-events-none" />

                  {/* Hover Inspect Pill */}
                  <div className="absolute top-3 right-3 bg-black/80 backdrop-blur-xs text-white text-[10px] font-bold tracking-widest px-2.5 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1.5">
                    <Eye className="w-3 h-3 text-[#ea421b]" />
                    <span>INSPECT</span>
                  </div>
                </div>

                {/* Card Details Underneath */}
                <div className="pt-4 pb-2 space-y-2">
                  {/* Time + Title Row */}
                  <div className="flex items-baseline gap-2.5">
                    <span className="font-mono-time text-[13px] font-semibold text-[#ea421b]">
                      {ritual.time}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#161513] group-hover:text-[#ea421b] transition-colors">
                      {ritual.title}
                    </h3>
                  </div>

                  {/* Poetic 2-line Description */}
                  <p className="text-[13px] sm:text-[13.5px] text-[#736c61] leading-snug line-clamp-2">
                    {ritual.description}
                  </p>

                  {/* Category Pill Tag */}
                  <div className="pt-1">
                    <span
                      className="inline-block text-[10px] font-extrabold tracking-[0.16em] uppercase px-2.5 py-0.5 rounded-full"
                      style={{
                        backgroundColor: ritual.tagBg,
                        color: ritual.tagText,
                      }}
                    >
                      {ritual.tag}
                    </span>
                  </div>
                </div>
              </div>
            )
          })}

          {/* Spacer at the end for comfortable right-edge scrolling */}
          <div className="w-8 sm:w-16 shrink-0" />
        </div>
      </section>

      {/* 4. BOTTOM INTERACTIVE TIMELINE & FOOTER METADATA */}
      <footer className="w-full px-6 sm:px-10 lg:px-14 pt-4 pb-8 border-t border-[#d8cdbc]/70 flex flex-col md:flex-row items-center justify-between gap-6 text-[12px] text-[#736c61]">
        {/* Left Print Technical Specification */}
        <div className="font-normal tracking-wide text-center md:text-left order-2 md:order-1">
          {printDetails}
        </div>

        {/* Center Interactive Timeline */}
        <div className="w-full max-w-xl flex flex-col items-center order-1 md:order-2">
          <div className="w-full relative py-2">
            {/* Horizontal Timeline Rule */}
            <div className="w-full h-[1px] bg-[#d8cdbc] absolute top-1/2 -translate-y-1/2 left-0 right-0" />

            {/* Tick Markers */}
            <div className="relative flex justify-between items-center z-5">
              {TIMELINE_TICKS.map((tick) => {
                const isSelected = tick.ritualId && activeRitual.id === tick.ritualId

                return (
                  <button
                    key={tick.label}
                    type="button"
                    onClick={() => {
                      if (tick.ritualId) scrollToRitualId(tick.ritualId)
                    }}
                    className={`flex flex-col items-center relative group cursor-pointer ${
                      tick.ritualId ? 'hover:scale-105' : 'cursor-default'
                    }`}
                  >
                    {/* Active Circular Red Bead */}
                    {isSelected && (
                      <span className="w-2.5 h-2.5 rounded-full bg-[#ea421b] absolute -top-3 shadow-xs" />
                    )}

                    {/* Vertical Tick Notch */}
                    <span
                      className={`w-[1px] h-2.5 transition-colors ${
                        isSelected
                          ? 'bg-[#ea421b]'
                          : 'bg-[#b8ab98] group-hover:bg-[#161513]'
                      }`}
                    />

                    {/* Tick Label */}
                    <span
                      className={`text-[10px] font-mono-time mt-1.5 transition-colors ${
                        isSelected
                          ? 'text-[#ea421b] font-bold'
                          : 'text-[#736c61] group-hover:text-[#161513]'
                      }`}
                    >
                      {tick.label}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>
        </div>

        {/* Right Attribution & Studio Credits */}
        <div className="text-center md:text-right order-3">
          <a
            href={attributionUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#161513] transition-colors border-b border-transparent hover:border-[#161513] pb-0.5"
          >
            {attributionText}
          </a>
        </div>
      </footer>

      {/* 5. MODAL: DETAILED EDITION INSPECTOR (WHEN A PRINT IS CLICKED) */}
      <AnimatePresence>
        {selectedRitual && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
            onClick={() => setSelectedRitual(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 15 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#ede4d4] riso-paper-texture border border-[#d8cdbc] rounded-md max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8 relative text-[#161513]"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedRitual(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#f2ece2] hover:bg-[#d8cdbc] flex items-center justify-center transition-colors cursor-pointer"
                title="Close"
              >
                <X className="w-4 h-4 text-[#161513]" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Print Image */}
                <div
                  className="w-full aspect-[3/4] relative overflow-hidden shadow-lg border border-black/10"
                  style={{ backgroundColor: selectedRitual.cardBg }}
                >
                  <Image
                    src={selectedRitual.imageSrc}
                    alt={selectedRitual.title}
                    fill
                    className="object-cover object-center"
                    sizes="400px"
                  />
                </div>

                {/* Print Curatorial Details */}
                <div className="space-y-5">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-mono-time text-sm font-semibold text-[#ea421b]">
                        {selectedRitual.time}
                      </span>
                      <span
                        className="text-[10px] font-extrabold tracking-widest uppercase px-2 py-0.5 rounded-full"
                        style={{
                          backgroundColor: selectedRitual.tagBg,
                          color: selectedRitual.tagText,
                        }}
                      >
                        {selectedRitual.tag}
                      </span>
                    </div>
                    <h2 className="text-3xl font-extrabold tracking-tight text-[#161513]">
                      {selectedRitual.title}
                    </h2>
                  </div>

                  <p className="text-base text-[#161513]/85 italic font-serif leading-relaxed">
                    "{selectedRitual.description}"
                  </p>

                  <div className="border-t border-[#d8cdbc] pt-4 space-y-2 text-xs text-[#736c61]">
                    <div className="flex justify-between py-1 border-b border-[#d8cdbc]/50">
                      <span className="font-bold text-[#161513]">Edition</span>
                      <span className="font-mono-time">{selectedRitual.edition}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-[#d8cdbc]/50">
                      <span className="font-bold text-[#161513]">Sheet Dimensions</span>
                      <span className="font-mono-time">{selectedRitual.dimensions}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-[#d8cdbc]/50">
                      <span className="font-bold text-[#161513]">Color Inks</span>
                      <div className="flex items-center gap-1.5">
                        {selectedRitual.palette.map((c, i) => (
                          <span
                            key={i}
                            className="w-3.5 h-3.5 rounded-full border border-black/20"
                            style={{ backgroundColor: c }}
                            title={c}
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  <p className="text-[12px] text-[#736c61] leading-relaxed">
                    {selectedRitual.notes}
                  </p>

                  <div className="pt-2">
                    <button
                      type="button"
                      onClick={() => setSelectedRitual(null)}
                      className="w-full py-2.5 px-4 bg-[#161513] hover:bg-[#ea421b] text-white text-xs font-bold tracking-widest uppercase rounded-sm transition-colors cursor-pointer"
                    >
                      Back to Series
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
