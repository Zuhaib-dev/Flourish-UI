# 🎟️ Admit One 3D Holographic Ticket

<div align="center">
  <img src="https://raw.githubusercontent.com/Zuhaib-dev/Flourish-UI/main/admit-one-3-d-holographic-ticket/public/Preview.png" alt="Admit One 3D Holographic Ticket Preview" width="100%" style="border-radius: 12px; margin-top: 12px; margin-bottom: 24px; border: 1px solid #e5e7eb; box-shadow: 0 4px 20px rgba(0,0,0,0.1);" />
</div>

A high-fidelity 3D holographic foil admission ticket featuring procedural WebGL shaders, Bayer matrix dithering, simplex noise foil, interactive physical mouse tilt, and realistic specular glare.

## Features
- **WebGL Procedural Shaders**: Real-time simplex noise and Bayer matrix dithering (2x2, 4x4, 8x8, random) simulating authentic holographic foil.
- **Physical 3D Tilt & Specular Glare**: Interactive mouse tracking with perspective 3D transform and dynamic radial specular highlight glare.
- **Geometric Ticket Silhouette**: Custom SVG path clipping featuring realistic corner radii, perforation line, and tear-off ticket notches.
- **Dynamic Text Scaling**: Algorithmic typography fitting that automatically balances attendee and event text to prevent overflow.
- **Accessibility & Reduced Motion**: Automatically detects `prefers-reduced-motion` and pauses procedural animations.
- **shadcn & Tailwind CSS Ready**: Adheres to shadcn UI project structure located in `components/ui/admit-one-3-d-holographic-ticket.tsx`.

## Quick Start

```bash
pnpm install
pnpm dev
```

## Component Usage

```tsx
import AdmitOneTicket from "@/components/ui/admit-one-3-d-holographic-ticket";

export default function TicketPage() {
  return (
    <AdmitOneTicket
      name="ALEXANDER VANCE"
      presenter="CYBERSPACE 2026"
      event="TECH INNOVATION SUMMIT"
      venue="SECTOR 07 • MAINFRAME AUDITORIUM"
      dates="OCTOBER 24-26, 2026 • SAN FRANCISCO"
      stubText="VIP ACCESS"
      watermark="2026"
      width={580}
    />
  );
}
```

## Author
Zuhaib Rashid ([@Zuhaib-dev](https://github.com/Zuhaib-dev))
