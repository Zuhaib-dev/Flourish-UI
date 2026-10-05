'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Flower SVGs --- //

const flowerColors = [
  '#f4a261', // Orange
  '#e76f8f', // Pink
  '#f9a8d4', // Light Pink
  '#8d82ce', // Purple
  '#e7bd55', // Yellow
  '#7cbf8b', // Greenish
  '#93c5fd', // Blue
  '#fcd34d', // Bright Yellow
];

const Stem = () => (
  <>
    <path d="M50,50 Q45,90 55,130" fill="none" stroke="#4ade80" strokeWidth="4" strokeLinecap="round" />
    <path d="M48,80 C30,80 20,65 20,55 C30,65 40,75 48,80 Z" fill="#22c55e" />
    <path d="M52,95 C70,95 80,80 80,70 C70,80 60,90 52,95 Z" fill="#22c55e" />
  </>
);

const Daisy = ({ color, className }: { color: string; className?: string }) => (
  <svg width="48" height="64" viewBox="0 0 100 130" className={`overflow-visible drop-shadow-md ${className || ''}`}>
    <Stem />
    <g transform="translate(50, 50)">
      {Array.from({ length: 8 }).map((_, i) => (
        <ellipse key={i} rx="12" ry="35" fill={color} transform={`rotate(${i * 45})`} opacity="0.9" />
      ))}
      <circle r="15" fill="#FACC15" />
      <circle r="10" fill="#EAB308" />
    </g>
  </svg>
);

const Lily = ({ color, className }: { color: string; className?: string }) => (
  <svg width="48" height="64" viewBox="0 0 100 130" className={`overflow-visible drop-shadow-md ${className || ''}`}>
    <Stem />
    <g transform="translate(50, 50)">
      {Array.from({ length: 6 }).map((_, i) => (
        <path key={i} d="M0,0 C15,-20 15,-45 0,-45 C-15,-45 -15,-20 0,0 Z" fill={color} transform={`rotate(${i * 60})`} opacity="0.9" />
      ))}
      <circle r="12" fill="#FACC15" />
      <circle r="6" fill="#CA8A04" />
    </g>
  </svg>
);

const Pointy = ({ color, className }: { color: string; className?: string }) => (
  <svg width="48" height="64" viewBox="0 0 100 130" className={`overflow-visible drop-shadow-md ${className || ''}`}>
    <Stem />
    <g transform="translate(50, 50)">
      {Array.from({ length: 12 }).map((_, i) => (
        <path key={i} d="M0,0 L8,-25 L0,-45 L-8,-25 Z" fill={color} transform={`rotate(${i * 30})`} opacity="0.9" />
      ))}
      <circle r="10" fill="#CA8A04" />
    </g>
  </svg>
);

const Poppy = ({ color, className }: { color: string; className?: string }) => (
  <svg width="48" height="64" viewBox="0 0 100 130" className={`overflow-visible drop-shadow-md ${className || ''}`}>
    <Stem />
    <g transform="translate(50, 50)">
      {Array.from({ length: 4 }).map((_, i) => (
        <path key={i} d="M0,0 C30,-10 40,-40 0,-45 C-40,-40 -30,-10 0,0 Z" fill={color} transform={`rotate(${i * 90})`} opacity="0.85" />
      ))}
      <circle r="12" fill="#333" />
      <circle r="6" fill="#FACC15" />
    </g>
  </svg>
);

const flowerTypes = [Daisy, Lily, Pointy, Poppy];

// --- Flower Select Component --- //

type Bloom = {
  id: string;
  x: number;
  y: number;
  color: string;
  delay: number;
  FlowerComponent: React.ComponentType<{ color: string; className?: string }>;
  rotation: number;
  scale: number;
  flip: number;
};

interface BloomSelectProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  maxBlooms?: number;
  bloomSpread?: number;
}

