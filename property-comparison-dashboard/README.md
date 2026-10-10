# 🏡 Property Comparison Dashboard

<div align="center">
  <img src="https://raw.githubusercontent.com/Zuhaib-dev/Flourish-UI/main/property-comparison-dashboard/public/Preview.png" width="100%" style="border-radius: 12px; margin-bottom: 24px;" alt="Property Comparison Dashboard Preview" />
</div>

A highly interactive, fluid property comparison dashboard featuring soft skeuomorphic design and smooth `framer-motion` state transitions, built for the Flourish UI component library.

## 🌟 Overview

The **Property Comparison Dashboard** is a sophisticated layout that organizes dense real estate data into a clean, premium interface. It features a three-column layout (Navigation, Table, Details) perfectly optimized for desktop viewports. The entire interface reacts fluidly when interacting with different properties.

## ✨ Features

- **Fluid Framer Motion Interactivity**: 
  - **Table Active State**: The active table row features a spring-animated blue indicator (`layoutId`) that smoothly snaps between rows as you click.
  - **Dynamic Details Pane**: The entire right-hand pane (Title, Metadata, Breadcrumbs, and Price) crossfades instantly using `AnimatePresence`.
  - **Cinematic Image Swaps**: The massive hero image scales and crossfades (`opacity` and `scale`) when switching between properties for a highly premium feel.
- **Soft Skeuomorphism**: Utilizes a warm `#f8f6f0` cream background. Cards, pills, and agents use `#FFFFFF` backgrounds with meticulously crafted, multi-layered drop shadows (`0 8px 30px rgba(0,0,0,0.04)`) to create depth without harsh borders.
- **Micro-Interactions**: Hover states on all buttons and table rows provide immediate tactile feedback.

## 🛠️ Tech Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS (v4)
- **Animations:** Framer Motion
- **Icons:** `lucide-react`

## 🚀 Getting Started

To run this component locally:

```bash
# Install dependencies
pnpm install

# Start the development server
pnpm dev
```

Navigate to [http://localhost:3000](http://localhost:3000) (or the active port) to view and interact with the dashboard.

## 🎨 Design Notes

The interface uses standard `Inter` typography but relies heavily on spacing, subtle borders (`border-black/[0.03]`), and colored background pills (`bg-blue-50`, `bg-[#fff5e6]`) to create visual hierarchy. The elimination of dark-mode boilerplate ensures the soft cream palette renders consistently.
