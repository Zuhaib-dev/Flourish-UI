"use client"

import { LiquidNavbar, NimbusIcons } from "../../../../../liquid-glass-navbar/components/ui/liquid-glass-navbar"

export default function LiquidGlassNavbarPreview() {
  return <main style={{ minHeight: "100svh", display: "grid", placeItems: "center", padding: 24, background: "linear-gradient(145deg,#dcebf5,#f3eee7)" }}>
    <LiquidNavbar tone="light" defaultActive={0} sound={false} items={[
      { label: "Home", icon: NimbusIcons.home, fx: "glow" },
      { label: "Explore", icon: NimbusIcons.globe, fx: "spin" },
      { label: "Flights", icon: NimbusIcons.plane, fx: "plane" },
      { label: "Weather", icon: NimbusIcons.drop, fx: "drop" },
      { label: "Profile", icon: NimbusIcons.user, fx: "wave" },
    ]} />
  </main>
}
