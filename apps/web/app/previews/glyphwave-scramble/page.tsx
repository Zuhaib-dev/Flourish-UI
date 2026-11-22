"use client"

import { GlyphwaveScramble } from "../../../../../glyphwave-scramble/components/ui/glyphwave-scramble"

export default function GlyphwaveScramblePreview() {
  return (
    <main style={{ minHeight: "100svh", height: "100svh", minWidth: 0, overflow: "hidden", background: "#000000" }}>
      <GlyphwaveScramble autoplay style={{ width: "100%", height: "100%" }} />
    </main>
  )
}
