# 🌌 Genesis Onboarding Card

**Live preview:** [Open in Flourish UI](https://flourish-ui.vercel.app/components/genesis-onboarding-card)

<div align="center">
  <img src="https://raw.githubusercontent.com/Zuhaib-dev/Flourish-UI/main/genesis-onboarding-card/public/Preview.png" width="100%" style="border-radius: 12px; margin-top: 12px; margin-bottom: 24px; box-shadow: 0 4px 20px rgba(0,0,0,0.1);" alt="Genesis Onboarding Card Preview" />
</div>

A surreal 3D-illustrated onboarding card designed for user registration, profile setup, and gaming/metaverse portals. Features an ethereal orange fluffy tree landscape, interactive profile photo upload with live preview, real-time username validation, and modern micro-interactions.

## Features

- **Surreal 3D Visual Atmosphere**: High-fidelity artwork featuring an ethereal fluffy orange tree and character on a floating geometric platform, with a smooth sky-to-white mask blend.
- **Interactive Photo Upload**: Supports real file picking with client-side FileReader, live preview replacement, file size limits (≤ 5MB), and camera hover triggers.
- **Real-Time Display Name Validation**: Interactive `@` prefixed username input with automatic character formatting and live checkmark confirmation.
- **Micro-Animations & Transitions**: Smooth cubic card entrance, gentle hover scaling, active haptic button feedback, and submit state transitions.
- **Onboarding Success Celebration**: Animated welcome greeting modal with customized profile summary and username confirmation.
- **Zero Heavy Dependencies**: Built with React 19, Next.js 16, Lucide icons, and Tailwind CSS.
- **Accessible & SEO-Optimized**: Comprehensive OpenGraph, Twitter Cards, and Schema.org metadata.

## Quick Start

```bash
cd genesis-onboarding-card
pnpm install
pnpm dev
```

## Component Usage

```tsx
import GenesisOnboardingCard from "@/components/ui/genesis-onboarding-card"

export default function OnboardingPage() {
  return (
    <GenesisOnboardingCard
      initialTitle="Welcome to Genesis,\nYour first journey here!"
      initialSubtitle="Add your Photo and Pick a username"
      defaultAvatarSrc="/unicorn-avatar.png"
      illustrationSrc="/genesis-illustration.png"
      onContinue={(data) => {
        console.log("Onboarding completed:", data)
      }}
    />
  )
}
```

## Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `initialTitle` | `string` | `"Welcome to Genesis,\nYour first journey here!"` | Main onboarding headline text. |
| `initialSubtitle` | `string` | `"Add your Photo and Pick a username"` | Explanatory subheader text. |
| `defaultAvatarSrc` | `string` | `"/unicorn-avatar.png"` | Default avatar image asset URL. |
| `illustrationSrc` | `string` | `"/genesis-illustration.png"` | Top surreal illustration asset URL. |
| `className` | `string` | `""` | Optional CSS classes for the outer wrapper. |
| `onContinue` | `(data) => void` | `undefined` | Callback fired when the user submits their profile. |

## Author

**Zuhaib Rashid** — Full Stack Developer & Next.js Engineer
- **Portfolio:** [zuhaibrashid.com](https://www.zuhaibrashid.com)
- **GitHub:** [@Zuhaib-dev](https://github.com/Zuhaib-dev)
- **LinkedIn:** [Zuhaib Rashid](https://www.linkedin.com/in/zuhaib-rashid-661345318/)
- **X:** [@xuhaib_x9](https://x.com/xuhaib_x9)
