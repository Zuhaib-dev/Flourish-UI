'use client'

import { useState } from 'react'
import { Check, Copy, Play, Terminal, Loader2 } from 'lucide-react'
import { playUiSound } from '@/app/ui-sounds'

const endpoints = [
  {
    name: 'List Components',
    method: 'GET',
    path: '/api/components?limit=3',
    description: 'Fetch list of components with pagination and filtering',
  },
  {
    name: 'Get Single Component',
    method: 'GET',
    path: '/api/components/letters-from-the-garden',
    description: 'Fetch metadata, dependencies, and install commands for a component',
  },
  {
    name: 'List Categories',
    method: 'GET',
    path: '/api/categories',
    description: 'List all component categories, descriptions, and counts',
  },
  {
    name: 'OpenAPI Specification',
    method: 'GET',
    path: '/openapi.json',
    description: 'Fetch the machine-readable OpenAPI 3.1.0 schema',
  },
  {
    name: 'shadcn Registry Item',
    method: 'GET',
    path: '/r/letters-from-the-garden.json',
    description: 'Fetch the shadcn registry JSON specification for CLI',
  },
] as const

export default function ApiTester() {
  const [selectedIdx, setSelectedIdx] = useState(0)
  const [loading, setLoading] = useState(false)
  const [response, setResponse] = useState<string | null>(null)
  const [statusCode, setStatusCode] = useState<number | null>(null)
  const [latency, setLatency] = useState<number | null>(null)
  const [copied, setCopied] = useState(false)

  const active = endpoints[selectedIdx]

  async function runQuery() {
    setLoading(true)
    playUiSound('tab')
    const start = performance.now()
    try {
      const res = await fetch(active.path)
      const duration = Math.round(performance.now() - start)
      setStatusCode(res.status)
      setLatency(duration)
      const isJson = res.headers.get('content-type')?.includes('application/json')
      if (isJson) {
        const json = await res.json()
        setResponse(JSON.stringify(json, null, 2))
      } else {
        const text = await res.text()
        setResponse(text.slice(0, 1500) + (text.length > 1500 ? '\n... (truncated)' : ''))
      }
    } catch (err) {
      setStatusCode(500)
      setResponse(JSON.stringify({ error: String(err) }, null, 2))
    } finally {
      setLoading(false)
    }
  }

  async function copyResponse() {
    if (!response) return
    try {
      await navigator.clipboard.writeText(response)
      playUiSound('copy')
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {}
  }

  return (
    <div className="api-tester-card">
      <div className="api-tester-header">
        <div className="api-tester-title">
          <Terminal size={17} aria-hidden="true" />
          <span>INTERACTIVE API SANDBOX</span>
        </div>
        <div className="api-tester-endpoints">
          {endpoints.map((ep, idx) => (
            <button
              key={ep.path}
              className={`api-tester-tab ${selectedIdx === idx ? 'active' : ''}`}
              onClick={() => {
                playUiSound('tab')
                setSelectedIdx(idx)
                setResponse(null)
                setStatusCode(null)
              }}
            >
              <span className="api-method">{ep.method}</span>
              <span className="api-name">{ep.name}</span>
            </button>
          ))}
        </div>
      </div>

      <div className="api-tester-bar">
        <div className="api-tester-url">
          <span className="api-pill-get">GET</span>
          <code>https://flourish-ui.vercel.app{active.path}</code>
        </div>
        <button className="api-run-btn" onClick={runQuery} disabled={loading}>
          {loading ? <Loader2 size={13} className="animate-spin" /> : <Play size={13} />}
          <span>{loading ? 'Fetching...' : 'Send Request'}</span>
        </button>
      </div>

      <p className="api-endpoint-desc">{active.description}</p>

      {response && (
        <div className="api-response-wrapper">
          <div className="api-response-meta">
            <span className="api-status-badge">
              Status: <strong>{statusCode} OK</strong>
            </span>
            {latency !== null && <span className="api-latency-badge">{latency}ms</span>}
            <button className="api-copy-btn" onClick={copyResponse} aria-label="Copy JSON response">
              {copied ? <Check size={13} /> : <Copy size={13} />}
              <span>{copied ? 'Copied' : 'Copy Response'}</span>
            </button>
          </div>
          <pre className="api-response-body">
            <code>{response}</code>
          </pre>
        </div>
      )}
    </div>
  )
}
