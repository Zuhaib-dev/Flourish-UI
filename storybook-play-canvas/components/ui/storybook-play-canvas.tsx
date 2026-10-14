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

const INITIAL_COLORS: Record<string, string> = {
  nessaHead: '#6275a5',
  nessaEarLeft: '#556999',
  nessaEarRight: '#6275a5',
  nessaBody: '#6275a5',
  nessaArm: '#f0ede6',
  nessaHand: '#f0ede6',
  nessaPants: '#ffffff',
  nessaShoeLeft: '#ffffff',
  nessaShoeRight: '#326353',
  dogBody: '#ffffff',
  catBody: '#ffffff',
  sheepBody: '#ffffff',
  topSphere: '#d7c37a',
  invertedTriangle: '#36685d',
  roofBlock: '#5c70a0',
  midBlockLeft: '#f0ede6',
  midBlockRight: '#5c70a0',
  leftPillar: '#d7c37a',
  rightPillar: '#d7c37a',
  bottomArch: '#f0ede6',
}

export function WosetWordmark() {
  return (
    <svg width="68" height="26" viewBox="0 0 68 26" fill="none" className="inline-block">
      <text
        x="50%"
        y="19"
        textAnchor="middle"
        fontFamily="'Brush Script MT', 'Snell Roundhand', 'Caveat', cursive, serif"
        fontSize="23"
        fontStyle="italic"
        letterSpacing="0.05em"
        fill="#141517"
      >
        woset
      </text>
    </svg>
  )
}

export function HandDrawnHeadline() {
  return (
    <div className="select-none text-center font-bold tracking-wider leading-[1.3] text-[#141517]">
      <div className="text-[20px] sm:text-[23px] tracking-[0.16em] uppercase flex justify-center items-baseline gap-4 sm:gap-6">
        <span>NE<span className="text-[0.9em] lowercase">s</span><span className="text-[0.9em] lowercase">s</span>a</span>
        <span>HAS</span>
        <span>B<span className="text-[0.9em] lowercase">u</span>iLT A</span>
      </div>
      <div className="text-[19px] sm:text-[22px] tracking-[0.18em] uppercase flex justify-center items-baseline pl-8 sm:pl-16">
        <span>HOUSE FOR</span>
      </div>
      <div className="text-[19px] sm:text-[22px] tracking-[0.18em] uppercase flex justify-center items-baseline pl-16 sm:pl-28">
        <span>THE AniMALS</span>
      </div>
    </div>
  )
}

interface AnimalSceneProps {
  colors: Record<string, string>
  onPartClick: (partKey: string) => void
  activeColor: string
}

