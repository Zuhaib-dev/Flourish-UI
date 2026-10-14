'use client'

import { useEffect } from 'react'

export interface WebMcpTool {
  name: string
  description: string
  inputSchema: {
    type: 'object'
    properties: Record<string, { type: string; description: string; enum?: string[] }>
    required?: string[]
  }
  handler?: (args: Record<string, unknown>) => Promise<unknown>
}

export const flourishWebMcpTools: WebMcpTool[] = [
  {
    name: 'search_components',
    description: 'Search Flourish UI React components by keyword, style, or category name.',
    inputSchema: {
      type: 'object',
      properties: {
        query: { type: 'string', description: 'Search term or keyword (e.g. holographic, button, shader, dock)' },
        category: { type: 'string', description: 'Category filter (e.g. Shaders & WebGL, Skeuomorphic & 3D, Canvas & Generative)' },
      },
    },
    handler: async (args) => {
      const params = new URLSearchParams()
      if (typeof args.query === 'string') params.set('search', args.query)
      if (typeof args.category === 'string') params.set('category', args.category)
      const res = await fetch(`/api/components?${params.toString()}`)
      return res.json()
    },
  },
  {
    name: 'get_component',
    description: 'Retrieve component metadata, code dependencies, and shadcn CLI install command by slug.',
    inputSchema: {
      type: 'object',
      properties: {
        slug: { type: 'string', description: 'The unique component slug (e.g. liquid-glass-folder-stack, bloom-select)' },
      },
      required: ['slug'],
    },
    handler: async (args) => {
      const res = await fetch(`/api/components/${args.slug}`)
      return res.json()
    },
  },
  {
    name: 'get_component_source',
    description: 'Fetch the raw TypeScript/React component source code to view, analyze, or import directly.',
    inputSchema: {
      type: 'object',
      properties: {
        slug: { type: 'string', description: 'Component slug' },
      },
      required: ['slug'],
    },
    handler: async (args) => {
      const res = await fetch(`/api/components/${args.slug}/source`)
      const code = await res.text()
      return { slug: args.slug, code }
    },
  },
  {
    name: 'list_categories',
    description: 'List all component design categories and counts in Flourish UI.',
    inputSchema: {
      type: 'object',
      properties: {},
    },
    handler: async () => {
      const res = await fetch('/api/categories')
      return res.json()
    },
  },
  {
    name: 'get_install_command',
    description: 'Get copy-ready shadcn CLI installation command for a Flourish UI component.',
    inputSchema: {
      type: 'object',
      properties: {
        slug: { type: 'string', description: 'Component slug' },
        packageManager: {
          type: 'string',
          description: 'Package manager to generate command for',
          enum: ['pnpm', 'npm', 'bun', 'yarn'],
        },
      },
      required: ['slug'],
    },
    handler: async (args) => {
      const pm = (args.packageManager as string) || 'pnpm'
      const url = `https://flourish-ui.vercel.app/r/${args.slug}.json`
      const prefix =
        pm === 'npm' ? 'npx' : pm === 'bun' ? 'bunx --bun' : pm === 'yarn' ? 'yarn dlx' : 'pnpm dlx'
      return {
        slug: args.slug,
        packageManager: pm,
        command: `${prefix} shadcn@latest add ${url}`,
      }
    },
  },
]

export default function WebMcpProvider() {
  useEffect(() => {
    if (typeof window === 'undefined') return

    // Polyfill / support WebMCP context if not already native in browser agent
    interface ModelContextHost {
      registerTool: (tool: WebMcpTool) => void
      tools?: WebMcpTool[]
    }

    const registeredTools: WebMcpTool[] = []

    function createModelContext(): ModelContextHost {
      return {
        tools: registeredTools,
        registerTool(tool: WebMcpTool) {
          if (!registeredTools.some((t) => t.name === tool.name)) {
            registeredTools.push(tool)
          }
        },
      }
    }

    // Ensure document.modelContext exists
    const doc = document as unknown as { modelContext?: ModelContextHost }
    if (!doc.modelContext) {
      try {
        Object.defineProperty(document, 'modelContext', {
          value: createModelContext(),
          writable: true,
          configurable: true,
        })
      } catch {
        doc.modelContext = createModelContext()
      }
    }

    // Ensure navigator.modelContext exists as trailing compatibility fallback
    const nav = navigator as unknown as { modelContext?: ModelContextHost }
    if (!nav.modelContext) {
      try {
        Object.defineProperty(navigator, 'modelContext', {
          value: doc.modelContext || createModelContext(),
          writable: true,
          configurable: true,
        })
      } catch {
        nav.modelContext = doc.modelContext || createModelContext()
      }
    }

    // Register all tools with document.modelContext (primary)
    if (doc.modelContext && typeof doc.modelContext.registerTool === 'function') {
      for (const tool of flourishWebMcpTools) {
        try {
          doc.modelContext.registerTool(tool)
        } catch (err) {
          console.warn('[WebMCP] Failed to register on document.modelContext:', err)
        }
      }
    }

    // Register all tools with navigator.modelContext (compatibility fallback)
    if (nav.modelContext && typeof nav.modelContext.registerTool === 'function') {
      for (const tool of flourishWebMcpTools) {
        try {
          nav.modelContext.registerTool(tool)
        } catch (err) {
          console.warn('[WebMCP] Failed to register on navigator.modelContext:', err)
        }
      }
    }

    // Expose global for automated audit inspection
    const win = window as unknown as {
      __FLOURISH_WEBMCP_TOOLS__?: WebMcpTool[]
      modelContext?: ModelContextHost
    }
    win.__FLOURISH_WEBMCP_TOOLS__ = flourishWebMcpTools
    win.modelContext = doc.modelContext

    window.dispatchEvent(
      new CustomEvent('modelcontextready', { detail: { tools: flourishWebMcpTools } }),
    )
  }, [])

  return (
    <div
      id="webmcp-declarative-tools"
      style={{ display: 'none' }}
      aria-hidden="true"
      data-testid="webmcp-tools"
    >
      {/* Declarative WebMCP forms for server-rendered agent discovery */}
      <form
        toolname="search_components"
        tooldescription="Search Flourish UI React components by keyword or category"
        action="/api/components"
        method="GET"
      >
        <input name="search" type="text" placeholder="Component search query" />
        <input name="category" type="text" placeholder="Optional category name" />
        <button type="submit">Search</button>
      </form>

      <form
        toolname="get_component"
        tooldescription="Retrieve component metadata, code dependencies, and shadcn install command by slug"
        action="/api/components"
        method="GET"
      >
        <input name="slug" type="text" placeholder="Component slug (e.g. liquid-glass-folder-stack)" required />
        <button type="submit">Get Component</button>
      </form>

      <form
        toolname="list_categories"
        tooldescription="List all component categories in Flourish UI"
        action="/api/categories"
        method="GET"
      >
        <button type="submit">List Categories</button>
      </form>

      <form
        toolname="get_component_source"
        tooldescription="Fetch raw TypeScript/React component source code"
        action="/api/components"
        method="GET"
      >
        <input name="slug" type="text" placeholder="Component slug" required />
        <button type="submit">Get Source</button>
      </form>
    </div>
  )
}
