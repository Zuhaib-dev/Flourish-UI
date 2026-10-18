'use client'

import React, { useState } from 'react'
import { ArrowRight, Check } from 'lucide-react'

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
  artworkSrc = '/garden-scene@2x.png',
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || isSubmitting) return

    setIsSubmitting(true)
    if (onSubscribe) {
      await onSubscribe(email)
    } else {
      await new Promise((resolve) => setTimeout(resolve, 500))
    }
    setIsSubmitting(false)
    setSubscribed(true)
  }

  return (
    <footer
      className={`relative w-full bg-[#f6efe7] text-[#2a382e] pt-8 sm:pt-10 md:pt-12 pb-0 overflow-hidden select-none flex flex-col justify-between ${className}`}
      role="contentinfo"
      aria-label="Footer and garden newsletter"
    >
      {/* ── Ambient Petal Breeze Particles ──────────────── */}
      <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden opacity-45">
        <span
          className="absolute top-1/4 left-3/4 w-2 h-2.5 rounded-full bg-[#d8b4e2]/60 blur-[0.4px]"
          style={{ animation: 'float-petal 14s linear infinite', animationDelay: '0s' }}
        />
        <span
          className="absolute top-1/3 left-1/2 w-1.5 h-2 rounded-full bg-[#fef08a]/70 blur-[0.3px]"
          style={{ animation: 'float-petal 18s linear infinite', animationDelay: '5s' }}
        />
        <span
          className="absolute top-1/2 left-4/5 w-2 h-2 rounded-full bg-[#bbf7d0]/50 blur-[0.4px]"
          style={{ animation: 'float-petal 16s linear infinite', animationDelay: '10s' }}
        />
      </div>

      {/* ── Top Content Container ──────────────── */}
      <div className="relative z-20 w-full max-w-[1360px] mx-auto px-6 sm:px-10 md:px-12 lg:px-16">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-8">
          {/* Left Column: Title, Subtitle, Underline Input, Copyright */}
          <div className="flex flex-col max-w-sm">
            <h2 className="font-editorial text-[26px] sm:text-[30px] md:text-[33px] font-normal text-[#2a382e] tracking-tight leading-snug">
              {title}
            </h2>
            <p className="mt-2 text-xs sm:text-[13px] text-[#79746c] leading-relaxed font-normal max-w-xs">
              {description}
            </p>

            {/* Email Subscription Form */}
            <div className="mt-5 sm:mt-6">
              {subscribed ? (
                <div className="flex items-center gap-2 py-1 text-xs sm:text-[13px] text-[#2b3d36] font-medium">
                  <Check className="w-4 h-4 text-[#2b3d36]" />
                  <span>Thank you. Letters from the garden will arrive soon.</span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="relative flex items-center border-b border-[#2a382e]/35 hover:border-[#2a382e]/70 focus-within:border-[#2b3d36] transition-colors pb-1 max-w-[300px] group">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={newsletterPlaceholder}
                    className="w-full bg-transparent text-xs sm:text-[13px] text-[#2a382e] placeholder:text-[#9c968c] focus:outline-none pr-8 py-0.5"
                    aria-label="Email address for garden notes"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="absolute right-0 text-[#2a382e]/80 hover:text-[#2b3d36] disabled:opacity-50 transition-transform duration-200 hover:translate-x-1 cursor-pointer p-0.5"
                    aria-label="Submit email"
                  >
                    {isSubmitting ? (
                      <span className="inline-block w-3 h-3 border border-[#2b3d36] border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <ArrowRight className="w-4 h-4" />
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Copyright */}
            <div className="mt-6 sm:mt-8 text-[11px] tracking-[0.14em] uppercase font-sans font-medium text-[#8c867c]">
              {copyrightText}
            </div>
          </div>

          {/* Right Column: 3 Link Columns */}
          <div className="grid grid-cols-3 gap-8 sm:gap-14 lg:gap-20">
            {/* Column 1: Navigation */}
            <div>
              <h3 className="text-[10px] sm:text-[11px] tracking-[0.2em] uppercase font-semibold text-[#8c867c] mb-3 sm:mb-4">
                Navigation
              </h3>
              <ul className="space-y-1.5 sm:space-y-2">
                {navigation.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-xs sm:text-[13px] text-[#5f5b54] hover:text-[#2a382e] transition-colors duration-200 inline-block py-0.5 relative group"
                    >
                      {item.label}
                      <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-[#2a382e] transition-all duration-200 group-hover:w-full" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Socials */}
            <div>
              <h3 className="text-[10px] sm:text-[11px] tracking-[0.2em] uppercase font-semibold text-[#8c867c] mb-3 sm:mb-4">
                Socials
              </h3>
              <ul className="space-y-1.5 sm:space-y-2">
                {socials.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-xs sm:text-[13px] text-[#5f5b54] hover:text-[#2a382e] transition-colors duration-200 inline-block py-0.5 relative group"
                    >
                      {item.label}
                      <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-[#2a382e] transition-all duration-200 group-hover:w-full" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Legal */}
            <div>
              <h3 className="text-[10px] sm:text-[11px] tracking-[0.2em] uppercase font-semibold text-[#8c867c] mb-3 sm:mb-4">
                Legal
              </h3>
              <ul className="space-y-1.5 sm:space-y-2">
                {legal.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-xs sm:text-[13px] text-[#5f5b54] hover:text-[#2a382e] transition-colors duration-200 inline-block py-0.5 relative group"
                    >
                      {item.label}
                      <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-[#2a382e] transition-all duration-200 group-hover:w-full" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* ── Grand Center Brand Typography ──────────────── */}
        <div className="relative mt-6 sm:mt-8 md:mt-12 text-center select-none z-20 overflow-hidden">
          <h1
            className="font-editorial text-[clamp(2.75rem,13.8vw,11.5rem)] font-normal tracking-[0.22em] text-[#2b3d36] leading-none uppercase whitespace-nowrap transition-transform duration-700"
            style={{
              paddingLeft: '0.22em', // Offsets tracking for true optical visual centering
            }}
          >
            {brandName.split('').map((char, index) => (
              <span
                key={index}
                className="inline-block transition-transform duration-300 ease-out hover:-translate-y-2 hover:text-[#1c2924] cursor-default"
              >
                {char}
              </span>
            ))}
          </h1>
        </div>
      </div>

      {/* ── Bottom Clothesline & Garden Illustration with Breeze Animation ──────────────── */}
      <div className="relative w-full -mt-4 sm:-mt-8 md:-mt-12 lg:-mt-18 z-10 overflow-hidden leading-none pointer-events-none select-none">
        <img
          src={artworkSrc}
          alt="Countryside garden washing line with hanging linen, lavender, and flower bench"
          className="w-full h-auto block select-none animate-breeze origin-bottom"
          draggable={false}
        />
      </div>
    </footer>
  )
}

export default LettersFromTheGarden
