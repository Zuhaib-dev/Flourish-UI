'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ShoppingBag, Sparkles, X, Plus, Check } from 'lucide-react'

export interface CandyItem {
  id: string
  name: string
  swedishName: string
  category: string
  description: string
  tag: string
  color: string
}

export const SWEDISH_CANDIES: CandyItem[] = [
  {
    id: 'bubs-skalle',
    name: 'Sour Raspberry Foam Skulls',
    swedishName: 'Bubs Hallon/Lakrits Skalle',
    category: 'Foam & Gummy',
    description: 'The iconic Swedish foam skull featuring sweet wild raspberry paired with tangy sour sugar crystals.',
    tag: 'BESTSELLER',
    color: '#f43f5e',
  },
  {
    id: 'ahlgrens-bilar',
    name: "Sweden's Most Bought Car",
    swedishName: 'Ahlgrens Bilar',
    category: 'Chewy Marshmallow',
    description: 'Classic pastel marshmallow cars invented in 1953. Soft, chewy, and irresistibly fruity.',
    tag: 'HERITAGE',
    color: '#ec4899',
  },
  {
    id: 'sur-smultron',
    name: 'Sour Wild Strawberry Drops',
    swedishName: 'Sur Smultron',
    category: 'Sour Gummy',
    description: 'Juicy Scandinavian wild strawberry jellies coated in mouth-puckering sour malic acid.',
    tag: 'SOUR',
    color: '#ef4444',
  },
  {
    id: 'djungelvral',
    name: 'Super Salty Licorice Monkeys',
    swedishName: 'Djungelvrål',
    category: 'Salt Licorice',
    description: 'Intense salmiak salt coating over tender black licorice. An authentic Swedish rite of passage.',
    tag: 'AUTHENTIC',
    color: '#1f2937',
  },
]

export interface SwedishCandyCartHeroProps {
  locationText?: string
  headlineLine1?: string
  headlineLine2?: string
  headlineLine3?: string
  descriptionText?: string
  ctaButtonText?: string
  scriptCalloutText?: string
  cartImageSrc?: string
  className?: string
}

