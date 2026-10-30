'use client'

import React, { useState } from 'react'
import ClothingRailHeroDemo from '../../../components/preview-components/product-rail-gallery-demo'
import { Sparkles, Moon, Sun, ShoppingBag } from 'lucide-react'

export default function Page() {
  const [isDark, setIsDark] = useState(false)
  const [autoplay, setAutoplay] = useState(true)

  const toggleTheme = () => {
    setIsDark(!isDark)
    if (!isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  return (
    <main
      className={`min-h-screen w-full flex flex-col justify-between py-6 sm:py-10 px-4 sm:px-6 relative transition-colors duration-300 ${
        isDark ? 'dark bg-[#0c0d10] text-zinc-100' : 'bg-[#fbfbf9] text-zinc-900'
      }`}
    >
      {/* Top Exhibition Badge & Controls */}
      <header className="w-full max-w-5xl mx-auto flex flex-wrap items-center justify-between gap-4 mb-4 z-20">
        <div className="flex items-center gap-2.5">
          <span className="font-mono text-[10px] sm:text-[11px] font-bold tracking-[0.22em] uppercase bg-card/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-border shadow-xs flex items-center gap-2">
            <span className="size-2 rounded-full bg-emerald-500 animate-pulse" />
            EDITORIAL EXPERIMENT ✦ 046 • PRODUCT RAIL
          </span>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2 bg-card/80 backdrop-blur-md p-1 rounded-full border border-border shadow-xs font-mono text-[11px]">
          <button
            type="button"
            onClick={() => setAutoplay(!autoplay)}
            className={`px-3 py-1 rounded-full font-medium transition-all cursor-pointer ${
              autoplay
                ? 'bg-foreground text-background shadow-xs'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            {autoplay ? 'AUTOPLAY: ON' : 'AUTOPLAY: OFF'}
          </button>

          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle dark mode"
            className="p-1.5 rounded-full text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
          >
            {isDark ? <Sun className="size-3.5" /> : <Moon className="size-3.5" />}
          </button>
        </div>
      </header>

      {/* Main Centerpiece Exhibition Hero */}
      <div className="w-full max-w-6xl mx-auto flex-1 flex flex-col justify-center items-center relative z-10 my-auto">
        <ClothingRailHeroDemo autoplay={autoplay} />
      </div>

      {/* Interaction Hint */}
      <div className="text-center my-3 z-10">
        <p className="font-mono text-[10px] sm:text-[11px] tracking-[0.18em] uppercase text-muted-foreground flex flex-wrap items-center justify-center gap-2">
          <span>DRAG TO SLIDE HANGERS</span>
          <span>✦</span>
          <span>HOVER OR TOUCH TO FACE FRONT</span>
          <span>✦</span>
          <span>CLICK TO INSPECT DETAIL</span>
        </p>
      </div>

      {/* Bottom Exhibition Attribution */}
      <footer className="w-full max-w-5xl mx-auto mt-6 pt-5 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-muted-foreground z-20">
        <div className="flex items-center gap-2 text-[11px]">
          <span>PRODUCT RAIL GALLERY</span>
          <span>•</span>
          <span>FLOURISH UI</span>
        </div>
        <div className="text-[11px]">
          <span>Crafted by </span>
          <a
            href="https://www.zuhaibrashid.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-foreground underline hover:text-emerald-600 transition-colors"
          >
            Zuhaib Rashid
          </a>
        </div>
      </footer>
    </main>
  )
}
