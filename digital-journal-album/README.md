# 📔 Digital Journal Album

A photorealistic, highly interactive 3D digital journal with true physical flipbook mechanics and cinematic visuals, built for the Flourish UI component library.

## 🌟 Overview

The **Digital Journal Album** is a meticulous recreation of a physical spiral-bound notebook. Rather than using standard flat carousels or simple coverflows, it leverages native CSS 3D transforms (`preserve-3d`) alongside Framer Motion to create a deeply tactile, interactive experience. Pages have actual physical volume (a front and a back), pivoting realistically along a central spiral binding.

## ✨ Features

- **True 3D Page Flipping**: Each "leaf" of paper has a front and back face. Clicking a page swings it dynamically across the screen using a `-180deg` Y-axis rotation, landing precisely on the opposite stack.
- **Dynamic 3D Lighting**: Custom motion-driven CSS gradients simulate physical shadows. As a page stands vertically during a flip, the side facing away from the virtual light source automatically darkens, creating an unparalleled sense of depth.
- **Photorealistic Spiral Binding**: A fully CSS-rendered metallic spiral spine sits perfectly over the 3D rotation axis, rooting the animations to a physical constraint.
- **Soft Skeuomorphism**: Incorporates gorgeous typography (Playfair Display), tactile Drop Shadows, and inset paper highlights to evoke the nostalgic feel of a premium hardcover photo album.

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

Navigate to [http://localhost:3000](http://localhost:3000) (or the active port) to view and interact with the journal.

## 🎨 Design Notes

The aesthetic aims for a "Calm, immersive, nostalgic mood," using large negative space, heavy decorative serif typography for the branding, and minimalist tracking for metadata. The component heavily features physical cues (like the subtle `#d8d5cd` hardcover background sticking out underneath the white pages) to bridge the gap between digital interfaces and physical objects.
