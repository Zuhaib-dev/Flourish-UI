import { GlyphwaveScramble } from "./glyphwave-scramble"

export default function GlyphwaveScrambleDemo() {
  return (
    <main className="relative h-screen min-h-[340px] w-full overflow-hidden bg-black">
      <GlyphwaveScramble autoplay style={{ width: "100%", height: "100%" }} />
    </main>
  )
}
