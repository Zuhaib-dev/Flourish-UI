# 🔥 Cold Flame Drift

<div align="center">
  <img src="https://raw.githubusercontent.com/Zuhaib-dev/Flourish-UI/main/cold-flame-drift/public/Preview.png" alt="Cold Flame Drift Preview" width="100%" style="border-radius: 12px; margin-top: 12px; margin-bottom: 24px; border: 1px solid #e5e7eb; box-shadow: 0 4px 20px rgba(0,0,0,0.1);" />
</div>

A tactile, generative field of grainy, hand-printed risograph flames sliding along a diagonal. Features noise-bent flow rows, dual-ink stippled grain, drifting dash marks, and dynamic pointer interaction (hover curl, speed boost, and click flare shockwaves).

## Features
- **Generative WebGL Fragment Pass**: Custom single-pass GLSL shader rendering procedural flame geometry without external textures or image assets.
- **Risograph Dual-Ink Stipple**: Deep ink at bases and shadowed edges, bright ink through flame bodies and tips, stippled with procedural grain.
- **Fluid Noise Current**: Rows snake as they travel through a slow noise vector field, with optional branching forked flame tips.
- **Interactive Cursor Dynamics**: Flames curl away from the pointer, run hotter and race on rapid movement, and trigger an expanding flare shockwave on click.
- **5 Curated Palettes**: `ember`, `cobalt`, `jade`, `violet`, and `bone` presets with custom color overrides.
- **Graceful Non-WebGL Fallback**: Automatically degrades to repeating soft diagonal ink bands if WebGL is unavailable.
- **shadcn & Tailwind CSS Ready**: Standardized under `components/ui/cold-flame-drift.tsx`.

## Quick Start

```bash
pnpm install
pnpm dev
```

## Component Usage

```tsx
import ColdFlameDrift from "@/components/ui/cold-flame-drift";

export default function HeroSection() {
  return (
    <ColdFlameDrift palette="ember" height="100vh">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <h1 className="text-6xl font-serif italic text-white">Burn cold.</h1>
      </div>
    </ColdFlameDrift>
  );
}
```

## Author

**Zuhaib Rashid** — Full Stack Developer & Next.js Engineer
- **Portfolio:** [zuhaibrashid.com](https://www.zuhaibrashid.com)
- **GitHub:** [@Zuhaib-dev](https://github.com/Zuhaib-dev)
- **LinkedIn:** [Zuhaib Rashid](https://www.linkedin.com/in/zuhaib-rashid-661345318/)
- **X:** [@xuhaib_x9](https://x.com/xuhaib_x9)
