---
type: Specification
title: WebMCP Browser Agent Tools Specification
description: Technical contract for Flourish UI in-browser agent tools exposed via document.modelContext.
resource: https://flourish-ui.vercel.app/developers
tags: [webmcp, ai-agents, model-context, browser-automation]
timestamp: 2026-10-15
---

# WebMCP Browser Agent Tools

Flourish UI implements the WebMCP standard for autonomous browser agents, exposing structured callable tools on `document.modelContext` and declarative form fallbacks for server-rendered page agents.

## Registered In-Page Tools
1. `search_components`: Search components by query keyword, visual style, or category filter.
2. `get_component`: Retrieve metadata, required dependencies, and shadcn CLI install command by slug.
3. `get_component_source`: Fetch the full raw TypeScript/React source code for direct inspection or file creation.
4. `list_categories`: List all component design categories and counts.
5. `get_install_command`: Generate custom copy-ready shadcn CLI command tailored to pnpm, npm, bun, or yarn.

See also: [Overview](overview.md) | [Component Catalog](component-catalog.md)
