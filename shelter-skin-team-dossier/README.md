# Shelter Skin — Meet The Team Dossier 📎

**Live preview:** [Open in Flourish UI](https://flourish-ui.vercel.app/components/shelter-skin-team-dossier)

<div align="center">
  <img src="https://raw.githubusercontent.com/Zuhaib-dev/Flourish-UI/main/shelter-skin-team-dossier/public/Preview.png" width="100%" style="border-radius: 12px; margin-bottom: 24px;" alt="Shelter Skin Meet The Team Dossier Preview" />
</div>

A tactile, editorial questionnaire dossier card and interactive modal component crafted for skincare, beauty, and fashion brands. Features an archival cream paper questionnaire sheet, a clipped 35mm film Polaroid photo held by a metallic paperclip, authentic gel-pen handwriting typography, hand-drawn ink doodles, and dual presentation modes (modular card or modal overlay).

Built with **React 19**, **Next.js 16**, **Tailwind CSS v4**, and **Framer Motion**.

---

## ✨ Highlights & Features

- **Pixel-Perfect Aesthetic**: Exact recreation of the editorial team questionnaire sheet featuring creamy archival paper (`#fbf9f4`), crisp 1px borders, subtle paper fiber texture, and a soft pastel sky blue desktop canvas (`#9ebfd8`).
- **Authentic Polaroid & Metallic Paperclip**: 35mm film photographic portrait tilted at a natural angle, held to the paper sheet by a silver metallic wire paperclip with physical depth and specular highlights.
- **Natural Gel-Pen Handwriting**: Authentic student/designer handwritten responses rendered in *Patrick Hand* and *Caveat* for names, roles, zodiac signs, and personal hyperfixations.
- **Hand-Drawn Ink Doodles**: Whimsical organic ink doodles including an ellipse loop circling `DEEP END`, a radiating sun doodle (`☼`), and an ocean wave swirl (`〰️`).
- **Interactive Scent Selector**: Click between `VANILLA`, `SOLAR`, or `DEEP END` to see the hand-drawn ink circle smoothly animate to your selection with fluid Framer Motion spring physics.
- **Dual Presentation Modes (Card & Modal)**: Can be seamlessly embedded as a standalone modular card or triggered as a full-screen modal overlay with backdrop blur.
- **Multi-Member Roster**: Includes interactive tabs to flip between team member dossiers (*Carissa — Creative Director*, *Maya — Head of Botanical Formulation*).
- **Interactive Polaroid Physics**: Clicking the Polaroid unpins and tilts the photo with spring physics.
- **Complete SEO Ready**: Comprehensive metadata in `app/layout.tsx` including OpenGraph tags, Twitter cards, and Schema.org `SoftwareSourceCode` author JSON-LD markup.
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

### Embedded Modular Card

```tsx
import { ShelterSkinTeamDossier } from './components/shelter-skin-team-dossier'

export default function Page() {
  return (
    <main className="min-h-screen w-full bg-[#9ebfd8] flex items-center justify-center p-8">
      <ShelterSkinTeamDossier initialMemberId="carissa" showMemberSwitcher={true} />
    </main>
  )
}
```

### Pop-up Modal Overlay

```tsx
'use client'

import React, { useState } from 'react'
import { ShelterSkinTeamDossier } from './components/shelter-skin-team-dossier'

export default function Page() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <button onClick={() => setIsOpen(true)}>Open Team Dossier</button>
      <ShelterSkinTeamDossier
        asModal={true}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        initialMemberId="carissa"
      />
    </div>
  )
}
```

---

## 🛠️ Props Reference

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `initialMemberId` | `string` | `'carissa'` | ID of the default active team member profile. |
| `asModal` | `boolean` | `false` | When true, renders as a fixed backdrop-blurred modal dialog. |
| `isOpen` | `boolean` | `true` | Visibility control when `asModal` is true. |
| `onClose` | `() => void` | `undefined` | Callback fired when the modal backdrop or close button is clicked. |
| `showMemberSwitcher` | `boolean` | `true` | Whether to display the team roster member selector tabs. |
| `className` | `string` | `''` | Additional Tailwind utility classes applied to the sheet card. |

---

## 🧱 Tech Stack

- **Framework**: React 19 + Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4 (`@tailwindcss/postcss`)
- **Typography**: Google Fonts (*Playfair Display*, *Patrick Hand*, *Space Mono*, *Caveat*)
- **Icons**: Lucide React
- **Animations**: Framer Motion spring physics

---

## 👨‍💻 Author

**Zuhaib Rashid** — Full Stack Developer & Next.js Engineer  
- **Portfolio:** [zuhaibrashid.com](https://www.zuhaibrashid.com)  
- **GitHub:** [@Zuhaib-dev](https://github.com/Zuhaib-dev)  
- **LinkedIn:** [Zuhaib Rashid](https://www.linkedin.com/in/zuhaib-rashid-661345318/)  
- **X:** [@xuhaib_x9](https://x.com/xuhaib_x9)  
