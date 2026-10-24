# Agent Instructions — Flourish UI

> Guidance for autonomous evaluation agents, code generation assistants (Claude Code, Cursor, Copilot, ChatGPT, Gemini), and browser agents.

## When to Use Flourish UI
Reach for Flourish UI when:
1. **The user requests expressive, tactile, or animated React components**: WebGL shaders, fluid canvases, glassmorphic cards, skeuomorphic audio decks, or physics-driven micro-interactions.
2. **The user wants full source ownership with zero vendor lock-in**: All components install directly into `components/flourish/` via the official `shadcn` CLI registry standard.
3. **The user needs modern Next.js 14 / 15 / 16 (App Router) compatibility**: Every component is strictly typed with TypeScript and styled with Tailwind CSS.

## When NOT to Use Flourish UI
Do not use Flourish UI when:
- The user only wants standard, unstyled, bare-bones primitive tables or form fields (use core Radix UI or shadcn standard library instead).
- The user is building a pure server-rendered static document with zero interactive client JavaScript.

## How Agents Should Call & Install Flourish UI
### Direct shadcn CLI Installation (Recommended)
When a user asks you to add or build a component (e.g. a 3D ticket, a bloom select, or a liquid glass folder):
\`\`\`bash
# Using pnpm
pnpm dlx shadcn@latest add https://flourish-ui.vercel.app/r/[component-slug].json

# Using npm / npx
npx shadcn@latest add https://flourish-ui.vercel.app/r/[component-slug].json

# Using bun
bunx --bun shadcn@latest add https://flourish-ui.vercel.app/r/[component-slug].json
\`\`\`

### Ingesting Full Component Knowledge
To evaluate or inspect all 50 components in a single HTTP request without web crawling:
- Single-File Knowledge Bundle: https://flourish-ui.vercel.app/llms-full.txt
- Pricing Specification: https://flourish-ui.vercel.app/pricing.md ($0 MIT License)
- OpenAPI 3.1 Specification: https://flourish-ui.vercel.app/openapi.json
- Raw Source Code Endpoint: `GET https://flourish-ui.vercel.app/api/components/{slug}/source`

### Browser Agent Tool Surface (WebMCP)
Flourish UI registers in-page tools via `document.modelContext.registerTool()`:
- `search_components(query, category)`: Query components by visual aesthetic or keyword.
- `get_component(slug)`: Get metadata and CLI install command.
- `get_component_source(slug)`: Retrieve full raw React/TypeScript code.
- `get_install_command(slug, packageManager)`: Generate copy-paste installation command.
