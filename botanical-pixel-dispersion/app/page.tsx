'use client'

import React, { useState } from 'react'
import { BotanicalPixelDispersion } from '../components/botanical-pixel-dispersion'
import { Sparkles, Flower2, Maximize2, RefreshCw } from 'lucide-react'

export default function Page() {
  const [flowerVariation, setFlowerVariation] = useState<'gerbera' | 'cosmos'>('gerbera')

  return (
    <main className="min-h-screen w-full bg-[#f6f5f3] flex flex-col items-center justify-between py-8 sm:py-12 px-4 sm:px-6 relative overflow-x-hidden selection:bg-rose-500 selection:text-white">
      
      {/* Top Exhibition Badge & Hint */}
      <header className="w-full max-w-2xl mx-auto flex items-center justify-between mb-6 text-black/80">
        <div className="flex items-center gap-2.5">
          <span className="font-mono text-[10px] sm:text-[11px] font-bold tracking-[0.22em] uppercase bg-white/80 backdrop-blur-xs px-3 py-1.5 rounded-full border border-black/10 shadow-2xs">
            EDITORIAL EXPERIMENT ✦ 045 • RASTER DYNAMICS
          </span>
        </div>

        {/* Flower Botanical Switcher */}
        <div className="flex items-center gap-2 bg-white/80 backdrop-blur-xs p-1 rounded-full border border-black/10 shadow-2xs font-mono text-[10.5px]">
          <button
            id="flower-gerbera-btn"
            type="button"
            onClick={() => setFlowerVariation('gerbera')}
            className={`px-3 py-1 rounded-full font-bold transition-all cursor-pointer ${
              flowerVariation === 'gerbera'
                ? 'bg-black text-white shadow-xs'
                : 'text-black/60 hover:text-black'
            }`}
          >
            GERBERA
          </button>
          <button
            id="flower-cosmos-btn"
            type="button"
            onClick={() => setFlowerVariation('cosmos')}
            className={`px-3 py-1 rounded-full font-bold transition-all cursor-pointer ${
              flowerVariation === 'cosmos'
                ? 'bg-black text-white shadow-xs'
                : 'text-black/60 hover:text-black'
            }`}
          >
            COSMOS
          </button>
        </div>
      </header>

      {/* Centerpiece: The Botanical Mosaic Pixel Artwork */}
      <div className="w-full flex flex-col items-center justify-center py-2 relative z-10">
        <BotanicalPixelDispersion
          key={flowerVariation}
          flowerImageSrc={flowerVariation === 'gerbera' ? '/flower.jpg' : '/flower-cosmos.jpg'}
          flowerAlt={
            flowerVariation === 'gerbera'
              ? 'Vibrant Pink Gerbera Daisy — Botanical Pixel Dispersion'
              : 'Vibrant Magenta Cosmos — Botanical Pixel Dispersion'
          }
        />

        {/* Tactile Interaction Hint */}
        <div className="mt-5 text-center">
          <p className="font-mono text-[10.5px] sm:text-[11.5px] tracking-[0.16em] uppercase text-black/55 flex items-center justify-center gap-2">
            <span>MOVE CURSOR TO SCATTER TILES</span>
            <span>✦</span>
            <span>CLICK FOR SHOCKWAVE BURST</span>
          </p>
        </div>
      </div>

      {/* Bottom Exhibition Attribution */}
      <footer className="w-full max-w-2xl mx-auto mt-10 pt-5 border-t border-black/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-black/60">
        <div className="flex items-center gap-2 text-[11px]">
          <span>BOTANICAL MOSAIC PIXEL DISPERSION</span>
          <span>•</span>
          <span>FLOURISH UI</span>
        </div>
        <div className="text-[11px]">
          <span>Crafted by </span>
          <a
            href="https://www.zuhaibrashid.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-black underline hover:text-rose-600 transition-colors"
          >
            Zuhaib Rashid
          </a>
        </div>
      </footer>
    </main>
  )
}
