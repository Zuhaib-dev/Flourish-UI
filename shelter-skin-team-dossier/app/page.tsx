'use client'

import React, { useState } from 'react'
import { ShelterSkinTeamDossier } from '../components/shelter-skin-team-dossier'
import { Sparkles, Layers, Eye, Code, ArrowUpRight } from 'lucide-react'

export default function Page() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  return (
    <main className="min-h-screen w-full bg-[#9ebfd8] flex flex-col items-center justify-between py-10 sm:py-16 px-4 sm:px-6 relative overflow-x-hidden selection:bg-[#18181b] selection:text-[#fbf9f4]">
      
      {/* Top Subtle Breadcrumb / Controls */}
      <header className="w-full max-w-4xl mx-auto flex items-center justify-between mb-4 text-[#18181b]">
        <div className="flex items-center gap-3">
          <span className="font-technical-mono text-[10px] sm:text-[11px] font-bold tracking-[0.2em] uppercase bg-white/70 backdrop-blur-xs px-3 py-1 rounded-full border border-black/10 shadow-2xs">
            EDITORIAL COMPONENT ✦ 044
          </span>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            id="open-modal-btn"
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-2 bg-black text-white hover:bg-stone-800 active:scale-95 px-4 py-1.5 rounded-full font-technical-mono text-[10.5px] sm:text-[11px] font-bold tracking-widest uppercase transition-all shadow-md cursor-pointer"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>OPEN AS MODAL</span>
          </button>
        </div>
      </header>

      {/* Centerpiece: The Tactile Paper Questionnaire Card */}
      <div className="w-full flex justify-center items-center py-4 relative z-10">
        <ShelterSkinTeamDossier initialMemberId="carissa" showMemberSwitcher={true} />
      </div>

      {/* Full Modal Demo Popup */}
      <ShelterSkinTeamDossier
        asModal={true}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialMemberId="carissa"
      />

      {/* Bottom Architectural Credits */}
      <footer className="w-full max-w-4xl mx-auto mt-12 pt-6 border-t border-black/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-technical-mono text-black/70">
        <div className="flex items-center gap-2">
          <span>SHELTER SKIN ARCHIVAL DOSSIER</span>
          <span>•</span>
          <span>FLOURISH UI</span>
        </div>
        <div>
          <span>Crafted by </span>
          <a
            href="https://www.zuhaibrashid.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-black underline hover:text-stone-700"
          >
            Zuhaib Rashid
          </a>
        </div>
      </footer>
    </main>
  )
}
