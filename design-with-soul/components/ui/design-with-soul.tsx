'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { ArrowRight, Check, X, Sparkles, Menu, Mail, Compass, Layers, Palette, Image as ImageIcon } from 'lucide-react'

export interface ServiceItem {
  id: string
  title: string
  description: string
  icon: 'branding' | 'web-design' | 'illustration'
  details?: string
  tags?: string[]
}

export interface DesignWithSoulProps {
  headlineLine1?: string
  headlineLine2?: string
  subtitle?: string
  ctaText?: string
  founderName?: string
  founderRole?: string
  founderQuote?: string
  brandLogo?: string
  paintingSrc?: string
  services?: ServiceItem[]
  newsletterTitle?: string
  newsletterDesc?: string
  onCtaClick?: () => void
  className?: string
}

const defaultServices: ServiceItem[] = [
  {
    id: 'branding',
    title: 'BRANDING',
    description: 'Purposeful identities that connect.',
    icon: 'branding',
    details:
      'Crafting timeless visual identities, typography guidelines, and brand design systems anchored in authenticity and lasting emotional connection.',
    tags: ['Brand Strategy', 'Visual Identity', 'Typography', 'Styleguides'],
  },
  {
    id: 'web-design',
    title: 'WEB DESIGN',
    description: 'Clean, thoughtful digital experiences.',
    icon: 'web-design',
    details:
      'Designing intuitive, human-centered websites and digital experiences with bespoke interactions, accessible layouts, and modern aesthetics.',
    tags: ['UI/UX Design', 'Design Systems', 'Interactive Prototypes', 'Responsive Layouts'],
  },
  {
    id: 'illustration',
    title: 'ILLUSTRATION',
    description: 'Handcrafted art with heart and meaning.',
    icon: 'illustration',
    details:
      'Bespoke editorial illustrations, textured digital brushwork, iconography, and organic storytelling artwork tailored for thoughtful brands.',
    tags: ['Editorial Art', 'Custom Iconography', 'Packaging Art', 'Storyboarding'],
  },
]

