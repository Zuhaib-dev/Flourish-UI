"use client";

import "../../../../../liquid-glass-folder-stack/app/globals.css";
import GlassFolder from "../../../../../liquid-glass-folder-stack/components/ui/liquid-glass-folder-stack";

/**
 * Live preview page for Liquid Glass Folder Stack with responsive scaling
 * and generous gaps so cards never collide or overlap on any screen or iframe.
 */
export default function ComponentLivePreview() {
  return (
    <div
      className="relative flex w-full flex-col items-center justify-center overflow-x-hidden overflow-y-auto bg-background px-4 py-8 sm:py-14 md:py-18"
      style={{ minHeight: "100svh" }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 text-foreground opacity-[0.13]"
        style={{
          backgroundImage:
            "radial-gradient(currentColor 1.1px, transparent 1.4px)",
          backgroundSize: "22px 22px",
        }}
      />

      <div className="relative flex flex-wrap items-end justify-center gap-x-10 gap-y-16 sm:gap-x-14 sm:gap-y-20 lg:gap-x-20 lg:gap-y-24 max-w-[1400px] mx-auto z-10 transition-transform duration-300 scale-[0.72] sm:scale-[0.84] lg:scale-100 origin-center">
        <GlassFolder
          label="My Files"
          art="aurora"
          seed={3}
          appearDelay={0}
        />

        <GlassFolder
          label="Archives"
          art="none"
          action="more"
          labelPlacement="top-left"
          appearDelay={140}
          files={[
            { name: "Lookbook 2024", meta: "38 images", art: "dusk" },
            { name: "Invoices", meta: "12 PDFs" },
            { name: "Shoot — Lisbon", meta: "RAW · 2.1 GB", art: "ember" },
            { name: "Contract.pdf", meta: "PDF · 320 KB" },
          ]}
          menu={[
            { label: "Rename" },
            { label: "Share…" },
            { label: "Move to Trash", danger: true },
          ]}
        />

        <GlassFolder
          label="My Files"
          meta="Wed 19 Aug"
          tone="dark"
          art="ember"
          seed={11}
          action="none"
          labelPlacement="top-right"
          appearDelay={280}
          files={[
            { name: "Stills", meta: "64 images", art: "verdant" },
            { name: "Edit notes", meta: "TXT · 4 KB" },
            { name: "Grade v3", meta: "DRX · 18 MB", art: "aurora" },
          ]}
        />
      </div>

      <p className="relative mt-4 sm:mt-8 font-mono text-[11px] tracking-[0.18em] text-muted-foreground uppercase z-10">
        Hover to lean · Click to open · + to add
      </p>
    </div>
  );
}
