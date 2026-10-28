# 💧 Liquid Glass Navbar — "Waterline"

A fluid WebGL liquid glass navigation bar component featuring dynamic water droplet physics, surface tension stretching, meniscus cursor attraction, interactive splash ripple waves, and micro-animated scenes.

<div align="center">
  <img src="https://raw.githubusercontent.com/Zuhaib-dev/Flourish-UI/main/liquid-glass-navbar/public/Preview.png" width="100%" style="border-radius: 12px; margin-top: 12px; margin-bottom: 24px; box-shadow: 0 4px 20px rgba(0,0,0,0.1);" alt="Liquid Glass Navbar Component Preview" />
</div>

---

## ✨ Features

- **Pill of Living Water**:
  - **Stretching Surface Tension**: Active droplet organically elongates toward the selected navigation item with physical spring elasticity.
  - **Droplet Neck Break & Satellites**: On long jumps across navigation items, the liquid neck stretches, thins, and breaks into satellite micro-droplets that re-converge with a fluid ripple upon arrival.
  - **Meniscus Cursor Attraction**: Hovering the pointer lifts a localized meniscus bulge in the water surface.
  - **Interactive Wave Ripples**: Every click/tap and item switch dispatches an expanding wave oscillation propagating along the pill.
- **Embedded Real-Time WebGL Shader**:
  - Procedural caustic highlights, Fresnel edge refraction, specular lighting, and iridescence rendered directly on a canvas within the pill.
  - Automatically pauses off-screen via `IntersectionObserver` and during tab inactivity for 0% CPU consumption when idle.
  - Seamless CSS gradient fallback for environments without WebGL support.
- **Micro-Animated Iconic Scenes**:
  - Each item icon triggers its own custom tactile animation when tapped:
    - **Home**: Hop with glowing illuminated doorway (`fx="glow"`).
    - **Explore**: 3D perspective planetary spin (`fx="spin"`).
    - **Flights**: Supersonic jet bank with vapor trail (`fx="plane"`).
    - **Weather**: Water drop squash & stretch with dual side splashes (`fx="drop"`).
    - **Profile**: Organic hand wave (`fx="wave"`).
- **Synthesized Audio Feedback**:
  - Zero audio file downloads: Generates organic synthesized liquid "plip" sound effects on tap via the Web Audio API (`AudioContext`).
- **Accessible & Responsive**:
  - Full keyboard navigation (`ArrowLeft`, `ArrowRight`, `Tab`, `Enter`).
  - Automatic compact icon-only transition on mobile screens (`< 520px`).
  - Full `prefers-reduced-motion` compliance.
- **Complete SEO & Production Optimized**: Next.js 16 (App Router), OpenGraph, Twitter Cards, Schema.org `SoftwareSourceCode` JSON-LD author metadata.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Library**: [React 19](https://react.dev/)
- **Graphics & Audio**: WebGL 1.0 Shader & Web Audio API
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) & shadcn/ui design tokens
- **Icons**: [Lucide React](https://lucide.dev/)
- **Fonts**: *Plus Jakarta Sans*, *JetBrains Mono*, *Space Grotesk*

---

## 📦 Quick Start

```bash
# Clone the repository
git clone https://github.com/Zuhaib-dev/Flourish-UI.git

# Navigate to the component directory
cd Flourish-UI/liquid-glass-navbar

# Install dependencies
pnpm install

# Run the development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the liquid navbar exhibition.

---

## 🧩 Component API

```tsx
import { LiquidNavbar, NimbusIcons } from "@/components/ui/liquid-glass-navbar"

export default function Example() {
  return (
    <LiquidNavbar
      tone="light" // "light" | "dark"
      defaultActive={0}
      sound={true}
      compact={false}
      items={[
        { label: "Home", icon: NimbusIcons.home, fx: "glow" },
        { label: "Explore", icon: NimbusIcons.globe, fx: "spin" },
        { label: "Flights", icon: NimbusIcons.plane, fx: "plane" },
        { label: "Weather", icon: NimbusIcons.drop, fx: "drop" },
        { label: "Profile", icon: NimbusIcons.user, fx: "wave" },
      ]}
    />
  )
}
```

### Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `items` | `LiquidNavItem[]` | `DEFAULT_ITEMS` | Navigation items array (`label`, `href`, `icon`, `fx`) |
| `defaultActive` | `number` | `0` | Uncontrolled initial active index |
| `active` | `number` | `undefined` | Controlled active index |
| `onChange` | `(index: number, item: LiquidNavItem) => void` | `undefined` | Callback fired on item selection |
| `tone` | `'light' \| 'dark'` | `'light'` | Color scheme for light vs dark backgrounds |
| `compact` | `boolean` | `false` | When true, renders icons only with visually-hidden labels |
| `sound` | `boolean` | `false` | Enables real-time synthesized audio "plip" feedback on tap |
| `className` | `string` | `undefined` | Optional extra container classes |
| `style` | `React.CSSProperties` | `undefined` | Optional inline styles |

---

## 🖤 Author

Crafted with care by **[Zuhaib Rashid](https://www.zuhaibrashid.com)**.  
Part of the **[Flourish UI](https://github.com/Zuhaib-dev/Flourish-UI)** collection.
Original waterline shader concept by [guglielmogiannattasio.it](https://guglielmogiannattasio.it).
