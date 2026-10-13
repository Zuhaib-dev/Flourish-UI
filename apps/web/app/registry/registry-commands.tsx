'use client'

import { useState } from 'react'
import { Check, Copy, Terminal } from 'lucide-react'
import { playUiSound } from '@/app/ui-sounds'

const commands = {
  pnpm: 'pnpm dlx shadcn@latest add https://flourish-ui.vercel.app/r/<component>.json',
  npm: 'npx shadcn@latest add https://flourish-ui.vercel.app/r/<component>.json',
  bun: 'bunx --bun shadcn@latest add https://flourish-ui.vercel.app/r/<component>.json',
  yarn: 'yarn dlx shadcn@latest add https://flourish-ui.vercel.app/r/<component>.json',
} as const

export default function RegistryCommands() {
  const [manager, setManager] = useState<keyof typeof commands>('pnpm')
  const [copied, setCopied] = useState(false)
  const command = commands[manager]

  async function copyCommand() {
    try {
      await navigator.clipboard.writeText(command)
      playUiSound('copy')
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1800)
    } catch { setCopied(false) }
  }

  return <section className="registry-command-panel" aria-labelledby="registry-command-heading">
    <div className="registry-command-header"><div><span>QUICKSTART</span><h2 id="registry-command-heading">Add any component in one command.</h2></div><Terminal size={19} aria-hidden="true" /></div>
    <div className="registry-manager-row" aria-label="Choose package manager">{(Object.keys(commands) as Array<keyof typeof commands>).map((item) => <button key={item} className={manager === item ? 'active' : ''} onClick={() => { playUiSound('tab'); setManager(item) }} aria-pressed={manager === item}>{item}</button>)}</div>
    <div className="registry-copy-command"><code>{command}</code><button onClick={copyCommand} aria-label="Copy registry command">{copied ? <Check size={15} /> : <Copy size={15} />}<span>{copied ? 'Copied' : 'Copy'}</span></button></div>
    <p>Replace <code>&lt;component&gt;</code> with a component slug, such as <code>skiper39</code>. Its source lands in <code>components/flourish/</code>.</p>
  </section>
}
