# 🎨 Storybook Play Canvas

**Live preview:** [Open in Flourish UI](https://flourish-ui.vercel.app/components/storybook-play-canvas)

<div align="center">
  <img src="https://raw.githubusercontent.com/Zuhaib-dev/Flourish-UI/main/storybook-play-canvas/public/Preview.png" width="100%" style="border-radius: 12px; margin-top: 12px; margin-bottom: 24px; box-shadow: 0 4px 20px rgba(0,0,0,0.1);" alt="Storybook Play Canvas Preview" />
</div>

A whimsical illustrated retro easel and storybook playground inspired by the nostalgic, tactile world of playful storybooks and physical toy studios. Features an illustrated character scene, tactile drawing & doodling canvas, studio color palette swatches, brush sizing slider, action toolbar, and retro desktop browser window aesthetics.

## Features

- **Whimsical Storybook Aesthetics**: Warm, nostalgic studio palette with authentic storybook typography and tactile illustrated character art.
- **Interactive Doodle Canvas**: Smooth drawing layer allowing visitors to doodle, sketch, and color directly on the storybook artboard.
- **Studio Color Swatches**: Interactive pigment palette with tactile selection animations and real-time brush color switching.
- **Tactile Brush Control**: Interactive slider for selecting fine detail pencils to bold watercolor strokes.
- **Canvas Action Suite**:
  - `START OVER`: Instant board refresh with smooth reset.
  - `ERASER`: Precision sketch eraser mode.
  - `SAVE`: Direct export of the customized artwork to PNG.
  - `SHARE`: Native Web Share API integration with clipboard fallback.
- **Retro Browser Chrome**: Nostalgic desktop window container with header navigation, wordmark, and character lore card.
- **Zero Heavy Dependencies**: Built with React, Next.js, Framer Motion, and Tailwind CSS.
- **Accessible & Responsive**: Fully responsive across mobile, tablet, and desktop, with keyboard navigation and motion-aware transitions.

## Quick Start

```bash
cd storybook-play-canvas
pnpm install
pnpm dev
```

## Component Usage

```tsx
import StorybookPlayCanvas from "@/components/ui/storybook-play-canvas"

export default function ExamplePage() {
  return (
    <StorybookPlayCanvas
      characterName="Nessa"
      headline="NESSA HAS BUILT A HOUSE FOR THE ANIMALS"
      story="Nessa is very shy and always hides herself behind her mask. Behind the mask is someone very helpful and kind."
      wordmark="woset"
      defaultColor="#a43c45"
      palette={["#a43c45", "#5c70a0", "#6d5367", "#36685d", "#d7c37a"]}
    />
  )
}
```

## Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `characterName` | `string` | `"Nessa"` | Name of the storybook character featured on the lore card. |
| `headline` | `string` | `"NESSA HAS BUILT A HOUSE FOR THE ANIMALS"` | Primary storybook headline banner displayed on the artboard. |
| `story` | `string` | `"Nessa is very shy..."` | Storybook character narrative and personality copy. |
| `wordmark` | `string` | `"woset"` | Brand or publication wordmark displayed in the site header. |
| `palette` | `string[]` | `["#a43c45", ...]` | Array of color swatch hex values for the drawing brush. |
| `defaultColor` | `string` | `"#a43c45"` | Initial active drawing color. |
| `defaultBrushSize` | `number` | `6` | Initial brush stroke width in pixels. |
| `onSave` | `(dataUrl: string) => void` | `undefined` | Callback fired when the user exports their canvas artwork. |
| `className` | `string` | `""` | Additional CSS classes for outer container customization. |

## Author

**Zuhaib Rashid** — Full Stack Developer & Next.js Engineer
- **Portfolio:** [zuhaibrashid.com](https://www.zuhaibrashid.com)
- **GitHub:** [@Zuhaib-dev](https://github.com/Zuhaib-dev)
- **LinkedIn:** [Zuhaib Rashid](https://www.linkedin.com/in/zuhaib-rashid-661345318/)
- **X:** [@xuhaib_x9](https://x.com/xuhaib_x9)
