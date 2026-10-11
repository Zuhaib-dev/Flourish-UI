# Waves Flow Shader Background 🌊

An animated, organic WebGL shader background component crafted for modern web applications. Renders smooth flowing waves blended in perceptual OKLab color space with film grain and optional cursor distortion physics.

<div align="center">
  <img src="https://raw.githubusercontent.com/Zuhaib-dev/Flourish-UI/main/waves-flow-shader/public/Preview.png" width="100%" style="border-radius: 12px; margin-top: 12px; margin-bottom: 24px; box-shadow: 0 4px 20px rgba(0,0,0,0.1);" alt="Waves Flow Shader Background Preview" />
</div>

## Features

- ⚡️ **Zero Third-Party Runtime Dependencies:** Renders a single fullscreen triangle directly on a plain WebGL1 context.
- 🎨 **Perceptual OKLab Blending:** Colors blend realistically without muddiness or gray dead-zones between stops.
- 🖥️ **Resource Optimized:** Automatically caps `devicePixelRatio` at `2` and pauses the `requestAnimationFrame` loop when the browser tab is hidden to save battery.
- 📐 **Non-Intrusive Mounting:** Absolutely positioned behind page content (`pointer-events-none absolute inset-0 -z-10`) so all foreground typography and buttons remain completely interactive.
- 🎛️ **Full Shader Parametrization:** Complete control over flow speed, zoom, intensity, domain warp, contrast, brightness, saturation, hue, blur, and film grain.

## Palette & Preset Feel

- **Default Style:** "Waves" (flow shader)
- **Colors (low → high):** `#1A1423` → `#B75D69` → `#EACDC2` → `#FFF5EB`
- **Feel:** Speed 30/100 (`seconds * -0.67`), Zoom 41/100 (`1.32`), Intensity 49/100 (`0.49`), Warp 1/100 (`0.01`), Contrast 53/100 (`1.08`), Brightness 57/100 (`0.07`), Saturation 100/100 (`2.00`), Hue 130° (`2.27 rad`), Vignette 0/100 (`0.00`), Grain 100/100 (`0.35`).
- **Cursor:** Off by default (`presence = 0.0`), with optional interactive cursor physics (push, pinch, swirl, ripple).

## Quick Start

```bash
pnpm install
pnpm dev
```

### Usage

```tsx
import { WavesFlowShader } from "@/components/ui/waves-flow-shader";

export default function Page() {
  return (
    <main className="relative min-h-screen">
      {/* Mounted absolutely behind all page content */}
      <WavesFlowShader />

      <div className="relative z-10 flex min-h-screen items-center justify-center">
        <h1 className="text-4xl font-bold text-white">Flourish UI</h1>
      </div>
    </main>
  );
}
```

Or wrap content directly:

```tsx
<WavesFlowShader className="min-h-screen flex items-center justify-center">
  <div className="text-center text-white">
    <h1 className="text-5xl font-extrabold">Waves Flow</h1>
  </div>
</WavesFlowShader>
```

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `colors` | `string[]` \| `[number, number, number][]` | `['#1A1423', '#B75D69', '#EACDC2', '#FFF5EB']` | Color palette stops |
| `uniforms` | `WavesShaderUniforms` | `{}` | Custom shader parameters (speed, zoom, intensity, warp, etc.) |
| `interactive` | `boolean` | `false` | Enable cursor interaction physics |
| `cursorEffect` | `number` | `3.0` | Cursor reaction mode (0: push, 1: pinch, 2: swirl, 3: ripple) |
| `cursorStrength` | `number` | `0.54` | Cursor distortion strength |
| `cursorRadius` | `number` | `0.56` | Cursor influence radius |
| `maxDpr` | `number` | `2` | Device pixel ratio maximum cap |
| `className` | `string` | `""` | Container styling class |
| `canvasClassName` | `string` | `""` | Canvas element styling class |

## Author

Zuhaib Rashid ([@Zuhaib-dev](https://github.com/Zuhaib-dev))
