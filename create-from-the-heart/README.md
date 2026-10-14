# 🎨 Create from the Heart — Wilde & Co.

**Live preview:** [Open in Flourish UI](https://flourish-ui.vercel.app/components/create-from-the-heart)

<div align="center">
  <img src="https://raw.githubusercontent.com/Zuhaib-dev/Flourish-UI/main/create-from-the-heart/public/Preview.png" width="100%" style="border-radius: 12px; margin-top: 12px; margin-bottom: 24px; box-shadow: 0 4px 20px rgba(0,0,0,0.1);" alt="Create from the Heart Preview" />
</div>

An artisanal pastoral storybook hero component for creative studios, botanical brands, and independent makers. Inspired by the cottagecore warmth of Japanese editorial design and en plein air painting, featuring organic watercolor calligraphy, a grazing sheep hillside artwork, and tactile interactive elements.

## Features

- **Artisanal Brush Typography**: Rich watercolor ink headline (`Create from the Heart.`) with organic texture and responsive scaling.
- **En Plein Air Pastoral Scene**: Organic masked landscape artwork capturing an artist painting on an easel surrounded by grazing sheep.
- **Botanical Whimsical Note**: Delicate hand-illustrated wildflower sprig with interactive hover dynamics.
- **Tactile Studio Navigation**: Header brand wordmark, editorial page links (`About`, `Shop`, `Journal`, `Studio`, `Contact`), and an interactive shopping bag with item counter.
- **Flock Subscription Modal**: Interactive newsletter modal with clean form submission and toast feedback.
- **Zero Heavy Dependencies**: Built with React 19, Next.js 16, and Tailwind CSS.
- **Accessible & SEO-Optimized**: Full OpenGraph, Twitter Cards, and Schema.org structured data.

## Quick Start

```bash
cd create-from-the-heart
pnpm install
pnpm dev
```

## Component Usage

```tsx
import CreateFromTheHeart from "@/components/ui/create-from-the-heart"

export default function HeroPage() {
  return (
    <CreateFromTheHeart
      brandName="Wilde & Co."
      headlineSrc="/headline-brush.png"
      artworkSrc="/pastoral-artwork.png"
      botanicalSrc="/botanical-sprig.png"
      subtitle={[
        "Find beauty in the little things.",
        "Make art. Live simply. Stay curious.",
      ]}
      ctaLabel="JOIN THE FLOCK"
      onCtaClick={() => console.log("Joining flock")}
    />
  )
}
```

## Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `brandName` | `string` | `"Wilde & Co."` | Accessible brand name and alt label. |
| `headlineSrc` | `string` | `"/headline-brush.png"` | Path to the high-res watercolor brush headline. |
| `artworkSrc` | `string` | `"/pastoral-artwork.png"` | Path to the organic masked plein air artwork. |
| `botanicalSrc` | `string` | `"/botanical-sprig.png"` | Path to the hand-drawn wildflower note. |
| `subtitle` | `string[]` | `["Find beauty in...", ...]` | Array of subtitle copy lines. |
| `ctaLabel` | `string` | `"JOIN THE FLOCK"` | Label for the primary pill CTA button. |
| `onCtaClick` | `() => void` | `undefined` | Optional click callback for the CTA button. |
| `className` | `string` | `""` | Optional CSS classes for the container. |

## Author

**Zuhaib Rashid** — Full Stack Developer & Next.js Engineer
- **Portfolio:** [zuhaibrashid.com](https://www.zuhaibrashid.com)
- **GitHub:** [@Zuhaib-dev](https://github.com/Zuhaib-dev)
- **LinkedIn:** [Zuhaib Rashid](https://www.linkedin.com/in/zuhaib-rashid-661345318/)
- **X:** [@xuhaib_x9](https://x.com/xuhaib_x9)
