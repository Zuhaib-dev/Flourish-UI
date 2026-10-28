# 👔 Product Rail Gallery

An interactive, physically-simulated clothing rail hero gallery component for high-fashion editorial e-commerce. Features harmonic pendulum swing physics, 3D perspective rotation, hanger drape inertia, drag collision dynamics, and high-fashion editorial lightbox inspection.

<div align="center">
  <img src="https://raw.githubusercontent.com/Zuhaib-dev/Flourish-UI/main/product-rail-gallery/public/Preview.png" width="100%" style="border-radius: 12px; margin-top: 12px; margin-bottom: 24px; box-shadow: 0 4px 20px rgba(0,0,0,0.1);" alt="Product Rail Gallery Component Preview" />
</div>

---

## ✨ Features

- **Physically-Simulated Clothing Rail**:
  - **Dynamic Pendulum Physics**: Natural angular swing, restitution, and dampening when dragging or brushing hangers.
  - **3D Perspective & Face Turning**: Smooth perspective projection with real-time `rotateY` transforms as garments face forward or rest at angled positions.
  - **Hanger Drape & Inertia**: Sub-pixel fabric skewing based on acceleration and velocity lag (`--drape` and `--shade`).
  - **Collision Elasticity**: Hangers bump, slide, and transfer momentum realistically along the rail rod.
- **Editorial 3D Lightbox Inspection**:
  - Seamless zoom-in transition lifting the chosen garment off the rail into a full-screen interactive inspection view.
  - Free 360-degree interactive rotation on touch/drag with spring snapping between front and back views.
  - Detailed product specs, tags, pricing, and variant badges.
- **Procedural SVG Garments & Photo Cutouts**:
  - Built-in SVG artwork and fabric shaders for 6 garment silhouettes (`tee`, `knit`, `hoodie`, `shirt`, `jacket`, `coat`) with ribbed trims, seams, stitches, folds, and specular highlights.
  - Support for high-res transparent transparent product photography cut-outs (`image`, `backImage`, `sideImage`).
- **Responsive Rail-to-Carousel Adaptation**:
  - Automatically transitions between wide multi-piece rail view and tactile swipeable mobile carousel mode.
- **Autoplay & Keyboard Accessible**:
  - Optional smooth autoplay presentation mode.
  - Full keyboard navigation (`ArrowLeft`, `ArrowRight`, `Home`, `End`, `Tab`, `Esc`).
  - Accessible ARIA roles, live regions, and `prefers-reduced-motion` compliance.
- **Full SEO & Production Optimized**: Next.js 16 (App Router), OpenGraph, Twitter Cards, Schema.org `SoftwareSourceCode` JSON-LD author metadata.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Library**: [React 19](https://react.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) & shadcn/ui design tokens
- **Icons**: [Lucide React](https://lucide.dev/)
- **Fonts**: *Plus Jakarta Sans*, *JetBrains Mono*, *Space Grotesk*

---

## 📦 Quick Start

```bash
# Clone the repository
git clone https://github.com/Zuhaib-dev/Flourish-UI.git

# Navigate to the component directory
cd Flourish-UI/product-rail-gallery

# Install dependencies
pnpm install

# Run the development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the clothing rail gallery.

---

## 🧩 Component API

```tsx
import ClothingRailHero from "@/components/ui/product-rail-gallery";
import type { RailGarment } from "@/components/ui/product-rail-gallery";

const ITEMS: RailGarment[] = [
  {
    id: "bone-tee",
    name: "Heavyweight tee · Bone",
    kind: "tee",
    color: "#EFEBE2",
    tag: "$48",
    description: "240 gsm organic cotton with a tonal embroidery.",
    details: ["240 gsm", "Regular fit"],
    image: "/images/bone-tee-front.webp",
    backImage: "/images/bone-tee-back.webp",
    sideImage: "/images/bone-tee-side.webp",
  },
];

export default function Example() {
  return (
    <ClothingRailHero
      items={ITEMS}
      hanger="wood" // 'wood' | 'matte' | 'none'
      heading="New Season Arrivals"
      caption="Slide hangers or click to inspect details."
      autoplay={true}
    />
  );
}
```

### Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `items` | `RailGarment[]` | *(required)* | Array of garment objects (id, name, kind, image, color, etc.) |
| `eyebrow` | `string` | `undefined` | Small uppercase header text above main heading |
| `heading` | `string` | `undefined` | Main section heading |
| `caption` | `string` | `undefined` | Subtitle caption displayed under the rail |
| `action` | `React.ReactNode` | `undefined` | Call-to-action button or link |
| `autoplay` | `boolean` | `false` | Automatically cycles through garments sequentially |
| `interval` | `number` | `2600` | Duration (ms) each piece faces front during autoplay |
| `hanger` | `'wood' \| 'matte' \| 'none'` | `'wood'` | Material texture rendered on the garment hangers |
| `labels` | `ClothingRailHeroLabels` | `{ front, back, close, show }` | Accessible button and action labels |
| `onOpenChange` | `(index: number \| null) => void` | `undefined` | Callback fired when detail modal opens or closes |

---

## 🖤 Author

Crafted with care by **[Zuhaib Rashid](https://www.zuhaibrashid.com)**.  
Part of the **[Flourish UI](https://github.com/Zuhaib-dev/Flourish-UI)** collection.
