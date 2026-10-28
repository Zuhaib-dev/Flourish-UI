'use client'

import React, { useState } from 'react'
import { LiquidNavbar, NimbusIcons } from '@/components/ui/liquid-glass-navbar'
import { Volume2, VolumeX, Moon, Sun, Minimize2, Maximize2 } from 'lucide-react'

export default function Page() {
  const [tone, setTone] = useState<'light' | 'dark'>('light')
  const [sound, setSound] = useState(true)
  const [compact, setCompact] = useState(false)
  const [activeTab, setActiveTab] = useState(0)

  const isDark = tone === 'dark'

  const toggleTone = () => {
    const nextTone = isDark ? 'light' : 'dark'
    setTone(nextTone)
    if (nextTone === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  return (
    <main
      className={`min-h-screen w-full flex flex-col justify-between py-6 sm:py-10 px-4 sm:px-6 relative transition-colors duration-500 overflow-x-hidden ${
        isDark ? 'bg-[#0A1128] text-[#F1F7FF]' : 'bg-[#DCEBF5] text-[#0B132B]'
      }`}
    >
      {/* Background radial ambiance */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 opacity-40 transition-opacity duration-700"
        style={{
          background: isDark
            ? 'radial-gradient(circle at 50% 40%, rgba(0, 162, 255, 0.15) 0%, transparent 60%), radial-gradient(circle at 20% 80%, rgba(120, 80, 255, 0.1) 0%, transparent 50%)'
            : 'radial-gradient(circle at 50% 40%, rgba(255, 255, 255, 0.6) 0%, transparent 65%), radial-gradient(circle at 80% 20%, rgba(180, 220, 255, 0.5) 0%, transparent 50%)',
        }}
      />

      {/* Top Exhibition Badge & Quick Controls */}
      <header className="w-full max-w-4xl mx-auto flex flex-wrap items-center justify-between gap-3 mb-6 z-20">
        <div className="flex items-center gap-2.5">
          <span
            className={`font-mono text-[10px] sm:text-[11px] font-bold tracking-[0.22em] uppercase px-3.5 py-1.5 rounded-full border backdrop-blur-md shadow-xs flex items-center gap-2 transition-colors ${
              isDark
                ? 'bg-[#0F1A38]/80 border-[#F1F7FF]/15 text-[#F1F7FF]'
                : 'bg-white/70 border-[#0B132B]/10 text-[#0B132B]'
            }`}
          >
            <span className="size-2 rounded-full bg-cyan-400 animate-pulse" />
            EDITORIAL EXPERIMENT ✦ 047 • LIQUID GLASS NAVBAR
          </span>
        </div>

        {/* Action Controls */}
        <div
          className={`flex items-center gap-1.5 p-1 rounded-full border backdrop-blur-md shadow-xs font-mono text-[11px] transition-colors ${
            isDark ? 'bg-[#0F1A38]/80 border-[#F1F7FF]/15' : 'bg-white/70 border-[#0B132B]/10'
          }`}
        >
          {/* Sound Synthesizer Toggle */}
          <button
            type="button"
            onClick={() => setSound(!sound)}
            aria-label="Toggle synthesized sound"
            className={`px-2.5 py-1 rounded-full flex items-center gap-1.5 transition-all cursor-pointer ${
              sound
                ? isDark
                  ? 'bg-cyan-500/20 text-cyan-300 font-semibold'
                  : 'bg-[#0B132B] text-white font-semibold'
                : 'opacity-60 hover:opacity-100'
            }`}
          >
            {sound ? <Volume2 className="size-3.5" /> : <VolumeX className="size-3.5" />}
            <span className="hidden sm:inline">{sound ? 'SOUND ON' : 'MUTED'}</span>
          </button>

          {/* Compact Mode Toggle */}
          <button
            type="button"
            onClick={() => setCompact(!compact)}
            aria-label="Toggle compact mode"
            className={`px-2.5 py-1 rounded-full flex items-center gap-1.5 transition-all cursor-pointer ${
              compact
                ? isDark
                  ? 'bg-cyan-500/20 text-cyan-300 font-semibold'
                  : 'bg-[#0B132B] text-white font-semibold'
                : 'opacity-60 hover:opacity-100'
            }`}
          >
            {compact ? <Maximize2 className="size-3.5" /> : <Minimize2 className="size-3.5" />}
            <span className="hidden sm:inline">{compact ? 'COMPACT' : 'FULL'}</span>
          </button>

          {/* Theme Light/Dark Toggle */}
          <button
            type="button"
            onClick={toggleTone}
            aria-label="Toggle theme tone"
            className="p-1.5 rounded-full opacity-70 hover:opacity-100 transition-opacity cursor-pointer"
          >
            {isDark ? <Sun className="size-3.5 text-amber-300" /> : <Moon className="size-3.5 text-slate-700" />}
          </button>
        </div>
      </header>

      {/* Main Centerpiece: Liquid Waterline Navbar */}
      <div className="w-full max-w-4xl mx-auto flex-1 flex flex-col items-center justify-center gap-8 relative z-10 my-auto">
        <div className="text-center space-y-2 mb-2">
          <p className="font-mono text-[11px] font-medium tracking-[0.25em] uppercase opacity-60">
            Nimbus UI · Waterline
          </p>
          <h1 className="text-2xl sm:text-4xl font-semibold tracking-tight">
            A pill of living water.
          </h1>
          <p className="text-xs sm:text-sm max-w-[46ch] mx-auto opacity-70 leading-relaxed">
            Active drop stretches across items with surface tension, splits into droplets on long jumps, and ripples dynamically via real-time WebGL refraction.
          </p>
        </div>

        {/* The Liquid Navbar Component */}
        <div className="py-4">
          <LiquidNavbar
            tone={tone}
            active={activeTab}
            onChange={(idx) => setActiveTab(idx)}
            sound={sound}
            compact={compact}
            items={[
              { label: 'Home', icon: NimbusIcons.home, fx: 'glow' },
              { label: 'Explore', icon: NimbusIcons.globe, fx: 'spin' },
              { label: 'Flights', icon: NimbusIcons.plane, fx: 'plane' },
              { label: 'Weather', icon: NimbusIcons.drop, fx: 'drop' },
              { label: 'Profile', icon: NimbusIcons.user, fx: 'wave' },
            ]}
          />
        </div>

        {/* Tactile Interaction Hint */}
        <div className="text-center mt-2">
          <p className="font-mono text-[10px] sm:text-[11px] tracking-[0.18em] uppercase opacity-55 flex flex-wrap items-center justify-center gap-2">
            <span>HOVER TO LIFT MENISCUS</span>
            <span>✦</span>
            <span>CLICK TO DISPATCH WAVE</span>
            <span>✦</span>
            <span>JUMP DISTANCE TO SPLIT DROPLETS</span>
          </p>
        </div>
      </div>

      {/* Bottom Exhibition Attribution */}
      <footer
        className={`w-full max-w-4xl mx-auto mt-6 pt-5 border-t flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono z-20 transition-colors ${
          isDark ? 'border-[#F1F7FF]/10 text-[#F1F7FF]/60' : 'border-[#0B132B]/10 text-[#0B132B]/60'
        }`}
      >
        <div className="flex items-center gap-2 text-[11px]">
          <span>LIQUID GLASS NAVBAR</span>
          <span>•</span>
          <span>FLOURISH UI</span>
        </div>
        <div className="text-[11px]">
          <span>Crafted by </span>
          <a
            href="https://www.zuhaibrashid.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold underline hover:text-cyan-500 transition-colors"
          >
            Zuhaib Rashid
          </a>
        </div>
      </footer>
    </main>
  )
}