export function BloomSelect({ children, className = '', maxBlooms = 45, bloomSpread = 25, ...props }: BloomSelectProps) {
  const [blooms, setBlooms] = useState<Bloom[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleSelection = () => {
      const selection = window.getSelection();
      if (!selection || selection.isCollapsed || !selection.toString().trim()) {
        setBlooms([]);
        return;
      }

      // Check if the selection overlaps with our container
      if (containerRef.current && !containerRef.current.contains(selection.anchorNode)) {
        return;
      }

      const range = selection.getRangeAt(0);
      const rects = Array.from(range.getClientRects()).filter(
        (rect) => rect.width > 0 && rect.height > 0
      );

      const containerRect = containerRef.current?.getBoundingClientRect();
      if (!containerRect) return;

      const positions = rects.flatMap((rect) => {
        // Space blooms evenly along the selected text width
        const count = Math.max(2, Math.ceil(rect.width / 40));
        return Array.from({ length: count }, (_, index) => {
          const x = rect.left - containerRect.left + rect.width * ((index + 0.5) / count);
          return [
            // Top bloom
            { x: x + (Math.random() * bloomSpread - bloomSpread / 2) - 24, y: rect.top - containerRect.top - 50 + (Math.random() * 15 - 7.5) },
            // Bottom bloom
            { x: x + (Math.random() * bloomSpread - bloomSpread / 2) - 24, y: rect.bottom - containerRect.top - 10 + (Math.random() * 15 - 7.5) },
          ];
        }).flat();
      });

      // Limit blooms for performance and aesthetics
      const selectedPositions = positions
        .sort(() => Math.random() - 0.5)
        .slice(0, maxBlooms);

      const newBlooms = selectedPositions.map(({ x, y }, index) => {
        return {
          id: `bloom-${Date.now()}-${index}`,
          x,
          y,
          color: flowerColors[Math.floor(Math.random() * flowerColors.length)],
          delay: index * 0.02,
          FlowerComponent: flowerTypes[Math.floor(Math.random() * flowerTypes.length)],
          rotation: Math.random() * 30 - 15, // slight rotation for natural look
          scale: 0.6 + Math.random() * 0.5,
          flip: Math.random() > 0.5 ? 1 : -1, // flip horizontally randomly
        };
      });

      setBlooms(newBlooms);
    };

    document.addEventListener('mouseup', handleSelection);
    document.addEventListener('touchend', handleSelection);
    document.addEventListener('keyup', handleSelection);

    return () => {
      document.removeEventListener('mouseup', handleSelection);
      document.removeEventListener('touchend', handleSelection);
      document.removeEventListener('keyup', handleSelection);
    };
  }, [maxBlooms, bloomSpread]);

  return (
    <div className={`relative ${className}`} ref={containerRef} {...props}>
      {children}
      <div className="pointer-events-none absolute inset-0 z-50 overflow-visible">
        <AnimatePresence>
          {blooms.map((bloom) => (
            <motion.div
              key={bloom.id}
              initial={{ 
                scale: 0, 
                opacity: 0, 
                y: bloom.y + 30, 
                x: bloom.x, 
                rotate: bloom.rotation - 20,
                scaleX: bloom.flip * 0.5
              }}
              animate={{ 
                scale: bloom.scale, 
                opacity: 1, 
                y: bloom.y, 
                x: bloom.x, 
                rotate: bloom.rotation,
                scaleX: bloom.flip * bloom.scale
              }}
              exit={{ 
                scale: 0, 
                opacity: 0, 
                y: bloom.y + 40, 
                transition: { duration: 0.4, ease: "easeIn" } 
              }}
              transition={{
                type: 'spring',
                stiffness: 250,
                damping: 15,
                delay: bloom.delay,
              }}
              className="absolute drop-shadow-xl"
              style={{ top: 0, left: 0, transformOrigin: 'center 80%' }}
            >
              <bloom.FlowerComponent color={bloom.color} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}

export default BloomSelect;
