'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export type HoverItem = {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  image: string;
  color: string;
};

interface KineticHoverProps {
  items: HoverItem[];
}

export function KineticHover({ items }: KineticHoverProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = items[activeIndex];

  return (
    <section className="grid grid-cols-1 md:grid-cols-[1.15fr_0.85fr] gap-12 md:gap-[8vw] items-start w-full" aria-label="Selected projects">
      {/* Left List */}
      <div className="flex flex-col w-full min-w-0 relative">
        <div className="grid grid-cols-[12%_1fr_24%] gap-3 text-[#777671] text-[10px] uppercase tracking-[0.06em] border-b border-[#d6d4cf] pb-2 mb-2 px-3">
          <span>Index</span>
          <span>Project</span>
          <span>Discipline</span>
        </div>
        
        {items.map((item, index) => {
          const isActive = activeIndex === index;
          return (
            <div
              key={item.id}
              onMouseEnter={() => setActiveIndex(index)}
              onFocus={() => setActiveIndex(index)}
              tabIndex={0}
              className={`group relative grid grid-cols-[12%_1fr_24%_18px] gap-3 items-center px-3 py-[21px] border-b border-[#d6d4cf] cursor-pointer transition-all duration-300 ease-out outline-none ${isActive ? 'text-black' : 'text-[#171717]'}`}
            >
              {/* Fluid Active Background */}
              {isActive && (
                <motion.div 
                  layoutId="kinetic-active-bg" 
                  className="absolute inset-0 bg-[#eae9e5] z-0" 
                  transition={{ type: "spring", stiffness: 400, damping: 40 }}
                />
              )}
              
              <span className="relative z-10 text-[#777671] text-[10px] uppercase tracking-[0.06em] font-medium">{item.number}</span>
              <span className={`relative z-10 text-[clamp(17px,1.7vw,24px)] tracking-[-0.04em] transition-all duration-300 ${isActive ? 'underline underline-offset-4 translate-x-1' : 'group-hover:translate-x-1'}`}>
                {item.title}
              </span>
              <span className="relative z-10 text-[#777671] text-[10px] uppercase tracking-[0.06em]">{item.category}</span>
              
              <span className={`relative z-10 text-[15px] transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0'}`}>
                ↗
              </span>
            </div>
          );
        })}
      </div>

      {/* Right PreviewPane */}
      <aside className="sticky top-8 w-full" aria-live="polite">
        <AnimatePresence mode="wait">
          <motion.div
            key={active.id}
            initial={{ opacity: 0, y: 15, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.98 }}
            transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
            className="bg-[#171717] text-[#f4f3f0] rounded-xl p-3 shadow-[0_30px_60px_rgba(23,23,23,0.25)] overflow-hidden"
          >
            <div 
              className="relative aspect-[1.16] overflow-hidden rounded-lg transition-colors duration-500 ease-in-out group"
              style={{ backgroundColor: active.color }}
            >
              <motion.div
                initial={{ scale: 1.15, filter: 'blur(4px)' }}
                animate={{ scale: 1, filter: 'blur(0px)' }}
                transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
                className="w-full h-full relative origin-center"
              >
                <Image 
                  src={active.image} 
                  alt={active.title} 
                  fill 
                  sizes="(max-width: 800px) 100vw, 42vw" 
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  priority
                />
              </motion.div>
              <div className="absolute top-4 right-4 bg-[#171717]/90 backdrop-blur-md text-white rounded-full px-3 py-1.5 text-[10px] tracking-[0.08em] uppercase font-medium z-10 shadow-lg border border-white/10">
                {active.number} / {items.length.toString().padStart(2, '0')}
              </div>
            </div>
            
            <div className="flex justify-between gap-6 pt-6 pb-4 px-2">
              <div>
                <p className="text-[#969590] text-[10px] uppercase tracking-[0.08em] mb-2">Currently viewing</p>
                <motion.h2 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.15, duration: 0.5, ease: 'easeOut' }}
                  className="text-[24px] tracking-[-0.05em] font-normal m-0 text-white"
                >
                  {active.title}
                </motion.h2>
              </div>
              <motion.p 
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.5, ease: 'easeOut' }}
                className="max-w-[150px] text-[#aaa9a4] text-[12px] leading-[1.5] mt-1"
              >
                {active.description}
              </motion.p>
            </div>
          </motion.div>
        </AnimatePresence>
      </aside>
    </section>
  );
}
