# 📁 Liquid Glass Folder Stack

**Live preview:** [Open in Flourish UI](https://flourish-ui.vercel.app/components/liquid-glass-folder-stack)

<div align="center">
  <img src="https://raw.githubusercontent.com/Zuhaib-dev/Flourish-UI/main/liquid-glass-folder-stack/public/Preview.png" width="100%" style="border-radius: 12px; margin-top: 12px; margin-bottom: 24px; box-shadow: 0 4px 20px rgba(0,0,0,0.1);" alt="Liquid Glass Folder Stack Preview" />
</div>

A tactile 3D folder component you can actually use, drawn as a physical object. Three layers, back to front: a back panel holding a piece of procedural artwork, the files the folder contains, and a frosted-glass front panel that blurs whatever sits behind it. Nothing is a picture of a folder; the files are real elements between real panels, so the glass frosts them as they move.

## Features

- **Domain-Warped Procedural Art**: Canvas-shaded liquid marble and streak surfaces generated via fractal Brownian motion (fBm) noise with Catmull-Rom upsampling and specular lighting.
- **True Frosted-Glass Optics**: Front panel with real-time backdrop blur (`backdrop-filter: blur(22px)`), SVG specular rims, and dynamic pointer reflection.
- **Spring Hinge & 3D Tilt**: Perspective 3D tilting on mouse movement, spring-hinged front panel that leans forward on hover and falls open on click.
- **Interactive File Fan**: Files lift out of the pocket and fan into an interactive stack with keyboard and mouse selection.
- **Add & Menu Actions**: Built-in animated file insertion with bounce physics and keyboard-navigable frosted dropdown menu.
- **Self-Contained & Lightweight**: Pure React with Canvas 2D and scoped CSS. Zero external CSS files or image dependencies needed.
- **Accessible & Motion-Aware**: Full keyboard navigation, `aria-expanded` and role attributes, `inert` for closed files, and `prefers-reduced-motion` compliance.

## Quick Start

```bash
pnpm install
pnpm dev
```

## Component Usage

```tsx
import LiquidGlassFolderStack from "@/components/ui/liquid-glass-folder-stack"

export default function FolderExample() {
  return (
    <LiquidGlassFolderStack
      label="Design System"
      meta="4 items"
      art="aurora"
      seed={3}
      action="add"
      files={[
        { name: "Brand Guidelines.pdf", meta: "PDF · 2.4 MB" },
        { name: "Color Palette", meta: "Tokens · CSS", art: "ember" },
        { name: "Typography Scale", meta: "Spec", art: "dusk" },
      ]}
      onFileSelect={(file, index) => console.log("Selected:", file.name)}
    />
  )
}
```

## Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `label` | `string` | `"My Files"` | The primary title shown on the front panel. |
| `meta` | `string` | `"{count} items"` | Secondary label line; rolls automatically as items change. |
| `tone` | `"light" \| "dark"` | `"light"` | Glass appearance: milk glass or smoked glass. |
| `art` | `ArtPreset \| ArtRecipe \| "none"` | `"aurora"` | Preset (`"aurora"`, `"ember"`, `"dusk"`, `"glacier"`, `"verdant"`), custom recipe, or `"none"`. |
| `seed` | `number` | `3` | PRNG seed for procedural artwork variations. |
| `image` | `string` | `undefined` | Custom image URL to display instead of procedural art. |
| `files` | `FolderFile[]` | `SAMPLE_FILES` | Files stack inside the folder pocket. |
| `action` | `"add" \| "more" \| "none"` | `"add"` | Key button action: add file (`+`), context menu (`···`), or none. |
| `onAdd` | `(files: FolderFile[]) => FolderFile \| void` | `undefined` | Custom factory returning a new file when `+` is clicked. |
| `onFilesChange` | `(files: FolderFile[]) => void` | `undefined` | Called whenever the files list updates. |
| `menu` | `FolderMenuItem[]` | `[]` | Items rendered in the more context menu. |
| `labelPlacement` | `"bottom-left" \| "top-left" \| "top-right"` | `"bottom-left"` | Placement of the folder title on the front glass. |
| `open` | `boolean` | `undefined` | Controlled open state. |
| `defaultOpen` | `boolean` | `false` | Initial uncontrolled open state. |
| `onOpenChange` | `(open: boolean) => void` | `undefined` | Callback fired on open/close transitions. |
| `onFileSelect` | `(file: FolderFile, index: number) => void` | `undefined` | Fired when a file item inside the fan is clicked. |
| `width` | `number` | `340` | Width in px (height scales proportionally at 0.96 × width). |
| `appear` | `boolean` | `true` | Animate entrance when folder scrolls into view. |
| `appearDelay` | `number` | `0` | Delay in ms before scroll entrance animation triggers. |

## Author

**Zuhaib Rashid** — Full Stack Developer & Next.js Engineer
- **Portfolio:** [zuhaibrashid.com](https://www.zuhaibrashid.com)
- **GitHub:** [@Zuhaib-dev](https://github.com/Zuhaib-dev)
- **LinkedIn:** [Zuhaib Rashid](https://www.linkedin.com/in/zuhaib-rashid-661345318/)
- **X:** [@xuhaib_x9](https://x.com/xuhaib_x9)
