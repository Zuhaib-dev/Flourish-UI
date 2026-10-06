"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const spreads = [
  { id: 1, image: "/spread1.jpg" },
  { id: 2, image: "/spread2.jpg" },
  { id: 3, image: "/spread3.jpg" },
];

export default function DigitalJournal() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextPage = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, spreads.length - 1));
  };

  const prevPage = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowRight') nextPage();
    if (e.key === 'ArrowLeft') prevPage();
  };

  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center overflow-hidden font-sans bg-[#f2f1ef]"
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      {/* Header Context */}
      <div className="mb-16 text-center flex flex-col items-center z-50">
        <h1 className="font-serif text-[56px] font-bold tracking-tight text-neutral-900 leading-none mb-3">
          Journal
        </h1>
        <p className="font-sans text-[10px] font-bold tracking-[0.3em] text-neutral-600 uppercase">
          14 PAGES
        </p>
      </div>

      {/* Interactive Journal Coverflow */}
      <div className="relative w-full max-w-[900px] h-[450px] flex items-center justify-center perspective-[1500px] transform-style-3d">
        <AnimatePresence initial={false}>
          {spreads.map((spread, index) => {
            const isCenter = index === currentIndex;
            const isLeft = index < currentIndex;
            const isRight = index > currentIndex;
            const offset = Math.abs(index - currentIndex);

            // Don't render items too far away
            if (offset > 2) return null;

            // Determine variants dynamically based on position
            let initialX = 0;
            let initialRotateY = 0;
            let initialScale = 1;
            let initialZ = 0;
            let filter = "brightness(1)";

            if (isLeft) {
              initialX = -45 - (offset * 12);
              initialRotateY = 35; // left edge forward, right edge back
              initialScale = 0.85 - (offset * 0.05);
              initialZ = -100 - (offset * 50);
              filter = `brightness(${0.6 - offset * 0.1})`;
            } else if (isRight) {
              initialX = 45 + (offset * 12);
              initialRotateY = -35; // right edge forward, left edge back
              initialScale = 0.85 - (offset * 0.05);
              initialZ = -100 - (offset * 50);
              filter = `brightness(${0.6 - offset * 0.1})`;
            }

            return (
              <motion.div
                key={spread.id}
                initial={false}
                animate={{
                  x: isCenter ? "0%" : `${initialX}%`,
                  rotateY: isCenter ? 0 : initialRotateY,
                  scale: isCenter ? 1 : initialScale,
                  z: isCenter ? 0 : initialZ,
                  zIndex: 10 - offset,
                  filter: isCenter ? "brightness(1)" : filter,
                }}
                transition={{
                  type: "spring",
                  stiffness: 260,
                  damping: 25,
                  mass: 1,
                }}
                className={`absolute w-full h-full rounded-[24px] overflow-hidden shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] cursor-pointer
                  ${!isCenter ? 'hover:brightness-90 transition-all duration-300' : ''}
                `}
                onClick={() => {
                  if (isLeft) prevPage();
                  if (isRight) nextPage();
                }}
              >
                {/* Full Bleed Image */}
                <img
                  src={spread.image}
                  alt={`Spread ${index + 1}`}
                  className="w-full h-full object-cover pointer-events-none"
                />
                
                {/* Photorealistic Spine Shadow and Lighting */}
                <div 
                  className="absolute inset-0 pointer-events-none mix-blend-multiply opacity-80"
                  style={{
                    backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(0,0,0,0.1) 45%, rgba(0,0,0,0.8) 49.5%, rgba(0,0,0,0.9) 50%, rgba(0,0,0,0.8) 50.5%, rgba(0,0,0,0.1) 55%, rgba(255,255,255,0) 100%)'
                  }}
                />
                {/* Spine Highlight (for volume) */}
                <div 
                  className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-60"
                  style={{
                    backgroundImage: 'linear-gradient(to right, transparent 48%, rgba(255,255,255,0.4) 49%, transparent 49.5%, transparent 50.5%, rgba(255,255,255,0.4) 51%, transparent 52%)'
                  }}
                />

                {/* Left/Right Edge Shadows (subtle curve of paper) */}
                <div className="absolute inset-0 shadow-[inset_20px_0_40px_-20px_rgba(0,0,0,0.3),inset_-20px_0_40px_-20px_rgba(0,0,0,0.3)] pointer-events-none" />

                {/* Sub-navigation Controls on Active Spread */}
                {isCenter && (
                  <div className="absolute bottom-6 left-12 flex gap-1 bg-black/20 backdrop-blur-md rounded-full px-2 py-1 shadow-sm border border-white/10 z-50">
                    <button 
                      className={`p-0.5 rounded-full hover:bg-black/40 transition-colors ${currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                      onClick={(e) => { e.stopPropagation(); prevPage(); }}
                      disabled={currentIndex === 0}
                    >
                      <ChevronLeft className="w-3.5 h-3.5 text-white" />
                    </button>
                    <button 
                      className={`p-0.5 rounded-full hover:bg-black/40 transition-colors ${currentIndex === spreads.length - 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
                      onClick={(e) => { e.stopPropagation(); nextPage(); }}
                      disabled={currentIndex === spreads.length - 1}
                    >
                      <ChevronRight className="w-3.5 h-3.5 text-white" />
                    </button>
                  </div>
                )}
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
}
