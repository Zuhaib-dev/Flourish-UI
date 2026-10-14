'use client'

import React, { useRef, useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export interface StorybookPlayCanvasProps {
  headline?: string
  characterName?: string
  story?: string
  wordmark?: string
  palette?: string[]
  defaultColor?: string
  defaultBrushSize?: number
  onSave?: (dataUrl: string) => void
  className?: string
}

const DEFAULT_PALETTE = ['#a43c45', '#5c70a0', '#6d5367', '#36685d', '#d7c37a']

export function AnimalScene({ className }: { className?: string }) {
  return (
    <svg
      className={`animal-scene ${className || ''}`}
      viewBox="0 0 540 360"
      role="img"
      aria-label="A playful blue donkey beside a small animal house"
    >
      <g stroke="#0f1112" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round">
        <path
          fill="#6077ae"
          d="M160 272c12-37 20-77 16-120l-19-55c-5-15 10-28 20-16l20 34-3-57c-1-15 18-21 23-7l10 51c44-8 87-8 111 5 23 13 19 42-6 49l-79 6-5 77c-1 21 0 35 11 47l-20 12-33-7-29-7z"
        />
        <path fill="#6077ae" d="M186 297l-22 30M221 301l-17 31M188 299l-15 24M217 300l17 23" />
        <path fill="#326353" d="M240 278l-20 38 14 6 15-18 5 22 14-3-8-32 12-20z" />
        <path fill="#f1efe8" d="M260 171c-3 23-20 35-45 39-11 2-14-10-4-14 24-9 38-20 41-33z" />
        <path fill="#f1efe8" d="M278 187c-8 20-12 39-10 60l-18 0c4-22 4-43 0-61z" />
        <circle fill="#111" stroke="none" cx="269" cy="92" r="3" />
        <circle fill="#111" stroke="none" cx="285" cy="92" r="3" />
        <path d="M271 107c11 3 18 2 25-2" fill="none" />
        <path
          fill="#f5f0e8"
          d="M363 143c13-24 29-45 42-45 11 0 18 12 10 22l-20 20 37 9 13 21-31 4-21-17-21 6z"
        />
        <path fill="#f5f0e8" d="M395 130l-7-28M409 132l13-24M378 161l-14 30M411 160l6 31" />
        <circle fill="#f5f0e8" cx="369" cy="91" r="14" />
        <path fill="#f5f0e8" d="M359 80l-2-16 12 10M375 79l8-15 3 20" />
        <circle fill="#111" stroke="none" cx="374" cy="91" r="2.5" />
        <path fill="#f5f0e8" d="M324 220l-15 17 4 22 20 0 8-32z" />
        <path fill="#f5f0e8" d="M317 258l-4 39M333 258l8 39M310 297h14M337 297h11" />
        <path fill="#e7d467" d="M365 196h112v104H365z" />
        <path fill="#f5f0e8" d="M349 194h145v24H349z" />
        <path fill="#466f66" d="M419 159l22 35h-44z" />
        <path fill="#5f739d" d="M399 142h61v18h-61z" />
        <path fill="#f5f0e8" d="M383 229h22v71h-22zM444 229h22v71h-22z" />
        <path fill="#f5f0e8" d="M417 300c0-24 7-37 20-37s20 13 20 37z" />
        <circle fill="#e5c84a" cx="455" cy="134" r="10" />
        <path fill="#e4d05b" d="M350 238h23v20h-23z" />
      </g>
    </svg>
  )
}

export default function StorybookPlayCanvas({
  headline = 'NESSA   HAS   BUILT A\nHOUSE FOR\nTHE ANIMALS',
  characterName = 'Nessa',
  story = 'Nessa is very shy and always hides herself behind her mask. Behind the mask is someone very helpful and kind.',
  wordmark = 'woset',
  palette = DEFAULT_PALETTE,
  defaultColor = '#a43c45',
  defaultBrushSize = 6,
  onSave,
  className = '',
}: StorybookPlayCanvasProps) {
  const [currentColor, setCurrentColor] = useState(defaultColor)
  const [brushSize, setBrushSize] = useState(defaultBrushSize)
  const [isEraser, setIsEraser] = useState(false)
  const [isDrawing, setIsDrawing] = useState(false)
  const [toastMessage, setToastMessage] = useState<string | null>(null)

  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const svgWrapRef = useRef<HTMLDivElement | null>(null)
  const sliderRef = useRef<HTMLDivElement | null>(null)
  const isDraggingSlider = useRef(false)

  // Trigger toast with auto-hide
  const showToast = useCallback((msg: string) => {
    setToastMessage(msg)
    const timer = setTimeout(() => setToastMessage(null), 2500)
    return () => clearTimeout(timer)
  }, [])

  // Canvas resize and DPI sync
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect()
      if (rect.width === 0 || rect.height === 0) return

      // Save drawing
      const tempCanvas = document.createElement('canvas')
      tempCanvas.width = canvas.width
      tempCanvas.height = canvas.height
      const tempCtx = tempCanvas.getContext('2d')
      if (tempCtx) tempCtx.drawImage(canvas, 0, 0)

      const dpr = window.devicePixelRatio || 1
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      ctx.scale(dpr, dpr)

      // Restore drawing
      if (tempCanvas.width > 0 && tempCanvas.height > 0) {
        ctx.drawImage(tempCanvas, 0, 0, rect.width, rect.height)
      }
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)
    return () => window.removeEventListener('resize', resizeCanvas)
  }, [])

  // Drawing event handlers
  const getCoordinates = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current
    if (!canvas) return { x: 0, y: 0 }
    const rect = canvas.getBoundingClientRect()
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    }
  }

  const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    e.currentTarget.setPointerCapture(e.pointerId)
    setIsDrawing(true)
    const { x, y } = getCoordinates(e)

    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    ctx.beginPath()
    ctx.moveTo(x, y)
    ctx.lineCap = 'round'
    ctx.lineJoin = 'round'
    ctx.lineWidth = brushSize

    if (isEraser) {
      ctx.globalCompositeOperation = 'destination-out'
    } else {
      ctx.globalCompositeOperation = 'source-over'
      ctx.strokeStyle = currentColor
    }

    ctx.lineTo(x, y)
    ctx.stroke()
  }

  const handlePointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const { x, y } = getCoordinates(e)
    ctx.lineTo(x, y)
    ctx.stroke()
  }

  const handlePointerUp = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isDrawing) return
    setIsDrawing(false)
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (ctx) ctx.closePath()
  }

  // Clear canvas
  const handleStartOver = () => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    showToast('Canvas cleared')
  }

  // Save artwork (composite SVG art + Canvas drawing)
  const handleSave = async () => {
    const canvas = canvasRef.current
    const svgEl = svgWrapRef.current?.querySelector('svg')
    if (!canvas || !svgEl) return

    const rect = canvas.getBoundingClientRect()
    const exportCanvas = document.createElement('canvas')
    const dpr = 2
    exportCanvas.width = rect.width * dpr
    exportCanvas.height = rect.height * dpr
    const expCtx = exportCanvas.getContext('2d')
    if (!expCtx) return

    expCtx.scale(dpr, dpr)
    // Warm background
    expCtx.fillStyle = '#f2f1ed'
    expCtx.fillRect(0, 0, rect.width, rect.height)

    // Render SVG onto export canvas
    const svgData = new XMLSerializer().serializeToString(svgEl)
    const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' })
    const URL = window.URL || window.webkitURL || window
    const blobURL = URL.createObjectURL(svgBlob)

    const img = new Image()
    img.onload = () => {
      expCtx.drawImage(img, 0, 0, rect.width, rect.height)
      // Draw doodle layer
      expCtx.drawImage(canvas, 0, 0, rect.width, rect.height)
      URL.revokeObjectURL(blobURL)

      const dataUrl = exportCanvas.toDataURL('image/png')
      if (onSave) {
        onSave(dataUrl)
      } else {
        const link = document.createElement('a')
        link.download = `storybook-${characterName.toLowerCase()}-art.png`
        link.href = dataUrl
        link.click()
      }
      showToast('Artwork saved!')
    }
    img.src = blobURL
  }

  // Share
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: `Storybook Play Canvas — ${characterName}`,
          text: `Check out ${characterName}'s play canvas in Flourish UI!`,
          url: window.location.href,
        })
        return
      } catch {
        // Fallback to clipboard
      }
    }
    await navigator.clipboard.writeText(window.location.href)
    showToast('Link copied to clipboard!')
  }

  // Brush slider interaction
  const updateSliderFromPointer = (clientX: number) => {
    const slider = sliderRef.current
    if (!slider) return
    const rect = slider.getBoundingClientRect()
    const percent = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width))
    // Range: 2px to 24px
    const newSize = Math.round(2 + percent * 22)
    setBrushSize(newSize)
  }

  const handleSliderPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    e.currentTarget.setPointerCapture(e.pointerId)
    isDraggingSlider.current = true
    updateSliderFromPointer(e.clientX)
  }

  const handleSliderPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingSlider.current) return
    updateSliderFromPointer(e.clientX)
  }

  const handleSliderPointerUp = () => {
    isDraggingSlider.current = false
  }

  const sliderPercent = ((brushSize - 2) / 22) * 100

  return (
    <main className={`playground ${className}`}>
      {/* Toast notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed top-6 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded-full bg-[#101112] text-[#f2f1ed] text-xs font-medium tracking-wide shadow-xl flex items-center gap-2 pointer-events-none"
          >
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.section
        className="browser-window"
        initial={{ opacity: 0, y: 18, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Browser Chrome Bar */}
        <div className="browser-chrome" aria-hidden="true">
          <i />
          <i />
          <i />
        </div>

        {/* Site Header */}
        <header className="site-header">
          <nav>
            <a href="#shop" className="hover:opacity-75 transition-opacity">
              Shop
            </a>
            <a className="active" href="#play">
              Play
            </a>
          </nav>
          <a className="wordmark font-serif tracking-tight" href="#top">
            {wordmark}
          </a>
          <nav>
            <a href="#cart" className="hover:opacity-75 transition-opacity">
              Cart (0)
            </a>
            <a href="#information" className="hover:opacity-75 transition-opacity">
              Information
            </a>
          </nav>
        </header>

        {/* Interactive Artboard */}
        <div className="artboard" id="play">
          <motion.h1
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            style={{ whiteSpace: 'pre-line' }}
          >
            {headline}
          </motion.h1>

          <motion.div
            ref={svgWrapRef}
            className="scene-wrap relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45, duration: 0.8 }}
          >
            <AnimalScene />

            {/* Drawing Layer Overlay */}
            <canvas
              ref={canvasRef}
              className="absolute inset-0 w-full h-full touch-none z-10 cursor-crosshair"
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerLeave={handlePointerUp}
              aria-label="Interactive drawing canvas. Click and drag to sketch or color."
            />
          </motion.div>
        </div>

        {/* Lore Copy Card */}
        <aside className="profile-copy">
          <h2>{characterName}</h2>
          <p>{story}</p>
          <a href="#play">Back to Play</a>
        </aside>

        {/* Tactile Studio Toolbar */}
        <footer className="toolbar">
          <div className="actions" role="toolbar" aria-label="Drawing actions">
            <button
              type="button"
              onClick={handleStartOver}
              title="Clear drawings"
              className="hover:scale-105 active:scale-95 transition-transform"
            >
              START OVER
            </button>
            <button
              type="button"
              onClick={() => setIsEraser(!isEraser)}
              style={
                isEraser
                  ? { backgroundColor: '#101112', color: '#f2f1ed', borderColor: '#101112' }
                  : {}
              }
              title="Toggle eraser"
              className="hover:scale-105 active:scale-95 transition-all"
            >
              {isEraser ? 'DRAWING' : 'ERASER'}
            </button>
            <button
              type="button"
              onClick={handleSave}
              title="Save artwork to device"
              className="hover:scale-105 active:scale-95 transition-transform"
            >
              SAVE
            </button>
            <button
              type="button"
              onClick={handleShare}
              title="Share artwork"
              className="hover:scale-105 active:scale-95 transition-transform"
            >
              SHARE
            </button>
          </div>

          {/* Color Palette Swatches */}
          <div className="swatches" aria-label="Choose a color">
            {palette.map((color) => {
              const isSelected = currentColor === color && !isEraser
              return (
                <button
                  key={color}
                  type="button"
                  onClick={() => {
                    setCurrentColor(color)
                    setIsEraser(false)
                  }}
                  style={{
                    backgroundColor: color,
                    transform: isSelected ? 'scale(1.22)' : 'scale(1)',
                    boxShadow: isSelected ? '0 0 0 2px #f2f1ed, 0 0 0 3.5px #101112' : 'none',
                  }}
                  aria-label={`Choose color ${color}`}
                  aria-pressed={isSelected}
                  className="transition-transform duration-150"
                />
              )
            })}
          </div>

          {/* Tactile Brush Size Slider */}
          <div
            ref={sliderRef}
            className="slider cursor-ew-resize select-none"
            aria-label={`Brush size: ${brushSize}px`}
            onPointerDown={handleSliderPointerDown}
            onPointerMove={handleSliderPointerMove}
            onPointerUp={handleSliderPointerUp}
          >
            <span
              style={{
                left: `${sliderPercent}%`,
                width: Math.max(7, Math.min(13, brushSize * 0.7)) + 'px',
                height: Math.max(7, Math.min(13, brushSize * 0.7)) + 'px',
                transform: 'translate(-50%, -50%)',
                top: '50%',
                backgroundColor: isEraser ? '#666' : currentColor,
              }}
            />
            <b
              style={{
                left: `${sliderPercent}%`,
                width: Math.max(13, Math.min(19, brushSize * 0.7 + 6)) + 'px',
                height: Math.max(13, Math.min(19, brushSize * 0.7 + 6)) + 'px',
                transform: 'translate(-50%, -50%)',
                top: '50%',
                borderColor: isEraser ? '#666' : currentColor,
              }}
            />
          </div>
        </footer>
      </motion.section>
    </main>
  )
}
