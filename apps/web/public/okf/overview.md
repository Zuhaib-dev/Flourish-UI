---
type: Article
title: Flourish UI Overview & Architecture
description: Technical architecture, framework support, and design philosophy of Flourish UI.
resource: https://flourish-ui.vercel.app/
tags: [architecture, react, nextjs, webgl, tailwindcss]
timestamp: 2026-10-15
---

# Flourish UI Overview & Architecture

Flourish UI is a curated open-source collection of expressive, interactive React components with live previews, WebGL shaders, tactile skeuomorphism, motion physics, and shadcn CLI registry support.

## Key Principles
1. **Source-First, Zero Lock-in**: All components are copied or installed directly into your repository (`components/flourish/`). No runtime vendor dependency, no tracking, and complete code ownership.
2. **Tactile Aesthetics & Expressive Motion**: Components focus on handcrafted interactive micro-details: glassmorphism, spring dynamics, retro skeuomorphism, dynamic audio synthesis, and hardware-accelerated shaders.
3. **Multi-Agent Interoperability**: Every component is cataloged for human developers, REST API consumers, CLI automations, and autonomous AI agents via WebMCP and machine-readable context files.

## Tech Stack
- **Framework**: React 18 / 19, Next.js (App Router)
- **Styling**: Tailwind CSS & CSS Modules
- **Animation**: Framer Motion, GSAP, CSS Keyframes
- **Graphics**: WebGL, GLSL Shaders, Three.js, Canvas 2D API

See also: [Component Catalog](component-catalog.md) | [Pricing](pricing.md) | [shadcn Registry](shadcn-registry.md)