export function SwedishCandyCartHero({
  locationText = '(BASED IN PITTSBURGH, PA)',
  headlineLine1 = 'The Swedish Candy',
  headlineLine2 = 'Cart of Your',
  headlineLine3 = 'Dreams',
  descriptionText = 'Your go-to cart to call for events and catering, monthly candy club deliveries, online candy flees, and more.',
  ctaButtonText = 'JOIN THE CLUB',
  scriptCalloutText = 'catch me if you candy',
  cartImageSrc = '/candy-cart.jpg',
  className = '',
}: SwedishCandyCartHeroProps) {
  const [bagCount, setBagCount] = useState<number>(0)
  const [selectedCandyModal, setSelectedCandyModal] = useState<boolean>(false)
  const [addedCandyId, setAddedCandyId] = useState<string | null>(null)

  const handleAddCandy = (id: string) => {
    setBagCount((prev) => prev + 1)
    setAddedCandyId(id)
    setTimeout(() => setAddedCandyId(null), 1500)
  }

  return (
    <div
      className={`min-h-screen w-full candy-grid-bg text-[#881c34] flex flex-col justify-between selection:bg-[#f695b0] selection:text-white relative overflow-hidden ${className}`}
    >
      {/* 1. TOP AWNING & NAVIGATION BAR */}
      <div className="w-full relative z-30">
        <header className="w-full bg-[#fff5f7] px-6 sm:px-10 lg:px-20 pt-6 sm:pt-7 pb-5 flex items-center justify-between border-b border-[#f7d5df]/40 shadow-2xs">
          {/* Left Nav Links */}
          <nav className="flex items-center gap-7 sm:gap-11 text-[13px] sm:text-[14px] md:text-[15px] font-bold tracking-[0.16em] uppercase">
            <a
              href="#find-cart"
              onClick={(e) => {
                e.preventDefault()
                setSelectedCandyModal(true)
              }}
              className="hover:text-[#b02e4c] transition-colors cursor-pointer"
            >
              FIND THE CART
            </a>
            <a
              href="#book-event"
              onClick={(e) => {
                e.preventDefault()
                setSelectedCandyModal(true)
              }}
              className="hover:text-[#b02e4c] transition-colors cursor-pointer"
            >
              BOOK AN EVENT
            </a>
          </nav>

          {/* Center Bubbly Retro Brand Logo */}
          <div className="text-center px-4">
            <span className="font-bubbly-logo text-4xl sm:text-5xl md:text-[56px] text-[#881c34] font-black tracking-tighter hover:scale-105 transition-transform inline-block cursor-pointer select-none leading-none">
              nectar
            </span>
          </div>

          {/* Right Nav Links & Candy Bag */}
          <div className="flex items-center gap-7 sm:gap-10 text-[13px] sm:text-[14px] md:text-[15px] font-bold tracking-[0.16em] uppercase">
            <a
              href="#candy-club"
              onClick={(e) => {
                e.preventDefault()
                setSelectedCandyModal(true)
              }}
              className="hidden sm:inline-block hover:text-[#b02e4c] transition-colors cursor-pointer"
            >
              CANDY CLUB
            </a>
            <a
              href="#buy-candy"
              onClick={(e) => {
                e.preventDefault()
                setSelectedCandyModal(true)
              }}
              className="hover:text-[#b02e4c] transition-colors cursor-pointer"
            >
              BUY CANDY
            </a>

            {/* Candy Tote Bag Icon */}
            <button
              type="button"
              onClick={() => setSelectedCandyModal(true)}
              className="flex items-center gap-2 p-1.5 rounded-full hover:bg-[#fce6ed] transition-colors cursor-pointer"
              title="View Candy Bag"
            >
              <div className="relative">
                <ShoppingBag className="w-5 h-5 sm:w-6 sm:h-6 text-[#881c34]" />
                <span className="absolute -top-1.5 -right-2 bg-[#f695b0] text-[#881c34] text-[10px] font-black w-4 h-4 rounded-full flex items-center justify-center border border-[#fff5f7] shadow-xs">
                  {bagCount}
                </span>
              </div>
            </button>
          </div>
        </header>

        {/* 2. HANGING SCALLOPED AWNING FRINGE */}
        <div className="w-full flex overflow-hidden leading-none pointer-events-none select-none -mt-[1px]">
          {Array.from({ length: 60 }).map((_, i) => (
            <svg
              key={i}
              className="w-7 sm:w-8 h-3.5 sm:h-4 shrink-0 text-[#f695b0] fill-current drop-shadow-xs"
              viewBox="0 0 32 16"
              preserveAspectRatio="none"
            >
              <path d="M0 0 C 0 9.5, 7.5 16, 16 16 C 24.5 16, 32 9.5, 32 0 Z" />
            </svg>
          ))}
        </div>
      </div>

      {/* 3. HERO MAIN CONTENT */}
      <main className="w-full flex-1 px-6 sm:px-12 lg:px-20 pt-6 sm:pt-10 pb-12 sm:pb-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center relative z-10">
        
        {/* --- LEFT COLUMN: EDITORIAL HEADLINE & CTA --- */}
        <div className="lg:col-span-6 space-y-6 sm:space-y-7 relative">
          
          {/* Eyebrow Location Pill */}
          <div className="text-[12px] sm:text-[13px] font-extrabold tracking-[0.22em] text-[#881c34]/95 uppercase">
            {locationText}
          </div>

          {/* Main Display Headline */}
          <h1 className="font-editorial-serif text-[48px] sm:text-[64px] md:text-[76px] lg:text-[84px] xl:text-[92px] leading-[0.98] text-[#881c34] font-normal tracking-[-0.03em]">
            <span className="block">{headlineLine1}</span>
            <span className="block">{headlineLine2}</span>
            <span className="block">{headlineLine3}</span>
          </h1>

          {/* Subtitle Description */}
          <p className="text-[15px] sm:text-[16px] md:text-[17px] text-[#881c34]/85 leading-relaxed max-w-lg font-normal">
            {descriptionText}
          </p>

          {/* CTA Button & Hand-drawn Curly Arrow */}
          <div className="pt-2 flex items-center gap-4 relative">
            <button
              type="button"
              onClick={() => setSelectedCandyModal(true)}
              className="px-8 py-3.5 rounded-full bg-[#ccd9fe] hover:bg-[#bccbfb] active:scale-95 text-[#3730a3] text-[12px] sm:text-[13px] font-extrabold tracking-[0.16em] uppercase transition-all shadow-xs cursor-pointer border border-[#b4c4f9]"
            >
              {ctaButtonText}
            </button>

            {/* Hand-Drawn Whimsical Curly Maroon Arrow pointing right */}
            <div className="hidden sm:block absolute left-52 -top-1 pointer-events-none">
              <svg
                width="150"
                height="75"
                viewBox="0 0 150 75"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-[#881c34]"
              >
                <path
                  d="M10 40 C 35 12, 55 60, 80 32 C 102 12, 122 48, 142 42"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  fill="none"
                />
                <path
                  d="M132 34 L 144 42 L 136 50"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>

          {/* Floating Sweets near Left Column */}
          {/* 1. Amber Gummy Bear near 'Dreams' */}
          <motion.div
            className="absolute top-40 right-10 sm:right-24 pointer-events-none"
            animate={{ y: [0, -8, 0], rotate: [0, 6, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="w-7 h-9 rounded-t-full rounded-b-md bg-gradient-to-b from-amber-400 to-amber-500 shadow-md opacity-90 flex flex-col items-center justify-center p-0.5 border border-amber-300/40">
              <div className="flex gap-1.5 mb-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-700" />
                <span className="w-1.5 h-1.5 rounded-full bg-amber-700" />
              </div>
              <div className="w-3 h-3.5 rounded-full bg-amber-200/60" />
            </div>
          </motion.div>

          {/* 2. Red Swedish Licorice near bottom left */}
          <motion.div
            className="absolute -bottom-10 left-8 pointer-events-none"
            animate={{ y: [0, 8, 0], rotate: [0, -8, 0] }}
            transition={{ duration: 5.2, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          >
            <div className="w-4 h-8 rounded-sm bg-gradient-to-br from-rose-500 to-rose-700 shadow-md rotate-45 border-t border-rose-300" />
          </motion.div>
        </div>

        {/* --- RIGHT COLUMN: VINTAGE PIAGGIO APE CANDY TRUCK --- */}
        <div className="lg:col-span-6 relative flex flex-col items-center lg:items-end justify-center">
          
          {/* Soft Pink Aura behind cart */}
          <div className="absolute w-[85%] h-[85%] rounded-full bg-gradient-to-tr from-pink-300/35 to-rose-200/25 blur-3xl -z-10" />

          {/* Hand-Written Script Note: "catch me if you candy" */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="absolute -top-6 right-6 sm:right-16 z-20 pointer-events-none"
          >
            <div className="font-script text-2xl sm:text-3xl md:text-4xl text-[#881c34] font-bold tracking-wide -rotate-6 flex flex-col items-center drop-shadow-xs">
              <span>{scriptCalloutText}</span>
              <span className="text-xs text-[#f695b0]">✦</span>
            </div>
          </motion.div>

          {/* Floating Cherries near top right */}
          <motion.div
            className="absolute -top-12 right-0 sm:right-4 pointer-events-none z-10"
            animate={{ y: [0, -10, 0], rotate: [0, 6, 0] }}
            transition={{ duration: 3.6, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="flex items-center -space-x-1.5">
              <span className="w-5 h-5 rounded-full bg-gradient-to-br from-red-500 to-red-700 shadow-sm" />
              <span className="w-5 h-5 rounded-full bg-gradient-to-br from-red-600 to-red-800 shadow-sm" />
            </div>
          </motion.div>

          {/* The Vintage Red Candy Cart Truck (Larger & Seamlessly Blended) */}
          <div
            onClick={() => setSelectedCandyModal(true)}
            className="relative w-full max-w-[650px] lg:max-w-[720px] xl:max-w-[760px] aspect-[4/3] group cursor-pointer transition-transform duration-300 hover:scale-[1.02]"
          >
            <Image
              src="/candy-cart.jpg"
              alt="The Swedish Candy Cart - Nectar"
              fill
              className="object-contain drop-shadow-xl mix-blend-multiply"
              priority
            />

            {/* Subtle "Peek Inside" Hover Pill */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-[#fff5f7]/95 backdrop-blur-xs border border-[#881c34]/20 text-[#881c34] text-[11px] font-extrabold tracking-widest uppercase px-4 py-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity shadow-md flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5 text-[#f695b0]" />
              <span>PEEK INSIDE CART</span>
            </div>
          </div>

          {/* Floating Pastel Green Gummy Bear */}
          <motion.div
            className="absolute -bottom-8 left-16 sm:left-28 pointer-events-none"
            animate={{ y: [0, 8, 0], rotate: [0, -6, 0] }}
            transition={{ duration: 4.6, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
          >
            <div className="w-6 h-8 rounded-t-full rounded-b-md bg-gradient-to-b from-lime-300 to-emerald-400 shadow-md opacity-90 border border-lime-200/50" />
          </motion.div>

          {/* Floating Pink Peppermint Swirl Candy */}
          <motion.div
            className="absolute -bottom-6 right-10 pointer-events-none"
            animate={{ y: [0, -7, 0], rotate: [0, 10, 0] }}
            transition={{ duration: 4.2, repeat: Infinity, ease: 'easeInOut', delay: 1.2 }}
          >
            <div className="w-7 h-7 rounded-full border-2 border-[#f695b0] bg-white shadow-md flex items-center justify-center">
              <span className="w-3 h-3 rounded-full bg-[#f695b0]" />
            </div>
          </motion.div>
        </div>
      </main>

      {/* 4. MODAL: THE SWEDISH PICK & MIX TASTING MENU */}
      <AnimatePresence>
        {selectedCandyModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6"
            onClick={() => setSelectedCandyModal(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-[#fff5f7] candy-grid-bg border-2 border-[#881c34]/20 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-6 sm:p-8 relative text-[#881c34]"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedCandyModal(false)}
                className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#fce6ed] hover:bg-[#f695b0] hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                title="Close"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="space-y-6">
                <div>
                  <div className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#881c34]/80 mb-1">
                    TODAY'S SPECIAL SELECTION
                  </div>
                  <h2 className="font-editorial-serif text-3xl sm:text-4xl font-normal tracking-tight text-[#881c34]">
                    The Swedish Pick & Mix Menu
                  </h2>
                  <p className="text-xs sm:text-sm text-[#881c34]/80 mt-1">
                    Hand-crafted authentic sweets stocked fresh in our Pittsburgh mobile candy cart.
                  </p>
                </div>

                {/* Candy Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {SWEDISH_CANDIES.map((candy) => {
                    const isAdded = addedCandyId === candy.id

                    return (
                      <div
                        key={candy.id}
                        className="bg-white/85 backdrop-blur-xs border border-[#f7d5df] rounded-xl p-4 flex flex-col justify-between hover:shadow-md transition-shadow"
                      >
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span
                              className="text-[9px] font-black tracking-widest uppercase px-2 py-0.5 rounded-full"
                              style={{ backgroundColor: `${candy.color}15`, color: candy.color }}
                            >
                              {candy.tag}
                            </span>
                            <span className="text-[11px] font-script font-bold text-[#881c34]/70">
                              {candy.category}
                            </span>
                          </div>

                          <h3 className="font-bold text-base text-[#881c34] leading-tight">
                            {candy.name}
                          </h3>
                          <div className="text-[11px] italic font-editorial-serif text-[#881c34]/75">
                            {candy.swedishName}
                          </div>
                          <p className="text-[12px] text-[#881c34]/80 leading-snug">
                            {candy.description}
                          </p>
                        </div>

                        <div className="pt-4">
                          <button
                            type="button"
                            onClick={() => handleAddCandy(candy.id)}
                            className="w-full py-2 px-3 rounded-full bg-[#ccd9fe] hover:bg-[#bccbfb] active:scale-95 text-[#3730a3] text-[11px] font-bold tracking-wider uppercase transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                          >
                            {isAdded ? (
                              <>
                                <Check className="w-3.5 h-3.5 text-emerald-600" />
                                <span>ADDED TO BAG!</span>
                              </>
                            ) : (
                              <>
                                <Plus className="w-3.5 h-3.5" />
                                <span>ADD TO BAG</span>
                              </>
                            )}
                          </button>
                        </div>
                      </div>
                    )
                  })}
                </div>

                {/* Footer of Modal */}
                <div className="pt-2 border-t border-[#f7d5df] flex items-center justify-between text-xs">
                  <span className="text-[#881c34]/70">
                    Need the cart for weddings or birthdays?
                  </span>
                  <button
                    type="button"
                    onClick={() => setSelectedCandyModal(false)}
                    className="font-bold underline hover:text-[#b02e4c] cursor-pointer"
                  >
                    Inquire for Event Booking →
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
