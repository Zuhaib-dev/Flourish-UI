'use client'

import React, { useState } from 'react'
import Link from 'next/link'

export interface CreateFromTheHeartProps {
  brandName?: string
  headlineSrc?: string
  artworkSrc?: string
  botanicalSrc?: string
  subtitle?: string[]
  ctaLabel?: string
  onCtaClick?: () => void
  className?: string
}

export function CreateFromTheHeart({
  brandName = 'Wilde & Co.',
  headlineSrc = '/headline-brush.png',
  artworkSrc = '/pastoral-artwork.png',
  botanicalSrc = '/botanical-sprig.png',
  subtitle = [
    'Find beauty in the little things.',
    'Make art. Live simply. Stay curious.',
  ],
  ctaLabel = 'JOIN THE FLOCK',
  onCtaClick,
  className = '',
}: CreateFromTheHeartProps) {
  const [cartCount, setCartCount] = useState(0)
  const [isSubscribed, setIsSubscribed] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [emailInput, setEmailInput] = useState('')
  const [toastMessage, setToastMessage] = useState<string | null>(null)

  const triggerToast = (msg: string) => {
    setToastMessage(msg)
    setTimeout(() => setToastMessage(null), 2500)
  }

  const handleCta = () => {
    if (onCtaClick) {
      onCtaClick()
    } else {
      setShowModal(true)
    }
  }

  const handleSubscribeSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!emailInput.trim()) return
    setIsSubscribed(true)
    setShowModal(false)
    setEmailInput('')
    triggerToast('Welcome to the flock! 🐑 ♡')
  }

  const handleCartClick = () => {
    setCartCount((c) => c + 1)
    triggerToast('Added "Plein Air Meadow Print" to your bag! 🎨')
  }

  return (
    <div
      className={`min-h-screen bg-[#faf8f5] text-[#141517] selection:bg-[#d8e2dc] selection:text-[#141517] flex flex-col justify-between relative overflow-hidden font-sans ${className}`}
    >
      {/* Toast Alert */}
      {toastMessage && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 px-5 py-2.5 rounded-full bg-[#141517] text-[#faf8f5] text-xs font-medium tracking-wide shadow-2xl flex items-center gap-2 animate-in fade-in slide-in-from-top-2 duration-200">
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Newsletter Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/35 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="w-full max-w-[420px] bg-[#faf8f5] border border-[#e8e4dc] rounded-2xl p-6 sm:p-8 shadow-2xl relative text-center">
            <button
              type="button"
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-black/40 hover:text-black text-sm p-1"
              aria-label="Close"
            >
              ✕
            </button>
            <div className="text-2xl mb-2">🌿</div>
            <h3 className="text-xl font-serif font-medium tracking-tight mb-2">
              Join the Flock
            </h3>
            <p className="text-xs text-black/60 leading-relaxed mb-6">
              Subscribe for gentle dispatches, seasonal studio notes, and original print drops.
            </p>
            <form onSubmit={handleSubscribeSubmit} className="flex flex-col gap-3">
              <input
                type="email"
                required
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                placeholder="Your email address..."
                className="w-full px-4 py-2.5 rounded-full border border-black/15 bg-white text-xs outline-none focus:border-black transition-colors"
              />
              <button
                type="submit"
                className="w-full py-2.5 rounded-full bg-[#141517] text-white text-xs font-medium tracking-wider uppercase hover:bg-black active:scale-[0.98] transition-all"
              >
                Subscribe ♡
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Top Header Navigation */}
      <header className="w-full max-w-[1340px] mx-auto px-6 sm:px-12 pt-7 pb-4 flex items-center justify-between select-none z-20">
        {/* Brand Wordmark (Wilde & Co.) */}
        <Link
          href="/"
          className="group inline-flex items-center gap-1.5 focus:outline-none"
        >
          <img
            src="/wilde-logo.png"
            alt={brandName}
            className="h-8 sm:h-9 w-auto object-contain transition-transform group-hover:scale-105"
          />
        </Link>

        {/* Navigation Links + Cart */}
        <nav
          className="flex items-center gap-5 sm:gap-8 text-[11px] font-medium tracking-[0.18em] text-[#141517]/85 uppercase"
          aria-label="Main Navigation"
        >
          <a
            href="#about"
            className="hover:text-black transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-black hover:after:w-full after:transition-all hidden md:inline-block"
          >
            ABOUT
          </a>
          <a
            href="#shop"
            className="hover:text-black transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-black hover:after:w-full after:transition-all hidden sm:inline-block"
          >
            SHOP
          </a>
          <a
            href="#journal"
            className="hover:text-black transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-black hover:after:w-full after:transition-all hidden md:inline-block"
          >
            JOURNAL
          </a>
          <a
            href="#studio"
            className="hover:text-black transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-black hover:after:w-full after:transition-all hidden sm:inline-block"
          >
            STUDIO
          </a>
          <a
            href="#contact"
            className="hover:text-black transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-black hover:after:w-full after:transition-all"
          >
            CONTACT
          </a>

          {/* Interactive Shopping Bag */}
          <button
            type="button"
            onClick={handleCartClick}
            className="relative p-1.5 hover:opacity-75 transition-opacity"
            title="Shopping bag"
            aria-label={`Shopping bag with ${cartCount} items`}
          >
            <svg
              width="18"
              height="20"
              viewBox="0 0 20 22"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 6h12l1 13H3L4 6z" />
              <path d="M7 6V4a3 3 0 0 1 6 0v2" />
            </svg>
            <span className="absolute -top-1 -right-1 min-w-[15px] h-[15px] px-1 rounded-full bg-[#141517] text-white text-[9px] font-mono flex items-center justify-center font-bold">
              {cartCount}
            </span>
          </button>
        </nav>
      </header>

      {/* Main Hero Container */}
      <main className="w-full max-w-[1340px] mx-auto px-6 sm:px-12 flex-1 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center py-4 sm:py-6">
        {/* Left Column: Headline, Subtitle, CTA, Botanical Sprig */}
        <div className="lg:col-span-5 flex flex-col justify-center items-start z-10 select-none">
          {/* Authentic Brush Ink Headline */}
          <div className="relative mb-5 max-w-[420px] w-full">
            <h1 className="sr-only">Create from the Heart.</h1>
            <img
              src={headlineSrc}
              alt="Create from the Heart."
              className="w-full h-auto object-contain block pointer-events-none"
              draggable={false}
            />
          </div>

          {/* Subtitle Copy */}
          <div className="text-[13px] sm:text-[14px] text-black/65 font-mono leading-relaxed mb-7 max-w-[340px]">
            {subtitle.map((line, idx) => (
              <p key={idx} className="m-0">
                {line}
              </p>
            ))}
          </div>

          {/* Primary CTA Button */}
          <button
            type="button"
            onClick={handleCta}
            className="group relative inline-flex items-center gap-3.5 px-7 py-3 rounded-full bg-[#141517] text-white text-[10.5px] font-medium tracking-[0.22em] uppercase shadow-[0_4px_16px_rgba(20,21,23,0.12)] hover:bg-black hover:shadow-[0_6px_22px_rgba(20,21,23,0.22)] active:scale-95 transition-all mb-10 sm:mb-14 cursor-pointer"
          >
            <span>{isSubscribed ? 'IN THE FLOCK' : ctaLabel}</span>
            <span className="transition-transform duration-200 group-hover:translate-x-1.5 font-sans">
              →
            </span>
          </button>

          {/* Botanical Wildflower Sprig with Hand-Drawn Note */}
          <div className="relative group cursor-pointer transition-transform duration-300 hover:rotate-1">
            <img
              src={botanicalSrc}
              alt="Where inspiration grows wild. ♡"
              className="h-20 sm:h-24 w-auto object-contain pointer-events-none"
              draggable={false}
            />
          </div>
        </div>

        {/* Right Column: Organic Pebble/Blob Pastoral Landscape Artwork */}
        <div className="lg:col-span-7 flex justify-center lg:justify-end items-center relative z-10 w-full">
          <div className="relative w-full max-w-[660px] group">
            {/* Soft Ambient Shadow under Artwork */}
            <div className="absolute inset-0 bg-[#355e3b]/10 blur-2xl rounded-full scale-90 pointer-events-none -z-10" />

            {/* Pastoral Illustration */}
            <img
              src={artworkSrc}
              alt="Pastoral hillside with sheep grazing around an artist painting en plein air"
              className="w-full h-auto object-contain block select-none pointer-events-none transition-transform duration-700 ease-out group-hover:scale-[1.015]"
              draggable={false}
            />
          </div>
        </div>
      </main>

      {/* Subtle Bottom Studio Footer */}
      <footer className="w-full max-w-[1340px] mx-auto px-6 sm:px-12 py-4 flex items-center justify-between text-[10px] font-mono text-black/35 tracking-wider select-none">
        <div>EN PLEIN AIR · AUTUMN COLLECTION</div>
        <div className="hover:text-black/60 transition-colors">
          WILDE & CO. STUDIO © {new Date().getFullYear()}
        </div>
      </footer>
    </div>
  )
}

export default CreateFromTheHeart
