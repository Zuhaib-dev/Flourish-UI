'use client'

import React, { useState } from 'react'
import EtchedAccretion, { AccretionPreset } from '@/components/ui/etched-accretion'
import { Sliders, ExternalLink, Activity } from 'lucide-react'

const PRESET_LABELS: Record<AccretionPreset, { label: string; desc: string; accent: string }> = {
  crimson: {
    label: 'Crimson',
    desc: 'Deep space obsidian with high-energy relativistic red bands',
    accent: '#d3121f',
  },
  ember: {
    label: 'Ember',
    desc: 'Solar flare orange disk burning through warm starlight',
    accent: '#ff6a13',
  },
  glacier: {
    label: 'Glacier',
    desc: 'Cryo-blue accretion disk tilted at -9° with icy nebula banks',
    accent: '#2f6bff',
  },
  ash: {
    label: 'Ash',
    desc: 'Monochrome archival copperplate print with high film grain',
    accent: '#8d8d8d',
  },
  orchid: {
    label: 'Orchid',
    desc: 'Deep purple ultraviolet corona with wide inclination',
    accent: '#b3219e',
  },
}

export default function Page() {
  const [preset, setPreset] = useState<AccretionPreset>('crimson')
  const [interactive, setInteractive] = useState(true)
  const [showHud, setShowHud] = useState(true)

  const activePresetInfo = PRESET_LABELS[preset]

  return (
    <main className="relative w-full h-screen overflow-hidden bg-[#030307] text-[#e9e4df] select-none">
      {/* Black Hole Engraving WebGL2 Canvas */}
      <EtchedAccretion
        preset={preset}
        interactive={interactive}
        height="100vh"
        aria-label={`Etched Accretion Black Hole in ${activePresetInfo.label} preset`}
      >
        <div className="relative z-10 w-full h-full flex flex-col justify-between p-6 sm:p-10 pointer-events-none">
          {/* Top Navigation Bar / Exhibition Header */}
          <header className="w-full max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 pointer-events-auto">
            <div className="flex items-center gap-3">
              <span className="font-mono text-[10px] sm:text-[11px] font-bold tracking-[0.24em] uppercase px-3.5 py-1.5 rounded-full border border-white/15 bg-black/60 backdrop-blur-md shadow-xs flex items-center gap-2 text-white">
                <span
                  className="size-2 rounded-full animate-pulse"
                  style={{ backgroundColor: activePresetInfo.accent }}
                />
                EDITORIAL EXPERIMENT ✦ 053 • ETCHED ACCRETION
              </span>
            </div>

            {/* Quick Exhibition Controls */}
            <div className="flex items-center gap-2 p-1 rounded-full border border-white/10 bg-black/50 backdrop-blur-md text-[11px] font-mono">
              <button
                type="button"
                onClick={() => setInteractive(!interactive)}
                className={`px-3 py-1 rounded-full flex items-center gap-1.5 transition-all cursor-pointer ${
                  interactive ? 'bg-white/20 text-white font-medium' : 'text-white/60 hover:text-white'
                }`}
                title="Toggle cursor parallax and singularity feed"
              >
                <Activity className="size-3.5" />
                <span className="hidden sm:inline">{interactive ? 'PARALLAX ON' : 'FROZEN'}</span>
              </button>

              <button
                type="button"
                onClick={() => setShowHud(!showHud)}
                className={`px-3 py-1 rounded-full flex items-center gap-1.5 transition-all cursor-pointer ${
                  showHud ? 'bg-white/20 text-white font-medium' : 'text-white/60 hover:text-white'
                }`}
                title="Toggle exhibition HUD"
              >
                <Sliders className="size-3.5" />
                <span className="hidden sm:inline">{showHud ? 'HUD VISIBLE' : 'CLEAN VIEW'}</span>
              </button>
            </div>
          </header>

          {/* Hero Headline Overlay */}
          {showHud && (
            <div className="w-full max-w-4xl mx-auto my-auto flex flex-col items-start gap-4">
              <div className="max-w-2xl pointer-events-auto">
                <div className="flex items-center gap-2 mb-3">
                  <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/50 bg-white/5 px-2.5 py-1 rounded-sm border border-white/10">
                    ASTROPHYSICAL ENGRAVING
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/40">
                    WebGL2 FRAGMENT SHADER
                  </span>
                </div>
                <h1 className="text-4xl sm:text-6xl md:text-7xl font-light tracking-tight text-white leading-[1.04]">
                  Nothing{' '}
                  <span
                    className="italic font-normal transition-colors duration-500"
                    style={{ color: activePresetInfo.accent }}
                  >
                    escapes
                  </span>{' '}
                  the horizon.
                </h1>
                <p className="mt-4 font-mono text-[11px] sm:text-[12px] uppercase tracking-[0.25em] text-white/60 max-w-lg leading-relaxed">
                  Tilted accretion disk of hair-thin streaks · relativistic Doppler beaming · photon
                  crown flare · contour line nebula banks.
                </p>
              </div>

              {/* Preset Selector */}
              <div className="mt-3 flex flex-wrap items-center gap-2 pointer-events-auto">
                {(Object.keys(PRESET_LABELS) as AccretionPreset[]).map((key) => {
                  const p = PRESET_LABELS[key]
                  const isActive = preset === key
                  return (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setPreset(key)}
                      className={`group px-3.5 py-1.5 rounded-full border text-xs font-mono tracking-wider transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                        isActive
                          ? 'bg-white/20 border-white/50 text-white shadow-[0_0_20px_rgba(255,255,255,0.15)] font-semibold'
                          : 'bg-black/40 border-white/15 text-white/60 hover:text-white hover:border-white/30'
                      }`}
                    >
                      <span
                        className="size-2 rounded-full transition-transform group-hover:scale-125"
                        style={{ backgroundColor: p.accent }}
                      />
                      <span>{p.label}</span>
                    </button>
                  )
                })}
              </div>
            </div>
          )}

          {/* Bottom Exhibition Info HUD */}
          {showHud && (
            <footer className="w-full max-w-7xl mx-auto flex flex-wrap items-end justify-between gap-4 pointer-events-auto">
              <div className="flex flex-col gap-1 text-white/50 font-mono text-[11px]">
                <div className="flex items-center gap-2">
                  <span className="size-1.5 rounded-full bg-emerald-400" />
                  <span className="text-white/80 font-medium">MOVE POINTER TO DRIFT</span>
                  <span className="text-white/30">|</span>
                  <span className="text-white/80 font-medium">HOLD CLICK TO FEED SINGULARITY</span>
                </div>
                <p className="text-[10px] text-white/40 tracking-wider">
                  Adaptive resolution buffer · 0 external textures · Procedural Burin line cut
                </p>
              </div>

              <div className="flex items-center gap-3 font-mono text-[10px] text-white/40">
                <span className="hidden sm:inline">SCHWARZSCHILD METRIC (SIMULATED)</span>
                <span className="text-white/20">•</span>
                <a
                  href="https://flourish-ui.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-1"
                >
                  <span>FLOURISH UI</span>
                  <ExternalLink className="size-3" />
                </a>
              </div>
            </footer>
          )}
        </div>
      </EtchedAccretion>
    </main>
  )
}