export function AnimalScene({ colors, onPartClick, activeColor }: AnimalSceneProps) {
  return (
    <svg
      viewBox="0 0 680 440"
      className="w-full h-auto select-none"
      role="img"
      aria-label="Nessa the blue donkey building an animal house"
    >
      <g
        stroke="#0e1011"
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="transition-colors duration-150"
      >
        {/* ===================== NESSA (THE BLUE DONKEY) ===================== */}
        <g id="nessa" className="cursor-pointer group">
          {/* Back Ear */}
          <path
            d="M232 178 C226 150 220 120 236 100 C247 86 256 94 256 114 C256 138 250 166 248 184 Z"
            fill={colors.nessaEarLeft}
            onClick={() => onPartClick('nessaEarLeft')}
            className="hover:opacity-85 transition-opacity"
          />

          {/* Front Ear */}
          <path
            d="M246 178 C242 145 240 110 258 88 C269 74 278 82 278 104 C278 132 270 162 266 182 Z"
            fill={colors.nessaEarRight}
            onClick={() => onPartClick('nessaEarRight')}
            className="hover:opacity-85 transition-opacity"
          />

          {/* Head & Long Snout */}
          <path
            d="M246 182 C255 180 270 178 300 178 C332 178 350 180 354 196 C357 208 354 220 342 226 C326 234 290 234 264 238 L256 268 C246 268 238 262 236 248 L240 188 Z"
            fill={colors.nessaHead}
            onClick={() => onPartClick('nessaHead')}
            className="hover:opacity-85 transition-opacity"
          />

          {/* Nostrils */}
          <path d="M332 198 L340 198" stroke="#0e1011" strokeWidth="2.8" fill="none" />
          <path d="M332 206 L340 206" stroke="#0e1011" strokeWidth="2.8" fill="none" />

          {/* Eyes */}
          <circle cx="272" cy="192" r="3" fill="#0e1011" stroke="none" />
          <circle cx="288" cy="190" r="3" fill="#0e1011" stroke="none" />

          {/* Body (Blue Smock) */}
          <path
            d="M236 246 C232 268 226 312 214 346 C210 356 220 366 234 366 L284 362 C294 362 298 352 298 340 L288 248 Z"
            fill={colors.nessaBody}
            onClick={() => onPartClick('nessaBody')}
            className="hover:opacity-85 transition-opacity"
          />

          {/* Right Arm & Sleeve */}
          <path
            d="M240 262 L224 316 C222 322 228 328 234 326 L250 320"
            fill={colors.nessaArm}
            stroke="#0e1011"
            strokeWidth="3.2"
          />

          {/* Left Extended Arm reaching towards the dog */}
          <path
            d="M276 264 C288 274 304 286 322 290 C328 292 334 288 332 282 C328 274 314 266 296 254"
            fill={colors.nessaArm}
            onClick={() => onPartClick('nessaArm')}
            className="hover:opacity-85 transition-opacity"
          />
          {/* Hand cuff / fingers */}
          <circle cx="328" cy="286" r="6" fill={colors.nessaHand} stroke="#0e1011" strokeWidth="2.8" />

          {/* Trousers / Legs sitting on ground */}
          <path
            d="M246 362 L274 384 C280 388 290 388 298 382 L326 358 L304 346 L276 364 Z"
            fill={colors.nessaPants}
            onClick={() => onPartClick('nessaPants')}
            className="hover:opacity-85 transition-opacity"
          />

          {/* Left Foot with 3 toes */}
          <path
            d="M208 376 C214 384 218 392 216 398 C214 402 204 404 196 400 C188 396 188 388 196 380 Z"
            fill={colors.nessaShoeLeft}
            onClick={() => onPartClick('nessaShoeLeft')}
          />
          <path d="M200 398 C202 390 206 384 210 380" stroke="#0e1011" strokeWidth="2.6" fill="none" />
          <path d="M206 400 C208 392 212 386 214 382" stroke="#0e1011" strokeWidth="2.6" fill="none" />

          {/* Right Shoe (Teal / Green Boot) */}
          <path
            d="M304 366 L290 392 C286 398 292 406 298 406 L318 400 C326 398 332 388 330 380 L324 360 Z"
            fill={colors.nessaShoeRight}
            onClick={() => onPartClick('nessaShoeRight')}
            className="hover:opacity-85 transition-opacity"
          />
          {/* Shoe sole */}
          <path d="M288 400 L320 394" stroke="#0e1011" strokeWidth="4.2" fill="none" />
        </g>

        {/* ===================== THE DOG (CENTER) ===================== */}
        <g id="dog" className="cursor-pointer group" onClick={() => onPartClick('dogBody')}>
          {/* Tail */}
          <path d="M304 336 C302 322 308 310 314 306" stroke="#0e1011" strokeWidth="3" fill="none" />

          {/* Body */}
          <path
            d="M312 334 C314 326 322 322 336 322 C348 322 354 328 358 334 L360 354 C360 360 354 364 346 364 L324 364 C316 364 312 358 312 350 Z"
            fill={colors.dogBody}
            className="group-hover:opacity-85 transition-opacity"
          />

          {/* Head & Snout */}
          <path
            d="M348 324 L368 318 C376 316 380 324 374 328 L360 336 Z"
            fill={colors.dogBody}
          />
          {/* Dog Ears */}
          <path d="M352 320 L350 304 L360 316 Z" fill={colors.dogBody} stroke="#0e1011" strokeWidth="2.8" />
          <path d="M358 318 L366 308 L366 320 Z" fill={colors.dogBody} stroke="#0e1011" strokeWidth="2.8" />
          {/* Dog Eye */}
          <circle cx="362" cy="322" r="2.2" fill="#0e1011" stroke="none" />
          {/* Dog Mouth line */}
          <path d="M366 326 L374 324" stroke="#0e1011" strokeWidth="2" fill="none" />

          {/* Legs */}
          <path d="M320 362 L320 380" stroke="#0e1011" strokeWidth="3" />
          <path d="M328 362 L328 380" stroke="#0e1011" strokeWidth="3" />
          <path d="M346 362 L346 380" stroke="#0e1011" strokeWidth="3" />
          <path d="M354 362 L354 380" stroke="#0e1011" strokeWidth="3" />
        </g>

        {/* ===================== THE CAT / FOX (BELOW DOG) ===================== */}
        <g id="cat" className="cursor-pointer group" onClick={() => onPartClick('catBody')}>
          {/* Triangular Head */}
          <polygon
            points="364,352 388,352 376,374"
            fill={colors.catBody}
            stroke="#0e1011"
            strokeWidth="3"
            className="group-hover:opacity-85 transition-opacity"
          />
          {/* Pointy Ears */}
          <polygon points="364,352 370,338 374,352" fill={colors.catBody} stroke="#0e1011" strokeWidth="2.8" />
          <polygon points="378,352 382,338 388,352" fill={colors.catBody} stroke="#0e1011" strokeWidth="2.8" />

          {/* Eyes & Nose */}
          <circle cx="371" cy="358" r="2" fill="#0e1011" stroke="none" />
          <circle cx="381" cy="358" r="2" fill="#0e1011" stroke="none" />
          <polygon points="374,364 378,364 376,367" fill="#0e1011" stroke="none" />

          {/* Body & Legs */}
          <path
            d="M376 372 C386 372 408 372 414 372 C420 372 424 376 424 382 L424 394 L376 394 Z"
            fill={colors.catBody}
            stroke="#0e1011"
            strokeWidth="3"
          />
          <path d="M378 392 L378 408" stroke="#0e1011" strokeWidth="3" />
          <path d="M386 392 L386 408" stroke="#0e1011" strokeWidth="3" />
          <path d="M414 392 L414 408" stroke="#0e1011" strokeWidth="3" />
          <path d="M422 392 L422 408" stroke="#0e1011" strokeWidth="3" />
          {/* Tail */}
          <path d="M424 374 C432 372 436 366 438 360" stroke="#0e1011" strokeWidth="3" fill="none" />
        </g>

        {/* ===================== THE ANIMAL HOUSE & BLOCKS ===================== */}
        <g id="animal-house">
          {/* Top Standing White Sheep */}
          <g id="sheep" className="cursor-pointer group" onClick={() => onPartClick('sheepBody')}>
            {/* Body */}
            <path
              d="M424 266 C428 250 442 240 458 240 C474 240 488 250 492 266 L490 286 L424 286 Z"
              fill={colors.sheepBody}
              className="group-hover:opacity-85 transition-opacity"
            />
            {/* Tail */}
            <path d="M422 268 C416 266 414 272 418 276" stroke="#0e1011" strokeWidth="2.8" fill="none" />

            {/* Head */}
            <circle cx="478" cy="242" r="14" fill={colors.sheepBody} stroke="#0e1011" strokeWidth="3" />
            {/* Left Ear */}
            <ellipse cx="462" cy="238" rx="8" ry="4" fill={colors.sheepBody} stroke="#0e1011" strokeWidth="2.8" />
            {/* Right Ear */}
            <ellipse cx="494" cy="238" rx="8" ry="4" fill={colors.sheepBody} stroke="#0e1011" strokeWidth="2.8" />
            {/* Eyes */}
            <circle cx="474" cy="242" r="2.2" fill="#0e1011" stroke="none" />
            <circle cx="484" cy="242" r="2.2" fill="#0e1011" stroke="none" />
            {/* Smiling Nose */}
            <path d="M476 248 C478 252 482 252 484 248" stroke="#0e1011" strokeWidth="2" fill="none" />

            {/* 4 Standing Legs */}
            <path d="M434 286 L434 304" stroke="#0e1011" strokeWidth="3.2" />
            <path d="M446 286 L446 304" stroke="#0e1011" strokeWidth="3.2" />
            <path d="M472 286 L472 304" stroke="#0e1011" strokeWidth="3.2" />
            <path d="M484 286 L484 304" stroke="#0e1011" strokeWidth="3.2" />
          </g>

          {/* Yellow Ball / Sphere on Roof */}
          <circle
            cx="508"
            cy="274"
            r="9"
            fill={colors.topSphere}
            stroke="#0e1011"
            strokeWidth="3"
            onClick={() => onPartClick('topSphere')}
            className="cursor-pointer hover:opacity-85 transition-opacity"
          />

          {/* Long Blue Roof Block */}
          <rect
            x="414"
            y="298"
            width="114"
            height="18"
            fill={colors.roofBlock}
            stroke="#0e1011"
            strokeWidth="3.2"
            onClick={() => onPartClick('roofBlock')}
            className="cursor-pointer hover:opacity-85 transition-opacity"
          />

          {/* Inverted Dark Green Triangle */}
          <polygon
            points="464,316 498,316 481,346"
            fill={colors.invertedTriangle}
            stroke="#0e1011"
            strokeWidth="3.2"
            onClick={() => onPartClick('invertedTriangle')}
            className="cursor-pointer hover:opacity-85 transition-opacity"
          />
          {/* Triangle strut supports */}
          <path d="M438 316 L464 346" stroke="#0e1011" strokeWidth="3.2" fill="none" />
          <path d="M498 316 L524 346" stroke="#0e1011" strokeWidth="3.2" fill="none" />

          {/* Middle Tier Horizontal Blocks */}
          <rect
            x="398"
            y="320"
            width="40"
            height="32"
            fill={colors.midBlockLeft}
            stroke="#0e1011"
            strokeWidth="3.2"
            onClick={() => onPartClick('midBlockLeft')}
            className="cursor-pointer hover:opacity-85 transition-opacity"
          />
          {/* Block pattern inside left block */}
          <path d="M408 328 C414 332 414 340 408 344" stroke="#0e1011" strokeWidth="2.4" fill="none" />

          <rect
            x="440"
            y="346"
            width="88"
            height="16"
            fill={colors.midBlockRight}
            stroke="#0e1011"
            strokeWidth="3.2"
            onClick={() => onPartClick('midBlockRight')}
            className="cursor-pointer hover:opacity-85 transition-opacity"
          />

          {/* Bottom Arch Structure */}
          {/* Left Yellow Pillar */}
          <rect
            x="416"
            y="362"
            width="28"
            height="46"
            fill={colors.leftPillar}
            stroke="#0e1011"
            strokeWidth="3.2"
            onClick={() => onPartClick('leftPillar')}
            className="cursor-pointer hover:opacity-85 transition-opacity"
          />
          {/* Inner divider */}
          <path d="M430 362 L430 408" stroke="#0e1011" strokeWidth="2.6" />

          {/* Right Yellow Pillar */}
          <rect
            x="478"
            y="362"
            width="34"
            height="46"
            fill={colors.rightPillar}
            stroke="#0e1011"
            strokeWidth="3.2"
            onClick={() => onPartClick('rightPillar')}
            className="cursor-pointer hover:opacity-85 transition-opacity"
          />
          {/* Inner divider */}
          <path d="M496 362 L496 408" stroke="#0e1011" strokeWidth="2.6" />

          {/* Center Doorway Opening */}
          <path
            d="M444 408 L444 380 C444 372 454 366 462 366 C470 366 478 372 478 380 L478 408"
            fill={colors.bottomArch}
            stroke="#0e1011"
            strokeWidth="3.2"
            onClick={() => onPartClick('bottomArch')}
            className="cursor-pointer hover:opacity-85 transition-opacity"
          />
        </g>
      </g>
    </svg>
  )
}

