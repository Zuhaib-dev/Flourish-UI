# Morning, Mostly — Five Small Rituals ⏰

**Live preview:** [Open in Flourish UI](https://flourish-ui.vercel.app/components/morning-mostly-rituals)

<div align="center">
  <img src="https://raw.githubusercontent.com/Zuhaib-dev/Flourish-UI/main/morning-mostly-rituals/public/Preview.png" width="100%" style="border-radius: 12px; margin-bottom: 24px;" alt="Morning, Mostly — Five Small Rituals Preview" />
</div>

An evocative, mid-century modern risograph editorial gallery and interactive timeline component chronicling the quiet hours of early morning. Inspired by bespoke 3-color spot risograph print editions, tactile paper textures, and tactile editorial storytelling.

Built with **React 19**, **Next.js 16**, **Tailwind CSS v4**, and **Framer Motion**.

---

## ✨ Highlights & Features

- **Pixel-Perfect Aesthetic**: Exact recreation of mid-century risograph prints, stippled screen angles, genuine paper grain textures, and bold headline typography (*Space Grotesk*, *Plus Jakarta Sans*, and *JetBrains Mono*).
- **Dual-Axis Horizontal Scroll Physics**: Effortless horizontal traversal via drag-to-scroll with mouse inertia, vertical wheel-to-horizontal conversion, and keyboard arrow keys.
- **Interactive Scrubber Timeline**: Real-time bottom timeline tracking `07:00` through `09:00` with an animated rust-red indicator bead and clickable timestamp notches.
- **Curatorial Edition Inspector**: Clicking any print launches a bespoke full-bleed curatorial inspector revealing sheet dimensions (`240 × 300 mm`), spot color inks, limited edition numbers, and printmaker notes.
- **Dynamic Time & Action Header**: Top navigation live indicator actively synchronizes with the centered print ritual (e.g. `07:00 wake up`, `07:10 get dressed`, `07:20 walk the dog`, `07:45 brew`, `08:00 breakfast`).
- **Complete SEO Ready**: Fully structured with OpenGraph tags, Twitter cards, and Schema.org `SoftwareSourceCode` JSON-LD author markup.
- **Zero Sitemaps / Robots**: Lightweight standalone directory architecture strictly isolated for portable UI injection.

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

Open [http://localhost:3000](http://localhost:3000) in your browser to view the component.

---

## 📦 Usage

```tsx
import { MorningMostlyRituals } from './components/morning-mostly-rituals'

export default function Page() {
  return (
    <main className="min-h-screen w-full bg-[#ede4d4]">
      <MorningMostlyRituals
        brandName="MORNING, MOSTLY"
        headlineMain="Five small rituals"
        headlineAccent="before"
        headlineEnd="nine a.m."
      />
    </main>
  )
}
```

---

## 🛠️ Props Reference

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `brandName` | `string` | `'MORNING, MOSTLY'` | Display logo branding at top left. |
| `headlineMain` | `string` | `'Five small rituals'` | Primary editorial display headline. |
| `headlineAccent` | `string` | `'before'` | Accent rust-orange word in headline. |
| `headlineEnd` | `string` | `'nine a.m.'` | Closing display headline text. |
| `description` | `string` | `'A print series about the hour...'` | Editorial paragraph text below header. |
| `scrollCta` | `string` | `'SCROLL TO MOVE TIME ──→'` | Call-to-action text for horizontal scrolling. |
| `printDetails` | `string` | `'Risograph, 3 colours per print...'` | Left-hand footer technical print details. |
| `attributionText` | `string` | `'Made at Tubik Studio, mostly in the morning'` | Right-hand studio credits and attribution. |
| `attributionUrl` | `string` | `'https://flourish-ui.vercel.app'` | Studio credits destination link. |
| `rituals` | `RitualItem[]` | `DEFAULT_RITUALS` | Array of risograph print rituals with artwork, notes, and tags. |
| `className` | `string` | `''` | Additional Tailwind utility classes. |

---

## 🧱 Tech Stack

- **Framework**: React 19 + Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4 (`@tailwindcss/postcss`)
- **Typography**: Google Fonts (*Plus Jakarta Sans*, *Space Grotesk*, *JetBrains Mono*)
- **Icons**: Lucide React
- **Animations**: Framer Motion spring physics

---

## 👨‍💻 Author

**Zuhaib Rashid** — Full Stack Developer & Next.js Engineer  
- **Portfolio:** [zuhaibrashid.com](https://www.zuhaibrashid.com)  
- **GitHub:** [@Zuhaib-dev](https://github.com/Zuhaib-dev)  
- **LinkedIn:** [Zuhaib Rashid](https://www.linkedin.com/in/zuhaib-rashid-661345318/)  
- **X:** [@xuhaib_x9](https://x.com/xuhaib_x9)  
