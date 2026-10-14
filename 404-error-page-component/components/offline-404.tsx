'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

export interface Offline404Props {
  imageSrc?: string
  title?: string
  suggestions?: string[]
  homeHref?: string
  homeLabel?: string
  className?: string
}

export function Offline404({
  imageSrc = '/Preview.png',
  title = 'No Internet',
  suggestions = ['Throw your phone away', 'Find a spot in nature', 'Enjoy'],
  homeHref = '/',
  homeLabel = 'Back to Home',
  className = '',
}: Offline404Props) {
  const [dinoJumping, setDinoJumping] = useState(false)
  const [jumpCount, setJumpCount] = useState(0)
  const [showToast, setShowToast] = useState(false)

  // Trigger dino jump on Spacebar
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Space' && !dinoJumping) {
        e.preventDefault()
        triggerJump()
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [dinoJumping])

  const triggerJump = () => {
    if (dinoJumping) return
    setDinoJumping(true)
    setJumpCount((prev) => prev + 1)
    if (jumpCount === 0) {
      setShowToast(true)
      setTimeout(() => setShowToast(false), 2600)
    }
    setTimeout(() => setDinoJumping(false), 450)
  }

  return (
    <main
      className={`relative min-h-screen overflow-hidden bg-[#e7e6e1] select-none flex flex-col justify-between ${className}`}
      aria-labelledby="offline-title"
    >
      <h1 id="offline-title" className="sr-only">
        404 — {title}
      </h1>

      {/* Floating 404 Header Badge */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-3">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="px-3.5 py-1 rounded-full bg-black/10 backdrop-blur-md border border-black/10 font-mono text-xs sm:text-sm font-semibold tracking-[0.25em] text-black/75 shadow-sm"
        >
          404 · DISCONNECT
        </motion.div>
      </div>

      {/* Dino Easter Egg Interactive Hotspot (Top Area) */}
      <div
        onClick={triggerJump}
        className="absolute top-12 left-1/2 -translate-x-1/2 sm:translate-x-[-120px] z-30 cursor-pointer w-48 h-32 flex flex-col items-center justify-start group"
        title="Click or press Spacebar to jump!"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            triggerJump()
          }
        }}
      >
        {/* Animated Jump Indicator */}
        <motion.div
          animate={dinoJumping ? { y: -24, rotate: [0, -5, 5, 0] } : { y: 0 }}
          transition={{ duration: 0.45, ease: 'easeInOut' }}
          className="w-16 h-16 pointer-events-none"
        />
      </div>

      {/* Easter Egg Jump Toast */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.95 }}
            className="fixed top-20 left-1/2 -translate-x-1/2 z-40 px-4 py-1.5 rounded-full bg-black/80 backdrop-blur-md text-white text-xs font-mono tracking-wide shadow-xl pointer-events-none"
          >
            🦖 Dino Jump Activated! (Press Space)
          </motion.div>
        )}
      </AnimatePresence>

      {/* Soft Blurred Background Glow */}
      <img
        src={imageSrc}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full scale-110 object-cover opacity-25 blur-3xl pointer-events-none"
      />

      {/* Main Illustrated Scene (High Definition Overhead Perspective) */}
      <motion.img
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        src={imageSrc}
        alt="No Internet page with overhead bird's eye view of people looking at their phones"
        className="absolute left-1/2 top-0 h-full w-full -translate-x-1/2 object-cover object-center portrait:object-cover landscape:h-full landscape:w-auto landscape:max-w-none landscape:object-contain"
        draggable={false}
      />

      {/* Bottom Floating Navigation Action */}
      <footer className="relative z-30 w-full p-6 sm:p-8 flex items-center justify-between pointer-events-none">
        <div className="text-[11px] font-mono text-black/50 tracking-wider hidden sm:block">
          STATUS: 404_OFFLINE
        </div>

        <Link
          href={homeHref}
          className="pointer-events-auto ml-auto px-5 py-2.5 rounded-full bg-black/85 text-white/95 text-xs font-medium tracking-wide shadow-lg hover:bg-black hover:scale-105 active:scale-95 transition-all border border-white/20 backdrop-blur-sm"
        >
          {homeLabel} →
        </Link>
      </footer>
    </main>
  )
}

export default Offline404
