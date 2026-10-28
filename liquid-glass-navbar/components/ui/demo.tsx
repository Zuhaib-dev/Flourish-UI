"use client"

import { LiquidNavbar, NimbusIcons } from "@/components/ui/liquid-glass-navbar"

export interface DemoProps {
  tone?: "light" | "dark"
  sound?: boolean
  compact?: boolean
}

export default function Demo({ tone = "light", sound = true, compact }: DemoProps) {
  return (
    <div
      style={{
        minHeight: "100vh",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 28,
        padding: "0 16px",
        background: tone === "dark" ? "#0A1128" : "#DCEBF5",
        transition: "background 0.3s ease",
      }}
    >
      <LiquidNavbar
        tone={tone}
        defaultActive={0}
        sound={sound}
        compact={compact}
        items={[
          { label: "Home", icon: NimbusIcons.home, fx: "glow" },
          { label: "Explore", icon: NimbusIcons.globe, fx: "spin" },
          { label: "Flights", icon: NimbusIcons.plane, fx: "plane" },
          { label: "Weather", icon: NimbusIcons.drop, fx: "drop" },
          { label: "Profile", icon: NimbusIcons.user, fx: "wave" },
        ]}
      />
      <span
        style={{
          font: "500 12px/1 ui-sans-serif, -apple-system, 'Segoe UI', system-ui, sans-serif",
          color: tone === "dark" ? "rgba(241,247,255,.5)" : "rgba(11,19,43,.5)",
        }}
      >
        by{" "}
        <a
          href="https://guglielmogiannattasio.it"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: tone === "dark" ? "rgba(241,247,255,.7)" : "rgba(11,19,43,.7)" }}
        >
          guglielmogiannattasio.it
        </a>
      </span>
    </div>
  )
}
