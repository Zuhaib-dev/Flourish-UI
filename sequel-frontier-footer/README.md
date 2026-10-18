# Sequel Frontier Footer 🐎

**Live preview:** [Open in Flourish UI](https://flourish-ui.vercel.app/components/sequel-frontier-footer)

<div align="center">
  <img src="https://raw.githubusercontent.com/Zuhaib-dev/Flourish-UI/main/sequel-frontier-footer/public/Preview.png" width="100%" style="border-radius: 12px; margin-bottom: 24px;" alt="Sequel Frontier Footer Preview" />
</div>

An evocative, cyanotype editorial footer inspired by 19th-century American frontier landscape intaglio engravings, expansive desert plains, and timeless risograph typography.

Built with **React 19**, **Next.js 16**, **Tailwind CSS v4**, and **Framer Motion**.

---

## ✨ Highlights & Features

- **Antique Cyanotype Engraving**: Authentic intaglio etching with a lone cowboy rider trotting across the desert plain, rolling mountain silhouettes, and desert sagebrush shrubs.
- **Deep Cobalt Paper Aesthetic**: Rich royal cobalt blue (`#0b3987`) textured sky meeting warm ivory parchment (`#f8f2e4`) ground line art.
- **Radiant Compass Star**: 4-pointed faceted compass star logo paired with classical serif typography (*Cormorant Garamond* & *Playfair Display*).
- **Comprehensive Editorial Directory**: 4 structured columns with custom underline accent rules for `SHOP`, `ABOUT US`, `HELP & SUPPORT`, and `NEWSLETTER`.
- **Minimalist Newsletter Form**: High-contrast bordered email box with custom ivory submit button and real-time submission feedback.
- **Floating Legal Bar**: Elegantly balanced legal links (`Privacy Policy | Terms of Service | Cookie Policy`) floating along the mountain ridge.
- **Complete SEO Ready**: Preconfigured with OpenGraph metadata, Twitter cards, and Schema.org `SoftwareSourceCode` JSON-LD author markup.

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
import { SequelFrontierFooter } from './components/sequel-frontier-footer'

export default function FooterExample() {
  return (
    <SequelFrontierFooter
      brandName="sequel"
      tagline="Building digital experiences that inspire, connect, and create lasting value."
      emailContact="hello@sequel.com"
      phoneContact="+91 00000 00000"
      locationContact="India"
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
| `brandName` | `string` | `'sequel'` | Lowercase brand wordmark. |
| `tagline` | `string` | `'Building digital experiences...'` | Italic serif brand manifesto statement. |
| `emailContact` | `string` | `'hello@sequel.com'` | Direct contact email address. |
| `phoneContact` | `string` | `'+91 00000 00000'` | Telephone number with country code. |
| `locationContact` | `string` | `'India'` | Company location or headquarters. |
| `newsletterDescription` | `string` | `'Subscribe to get updates...'` | Newsletter column subtitle. |
| `newsletterPlaceholder` | `string` | `'Enter your email'` | Placeholder for newsletter input. |
| `artworkSrc` | `string` | `'/frontier-engraving-orig.png'` | Background frontier engraving path. |
| `shopLinks` | `{ label, href }[]` | 6 standard store items | First navigation column links. |
| `aboutLinks` | `{ label, href }[]` | 5 company links | Second navigation column links. |
| `helpLinks` | `{ label, href }[]` | 4 customer support links | Third navigation column links. |
| `legalLinks` | `{ label, href }[]` | 3 compliance links | Bottom legal bar links. |
| `onSubscribe` | `(email: string) => Promise<void> \| void` | `undefined` | Callback fired on email submission. |
| `className` | `string` | `''` | Additional Tailwind utility classes. |

---

## 🧱 Tech Stack

- **Framework**: React 19 + Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4 (`@tailwindcss/postcss`)
- **Typography**: Google Fonts (*Cormorant Garamond*, *Playfair Display*, *Plus Jakarta Sans*)
- **Icons**: Lucide React + Bespoke SVGs
- **Animations**: CSS Keyframe Physics (`animate-desert-wind`, `animate-star-twinkle`)

---

## 👨‍💻 Author

**Zuhaib Rashid** — Full Stack Developer & Next.js Engineer  
- **Portfolio:** [zuhaibrashid.com](https://www.zuhaibrashid.com)  
- **GitHub:** [@Zuhaib-dev](https://github.com/Zuhaib-dev)  
- **LinkedIn:** [Zuhaib Rashid](https://www.linkedin.com/in/zuhaib-rashid-661345318/)  
- **X:** [@xuhaib_x9](https://x.com/xuhaib_x9)  

**Tags:** `#react` `#nextjs` `#cyanotype` `#editorial` `#engraving` `#desert` `#tailwind` `#components` `#flourish-ui`
