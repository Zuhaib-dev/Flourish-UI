# 🌈 Prismatic Liquid Shader

**Live preview:** [Open in Flourish UI](https://flourish-ui.vercel.app/components/prismatic-liquid-shader)

<div align="center">
  <img src="https://raw.githubusercontent.com/Zuhaib-dev/Flourish-UI/main/prismatic-liquid-shader/public/Preview.png" width="100%" style="border-radius: 12px; margin-bottom: 24px; box-shadow: 0 4px 25px rgba(0,0,0,0.4);" alt="Prismatic Liquid Shader Preview" />
</div>

An interactive, hyper-fluid WebGL liquid wave shader featuring perceptual OKLab color transitions, dynamic velocity-driven cursor ripples, multi-spectral palette presets, and customizable hydrodynamic turbulence.

Built with **React 19**, **Next.js 16**, **Tailwind CSS v4**, and **Framer Motion**.

---

## ✨ Highlights & Features

- **Perceptual OKLab Color Mixing**: Smooth, photometrically accurate interpolation across 7 multi-spectral stops without muddy gray or desaturated intermediate bands.
- **Velocity-Driven Cursor Physics**: Fluid cursor tracking that calculates pointer speed and inertia, supporting 4 distinct distortion physics:
  - **`Ripples`**: High-frequency concentric wave rings expanding from cursor motions.
  - **`Vortex Swirl`**: Rotational hydrodynamic vortex twisting colors around the pointer.
  - **`Displacement`**: Fluid pressure shockwaves pushing liquid waves away from the cursor.
  - **`Chromatic Lens`**: Refraction lens magnifying and separating color channels.
- **6 Curated Spectral Presets**:
  - **`Prismatic Aurora`**: Cosmic violet, luminous magenta, and electric cyan.
  - **`Liquid Amber`**: Molten obsidian, volcanic ruby, and solar gold.
  - **`Abyssal Deep`**: Bioluminescent navy, oceanic teal, and electric mint.
  - **`Neo Tokyo`**: Synthwave hot pink, acid lime, and deep indigo.
  - **`Opal Silk`**: Iridescent pearl, dusty lilac, and seafoam mist.
  - **`Emerald Velvet`**: Royal jade, deep forest, and neon mint luminescence.
- **Chromatic Aberration & Specular Caustics**: Subtle RGB channel separation at higher fluid speeds paired with luminous specular sheen highlights.
- **Zero-Dependency Native WebGL**: Pure GLSL fragment shader running directly on a hardware-accelerated WebGL canvas without external 3D engine overhead.
- **Performance Optimized**: Automatic resolution capping for Retina/HiDPI screens, frame pausing when out of view via `IntersectionObserver`, and smooth context loss handling.
- **Glassmorphism Interactive HUD**: Collapsible on-canvas control center with real-time sliders for flow speed, turbulence warp, chromatic separation, and seed randomization.
- **Complete SEO Ready**: Pre-configured with OpenGraph metadata, Twitter cards, and Schema.org `SoftwareSourceCode` JSON-LD author markup.

---

## 🚀 Quick Start

### 1. Install Dependencies

```bash
pnpm install
```

### 2. Run Development Server

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the shader.

---

## 📦 Usage

```tsx
import { PrismaticLiquidShader } from './components/prismatic-liquid-shader'

export default function HeroSection() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <PrismaticLiquidShader
        initialPreset="prismatic-aurora"
        initialCursorMode={0}
      />
    </div>
  )
}
```

---

## 🛠️ Props & Presets Reference

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `initialPreset` | `string` | `'prismatic-aurora'` | Initial active color scheme ID (`prismatic-aurora`, `liquid-amber`, `abyssal-glow`, `neo-tokyo`, `opal-silk`, `emerald-velvet`). |
| `initialCursorMode` | `number` | `0` | Default cursor distortion mode (`0`: Ripples, `1`: Vortex Swirl, `2`: Displacement, `3`: Chromatic Lens). |
| `className` | `string` | `''` | Additional Tailwind utility classes. |

---

## 🧱 Tech Stack

- **Framework**: React 19 + Next.js 16 (App Router)
- **Shader Pipeline**: WebGL 1/2 + GLSL Fragment Shader (Perceptual OKLab Color Space)
- **Styling**: Tailwind CSS v4 (`@tailwindcss/postcss`)
- **Typography**: Google Fonts (*Space Grotesk*, *Plus Jakarta Sans*, *JetBrains Mono*)
- **Icons**: Lucide React
- **Animations**: Framer Motion spring physics

---

## 👨‍💻 Author

**Zuhaib Rashid** — Full Stack Developer & Next.js Engineer  
- **Portfolio:** [zuhaibrashid.com](https://www.zuhaibrashid.com)  
- **GitHub:** [@Zuhaib-dev](https://github.com/Zuhaib-dev)  
- **LinkedIn:** [Zuhaib Rashid](https://www.linkedin.com/in/zuhaib-rashid-661345318/)  
- **X:** [@xuhaib_x9](https://x.com/xuhaib_x9)  