export default function DesignWithSoul({
  headlineLine1 = 'Design',
  headlineLine2 = 'with soul.',
  subtitle = 'Stories told beautifully.',
  ctaText = 'VIEW MY WORK →',
  founderName = 'MIRA HAYES',
  founderRole = 'FOUNDER & DESIGNER',
  founderQuote = 'Crafting visuals that leave a lasting feeling.',
  brandLogo = 'm.',
  paintingSrc = '/hero-fine-art.png',
  services = defaultServices,
  newsletterTitle = 'Notes from the studio',
  newsletterDesc = 'Thoughts, insights, and inspiration delivered gently.',
  onCtaClick,
  className = '',
}: DesignWithSoulProps) {
  const [currentPainting, setCurrentPainting] = useState(paintingSrc)
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null)
  const [showPortfolioModal, setShowPortfolioModal] = useState(false)

  // Accessibility: Close modals with Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (selectedService) setSelectedService(null)
        if (showPortfolioModal) setShowPortfolioModal(false)
        if (mobileMenuOpen) setMobileMenuOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedService, showPortfolioModal, mobileMenuOpen])

  // Accessibility: Prevent background scroll when modal is active
  useEffect(() => {
    if (selectedService || showPortfolioModal) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [selectedService, showPortfolioModal])

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email || !email.includes('@')) return

    setSubmitting(true)
    setTimeout(() => {
      setSubmitting(false)
      setSubscribed(true)
      setTimeout(() => {
        setSubscribed(false)
        setEmail('')
      }, 4000)
    }, 350)
  }

  const handleCta = () => {
    if (onCtaClick) {
      onCtaClick()
    } else {
      setShowPortfolioModal(true)
    }
  }

  const togglePaintingStyle = () => {
    setCurrentPainting((prev) =>
      prev.includes('fine-art') ? '/hero-original.png' : '/hero-fine-art.png'
    )
  }

  return (
    <main
      className={`relative min-h-screen w-full flex flex-col justify-between overflow-x-hidden bg-[#78a9c8] select-none ${className}`}
      style={{
        backgroundColor: '#78a9c8',
      }}
    >
      {/* Background Oil Painting Canvas Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <Image
          src={currentPainting}
          alt="Impressionist oil painting of a boy and golden dog sitting together on a grassy hill under summer sky"
          fill
          priority
          className="object-cover object-bottom transition-all duration-1000 scale-[1.002]"
          sizes="100vw"
        />

        {/* Soft natural canvas grain */}
        <div className="absolute inset-0 canvas-grain opacity-30 pointer-events-none" />
      </div>

      {/* Top Navigation Bar */}
      <header className="relative z-20 w-full pt-6 sm:pt-8 md:pt-9 px-6 sm:px-12 md:px-16 flex items-center justify-between animate-nav-fade">
        {/* Left Nav items */}
        <nav
          aria-label="Primary Navigation Left"
          className="hidden md:flex items-center gap-8 lg:gap-14"
        >
          {['HOME', 'WORK', 'ABOUT'].map((item) => (
            <button
              key={item}
              onClick={() => {
                if (item === 'WORK') setShowPortfolioModal(true)
              }}
              className="text-[10px] sm:text-[11px] font-medium tracking-[0.28em] text-[#2c251f]/80 hover:text-[#181411] transition-colors duration-200 cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-[#2c251f]"
            >
              {item}
            </button>
          ))}
        </nav>

        {/* Center Brand Monogram */}
        <div className="flex-1 md:flex-initial flex justify-start md:justify-center">
          <a
            href="#home"
            className="font-script text-3xl sm:text-4xl text-[#241e18] hover:opacity-85 transition-opacity tracking-tight cursor-pointer"
            aria-label="Mira Hayes Studio Home"
          >
            {brandLogo}
          </a>
        </div>

        {/* Right Nav items */}
        <nav
          aria-label="Primary Navigation Right"
          className="hidden md:flex items-center gap-8 lg:gap-14"
        >
          {['JOURNAL', 'CONTACT'].map((item) => (
            <button
              key={item}
              onClick={() => {
                if (item === 'CONTACT') {
                  const el = document.getElementById('studio-newsletter-input')
                  el?.focus()
                }
              }}
              className="text-[10px] sm:text-[11px] font-medium tracking-[0.28em] text-[#2c251f]/80 hover:text-[#181411] transition-colors duration-200 cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-[#2c251f]"
            >
              {item}
            </button>
          ))}

          {/* Quick Painting Style Switcher */}
          <button
            onClick={togglePaintingStyle}
            title={`Switch to ${currentPainting.includes('fine-art') ? 'Original Inpainted' : 'Fine-Art Impasto'} Canvas`}
            className="p-1.5 rounded-full hover:bg-black/5 text-[#2c251f]/75 hover:text-[#181411] transition-all cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-[#2c251f]"
            aria-label="Toggle painting art style"
          >
            <Palette className="w-3.5 h-3.5" />
          </button>
        </nav>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-[#241e18] p-2 rounded-lg hover:bg-black/5 focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="relative z-30 md:hidden bg-[#f6f0e6]/95 backdrop-blur-md border-b border-[#e5ded4] px-6 py-6 shadow-lg animate-fadeIn">
          <div className="flex flex-col gap-4 text-center">
            {['HOME', 'WORK', 'ABOUT', 'JOURNAL', 'CONTACT'].map((item) => (
              <button
                key={item}
                onClick={() => {
                  setMobileMenuOpen(false)
                  if (item === 'WORK') setShowPortfolioModal(true)
                  if (item === 'CONTACT') {
                    const el = document.getElementById('studio-newsletter-input')
                    el?.focus()
                  }
                }}
                className="text-xs font-semibold tracking-[0.24em] text-[#2c251f] py-2 hover:bg-black/5 rounded-md transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Hero Typography Section */}
      <section
        aria-label="Hero Introduction"
        className="relative z-10 w-full px-6 sm:px-12 md:px-16 pt-10 sm:pt-14 md:pt-16 pb-8 sm:pb-12 flex-1 flex flex-col justify-center max-w-4xl animate-hero-fade"
      >
        {/* Main Display Headline */}
        <h1 className="font-display text-[48px] sm:text-[72px] md:text-[92px] lg:text-[110px] font-normal tracking-[-0.04em] leading-[0.88] text-[#221c17]">
          <span className="block">{headlineLine1}</span>
          <span className="block">{headlineLine2}</span>
        </h1>

        {/* Handwritten Cursive Subtitle */}
        <p className="font-script text-3xl sm:text-4xl md:text-5xl text-[#3a3227] tracking-normal mt-3 sm:mt-4 ml-1">
          {subtitle}
        </p>

        {/* CTA Link */}
        <div className="mt-7 sm:mt-9">
          <button
            onClick={handleCta}
            className="group inline-flex items-center gap-2 text-[10px] sm:text-[11px] font-medium tracking-[0.26em] text-[#2b241e] uppercase border-b border-[#2b241e]/60 pb-1 hover:border-[#2b241e] transition-all duration-300 focus:outline-none focus-visible:ring-1 focus-visible:ring-[#2b241e] cursor-pointer"
          >
            <span>{ctaText.replace(' →', '')}</span>
            <span
              className="inline-block transform group-hover:translate-x-1.5 transition-transform duration-300"
              aria-hidden="true"
            >
              →
            </span>
          </button>
        </div>
      </section>

      {/* Floating Bottom Parchment Dock */}
      <footer className="relative z-20 w-full px-3 sm:px-6 md:px-8 pb-3 sm:pb-5 animate-dock-slide">
        <div className="w-full bg-[#f6f0e6] rounded-xl sm:rounded-2xl border border-[#e8dfd2] shadow-[0_12px_45px_rgba(25,20,15,0.12)] overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-12 items-stretch divide-y md:divide-y-0 md:divide-x divide-[#e8dfd2]">
            {/* Column 1: Founder & Designer Card */}
            <div className="md:col-span-4 lg:col-span-3 xl:col-span-3 p-4 sm:p-5 lg:p-6 flex items-center gap-3.5 sm:gap-4 bg-[#f6f0e6] hover:bg-[#f3ede3] transition-colors duration-200">
              {/* Botanical dried floral stem SVG */}
              <div
                className="w-10 h-16 sm:w-11 sm:h-18 shrink-0 text-[#9b8c7b] flex items-center justify-center opacity-90 animate-botanical-sway hover:scale-110 transition-transform duration-500 cursor-pointer"
                aria-hidden="true"
              >
                <svg
                  viewBox="0 0 60 100"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-full h-full"
                >
                  {/* Central Stem */}
                  <path d="M30 95 C 30 65, 29 35, 30 8" />
                  {/* Branch Left 1 */}
                  <path d="M30 75 C 24 70, 18 64, 16 54" />
                  <circle cx="15" cy="52" r="1.5" fill="currentColor" />
                  <path d="M16 54 C 13 52, 10 50, 8 45" />
                  <circle cx="7" cy="44" r="1.2" fill="currentColor" />
                  <path d="M16 54 C 18 48, 19 44, 20 40" />
                  <circle cx="20" cy="39" r="1.2" fill="currentColor" />
                  {/* Branch Right 1 */}
                  <path d="M30 65 C 36 60, 42 54, 45 44" />
                  <circle cx="46" cy="43" r="1.5" fill="currentColor" />
                  <path d="M45 44 C 48 40, 52 38, 54 32" />
                  <circle cx="55" cy="31" r="1.2" fill="currentColor" />
                  {/* Branch Left 2 */}
                  <path d="M30 45 C 24 40, 20 32, 22 22" />
                  <circle cx="22" cy="20" r="1.4" fill="currentColor" />
                  {/* Branch Right 2 */}
                  <path d="M30 35 C 35 30, 39 25, 40 18" />
                  <circle cx="41" cy="17" r="1.3" fill="currentColor" />
                  {/* Top Flower Seeds */}
                  <circle cx="30" cy="6" r="1.6" fill="currentColor" />
                  <circle cx="27" cy="11" r="1.2" fill="currentColor" />
                  <circle cx="33" cy="11" r="1.2" fill="currentColor" />
                </svg>
              </div>

              {/* Founder Text */}
              <div className="flex flex-col justify-center">
                <span className="text-[9px] uppercase tracking-[0.22em] font-semibold text-[#8c8072]">
                  {founderRole}
                </span>
                <h2 className="text-sm sm:text-base font-semibold tracking-wider text-[#221c17] mt-0.5">
                  {founderName}
                </h2>
                <p className="font-script text-base sm:text-lg text-[#5e5346] mt-0.5 leading-snug italic">
                  {founderQuote}
                </p>
              </div>
            </div>

            {/* Column 2, 3, 4: Services (BRANDING, WEB DESIGN, ILLUSTRATION) */}
            <div className="md:col-span-5 lg:col-span-5 xl:col-span-5 grid grid-cols-3 divide-x divide-[#e8dfd2] bg-[#f6f0e6]">
              {services.map((svc) => (
                <button
                  key={svc.id}
                  onClick={() => setSelectedService(svc)}
                  className="p-3.5 sm:p-4 lg:p-5 flex flex-col justify-between items-start text-left hover:bg-[#f3ede3] active:bg-[#ede5da] hover:-translate-y-0.5 transition-all duration-300 group cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-[#221c17]"
                  title={`Explore ${svc.title}`}
                >
                  {/* Icon */}
                  <div className="h-5 flex items-center text-[#241e18] group-hover:scale-115 group-hover:rotate-6 transition-transform duration-300">
                    {svc.icon === 'branding' && (
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.3"
                        className="w-4 h-4 sm:w-5 sm:h-5"
                      >
                        {/* Botanical Leaf Sprig */}
                        <path d="M12 22V3" strokeLinecap="round" />
                        <path
                          d="M12 8C8 7.5 6.5 5 6.5 2C10 2.5 12 5 12 8Z"
                          fill="currentColor"
                          fillOpacity="0.15"
                        />
                        <path
                          d="M12 14C16 13.5 17.5 11 17.5 8C14 8.5 12 11 12 14Z"
                          fill="currentColor"
                          fillOpacity="0.15"
                        />
                        <path
                          d="M12 18C8 17.5 6.5 15 6.5 12C10 12.5 12 15 12 18Z"
                          fill="currentColor"
                          fillOpacity="0.15"
                        />
                      </svg>
                    )}
                    {svc.icon === 'web-design' && (
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.3"
                        strokeLinejoin="round"
                        className="w-4 h-4 sm:w-5 sm:h-5"
                      >
                        {/* Minimalist Mountain Peaks */}
                        <path d="M3 18L9 7L14 15L17 11L21 18H3Z" />
                        <path d="M9 7L14 15" strokeLinecap="round" />
                      </svg>
                    )}
                    {svc.icon === 'illustration' && (
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-4 h-4 sm:w-5 sm:h-5"
                      >
                        {/* Origami Swallow / Dove */}
                        <path d="M3 12L12 4L21 12L12 15L3 12Z" />
                        <path d="M12 15L12 20L8 18" />
                        <path d="M12 4V15" strokeDasharray="1.5 1.5" />
                      </svg>
                    )}
                  </div>

                  {/* Service Text */}
                  <div className="mt-3 sm:mt-4">
                    <span className="text-[9px] sm:text-[10px] font-bold tracking-[0.2em] uppercase text-[#221c17] group-hover:text-black transition-colors block">
                      {svc.title}
                    </span>
                    <p className="text-[10px] sm:text-[11px] text-[#71675a] leading-tight mt-1 line-clamp-2">
                      {svc.description}
                    </p>
                  </div>
                </button>
              ))}
            </div>

            {/* Column 5: Studio Notes Newsletter Subscription Form */}
            <div className="md:col-span-3 lg:col-span-4 xl:col-span-4 p-4 sm:p-5 lg:p-6 flex flex-col justify-between bg-[#f6f0e6] hover:bg-[#f3ede3]/60 transition-colors">
              <div>
                <h3 className="font-script text-2xl sm:text-3xl text-[#2a241e] leading-none">
                  {newsletterTitle}
                </h3>
                <p className="text-[10px] sm:text-[11px] text-[#71675a] mt-1 leading-snug">
                  {newsletterDesc}
                </p>
              </div>

              {/* Form Input + Circular Submit Button */}
              <form onSubmit={handleSubscribe} className="relative mt-3 pt-1">
                {subscribed ? (
                  <div className="flex items-center gap-2 py-1.5 px-3 bg-[#e8efe6] border border-[#c3d5c0] rounded-xl text-xs text-[#305229] font-medium animate-check-spring">
                    <Check className="w-3.5 h-3.5 text-[#3c7031] shrink-0" />
                    <span>Welcome to studio notes! Delivered gently.</span>
                  </div>
                ) : (
                  <div className="flex items-center border-b border-[#cfc5b6] focus-within:border-[#221c17] pb-1 transition-colors">
                    <input
                      id="studio-newsletter-input"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your email address"
                      required
                      className="w-full bg-transparent text-xs text-[#221c17] placeholder:text-[#998f82] focus:outline-none pr-3 py-1 font-normal"
                    />
                    <button
                      type="submit"
                      disabled={submitting}
                      aria-label="Subscribe to studio notes"
                      className="shrink-0 w-7 h-7 rounded-full bg-[#231d17] text-[#f7f2ea] flex items-center justify-center hover:bg-[#3d342b] hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer shadow-sm disabled:opacity-50"
                    >
                      {submitting ? (
                        <div className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      ) : (
                        <ArrowRight className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </footer>

      {/* Service Detail Modal */}
      {selectedService && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedService.title} Details`}
          tabIndex={-1}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/45 backdrop-blur-sm animate-fadeIn"
          onClick={() => setSelectedService(null)}
        >
          <div
            className="w-full max-w-lg bg-[#f6f0e6] rounded-3xl p-6 sm:p-8 border border-[#e5ded4] shadow-2xl relative animate-modal-enter"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute top-5 right-5 flex items-center gap-1.5">
              <kbd className="hidden sm:inline-block text-[9px] font-mono uppercase px-1.5 py-0.5 rounded bg-black/5 text-[#8d8274] border border-[#ded5c8]">
                ESC
              </kbd>
              <button
                onClick={() => setSelectedService(null)}
                className="p-2 rounded-full hover:bg-black/5 text-[#5e5448] transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#221c17]"
                aria-label="Close dialog (Escape)"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex items-center gap-3">
              <span className="p-2.5 rounded-2xl bg-[#ebe4da] text-[#221c17]">
                {selectedService.icon === 'branding' && <Palette className="w-5 h-5" />}
                {selectedService.icon === 'web-design' && <Compass className="w-5 h-5" />}
                {selectedService.icon === 'illustration' && <Layers className="w-5 h-5" />}
              </span>
              <div>
                <span className="text-[10px] uppercase font-bold tracking-[0.24em] text-[#8d8274]">
                  STUDIO PRACTICE
                </span>
                <h3 className="text-xl font-bold tracking-wide text-[#221c17]">
                  {selectedService.title}
                </h3>
              </div>
            </div>

            <p className="font-script text-2xl text-[#4a4034] mt-4">
              "{selectedService.description}"
            </p>

            <p className="text-sm text-[#5d5449] leading-relaxed mt-3">
              {selectedService.details}
            </p>

            {selectedService.tags && (
              <div className="flex flex-wrap gap-2 mt-5">
                {selectedService.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[11px] font-medium px-3 py-1 bg-[#ede6dc] text-[#4d4439] rounded-full border border-[#ded5c8]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <div className="mt-7 pt-5 border-t border-[#e8e0d5] flex items-center justify-between">
              <span className="text-xs text-[#8d8274]">Accepting commissions</span>
              <button
                onClick={() => {
                  setSelectedService(null)
                  const el = document.getElementById('studio-newsletter-input')
                  el?.focus()
                }}
                className="px-4 py-2 rounded-full bg-[#231d17] text-[#f7f2ea] text-xs font-semibold tracking-wider hover:bg-[#3d342b] transition-colors cursor-pointer"
              >
                Inquire Project →
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Portfolio Showcase Drawer / Modal */}
      {showPortfolioModal && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Curated Archive & Selected Works"
          tabIndex={-1}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-md animate-fadeIn"
          onClick={() => setShowPortfolioModal(false)}
        >
          <div
            className="w-full max-w-3xl max-h-[88vh] overflow-y-auto bg-[#f6f0e6] rounded-3xl p-6 sm:p-10 border border-[#e5ded4] shadow-2xl relative animate-modal-enter"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="absolute top-6 right-6 flex items-center gap-1.5">
              <kbd className="hidden sm:inline-block text-[9px] font-mono uppercase px-1.5 py-0.5 rounded bg-black/5 text-[#8d8274] border border-[#ded5c8]">
                ESC
              </kbd>
              <button
                onClick={() => setShowPortfolioModal(false)}
                className="p-2 rounded-full hover:bg-black/5 text-[#5e5448] transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-[#221c17]"
                aria-label="Close dialog (Escape)"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex items-center gap-2 text-[#8d8274]">
              <Sparkles className="w-4 h-4" />
              <span className="text-[10px] uppercase font-bold tracking-[0.24em]">
                CURATED ARCHIVE
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-display font-medium tracking-tight text-[#221c17] mt-1">
              Selected Works & Case Studies
            </h2>
            <p className="font-script text-2xl text-[#554b3e] mt-1">
              Stories told with quiet elegance and intentional craftsmanship.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              {[
                {
                  title: 'Aura Botanicals',
                  category: 'Identity & Packaging',
                  year: '2025',
                  desc: 'Wildcrafted herbal apothecary visual system and tactile letterpress packaging.',
                },
                {
                  title: 'Komorebi Tea House',
                  category: 'Web Experience & Editorial',
                  year: '2025',
                  desc: 'Minimalist Japanese ceremonial tea eCommerce with immersive soundscapes.',
                },
                {
                  title: 'Vagabond Tales',
                  category: 'Illustration Series',
                  year: '2024',
                  desc: 'Hand-painted gouache and digital landscapes exploring boyhood and wilderness.',
                },
                {
                  title: 'Nordic Solitude',
                  category: 'Architecture Monograph',
                  year: '2024',
                  desc: 'Hardcover editorial publication celebrating remote timber dwellings.',
                },
              ].map((proj) => (
                <div
                  key={proj.title}
                  className="p-5 rounded-2xl bg-[#ede6dc] border border-[#dfd5c7] hover:border-[#b8ac9c] hover:shadow-sm transition-all group"
                >
                  <div className="flex items-center justify-between text-[11px] text-[#8d8274] uppercase tracking-wider font-semibold">
                    <span>{proj.category}</span>
                    <span>{proj.year}</span>
                  </div>
                  <h3 className="text-base font-bold text-[#221c17] mt-2 group-hover:text-[#42392f] transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-xs text-[#6e6355] mt-1.5 leading-relaxed">
                    {proj.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-5 border-t border-[#e8e0d5] flex flex-col sm:flex-row items-center justify-between gap-4">
              <span className="text-xs text-[#7d7265] text-center sm:text-left">
                Every project begins with a conversation about what matters most to you.
              </span>
              <button
                onClick={() => {
                  setShowPortfolioModal(false)
                  const el = document.getElementById('studio-newsletter-input')
                  el?.focus()
                }}
                className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-[#231d17] text-[#f7f2ea] text-xs font-semibold tracking-wider hover:bg-[#3d342b] transition-colors cursor-pointer text-center"
              >
                Start a Conversation →
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  )
}
