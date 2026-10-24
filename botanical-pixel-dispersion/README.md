# 🌸 Botanical Pixel Dispersion

An artisanal, highly interactive botanical UI component inspired by Yuni Yoshida’s iconic physical pixel mosaic artworks. Featuring a high-definition natural flower whose petals, stem, and leaves dissolve into responsive square mosaic tiles that react organically to cursor movement with tactile 3D elevation, spring damping, dynamic scatter physics, and multiple material shaders.

<div align="center">
  <img src="https://raw.githubusercontent.com/Zuhaib-dev/Flourish-UI/main/botanical-pixel-dispersion/public/Preview.png" width="100%" style="border-radius: 12px; margin-top: 12px; margin-bottom: 24px; box-shadow: 0 4px 20px rgba(0,0,0,0.1);" alt="Botanical Pixel Dispersion Component Preview" />
</div>

---

## ✨ Features

- **Full Component Raster Dynamics**: The entire botanical subject (petals, center disc, stem, leaves, and stepped pixel dissolution) is decomposed into hundreds of dynamic physical tiles sampled directly from high-resolution imagery via an offscreen canvas sampling pipeline.
- **60 FPS Canvas Physics Engine**:
  - **Spring-Damper Dynamics**: Full velocity, damping, and elastic return calculations (`hwfStep`) driving real-time inertia and restitution.
  - **Interactive Force Fields**: **Repel** (gentle clearing), **Vortex** (turbulent angular spin), **Ripple** (harmonic sinusoidal wave), and **Attract** (magnetic cursor convergence).
  - **Kinetic Shockwave Ring**: Canvas clicks trigger an expanding shockwave ring propagating outward at ~0.95 px/ms that displaces tiles radially with smooth decay.
  - **Tactile 3D Paper Elevation**: Tiles dynamically lift off the archival paper surface with responsive directional cast shadows (`shadowBlur`, `shadowOffsetY`), scaling up to 1.35x and tilting with velocity.
- **Global Shatter & Reassemble**: One-click physical explosion scattering all tiles into a 3D suspended cloud across the canvas, with smooth harmonic reassembly back to home resting coordinates.
- **4 Artisanal Tile Materials**:
  - **Yuni Yoshida Cut Paper**: Physical beveled cut-paper chips with micro highlight edges and realistic paper texture.
  - **Photographic Slices**: Sub-sampled image slices sampled directly from the high-res flower photograph.
  - **Halftone Dots**: Area-weighted circular halftone screens reflecting local luminance and color.
  - **Prismatic Glass**: Translucent frosted glass tiles with luminous specular bevels.
- **Procedural Analog Print Grain**: Real-time 256x256 monochrome print grain tile overlay with adjustable opacity.
- **Adjustable Density**: Fine (10px, ~1,500 tiles), Medium (14px, ~750 tiles), and Bold (18px, ~470 tiles) resolutions.
- **Botanical Variation Switcher**: Toggle between vibrant pink Gerbera Daisy and magenta Cosmos blossoms.
- **Zero Typography on Canvas**: Clean, museum-grade visual presentation without any obstructive text or watermarks.
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
