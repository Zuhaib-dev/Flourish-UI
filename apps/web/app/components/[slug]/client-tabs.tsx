'use client'

import React, { useState } from 'react'
import {
  Check,
  Copy,
  Terminal,
  Code2,
  Package,
  Layers,
  ArrowRight,
  ShieldCheck,
  Zap,
} from 'lucide-react'
import { ComponentEntry } from '@/config/components'

export default function ClientDetailTabs({
  component,
}: {
  component: ComponentEntry
}) {
  const [activeTab, setActiveTab] = useState<'cli' | 'code'>('cli')
  const [packageManager, setPackageManager] = useState<'pnpm' | 'npm' | 'bun' | 'yarn'>('pnpm')
  const [copiedType, setCopiedType] = useState<string | null>(null)

  const getCmd = (pm: string) => {
    switch (pm) {
      case 'npm':
        return `npx shadcn@latest add https://flourish-ui.dev/r/${component.slug}.json`
      case 'bun':
        return `bunx --bun shadcn@latest add https://flourish-ui.dev/r/${component.slug}.json`
      case 'yarn':
        return `yarn dlx shadcn@latest add https://flourish-ui.dev/r/${component.slug}.json`
      case 'pnpm':
      default:
        return `pnpm dlx shadcn@latest add https://flourish-ui.dev/r/${component.slug}.json`
    }
  }

  const getDepCmd = (pm: string) => {
    if (component.dependencies.length === 0) return ''
    const deps = component.dependencies.join(' ')
    switch (pm) {
      case 'npm':
        return `npm install ${deps}`
      case 'bun':
        return `bun add ${deps}`
      case 'yarn':
        return `yarn add ${deps}`
      case 'pnpm':
      default:
        return `pnpm add ${deps}`
    }
  }

  const copy = async (text: string, type: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedType(type)
      setTimeout(() => setCopiedType(null), 2000)
    } catch (e) {
      console.error(e)
    }
  }

  const currentCommand = getCmd(packageManager)
  const depCommand = getDepCmd(packageManager)

  return (
    <div className="rounded-2xl border border-zinc-200 bg-white shadow-xl shadow-zinc-200/50 overflow-hidden">
      {/* Top Tab Switcher */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-zinc-100 bg-zinc-50/70">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveTab('cli')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
              activeTab === 'cli'
                ? 'bg-zinc-950 text-white shadow-sm'
                : 'text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100'
            }`}
          >
            <Terminal size={14} />
            <span>CLI Quickstart</span>
          </button>

          <button
            onClick={() => setActiveTab('code')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-medium transition-all ${
              activeTab === 'code'
                ? 'bg-zinc-950 text-white shadow-sm'
                : 'text-zinc-600 hover:text-zinc-950 hover:bg-zinc-100'
            }`}
          >
            <Code2 size={14} />
            <span>Full Source Code (.tsx)</span>
          </button>
        </div>

        <span className="hidden sm:inline text-[11px] font-mono text-zinc-400">
          COMPATIBLE WITH SHADCN CLI
        </span>
      </div>

      {/* Tab Content: CLI Quickstart */}
      {activeTab === 'cli' && (
        <div className="p-6 sm:p-8 flex flex-col gap-8">
          {/* Step 1: Package Manager Selection & Command */}
          <div>
            <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
              <span className="text-xs font-mono text-violet-600 uppercase tracking-wider font-semibold">
                STEP 01 // INSTALL VIA SHADCN CLI
              </span>

              {/* Package Manager Selector */}
              <div className="flex gap-1 p-1 rounded-xl bg-zinc-100 border border-zinc-200">
                {(['pnpm', 'npm', 'bun', 'yarn'] as const).map((pm) => (
                  <button
                    key={pm}
                    onClick={() => setPackageManager(pm)}
                    className={`px-3 py-1 rounded-lg text-xs font-mono transition-all ${
                      packageManager === pm
                        ? 'bg-white text-zinc-950 font-semibold shadow-2xs'
                        : 'text-zinc-500 hover:text-zinc-900'
                    }`}
                  >
                    {pm}
                  </button>
                ))}
              </div>
            </div>

            {/* Terminal Command Bar */}
            <div className="relative p-4 rounded-xl border border-zinc-900 bg-zinc-950 font-mono text-xs flex items-center justify-between gap-4 group shadow-sm">
              <div className="flex items-center gap-3 overflow-hidden text-zinc-300">
                <span className="text-zinc-600 select-none">$</span>
                <span className="truncate text-violet-300 selection:bg-violet-500 selection:text-white">
                  {currentCommand}
                </span>
              </div>

              <button
                onClick={() => copy(currentCommand, 'cli')}
                className="shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-800 bg-zinc-800 hover:bg-zinc-700 text-zinc-200 hover:text-white transition-all text-xs font-mono"
              >
                {copiedType === 'cli' ? (
                  <>
                    <Check size={13} className="text-emerald-400" />
                    <span className="text-emerald-400 font-semibold">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy size={13} />
                    <span>Copy Command</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Step 2: Dependencies */}
          {component.dependencies.length > 0 && (
            <div>
              <span className="text-xs font-mono text-violet-600 uppercase tracking-wider font-semibold block mb-3">
                STEP 02 // REQUIRED PACKAGES ({component.dependencies.length})
              </span>

              <div className="p-4 rounded-xl border border-zinc-200 bg-zinc-50/70 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex items-center gap-2 flex-wrap">
                  {component.dependencies.map((dep) => (
                    <span
                      key={dep}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-white border border-zinc-200 text-zinc-800 shadow-2xs"
                    >
                      {dep}
                    </span>
                  ))}
                </div>

                {depCommand && (
                  <button
                    onClick={() => copy(depCommand, 'dep')}
                    className="shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-200 bg-white hover:bg-zinc-100 text-xs font-mono text-zinc-700 hover:text-zinc-950 transition-all self-start sm:self-auto shadow-2xs"
                  >
                    {copiedType === 'dep' ? (
                      <>
                        <Check size={12} className="text-emerald-600" />
                        <span className="text-emerald-600 font-medium">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy size={12} />
                        <span>Copy Install Deps</span>
                      </>
                    )}
                  </button>
                )}
              </div>
            </div>
          )}

          {/* Step 3: Usage Snippet */}
          <div>
            <span className="text-xs font-mono text-violet-600 uppercase tracking-wider font-semibold block mb-3">
              STEP 03 // USAGE IN YOUR NEXT.JS APP
            </span>

            <div className="p-4 rounded-xl border border-zinc-900 bg-zinc-950 font-mono text-xs text-zinc-300 leading-relaxed overflow-x-auto shadow-sm">
              <pre className="text-zinc-400">
                <span className="text-violet-400">import</span> React <span className="text-violet-400">from</span> <span className="text-emerald-400">&apos;react&apos;</span>{'\n'}
                <span className="text-violet-400">import</span> Component <span className="text-violet-400">from</span> <span className="text-emerald-400">&apos;@/components/ui/{component.slug}&apos;</span>{'\n\n'}
                <span className="text-violet-400">export default function</span> <span className="text-amber-300">MyPage</span>() {'{\n'}
                {'  '}<span className="text-violet-400">return</span> ({'\n'}
                {'    '}&lt;<span className="text-blue-400">main</span> className=&quot;min-h-screen p-8 bg-zinc-50&quot;&gt;{'\n'}
                {'      '}&lt;<span className="text-amber-300">Component</span> /&gt;{'\n'}
                {'    '}&lt;/<span className="text-blue-400">main</span>&gt;{'\n'}
                {'  '})\n{'}'}
              </pre>
            </div>
          </div>

          {/* Value Props & Assurances */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-zinc-100 text-xs font-mono text-zinc-600">
            <div className="flex items-center gap-2">
              <ShieldCheck size={16} className="text-emerald-600 shrink-0" />
              <span>Full source code ownership</span>
            </div>
            <div className="flex items-center gap-2">
              <Zap size={16} className="text-amber-500 shrink-0" />
              <span>Zero external bundle bloat</span>
            </div>
            <div className="flex items-center gap-2">
              <Check size={16} className="text-violet-600 shrink-0" />
              <span>MIT License — free for commercial use</span>
            </div>
          </div>
        </div>
      )}

      {/* Tab Content: Full Source Code */}
      {activeTab === 'code' && (
        <div className="p-6 flex flex-col gap-4">
          <div className="flex items-center justify-between text-xs font-mono text-zinc-600">
            <div className="flex items-center gap-2">
              <Code2 size={14} className="text-violet-600" />
              <span>components/ui/{component.slug}.tsx</span>
              <span className="text-zinc-300">•</span>
              <span>{component.code.split('\n').length} lines</span>
            </div>

            <button
              onClick={() => copy(component.code, 'fullcode')}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-200 bg-white hover:bg-zinc-100 text-xs font-mono text-zinc-800 transition-all shadow-2xs font-medium"
            >
              {copiedType === 'fullcode' ? (
                <>
                  <Check size={13} className="text-emerald-600" />
                  <span className="text-emerald-600 font-semibold">Copied Source</span>
                </>
              ) : (
                <>
                  <Copy size={13} />
                  <span>Copy Full Code</span>
                </>
              )}
            </button>
          </div>

          <div className="code-scroll-container">
            <pre>
              <code>{component.code}</code>
            </pre>
          </div>
        </div>
      )}
    </div>
  )
}
