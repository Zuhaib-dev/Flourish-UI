'use client'

import React, { useState } from 'react'
import {
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Check,
} from 'lucide-react'

export interface NavigationColumn {
  title: string
  links: { label: string; href: string }[]
}

export interface SequelFrontierFooterProps {
  brandName?: string
  tagline?: string
  emailContact?: string
  phoneContact?: string
  locationContact?: string
  newsletterDescription?: string
  newsletterPlaceholder?: string
  artworkSrc?: string
  onSubscribe?: (email: string) => Promise<void> | void
  shopLinks?: { label: string; href: string }[]
  aboutLinks?: { label: string; href: string }[]
  helpLinks?: { label: string; href: string }[]
  legalLinks?: { label: string; href: string }[]
  className?: string
}

export function SequelFrontierFooter({
  brandName = 'sequel',
  tagline = 'Building digital experiences that inspire, connect, and create lasting value.',
  emailContact = 'hello@sequel.com',
  phoneContact = '+91 00000 00000',
  locationContact = 'India',
  newsletterDescription = 'Subscribe to get updates on new collections, stories & exclusive offers.',
  newsletterPlaceholder = 'Enter your email',
  artworkSrc = '/frontier-engraving-orig.png',
  onSubscribe,
  shopLinks = [
    { label: 'All Collections', href: '#collections' },
    { label: 'Vases', href: '#vases' },
    { label: 'Tableware', href: '#tableware' },
    { label: 'Decor', href: '#decor' },
    { label: 'Limited Editions', href: '#limited' },
    { label: 'Gift Sets', href: '#gifts' },
  ],
  aboutLinks = [
    { label: 'Our Story', href: '#story' },
    { label: 'Craftsmanship', href: '#craftsmanship' },
    { label: 'Sustainability', href: '#sustainability' },
    { label: 'Careers', href: '#careers' },
    { label: 'Press & Media', href: '#press' },
  ],
  helpLinks = [
    { label: 'FAQs', href: '#faqs' },
    { label: 'Shipping & Delivery', href: '#shipping' },
    { label: 'Track Your Order', href: '#track' },
    { label: 'Contact Us', href: '#contact' },
  ],
  legalLinks = [
    { label: 'Privacy Policy', href: '#privacy' },
    { label: 'Terms of Service', href: '#terms' },
    { label: 'Cookie Policy', href: '#cookies' },
  ],
  className = '',
}: SequelFrontierFooterProps) {
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
      className={`relative w-full bg-[#0b3987] text-white pt-12 sm:pt-16 md:pt-20 pb-0 overflow-hidden select-none flex flex-col justify-between ${className}`}
      role="contentinfo"
      aria-label="Footer and frontier landscape"
    >
      {/* ── Main Content Container ──────────────── */}
      <div className="relative z-20 w-full max-w-[1380px] mx-auto px-6 sm:px-10 md:px-14 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          {/* ── Left Column: Brand & Contact ──────────────── */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              {/* Logo with 4-Pointed Compass Star */}
              <div className="flex items-center gap-3 group cursor-default">
                <svg
                  className="w-7 h-7 sm:w-8 sm:h-8 text-white transition-transform duration-500 group-hover:rotate-45"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12 1L13.8 9.2L22 11L13.8 12.8L12 21L10.2 12.8L2 11L10.2 9.2L12 1Z" />
                </svg>
                <span className="font-brand text-2xl sm:text-3xl font-normal tracking-tight text-white lowercase">
                  {brandName}
                </span>
              </div>

              {/* Tagline */}
              <p className="mt-4 sm:mt-5 font-editorial italic text-sm sm:text-[15px] text-white/80 max-w-[270px] leading-relaxed font-normal">
                {tagline}
              </p>

              {/* Contact Information */}
              <div className="mt-6 sm:mt-8 space-y-2.5 text-xs sm:text-[13px] text-white/80 font-normal">
                {emailContact && (
                  <a
                    href={`mailto:${emailContact}`}
                    className="flex items-center gap-3 hover:text-white transition-colors"
                  >
                    <Mail className="w-4 h-4 text-white/80 stroke-[1.75]" />
                    <span>{emailContact}</span>
                  </a>
                )}
                {phoneContact && (
                  <a
                    href={`tel:${phoneContact.replace(/\s+/g, '')}`}
                    className="flex items-center gap-3 hover:text-white transition-colors"
                  >
                    <Phone className="w-4 h-4 text-white/80 stroke-[1.75]" />
                    <span>{phoneContact}</span>
                  </a>
                )}
                {locationContact && (
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-white/80 stroke-[1.75]" />
                    <span>{locationContact}</span>
                  </div>
                )}
              </div>

              {/* Social Icons Row */}
              <div className="mt-7 sm:mt-8 flex items-center gap-3.5">
                {/* Facebook */}
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 rounded-full flex items-center justify-center text-white/85 hover:text-white hover:scale-110 transition-all"
                  aria-label="Facebook"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
                  </svg>
                </a>
                {/* X / Twitter */}
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 rounded-full flex items-center justify-center text-white/85 hover:text-white hover:scale-110 transition-all"
                  aria-label="X (Twitter)"
                >
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                {/* Instagram */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 rounded-full flex items-center justify-center text-white/85 hover:text-white hover:scale-110 transition-all"
                  aria-label="Instagram"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                  </svg>
                </a>
                {/* LinkedIn */}
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-7 h-7 rounded-full flex items-center justify-center text-white/85 hover:text-white hover:scale-110 transition-all"
                  aria-label="LinkedIn"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.67 1.67 0 1 0 0-3.34 1.67 1.67 0 0 0 0 3.34M7.86 18.5V10.13H5.07v8.37z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* ── Middle/Right Columns: Shop, About Us, Help, Newsletter ──────────────── */}
          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
            {/* Shop Column */}
            <div>
              <div className="inline-block mb-3 sm:mb-4">
                <h3 className="text-[11px] sm:text-[12px] tracking-[0.16em] uppercase font-semibold text-white">
                  Shop
                </h3>
                <span className="block w-6 h-[1px] bg-white/60 mt-1" />
              </div>
              <ul className="space-y-2 text-xs sm:text-[13px] text-white/80 font-normal">
                {shopLinks.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="hover:text-white transition-colors duration-200 inline-block py-0.5"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* About Us Column */}
            <div>
              <div className="inline-block mb-3 sm:mb-4">
                <h3 className="text-[11px] sm:text-[12px] tracking-[0.16em] uppercase font-semibold text-white">
                  About Us
                </h3>
                <span className="block w-8 h-[1px] bg-white/60 mt-1" />
              </div>
              <ul className="space-y-2 text-xs sm:text-[13px] text-white/80 font-normal">
                {aboutLinks.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="hover:text-white transition-colors duration-200 inline-block py-0.5"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Help & Support Column */}
            <div>
              <div className="inline-block mb-3 sm:mb-4">
                <h3 className="text-[11px] sm:text-[12px] tracking-[0.16em] uppercase font-semibold text-white">
                  Help & Support
                </h3>
                <span className="block w-12 h-[1px] bg-white/60 mt-1" />
              </div>
              <ul className="space-y-2 text-xs sm:text-[13px] text-white/80 font-normal">
                {helpLinks.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="hover:text-white transition-colors duration-200 inline-block py-0.5"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter Column */}
            <div className="col-span-2 sm:col-span-1">
              <div className="inline-block mb-3 sm:mb-4">
                <h3 className="text-[11px] sm:text-[12px] tracking-[0.16em] uppercase font-semibold text-white">
                  Newsletter
                </h3>
                <span className="block w-10 h-[1px] bg-white/60 mt-1" />
              </div>
              <p className="font-editorial italic text-xs sm:text-[13px] text-white/80 leading-relaxed font-normal mb-4">
                {newsletterDescription}
              </p>

              {subscribed ? (
                <div className="flex items-center gap-2 py-2 text-xs text-[#f8f2e4] font-medium">
                  <Check className="w-4 h-4 text-[#f8f2e4]" />
                  <span>Welcome to the circle.</span>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="flex items-stretch border border-white/70 hover:border-white focus-within:border-white transition-colors bg-transparent rounded-none max-w-xs"
                >
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={newsletterPlaceholder}
                    className="w-full bg-transparent px-3 py-2 text-xs sm:text-[13px] text-white placeholder:text-white/60 font-editorial italic focus:outline-none"
                    aria-label="Email address for newsletter"
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-[#f8f2e4] hover:bg-white text-[#0b3987] px-3.5 flex items-center justify-center transition-colors cursor-pointer shrink-0 disabled:opacity-50"
                    aria-label="Subscribe"
                  >
                    {isSubmitting ? (
                      <span className="w-3.5 h-3.5 border-2 border-[#0b3987] border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <ArrowRight className="w-4 h-4" />
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* ── Legal Links (Floating Right Above Mountain Ridge) ──────────────── */}
        <div className="mt-14 sm:mt-20 md:mt-24 mb-3 sm:mb-4 flex justify-end items-center gap-3 text-[11px] sm:text-[12px] text-white/75 font-editorial italic">
          {legalLinks.map((item, index) => (
            <React.Fragment key={item.label}>
              <a
                href={item.href}
                className="hover:text-white transition-colors"
              >
                {item.label}
              </a>
              {index < legalLinks.length - 1 && (
                <span className="text-white/40 not-italic">|</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* ── Bottom Desert Engraving with Lone Rider on Horseback ──────────────── */}
      <div className="relative w-full z-10 overflow-hidden leading-none pointer-events-none select-none">
        <img
          src={artworkSrc}
          alt="Antique cyanotype woodcut engraving of vast American frontier desert plain with lone rider on horse, sagebrush, and rolling mountains"
          className="w-full h-auto block select-none animate-desert-wind origin-bottom"
          draggable={false}
        />
      </div>
    </footer>
  )
}

export default SequelFrontierFooter
