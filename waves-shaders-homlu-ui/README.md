# 🌊 Waves Shaders

<div align="center">
  <img src="https://raw.githubusercontent.com/Zuhaib-dev/Flourish-UI/main/waves-shaders-homlu-ui/public/Preview.png" alt="Waves Shaders Preview" width="100%" style="border-radius: 12px; margin-top: 12px; margin-bottom: 24px; border: 1px solid #e5e7eb; box-shadow: 0 4px 20px rgba(0,0,0,0.1);" />
</div>

An interactive, organic wave field shader background featuring perceptual OKLab color transitions, 5-tap blur, film grain, and dynamic pointer displacement effects (push, directional distortion, swirl, and ripple).

## Features
- **Zero-Dependency WebGL**: Standalone WebGL fragment shader with no external textures or image assets required.
- **Perceptual OKLab Color Mixing**: Smooth, photometrically accurate interpolation between 8 color stops without muddy gray zones.
- **Organic Domain Warping**: Driven by fractional Brownian motion (`fbm`), value noise, and procedural Hoskins grain.
- **Dynamic Pointer Interaction**: Smooth exponential easing with support for multiple cursor effect modes.
- **Intelligent Viewport Scaling**: Automatic resolution capping with `IntersectionObserver` pause and `WEBGL_lose_context` teardown.
- **shadcn & Tailwind CSS Ready**: Adheres to standard `components/ui/waves-shaders-homlu-ui.tsx` placement.

## Quick Start

```bash
pnpm install
pnpm dev
```

## Component Usage

```tsx
import { ShaderBackground } from "@/components/ui/waves-shaders-homlu-ui";

export default function HeroSection() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <ShaderBackground className="absolute inset-0 h-full w-full" />
      <div className="relative z-10 flex h-full items-center justify-center">
        <h1 className="text-5xl font-bold text-white">Waves Background</h1>
      </div>
    </div>
  );
}
```

## Author
Zuhaib Rashid ([@Zuhaib-dev](https://github.com/Zuhaib-dev))
