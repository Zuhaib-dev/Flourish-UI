# 🎨 Design with Soul

**Live preview:** [Open in Flourish UI](https://flourish-ui.vercel.app/components/design-with-soul)

<div align="center">
  <img src="https://raw.githubusercontent.com/Zuhaib-dev/Flourish-UI/main/design-with-soul/public/Preview.png" width="100%" style="border-radius: 12px; margin-top: 12px; margin-bottom: 24px; box-shadow: 0 4px 20px rgba(0,0,0,0.1);" alt="Design with Soul Preview" />
</div>

An impressionist fine-art portfolio hero section and interactive studio dock crafted for designers, artists, and creative studios. Features a painterly oil painting on linen canvas depicting a boy and his golden dog gazing into a summer sky, high-contrast grotesque typography paired with handwritten calligraphy, bespoke studio practice modals with full `Escape` key accessibility, and an interactive studio notes newsletter subscription form.

## Features

- **Impressionist Fine-Art Canvas**: High-fidelity plein air oil painting on linen canvas with authentic impasto brushstrokes, rich summer clouds, and wild hillside grasses.
- **Dual Painting Switcher**: Interactive canvas style toggle enabling instant switching between the impasto fine-art canvas and the minimalist original inpainting.
- **Delicate Micro-Animations**:
  - Organic wind sway on the botanical wildflower illustration (`animate-botanical-sway`).
  - Subtle hover lift with shadow bloom and icon rotation on service cards.
  - Interactive underline glide and tracking on the CTA link (`VIEW MY WORK →`).
  - Smooth spring pop and checkmark transition on newsletter subscription (`animate-check-spring`).
- **Comprehensive Accessibility (a11y)**:
  - Instant modal closure with the `Escape` key (`Esc` badge indicator).
  - Background scroll lock when modals are open.
  - Full keyboard focus management with visible focus rings (`focus-visible`).
  - Screen reader semantic markup (`role="dialog"`, `aria-modal="true"`, `aria-label`).
- **Interactive Modals & Case Studies**:
  - Curated Works showcase drawer with selected client projects and commission inquiry.
  - Studio Practice service modal detailing branding, web design, and editorial illustration.
- **Interactive Studio Notes Newsletter**: Working subscription input with inline validation, spinner state, and success feedback.
- **Zero Heavy Dependencies**: Built with React 19, Next.js 16, Lucide icons, and Tailwind CSS.
- **Full SEO & OpenGraph**: Pre-configured JSON-LD Schema.org structured data, Twitter Cards, and canonical URLs.

## Quick Start

```bash
cd design-with-soul
pnpm install
pnpm dev
```

## Component Usage

```tsx
import DesignWithSoul from "@/components/ui/design-with-soul"

export default function PortfolioPage() {
  return (
    <DesignWithSoul
      headlineLine1="Design"
      headlineLine2="with soul."
      subtitle="Stories told beautifully."
      ctaText="VIEW MY WORK →"
      founderName="MIRA HAYES"
      founderRole="FOUNDER & DESIGNER"
      founderQuote="Crafting visuals that leave a lasting feeling."
      paintingSrc="/hero-fine-art.png"
    />
  )
}
```

## Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `headlineLine1` | `string` | `"Design"` | Primary display headline first line. |
| `headlineLine2` | `string` | `"with soul."` | Primary display headline second line. |
| `subtitle` | `string` | `"Stories told beautifully."` | Calligraphic script subtitle. |
| `ctaText` | `string` | `"VIEW MY WORK →"` | Action button text with arrow glide. |
| `founderName` | `string` | `"MIRA HAYES"` | Founder display name. |
| `founderRole` | `string` | `"FOUNDER & DESIGNER"` | Upper tracking badge label for the founder. |
| `founderQuote` | `string` | `"Crafting visuals that leave a lasting feeling."` | Italic script motto under founder name. |
| `brandLogo` | `string` | `"m."` | Brand signature monogram for top nav. |
| `paintingSrc` | `string` | `"/hero-fine-art.png"` | Path to the impressionist oil painting image. |
| `services` | `ServiceItem[]` | `defaultServices` | Array of studio practice services (Branding, Web Design, Illustration). |
| `newsletterTitle` | `string` | `"Notes from the studio"` | Heading for the newsletter subscription box. |
| `newsletterDesc` | `string` | `"Thoughts, insights, and inspiration delivered gently."` | Subheading for the newsletter form. |
| `onCtaClick` | `() => void` | `undefined` | Custom handler for CTA click (defaults to opening Curated Works modal). |
| `className` | `string` | `""` | Optional CSS classes for the main wrapper. |

## Author

**Zuhaib Rashid** — Full Stack Developer & Next.js Engineer
- **Portfolio:** [zuhaibrashid.com](https://www.zuhaibrashid.com)
- **GitHub:** [@Zuhaib-dev](https://github.com/Zuhaib-dev)
- **LinkedIn:** [Zuhaib Rashid](https://www.linkedin.com/in/zuhaib-rashid-661345318/)
- **X:** [@xuhaib_x9](https://x.com/xuhaib_x9)
