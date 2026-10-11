"use client"

import * as React from "react"
import {
  LiquidButton,
  MetalButton,
  Button,
} from "@/components/ui/liquid-glass-button"
import {
  Sparkles,
  Layers,
  Droplets,
  Copy,
  Check,
  ArrowRight,
  Flame,
  Award,
} from "lucide-react"

export default function Home() {
  const [copied, setCopied] = React.useState(false)
  const [activeTab, setActiveTab] = React.useState<"liquid" | "metal" | "standard">("liquid")

  const copyCode = () => {
    navigator.clipboard.writeText(
      `import { LiquidButton, MetalButton } from "@/components/ui/liquid-glass-button"`
    )
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-neutral-950 text-neutral-100 antialiased selection:bg-cyan-500/20 selection:text-cyan-300">
      {/* Dynamic Background Glows */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[900px] rounded-full bg-gradient-to-b from-cyan-500/15 via-indigo-600/10 to-transparent blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 -left-32 h-96 w-96 rounded-full bg-violet-600/10 blur-[120px]" />
      <div className="pointer-events-none absolute top-1/2 -right-32 h-96 w-96 rounded-full bg-emerald-600/10 blur-[120px]" />

      {/* Grid Pattern Overlay */}
      <div 
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, #ffffff 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />

      <main className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-4 py-16 sm:px-6 lg:px-8">
        {/* Navigation / Header Badges */}
        <div className="mb-6 flex flex-wrap items-center justify-center gap-3">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1 text-xs font-medium text-cyan-300 backdrop-blur-md">
            <Sparkles className="size-3.5 text-cyan-400" />
            <span>Flourish UI — Component Series</span>
          </div>
          <a
            href="https://github.com/Zuhaib-dev/Flourish-UI"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/5 px-3.5 py-1 text-xs font-medium text-neutral-300 transition hover:border-white/20 hover:bg-white/10 hover:text-white"
          >
            <svg className="size-3.5 fill-current" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            <span>Zuhaib-dev/Flourish-UI</span>
          </a>
        </div>

        {/* Hero Title */}
        <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl">
          <span className="bg-gradient-to-b from-white via-neutral-100 to-neutral-400 bg-clip-text text-transparent">
            Liquid Glass &
          </span>{" "}
          <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent">
            Metal Buttons
          </span>
        </h1>

        <p className="mt-4 max-w-2xl text-center text-base text-neutral-400 sm:text-lg">
          Realistic refractive SVG glass turbulence distortion, tactile skeuomorphic 
          metallic depth, responsive bevels, and silky micro-interactions built for modern React.
        </p>

        {/* Action / Install Pill */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <div className="flex items-center gap-3 rounded-full border border-white/10 bg-neutral-900/80 px-4 py-2 font-mono text-xs text-neutral-300 backdrop-blur-md shadow-inner shadow-white/5">
            <span className="text-neutral-500">$</span>
            <span>npx shadcn@latest add @flourish/liquid-glass-button</span>
            <button
              onClick={copyCode}
              className="ml-2 inline-flex size-6 items-center justify-center rounded-md text-neutral-400 hover:text-white transition"
              title="Copy snippet"
            >
              {copied ? <Check className="size-3.5 text-emerald-400" /> : <Copy className="size-3.5" />}
            </button>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="mt-12 flex rounded-xl border border-white/10 bg-neutral-900/60 p-1 backdrop-blur-md">
          <button
            onClick={() => setActiveTab("liquid")}
            className={`flex items-center gap-2 rounded-lg px-4 py-2 text-xs font-semibold transition ${
              activeTab === "liquid"
                ? "bg-cyan-500/20 text-cyan-300 shadow-sm shadow-cyan-500/10 border border-cyan-500/30"
                : "text-neutral-400 hover:text-neutral-200"
            }`}
          >
            <Droplets className="size-3.5" />
            Liquid Glass
          </button>
          <button
            onClick={() => setActiveTab("metal")}
            className={`flex items-center gap-2 rounded-lg px-4 py-2 text-xs font-semibold transition ${
              activeTab === "metal"
                ? "bg-amber-500/20 text-amber-300 shadow-sm shadow-amber-500/10 border border-amber-500/30"
                : "text-neutral-400 hover:text-neutral-200"
            }`}
          >
            <Award className="size-3.5" />
            Tactile Metal
          </button>
          <button
            onClick={() => setActiveTab("standard")}
            className={`flex items-center gap-2 rounded-lg px-4 py-2 text-xs font-semibold transition ${
              activeTab === "standard"
                ? "bg-indigo-500/20 text-indigo-300 shadow-sm shadow-indigo-500/10 border border-indigo-500/30"
                : "text-neutral-400 hover:text-neutral-200"
            }`}
          >
            <Layers className="size-3.5" />
            Standard & Cool
          </button>
        </div>

        {/* Interactive Hero Preview Stage */}
        <div className="relative mt-8 w-full max-w-4xl overflow-hidden rounded-3xl border border-white/15 bg-neutral-900/30 p-8 shadow-2xl backdrop-blur-xl md:p-12">
          {/* Vibrantly patterned refraction backdrop for Liquid distortion test */}
          <div className="absolute inset-0 -z-10 opacity-70">
            <div className="absolute top-1/4 left-1/4 size-72 rounded-full bg-gradient-to-tr from-cyan-500 to-indigo-500 blur-3xl opacity-40 animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 size-72 rounded-full bg-gradient-to-tr from-fuchsia-500 to-rose-500 blur-3xl opacity-30" />
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:16px_16px]" />
          </div>

          {activeTab === "liquid" && (
            <div className="flex flex-col items-center space-y-10">
              <div className="text-center">
                <span className="text-xs uppercase tracking-widest text-cyan-400 font-semibold">
                  Featured Interactive Element
                </span>
                <h3 className="mt-1 text-2xl font-bold text-white">Liquid Glass Refraction</h3>
                <p className="mt-1 text-xs text-neutral-400 max-w-md mx-auto">
                  Powered by turbulent SVG filters (`feDisplacementMap` + `feTurbulence`) with multi-layered specular borders and soft inner highlights.
                </p>
              </div>

              {/* Main Demo Button */}
              <div className="relative flex min-h-[180px] w-full max-w-xl items-center justify-center rounded-2xl border border-white/10 bg-neutral-950/40 p-6 backdrop-blur-sm">
                <div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none">
                  <div className="h-24 w-72 bg-gradient-to-r from-cyan-400 via-violet-400 to-fuchsia-400 rounded-full blur-xl" />
                </div>
                <LiquidButton size="xxl" className="z-10 font-medium tracking-wide">
                  <span className="flex items-center gap-2">
                    <Droplets className="size-5 text-cyan-400 animate-pulse" />
                    Liquid Glass Button
                    <ArrowRight className="size-4 opacity-70" />
                  </span>
                </LiquidButton>
              </div>

              {/* Size Variations */}
              <div className="w-full">
                <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-neutral-400 text-center">
                  Size Variations
                </h4>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <LiquidButton size="sm">Small Glass</LiquidButton>
                  <LiquidButton size="default">Default Glass</LiquidButton>
                  <LiquidButton size="lg">Large Glass</LiquidButton>
                  <LiquidButton size="xl">Extra Large</LiquidButton>
                </div>
              </div>

              {/* Variant Variations */}
              <div className="w-full">
                <h4 className="mb-4 text-xs font-semibold uppercase tracking-wider text-neutral-400 text-center">
                  Variant Palettes
                </h4>
                <div className="flex flex-wrap items-center justify-center gap-4">
                  <LiquidButton variant="default">Default</LiquidButton>
                  <LiquidButton variant="secondary">Secondary</LiquidButton>
                  <LiquidButton variant="destructive">Destructive</LiquidButton>
                  <LiquidButton variant="outline">Outline</LiquidButton>
                  <LiquidButton variant="ghost">Ghost</LiquidButton>
                </div>
              </div>
            </div>
          )}

          {activeTab === "metal" && (
            <div className="flex flex-col items-center space-y-10">
              <div className="text-center">
                <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold">
                  Skeuomorphic Craft
                </span>
                <h3 className="mt-1 text-2xl font-bold text-white">Tactile Metal Buttons</h3>
                <p className="mt-1 text-xs text-neutral-400 max-w-md mx-auto">
                  Dynamic bevel highlights, pressed spring translation, custom text shadows, and responsive touch feedback.
                </p>
              </div>

              {/* Main Metal Showcase */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-3xl">
                <div className="flex flex-col items-center justify-center rounded-2xl border border-white/5 bg-neutral-950/40 p-6 text-center">
                  <span className="mb-3 text-xs font-medium text-neutral-400">Titanium Default</span>
                  <MetalButton variant="default">Default Metal</MetalButton>
                </div>
                <div className="flex flex-col items-center justify-center rounded-2xl border border-white/5 bg-neutral-950/40 p-6 text-center">
                  <span className="mb-3 text-xs font-medium text-neutral-400">Midnight Primary</span>
                  <MetalButton variant="primary">Primary Cobalt</MetalButton>
                </div>
                <div className="flex flex-col items-center justify-center rounded-2xl border border-white/5 bg-neutral-950/40 p-6 text-center">
                  <span className="mb-3 text-xs font-medium text-neutral-400">Emerald Mint</span>
                  <MetalButton variant="success">Success Jade</MetalButton>
                </div>
                <div className="flex flex-col items-center justify-center rounded-2xl border border-white/5 bg-neutral-950/40 p-6 text-center">
                  <span className="mb-3 text-xs font-medium text-neutral-400">Ruby Crimson</span>
                  <MetalButton variant="error">Error Crimson</MetalButton>
                </div>
                <div className="flex flex-col items-center justify-center rounded-2xl border border-white/5 bg-neutral-950/40 p-6 text-center">
                  <span className="mb-3 text-xs font-medium text-neutral-400">24K Bullion</span>
                  <MetalButton variant="gold">Gold Lustre</MetalButton>
                </div>
                <div className="flex flex-col items-center justify-center rounded-2xl border border-white/5 bg-neutral-950/40 p-6 text-center">
                  <span className="mb-3 text-xs font-medium text-neutral-400">Antique Bronze</span>
                  <MetalButton variant="bronze">Antique Bronze</MetalButton>
                </div>
              </div>
            </div>
          )}

          {activeTab === "standard" && (
            <div className="flex flex-col items-center space-y-10">
              <div className="text-center">
                <span className="text-xs uppercase tracking-widest text-indigo-400 font-semibold">
                  Standard Extensions
                </span>
                <h3 className="mt-1 text-2xl font-bold text-white">Enhanced Standard Buttons</h3>
                <p className="mt-1 text-xs text-neutral-400 max-w-md mx-auto">
                  Shadcn-compatible standard Button with extended `cool` elevation styling and dark inset shadows.
                </p>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-4 py-8">
                <Button variant="cool" size="lg">
                  <Flame className="size-4 text-amber-400" />
                  Cool Variant
                </Button>
                <Button variant="default" size="lg">
                  Default Button
                </Button>
                <Button variant="secondary" size="lg">
                  Secondary
                </Button>
                <Button variant="destructive" size="lg">
                  Destructive
                </Button>
                <Button variant="outline" size="lg">
                  Outline
                </Button>
                <Button variant="ghost" size="lg">
                  Ghost
                </Button>
              </div>
            </div>
          )}
        </div>

        {/* Feature Highlights Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
          <div className="rounded-2xl border border-white/10 bg-neutral-900/40 p-6 backdrop-blur-md">
            <div className="flex size-10 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-4">
              <Droplets className="size-5" />
            </div>
            <h4 className="text-base font-semibold text-white">SVG Turbulence Filter</h4>
            <p className="mt-2 text-xs text-neutral-400 leading-relaxed">
              Dynamically generates fluid refraction and organic ripples using native `feTurbulence` and `feDisplacementMap` filters.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-neutral-900/40 p-6 backdrop-blur-md">
            <div className="flex size-10 items-center justify-center rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20 mb-4">
              <Award className="size-5" />
            </div>
            <h4 className="text-base font-semibold text-white">Tactile Skeuomorphism</h4>
            <p className="mt-2 text-xs text-neutral-400 leading-relaxed">
              Calculates hardware-accelerated 3D transforms, double-ring border gradients, and shine sweeps for an ultra-realistic metallic feel.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-neutral-900/40 p-6 backdrop-blur-md">
            <div className="flex size-10 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 mb-4">
              <Layers className="size-5" />
            </div>
            <h4 className="text-base font-semibold text-white">Shadcn & Tailwind v4</h4>
            <p className="mt-2 text-xs text-neutral-400 leading-relaxed">
              Fully compliant with modern `@theme inline` variables, `@radix-ui/react-slot`, `asChild` composition, and strict TypeScript.
            </p>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-20 flex flex-col items-center justify-center gap-2 border-t border-white/5 pt-8 text-center text-xs text-neutral-500">
          <p>
            Crafted with precision by{" "}
            <a
              href="https://github.com/Zuhaib-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-white transition font-medium"
            >
              Zuhaib Rashid (@Zuhaib-dev)
            </a>{" "}
            for Flourish UI.
          </p>
          <p>Distributed under the MIT License.</p>
        </footer>
      </main>
    </div>
  )
}
