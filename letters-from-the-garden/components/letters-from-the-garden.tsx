'use client'

import React, { useState } from 'react'
import { ArrowRight, Check, Sparkles, Wind } from 'lucide-react'

export interface NavigationLink {
  label: string
  href: string
}

export interface LettersFromTheGardenProps {
  brandName?: string
  title?: string
  description?: string
  newsletterPlaceholder?: string
  copyrightText?: string
  artworkSrc?: string
  onSubscribe?: (email: string) => Promise<void> | void
  navigation?: NavigationLink[]
  socials?: NavigationLink[]
  legal?: NavigationLink[]
  className?: string
}

export function LettersFromTheGarden({
  brandName = 'MORROW',
  title = 'Letters from the garden',
  description = 'Occasional notes from the garden, seasonal stories, and quiet things worth sharing.',
  newsletterPlaceholder = 'Your email address',
  copyrightText = '© 2026 MORROW',
  artworkSrc = '/garden-clothesline.jpg',
  onSubscribe,
  navigation = [
    { label: 'About', href: '#about' },
    { label: 'Retreat', href: '#retreat' },
    { label: 'Journal', href: '#journal' },
    { label: 'Visit', href: '#visit' },
  ],
  socials = [
    { label: 'TikTok', href: 'https://tiktok.com' },
    { label: 'Instagram', href: 'https://instagram.com' },
    { label: 'Twitter', href: 'https://twitter.com' },
    { label: 'Contact', href: '#contact' },
  ],
  legal = [
    { label: 'Privacy', href: '#privacy' },
    { label: 'Terms', href: '#terms' },
    { label: 'Cookie', href: '#cookie' },
  ],
  className = '',
}: LettersFromTheGardenProps) {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [breezeActive, setBreezeActive] = useState(false)
  const [activeCloth, setActiveCloth] = useState<number | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || isSubmitting) return

    setIsSubmitting(true)
    if (onSubscribe) {
      await onSubscribe(email)
    } else {
      // Simulate pleasant natural delay
      await new Promise((resolve) => setTimeout(resolve, 600))
    }
    setIsSubmitting(false)
    setSubscribed(true)
  }

  const triggerBreeze = () => {
    setBreezeActive(true)
    setTimeout(() => setBreezeActive(false), 2400)
  }

  return (
    <footer
      className={`relative w-full overflow-hidden bg-[#f6efe7] text-[#323c33] pt-12 sm:pt-16 lg:pt-20 transition-colors select-none ${className}`}
      role="contentinfo"
      aria-label="Footer and garden newsletter"
    >
      {/* ── Ambient Petal Breeze Particles ──────────────── */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden opacity-60">
        <span
          className="absolute top-1/4 left-3/4 w-2 h-2.5 rounded-full bg-[#d8b4e2]/60 blur-[0.4px]"
          style={{ animation: 'float-petal 14s linear infinite', animationDelay: '0s' }}
        />
        <span
          className="absolute top-1/3 left-1/2 w-1.5 h-2 rounded-full bg-[#fef08a]/70 blur-[0.3px]"
          style={{ animation: 'float-petal 18s linear infinite', animationDelay: '4s' }}
        />
        <span
          className="absolute top-1/2 left-4/5 w-2.5 h-2 rounded-full bg-[#bbf7d0]/50 blur-[0.4px]"
          style={{ animation: 'float-petal 16s linear infinite', animationDelay: '8s' }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* ── Top Row: Newsletter & Navigation Grid ──────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* Left Column: Newsletter Subscription */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <h2 className="font-editorial text-2xl sm:text-3xl lg:text-[34px] font-medium tracking-tight text-[#323c33] leading-snug">
                {title}
              </h2>
              <p className="mt-2 text-xs sm:text-[13px] text-[#7e7b74] max-w-sm leading-relaxed font-normal">
                {description}
              </p>

              {/* Email Form */}
              <div className="mt-6 sm:mt-7">
                {subscribed ? (
                  <div className="flex items-center gap-2 py-2 text-xs sm:text-[13px] text-[#426149] font-medium">
                    <Check className="w-4 h-4 text-[#426149]" />
                    <span>Thank you. Letters from the garden will find your inbox soon.</span>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-2 max-w-xs">
                    <div className="relative flex items-center border-b border-[#323c33]/30 hover:border-[#323c33]/70 focus-within:border-[#426149] transition-colors pb-1.5 group">
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder={newsletterPlaceholder}
                        className="w-full bg-transparent text-xs sm:text-[13px] text-[#323c33] placeholder:text-[#9c968c] focus:outline-none pr-8 py-0.5"
                        aria-label="Email address for garden notes"
                      />
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="absolute right-0 text-[#323c33]/80 hover:text-[#426149] disabled:opacity-50 transition-transform duration-200 hover:translate-x-1 cursor-pointer p-0.5"
                        title="Subscribe"
                        aria-label="Subscribe to garden notes"
                      >
                        {isSubmitting ? (
                          <span className="inline-block w-3 h-3 border border-[#426149] border-t-transparent rounded-full animate-spin" />
                        ) : (
                          <ArrowRight className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>

            {/* Copyright tag */}
            <div className="mt-8 sm:mt-10 text-[11px] tracking-wider text-[#9c968c] uppercase font-sans font-medium">
              {copyrightText}
            </div>
          </div>

          {/* Right Column: Navigation Links (3-column layout) */}
          <div className="lg:col-span-6 grid grid-cols-3 gap-6 sm:gap-10 lg:pl-12">
            {/* Column 1: Navigation */}
            <div>
              <h3 className="text-[10px] sm:text-[11px] tracking-[0.2em] uppercase font-semibold text-[#9c968c] mb-3 sm:mb-4">
                Navigation
              </h3>
              <ul className="space-y-1.5 sm:space-y-2">
                {navigation.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-xs sm:text-[13px] text-[#7e7b74] hover:text-[#323c33] transition-colors duration-200 inline-block py-0.5 relative group"
                    >
                      {item.label}
                      <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-[#323c33] transition-all duration-200 group-hover:w-full" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Socials */}
            <div>
              <h3 className="text-[10px] sm:text-[11px] tracking-[0.2em] uppercase font-semibold text-[#9c968c] mb-3 sm:mb-4">
                Socials
              </h3>
              <ul className="space-y-1.5 sm:space-y-2">
                {socials.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-xs sm:text-[13px] text-[#7e7b74] hover:text-[#323c33] transition-colors duration-200 inline-block py-0.5 relative group"
                    >
                      {item.label}
                      <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-[#323c33] transition-all duration-200 group-hover:w-full" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Legal */}
            <div>
              <h3 className="text-[10px] sm:text-[11px] tracking-[0.2em] uppercase font-semibold text-[#9c968c] mb-3 sm:mb-4">
                Legal
              </h3>
              <ul className="space-y-1.5 sm:space-y-2">
                {legal.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-xs sm:text-[13px] text-[#7e7b74] hover:text-[#323c33] transition-colors duration-200 inline-block py-0.5 relative group"
                    >
                      {item.label}
                      <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-[#323c33] transition-all duration-200 group-hover:w-full" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* ── Grand Center Brand Typography ──────────────── */}
        <div className="relative mt-12 sm:mt-16 lg:mt-24 text-center z-10">
          <h1
            className="font-brand text-[58px] sm:text-[100px] md:text-[145px] lg:text-[185px] xl:text-[215px] font-normal tracking-[0.22em] text-[#426149] leading-none uppercase select-none transition-transform duration-700"
            style={{
              fontFeatureSettings: '"liga" 1',
              paddingLeft: '0.22em', // Offsets tracking for true visual centering
            }}
          >
            {brandName.split('').map((char, index) => (
              <span
                key={index}
                className="inline-block transition-transform duration-300 ease-out hover:-translate-y-2 hover:text-[#2d4733] cursor-default"
              >
                {char}
              </span>
            ))}
          </h1>
        </div>
      </div>

      {/* ── Bottom Clothesline & Garden Illustration ──────────────── */}
      <div className="relative w-full -mt-10 sm:-mt-16 md:-mt-24 lg:-mt-32 z-20 overflow-hidden leading-none">
        {/* Subtle Interactive Breeze Pill Toggle */}
        <div className="absolute top-4 sm:top-8 right-6 sm:right-12 z-30 opacity-75 hover:opacity-100 transition-opacity">
          <button
            type="button"
            onClick={triggerBreeze}
            className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/70 hover:bg-white text-[11px] font-medium text-[#426149] border border-[#426149]/20 shadow-sm backdrop-blur-sm cursor-pointer transition-all active:scale-95"
            title="Stir a gentle garden breeze"
          >
            <Wind className={`w-3.5 h-3.5 ${breezeActive ? 'animate-spin' : ''}`} />
            <span className="hidden sm:inline">Gentle breeze</span>
          </button>
        </div>

        {/* The Illustrated Painting Scene */}
        <div
          className={`relative w-full transition-transform duration-1000 ease-out ${
            breezeActive ? 'scale-[1.008]' : 'scale-100'
          }`}
        >
          <img
            src={artworkSrc}
            alt="Folk-art illustration of countryside garden washing line with hanging linen clothes, lavender, wicker basket, and weathered garden bench"
            className={`w-full h-auto block select-none pointer-events-none transition-all duration-700 ${
              breezeActive ? 'animate-sway-subtle' : ''
            }`}
            draggable={false}
          />

          {/* Interactive Sway Hotspots over hanging linens */}
          <div className="absolute inset-0 pointer-events-auto">
            {/* Clothesline Hotspot Container */}
            <div className="relative w-full h-full">
              {/* Linen 1: Small napkin (around 20% width) */}
              <div
                onMouseEnter={() => setActiveCloth(1)}
                onMouseLeave={() => setActiveCloth(null)}
                className="absolute top-[38%] left-[17%] w-[8%] h-[24%] cursor-pointer group"
                title="White floral embroidered napkin"
              />

              {/* Linen 2: Large white sheet (around 30% width) */}
              <div
                onMouseEnter={() => setActiveCloth(2)}
                onMouseLeave={() => setActiveCloth(null)}
                className="absolute top-[36%] left-[26%] w-[18%] h-[32%] cursor-pointer group"
                title="Fresh white cotton bedsheet"
              />

              {/* Linen 3: Lilac floral print towel (around 48% width) */}
              <div
                onMouseEnter={() => setActiveCloth(3)}
                onMouseLeave={() => setActiveCloth(null)}
                className="absolute top-[38%] left-[45%] w-[15%] h-[30%] cursor-pointer group"
                title="Lavender floral printed table linen"
              />

              {/* Linen 4: Blue bistro striped towel (around 62% width) */}
              <div
                onMouseEnter={() => setActiveCloth(4)}
                onMouseLeave={() => setActiveCloth(null)}
                className="absolute top-[38%] left-[62%] w-[11%] h-[28%] cursor-pointer group"
                title="Classic French blue bistro striped tea towel"
              />

              {/* Linen 5: Olive herb-pattern towel (around 73% width) */}
              <div
                onMouseEnter={() => setActiveCloth(5)}
                onMouseLeave={() => setActiveCloth(null)}
                className="absolute top-[38%] left-[73%] w-[9%] h-[26%] cursor-pointer group"
                title="Olive sage herbal printed kitchen cloth"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default LettersFromTheGarden
