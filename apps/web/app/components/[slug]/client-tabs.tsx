'use client'

import { useEffect, useRef, useState } from 'react'
import { Check, ChevronDown, Clipboard, Code2, Copy, Terminal } from 'lucide-react'
import type { ComponentEntry } from '@/config/components'
import { playUiSound } from '@/app/ui-sounds'

type PackageManager = 'pnpm' | 'npm' | 'bun' | 'yarn'

export default function ClientDetailTabs({ component }: { component: ComponentEntry }) {
  const [activeTab, setActiveTab] = useState<'install' | 'source'>('install')
  const [packageManager, setPackageManager] = useState<PackageManager>('pnpm')
  const [copied, setCopied] = useState<'command' | 'dependencies' | 'source' | null>(null)
  const [loadedSource, setLoadedSource] = useState<{ slug: string; code: string } | null>(null)
  const [sourceStatus, setSourceStatus] = useState<'idle' | 'loading' | 'ready' | 'error'>('idle')
  const sourceRequests = useRef(new Map<string, Promise<string>>())
  const sourceCode = loadedSource?.slug === component.slug ? loadedSource.code : null

  useEffect(() => {
    if (activeTab !== 'source' || sourceCode !== null) return

    let current = true
    setSourceStatus('loading')
    let request = sourceRequests.current.get(component.slug)
    if (!request) {
      request = fetch(`/api/components/${component.slug}/source`).then(async (response) => {
        if (!response.ok) throw new Error('Could not load component source')
        return response.text()
      })
      sourceRequests.current.set(component.slug, request)
    }

    request.then((code) => {
      if (!current) return
      setLoadedSource({ slug: component.slug, code })
      setSourceStatus('ready')
    }).catch(() => {
      sourceRequests.current.delete(component.slug)
      if (current) setSourceStatus('error')
    })

    return () => { current = false }
  }, [activeTab, component.slug, sourceCode])

  const commands: Record<PackageManager, string> = {
    pnpm: `pnpm dlx shadcn@latest add https://flourish-ui.vercel.app/r/${component.slug}.json`,
    npm: `npx shadcn@latest add https://flourish-ui.vercel.app/r/${component.slug}.json`,
    bun: `bunx --bun shadcn@latest add https://flourish-ui.vercel.app/r/${component.slug}.json`,
    yarn: `yarn dlx shadcn@latest add https://flourish-ui.vercel.app/r/${component.slug}.json`,
  }
  const dependencyCommands: Record<PackageManager, string> = {
    pnpm: `pnpm add ${component.dependencies.join(' ')}`,
    npm: `npm install ${component.dependencies.join(' ')}`,
    bun: `bun add ${component.dependencies.join(' ')}`,
    yarn: `yarn add ${component.dependencies.join(' ')}`,
  }
  const namedExports: Record<string, string> = {
    'credit-card-form': 'CreditCardForm',
    'kinetic-hover': 'KineticHover',
    'prisma-hero': 'PrismaHero',
    'raster-dynamics-wordmark': 'RasterDynamicsWordmark',
    'waves-shaders-homlu-ui': 'ShaderBackground',
  }
  const exportName = namedExports[component.slug]
  const componentName = exportName ?? 'Component'
  const importLine = exportName
    ? `import { ${exportName} } from "@/components/flourish/${component.slug}"`
    : `import ${componentName} from "@/components/flourish/${component.slug}"`
  const usage = component.slug === 'skiper39'
    ? `${importLine}\n\nexport default function Page() {\n  return <Component src="/images/your-image.jpg" />\n}`
    : component.slug === 'kinetic-hover'
          ? `${importLine}\n\n// Add this image to public/images/project.jpg.\nconst items = [{\n  id: "project-1", number: "01", title: "A project",\n  category: "Web", description: "A short project description.",\n  image: "/images/project.jpg", color: "#d86b43",\n}]\n\nexport default function Page() {\n  return <KineticHover items={items} />\n}`
      : component.slug === 'waves-shaders-homlu-ui'
        ? `${importLine}\n\nexport default function Page() {\n  return <div className="h-96"><ShaderBackground /></div>\n}`
        : `${importLine}\n\nexport default function Page() {\n  return <${componentName} />\n}`

  async function copy(text: string, type: NonNullable<typeof copied>) {
    try {
      await navigator.clipboard.writeText(text)
      playUiSound('copy')
      setCopied(type)
      window.setTimeout(() => setCopied(null), 1800)
    } catch {
      setCopied(null)
    }
  }

  return (
    <section className="detail-tabs" aria-label="Install or inspect component source">
      <div className="detail-tabs-header" role="tablist" aria-label="Component resources">
        <button role="tab" aria-selected={activeTab === 'install'} onClick={() => { if (activeTab !== 'install') playUiSound('tab'); setActiveTab('install') }} className={activeTab === 'install' ? 'active' : ''}><Terminal size={14} /> Install</button>
        <button role="tab" aria-selected={activeTab === 'source'} onClick={() => { if (activeTab !== 'source') playUiSound('tab'); setActiveTab('source') }} className={activeTab === 'source' ? 'active' : ''}><Code2 size={14} /> Source</button>
        <span>REGISTRY ITEM</span>
      </div>

      {activeTab === 'install' ? (
        <div className="detail-install-content" role="tabpanel">
          <div className="manager-row"><span>PACKAGE MANAGER</span><div>{(['pnpm', 'npm', 'bun', 'yarn'] as const).map((manager) => <button key={manager} onClick={() => { if (packageManager !== manager) playUiSound('tab'); setPackageManager(manager) }} className={packageManager === manager ? 'active' : ''} aria-pressed={packageManager === manager}>{manager}</button>)}</div></div>

          <div className="install-command-box"><div><Terminal size={13} /><code>{commands[packageManager]}</code></div><button onClick={() => copy(commands[packageManager], 'command')} aria-label="Copy install command">{copied === 'command' ? <Check size={14} /> : <Copy size={14} />}<span>{copied === 'command' ? 'Copied' : 'Copy command'}</span></button></div>
          <p className="install-destination"><Check size={12} /> Adds source to <code>components/flourish/</code></p>

          {component.dependencies.length > 0 && <details className="install-disclosure"><summary><span><span className="disclosure-index">01</span>Dependencies <small>{component.dependencies.length} packages</small></span><ChevronDown size={14} /></summary><div className="disclosure-content"><div className="dependency-tags">{component.dependencies.map((dependency) => <code key={dependency}>{dependency}</code>)}</div><button className="copy-subcommand" onClick={() => copy(dependencyCommands[packageManager], 'dependencies')}>{copied === 'dependencies' ? <Check size={13} /> : <Clipboard size={13} />}{copied === 'dependencies' ? 'Copied' : 'Copy install command'}</button></div></details>}

          <details className="install-disclosure"><summary><span><span className="disclosure-index">02</span>Usage example <small>Next.js / React</small></span><ChevronDown size={14} /></summary><div className="disclosure-content"><pre className="usage-example"><code>{usage}</code></pre><button className="copy-subcommand" onClick={() => copy(usage, 'source')}>{copied === 'source' ? <Check size={13} /> : <Clipboard size={13} />}{copied === 'source' ? 'Copied' : 'Copy example'}</button></div></details>
          <p className="install-note">First install? Run <code>pnpm dlx shadcn@latest init</code> once, then add this component. You get editable source code in your project.</p>
          <span className="sr-only" aria-live="polite">{copied ? 'Copied to clipboard' : ''}</span>
        </div>
      ) : (
        <div className="detail-source-content" role="tabpanel">
          <div className="source-filebar"><span><Code2 size={13} /> components/flourish/{component.slug}.tsx</span><span>{sourceCode ? `${sourceCode.split('\n').length.toLocaleString()} lines` : sourceStatus === 'error' ? 'Unavailable' : 'Load on demand'}</span><button disabled={!sourceCode} onClick={() => sourceCode && copy(sourceCode, 'source')}>{copied === 'source' ? <Check size={13} /> : <Copy size={13} />}{copied === 'source' ? 'Copied' : 'Copy source'}</button></div>
          <pre className="source-code"><code>{sourceCode ?? (sourceStatus === 'error' ? 'Source could not be loaded. Try opening the Source tab again.' : 'Loading component source…')}</code></pre>
          <span className="sr-only" aria-live="polite">{copied === 'source' ? 'Source copied to clipboard' : ''}</span>
        </div>
      )}
    </section>
  )
}
