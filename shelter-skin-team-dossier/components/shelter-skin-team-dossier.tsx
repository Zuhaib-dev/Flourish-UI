'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Sparkles, X, ChevronRight, ChevronLeft, Maximize2, Share2, Check, PenTool } from 'lucide-react'

export interface TeamMemberProfile {
  id: string
  name: string
  role: string
  sign: string
  photoUrl: string
  favoriteScent: 'VANILLA' | 'SOLAR' | 'DEEP END'
  favoriteProduct: string
  coffeeOrder: string
  grewUp: string
  hyperfixation: string
  polaroidRotation?: number
  doodleType?: 'sun-wave' | 'sparkle-star' | 'floral'
}

export const SHELTER_TEAM: TeamMemberProfile[] = [
  {
    id: 'carissa',
    name: 'Carissa',
    role: 'Creative Director',
    sign: 'Leo',
    photoUrl: '/carissa.jpg',
    favoriteScent: 'DEEP END',
    favoriteProduct: 'Hairbrush & Deep End Body Oil',
    coffeeOrder: 'Latte (always with an extra shot)',
    grewUp: 'Madison, WI',
    hyperfixation: 'Vintage magazines',
    polaroidRotation: 4.5,
    doodleType: 'sun-wave',
  },
  {
    id: 'maya',
    name: 'Maya',
    role: 'Head of Botanical Formulation',
    sign: 'Taurus',
    photoUrl: '/maya.jpg',
    favoriteScent: 'SOLAR',
    favoriteProduct: 'Ceramide Dew Drops & Solar Mist',
    coffeeOrder: 'Oat flat white with cinnamon',
    grewUp: 'Portland, OR',
    hyperfixation: 'Rare greenhouse herbs',
    polaroidRotation: -3.5,
    doodleType: 'sparkle-star',
  },
]

export interface ShelterSkinTeamDossierProps {
  initialMemberId?: string
  asModal?: boolean
  isOpen?: boolean
  onClose?: () => void
  className?: string
  showMemberSwitcher?: boolean
}

