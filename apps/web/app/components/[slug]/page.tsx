import { ArrowLeft, ArrowUpRight, Check, Copy, GitBranch } from 'lucide-react'
import { notFound } from 'next/navigation'
import { components, getComponent, installCommand } from '@/config/components'

export function generateStaticParams() { return components.map(({ slug }) => ({ slug })) }

export default async function ComponentPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const component = getComponent(slug)
  if (!component) notFound()
  return <main className="detail-page"><header className="site-header"><a href="/" className="wordmark"><span className="brand-mark"><span /></span><span>Flourish<span className="wordmark-accent">/</span>UI</span></a><a href="https://github.com/Zuhaib-dev/Flourish-UI" target="_blank" rel="noreferrer" className="detail-github"><GitBranch size={15}/> View source <ArrowUpRight size={13}/></a></header><div className="detail-wrap"><a href="/" className="back-link"><ArrowLeft size={14}/> Back to registry</a><div className="detail-heading"><div><p className="eyebrow">{component.category}</p><h1>{component.title}</h1><p>{component.description}</p></div><div className="detail-tags">{component.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div><section className={`detail-preview preview-${component.tone}`}><div className="preview-grid"/><div className="preview-shape shape-a"/><div className="preview-shape shape-b"/><span className="preview-caption">LIVE COMPONENT PREVIEW <ArrowUpRight size={13}/></span></section><div className="detail-columns"><section><p className="eyebrow">Install</p><h2>Bring it into your project.</h2><div className="install-box"><code>{installCommand(component.slug)}</code><button aria-label="Copy install command"><Copy size={15}/></button></div><div className="install-options"><span><Check size={14}/> shadcn compatible</span><span><Check size={14}/> MIT licensed</span><span><Check size={14}/> Source included</span></div></section><section className="code-section"><div className="code-heading"><p className="eyebrow">Source / {component.slug}.tsx</p><button aria-label="Copy source"><Copy size={15}/></button></div><pre><code>{component.code}</code></pre></section></div></div></main>
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) { const { slug } = await params; const component = getComponent(slug); return { title: component ? `${component.title} — Flourish UI` : 'Component not found', description: component?.description } }
