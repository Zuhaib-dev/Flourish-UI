'use client'

import React, { useRef, useEffect, useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Sliders, 
  Zap,
  RotateCcw,
  Sparkles,
  Layers,
  CircleDot,
  Grid
} from 'lucide-react'

export type TileStyle = 'paper' | 'photo' | 'halftone' | 'glass'
export type PhysicsMode = 'repel' | 'vortex' | 'ripple' | 'attract'

export interface RasterTile {
  id: number
  hx: number
  hy: number
  targetX: number
  targetY: number
  x: number
  y: number
  vx: number
  vy: number
  size: number
  r: number
  g: number
  b: number
  a: number
  isBotanical: boolean
  isDrift: boolean
  scale: number
  targetScale: number
  rotation: number
  targetRotation: number
  elevation: number
  targetElevation: number
  phase: number
}

export interface BotanicalPixelDispersionProps {
  flowerImageSrc?: string
  flowerAlt?: string
  initialTileStyle?: TileStyle
  initialPhysicsMode?: PhysicsMode
  initialTileSize?: number
  className?: string
}

export function BotanicalPixelDispersion({
  flowerImageSrc = '/flower.jpg',
  flowerAlt = 'Botanical Raster Dynamics — Pixel Dispersion',
  initialTileStyle = 'paper',
  initialPhysicsMode = 'repel',
  initialTileSize = 14,
  className = '',
}: BotanicalPixelDispersionProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationFrameRef = useRef<number | null>(null)
  const baseImageRef = useRef<HTMLImageElement | null>(null)
  const grainTileRef = useRef<HTMLCanvasElement | null>(null)

  // Interactive UI State
  const [tileStyle, setTileStyle] = useState<TileStyle>(initialTileStyle)
  const [physicsMode, setPhysicsMode] = useState<PhysicsMode>(initialPhysicsMode)
  const [tileSize, setTileSize] = useState<number>(initialTileSize)
  const [repulsionRadius, setRepulsionRadius] = useState<number>(130)
  const [repulsionStrength, setRepulsionStrength] = useState<number>(1.4)
  const [grainOpacity, setGrainOpacity] = useState<number>(0.4)
  const [isExploded, setIsExploded] = useState<boolean>(false)
  const [activeTileCount, setActiveTileCount] = useState<number>(0)
  const [showControls, setShowControls] = useState<boolean>(false)
  const [isHovered, setIsHovered] = useState<boolean>(false)

  // Mouse / Pointer Tracking
  const mouseRef = useRef<{
    x: number
    y: number
    prevX: number
    prevY: number
    vx: number
    vy: number
    isActive: boolean
  }>({
    x: -1000,
    y: -1000,
    prevX: -1000,
    prevY: -1000,
    vx: 0,
    vy: 0,
    isActive: false,
  })

  // Shockwave Ring State (inspired by Raster Dynamics Wordmark)
  const ringRef = useRef<{
    x: number
    y: number
    t: number
    active: boolean
  }>({
    x: 0,
    y: 0,
    t: 0,
    active: false,
  })

  const tilesRef = useRef<RasterTile[]>([])

  // 1. Generate Procedural Analog Print Grain Tile (Once)
  useEffect(() => {
    const grainCanvas = document.createElement('canvas')
    grainCanvas.width = 256
    grainCanvas.height = 256
    const gctx = grainCanvas.getContext('2d')
    if (gctx) {
      const imgData = gctx.createImageData(256, 256)
      for (let i = 0; i < imgData.data.length; i += 4) {
        const v = Math.random() * 255
        imgData.data[i] = v
        imgData.data[i + 1] = v
        imgData.data[i + 2] = v
        imgData.data[i + 3] = Math.random() < 0.5 ? 0 : 255
      }
      gctx.putImageData(imgData, 0, 0)
      grainTileRef.current = grainCanvas
    }
  }, [])

  // 2. Load Base Flower Image
  useEffect(() => {
    const img = new window.Image()
    img.src = flowerImageSrc
    img.crossOrigin = 'anonymous'
    img.onload = () => {
      baseImageRef.current = img
      rasterizeImageIntoTiles()
    }
  }, [flowerImageSrc])

  // 3. True Raster Sampling Engine
  // Samples the botanical flower into a complete physical grid of square mosaic tiles
  const rasterizeImageIntoTiles = useCallback(() => {
    const container = containerRef.current
    const img = baseImageRef.current
    if (!container || !img) return

    const rect = container.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    if (width === 0 || height === 0) return

    // Offscreen sampling canvas
    const offscreen = document.createElement('canvas')
    offscreen.width = width
    offscreen.height = height
    const octx = offscreen.getContext('2d', { willReadFrequently: true })
    if (!octx) return

    // Draw flower aspect-fit into offscreen buffer
    const imgAspect = img.naturalWidth / img.naturalHeight
    const canvasAspect = width / height
    let drawW = width
    let drawH = height
    let drawX = 0
    let drawY = 0

    if (imgAspect > canvasAspect) {
      drawH = width / imgAspect
      drawY = (height - drawH) / 2
    } else {
      drawW = height * imgAspect
      drawX = (width - drawW) / 2
    }

    octx.drawImage(img, drawX, drawY, drawW, drawH)
    const rawData = octx.getImageData(0, 0, width, height).data

    const gap = tileSize
    const cols = Math.floor(width / gap)
    const rows = Math.floor(height / gap)
    const tiles: RasterTile[] = []
    let idCounter = 0

    // Curated authentic palette for stepped drift pixels
    const petalDriftPalette = [
      { r: 202, g: 1, b: 105 },
      { r: 174, g: 2, b: 88 },
      { r: 217, g: 38, b: 122 },
      { r: 248, g: 165, b: 194 },
      { r: 251, g: 197, b: 216 },
      { r: 254, g: 226, b: 235 },
    ]

    for (let gy = 0; gy < rows; gy++) {
      for (let gx = 0; gx < cols; gx++) {
        const cellX = gx * gap
        const cellY = gy * gap

        // 3x3 Sub-pixel sampling for authentic color fidelity
        let sumR = 0
        let sumG = 0
        let sumB = 0
        let sumA = 0
        let samples = 0

        for (let sy = 0; sy < 3; sy++) {
          for (let sx = 0; sx < 3; sx++) {
            const px = Math.min(width - 1, Math.floor(cellX + ((sx + 0.5) * gap) / 3))
            const py = Math.min(height - 1, Math.floor(cellY + ((sy + 0.5) * gap) / 3))
            const idx = (py * width + px) * 4
            sumR += rawData[idx]
            sumG += rawData[idx + 1]
            sumB += rawData[idx + 2]
            sumA += rawData[idx + 3]
            samples++
          }
        }

        const avgR = Math.round(sumR / samples)
        const avgG = Math.round(sumG / samples)
        const avgB = Math.round(sumB / samples)
        const avgA = (sumA / samples) / 255

        // Botanical Detection: Identify flower petals, center disc, stem, and leaves
        // Filter out desaturated paper shadows: shadows have high luminance and near-zero chroma
        const isWhiteBg = avgR > 238 && avgG > 238 && avgB > 238
        const colorDiffFromWhite = Math.max(255 - avgR, 255 - avgG, 255 - avgB)
        const chroma = Math.max(avgR, avgG, avgB) - Math.min(avgR, avgG, avgB)
        const luminance = (avgR * 299 + avgG * 587 + avgB * 114) / 1000
        const isBotanical = !isWhiteBg && avgA > 0.3 && colorDiffFromWhite > 24 && (chroma > 16 || luminance < 155)

        if (isBotanical) {
          tiles.push({
            id: idCounter++,
            hx: cellX,
            hy: cellY,
            targetX: cellX,
            targetY: cellY,
            x: cellX,
            y: cellY,
            vx: 0,
            vy: 0,
            size: gap,
            r: avgR,
            g: avgG,
            b: avgB,
            a: avgA,
            isBotanical: true,
            isDrift: false,
            scale: 1,
            targetScale: 1,
            rotation: 0,
            targetRotation: 0,
            elevation: 1,
            targetElevation: 1,
            phase: Math.random() * Math.PI * 2,
          })
        }
      }
    }

    // 4. Iconic Yuni Yoshida Stepped Pixel Dissolution
    // Adds dissolving square mosaic tiles stepping off the upper-left petal edge into white space
    const petalDissolveMinX = Math.round(width * 0.30)
    const petalDissolveMaxX = Math.round(width * 0.48)
    const petalDissolveMinY = Math.round(height * 0.08)
    const petalDissolveMaxY = Math.round(height * 0.34)

    for (let y = petalDissolveMinY; y <= petalDissolveMaxY; y += gap) {
      for (let x = petalDissolveMinX; x <= petalDissolveMaxX; x += gap) {
        // Density fades as we move further left away from the flower
        const normalizedDist = (x - petalDissolveMinX) / (petalDissolveMaxX - petalDissolveMinX)
        const verticalDist = Math.abs(y - (petalDissolveMinY + petalDissolveMaxY) / 2) / (petalDissolveMaxY - petalDissolveMinY)
        const prob = Math.pow(normalizedDist, 1.4) * (1 - verticalDist * 0.6) * 0.75 + 0.12

        // Check if a tile already exists at this spot
        const alreadyExists = tiles.some(t => Math.hypot(t.hx - x, t.hy - y) < gap * 0.7)
        if (!alreadyExists && Math.random() < prob) {
          const color = petalDriftPalette[Math.floor(Math.random() * petalDriftPalette.length)]
          tiles.push({
            id: idCounter++,
            hx: x,
            hy: y,
            targetX: x,
            targetY: y,
            x,
            y,
            vx: 0,
            vy: 0,
            size: gap,
            r: color.r,
            g: color.g,
            b: color.b,
            a: 1,
            isBotanical: true,
            isDrift: true,
            scale: 1,
            targetScale: 1,
            rotation: 0,
            targetRotation: 0,
            elevation: 1,
            targetElevation: 1,
            phase: Math.random() * Math.PI * 2,
          })
        }
      }
    }

    // Solitary negative space drift tiles
    const negativeDrift = [
      { x: width * 0.34, y: height * 0.46, r: 115, g: 146, b: 62 },
      { x: width * 0.33, y: height * 0.68, r: 173, g: 201, b: 101 },
      { x: width * 0.66, y: height * 0.64, r: 86, g: 107, b: 14 },
      { x: width * 0.74, y: height * 0.36, r: 217, g: 38, b: 122 },
      { x: width * 0.34, y: height * 0.32, r: 248, g: 165, b: 194 },
    ]

    negativeDrift.forEach(pos => {
      tiles.push({
        id: idCounter++,
        hx: Math.round(pos.x),
        hy: Math.round(pos.y),
        targetX: Math.round(pos.x),
        targetY: Math.round(pos.y),
        x: Math.round(pos.x),
        y: Math.round(pos.y),
        vx: 0,
        vy: 0,
        size: gap,
        r: pos.r,
        g: pos.g,
        b: pos.b,
        a: 1,
        isBotanical: true,
        isDrift: true,
        scale: 1,
        targetScale: 1,
        rotation: 0,
        targetRotation: 0,
        elevation: 1,
        targetElevation: 1,
        phase: Math.random() * Math.PI * 2,
      })
    })

    tilesRef.current = tiles
    setActiveTileCount(tiles.length)
  }, [tileSize])

  // 5. Canvas Resize Handler with Retina DPR
  useEffect(() => {
    const handleResize = () => {
      const container = containerRef.current
      const canvas = canvasRef.current
      if (!container || !canvas) return

      const rect = container.getBoundingClientRect()
      const dpr = Math.min(window.devicePixelRatio || 1, 2)

      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      canvas.style.width = `${rect.width}px`
      canvas.style.height = `${rect.height}px`

      rasterizeImageIntoTiles()
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [rasterizeImageIntoTiles])

  // 6. Pointer & Touch Interactions
  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement> | React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const clientX = e.clientX - rect.left
    const clientY = e.clientY - rect.top

    const mouse = mouseRef.current
    mouse.prevX = mouse.x
    mouse.prevY = mouse.y
    mouse.x = clientX
    mouse.y = clientY
    mouse.vx = (clientX - mouse.prevX) * 0.5
    mouse.vy = (clientY - mouse.prevY) * 0.5
    mouse.isActive = true
    setIsHovered(true)
  }

  const handlePointerLeave = () => {
    const mouse = mouseRef.current
    mouse.isActive = false
    mouse.x = -1000
    mouse.y = -1000
    mouse.vx = 0
    mouse.vy = 0
    setIsHovered(false)
  }

  // Click Triggered Kinetic Shockwave Ring (from Raster Dynamics Wordmark)
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement> | React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const clickX = e.clientX - rect.left
    const clickY = e.clientY - rect.top

    ringRef.current = {
      x: clickX,
      y: clickY,
      t: performance.now(),
      active: true,
    }
  }

  // 7. Global Shatter & Reassemble Physics
  const toggleExplode = () => {
    const tiles = tilesRef.current
    if (!isExploded) {
      // Scatter all tiles across canvas into floating 3D suspended cloud
      tiles.forEach((tile) => {
        const angle = Math.random() * Math.PI * 2
        const distance = 80 + Math.random() * 220
        tile.targetX = tile.hx + Math.cos(angle) * distance
        tile.targetY = tile.hy + Math.sin(angle) * distance
        tile.vx = Math.cos(angle) * 14
        tile.vy = Math.sin(angle) * 14
        tile.targetRotation = (Math.random() - 0.5) * 140
        tile.targetScale = 0.85 + Math.random() * 0.45
        tile.targetElevation = 10 + Math.random() * 14
      })
      setIsExploded(true)
    } else {
      // Snap all tiles magnetically back to their resting botanical grid
      tiles.forEach((tile) => {
        tile.targetX = tile.hx
        tile.targetY = tile.hy
        tile.targetRotation = 0
        tile.targetScale = 1
        tile.targetElevation = 1
      })
      setIsExploded(false)
    }
  }

  // 8. 60 FPS Real-time Simulation & Render Loop
  useEffect(() => {
    let animationTime = 0

    const render = () => {
      const canvas = canvasRef.current
      if (!canvas) return
      const ctx = canvas.getContext('2d')
      if (!ctx) return

      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      const width = canvas.width / dpr
      const height = canvas.height / dpr
      const now = performance.now()

      ctx.save()
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      ctx.clearRect(0, 0, width, height)
      animationTime += 0.025

      const mouse = mouseRef.current
      const ring = ringRef.current
      const tiles = tilesRef.current

      // Kinetic shockwave ring calculation
      let ringRadius = 0
      let ringAge = 0
      if (ring.active) {
        ringAge = now - ring.t
        ringRadius = ringAge * 0.95
        if (ringAge > 1000) {
          ring.active = false
        }
      }

      // Physics loop for each raster tile
      tiles.forEach((tile) => {
        // A. Pointer Interaction Physics (Repel / Vortex / Ripple / Attract)
        if (mouse.isActive) {
          const dx = tile.x - mouse.x
          const dy = tile.y - mouse.y
          const dist2 = dx * dx + dy * dy
          const r = repulsionRadius

          if (dist2 < r * r && dist2 > 0) {
            const dist = Math.sqrt(dist2)
            const normalized = 1 - dist / r

            if (physicsMode === 'repel') {
              const force = normalized * repulsionStrength * 7
              tile.vx += (dx / dist) * force
              tile.vy += (dy / dist) * force
              tile.targetScale = 1 + normalized * 0.32
              tile.targetElevation = 2 + normalized * 15
              tile.targetRotation = (dx / r) * 22
            } else if (physicsMode === 'vortex') {
              const force = normalized * repulsionStrength * 6.5
              const angle = Math.atan2(dy, dx) + Math.PI * 0.55
              tile.vx += Math.cos(angle) * force
              tile.vy += Math.sin(angle) * force
              tile.targetScale = 1 + normalized * 0.28
              tile.targetElevation = 2 + normalized * 13
              tile.targetRotation += normalized * 7
            } else if (physicsMode === 'ripple') {
              const wave = Math.sin(dist * 0.1 - animationTime * 6) * normalized * 7
              tile.vy += wave
              tile.targetScale = 1 + Math.abs(wave) * 0.16
              tile.targetElevation = 2 + Math.abs(wave) * 6
            } else if (physicsMode === 'attract') {
              const force = normalized * repulsionStrength * 5
              tile.vx -= (dx / dist) * force
              tile.vy -= (dy / dist) * force
              tile.targetScale = 1 + normalized * 0.24
              tile.targetElevation = 2 + normalized * 10
            }
          }
        }

        // B. Kinetic Shockwave Impulse (from click)
        if (ring.active && ringAge < 1000) {
          const rdx = tile.hx - ring.x
          const rdy = tile.hy - ring.y
          const rdist = Math.hypot(rdx, rdy) + 0.001
          const band = 1 - Math.min(1, Math.abs(rdist - ringRadius) / 38)
          if (band > 0) {
            const shockForce = band * 18 * (1 - ringAge / 1000)
            tile.vx += (rdx / rdist) * shockForce
            tile.vy += (rdy / rdist) * shockForce
            tile.targetRotation += (Math.random() - 0.5) * 45 * band
            tile.targetScale = 1 + band * 0.38
            tile.targetElevation = 3 + band * 18
          }
        }

        // C. Spring Damping Physics returning tile to target position
        const springK = isExploded ? 0.04 : 0.075
        const damping = 0.82

        const targetX = isExploded ? tile.targetX : tile.hx
        const targetY = isExploded ? tile.targetY : tile.hy

        const fx = (targetX - tile.x) * springK
        const fy = (targetY - tile.y) * springK

        tile.vx = (tile.vx + fx) * damping
        tile.vy = (tile.vy + fy) * damping

        tile.x += tile.vx
        tile.y += tile.vy

        // Ambient organic micro-breathing when idle
        const ambient = Math.sin(animationTime * 1.5 + tile.phase) * 0.35
        const currentY = tile.y + ambient

        // Smooth state transitions
        tile.scale += (tile.targetScale - tile.scale) * 0.12
        tile.rotation += (tile.targetRotation - tile.rotation) * 0.12
        tile.elevation += (tile.targetElevation - tile.elevation) * 0.12

        if (!isExploded && (!mouse.isActive || Math.hypot(tile.x - mouse.x, tile.y - mouse.y) >= repulsionRadius)) {
          tile.targetScale = 1
          tile.targetRotation = 0
          tile.targetElevation = 1
        }

        // D. Render the Tile Material
        ctx.save()
        const halfSize = tile.size / 2
        ctx.translate(tile.x + halfSize, currentY + halfSize)
        ctx.rotate((tile.rotation * Math.PI) / 180)
        ctx.scale(tile.scale, tile.scale)

        // Real-time 3D Paper Shadow
        if (tile.elevation > 1.2) {
          ctx.shadowColor = 'rgba(0, 0, 0, 0.22)'
          ctx.shadowBlur = tile.elevation * 1.25
          ctx.shadowOffsetY = tile.elevation * 0.8
          ctx.shadowOffsetX = (tile.x - width / 2) * 0.02
        } else {
          ctx.shadowColor = 'rgba(0, 0, 0, 0.06)'
          ctx.shadowBlur = 2.5
          ctx.shadowOffsetY = 1
          ctx.shadowOffsetX = 0
        }

        if (tileStyle === 'paper') {
          // Authentic Yuni Yoshida Cut-Paper Mosaic
          ctx.fillStyle = `rgb(${tile.r}, ${tile.g}, ${tile.b})`
          ctx.fillRect(-halfSize, -halfSize, tile.size, tile.size)

          // Paper micro-bevel stroke
          ctx.shadowColor = 'transparent'
          ctx.lineWidth = 0.75
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.32)'
          ctx.strokeRect(-halfSize, -halfSize, tile.size, tile.size)

          // Subtle paper bottom edge shadow
          ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'
          ctx.fillRect(-halfSize, halfSize - 1, tile.size, 1)
          ctx.fillRect(halfSize - 1, -halfSize, 1, tile.size)
        } else if (tileStyle === 'photo') {
          // Photographic Slices sampled from base flower
          if (baseImageRef.current) {
            ctx.drawImage(
              baseImageRef.current,
              (tile.hx / width) * baseImageRef.current.width,
              (tile.hy / height) * baseImageRef.current.height,
              (tile.size / width) * baseImageRef.current.width,
              (tile.size / height) * baseImageRef.current.height,
              -halfSize,
              -halfSize,
              tile.size,
              tile.size
            )
            ctx.shadowColor = 'transparent'
            ctx.lineWidth = 0.75
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.45)'
            ctx.strokeRect(-halfSize, -halfSize, tile.size, tile.size)
          } else {
            ctx.fillStyle = `rgb(${tile.r}, ${tile.g}, ${tile.b})`
            ctx.fillRect(-halfSize, -halfSize, tile.size, tile.size)
          }
        } else if (tileStyle === 'halftone') {
          // Area-True Halftone Dot Matrix (inspired by Raster Dynamics Wordmark)
          const luminance = (0.299 * tile.r + 0.587 * tile.g + 0.114 * tile.b) / 255
          const dotRadius = Math.max(2, (1 - luminance * 0.42) * (tile.size * 0.48))

          ctx.fillStyle = `rgb(${tile.r}, ${tile.g}, ${tile.b})`
          ctx.beginPath()
          ctx.arc(0, 0, dotRadius, 0, Math.PI * 2)
          ctx.fill()
        } else if (tileStyle === 'glass') {
          // Prismatic Frosted Glass Tile
          ctx.fillStyle = `rgba(${tile.r}, ${tile.g}, ${tile.b}, 0.82)`
          ctx.fillRect(-halfSize, -halfSize, tile.size, tile.size)

          const grad = ctx.createLinearGradient(-halfSize, -halfSize, halfSize, halfSize)
          grad.addColorStop(0, 'rgba(255, 255, 255, 0.55)')
          grad.addColorStop(0.5, 'transparent')
          grad.addColorStop(1, 'rgba(255, 255, 255, 0.15)')
          ctx.fillStyle = grad
          ctx.fillRect(-halfSize, -halfSize, tile.size, tile.size)

          ctx.shadowColor = 'transparent'
          ctx.lineWidth = 1
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.8)'
          ctx.strokeRect(-halfSize, -halfSize, tile.size, tile.size)
        }

        ctx.restore()
      })

      // E. Analog Print Grain Overlay (from Raster Dynamics Wordmark)
      const grainTile = grainTileRef.current
      if (grainTile && grainOpacity > 0) {
        ctx.globalAlpha = Math.min(1, grainOpacity) * 0.08
        ctx.globalCompositeOperation = 'overlay'
        const pattern = ctx.createPattern(grainTile, 'repeat')
        if (pattern) {
          ctx.fillStyle = pattern
          ctx.fillRect(0, 0, width, height)
        }
        ctx.globalAlpha = 1
        ctx.globalCompositeOperation = 'source-over'
      }

      ctx.restore() // restore transform
      animationFrameRef.current = requestAnimationFrame(render)
    }

    animationFrameRef.current = requestAnimationFrame(render)
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [physicsMode, repulsionRadius, repulsionStrength, tileStyle, isExploded, grainOpacity])

  return (
    <div
      ref={containerRef}
      id="botanical-canvas-container"
      className={`relative w-full max-w-[560px] aspect-[3/4] bg-white rounded-xs gallery-canvas-shadow border border-black/5 overflow-hidden select-none cursor-crosshair ${className}`}
      onPointerMove={handlePointerMove}
      onMouseMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      onMouseLeave={handlePointerLeave}
      onPointerDown={handlePointerDown}
      onMouseDown={handlePointerDown}
      onTouchMove={(e) => {
        if (e.touches[0]) {
          const rect = e.currentTarget.getBoundingClientRect()
          const clientX = e.touches[0].clientX - rect.left
          const clientY = e.touches[0].clientY - rect.top
          const mouse = mouseRef.current
          mouse.prevX = mouse.x
          mouse.prevY = mouse.y
          mouse.x = clientX
          mouse.y = clientY
          mouse.isActive = true
          setIsHovered(true)
        }
      }}
      onTouchEnd={handlePointerLeave}
    >
      {/* 1. DYNAMIC RASTER MOSAIC TILES CANVAS (The entire flower is built here) */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-10"
      />

      {/* 2. MINIMALIST FLOATING GALLERY CONTROLS */}
      <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
        <button
          id="toggle-controls-btn"
          type="button"
          onClick={() => setShowControls(!showControls)}
          className={`p-2 rounded-full backdrop-blur-md border border-black/10 shadow-xs transition-all cursor-pointer ${
            showControls ? 'bg-black text-white' : 'bg-white/80 hover:bg-white text-black/70 hover:text-black'
          }`}
          title="Toggle Controls"
          aria-label="Toggle Controls"
        >
          <Sliders className="w-3.5 h-3.5" />
        </button>

        <button
          id="scatter-btn"
          type="button"
          onClick={toggleExplode}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full backdrop-blur-md border border-black/10 text-[11px] font-mono font-bold tracking-wider uppercase transition-all shadow-xs cursor-pointer ${
            isExploded
              ? 'bg-rose-500 text-white border-rose-600 ring-2 ring-rose-500/20'
              : 'bg-white/85 text-black hover:bg-white'
          }`}
          title={isExploded ? 'Reassemble Botanical Mosaic' : 'Shatter Botanical Mosaic'}
        >
          <Zap className="w-3 h-3" />
          <span>{isExploded ? 'REASSEMBLE' : 'SHATTER'}</span>
        </button>
      </div>

      {/* 3. EXPANDABLE RASTER DYNAMICS CONTROL TRAY */}
      <AnimatePresence>
        {showControls && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-14 right-4 z-20 w-60 bg-white/92 backdrop-blur-md p-3.5 rounded-xl border border-black/10 shadow-xl text-black text-xs font-mono space-y-3"
          >
            {/* Tile Material */}
            <div>
              <div className="text-[10px] text-black/50 uppercase tracking-widest mb-1.5 font-bold flex items-center justify-between">
                <span>MATERIAL</span>
                <span className="text-[9px] lowercase opacity-60">style</span>
              </div>
              <div className="grid grid-cols-2 gap-1 bg-black/5 p-1 rounded-lg">
                {[
                  { id: 'paper', label: 'Paper Mosaic' },
                  { id: 'photo', label: 'Photo Slices' },
                  { id: 'halftone', label: 'Halftone Dots' },
                  { id: 'glass', label: 'Prism Glass' },
                ].map((mode) => (
                  <button
                    key={mode.id}
                    type="button"
                    onClick={() => setTileStyle(mode.id as TileStyle)}
                    className={`py-1 text-[9.5px] uppercase font-bold rounded-md transition-all cursor-pointer ${
                      tileStyle === mode.id
                        ? 'bg-white text-black shadow-xs'
                        : 'text-black/60 hover:text-black'
                    }`}
                  >
                    {mode.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Cursor Interaction Physics */}
            <div>
              <div className="text-[10px] text-black/50 uppercase tracking-widest mb-1.5 font-bold flex items-center justify-between">
                <span>CURSOR PHYSICS</span>
                <span className="text-[9px] lowercase opacity-60">dynamics</span>
              </div>
              <div className="grid grid-cols-2 gap-1 bg-black/5 p-1 rounded-lg">
                {(['repel', 'vortex', 'ripple', 'attract'] as PhysicsMode[]).map((m) => (
                  <button
                    key={m}
                    type="button"
                    onClick={() => setPhysicsMode(m)}
                    className={`py-1 text-[10px] uppercase font-bold rounded-md transition-all cursor-pointer ${
                      physicsMode === m
                        ? 'bg-black text-white shadow-xs'
                        : 'text-black/60 hover:text-black'
                    }`}
                  >
                    {m}
                  </button>
                ))}
              </div>
            </div>

            {/* Tile Resolution / Cell Size */}
            <div>
              <div className="flex justify-between text-[10px] text-black/50 uppercase tracking-widest mb-1 font-bold">
                <span>TILE DENSITY</span>
                <span>{tileSize}PX</span>
              </div>
              <div className="grid grid-cols-3 gap-1 bg-black/5 p-1 rounded-lg">
                {[
                  { size: 10, label: 'Fine' },
                  { size: 14, label: 'Medium' },
                  { size: 18, label: 'Bold' },
                ].map((res) => (
                  <button
                    key={res.size}
                    type="button"
                    onClick={() => setTileSize(res.size)}
                    className={`py-1 text-[9.5px] uppercase font-bold rounded-md transition-all cursor-pointer ${
                      tileSize === res.size
                        ? 'bg-white text-black shadow-xs'
                        : 'text-black/60 hover:text-black'
                    }`}
                  >
                    {res.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Repulsion Force Radius */}
            <div>
              <div className="flex justify-between text-[10px] text-black/50 uppercase tracking-widest mb-1 font-bold">
                <span>FORCE FIELD</span>
                <span>{repulsionRadius}PX</span>
              </div>
              <input
                type="range"
                min="60"
                max="240"
                value={repulsionRadius}
                onChange={(e) => setRepulsionRadius(Number(e.target.value))}
                className="w-full accent-black cursor-pointer h-1 bg-black/10 rounded-lg"
              />
            </div>

            {/* Print Grain Slider */}
            <div>
              <div className="flex justify-between text-[10px] text-black/50 uppercase tracking-widest mb-1 font-bold">
                <span>PRINT GRAIN</span>
                <span>{Math.round(grainOpacity * 100)}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="1"
                step="0.05"
                value={grainOpacity}
                onChange={(e) => setGrainOpacity(Number(e.target.value))}
                className="w-full accent-black cursor-pointer h-1 bg-black/10 rounded-lg"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 4. SUBTLE BOTTOM-LEFT STATUS BADGE */}
      <div className="absolute bottom-4 left-4 z-20 pointer-events-none">
        <div className="flex items-center gap-2 bg-white/80 backdrop-blur-xs px-2.5 py-1 rounded-full border border-black/5 text-[9.5px] font-mono text-black/60 font-semibold tracking-wider">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span>{activeTileCount.toLocaleString()} TILES ✦ 60 FPS</span>
        </div>
      </div>
    </div>
  )
}