export function ShelterSkinTeamDossier({
  initialMemberId = 'carissa',
  asModal = false,
  isOpen = true,
  onClose,
  className = '',
  showMemberSwitcher = true,
}: ShelterSkinTeamDossierProps) {
  const [activeMemberId, setActiveMemberId] = useState<string>(initialMemberId)
  const [selectedScent, setSelectedScent] = useState<'VANILLA' | 'SOLAR' | 'DEEP END'>('DEEP END')
  const [copied, setCopied] = useState<boolean>(false)
  const [isPhotoTilted, setIsPhotoTilted] = useState<boolean>(false)

  const activeMember =
    SHELTER_TEAM.find((m) => m.id === activeMemberId) || SHELTER_TEAM[0]

  const handleMemberChange = (id: string) => {
    setActiveMemberId(id)
    const member = SHELTER_TEAM.find((m) => m.id === id)
    if (member) {
      setSelectedScent(member.favoriteScent)
    }
  }

  const handleCopyLink = () => {
    navigator.clipboard?.writeText(window.location.href)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  // The Tactile Questionnaire Paper Sheet Card
  const sheetContent = (
    <motion.div
      key={activeMember.id}
      initial={{ opacity: 0, scale: 0.96, y: 10 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96, y: -10 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className={`relative w-full max-w-[560px] bg-[#fbf9f4] text-[#18181b] p-7 sm:p-10 md:p-12 paper-sheet-shadow rounded-xs border border-[#18181b]/10 select-none ${className}`}
      style={{
        backgroundImage: `
          radial-gradient(rgba(0, 0, 0, 0.02) 1px, transparent 0),
          linear-gradient(to bottom, rgba(255, 255, 255, 0.5), rgba(251, 249, 244, 1))
        `,
        backgroundSize: '24px 24px, 100% 100%',
      }}
    >
      {/* --- TOP ROW: BRAND LOGO & POLAROID PHOTO --- */}
      <div className="flex items-start justify-between relative">
        
        {/* Left: Brand Identity & Title */}
        <div className="pt-1 z-10 max-w-[210px] sm:max-w-[240px]">
          {/* Logo "shelter" */}
          <div className="inline-block group cursor-pointer">
            <h2 className="font-shelter-logo text-[38px] sm:text-[46px] md:text-[50px] leading-none text-black tracking-[-0.04em] font-normal">
              shelter
            </h2>
            <div className="text-[10px] sm:text-[11px] font-bold tracking-[0.38em] text-black/80 uppercase text-center mt-1 -ml-1">
              SKIN
            </div>
          </div>

          {/* Subheading: MEET THE TEAM */}
          <div className="mt-7 sm:mt-8">
            <span className="font-technical-mono text-[11px] sm:text-[12px] font-bold tracking-[0.24em] text-black/90 uppercase">
              MEET THE TEAM
            </span>
          </div>

          {/* Top Questionnaire Box (Name, Role, Sign) */}
          <div className="mt-8 border border-black w-full bg-[#fbf9f4] divide-y divide-black shadow-2xs">
            {/* Field: NAME */}
            <div className="px-3 py-1.5 min-h-[46px] flex flex-col justify-between">
              <span className="font-technical-mono text-[9px] sm:text-[10px] font-bold tracking-[0.18em] text-black/75 uppercase leading-none">
                NAME:
              </span>
              <span className="font-handwriting text-[24px] sm:text-[27px] text-[#1a1a1d] pl-3 leading-none -translate-y-0.5">
                {activeMember.name}
              </span>
            </div>

            {/* Field: ROLE */}
            <div className="px-3 py-1.5 min-h-[46px] flex flex-col justify-between">
              <span className="font-technical-mono text-[9px] sm:text-[10px] font-bold tracking-[0.18em] text-black/75 uppercase leading-none">
                ROLE:
              </span>
              <span className="font-handwriting text-[23px] sm:text-[26px] text-[#1a1a1d] pl-3 leading-none -translate-y-0.5">
                {activeMember.role}
              </span>
            </div>

            {/* Field: SIGN */}
            <div className="px-3 py-1.5 min-h-[46px] flex flex-col justify-between">
              <span className="font-technical-mono text-[9px] sm:text-[10px] font-bold tracking-[0.18em] text-black/75 uppercase leading-none">
                SIGN:
              </span>
              <div className="font-handwriting text-[24px] sm:text-[27px] text-[#1a1a1d] pl-3 leading-none flex items-center gap-1.5 -translate-y-0.5">
                <span className="text-[13px] text-black">✦</span>
                <span>{activeMember.sign}</span>
                <span className="text-[13px] text-black">✦</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Clipped Polaroid Photo */}
        <div className="relative -mr-2 sm:-mr-4 -mt-2 z-20">
          
          {/* Physical Silver Metallic Wire Paperclip */}
          <div className="absolute -top-3 right-8 sm:right-10 z-30 pointer-events-none drop-shadow-sm">
            <svg
              width="36"
              height="80"
              viewBox="0 0 36 80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-[#9ca3af]"
            >
              {/* Outer paperclip loop */}
              <path
                d="M10 24V62C10 68.6 15.4 74 22 74C28.6 74 34 68.6 34 62V16C34 7.2 26.8 0 18 0C9.2 0 2 7.2 2 16V55"
                stroke="#6b7280"
                strokeWidth="2.8"
                strokeLinecap="round"
                className="drop-shadow-xs"
              />
              {/* Inner loop */}
              <path
                d="M10 24V50C10 54.4 13.6 58 18 58C22.4 58 26 54.4 26 50V16"
                stroke="#4b5563"
                strokeWidth="2.8"
                strokeLinecap="round"
              />
              {/* Metallic highlight sheen */}
              <path
                d="M33 18V60"
                stroke="#f3f4f6"
                strokeWidth="1.2"
                strokeLinecap="round"
                opacity="0.75"
              />
            </svg>
          </div>

          {/* Polaroid Frame */}
          <motion.div
            animate={{
              rotate: isPhotoTilted ? 0 : activeMember.polaroidRotation || 4.5,
              scale: isPhotoTilted ? 1.05 : 1,
            }}
            whileHover={{ scale: 1.03 }}
            onClick={() => setIsPhotoTilted(!isPhotoTilted)}
            transition={{ type: 'spring', stiffness: 260, damping: 20 }}
            className="w-[165px] sm:w-[195px] md:w-[210px] bg-white p-2.5 sm:p-3 pb-8 sm:pb-10 polaroid-shadow cursor-pointer transition-shadow rounded-[1.5px] border border-[#e5e7eb]"
            title="Click to interact with Polaroid"
          >
            {/* Photo Container */}
            <div className="relative aspect-[3/3.8] w-full overflow-hidden bg-stone-100 shadow-inner">
              <Image
                src={activeMember.photoUrl}
                alt={`${activeMember.name} - ${activeMember.role}`}
                fill
                className="object-cover"
                priority
              />
              {/* Subtle Film Grain / Gloss Sheen */}
              <div className="absolute inset-0 bg-gradient-to-tr from-black/5 via-transparent to-white/15 pointer-events-none" />
            </div>

            {/* Bottom Polaroid Chin with subtle handwritten name */}
            <div className="mt-2 text-center">
              <span className="font-handwriting text-[14px] sm:text-[15px] text-stone-500/80">
                {activeMember.name} • shelter
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* --- MIDDLE ROW: SCENT SELECTOR WITH HAND-DRAWN INK DOODLE --- */}
      <div className="my-8 sm:my-9 relative pt-2 pb-1">
        <div className="flex items-center justify-around text-center px-2">
          
          {/* Option: VANILLA */}
          <button
            type="button"
            onClick={() => setSelectedScent('VANILLA')}
            className="relative font-technical-mono text-[12px] sm:text-[13px] font-bold tracking-[0.24em] uppercase text-black/90 cursor-pointer p-2 transition-transform hover:scale-105 active:scale-95"
          >
            <span>VANILLA</span>
            {selectedScent === 'VANILLA' && (
              <motion.div
                layoutId="scent-ink-circle"
                className="absolute -inset-1.5 sm:-inset-2 pointer-events-none"
              >
                <svg
                  viewBox="0 0 120 45"
                  fill="none"
                  className="w-full h-full text-black stroke-current"
                >
                  <path
                    d="M10 22 C 10 10, 110 8, 110 22 C 110 36, 12 38, 14 20"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              </motion.div>
            )}
          </button>

          {/* Option: SOLAR */}
          <button
            type="button"
            onClick={() => setSelectedScent('SOLAR')}
            className="relative font-technical-mono text-[12px] sm:text-[13px] font-bold tracking-[0.24em] uppercase text-black/90 cursor-pointer p-2 transition-transform hover:scale-105 active:scale-95"
          >
            <span>SOLAR</span>
            {selectedScent === 'SOLAR' && (
              <motion.div
                layoutId="scent-ink-circle"
                className="absolute -inset-1.5 sm:-inset-2 pointer-events-none"
              >
                <svg
                  viewBox="0 0 100 45"
                  fill="none"
                  className="w-full h-full text-black stroke-current"
                >
                  <path
                    d="M8 22 C 8 10, 92 8, 92 22 C 92 36, 10 38, 12 20"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              </motion.div>
            )}
          </button>

          {/* Option: DEEP END (Default with authentic hand-drawn ink loop, sun, and wave) */}
          <button
            type="button"
            onClick={() => setSelectedScent('DEEP END')}
            className="relative font-technical-mono text-[12px] sm:text-[13px] font-bold tracking-[0.24em] uppercase text-black/90 cursor-pointer p-2 transition-transform hover:scale-105 active:scale-95 group"
          >
            <span className="relative z-10">DEEP END</span>

            {/* Hand-drawn ink loop around DEEP END */}
            {selectedScent === 'DEEP END' && (
              <>
                <motion.div
                  layoutId="scent-ink-circle"
                  className="absolute -inset-2.5 sm:-inset-3 pointer-events-none"
                >
                  <svg
                    viewBox="0 0 130 50"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full text-black stroke-current"
                  >
                    {/* Organic double-loop hand-drawn circle */}
                    <path
                      d="M12 24 C 12 11, 118 9, 120 24 C 122 39, 14 41, 10 24 C 8 14, 114 12, 118 25"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </motion.div>

                {/* Hand-Drawn Sun Doodle on top right */}
                <motion.div
                  initial={{ scale: 0, rotate: -20 }}
                  animate={{ scale: 1, rotate: 0 }}
                  className="absolute -top-4 -right-4 pointer-events-none text-black"
                >
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-black stroke-current"
                  >
                    <circle cx="16" cy="16" r="6" strokeWidth="1.8" />
                    {/* Radiating sun ray dashes */}
                    <line x1="16" y1="4" x2="16" y2="7" strokeWidth="1.8" strokeLinecap="round" />
                    <line x1="16" y1="25" x2="16" y2="28" strokeWidth="1.8" strokeLinecap="round" />
                    <line x1="4" y1="16" x2="7" y2="16" strokeWidth="1.8" strokeLinecap="round" />
                    <line x1="25" y1="16" x2="28" y2="16" strokeWidth="1.8" strokeLinecap="round" />
                    <line x1="7.5" y1="7.5" x2="9.8" y2="9.8" strokeWidth="1.8" strokeLinecap="round" />
                    <line x1="22.2" y1="22.2" x2="24.5" y2="24.5" strokeWidth="1.8" strokeLinecap="round" />
                    <line x1="7.5" y1="24.5" x2="9.8" y2="22.2" strokeWidth="1.8" strokeLinecap="round" />
                    <line x1="22.2" y1="9.8" x2="24.5" y2="7.5" strokeWidth="1.8" strokeLinecap="round" />
                  </svg>
                </motion.div>

                {/* Hand-Drawn Ocean Wave Doodle below DEEP END */}
                <motion.div
                  initial={{ opacity: 0, y: -4 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute -bottom-3.5 left-1/2 -translate-x-1/2 pointer-events-none text-black"
                >
                  <svg
                    width="44"
                    height="14"
                    viewBox="0 0 44 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-black stroke-current"
                  >
                    <path
                      d="M2 9 C 8 3, 14 13, 20 8 C 26 3, 32 13, 40 7"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                    />
                  </svg>
                </motion.div>
              </>
            )}
          </button>
        </div>
      </div>

      {/* --- BOTTOM ROW: FULL-WIDTH QUESTIONNAIRE BOX --- */}
      <div className="border border-black w-full bg-[#fbf9f4] divide-y divide-black shadow-2xs">
        
        {/* Field 1: FAVORITE SHELTER PRODUCT */}
        <div className="px-3 py-1.5 min-h-[50px] flex flex-col justify-between">
          <span className="font-technical-mono text-[9px] sm:text-[10px] font-bold tracking-[0.18em] text-black/75 uppercase leading-none">
            FAVORITE SHELTER PRODUCT :
          </span>
          <span className="font-handwriting text-[23px] sm:text-[26px] text-[#1a1a1d] pl-3 leading-none -translate-y-0.5">
            {activeMember.favoriteProduct}
          </span>
        </div>

        {/* Field 2: GO-TO COFFEE SHOP ORDER */}
        <div className="px-3 py-1.5 min-h-[50px] flex flex-col justify-between">
          <span className="font-technical-mono text-[9px] sm:text-[10px] font-bold tracking-[0.18em] text-black/75 uppercase leading-none">
            GO-TO COFFEE SHOP ORDER :
          </span>
          <span className="font-handwriting text-[23px] sm:text-[26px] text-[#1a1a1d] pl-3 leading-none -translate-y-0.5">
            {activeMember.coffeeOrder}
          </span>
        </div>

        {/* Field 3: WHERE YOU GREW UP */}
        <div className="px-3 py-1.5 min-h-[50px] flex flex-col justify-between">
          <span className="font-technical-mono text-[9px] sm:text-[10px] font-bold tracking-[0.18em] text-black/75 uppercase leading-none">
            WHERE YOU GREW UP :
          </span>
          <span className="font-handwriting text-[23px] sm:text-[26px] text-[#1a1a1d] pl-3 leading-none -translate-y-0.5">
            {activeMember.grewUp}
          </span>
        </div>

        {/* Field 4: CURRENT HYPERFIXATION */}
        <div className="px-3 py-1.5 min-h-[50px] flex flex-col justify-between">
          <span className="font-technical-mono text-[9px] sm:text-[10px] font-bold tracking-[0.18em] text-black/75 uppercase leading-none">
            CURRENT HYPERFIXATION :
          </span>
          <span className="font-handwriting text-[23px] sm:text-[26px] text-[#1a1a1d] pl-3 leading-none -translate-y-0.5">
            {activeMember.hyperfixation}
          </span>
        </div>
      </div>
    </motion.div>
  )

  // If used as a Modal popup overlay:
  if (asModal) {
    return (
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs">
            {/* Modal backdrop dismiss */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
              className="absolute inset-0"
            />

            {/* Modal Container */}
            <div className="relative z-10 flex flex-col items-center max-w-full">
              {/* Close Button */}
              <button
                type="button"
                onClick={onClose}
                className="absolute -top-12 right-0 sm:-right-4 text-white hover:text-stone-300 p-2 rounded-full bg-black/30 hover:bg-black/50 transition-colors cursor-pointer"
                aria-label="Close dossier"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Sheet Card */}
              {sheetContent}

              {/* Bottom Member Switcher within Modal */}
              {showMemberSwitcher && (
                <div className="mt-5 flex items-center gap-3 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg border border-black/10">
                  <span className="font-technical-mono text-[11px] font-bold tracking-widest uppercase text-stone-600">
                    TEAM MEMBER:
                  </span>
                  {SHELTER_TEAM.map((member) => (
                    <button
                      key={member.id}
                      type="button"
                      onClick={() => handleMemberChange(member.id)}
                      className={`px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${
                        activeMember.id === member.id
                          ? 'bg-black text-white'
                          : 'text-stone-700 hover:bg-stone-200'
                      }`}
                    >
                      {member.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </AnimatePresence>
    )
  }

  // Standalone Card Presentation:
  return (
    <div className="flex flex-col items-center">
      {/* Team Member Switcher Bar */}
      {showMemberSwitcher && (
        <div className="mb-6 flex items-center gap-3 bg-white/80 backdrop-blur-xs px-5 py-2.5 rounded-full shadow-xs border border-black/10">
          <span className="font-technical-mono text-[11px] font-bold tracking-widest uppercase text-stone-700">
            DOSSIER:
          </span>
          {SHELTER_TEAM.map((member) => (
            <button
              key={member.id}
              type="button"
              onClick={() => handleMemberChange(member.id)}
              className={`px-3.5 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeMember.id === member.id
                  ? 'bg-black text-white shadow-xs'
                  : 'text-stone-700 hover:bg-stone-200/80'
              }`}
            >
              {member.name} — {member.role}
            </button>
          ))}
          <button
            type="button"
            onClick={handleCopyLink}
            className="ml-2 p-1.5 rounded-full hover:bg-stone-200 text-stone-600 transition-colors"
            title="Share Dossier"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Share2 className="w-4 h-4" />}
          </button>
        </div>
      )}

      {/* The Central Dossier Paper Sheet */}
      {sheetContent}
    </div>
  )
}
