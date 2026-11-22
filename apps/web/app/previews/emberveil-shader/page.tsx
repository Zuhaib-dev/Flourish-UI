import { EmberveilShader } from "../../../../../emberveil-shader/components/ui/emberveil-shader"

export default function EmberveilShaderPreview() {
  return (
    <main style={{ position: "relative", height: "100svh", minHeight: 360, overflow: "hidden", background: "#160b0b" }}>
      <EmberveilShader className="absolute inset-0 h-full w-full" />
    </main>
  )
}
