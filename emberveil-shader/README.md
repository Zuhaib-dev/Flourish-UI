# Emberveil Shader

**SEO title:** Emberveil Shader React Component | Flourish UI  
**Description:** A warm WebGL shader background with flowing ember, copper, and cream gradients, subtle film grain, and a responsive canvas for React hero sections.

![Emberveil Shader preview showing a warm flowing ember, copper, and cream WebGL background](./public/Preview.png)

Emberveil is a full-bleed procedural background for hero sections, landing pages, and atmospheric panels. It renders a slowly shifting silk-like field with an ember palette using one WebGL canvas and no runtime libraries beyond React.

## Quick start

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000` to view the local demo.

## Use the component

```tsx
import { EmberveilShader } from "./components/ui/emberveil-shader"

export function Hero() {
  return (
    <section className="relative isolate h-[32rem] overflow-hidden bg-[#160b0b]">
      <EmberveilShader className="absolute inset-0" />
      <div className="relative z-10 p-12 text-white">Your content</div>
    </section>
  )
}
```

The parent needs a positioned box with an explicit height. The canvas fills its parent; `className` is passed to the canvas.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `className` | `string` | — | Classes applied to the canvas, commonly `absolute inset-0`. |

## Runtime notes

- Requires a browser with WebGL 1 support. If WebGL is unavailable, the canvas retains a dark ember fallback color.
- The shader caps its drawing buffer to limit pixel work on high-density screens and pauses rendering when the canvas is offscreen or the tab is hidden.
- The animation uses a slow, continuous color field. No pointer listeners are enabled in this preset.
- The component has no external runtime dependencies or image assets.

## SEO and preview

The component name and description above are ready for a future catalog listing. The preview image is included at `public/Preview.png`; the standalone project does not have a public catalog URL yet.
