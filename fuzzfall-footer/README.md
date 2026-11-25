# Fuzzfall Footer

**SEO title:** Fuzzfall Footer React Component | Flourish UI  
**Description:** A 3D React footer with six soft, fuzzy creatures that fall, bounce, respond to dragging, and hop on click, alongside configurable navigation and a giant wordmark.  
**Keywords:** interactive React footer, Three.js footer, 3D character animation, WebGL React component, playful website footer.

Fuzzfall Footer pairs a useful site footer with six procedural furry characters. They tumble into place, settle with springy collisions, follow the pointer, and respond to drag and click. The wordmark bends as the footer scrolls into view and straightens when it settles.

This standalone project is not yet in the Flourish UI website catalog. Add your preview image at `public/Preview.png`; the social metadata is already pointed at that path.

## Preview

The preview image will be added by you at `public/Preview.png`.

## Quick start

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000` and scroll down to the footer. Drag a creature or click it to make it hop. Sound is synthesized only after a user gesture and can be disabled with `sound={false}`.

## Use the component

```tsx
import FuzzfallFooter from './components/ui/fuzzfall-footer'

export function SiteFooter() {
  return (
    <FuzzfallFooter
      name="Mosslight"
      tagline="Small soft creatures, big happy energy."
      wordmark="Mosslight"
      sound={false}
      columns={[
        { title: 'Studio', links: [{ label: 'About', href: '/about' }, { label: 'Contact', href: '/contact' }] },
        { title: 'Follow', links: [{ label: 'Instagram', href: 'https://instagram.com/' }] },
      ]}
    />
  )
}
```

The component renders semantic footer and navigation markup. Its WebGL scene is decorative for assistive technology, with a screen-reader description, visible focus styles for links and controls, pointer and touch dragging, a reduced-motion resting layout, and a text-only footer fallback when WebGL is unavailable.

## Props

| Prop | Type | Default | Description |
| --- | --- | --- | --- |
| `wordmark` | `string` | `Mosslight` | Large bottom wordmark. It fits the footer width and can curve while scrolling. |
| `name`, `tagline` | `string` | `Mosslight`, studio tagline | Brand name and short description. |
| `columns` | `FooterColumn[]` | Product, Company, Elsewhere | Navigation columns; each column has a title and links. |
| `legal` | `FooterLink[]` | Privacy, Terms | Small legal links beside the copyright. |
| `copyright` | `string` | `© 2026 Mosslight` | Copyright line. |
| `critters` | `Critter[]` | Six colorful characters | Character shape, fur colors, eye style, and optional relative size. |
| `gravity` | `number` | `2600` | Fall acceleration in stage pixels per second squared. |
| `bounce` | `number` | `0.32` | Restitution for collisions, from 0 to 0.9. |
| `wind` | `number` | `1` | Fur movement amount; 0 holds fur still. |
| `density` | `number` | `1` | Fur strands per creature, as a multiple of 10,000. |
| `sound` | `boolean` | `true` | Enable synthesized sound after an interaction. |
| `volume` | `number` | `0.4` | Sound level from 0 to 1. |
| `curve` | `boolean` | `true` | Curve the wordmark as the footer scrolls into view. |
| `idleHops` | `boolean` | `true` | Let resting creatures hop occasionally. |
| `dropLabel` | `string` | `Drop them again` | Re-drop button label; an empty string hides the button. |
| `onDrop` | `() => void` | — | Called after the re-drop button is activated. |
| `onCritterClick` | `(shape: CritterShape) => void` | — | Called when a creature is clicked rather than dragged. |
| `className` | `string` | — | Extra classes for the footer root. |

## SEO and preview

The app layout defines a person-first title and description, keywords, canonical and Open Graph URLs, Open Graph and X card metadata, and `SoftwareSourceCode` JSON-LD. These point to the planned `/components/fuzzfall-footer` catalog page and `public/Preview.png`; the website route and preview asset are not included yet.

## Runtime notes

- Three.js is the only runtime dependency. `@types/three` supplies TypeScript declarations.
- The characters are procedural geometry; no image assets are required.
- The WebGL renderer caps pixel ratio at 2, pauses its frame loop off-screen, and disposes geometries, materials, audio, and observers on unmount.
- If WebGL is unavailable, the semantic footer remains usable without the decorative creatures.
- Reduced-motion preferences stop the falling and idle-hop motion and place the characters in a still row.
- The default demo links are examples. Supply real `href` values for your own site.
