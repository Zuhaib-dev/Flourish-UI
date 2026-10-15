# 🏡 House Savings Goal Card

**Live preview:** [Open in Flourish UI](https://flourish-ui.vercel.app/components/house-savings-goal-card)

<div align="center">
  <img src="https://raw.githubusercontent.com/Zuhaib-dev/Flourish-UI/main/house-savings-goal-card/public/Preview.png" width="100%" style="border-radius: 12px; margin-top: 12px; margin-bottom: 24px; box-shadow: 0 4px 20px rgba(0,0,0,0.1);" alt="House Savings Goal Card Preview" />
</div>

A minimalist, high-fidelity financial savings goal card designed for modern wealth-building apps and banking dashboards. Features a tactile vertical tick progress meter, an integrated Nordic red house visual anchor, auto-invest yield tracking (Vanguard VMFXX), and an interactive transaction ledger with deposit simulations.

## Features

- **Dynamic Tick Progress Meter**: Real-time calculated vertical tick meter (`48` discrete ticks) highlighting filled milestones in tomato coral (`#df4b42`).
- **Interactive Deposit Simulator**: Built-in "Add funds" drawer enabling instant deposits with preset tags, live balance updates, and transaction ledger logging.
- **Goal Management Modal**: In-place editing of the target goal title, target savings amount, and target maturity timeline.
- **Auto-Invest Yield Intelligence**: Clickable Vanguard Money Market fund card displaying real-time 7-day SEC yields (`4.23%`) and compounding schedule.
- **Multi-Source Transaction Ledger**: Interactive ledger rows supporting TD Bank, Vanguard, and Stripe with brand badges.
- **Zero Heavy Dependencies**: Built with React 19, Next.js 16, Lucide icons, and Tailwind CSS.
- **Accessible & SEO-Optimized**: Full OpenGraph, Twitter Cards, and Schema.org structured data.

## Quick Start

```bash
cd house-savings-goal-card
pnpm install
pnpm dev
```

## Component Usage

```tsx
import HouseSavingsGoalCard from "@/components/ui/house-savings-goal-card"

export default function SavingsPage() {
  return (
    <HouseSavingsGoalCard
      initialCurrentAmount={182495}
      initialTargetAmount={250000}
      goalTitle="Buy a house"
      targetDate="June 2029"
      yieldRate="4.23%"
      fundCode="VMFXX"
      houseImageSrc="/nordic-house.png"
    />
  )
}
```

## Props

| Prop | Type | Default | Description |
| :--- | :--- | :--- | :--- |
| `initialCurrentAmount` | `number` | `182495` | Initial saved balance in USD. |
| `initialTargetAmount` | `number` | `250000` | Target savings goal total in USD. |
| `goalTitle` | `string` | `"Buy a house"` | Goal name displayed on the card header. |
| `targetDate` | `string` | `"June 2029"` | Target timeline date badge. |
| `houseImageSrc` | `string` | `"/nordic-house.png"` | Path to the anchor photograph image. |
| `yieldRate` | `string` | `"4.23%"` | Annualized money market yield rate. |
| `fundCode` | `string` | `"VMFXX"` | Ticker code for automated investment fund. |
| `className` | `string` | `""` | Optional CSS classes for the outer container. |

## Author

**Zuhaib Rashid** — Full Stack Developer & Next.js Engineer
- **Portfolio:** [zuhaibrashid.com](https://www.zuhaibrashid.com)
- **GitHub:** [@Zuhaib-dev](https://github.com/Zuhaib-dev)
- **LinkedIn:** [Zuhaib Rashid](https://www.linkedin.com/in/zuhaib-rashid-661345318/)
- **X:** [@xuhaib_x9](https://x.com/xuhaib_x9)