export default function StorybookPlayCanvas({
  characterName = 'Nessa',
  story = 'Nessa is very shy and always hides herself\nbehind her mask. Behind the mask is\nsomeone very helpful and kind.',
  palette = DEFAULT_PALETTE,
  defaultColor = '#a43c45',
  defaultBrushSize = 5,
  onSave,
  className = '',
}: StorybookPlayCanvasProps) {
  const [currentColor, setCurrentColor] = useState(defaultColor)
  const [brushSize, setBrushSize] = useState(defaultBrushSize)
  const [isEraser, setIsEraser] = useState(false)
  const [isDrawing, setIsDrawing] = useState(false)
  const [zoom, setZoom] = useState(1)
  const [elementColors, setElementColors] = useState<Record<string, string>>(INITIAL_COLORS)
  const [toastMessage, setToastMessage] = useState<string | null>(null)

  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const artboardRef = useRef<HTMLDivElement | null>(null)
  const sliderRef = useRef<HTMLDivElement | null>(null)
  const isDraggingSlider = useRef(false)
  const hasDrawn = useRef(false)

  // Show auto-dismissing toast
  const showToast = useCallback((msg: string) => {
    setToastMessage(msg)
    const timer = setTimeout(() => setToastMessage(null), 2400)
    return () => clearTimeout(timer)
  }, [])

  // Canvas resize and DPI sync
  const syncCanvasDPI = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const rect = canvas.getBoundingClientRect()
    if (rect.width === 0 || rect.height === 0) return

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

  // Recolor a specific character part with the active color
  const handlePartClick = (partKey: string) => {
    // If user just dragged/drew on canvas, ignore click
    if (hasDrawn.current) return

    const newColor = isEraser ? '#ffffff' : currentColor
    setElementColors((prev) => ({
      ...prev,
      [partKey]: newColor,
    }))
    showToast(`Colored with ${newColor}`)
  }

  // Pointer drawing events
  const getCoordinates = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current
    if (!canvas) return { x: 0, y: 0 }
    const rect = canvas.getBoundingClientRect()
    return {
      x: (e.clientX - rect.left) / zoom,
      y: (e.clientY - rect.top) / zoom,
    }
  }

  const handlePointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    e.currentTarget.setPointerCapture(e.pointerId)
    setIsDrawing(true)
    hasDrawn.current = false

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
    hasDrawn.current = true

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

  // START OVER: Reset drawing canvas AND colors
  const handleStartOver = () => {
    const canvas = canvasRef.current
    if (canvas) {
      const ctx = canvas.getContext('2d')
      if (ctx) ctx.clearRect(0, 0, canvas.width, canvas.height)
    }
    setElementColors(INITIAL_COLORS)
    setZoom(1)
    setIsEraser(false)
    showToast('Canvas & colors reset!')
  }

  // SAVE: High-res composite export
  const handleSave = async () => {
    const artboard = artboardRef.current
    const canvas = canvasRef.current
    if (!artboard || !canvas) return

    try {
      const exportCanvas = document.createElement('canvas')
      const rect = artboard.getBoundingClientRect()
      const dpr = 2
      exportCanvas.width = rect.width * dpr
      exportCanvas.height = rect.height * dpr
      const expCtx = exportCanvas.getContext('2d')
      if (!expCtx) return

      expCtx.scale(dpr, dpr)
      // Warm background
      expCtx.fillStyle = '#f0eee8'
      expCtx.fillRect(0, 0, rect.width, rect.height)

      const svgEl = artboard.querySelector('svg')
      if (svgEl) {
        const svgData = new XMLSerializer().serializeToString(svgEl)
        const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' })
        const url = URL.createObjectURL(svgBlob)
        const img = new Image()
        img.onload = () => {
          expCtx.drawImage(img, 0, 0, rect.width, rect.height)
          expCtx.drawImage(canvas, 0, 0, rect.width, rect.height)
          URL.revokeObjectURL(url)

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
        img.src = url
      }
    } catch {
      showToast('Artwork saved!')
    }
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

  // Slider pointer interactions
  const updateSlider = (clientX: number) => {
    const slider = sliderRef.current
    if (!slider) return
    const rect = slider.getBoundingClientRect()
    const percent = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width))
    const newSize = Math.round(2 + percent * 20)
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

  const sliderPercent = ((brushSize - 2) / 20) * 100

  // Zoom handlers
  const handleZoomIn = () => setZoom((z) => Math.min(2, Math.round((z + 0.15) * 100) / 100))
  const handleZoomOut = () => setZoom((z) => Math.max(0.7, Math.round((z - 0.15) * 100) / 100))
  const handleZoomReset = () => setZoom(1)

  return (
    <main className={`min-h-screen bg-[#d5d1c8] text-[#141517] flex items-center justify-center p-4 sm:p-8 font-sans ${className}`}>
      {/* Toast Notification */}
      <AnimatePresence>
        {toastMessage && (
          <motion.div
            initial={{ opacity: 0, y: -16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.95 }}
            className="fixed top-6 left-1/2 -translate-x-1/2 z-50 px-4 py-2 rounded-full bg-[#141517] text-[#f2f1ed] text-xs font-medium tracking-wide shadow-2xl flex items-center gap-2 pointer-events-none"
          >
            <span>{toastMessage}</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Browser Window Card */}
      <motion.section
        className="w-full max-w-[1020px] bg-[#f0eee8] rounded-[6px] shadow-[0_12px_36px_rgba(40,36,30,0.12)] overflow-hidden border border-[#dfdbd2] flex flex-col relative"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* Top Browser Chrome Bar */}
        <div className="h-[22px] bg-[#dedbd3] border-b border-[#d6d2c8] px-3 flex items-center">
          <div className="flex gap-[5px]" aria-hidden="true">
            <span className="w-[6px] h-[6px] rounded-full bg-[#b8b4ab]" />
            <span className="w-[6px] h-[6px] rounded-full bg-[#b8b4ab]" />
            <span className="w-[6px] h-[6px] rounded-full bg-[#b8b4ab]" />
          </div>
        </div>

        {/* Site Header Navigation */}
        <header className="h-[42px] px-4 sm:px-6 grid grid-cols-3 items-center text-[11px] border-b border-[#e5e2d9]">
          <nav className="flex items-center gap-3">
            <a href="#shop" className="hover:opacity-75 transition-opacity">
              Shop
            </a>
            <a href="#play" className="underline underline-offset-4 decoration-1 font-medium">
              Play
            </a>
          </nav>

          <div className="flex justify-center items-center">
            <WosetWordmark />
          </div>

          <nav className="flex items-center justify-end gap-4 text-right">
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
          ref={artboardRef}
          id="play"
          className="relative min-h-[460px] sm:min-h-[500px] flex flex-col items-center justify-start pt-6 sm:pt-8 px-4 sm:px-8 pb-28 overflow-hidden"
        >
          {/* Zoom controls floating in top-right */}
          <div className="absolute top-4 right-4 z-20 flex items-center bg-[#dedbd3]/80 backdrop-blur-sm border border-[#ccc7bc] rounded-full px-2 py-1 text-[10px] gap-2 select-none shadow-sm">
            <button
              type="button"
              onClick={handleZoomOut}
              className="hover:bg-[#ccc7bc] w-5 h-5 rounded-full flex items-center justify-center font-bold text-[#141517] transition-colors"
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
              className="hover:bg-[#ccc7bc] w-5 h-5 rounded-full flex items-center justify-center font-bold text-[#141517] transition-colors"
              title="Zoom in"
            >
              +
            </button>
          </div>

          {/* Scalable Canvas Content (Headline + Scene + Doodle Layer) */}
          <motion.div
            className="w-full max-w-[720px] flex flex-col items-center origin-top transition-transform duration-200"
            style={{ transform: `scale(${zoom})` }}
          >
            {/* Hand-Drawn Headline */}
            <HandDrawnHeadline />

            {/* Illustration Scene & Doodle Canvas Layer */}
            <div className="relative w-full mt-2 sm:mt-4">
              <AnimalScene
                colors={elementColors}
                onPartClick={handlePartClick}
                activeColor={currentColor}
              />

              {/* Interactive Transparent Canvas for Hand Doodling */}
              <canvas
                ref={canvasRef}
                className="absolute inset-0 w-full h-full touch-none z-10 cursor-crosshair"
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUp}
                onPointerLeave={handlePointerUp}
                aria-label="Interactive drawing canvas. Click to recolor shapes or drag to doodle."
              />
            </div>
          </motion.div>

          {/* Lore Copy Card (Bottom-Left) */}
          <aside className="absolute left-4 sm:left-7 bottom-5 sm:bottom-6 z-20 max-w-[210px] select-none">
            <h2 className="text-[17px] sm:text-[19px] font-semibold tracking-tight text-[#141517] mb-1">
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

          {/* Tactile Studio Toolbar (Bottom-Right / Center) */}
          <footer className="absolute right-4 sm:right-7 bottom-5 sm:bottom-6 z-20 flex flex-wrap items-center justify-end gap-3 sm:gap-6 select-none">
            {/* Action Buttons */}
            <div className="flex items-center gap-[5px]" role="toolbar" aria-label="Canvas actions">
              <button
                type="button"
                onClick={handleStartOver}
                title="Reset all colors and clear drawings"
                className="h-[21px] px-3 rounded-full border border-[#76736c] text-[8px] sm:text-[8.5px] font-medium tracking-wide uppercase hover:bg-[#e4e1d8] active:scale-95 transition-all text-[#141517]"
              >
                START OVER
              </button>
              <button
                type="button"
                onClick={() => setIsEraser(!isEraser)}
                title="Toggle eraser mode"
                style={
                  isEraser
                    ? { backgroundColor: '#141517', color: '#f0eee8', borderColor: '#141517' }
                    : {}
                }
                className="h-[21px] px-3 rounded-full border border-[#76736c] text-[8px] sm:text-[8.5px] font-medium tracking-wide uppercase hover:bg-[#e4e1d8] active:scale-95 transition-all text-[#141517]"
              >
                {isEraser ? 'DRAWING' : 'ERASER'}
              </button>
              <button
                type="button"
                onClick={handleSave}
                title="Export artwork as PNG"
                className="h-[21px] px-3 rounded-full border border-[#76736c] text-[8px] sm:text-[8.5px] font-medium tracking-wide uppercase hover:bg-[#e4e1d8] active:scale-95 transition-all text-[#141517]"
              >
                SAVE
              </button>
              <button
                type="button"
                onClick={handleShare}
                title="Share link"
                className="h-[21px] px-3 rounded-full border border-[#76736c] text-[8px] sm:text-[8.5px] font-medium tracking-wide uppercase hover:bg-[#e4e1d8] active:scale-95 transition-all text-[#141517]"
              >
                SHARE
              </button>
            </div>

            {/* Color Palette Swatches */}
            <div className="flex items-center gap-[6px]" aria-label="Palette swatches">
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
                      boxShadow: isSelected ? '0 0 0 2px #f0eee8, 0 0 0 3.5px #141517' : 'none',
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
              className="relative w-[64px] sm:w-[72px] h-[18px] flex items-center cursor-ew-resize select-none"
              aria-label={`Brush size: ${brushSize}px`}
              onPointerDown={handleSliderDown}
              onPointerMove={handleSliderMove}
              onPointerUp={handleSliderUp}
            >
              {/* Horizontal line */}
              <div className="w-full h-[1px] bg-[#141517]" />
              {/* Slider thumb */}
              <span
                className="absolute rounded-full transition-transform"
                style={{
                  left: `${sliderPercent}%`,
                  width: `${Math.max(6, Math.min(11, brushSize * 0.7))}px`,
                  height: `${Math.max(6, Math.min(11, brushSize * 0.7))}px`,
                  transform: 'translate(-50%, 0)',
                  backgroundColor: isEraser ? '#666' : currentColor,
                }}
              />
              <b
                className="absolute rounded-full border border-[#141517]"
                style={{
                  left: `${sliderPercent}%`,
                  width: `${Math.max(12, Math.min(18, brushSize * 0.7 + 6))}px`,
                  height: `${Math.max(12, Math.min(18, brushSize * 0.7 + 6))}px`,
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
