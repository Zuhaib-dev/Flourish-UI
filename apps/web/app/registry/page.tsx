import type { Metadata } from 'next'
import { ArrowRight, CheckCircle2, CircleHelp, PackageCheck, Wrench } from 'lucide-react'
import RegistryCommands from './registry-commands'

export const metadata: Metadata = {
  title: 'Registry guide',
  description: 'Install Flourish UI components with the shadcn CLI, understand dependencies, and resolve common setup issues.',
  alternates: { canonical: '/registry' },
}

export default function RegistryPage() {
  return <main className="registry-page">
    <header className="premium-nav"><div className="premium-nav-inner"><a href="/" className="catalog-brand"><span className="catalog-brand-mark" aria-hidden="true">✳</span><span>flourish<span>.</span></span></a><nav className="catalog-nav-links" aria-label="Main navigation"><a href="/components">Components</a><a className="active" href="/registry">Registry</a><a href="/changelog">Changelog</a></nav></div></header>
    <div className="registry-content">
      <div className="catalog-breadcrumb"><a href="/">Home</a><span>/</span><span>Registry guide</span></div>
      <section className="registry-hero"><span className="catalog-kicker"><i /> FLOURISH REGISTRY</span><h1>Bring the source<br /><em>into your project.</em></h1><p>Every item is an editable shadcn registry component. Install the source, keep the parts you need, then shape it to your own product.</p></section>
      <RegistryCommands />
      <section className="registry-steps" aria-label="How to install a component"><article><span>01</span><PackageCheck size={19} /><h2>Initialize shadcn</h2><p>Run <code>pnpm dlx shadcn@latest init</code> once in a React or Next.js project.</p></article><article><span>02</span><ArrowRight size={19} /><h2>Choose a component</h2><p>Open a component page, copy its ready-made command, and run it from your project root.</p></article><article><span>03</span><CheckCircle2 size={19} /><h2>Make it yours</h2><p>The source is placed in your components folder. Update markup, motion, and styling freely.</p></article></section>
      <section className="registry-help"><div><span className="section-kicker">DEPENDENCIES & HELP</span><h2>Clear setup, fewer surprises.</h2><p>Every component page lists required packages before you install. The CLI will add registry files; install listed external packages when your setup does not already include them.</p></div><div className="registry-troubleshooting"><h3><CircleHelp size={16} /> Troubleshooting</h3><details open><summary>The command cannot find shadcn</summary><p>Initialize your project first, then use <code>pnpm dlx shadcn@latest add</code>. The command does not require a global install.</p></details><details><summary>A package is missing after install</summary><p>Open the component’s Dependencies section and copy the package command for your package manager.</p></details><details><summary>The import path differs in my app</summary><p>Keep the generated component where it was installed, or update its import aliases to match your project’s <code>components.json</code>.</p></details></div></section>
      <a className="registry-browse-link" href="/components">Browse components <ArrowRight size={15} /></a>
    </div>
  </main>
}
