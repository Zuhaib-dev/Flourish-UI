'use client'

import React, { useState } from 'react'
import { Check, Copy, Terminal, Code2, Package, Layers } from 'lucide-react'
import { ComponentEntry, installCommand } from '@/config/components'

export default function ClientDetailTabs({
  component,
}: {
  component: ComponentEntry
}) {
  const [activeTab, setActiveTab] = useState<'cli' | 'code'>('cli')
  const [packageManager, setPackageManager] = useState<'pnpm' | 'npm' | 'bun' | 'yarn'>('pnpm')
  const [copied, setCopied] = useState<string | null>(null)

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

  const copy = async (text: string, label: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(label)
      setTimeout(() => setCopied(null), 1800)
    } catch (e) {
      console.error(e)
    }
  }

  const currentCommand = getCmd(packageManager)

  return (
    <div className="detail-columns mt-6">
      {/* Left Column: Installation */}
      <section className="flex flex-col gap-5">
        <div>
          <div className="eyebrow">
            <span className="eyebrow-rule" />
            <span>Installation Guide</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight">Deploy to your codebase.</h2>
          <p className="text-sm text-[var(--muted)] mt-1">
            Install this component with automatic dependency resolution using the shadcn CLI registry engine.
          </p>
        </div>

        {/* Package Manager Selector */}
        <div className="flex gap-2">
          {(['pnpm', 'npm', 'bun', 'yarn'] as const).map((pm) => (
            <button
              key={pm}
              onClick={() => setPackageManager(pm)}
              className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all ${
                packageManager === pm
                  ? 'bg-[var(--foreground)] text-[var(--background)] font-bold'
                  : 'bg-[var(--card)] text-[var(--muted)] border border-[var(--border)] hover:border-[var(--border-focus)]'
              }`}
            >
              {pm}
            </button>
          ))}
        </div>

        {/* Command Box */}
        <div className="install-box">
          <code>{currentCommand}</code>
          <button
            onClick={() => copy(currentCommand, 'cli')}
            aria-label="Copy terminal install command"
            className="hover:text-white transition-colors"
          >
            {copied === 'cli' ? <Check size={16} className="text-emerald-400" /> : <Copy size={16} />}
          </button>
        </div>

        {/* Verification Features */}
        <div className="install-options">
          <span className="flex items-center gap-2">
            <Check size={14} className="text-emerald-400" />
            <span>Zero build lock-in — pure .tsx source code deposited into your components/ folder.</span>
          </span>
          <span className="flex items-center gap-2">
            <Check size={14} className="text-emerald-400" />
            <span>Automated package manager dependency resolution.</span>
          </span>
          <span className="flex items-center gap-2">
            <Check size={14} className="text-emerald-400" />
            <span>MIT licensed by Zuhaib Rashid. Free for personal and commercial usage.</span>
          </span>
        </div>

        {/* Required Dependencies */}
        {component.dependencies.length > 0 && (
          <div className="mt-4 p-4 rounded-xl border border-[var(--border)] bg-[var(--card)]">
            <div className="text-xs font-mono font-semibold text-[var(--muted)] mb-2 flex items-center gap-2">
              <Package size={14} />
              REQUIRED NPM PACKAGES ({component.dependencies.length})
            </div>
            <div className="flex flex-wrap gap-2">
              {component.dependencies.map((dep) => (
                <span
                  key={dep}
                  className="px-2.5 py-1 rounded-md text-xs font-mono bg-[var(--subtle)] border border-[var(--border)] text-[var(--foreground)]"
                >
                  {dep}
                </span>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* Right Column: Source Code (.tsx) */}
      <section className="code-section flex flex-col">
        <div className="code-heading flex items-center justify-between pb-2">
          <div className="flex items-center gap-2 font-mono text-xs text-[var(--muted)]">
            <Code2 size={14} />
            <span>components/ui/{component.slug}.tsx</span>
          </div>

          <button
            onClick={() => copy(component.code, 'code')}
            aria-label="Copy component source code"
            className="flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-mono border border-[var(--border)] bg-[var(--card)] hover:border-[var(--border-focus)] transition-all"
          >
            {copied === 'code' ? (
              <>
                <Check size={13} className="text-emerald-400" />
                <span>Copied Code</span>
              </>
            ) : (
              <>
                <Copy size={13} />
                <span>Copy Code</span>
              </>
            )}
          </button>
        </div>

        <div className="relative rounded-xl border border-[var(--border)] bg-zinc-950 p-4 font-mono text-xs overflow-auto max-h-[520px] leading-relaxed text-zinc-300">
          <pre>
            <code>{component.code}</code>
          </pre>
        </div>
      </section>
    </div>
  )
}
