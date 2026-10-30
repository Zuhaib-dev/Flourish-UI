"use client"

import { ClothingRailHero, type RailGarment } from "../../../components/preview-components/product-rail-gallery"

const items: RailGarment[] = [
  { id: "tee", name: "Heavyweight tee · Bone", kind: "tee", color: "#e9e2d5", tag: "$48", description: "Organic cotton with a relaxed everyday fit.", details: ["240 gsm cotton", "Regular fit", "Made to layer"] },
  { id: "knit", name: "Ribbed knit · Olive", kind: "knit", color: "#788265", tag: "$86", description: "A soft ribbed knit with a warm, tactile finish.", details: ["Textured knit", "Ribbed cuffs", "Relaxed fit"] },
  { id: "jacket", name: "Canvas jacket · Ochre", kind: "jacket", color: "#c88843", tag: "$124", description: "A sturdy canvas layer built for changing weather.", details: ["Cotton canvas", "Button front", "Utility pockets"] },
  { id: "coat", name: "Wool coat · Ink", kind: "coat", color: "#34434a", tag: "$188", description: "A clean-lined wool coat with a generous drape.", details: ["Wool blend", "Lined interior", "Relaxed silhouette"] },
]

export default function ProductRailGalleryPreview() {
  return <main style={{ minHeight: "100svh", padding: "48px 16px", background: "#f5f2ec", color: "#242722" }}>
    <ClothingRailHero items={items} hanger="wood" eyebrow="New season · Four pieces on the rail" heading="A clothing rail you can handle." caption="Drag a hanger, lift a piece, or open it to see the details." autoplay={false} />
  </main>
}
