---
type: HowTo
title: Installing Flourish UI via shadcn CLI
description: Step-by-step instructions for adding Flourish UI components to Next.js or React codebases.
resource: https://flourish-ui.vercel.app/registry
tags: [shadcn, cli, installation, react]
timestamp: 2026-10-15
---

# Installing Components with shadcn CLI

Flourish UI implements the official shadcn registry specification, allowing one-command installation into any modern React or Next.js project.

## Installation Syntax
Run the command corresponding to your package manager:

```bash
# pnpm
pnpm dlx shadcn@latest add https://flourish-ui.vercel.app/r/[component-slug].json

# npm
npx shadcn@latest add https://flourish-ui.vercel.app/r/[component-slug].json

# bun
bunx --bun shadcn@latest add https://flourish-ui.vercel.app/r/[component-slug].json
```

## How It Works
1. The CLI queries the component's registry schema from `/r/{slug}.json`.
2. It detects required peer dependencies (e.g. `framer-motion`, `lucide-react`) and installs them automatically.
3. The component source code is downloaded into your local `components/flourish/{slug}.tsx` file for direct editing.

See also: [Overview](overview.md) | [WebMCP Tools](webmcp.md)
