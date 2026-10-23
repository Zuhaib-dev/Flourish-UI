# The Swedish Candy Cart of Your Dreams — Nectar 🍬

**Live preview:** [Open in Flourish UI](https://flourish-ui.vercel.app/components/swedish-candy-cart-hero)

<div align="center">
  <img src="https://raw.githubusercontent.com/Zuhaib-dev/Flourish-UI/main/swedish-candy-cart-hero/public/Preview.png" width="100%" style="border-radius: 12px; margin-bottom: 24px;" alt="The Swedish Candy Cart of Your Dreams Preview" />
</div>

A delightful, high-end editorial storefront hero section inspired by Swedish artisanal candy culture (*lördagsgodis*). Featuring authentic pink gingham paper grid patterns, a hanging dusty-rose scalloped awning valance, editorial serif typography (*Fraunces* and *Caveat*), whimsical floating candy physics, and an interactive Scandinavian Pick & Mix tasting menu modal.

Built with **React 19**, **Next.js 16**, **Tailwind CSS v4**, and **Framer Motion**.

---

## ✨ Highlights & Features

- **Pixel-Perfect Aesthetic**: Exact recreation of the Swedish confectionery cart storefront with top scalloped awning trim (`#cb97b4`), seamless pink graph paper grid canvas (`#fff4f6`), and soft periwinkle corner atmospheric vignette.
- **Harmonious Editorial Typography**: Flared serif headlines in *Fraunces*, refined italic wordmark `nectar`, bold geometric uppercase navigation, and tilted cursive handwriting `catch me if you candy ✦` in *Caveat*.
- **Vintage Piaggio Ape Candy Cart**: High-resolution cherry-red mobile confectionery truck adorned with Nordic peony garlands, wooden shelving, and Swedish sweet jars (*Svenskt Godis - Sötsaker*, *Malmö Chokladfabrik*, and *SÖT 1968* plate).
- **Interactive Pick & Mix Tasting Menu**: Clicking the vintage truck or tote bag launches an authentic Scandinavian confectionery modal featuring *Bubs Skalle*, *Ahlgrens Bilar*, *Sur Smultron*, and *Djungelvrål*.
- **Dynamic Candy Tote Bag Counter**: Adding Scandinavian sweets dynamically increments the top navigation bag badge counter in real-time with micro-animations.
- **Floating Candy Physics**: Playful floating treats around the canvas including an amber gummy bear, red Swedish licorice lozenge, cherry gumdrops, lime gumdrop, and peppermint swirl.
- **Complete SEO Ready**: Comprehensive metadata in `app/layout.tsx` including OpenGraph tags, Twitter cards, and Schema.org `SoftwareSourceCode` author JSON-LD markup.
- **Zero Sitemaps / Robots**: Lightweight standalone directory architecture strictly isolated for clean, portable UI injection.

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
import { SwedishCandyCartHero } from './components/swedish-candy-cart-hero'

export default function Page() {
  return (
    <main className="min-h-screen w-full">
      <SwedishCandyCartHero
        locationText="(BASED IN PITTSBURGH, PA)"
        headlineLine1="The Swedish Candy"
        headlineLine2="Cart of Your"
        headlineLine3="Dreams"
        descriptionText="Your go-to cart to call for events and catering, monthly candy club deliveries, online candy flees, and more."
        ctaButtonText="JOIN THE CLUB"
        scriptCalloutText="catch me if you candy"
      />
    </main>
  )
}
```

---

## 🛠️ Props Reference

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `locationText` | `string` | `'(BASED IN PITTSBURGH, PA)'` | Eyebrow location badge above the headline. |
| `headlineLine1` | `string` | `'The Swedish Candy'` | Line 1 of the main editorial serif display headline. |
| `headlineLine2` | `string` | `'Cart of Your'` | Line 2 of the main editorial serif display headline. |
| `headlineLine3` | `string` | `'Dreams'` | Line 3 of the main editorial serif display headline. |
| `descriptionText` | `string` | `'Your go-to cart to call for events...'` | Editorial subtitle text below headline. |
| `ctaButtonText` | `string` | `'JOIN THE CLUB'` | Text label inside the periwinkle pill CTA button. |
| `scriptCalloutText` | `string` | `'catch me if you candy'` | Tilted handwritten script callout floating above the cart. |
| `cartImageSrc` | `string` | `'/candy-cart.jpg'` | Relative or remote URL to the vintage candy cart image. |
| `className` | `string` | `''` | Additional Tailwind utility classes. |

---

## 🧱 Tech Stack

- **Framework**: React 19 + Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4 (`@tailwindcss/postcss`)
- **Typography**: Google Fonts (*Fraunces*, *Plus Jakarta Sans*, *Caveat*)
- **Icons**: Lucide React
- **Animations**: Framer Motion spring physics

---

## 👨‍💻 Author

**Zuhaib Rashid** — Full Stack Developer & Next.js Engineer  
- **Portfolio:** [zuhaibrashid.com](https://www.zuhaibrashid.com)  
- **GitHub:** [@Zuhaib-dev](https://github.com/Zuhaib-dev)  
- **LinkedIn:** [Zuhaib Rashid](https://www.linkedin.com/in/zuhaib-rashid-661345318/)  
- **X:** [@xuhaib_x9](https://x.com/xuhaib_x9)  
