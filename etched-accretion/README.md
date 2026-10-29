# 🪐 Etched Accretion — Procedural WebGL2 Black Hole Engraving

**Live preview:** [Open in Flourish UI](https://flourish-ui.vercel.app/components/etched-accretion)

<div align="center">
  <img src="https://raw.githubusercontent.com/Zuhaib-dev/Flourish-UI/main/etched-accretion/public/Preview.png" alt="Etched Accretion Component Preview" width="100%" style="border-radius: 12px; margin-top: 12px; margin-bottom: 24px; border: 1px solid rgba(255,255,255,0.1); box-shadow: 0 4px 24px rgba(0,0,0,0.4);" />
</div>

A black hole drawn like a classical copperplate engraving: a tilted accretion disk of hair-thin orbital streaks banded in crimson, a photon crown flaring off the event horizon, and dark nebula banks cut out of contour lines. Heavy film grain over deep space. Built to sit behind an editorial hero section.

Self-contained: one full-screen WebGL2 fragment shader, React is the only import — no three.js, no external textures, no network assets. Every streak, cloud, and star is mathematical and procedural, maintaining pixel-sharp precision at any screen resolution.

---

## ✨ Features

- **Procedural Copperplate Engraving**:
  - **Burin-Cut Contour Nebulas**: Dark nebula banks carved from domain-warped fractional Brownian motion (fBm) lines that tremble like classical steel and copper burin cuts.
  - **Relativistic Accretion Disk**: Hair-thin orbital streaks orbiting at Keplerian differential speeds ($r^{-1.5}$), banded in crimson and silver.
  - **Relativistic Doppler Beaming**: Asymmetrical luminance where the approaching side of the disk burns brighter than the receding side.
  - **Gravitational Lensing**: Starlight and distant nebula banks bent around the Schwarzschild horizon.
  - **Photon Crown & Plane Flares**: Concentric photon rings, crown rays, and equatorial plane discharge.
  - **Archival Film Grain**: Dual-frequency hash grain with occasional dust flecks for an analog print texture.
- **Dynamic Physics & Interaction**:
  - **Pointer Parallax**: Smooth spring-eased 2.5D parallax tilting and horizon drift on cursor movement.
  - **Hold to Feed**: Hold pointer down to increase mass accretion rate, causing photon flares, disk brightening, and orbit acceleration.
  - **Idle Orbit Drift**: Natural sinusoidal drift when unattended.
- **Performance & Optimization**:
  - **Adaptive Resolution Buffer**: Automatically adjusts drawing-buffer scale if frame times drop below target threshold (no jitter/oscillation).
  - **Viewport Intersection Observer**: Automatically halts render loop when scrolled off-screen or during tab inactivity (0% GPU idle).
  - **Zero External Dependencies**: Pure WebGL2 fragment shader — no Three.js or 3D engine overhead.
  - **Accessible**: Respects `prefers-reduced-motion` by freezing to a single still frame with persistent grain.
  - **Graceful Degradation**: CSS multi-layer radial gradient fallback if WebGL2 is not supported.
- **5 Curated Color Presets**: `crimson`, `ember`, `glacier`, `ash`, and `orchid`.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Library**: [React 19](https://react.dev/)
- **Graphics**: WebGL2 Fragment Shader (GLSL 3.00 es)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) & shadcn/ui design tokens
- **Typography**: *Plus Jakarta Sans*, *JetBrains Mono*, *Space Grotesk*
- **Icons**: [Lucide React](https://lucide.dev/)

---

## 📦 Quick Start

```bash
# Clone repository
git clone https://github.com/Zuhaib-dev/Flourish-UI.git

# Navigate to component directory
cd Flourish-UI/etched-accretion

# Install dependencies
pnpm install

# Run development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to inspect the exhibition.

---

## 🧩 Component API

```tsx
import EtchedAccretion from "@/components/ui/etched-accretion"

export default function Hero() {
  return (
    <EtchedAccretion
      preset="crimson"
      height="100vh"
      interactive={true}
    >
      <div className="pointer-events-none flex h-full flex-col justify-end p-6 sm:p-10 text-white">
        <div className="max-w-xl">
          <h1 className="text-5xl font-light tracking-tight sm:text-7xl">
            Nothing <span className="italic text-[#ff3b47]">escapes</span>
            <br />
            the horizon.
          </h1>
          <p className="mt-4 font-mono text-xs uppercase tracking-[0.3em] text-white/50">
            move to drift · hold to feed it
          </p>
        </div>
      </div>
    </EtchedAccretion>
  )
}
```

### Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `height` | `string` | `"100svh"` | Explicit CSS height for the canvas container box. |
| `preset` | `AccretionPreset` | `"crimson"` | Named palette preset (`crimson`, `ember`, `glacier`, `ash`, `orchid`). |
| `params` | `Partial<AccretionParams>` | `undefined` | Fine-grained parameter overrides layered over preset. |
| `interactive` | `boolean` | `true` | Enables pointer parallax and click-and-hold mass feeding. |
| `renderScale` | `number` | `1` | Drawing-buffer resolution multiplier (capped at 1.5 dpr). |
| `children` | `React.ReactNode` | `undefined` | Foreground content laid over the canvas (e.g. hero headlines, badges). |
| `className` | `string` | `""` | Additional CSS classes applied to root container. |
| `aria-label` | `string` | `"A black hole..."` | Accessible label for screen readers. |

### Color Presets

| Preset | Disk Accent | Streak Highlight | Nebula Band | Characteristics |
| :--- | :--- | :--- | :--- | :--- |
| `crimson` | `#d3121f` | `#e9e4df` | `#c9d0e2` | Classic deep space obsidian with vivid relativistic red bands. |
| `ember` | `#ff6a13` | `#ffe2b8` | `#d8c3a8` | Fiery stellar flare aesthetic with warm starlight haze. |
| `glacier` | `#2f6bff` | `#dbe8ff` | `#b9cdf0` | Cold blue cryogenic disk tilted at an inverted angle (-9°). |
| `ash` | `#8d8d8d` | `#f2f2f2` | `#d6d6d6` | High-contrast monochrome archival engraving with dense film grain. |
| `orchid` | `#b3219e` | `#f3dcf4` | `#d6c4e8` | Ultraviolet corona flare with wide inclination geometry. |

---

## 🖤 Author

Crafted with care by **[Zuhaib Rashid](https://www.zuhaibrashid.com)**.  
Part of the **[Flourish UI](https://github.com/Zuhaib-dev/Flourish-UI)** collection.
- **Portfolio:** [zuhaibrashid.com](https://www.zuhaibrashid.com)
- **GitHub:** [@Zuhaib-dev](https://github.com/Zuhaib-dev)
- **LinkedIn:** [Zuhaib Rashid](https://www.linkedin.com/in/zuhaib-rashid-661345318/)
- **X / Twitter:** [@xuhaib_x9](https://x.com/xuhaib_x9)

