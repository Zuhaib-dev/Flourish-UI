'use client'

import React, { useRef, useEffect, useState, useCallback } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Sparkles, 
  RotateCcw, 
  Wind, 
  Grid, 
  Layers, 
  Maximize2, 
  Sliders, 
  Eye, 
  EyeOff,
  Zap
} from 'lucide-react'

export type TileStyle = 'analog' | 'photo' | 'glass'
export type PhysicsMode = 'repel' | 'vortex' | 'ripple' | 'attract'

export interface PixelTile {
  id: number
  homeX: number
  homeY: number
  x: number
  y: number
  vx: number
  vy: number
  size: number
  color: string
  originalColor: string
  photoSourceX: number
  photoSourceY: number
  isLeaf: boolean
  rotation: number
  targetRotation: number
  scale: number
  targetScale: number
  elevation: number
  targetElevation: number
  phase: number
}

export interface BotanicalPixelDispersionProps {
  flowerImageSrc?: string
  flowerAlt?: string
  initialTileStyle?: TileStyle
  initialPhysicsMode?: PhysicsMode
  className?: string
}

export function BotanicalPixelDispersion({
  flowerImageSrc = '/flower.jpg',
  flowerAlt = 'Botanical Gerbera Daisy — Pixel Dispersion',
  initialTileStyle = 'analog',
  initialPhysicsMode = 'repel',
  className = '',
}: BotanicalPixelDispersionProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationFrameRef = useRef<number | null>(null)
  const baseImageRef = useRef<HTMLImageElement | null>(null)

  // Interactive UI State
  const [tileStyle, setTileStyle] = useState<TileStyle>(initialTileStyle)
  const [physicsMode, setPhysicsMode] = useState<PhysicsMode>(initialPhysicsMode)
  const [repulsionRadius, setRepulsionRadius] = useState<number>(140)
  const [repulsionStrength, setRepulsionStrength] = useState<number>(1.2)
  const [showBaseFlower, setShowBaseFlower] = useState<boolean>(true)
  const [isExploded, setIsExploded] = useState<boolean>(false)
  const [isHovered, setIsHovered] = useState<boolean>(false)
  const [activeTileCount, setActiveTileCount] = useState<number>(0)
  const [showControls, setShowControls] = useState<boolean>(true)

  // Mouse & Touch tracking
  const mouseRef = useRef<{
    x: number
    y: number
    prevX: number
    prevY: number
    vx: number
    vy: number
    isDown: boolean
    isActive: boolean
  }>({
    x: -1000,
    y: -1000,
    prevX: -1000,
    prevY: -1000,
    vx: 0,
    vy: 0,
    isDown: false,
    isActive: false,
  })

  const tilesRef = useRef<PixelTile[]>([])

  // Setup Base Image
  useEffect(() => {
    const img = new window.Image()
    img.src = flowerImageSrc
    img.crossOrigin = 'anonymous'
    img.onload = () => {
      baseImageRef.current = img
      initTiles()
    }
  }, [flowerImageSrc])

  // Initialize the Yuni Yoshida Authentic Mosaic Tiles Grid
  const initTiles = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const width = canvas.width
    const height = canvas.height
    const tileSize = Math.max(16, Math.round(width * 0.038)) // responsive tile size ~22px
    const tiles: PixelTile[] = []
    let idCounter = 0

    // Curated authentic palette sampled directly from the artwork
    const petalPalette = [
      '#ca0169', '#ae0258', '#b5005b', '#c7156c', '#d9267a', 
      '#eb549a', '#f47fae', '#f8a5c2', '#fbc5d8', '#fde2eb',
      '#8f0043', '#a20d52', '#d63384'
    ]

    const leafPalette = [
      '#263c13', '#324d1a', '#3c551e', '#4c6a28', '#5c7a31', 
      '#75943e', '#8fae4e', '#adc965', '#c8df84', '#e2f0b0',
      '#f2f9db', '#566b0e', '#678224'
    ]

    const stemPalette = [
      '#7a9735', '#8ca83d', '#9eb948', '#b5cc62', '#cadb84', '#e3ecc2'
    ]

    // 1. PETAL PIXEL CLOUD (Top-Left of Flower Head) - dissolving outward
    // Center of flower head is around x=0.68, y=0.28
    const petalLeftMinX = Math.round(width * 0.34)
    const petalLeftMaxX = Math.round(width * 0.64)
    const petalLeftMinY = Math.round(height * 0.08)
    const petalLeftMaxY = Math.round(height * 0.36)

    for (let y = petalLeftMinY; y <= petalLeftMaxY; y += tileSize) {
      for (let x = petalLeftMinX; x <= petalLeftMaxX; x += tileSize) {
        // Density curve: denser near flower head (x=0.60), sparser further left (x=0.36)
        const normalizedDist = (x - petalLeftMinX) / (petalLeftMaxX - petalLeftMinX)
        const verticalDist = Math.abs(y - (petalLeftMinY + petalLeftMaxY) / 2) / (petalLeftMaxY - petalLeftMinY)
        const probability = Math.pow(normalizedDist, 1.3) * (1 - verticalDist * 0.6) + 0.12

        if (Math.random() < probability) {
          // Color selection: darker fuchsia near center, pale blush on outer rim
          const colorIdx = Math.min(
            petalPalette.length - 1,
            Math.floor((1 - normalizedDist) * (petalPalette.length - 3) + Math.random() * 3)
          )
          const color = petalPalette[Math.max(0, colorIdx)]

          tiles.push({
            id: idCounter++,
            homeX: x,
            homeY: y,
            x: x + (Math.random() - 0.5) * 4,
            y: y + (Math.random() - 0.5) * 4,
            vx: 0,
            vy: 0,
            size: tileSize,
            color,
            originalColor: color,
            photoSourceX: x,
            photoSourceY: y,
            isLeaf: false,
            rotation: 0,
            targetRotation: 0,
            scale: 1,
            targetScale: 1,
            elevation: 1,
            targetElevation: 1,
            phase: Math.random() * Math.PI * 2,
          })
        }
      }
    }

    // 2. PETAL PIXEL CLUSTER (Right edge of flower head)
    const petalRightMinX = Math.round(width * 0.65)
    const petalRightMaxX = Math.round(width * 0.82)
    const petalRightMinY = Math.round(height * 0.14)
    const petalRightMaxY = Math.round(height * 0.40)

    for (let y = petalRightMinY; y <= petalRightMaxY; y += tileSize) {
      for (let x = petalRightMinX; x <= petalRightMaxX; x += tileSize) {
        const normalizedDist = 1 - (x - petalRightMinX) / (petalRightMaxX - petalRightMinX)
        if (Math.random() < normalizedDist * 0.75 + 0.08) {
          const color = petalPalette[Math.floor(Math.random() * petalPalette.length)]
          tiles.push({
            id: idCounter++,
            homeX: x,
            homeY: y,
            x,
            y,
            vx: 0,
            vy: 0,
            size: tileSize,
            color,
            originalColor: color,
            photoSourceX: x,
            photoSourceY: y,
            isLeaf: false,
            rotation: 0,
            targetRotation: 0,
            scale: 1,
            targetScale: 1,
            elevation: 1,
            targetElevation: 1,
            phase: Math.random() * Math.PI * 2,
          })
        }
      }
    }

    // 3. STEM MOSAIC TILES (Center stem x=0.48 to 0.54, y=0.36 to 0.52)
    const stemMinX = Math.round(width * 0.46)
    const stemMaxX = Math.round(width * 0.56)
    const stemMinY = Math.round(height * 0.36)
    const stemMaxY = Math.round(height * 0.54)

    for (let y = stemMinY; y <= stemMaxY; y += tileSize) {
      for (let x = stemMinX; x <= stemMaxX; x += tileSize) {
        if (Math.random() < 0.6) {
          const color = stemPalette[Math.floor(Math.random() * stemPalette.length)]
          tiles.push({
            id: idCounter++,
            homeX: x,
            homeY: y,
            x,
            y,
            vx: 0,
            vy: 0,
            size: tileSize,
            color,
            originalColor: color,
            photoSourceX: x,
            photoSourceY: y,
            isLeaf: true,
            rotation: 0,
            targetRotation: 0,
            scale: 1,
            targetScale: 1,
            elevation: 1,
            targetElevation: 1,
            phase: Math.random() * Math.PI * 2,
          })
        }
      }
    }

    // 4. LEAF PIXEL CLUSTER (Left Leaf x=0.18 to 0.44, y=0.48 to 0.68)
    const leafLeftMinX = Math.round(width * 0.18)
    const leafLeftMaxX = Math.round(width * 0.42)
    const leafLeftMinY = Math.round(height * 0.48)
    const leafLeftMaxY = Math.round(height * 0.68)

    for (let y = leafLeftMinY; y <= leafLeftMaxY; y += tileSize) {
      for (let x = leafLeftMinX; x <= leafLeftMaxX; x += tileSize) {
        const normalizedDist = (x - leafLeftMinX) / (leafLeftMaxX - leafLeftMinX)
        if (Math.random() < Math.pow(normalizedDist, 1.2) * 0.75 + 0.1) {
          const color = leafPalette[Math.floor(Math.random() * leafPalette.length)]
          tiles.push({
            id: idCounter++,
            homeX: x,
            homeY: y,
            x,
            y,
            vx: 0,
            vy: 0,
            size: tileSize,
            color,
            originalColor: color,
            photoSourceX: x,
            photoSourceY: y,
            isLeaf: true,
            rotation: 0,
            targetRotation: 0,
            scale: 1,
            targetScale: 1,
            elevation: 1,
            targetElevation: 1,
            phase: Math.random() * Math.PI * 2,
          })
        }
      }
    }

    // 5. LEAF PIXEL CLUSTER (Right Leaf x=0.55 to 0.78, y=0.48 to 0.68)
    const leafRightMinX = Math.round(width * 0.54)
    const leafRightMaxX = Math.round(width * 0.76)
    const leafRightMinY = Math.round(height * 0.48)
    const leafRightMaxY = Math.round(height * 0.66)

    for (let y = leafRightMinY; y <= leafRightMaxY; y += tileSize) {
      for (let x = leafRightMinX; x <= leafRightMaxX; x += tileSize) {
        const normalizedDist = 1 - (x - leafRightMinX) / (leafRightMaxX - leafRightMinX)
        if (Math.random() < Math.pow(normalizedDist, 1.1) * 0.72 + 0.1) {
          const color = leafPalette[Math.floor(Math.random() * leafPalette.length)]
          tiles.push({
            id: idCounter++,
            homeX: x,
            homeY: y,
            x,
            y,
            vx: 0,
            vy: 0,
            size: tileSize,
            color,
            originalColor: color,
            photoSourceX: x,
            photoSourceY: y,
            isLeaf: true,
            rotation: 0,
            targetRotation: 0,
            scale: 1,
            targetScale: 1,
            elevation: 1,
            targetElevation: 1,
            phase: Math.random() * Math.PI * 2,
          })
        }
      }
    }

    // 6. Solitary Dispersed Drift Pixels in Negative Space
    const driftPositions = [
      { x: width * 0.36, y: height * 0.33, isLeaf: false },
      { x: width * 0.33, y: height * 0.70, isLeaf: true },
      { x: width * 0.64, y: height * 0.66, isLeaf: true },
      { x: width * 0.76, y: height * 0.38, isLeaf: false },
      { x: width * 0.78, y: height * 0.39, isLeaf: false },
    ]

    driftPositions.forEach((pos) => {
      const color = pos.isLeaf
        ? leafPalette[Math.floor(Math.random() * (leafPalette.length - 2))]
        : petalPalette[Math.floor(Math.random() * (petalPalette.length - 2))]
      tiles.push({
        id: idCounter++,
        homeX: Math.round(pos.x),
        homeY: Math.round(pos.y),
        x: Math.round(pos.x),
        y: Math.round(pos.y),
        vx: 0,
        vy: 0,
        size: tileSize,
        color,
        originalColor: color,
        photoSourceX: Math.round(pos.x),
        photoSourceY: Math.round(pos.y),
        isLeaf: pos.isLeaf,
        rotation: 0,
        targetRotation: 0,
        scale: 1,
        targetScale: 1,
        elevation: 1,
        targetElevation: 1,
        phase: Math.random() * Math.PI * 2,
      })
    })

    tilesRef.current = tiles
    setActiveTileCount(tiles.length)
  }, [])

  // Canvas Resize Handler
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

      const ctx = canvas.getContext('2d')
      if (ctx) {
        ctx.scale(dpr, dpr)
      }

      initTiles()
    }

    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [initTiles])

  // Mouse & Touch Interaction Listeners
  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
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

  // Click / Shockwave Burst Interaction
  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const clickX = e.clientX - rect.left
    const clickY = e.clientY - rect.top

    // Trigger explosive radial shockwave
    const tiles = tilesRef.current
    tiles.forEach((tile) => {
      const dx = tile.x - clickX
      const dy = tile.y - clickY
      const dist = Math.hypot(dx, dy)
      const shockwaveRadius = 240

      if (dist < shockwaveRadius && dist > 0) {
        const force = (1 - dist / shockwaveRadius) * 22
        const angle = Math.atan2(dy, dx)
        tile.vx += Math.cos(angle) * force
        tile.vy += Math.sin(angle) * force
        tile.targetRotation += (Math.random() - 0.5) * 45
        tile.targetScale = 1.35
        tile.targetElevation = 18
      }
    })
  }

  // Explode All / Reassemble Physics
  const toggleExplode = () => {
    const tiles = tilesRef.current
    if (!isExploded) {
      // Scatter tiles dramatically across canvas
      tiles.forEach((tile) => {
        tile.vx = (Math.random() - 0.5) * 35
        tile.vy = (Math.random() - 0.5) * 35
        tile.targetRotation = (Math.random() - 0.5) * 180
        tile.targetScale = 0.8 + Math.random() * 0.6
        tile.targetElevation = 12 + Math.random() * 10
      })
      setIsExploded(true)
    } else {
      // Snap tiles back home with spring force
      tiles.forEach((tile) => {
        tile.targetRotation = 0
        tile.targetScale = 1
        tile.targetElevation = 1
      })
      setIsExploded(false)
    }
  }

  // Real-time Physics & Rendering Loop (60 FPS)
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

      ctx.clearRect(0, 0, width, height)
      animationTime += 0.025

      const mouse = mouseRef.current
      const tiles = tilesRef.current

      // Physics loop for each mosaic tile
      tiles.forEach((tile) => {
        // 1. Mouse Interaction Physics
        if (mouse.isActive) {
          const dx = tile.x - mouse.x
          const dy = tile.y - mouse.y
          const dist = Math.hypot(dx, dy)

          if (dist < repulsionRadius && dist > 0) {
            const normalizedDist = 1 - dist / repulsionRadius

            if (physicsMode === 'repel') {
              const force = normalizedDist * repulsionStrength * 6
              const angle = Math.atan2(dy, dx)
              tile.vx += Math.cos(angle) * force
              tile.vy += Math.sin(angle) * force
              tile.targetScale = 1 + normalizedDist * 0.28
              tile.targetElevation = 1 + normalizedDist * 14
              tile.targetRotation = (dx / repulsionRadius) * 12
            } else if (physicsMode === 'vortex') {
              // Swirl tiles in dynamic orbital vortex
              const force = normalizedDist * repulsionStrength * 5
              const angle = Math.atan2(dy, dx) + Math.PI / 2
              tile.vx += Math.cos(angle) * force
              tile.vy += Math.sin(angle) * force
              tile.targetScale = 1 + normalizedDist * 0.25
              tile.targetElevation = 1 + normalizedDist * 12
              tile.targetRotation += normalizedDist * 4
            } else if (physicsMode === 'ripple') {
              // Wave ripple undulation
              const wave = Math.sin(dist * 0.08 - animationTime * 4) * normalizedDist * 4
              tile.vy += wave * 0.8
              tile.targetScale = 1 + Math.abs(wave) * 0.15
              tile.targetElevation = 1 + Math.abs(wave) * 6
            } else if (physicsMode === 'attract') {
              // Magnetic suction toward cursor
              const force = normalizedDist * repulsionStrength * 4
              const angle = Math.atan2(dy, dx)
              tile.vx -= Math.cos(angle) * force
              tile.vy -= Math.sin(angle) * force
              tile.targetScale = 1 + normalizedDist * 0.2
              tile.targetElevation = 1 + normalizedDist * 10
            }
          }
        }

        // 2. Spring Force returning tile to its original home position
        const springStiffness = isExploded ? 0.003 : 0.075
        const damping = 0.82

        const fx = (tile.homeX - tile.x) * springStiffness
        const fy = (tile.homeY - tile.y) * springStiffness

        tile.vx = (tile.vx + fx) * damping
        tile.vy = (tile.vy + fy) * damping

        tile.x += tile.vx
        tile.y += tile.vy

        // Ambient organic micro-breathing when not repelled
        const ambientFloat = Math.sin(animationTime * 1.5 + tile.phase) * 0.35
        const currentY = tile.y + ambientFloat

        // Smooth interpolation of scale, rotation, elevation
        tile.scale += (tile.targetScale - tile.scale) * 0.1
        tile.rotation += (tile.targetRotation - tile.rotation) * 0.1
        tile.elevation += (tile.targetElevation - tile.elevation) * 0.1

        if (!mouse.isActive || Math.hypot(tile.x - mouse.x, tile.y - mouse.y) >= repulsionRadius) {
          tile.targetScale = 1
          tile.targetRotation = 0
          tile.targetElevation = 1
        }

        // 3. Render the Tile with Tactile Physical Materials
        ctx.save()
        ctx.translate(tile.x + tile.size / 2, currentY + tile.size / 2)
        ctx.rotate((tile.rotation * Math.PI) / 180)
        ctx.scale(tile.scale, tile.scale)

        const halfSize = tile.size / 2

        // Physical cast shadow on canvas paper
        if (tile.elevation > 1.2) {
          ctx.shadowColor = 'rgba(0, 0, 0, 0.18)'
          ctx.shadowBlur = tile.elevation * 1.2
          ctx.shadowOffsetY = tile.elevation * 0.75
          ctx.shadowOffsetX = (tile.x - width / 2) * 0.02
        } else {
          ctx.shadowColor = 'rgba(0, 0, 0, 0.08)'
          ctx.shadowBlur = 3
          ctx.shadowOffsetY = 1.5
          ctx.shadowOffsetX = 0
        }

        if (tileStyle === 'analog') {
          // Authentic Yuni Yoshida Analog Cut Paper Tile
          ctx.fillStyle = tile.color
          ctx.fillRect(-halfSize, -halfSize, tile.size, tile.size)

          // Subtle physical paper border bevel
          ctx.shadowColor = 'transparent'
          ctx.lineWidth = 0.75
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.35)'
          ctx.strokeRect(-halfSize, -halfSize, tile.size, tile.size)

          // Soft bottom-right paper edge shadow
          ctx.fillStyle = 'rgba(0, 0, 0, 0.04)'
          ctx.fillRect(-halfSize, halfSize - 1, tile.size, 1)
          ctx.fillRect(halfSize - 1, -halfSize, 1, tile.size)
        } else if (tileStyle === 'glass') {
          // Prismatic Frosted Glass Tile
          ctx.fillStyle = tile.color
          ctx.globalAlpha = 0.85
          ctx.fillRect(-halfSize, -halfSize, tile.size, tile.size)

          // Luminous specular highlight
          ctx.globalAlpha = 1
          ctx.lineWidth = 1.2
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.75)'
          ctx.strokeRect(-halfSize, -halfSize, tile.size, tile.size)

          // Prismatic light beam
          const grad = ctx.createLinearGradient(-halfSize, -halfSize, halfSize, halfSize)
          grad.addColorStop(0, 'rgba(255, 255, 255, 0.4)')
          grad.addColorStop(0.5, 'transparent')
          grad.addColorStop(1, 'rgba(255, 255, 255, 0.1)')
          ctx.fillStyle = grad
          ctx.fillRect(-halfSize, -halfSize, tile.size, tile.size)
        } else if (tileStyle === 'photo') {
          // Photographic Slices from Base Flower
          if (baseImageRef.current) {
            ctx.drawImage(
              baseImageRef.current,
              tile.photoSourceX * (baseImageRef.current.width / width),
              tile.photoSourceY * (baseImageRef.current.height / height),
              tile.size * 1.5,
              tile.size * 1.5,
              -halfSize,
              -halfSize,
              tile.size,
              tile.size
            )
            // Delicate tile boundary
            ctx.lineWidth = 0.8
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)'
            ctx.strokeRect(-halfSize, -halfSize, tile.size, tile.size)
          } else {
            ctx.fillStyle = tile.color
            ctx.fillRect(-halfSize, -halfSize, tile.size, tile.size)
          }
        }

        ctx.restore()
      })

      animationFrameRef.current = requestAnimationFrame(render)
    }

    animationFrameRef.current = requestAnimationFrame(render)
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [physicsMode, repulsionRadius, repulsionStrength, tileStyle, isExploded])

  return (
    <div
      ref={containerRef}
      className={`relative w-full max-w-[560px] aspect-[3/4] bg-white rounded-xs gallery-canvas-shadow border border-black/5 overflow-hidden select-none cursor-crosshair ${className}`}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      onPointerDown={handlePointerDown}
    >
      {/* 1. BASE BIOLOGICAL FLOWER (High-Definition Botanical Layer) */}
      <div
        className={`absolute inset-0 transition-opacity duration-500 pointer-events-none ${
          showBaseFlower ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <Image
          src={flowerImageSrc}
          alt={flowerAlt}
          fill
          className="object-contain p-2"
          priority
        />
      </div>

      {/* 2. DYNAMIC MOSAIC PIXEL PARTICLES CANVAS */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-10"
      />

      {/* 3. MINIMALIST FLOATING GALLERY CONTROLS TRAY (Glassmorphic) */}
      <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
        <button
          type="button"
          onClick={() => setShowControls(!showControls)}
          className="p-2 rounded-full bg-white/80 hover:bg-white text-black/70 hover:text-black backdrop-blur-md border border-black/10 shadow-xs transition-all cursor-pointer"
          title="Toggle Controls"
          aria-label="Toggle Controls"
        >
          <Sliders className="w-3.5 h-3.5" />
        </button>

        <button
          type="button"
          onClick={toggleExplode}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full backdrop-blur-md border border-black/10 text-[11px] font-mono font-bold tracking-wider uppercase transition-all shadow-xs cursor-pointer ${
            isExploded
              ? 'bg-rose-500 text-white border-rose-600'
              : 'bg-white/85 text-black hover:bg-white'
          }`}
          title={isExploded ? 'Reassemble Mosaic' : 'Scatter Mosaic'}
        >
          <Zap className="w-3 h-3" />
          <span>{isExploded ? 'REASSEMBLE' : 'SCATTER'}</span>
        </button>
      </div>

      {/* 4. EXPANDABLE CONTROL TRAY */}
      <AnimatePresence>
        {showControls && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-14 right-4 z-20 w-56 bg-white/90 backdrop-blur-md p-3.5 rounded-xl border border-black/10 shadow-lg text-black text-xs font-mono space-y-3"
          >
            {/* Tile Material */}
            <div>
              <div className="text-[10px] text-black/50 uppercase tracking-widest mb-1.5 font-bold">
                TILE MATERIAL
              </div>
              <div className="grid grid-cols-3 gap-1 bg-black/5 p-1 rounded-lg">
                {(['analog', 'photo', 'glass'] as TileStyle[]).map((mode) => (
                  <button
                    key={mode}
                    type="button"
                    onClick={() => setTileStyle(mode)}
                    className={`py-1 text-[10px] uppercase font-bold rounded-md transition-all cursor-pointer ${
                      tileStyle === mode
                        ? 'bg-white text-black shadow-xs'
                        : 'text-black/60 hover:text-black'
                    }`}
                  >
                    {mode}
                  </button>
                ))}
              </div>
            </div>

            {/* Cursor Interaction Physics */}
            <div>
              <div className="text-[10px] text-black/50 uppercase tracking-widest mb-1.5 font-bold">
                CURSOR PHYSICS
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

            {/* Repulsion Radius Slider */}
            <div>
              <div className="flex justify-between text-[10px] text-black/50 uppercase tracking-widest mb-1 font-bold">
                <span>FORCE FIELD</span>
                <span>{repulsionRadius}px</span>
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

            {/* Toggle Base Layer */}
            <div className="flex items-center justify-between pt-1 border-t border-black/10">
              <span className="text-[10px] text-black/60 font-bold uppercase tracking-wider">
                BASE FLOWER
              </span>
              <button
                type="button"
                onClick={() => setShowBaseFlower(!showBaseFlower)}
                className="p-1 rounded-md hover:bg-black/5 transition-colors cursor-pointer text-black/80"
                title={showBaseFlower ? 'Hide Base Layer' : 'Show Base Layer'}
              >
                {showBaseFlower ? <Eye className="w-3.5 h-3.5" /> : <EyeOff className="w-3.5 h-3.5" />}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 5. SUBTLE BOTTOM-LEFT STATUS BADGE */}
      <div className="absolute bottom-4 left-4 z-20 pointer-events-none">
        <div className="flex items-center gap-2 bg-white/75 backdrop-blur-xs px-2.5 py-1 rounded-full border border-black/5 text-[9.5px] font-mono text-black/60 font-semibold tracking-wider">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span>{activeTileCount} TILES ✦ 60 FPS</span>
        </div>
      </div>
    </div>
  )
}
