"use client";

import React, { useState } from "react";
import { WavesFlowShader } from "@/components/ui/waves-flow-shader";
import {
  Sparkles,
  Sliders,
  Copy,
  Check,
  Eye,
  MousePointer2,
  RefreshCw,
  Palette,
  Layers,
  Zap,
} from "lucide-react";

const PALETTES: Record<
  string,
  { name: string; colors: string[]; description: string }
> = {
  waves: {
    name: "Waves (Default)",
    colors: ["#1A1423", "#B75D69", "#EACDC2", "#FFF5EB"],
    description: "Deep plum to warm pearl OKLab blend",
  },
  emerald: {
    name: "Emerald Deep",
    colors: ["#071E22", "#1D7874", "#679289", "#F4C095"],
    description: "Abyssal greens to warm crests",
  },
  cyber: {
    name: "Neon Dusk",
    colors: ["#0D0221", "#540D6E", "#EE4266", "#FFD23F"],
    description: "Vibrant high-contrast energy",
  },
  aurora: {
    name: "Polar Aurora",
    colors: ["#051923", "#006494", "#00A6FB", "#EBF2FA"],
    description: "Glacial sapphire gradient",
  },
};

export default function WavesShaderDemoPage() {
  const [activePaletteKey, setActivePaletteKey] = useState("waves");
  const [interactiveCursor, setInteractiveCursor] = useState(false);
  const [oklab, setOklab] = useState(true);
  const [speedMultiplier, setSpeedMultiplier] = useState(-0.67);
  const [intensity, setIntensity] = useState(0.49);
  const [grain, setGrain] = useState(0.35);
  const [copied, setCopied] = useState(false);
  const [showControls, setShowControls] = useState(false);

  const activePalette = PALETTES[activePaletteKey];

  const handleCopyCode = () => {
    const code = `import { WavesFlowShader } from "@/components/ui/waves-flow-shader";

export default function App() {
  return (
    <main className="relative min-h-screen">
      <WavesFlowShader
        colors={["#1A1423", "#B75D69", "#EACDC2", "#FFF5EB"]}
      />
      <div className="relative z-10 flex min-h-screen items-center justify-center p-6">
        <h1 className="text-4xl font-bold text-white">Your Content Here</h1>
      </div>
    </main>
  );
}`;
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const resetDefaults = () => {
    setActivePaletteKey("waves");
    setInteractiveCursor(false);
    setOklab(true);
    setSpeedMultiplier(-0.67);
    setIntensity(0.49);
    setGrain(0.35);
  };

  return (
    <main className="relative min-h-screen w-full overflow-hidden bg-[#0d0b12] text-zinc-100 antialiased selection:bg-[#B75D69]/30 selection:text-white">
      {/* 
        The exact WavesFlowShader mounted absolutely behind all page content.
        Renders a fullscreen triangle in plain WebGL1 with zero external libraries.
        RAF pauses automatically whenever the browser tab is hidden.
      */}
      <WavesFlowShader
        colors={activePalette.colors}
        interactive={interactiveCursor}
        uniforms={{
          speed: speedMultiplier,
          zoom: 1.32,
          intensity: intensity,
          warp: 0.01,
          detail: 1.73,
          paramA: 0.84,
          contrast: 1.08,
          brightness: 0.07,
          saturation: 2.0,
          hue: 2.27,
          vignette: 0.0,
          grain: grain,
          seed: 4984.0,
          rotate: 3.37,
          drift: 0.4,
          oklab: oklab,
          offset: [-0.13, 0.05],
        }}
      />

      {/* Main Content Overlay */}
      <div className="relative z-10 flex min-h-screen flex-col justify-between px-6 py-8 md:px-12 md:py-12">
        {/* Top Navigation Bar */}
        <header className="flex w-full items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-lg shadow-black/20">
              <Sparkles className="h-5 w-5 text-[#EACDC2]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold tracking-wide text-white">
                  Flourish UI
                </span>
                <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-2 py-0.5 text-[10px] font-medium text-emerald-300">
                  WebGL1 Native
                </span>
              </div>
              <p className="text-xs text-zinc-400">Waves Flow Shader</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowControls(!showControls)}
              className={`flex items-center gap-2 rounded-xl border px-3.5 py-2 text-xs font-medium backdrop-blur-xl transition-all ${
                showControls
                  ? "border-[#B75D69]/60 bg-[#B75D69]/20 text-white"
                  : "border-white/10 bg-white/5 text-zinc-300 hover:border-white/20 hover:bg-white/10"
              }`}
            >
              <Sliders className="h-3.5 w-3.5" />
              <span>Inspector</span>
            </button>

            <button
              onClick={handleCopyCode}
              className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-3.5 py-2 text-xs font-medium text-zinc-300 backdrop-blur-xl transition-all hover:border-white/20 hover:bg-white/10 hover:text-white"
            >
              {copied ? (
                <>
                  <Check className="h-3.5 w-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied!</span>
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5" />
                  <span>Copy Code</span>
                </>
              )}
            </button>
          </div>
        </header>

        {/* Hero Section */}
        <div className="mx-auto my-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-3.5 py-1.5 text-xs text-zinc-300 backdrop-blur-xl">
            <Zap className="h-3.5 w-3.5 text-[#EACDC2]" />
            <span>Perceptual OKLab Color Mixing • Zero Runtime Libraries</span>
          </div>

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl">
            Organic fluid waves
            <br />
            <span className="bg-gradient-to-r from-[#FFF5EB] via-[#EACDC2] to-[#B75D69] bg-clip-text text-transparent">
              rendered on GPU.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-zinc-300/90 sm:text-base">
            Rendered with a single fullscreen triangle inside a plain WebGL1
            pipeline. Mathematical fractional Brownian motion (FBM) with organic
            domain warping and Dave Hoskins film grain.
          </p>

          {/* Color Palette Indicators */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-black/40 p-2 backdrop-blur-2xl">
              {activePalette.colors.map((hex, i) => (
                <div key={i} className="flex items-center gap-1.5 px-1.5">
                  <span
                    className="h-4 w-4 rounded-full border border-white/20 shadow-inner"
                    style={{ backgroundColor: hex }}
                  />
                  <span className="font-mono text-[11px] text-zinc-300">
                    {hex}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => setInteractiveCursor(!interactiveCursor)}
              className={`flex items-center gap-2 rounded-xl border px-4 py-2.5 text-xs font-semibold backdrop-blur-xl transition-all ${
                interactiveCursor
                  ? "border-[#EACDC2] bg-white text-zinc-900 shadow-lg shadow-white/10"
                  : "border-white/15 bg-white/10 text-white hover:bg-white/15"
              }`}
            >
              <MousePointer2 className="h-4 w-4" />
              <span>
                Cursor Distortion: {interactiveCursor ? "Active (Move Mouse)" : "Off (Default)"}
              </span>
            </button>

            <button
              onClick={() => setOklab(!oklab)}
              className={`flex items-center gap-2 rounded-xl border px-4 py-2.5 text-xs font-semibold backdrop-blur-xl transition-all ${
                oklab
                  ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-300 hover:bg-emerald-500/20"
                  : "border-amber-500/30 bg-amber-500/10 text-amber-300 hover:bg-amber-500/20"
              }`}
            >
              <Layers className="h-4 w-4" />
              <span>Color Space: {oklab ? "OKLab (Perceptual)" : "RGB (Linear)"}</span>
            </button>
          </div>
        </div>

        {/* Live Controls Modal / Drawer */}
        {showControls && (
          <div className="fixed bottom-24 right-6 z-50 w-80 rounded-2xl border border-white/15 bg-zinc-950/80 p-5 shadow-2xl backdrop-blur-2xl md:right-12">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <Sliders className="h-4 w-4 text-[#EACDC2]" />
                <h3 className="text-xs font-semibold text-white">Shader Parameters</h3>
              </div>
              <button
                onClick={resetDefaults}
                className="flex items-center gap-1 text-[11px] text-zinc-400 hover:text-white"
                title="Reset to default Feel parameters"
              >
                <RefreshCw className="h-3 w-3" />
                <span>Reset</span>
              </button>
            </div>

            <div className="mt-4 space-y-4 text-xs">
              <div>
                <label className="text-[11px] font-medium text-zinc-400">
                  Preset Palettes
                </label>
                <div className="mt-1.5 grid grid-cols-2 gap-1.5">
                  {Object.entries(PALETTES).map(([key, item]) => (
                    <button
                      key={key}
                      onClick={() => setActivePaletteKey(key)}
                      className={`flex items-center gap-2 rounded-lg border px-2.5 py-1.5 text-left text-[11px] transition-all ${
                        activePaletteKey === key
                          ? "border-[#B75D69] bg-[#B75D69]/20 font-medium text-white"
                          : "border-white/10 bg-white/5 text-zinc-400 hover:bg-white/10 hover:text-zinc-200"
                      }`}
                    >
                      <span
                        className="h-2.5 w-2.5 shrink-0 rounded-full"
                        style={{ backgroundColor: item.colors[1] }}
                      />
                      <span className="truncate">{item.name}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <div className="flex justify-between text-[11px] text-zinc-400">
                  <span>Wave Intensity</span>
                  <span className="font-mono text-zinc-300">
                    {Math.round(intensity * 100)}/100
                  </span>
                </div>
                <input
                  type="range"
                  min="0.1"
                  max="1.0"
                  step="0.01"
                  value={intensity}
                  onChange={(e) => setIntensity(parseFloat(e.target.value))}
                  className="mt-1.5 w-full accent-[#B75D69]"
                />
              </div>

              <div>
                <div className="flex justify-between text-[11px] text-zinc-400">
                  <span>Flow Speed</span>
                  <span className="font-mono text-zinc-300">
                    {Math.round(Math.abs(speedMultiplier) * 45)}/100
                  </span>
                </div>
                <input
                  type="range"
                  min="-2.0"
                  max="-0.1"
                  step="0.05"
                  value={speedMultiplier}
                  onChange={(e) => setSpeedMultiplier(parseFloat(e.target.value))}
                  className="mt-1.5 w-full accent-[#B75D69]"
                />
              </div>

              <div>
                <div className="flex justify-between text-[11px] text-zinc-400">
                  <span>Film Grain</span>
                  <span className="font-mono text-zinc-300">
                    {Math.round((grain / 0.35) * 100)}/100
                  </span>
                </div>
                <input
                  type="range"
                  min="0.0"
                  max="0.8"
                  step="0.05"
                  value={grain}
                  onChange={(e) => setGrain(parseFloat(e.target.value))}
                  className="mt-1.5 w-full accent-[#B75D69]"
                />
              </div>
            </div>
          </div>
        )}

        {/* Footer Specifications Info */}
        <footer className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-zinc-400 md:flex-row">
          <div className="flex flex-wrap items-center gap-4">
            <span className="font-mono text-[11px]">
              DPR: ≤ 2.0 • Triangle: 3 Verts • RAF: Tab-Paused
            </span>
            <span className="hidden text-zinc-600 md:inline">•</span>
            <span>Style: Waves (Flow Shader)</span>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Zuhaib-dev/Flourish-UI"
              target="_blank"
              rel="noreferrer"
              className="transition-colors hover:text-white"
            >
              Zuhaib Rashid
            </a>
            <span>•</span>
            <span className="text-zinc-500">21st.dev Shader Builder compatible</span>
          </div>
        </footer>
      </div>
    </main>
  );
}
