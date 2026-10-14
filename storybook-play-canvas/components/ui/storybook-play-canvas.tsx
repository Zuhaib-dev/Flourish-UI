'use client'

import React, { useRef, useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export interface StorybookPlayCanvasProps {
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

export function WosetWordmark() {
  return (
    <span
      className="text-[22px] tracking-[-1.5px] text-[#121314] select-none font-serif inline-block transform scale-x-[0.92]"
      style={{ fontFamily: "'Georgia', 'Times New Roman', serif" }}
    >
      woset
    </span>
  )
}

export default function StorybookPlayCanvas({
  characterName = 'Nessa',
  story = 'Nessa is very shy and always hides herself\nbehind her mask. Behind the mask is\nsomeone very helpful and kind.',
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
  const [zoom, setZoom] = useState(1)
  const [toastMessage, setToastMessage] = useState<string | null>(null)

  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const containerRef = useRef<HTMLDivElement | null>(null)
  const imgRef = useRef<HTMLImageElement | null>(null)
  const sliderRef = useRef<HTMLDivElement | null>(null)
  const isDraggingSlider = useRef(false)

  // Auto-dismiss toast
  const showToast = useCallback((msg: string) => {
    setToastMessage(msg)
    const timer = setTimeout(() => setToastMessage(null), 2200)
    return () => clearTimeout(timer)
  }, [])

  // Sync canvas DPI & resolution with image
  const syncCanvasDPI = useCallback(() => {
    const canvas = canvasRef.current
    const img = imgRef.current
    if (!canvas || !img) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const rect = img.getBoundingClientRect()
    if (rect.width === 0 || rect.height === 0) return

    // Preserve existing doodle strokes across resizing
    const tempCanvas = document.createElement('canvas')
    tempCanvas.width = canvas.width
    tempCanvas.height = canvas.height
    const tempCtx = tempCanvas.getContext('2d')
    if (tempCtx && canvas.width > 0 && canvas.height > 0) {
      tempCtx.drawImage(canvas, 0, 0)
    }

    const dpr = window.devicePixelRatio || 1
    canvas.width = Math.round(rect.width * dpr)
    canvas.height = Math.round(rect.height * dpr)
    ctx.scale(dpr, dpr)

    if (tempCanvas.width > 0 && tempCanvas.height > 0) {
      ctx.drawImage(tempCanvas, 0, 0, rect.width, rect.height)
    }
  }, [])

  useEffect(() => {
    syncCanvasDPI()
    window.addEventListener('resize', syncCanvasDPI)
    return () => window.removeEventListener('resize', syncCanvasDPI)
  }, [syncCanvasDPI])

  // Get pointer coordinates mapped to canvas internal scale
  const getCoordinates = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current
    if (!canvas) return { x: 0, y: 0 }
    const rect = canvas.getBoundingClientRect()
    return {
      x: (e.clientX - rect.left),
      y: (e.clientY - rect.top),
    }
  }

  const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    e.currentTarget.setPointerCapture(e.pointerId)
    setIsDrawing(true)

    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const { x, y } = getCoordinates(e)
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

  // START OVER: Clears drawing layer and resets zoom
  const handleStartOver = () => {
    const canvas = canvasRef.current
    if (canvas) {
      const ctx = canvas.getContext('2d')
      if (ctx) ctx.clearRect(0, 0, canvas.width, canvas.height)
    }
    setZoom(1)
    setIsEraser(false)
    showToast('Canvas cleared')
  }

  // SAVE: Export composite (Authentic Scene + User's Custom Drawing)
  const handleSave = () => {
    const img = imgRef.current
    const canvas = canvasRef.current
    if (!img || !canvas) return

    const exportCanvas = document.createElement('canvas')
    const dpr = 2
    exportCanvas.width = img.naturalWidth * dpr
    exportCanvas.height = img.naturalHeight * dpr
    const expCtx = exportCanvas.getContext('2d')
    if (!expCtx) return

    expCtx.scale(dpr, dpr)
    // Draw base authentic artwork
    expCtx.drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight)
    // Overlay user's drawing
    expCtx.drawImage(canvas, 0, 0, img.naturalWidth, img.naturalHeight)

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

  // SHARE
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
        // Fallback
      }
    }
    await navigator.clipboard.writeText(window.location.href)
    showToast('Link copied to clipboard!')
  }

  // Brush Slider Pointer Drag
  const updateSlider = (clientX: number) => {
    const slider = sliderRef.current
    if (!slider) return
    const rect = slider.getBoundingClientRect()
    const percent = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width))
    const newSize = Math.round(2 + percent * 22)
    setBrushSize(newSize)
  }

  const handleSliderDown = (e: React.PointerEvent<HTMLDivElement>) => {
    e.currentTarget.setPointerCapture(e.pointerId)
    isDraggingSlider.current = true
    updateSlider(e.clientX)
  }

  const handleSliderMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDraggingSlider.current) return
    updateSlider(e.clientX)
  }

  const handleSliderUp = () => {
    isDraggingSlider.current = false
  }

  const sliderPercent = ((brushSize - 2) / 22) * 100

  // Zoom handlers
  const handleZoomIn = () => setZoom((z) => Math.min(2.2, Math.round((z + 0.15) * 100) / 100))
  const handleZoomOut = () => setZoom((z) => Math.max(0.65, Math.round((z - 0.15) * 100) / 100))
  const handleZoomReset = () => setZoom(1)

  return (
    <main className={`min-h-screen bg-[#d5d2cd] text-[#121314] flex items-center justify-center p-3 sm:p-8 font-sans ${className}`}>
      {/* Toast Alert */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: -16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.95 }}
            className="fixed top-6 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded-full bg-[#121314] text-[#f2f1ed] text-xs font-medium tracking-wide shadow-2xl flex items-center gap-2 pointer-events-none"
          >
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Browser Window Card matching the Preview */}
      <motion.section
        className="w-full max-w-[960px] bg-[#eae9e5] rounded-[6px] shadow-[0_10px_30px_rgba(45,40,35,0.08)] overflow-hidden flex flex-col relative"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Top Browser Chrome Bar */}
        <div className="h-[22px] bg-[#dedbd3] px-3 flex items-center">
          <div className="flex gap-[4.5px]" aria-hidden="true">
            <span className="w-[5.5px] h-[5.5px] rounded-full bg-[#b8b4ab]" />
            <span className="w-[5.5px] h-[5.5px] rounded-full bg-[#b8b4ab]" />
            <span className="w-[5.5px] h-[5.5px] rounded-full bg-[#b8b4ab]" />
          </div>
        </div>

        {/* Site Header Navigation */}
        <header className="h-[44px] px-5 sm:px-7 grid grid-cols-3 items-center text-[11px] text-[#121314]">
          <nav className="flex items-center gap-3">
            <a href="#shop" className="hover:opacity-75 transition-opacity">
              Shop
            </a>
            <a href="#play" className="underline underline-offset-4 decoration-1">
              Play
            </a>
          </nav>

          <div className="flex justify-center items-center">
            <WosetWordmark />
          </div>

          <nav className="flex items-center justify-end gap-3 sm:gap-4 text-right">
            <a href="#cart" className="hover:opacity-75 transition-opacity">
              Cart (0)
            </a>
            <a href="#information" className="hover:opacity-75 transition-opacity">
              Information
            </a>
          </nav>
        </header>

        {/* Artboard Workspace Container */}
        <div
          ref={containerRef}
          id="play"
          className="relative min-h-[440px] sm:min-h-[500px] flex flex-col items-center justify-start pt-2 sm:pt-4 px-4 sm:px-8 pb-24 overflow-hidden"
        >
          {/* Zoom controls floating in top-right */}
          <div className="absolute top-3 right-4 sm:right-6 z-20 flex items-center bg-[#dedbd3]/75 backdrop-blur-sm border border-[#ccc7bc] rounded-full px-2 py-0.5 text-[9.5px] gap-1.5 select-none shadow-sm">
            <button
              type="button"
              onClick={handleZoomOut}
              className="hover:bg-[#ccc7bc] w-4 h-4 rounded-full flex items-center justify-center font-bold text-[#121314] transition-colors"
              title="Zoom out"
            >
              −
            </button>
            <button
              type="button"
              onClick={handleZoomReset}
              className="font-medium text-[#444] px-1 hover:text-black transition-colors"
              title="Reset zoom"
            >
              {Math.round(zoom * 100)}%
            </button>
            <button
              type="button"
              onClick={handleZoomIn}
              className="hover:bg-[#ccc7bc] w-4 h-4 rounded-full flex items-center justify-center font-bold text-[#121314] transition-colors"
              title="Zoom in"
            >
              +
            </button>
          </div>

          {/* Scalable Illustration Artboard with Interactive Doodling */}
          <motion.div
            className="relative flex flex-col items-center origin-top transition-transform duration-150 select-none"
            style={{ transform: `scale(${zoom})` }}
          >
            {/* The Authentic Illustrated Scene matching the preview pixel-for-pixel */}
            <div className="relative max-w-[490px] w-full">
              <img
                ref={imgRef}
                src="/nessa-scene-exact.png"
                alt="Nessa has built a house for the animals"
                onLoad={syncCanvasDPI}
                className="w-full h-auto block select-none pointer-events-none"
                draggable={false}
              />

              {/* Interactive Transparent Canvas Layer for Hand Doodling & Coloring */}
              <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full touch-none z-10 cursor-crosshair"
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
                onPointerLeave={handlePointerUp}
                aria-label="Interactive drawing canvas. Click and drag to sketch or color."
              />
            </div>
          </motion.div>

          {/* Lore Copy Card (Bottom-Left) */}
          <aside className="absolute left-5 sm:left-7 bottom-5 sm:bottom-6 z-20 max-w-[210px] select-none">
            <h2 className="text-[17px] sm:text-[18px] font-medium tracking-tight text-[#121314] mb-1">
              {characterName}
            </h2>
            <p className="text-[9.5px] sm:text-[10px] leading-[1.38] text-[#2c2e30] whitespace-pre-line mb-2">
              {story}
            </p>
            <a
              href="#play"
              className="text-[9.5px] sm:text-[10px] underline underline-offset-2 hover:opacity-75 transition-opacity"
            >
              Back to Play
            </a>
          </aside>

          {/* Tactile Studio Toolbar (Bottom-Right) */}
          <footer className="absolute right-5 sm:right-7 bottom-5 sm:bottom-6 z-20 flex flex-wrap items-center justify-end gap-3 sm:gap-6 select-none">
            {/* Action Buttons */}
            <div className="flex items-center gap-[6px]" role="toolbar" aria-label="Canvas actions">
              <button
                type="button"
                onClick={handleStartOver}
                title="Clear drawings"
                className="h-[20px] px-3.5 rounded-full border border-[#76736c] text-[8px] sm:text-[8.5px] font-medium tracking-wide uppercase hover:bg-[#dedbd3] active:scale-95 transition-all text-[#121314]"
              >
                START OVER
              </button>
              <button
                type="button"
                onClick={() => setIsEraser(!isEraser)}
                title="Toggle eraser mode"
                style={
                  isEraser
                    ? { backgroundColor: '#121314', color: '#eae9e5', borderColor: '#121314' }
                    : {}
                }
                className="h-[20px] px-3.5 rounded-full border border-[#76736c] text-[8px] sm:text-[8.5px] font-medium tracking-wide uppercase hover:bg-[#dedbd3] active:scale-95 transition-all text-[#121314]"
              >
                {isEraser ? 'DRAWING' : 'ERASER'}
              </button>
              <button
                type="button"
                onClick={handleSave}
                title="Export artwork as PNG"
                className="h-[20px] px-3.5 rounded-full border border-[#76736c] text-[8px] sm:text-[8.5px] font-medium tracking-wide uppercase hover:bg-[#dedbd3] active:scale-95 transition-all text-[#121314]"
              >
                SAVE
              </button>
              <button
                type="button"
                onClick={handleShare}
                title="Share link"
                className="h-[20px] px-3.5 rounded-full border border-[#76736c] text-[8px] sm:text-[8.5px] font-medium tracking-wide uppercase hover:bg-[#dedbd3] active:scale-95 transition-all text-[#121314]"
              >
                SHARE
              </button>
            </div>

            {/* Color Palette Swatches */}
            <div className="flex items-center gap-[6.5px]" aria-label="Palette swatches">
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
                      boxShadow: isSelected ? '0 0 0 2px #eae9e5, 0 0 0 3.5px #121314' : 'none',
                    }}
                    aria-label={`Select color ${color}`}
                    aria-pressed={isSelected}
                    className="w-[17px] h-[17px] rounded-full border-0 cursor-pointer hover:scale-110 active:scale-95 transition-transform"
                  />
                )
              })}
            </div>

            {/* Brush Size Slider */}
            <div
              ref={sliderRef}
              className="relative w-[65px] sm:w-[72px] h-[18px] flex items-center cursor-ew-resize select-none"
              aria-label={`Brush size: ${brushSize}px`}
              onPointerDown={handleSliderDown}
              onPointerMove={handleSliderMove}
              onPointerUp={handleSliderUp}
            >
              {/* Horizontal line */}
              <div className="w-full h-[1px] bg-[#121314]" />
              {/* Slider thumb */}
              <span
                className="absolute rounded-full"
                style={{
                  left: `${sliderPercent}%`,
                  width: `${Math.max(6, Math.min(10, brushSize * 0.65))}px`,
                  height: `${Math.max(6, Math.min(10, brushSize * 0.65))}px`,
                  transform: 'translate(-50%, 0)',
                  backgroundColor: isEraser ? '#666' : currentColor,
                }}
              />
              <b
                className="absolute rounded-full border border-[#121314]"
                style={{
                  left: `${sliderPercent}%`,
                  width: `${Math.max(12, Math.min(17, brushSize * 0.65 + 6))}px`,
                  height: `${Math.max(12, Math.min(17, brushSize * 0.65 + 6))}px`,
                  transform: 'translate(-50%, 0)',
                  borderColor: isEraser ? '#666' : currentColor,
                }}
              />
            </div>
          </footer>
        </div>
      </motion.section>
    </main>
  )
}
