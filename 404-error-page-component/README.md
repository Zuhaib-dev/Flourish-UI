# 🚫 No Internet Offline 404

**Live preview:** [Open in Flourish UI](https://flourish-ui.vercel.app/components/404-error-page-component)

<div align="center">
  <img src="https://raw.githubusercontent.com/Zuhaib-dev/Flourish-UI/main/404-error-page-component/public/Preview.png" width="100%" style="border-radius: 12px; margin-top: 12px; margin-bottom: 24px; box-shadow: 0 4px 20px rgba(0,0,0,0.1);" alt="No Internet Offline 404 Preview" />
</div>

An evocative, thought-provoking 404 offline error page that contrasts the iconic Chrome offline dinosaur with an overhead bird's-eye perspective of people in a bustling plaza gazing at their smartphones. Designed as a calming digital reminder to disconnect, step outside, and enjoy the real world when the digital one is unreachable.

## Features

- **Evocative Editorial Illustration**: High-resolution overhead crowd illustration rendered in warm, tactile paper tones (`#e7e6e1`).
- **Nostalgic Dino Easter Egg**: Interactive Chrome dinosaur micro-interaction with spacebar jump mechanics and feedback notifications.
- **Responsive Perspective Scaling**: Adaptive orientation scaling supporting both vertical mobile smartphones and wide desktop viewports (`object-cover` / `landscape:object-contain`).
- **Tactile Floating UI**: Glassmorphic status pills and navigation action button directing visitors back to safety.
- **Zero Heavy Dependencies**: Built with React 19, Next.js 16, Framer Motion, and Tailwind CSS.
- **Accessible & SEO-Optimized**: Full OpenGraph, Twitter Card, and Schema.org structured data.

## Quick Start

```bash
cd 404-error-page-component
pnpm install
pnpm dev
```

## Component Usage

```tsx
import Offline404 from "@/components/offline-404"

export default function ErrorPage() {
  return (
    <Offline404
      imageSrc="/Preview.png"
      title="No Internet"
      homeHref="/"
      homeLabel="Back to Home"
    />
  )
}
```

## Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `imageSrc` | `string` | `"/Preview.png"` | Path to the background illustrated crowd artwork. |
| `title` | `string` | `"No Internet"` | Accessible header title for the error page. |
| `suggestions` | `string[]` | `["Throw your phone away", ...]` | Suggestion copy list rendered in accessible markup. |
| `homeHref` | `string` | `"/"` | Target destination link for the primary action button. |
| `homeLabel` | `string` | `"Back to Home"` | Label for the floating return action button. |
| `className` | `string` | `""` | Optional CSS classes for the outer container. |

## Author

**Zuhaib Rashid** — Full Stack Developer & Next.js Engineer
- **Portfolio:** [zuhaibrashid.com](https://www.zuhaibrashid.com)
- **GitHub:** [@Zuhaib-dev](https://github.com/Zuhaib-dev)
- **LinkedIn:** [Zuhaib Rashid](https://www.linkedin.com/in/zuhaib-rashid-661345318/)
- **X:** [@xuhaib_x9](https://x.com/xuhaib_x9)
