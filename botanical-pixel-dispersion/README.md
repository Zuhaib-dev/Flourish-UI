# 🌸 Botanical Pixel Dispersion

An artisanal, highly interactive botanical UI component inspired by Yuni Yoshida’s iconic physical pixel mosaic artworks. Featuring a high-definition natural flower whose petals, stem, and leaves dissolve into responsive square mosaic tiles that react organically to cursor movement with tactile 3D elevation, spring damping, dynamic scatter physics, and multiple material shaders.

<div align="center">
  <img src="https://raw.githubusercontent.com/Zuhaib-dev/Flourish-UI/main/botanical-pixel-dispersion/public/Preview.png" width="100%" style="border-radius: 12px; margin-top: 12px; margin-bottom: 24px; box-shadow: 0 4px 20px rgba(0,0,0,0.1);" alt="Botanical Pixel Dispersion Component Preview" />
</div>

---

## ✨ Features

- **Iconic Botanical Artistry**: Clean, pure botanical flower on an archival gallery paper background, dissolving into square mosaic tiles without any obstructive typography or watermarks.
- **60 FPS Physical Canvas Simulation**: High-DPI retina-crisp HTML5 canvas physical simulation engine tracking over 115 individual mosaic tiles.
- **Cursor Physics Engine**:
  - **Repel**: Tiles magnetically disperse away from the cursor in an organic clearing.
  - **Vortex**: Tiles swirl around the cursor in a dynamic orbital whirlpool.
  - **Ripple**: Wave undulations propagate outwards across the tiles.
  - **Attract**: Magnetic suction pulling tiles toward the cursor.
- **Tactile 3D Paper Elevation**: Tiles dynamically lift off the canvas paper surface with realistic directional cast shadows, scaling up to 1.35x and tilting with cursor velocity.
- **Explosive Scatter & Reassemble**: One-click global scatter physics throwing tiles into a floating 3D suspended state with organic spring recovery back to their resting grid.
- **3 Artisanal Tile Materials**:
  - **Analog Paper**: Physical cut-paper chips with micro bevels and edge depth.
  - **Photographic Slices**: Sub-sampled image slices sampled directly from the high-res flower photograph.
  - **Prismatic Glass**: Translucent frosted glass tiles with luminous specular highlights.
- **Botanical Variation Switcher**: Toggle between vibrant pink Gerbera Daisy and magenta Cosmos blossoms.
- **SEO & Production Optimized**: Next.js 16 (App Router), OpenGraph, Twitter Cards, Schema.org `SoftwareSourceCode` JSON-LD author metadata.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Library**: [React 19](https://react.dev/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/) & HTML5 Canvas Physics Engine
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Fonts**: *Plus Jakarta Sans*, *JetBrains Mono*, *Space Grotesk*

---

## 📦 Quick Start

```bash
# Clone the repository
git clone https://github.com/Zuhaib-dev/Flourish-UI.git

# Navigate to the component directory
cd Flourish-UI/botanical-pixel-dispersion

# Install dependencies
pnpm install

# Run the development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the exhibition canvas.

---

## 🧩 Component API

```tsx
import { BotanicalPixelDispersion } from './components/botanical-pixel-dispersion'

export default function Example() {
  return (
    <BotanicalPixelDispersion
      flowerImageSrc="/flower.jpg"
      flowerAlt="Vibrant Pink Gerbera Daisy — Botanical Pixel Dispersion"
      initialTileStyle="analog" // 'analog' | 'photo' | 'glass'
      initialPhysicsMode="repel" // 'repel' | 'vortex' | 'ripple' | 'attract'
    />
  )
}
```

### Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `flowerImageSrc` | `string` | `'/flower.jpg'` | Path to high-definition flower base image |
| `flowerAlt` | `string` | `'Botanical Gerbera Daisy'` | Accessible alternative description |
| `initialTileStyle` | `'analog' \| 'photo' \| 'glass'` | `'analog'` | Visual material of the mosaic chips |
| `initialPhysicsMode` | `'repel' \| 'vortex' \| 'ripple' \| 'attract'` | `'repel'` | Dynamic mouse interaction physics algorithm |
| `className` | `string` | `''` | Optional extra container classes |

---

## 🖤 Author

Crafted with care by **[Zuhaib Rashid](https://www.zuhaibrashid.com)**.
Part of the **[Flourish UI](https://github.com/Zuhaib-dev/Flourish-UI)** collection.
