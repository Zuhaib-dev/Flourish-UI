"use client"

import { PrismaticLiquidShader } from "../../../../../prismatic-liquid-shader/components/prismatic-liquid-shader"

export default function ComponentLivePreview() {
  return (
    <div className="w-full min-h-screen bg-[#07090e]">
      <PrismaticLiquidShader />
    </div>
  )
}
