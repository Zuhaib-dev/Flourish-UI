# 🪩 Halftone Wordmark Footer

**Live preview:** [Open in Flourish UI](https://flourish-ui.vercel.app/components/halftone-wordmark-footer)

<div align="center">
  <img src="https://raw.githubusercontent.com/Zuhaib-dev/Flourish-UI/main/halftone-wordmark-footer/public/Preview.png" width="100%" style="border-radius: 12px; margin-top: 12px; margin-bottom: 24px; box-shadow: 0 4px 20px rgba(0,0,0,0.1);" alt="Halftone Wordmark Footer Preview" />
</div>

A site footer whose wordmark is set enormous and cropped by the bottom edge, printed as an interactive field of halftone dots. Each dot is sized by how much of the letter covers its cell, keeping type edges sharp at any scale. Move across it and the dots part around the pointer on springs, warming in color as they are pushed; click and a shock ring runs through the word.

## Features

- **Area-True Halftone Rasterizer**: Generates dot radius proportional to letter coverage so visual weight remains authentic across all viewport sizes.
- **Spring Physics Dynamics**: Each dot reacts dynamically with spring physics, parting around the pointer and snapping smoothly back to rest.
- **Kinetic Shockwave**: Clicking triggers an expanding energy ring that ripples through the wordmark dots.
- **Analog Print Grain**: Canvas overlay with procedural film grain texture for an editorial print aesthetic.
- **Theming & Color Presets**: Built-in palettes (`night`, `paper`, `ember`, `cobalt`) with custom hex palette overrides.
- **Accessible & Responsive**: Fully responsive layout with semantic markup, screen-reader text (`.hwf-sr`), keyboard focusable links, and `prefers-reduced-motion` support.

## Quick Start

```bash
pnpm install
pnpm dev
```

## Component Usage

```tsx
import HalftoneWordmarkFooter from "@/components/ui/halftone-wordmark-footer"

export default function FooterSection() {
  return (
    <HalftoneWordmarkFooter
      wordmark="Zuhaib"
      label="Zuhaib Studio"
      meta="©2026 · Srinagar / Kashmir"
      preset="night"
      height="560px"
      columns={[
        { title: "Work", links: [{ label: "Index" }, { label: "Archive" }, { label: "Journal" }] },
        { title: "Studio", links: [{ label: "About" }, { label: "Process" }, { label: "Careers" }] },
        { title: "Contact", links: [{ label: "zuhaibrashid01@gmail.com" }, { label: "+91 11 00 44 00" }] },
      ]}
    />
  )
}
```

## Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `wordmark` | `string` | `"Zuhaib"` | The word printed in dots. |
| `label` | `string` | `"Zuhaib Studio"` | Top-left studio brand label. |
| `meta` | `string` | `"©2026 · Srinagar / Kashmir"` | Muted metadata line under label. |
| `columns` | `FooterColumn[]` | `DEFAULT_COLUMNS` | Link columns across top nav. |
| `backToTop` | `boolean` | `true` | Show back to top smooth scroll link. |
| `preset` | `"night" \| "paper" \| "ember" \| "cobalt"` | `"night"` | Theme preset palette. |
| `palette` | `{ background?, ink?, warm? }` | `undefined` | Custom palette overrides. |
| `dotGap` | `number` | `6` | Distance between dot centers in px. |
| `radius` | `number` | `80` | Mouse push influence radius in px. |
| `crop` | `number` | `0.2` | Fraction of cap height cropped below edge. |
| `grain` | `number` | `0.5` | Procedural print grain opacity (0–1). |
| `interactive` | `boolean` | `true` | Enable pointer springs & shockwave. |
| `height` | `string` | `"560px"` | Root height in CSS units. |

## Author

**Zuhaib Rashid** — Full Stack Developer & Next.js Engineer
- **Portfolio:** [zuhaibrashid.com](https://www.zuhaibrashid.com)
- **GitHub:** [@Zuhaib-dev](https://github.com/Zuhaib-dev)
- **LinkedIn:** [Zuhaib Rashid](https://www.linkedin.com/in/zuhaib-rashid-661345318/)
- **X:** [@xuhaib_x9](https://x.com/xuhaib_x9)
