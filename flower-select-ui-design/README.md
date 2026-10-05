# Flower Select UI Component 🌸

A beautiful, interactive React component that blooms organic, premium SVG flowers when you highlight text. Designed with a calming aesthetic and powered by fluid spring physics.

## ✨ Features
- **Organic Interactions**: Native browser text selection combined with beautiful spring animations.
- **Premium SVGs**: Programmatically generated SVG flowers (Daisy, Lily, Pointy, Poppy) with subtle drop shadows and organic variations.
- **Framer Motion Integration**: Smooth entrances, natural rotations, and physics-based exits.
- **Accessible & Lightweight**: Unintrusive design that works perfectly alongside your content without taking over the document flow.

## 🚀 Tech Stack
- React / Next.js
- Tailwind CSS
- Framer Motion
- Lucide React (for optional icons)

## 📦 Getting Started

First, ensure you have the dependencies installed:

```bash
pnpm install framer-motion tailwindcss clsx tailwind-merge
```

### Usage

Simply wrap your text content with the `<FlowerSelect>` component:

```tsx
import { FlowerSelect } from '@/components/flower-select';

export default function MyPage() {
  return (
    <FlowerSelect 
      maxBlooms={40}      // Customize maximum simultaneous flowers
      bloomSpread={25}    // Adjust how far flowers spread from the text
      className="p-8"
    >
      <h1 className="text-4xl">Highlight me to see a garden!</h1>
      <p>Any text selected within this wrapper will trigger the bloom effect.</p>
    </FlowerSelect>
  );
}
```

## 👨‍💻 Author
**Zuhaib Rashid**

---
*Built with room to grow. 🌱*
