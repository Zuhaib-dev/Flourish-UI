"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

const leaves = [
  {
    id: 1,
    front: (
      <div className="w-full h-full bg-[#faf9f7] flex flex-col items-center justify-center relative overflow-hidden p-8">
        <div className="absolute inset-3 border border-neutral-200 rounded-sm" />
        <h1 className="font-serif text-6xl font-bold tracking-tight text-neutral-800 mb-6">Journal</h1>
        <p className="font-sans text-xs tracking-[0.4em] text-neutral-400 uppercase">
          Volume I
        </p>
        <div className="absolute bottom-12 left-12 right-12 flex justify-between text-[10px] text-neutral-400 font-sans uppercase tracking-widest">
          <span>2026 Edition</span>
          <span>Flourish UI</span>
        </div>
      </div>
    ),
    back: (
      <div className="w-full h-full p-5 bg-[#faf9f7]">
        <img src="/1.jpg" className="w-full h-full object-cover rounded-sm shadow-sm" />
      </div>
    )
  },
  {
    id: 2,
    front: (
      <div className="w-full h-full p-5 bg-[#faf9f7]">
        <img src="/spread1.jpg" className="w-full h-full object-cover rounded-sm shadow-sm" />
      </div>
    ),
    back: (
      <div className="w-full h-full p-5 bg-[#faf9f7]">
        <img src="/2.jpg" className="w-full h-full object-cover rounded-sm shadow-sm" />
      </div>
    )
  },
  {
    id: 3,
    front: (
      <div className="w-full h-full p-5 bg-[#faf9f7]">
        <img src="/spread2.jpg" className="w-full h-full object-cover rounded-sm shadow-sm" />
      </div>
    ),
    back: (
      <div className="w-full h-full p-5 bg-[#faf9f7]">
        <img src="/3.jpg" className="w-full h-full object-cover rounded-sm shadow-sm" />
      </div>
    )
  },
  {
    id: 4,
    front: (
      <div className="w-full h-full p-5 bg-[#faf9f7]">
        <img src="/spread3.jpg" className="w-full h-full object-cover rounded-sm shadow-sm" />
      </div>
    ),
    back: (
      <div className="w-full h-full bg-[#faf9f7] flex items-center justify-center relative">
        <div className="absolute inset-3 border border-neutral-200 rounded-sm" />
        <div className="w-20 h-20 rounded-full border border-neutral-200 flex items-center justify-center">
          <span className="font-serif text-3xl text-neutral-300 italic">Fin</span>
        </div>
      </div>
    )
  }
];

export default function DigitalJournal() {
  const [currentLeaf, setCurrentLeaf] = useState(0);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#eae8e3] p-8 font-sans">
      
      {/* 3D Scene Container */}
      <div 
        className="relative w-full max-w-225 aspect-[2/1.3] perspective-[2500px]"
      >
        {/* Hardcover Base */}
        <div className="absolute inset-0 bg-[#d8d5cd] rounded-xl shadow-[0_30px_60px_-15px_rgba(0,0,0,0.4)] pointer-events-none border border-black/10 flex items-center justify-center">
           {/* Center crease of hardcover */}
           <div className="w-1 h-full bg-black/10 shadow-[inset_1px_0_3px_rgba(0,0,0,0.2)]" />
        </div>

        {/* Leaves Wrapper - slightly inset to show cover edges */}
        <div className="absolute inset-y-3 left-4 right-4" style={{ transformStyle: "preserve-3d" }}>
          
          {/* Rings / Spiral Binding */}
          <div className="absolute left-1/2 top-4 bottom-4 w-6 -translate-x-1/2 flex flex-col justify-between z-50 pointer-events-none drop-shadow-md">
            {[...Array(14)].map((_, i) => (
              <div 
                key={i} 
                className="w-full h-2.5 rounded-full bg-linear-to-b from-[#fdfdfd] via-[#999] to-[#444] shadow-[0_2px_4px_rgba(0,0,0,0.5)] border border-black/30" 
              />
            ))}
          </div>

          {/* The Pages (Leaves) */}
          {leaves.map((leaf, index) => {
            const isFlipped = index < currentLeaf;
            // zIndex logic ensures pages stack correctly whether they are on the right or left.
            const zIndex = isFlipped ? index : leaves.length - index;

            return (
              <motion.div
                key={leaf.id}
                className="absolute right-0 w-1/2 h-full cursor-pointer group"
                style={{ transformStyle: "preserve-3d", transformOrigin: "left" }}
                initial={false}
                animate={{ 
                  rotateY: isFlipped ? -180 : 0,
                  zIndex
                }}
                transition={{ 
                  type: "spring", 
                  stiffness: 45, 
                  damping: 14,
                  mass: 1
                }}
                onClick={() => {
                  if (isFlipped) setCurrentLeaf(index); // Flip back
                  else setCurrentLeaf(index + 1); // Flip forward
                }}
              >
                
                {/* FRONT OF PAGE */}
                <div 
                  className="absolute inset-0 bg-[#faf9f7] rounded-r-md overflow-hidden shadow-[inset_-2px_0_10px_rgba(0,0,0,0.02),2px_0_10px_rgba(0,0,0,0.05)] border border-black/5"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  {leaf.front}
                  
                  {/* Dynamic Lighting Overlay */}
                  <motion.div 
                    className="absolute inset-0 bg-linear-to-l from-transparent via-transparent to-black/20 pointer-events-none"
                    animate={{ opacity: isFlipped ? 1 : 0 }}
                    transition={{ duration: 0.6 }}
                  />
                  {/* Hover fold hint */}
                  <div className="absolute inset-0 bg-black/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </div>

                {/* BACK OF PAGE */}
                <div 
                  className="absolute inset-0 bg-[#faf9f7] rounded-l-md overflow-hidden shadow-[inset_2px_0_10px_rgba(0,0,0,0.02),-2px_0_10px_rgba(0,0,0,0.05)] border border-black/5"
                  style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
                >
                  {leaf.back}
                  
                  {/* Dynamic Lighting Overlay */}
                  <motion.div 
                    className="absolute inset-0 bg-linear-to-r from-transparent via-transparent to-black/20 pointer-events-none"
                    animate={{ opacity: isFlipped ? 0 : 1 }}
                    transition={{ duration: 0.6 }}
                  />
                  {/* Hover fold hint */}
                  <div className="absolute inset-0 bg-black/2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </div>

              </motion.div>
            );
          })}
        </div>
      </div>
      
      {/* Help Text */}
      <p className="fixed bottom-8 text-neutral-400 text-xs font-medium tracking-widest uppercase pointer-events-none">
        Click pages to flip
      </p>
    </div>
  );
}
