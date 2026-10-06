"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";

const pages = [
  { id: 1, image: "/1.jpg", caption: "Tokyo Cafe" },
  { id: 2, image: "/2.jpg", caption: "Alpine Mist" },
  { id: 3, image: "/3.jpg", caption: "Morning Light" },
];

export default function DigitalJournal() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isPlaying) {
      timer = setInterval(() => {
        nextPage();
      }, 3000);
    }
    return () => clearInterval(timer);
  }, [isPlaying, currentIndex]);

  const nextPage = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % pages.length);
  };

  const prevPage = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + pages.length) % pages.length);
  };

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? "20%" : "-20%",
      rotateY: dir > 0 ? 15 : -15,
      z: -100,
      opacity: 0,
      boxShadow: "0px 0px 0px rgba(0,0,0,0)",
    }),
    center: {
      x: 0,
      rotateY: 0,
      z: 0,
      opacity: 1,
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 40px rgba(0,0,0,0.1)",
      transition: {
        x: { type: "spring", stiffness: 200, damping: 25 },
        opacity: { duration: 0.4 },
        rotateY: { type: "spring", stiffness: 150, damping: 20 },
      },
    },
    exit: (dir: number) => ({
      x: dir < 0 ? "20%" : "-20%",
      rotateY: dir < 0 ? 15 : -15,
      z: -100,
      opacity: 0,
      boxShadow: "0px 0px 0px rgba(0,0,0,0)",
      transition: {
        x: { type: "spring", stiffness: 200, damping: 25 },
        opacity: { duration: 0.4 },
        rotateY: { type: "spring", stiffness: 150, damping: 20 },
      },
    }),
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 overflow-hidden font-sans">
      {/* Header Context */}
      <div className="mb-10 text-center flex flex-col items-center">
        <h1 className="font-serif text-[42px] font-medium tracking-tight text-neutral-800 leading-none mb-4">
          Journal
        </h1>
        <p className="font-sans text-[11px] font-bold tracking-[0.2em] text-neutral-500 uppercase">
          {pages.length} Pages
        </p>
      </div>

      {/* Interactive Journal Container */}
      <div className="relative w-full max-w-[400px] aspect-[3/4] group perspective-[1200px]">
        {/* Navigation Overlay (Visible on Hover/Interaction) */}
        <div className="absolute inset-0 z-20 flex items-center justify-between px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevPage();
            }}
            className="w-10 h-10 rounded-full bg-black/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-black/40 transition-colors pointer-events-auto"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              setIsPlaying(!isPlaying);
            }}
            className="w-12 h-12 rounded-full bg-black/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-black/40 transition-colors pointer-events-auto"
          >
            {isPlaying ? (
              <Pause className="w-5 h-5" fill="currentColor" />
            ) : (
              <Play className="w-5 h-5 ml-1" fill="currentColor" />
            )}
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              nextPage();
            }}
            className="w-10 h-10 rounded-full bg-black/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-black/40 transition-colors pointer-events-auto"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Page Stack */}
        <div className="relative w-full h-full transform-style-3d">
          <AnimatePresence initial={false} custom={direction} mode="popLayout">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              className="absolute inset-0 w-full h-full rounded-[24px] overflow-hidden bg-neutral-200 cursor-grab active:cursor-grabbing border-[4px] border-white"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.2}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = offset.x;
                if (swipe < -50) {
                  nextPage();
                } else if (swipe > 50) {
                  prevPage();
                }
              }}
            >
              {/* Full Bleed Image */}
              <img
                src={pages[currentIndex].image}
                alt={pages[currentIndex].caption}
                className="w-full h-full object-cover pointer-events-none"
              />
              
              {/* Subtle Inner Shadow for Book Feel */}
              <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.1)] pointer-events-none" />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
