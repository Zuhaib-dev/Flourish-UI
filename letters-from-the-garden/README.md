# Letters from the garden 🧺

**Live preview:** [Open in Flourish UI](https://flourish-ui.vercel.app/components/letters-from-the-garden)

<div align="center">
  <img src="https://raw.githubusercontent.com/Zuhaib-dev/Flourish-UI/main/letters-from-the-garden/public/Preview.png" width="100%" style="border-radius: 12px; margin-bottom: 24px;" alt="Letters from the garden Preview" />
</div>

An idyllic, cottagecore editorial footer and newsletter component inspired by quiet countryside mornings, sun-drenched gardens, and fresh linen hanging on a rustic clothesline.

Built with **React 19**, **Next.js 16**, **Tailwind CSS v4**, and **Framer Motion**.

---

## ✨ Highlights & Features

- **Pixel-Perfect Aesthetic**: Exact recreation of vintage gouache storybook illustration paired with high-editorial typography (*Cormorant Garamond*, *Italiana*, and *Plus Jakarta Sans*).
- **Gentle Breeze Physics**: Includes ambient drifting garden petals and a continuous organic sway keyframe animation across the clothesline and linens.
- **Granular Character Hover Physics**: The iconic `M O R R O W` brand title elevates each letter individually on hover with silky spring physics.
- **Underline Newsletter Subscription**: Minimalist border-bottom email input with real-time feedback and submit status transitions.
- **Harmonious Natural Palette**: Curated parchment cream (`#f6efe7`), deep forest green (`#426149`), charcoal ink (`#323c33`), and muted slate stone (`#7e7b74`).
- **Complete SEO Ready**: Preconfigured with `sitemap.ts`, `robots.ts`, OpenGraph metadata, Twitter cards, and Schema.org `SoftwareSourceCode` JSON-LD author markup.
- **Customizable**: Fully typed TypeScript props for all links, newsletter copy, copyright year, and custom artwork.

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
import { LettersFromTheGarden } from './components/letters-from-the-garden'

export default function FooterExample() {
  return (
    <LettersFromTheGarden
      brandName="MORROW"
      title="Letters from the garden"
      description="Occasional notes from the garden, seasonal stories, and quiet things worth sharing."
      onSubscribe={async (email) => {
        console.log('Subscribing email:', email)
      }}
    />
  )
}
```

---

## 🛠️ Props Reference

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `brandName` | `string` | `'MORROW'` | Center grand display brand typography. |
| `title` | `string` | `'Letters from the garden'` | Editorial newsletter headline. |
| `description` | `string` | `'Occasional notes from...'` | Subtitle describing the garden newsletter. |
| `newsletterPlaceholder` | `string` | `'Your email address'` | Placeholder for the newsletter input. |
| `copyrightText` | `string` | `'© 2026 MORROW'` | Left-bottom copyright line. |
| `artworkSrc` | `string` | `'/garden-clothesline.jpg'` | Background clothesline illustration path. |
| `navigation` | `NavigationLink[]` | `[About, Retreat, Journal, Visit]` | First column links. |
| `socials` | `NavigationLink[]` | `[TikTok, Instagram, Twitter, Contact]` | Second column links. |
| `legal` | `NavigationLink[]` | `[Privacy, Terms, Cookie]` | Third column legal links. |
| `onSubscribe` | `(email: string) => Promise<void> \| void` | `undefined` | Callback fired on email submission. |
| `className` | `string` | `''` | Additional Tailwind utility classes. |

---

## 🧱 Tech Stack

- **Framework**: React 19 + Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4 (`@tailwindcss/postcss`)
- **Typography**: Google Fonts (*Cormorant Garamond*, *Italiana*, *Plus Jakarta Sans*)
- **Icons**: Lucide React
- **Animations**: CSS Keyframe Physics (`sway-slow`, `sway-subtle`, `float-petal`)

---

## 👨‍💻 Author

**Zuhaib Rashid** — Full Stack Developer & Next.js Engineer  
- **Portfolio:** [zuhaibrashid.com](https://www.zuhaibrashid.com)  
- **GitHub:** [@Zuhaib-dev](https://github.com/Zuhaib-dev)  
- **LinkedIn:** [Zuhaib Rashid](https://www.linkedin.com/in/zuhaib-rashid-661345318/)  
- **X:** [@xuhaib_x9](https://x.com/xuhaib_x9)  

**Tags:** `#react` `#nextjs` `#cottagecore` `#editorial` `#clothesline` `#tailwind` `#components` `#flourish-ui`
