import React from 'react'
import { LettersFromTheGarden } from '../components/letters-from-the-garden'
import { Sparkles, Flower2, Heart, ExternalLink } from 'lucide-react'

export default function Page() {
  return (
    <main className="min-h-screen flex flex-col justify-between bg-[#f6efe7] text-[#323c33]">
      {/* ── Demo Page Hero / Ambient Header ──────────────── */}
      <section className="relative px-6 pt-16 sm:pt-24 pb-12 max-w-4xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#426149]/20 bg-[#426149]/5 text-[#426149] text-xs font-medium tracking-wide mb-6">
          <Flower2 className="w-3.5 h-3.5 text-[#426149]" />
          <span>Flourish UI — Editorial Collection</span>
        </div>

        <h1 className="font-editorial text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-[#323c33] leading-tight mb-4">
          Letters from the garden
        </h1>

        <p className="text-sm sm:text-base text-[#7e7b74] max-w-xl mx-auto leading-relaxed font-sans mb-8">
          An idyllic, cottagecore editorial footer and newsletter component with interactive breeze physics, floating wildflowers, and countryside clothesline artwork.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-[#7e7b74]">
          <span className="px-3 py-1 rounded-md bg-[#ede3d6] text-[#323c33] font-medium">React 19</span>
          <span className="px-3 py-1 rounded-md bg-[#ede3d6] text-[#323c33] font-medium">Next.js 16</span>
          <span className="px-3 py-1 rounded-md bg-[#ede3d6] text-[#323c33] font-medium">Tailwind CSS v4</span>
          <span className="px-3 py-1 rounded-md bg-[#ede3d6] text-[#323c33] font-medium">Pixel Perfect</span>
        </div>
      </section>

      {/* ── The Component ──────────────── */}
      <div className="w-full mt-auto border-t border-[#323c33]/10">
        <LettersFromTheGarden />
      </div>
    </main>
  )
}
