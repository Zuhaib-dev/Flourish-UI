# ☁️ Split Sign Up Modal

<div align="center">
  <img src="https://raw.githubusercontent.com/Zuhaib-dev/Flourish-UI/main/split-signup-modal/public/Preview.png" width="100%" style="border-radius: 12px; margin-bottom: 24px;" alt="Split Sign Up Modal Preview" />
</div>

A highly premium, two-column split-layout sign up modal featuring a clean typographic left panel and a dreamy, animated glassmorphic right panel. Built for the Flourish UI component library.

## 🌟 Overview

The **Split Sign Up Modal** contrasts a pristine, highly functional authentication form against a creative, atmospheric backdrop. It demonstrates advanced CSS techniques and Framer Motion integration to create a feeling of spatial depth without relying on static raster images.

## ✨ Features

- **Dreamy CSS Atmosphere**: Instead of static images, the right panel uses slow-breathing, massive blurred radial gradients (`blur-[100px]`, `mix-blend-multiply`) animated with Framer Motion to create a living, floating "cloud-like" atmosphere.
- **Ultra-Premium Glassmorphism**: Features meticulously styled frosted glass cards (`bg-white/40 backdrop-blur-[24px]`) that refract the animated gradients behind them.
- **Tactile Form Elements**: The left panel features exactingly spaced typography, custom SVG icons, and physical hover/active states (`active:scale-[0.98]`) for the buttons.
- **Fluid Staggered Entrances**: The mock UI elements in the glass panel float in sequentially using Framer Motion's spring physics.

## 🛠️ Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS (v4)
- **Animations:** Framer Motion
- **Icons:** `lucide-react`

## 🚀 Getting Started

To run this component locally:

```bash
# Install dependencies
pnpm install

# Start the development server
pnpm dev
```

Navigate to [http://localhost:3000](http://localhost:3000) to view the component.
