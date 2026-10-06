"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SlidersHorizontal, Check, Eye, LayoutGrid } from "lucide-react";

// Massive library of highly curated images
const CARDS = [
  { id: "face", title: "behind the scenes", src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800", aspect: "aspect-[4/5]", width: "160px", tags: ["Portrait", "Film"] },
  { id: "lisbon", title: "Lisbon Streets", src: "/lisbon.jpg", aspect: "aspect-[3/4]", width: "190px", tags: ["Travel", "Europe"] },
  { id: "salad", title: "JAPANESE POTATO SALAD", src: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&q=80&w=800", aspect: "aspect-[5/4]", width: "220px", tags: ["Culinary", "3D"] },
  { id: "architecture", title: "Architecture", src: "/preview-architecture.png", aspect: "aspect-[4/3]", width: "240px", tags: ["Design", "Space"] },
  { id: "kyoto", title: "Kyoto Autumn", src: "/kyoto.jpg", aspect: "aspect-[4/5]", width: "170px", tags: ["Japan", "Nature"] },
  { id: "editorial", title: "Editorial", src: "/preview-editorial.png", aspect: "aspect-[3/4]", width: "180px", tags: ["Print", "Type"] },
  { id: "house", title: "Cedar House", src: "/house1.jpg", aspect: "aspect-[16/9]", width: "260px", tags: ["Real Estate", "Modern"] },
  { id: "objects", title: "Objects", src: "/preview-objects.png", aspect: "aspect-square", width: "190px", tags: ["Industrial", "Art"] },
  { id: "spread", title: "Journal Spread", src: "/spread1.jpg", aspect: "aspect-[3/4]", width: "160px", tags: ["Diary", "Film"] },
];

export default function VelocitySpringSystem() {
  const [activeCard, setActiveCard] = useState<string | null>(null);
  
  // Menu and Tool states
  const [isGridMode, setIsGridMode] = useState(false);
  const [valuesActive, setValuesActive] = useState(false);

  // Custom Physics
  const springConfig = { type: "spring", stiffness: 350, damping: 28, mass: 1.1 } as const;

  return (
    <div className="relative w-full h-screen bg-[#c8d4df] flex items-center justify-center overflow-hidden font-sans">
      
      {/* MacOS style blurred ambient background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div 
          animate={{ x: [-80, 80, -80], y: [-40, 40, -40] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute top-[0%] left-[-10%] w-[70%] h-[80%] bg-[#4fa1cf] rounded-full blur-[140px] mix-blend-multiply opacity-80" 
        />
        <motion.div 
          animate={{ x: [80, -80, 80], y: [40, -40, 40] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] right-[-10%] w-[70%] h-[70%] bg-[#4250a8] rounded-full blur-[160px] mix-blend-multiply opacity-80" 
        />
        <div className="absolute top-[20%] left-[25%] w-[50%] h-[50%] bg-[#f4eab4] rounded-full blur-[120px] mix-blend-overlay opacity-60" />
      </div>

      {/* Main Window */}
      <motion.div 
        layout
        animate={{ 
          backgroundColor: activeCard ? "#333333" : "#ffffff",
          scale: activeCard ? 0.97 : 1
        }}
        transition={springConfig}
        className="relative z-10 w-[94vw] h-[90vh] max-w-375 max-h-225 rounded-9 shadow-[0_40px_120px_rgba(0,0,0,0.35)] overflow-hidden flex flex-col transition-colors duration-700"
        onClick={() => {
          if (activeCard) setActiveCard(null);
        }}
      >
        {/* Top Controls Layer */}
        <div className="absolute top-8 right-8 flex items-center gap-3 z-50" onClick={e => e.stopPropagation()}>
          
          {/* Settings / Menu Button (Toggles Grid Mode) */}
          <motion.button 
            onClick={() => setIsGridMode(!isGridMode)}
            whileTap={{ scale: 0.9 }}
            animate={{ 
              backgroundColor: isGridMode ? "#111" : (activeCard ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.05)"),
              color: isGridMode ? "#fff" : (activeCard ? "#fff" : "#333")
            }}
            className="w-11 h-11 rounded-full flex items-center justify-center backdrop-blur-md transition-colors shadow-sm"
          >
            <SlidersHorizontal className="w-4.5 h-4.5" />
          </motion.button>

          {/* Values Toggle Button */}
          <motion.button 
            onClick={() => setValuesActive(!valuesActive)}
            whileTap={{ scale: 0.92 }}
            animate={{ 
              backgroundColor: valuesActive ? "#111" : (activeCard ? "rgba(255,255,255,0.15)" : "rgba(0,0,0,0.05)"),
              color: valuesActive ? "#fff" : (activeCard ? "#fff" : "#333"),
              boxShadow: valuesActive ? "0 8px 24px rgba(0,0,0,0.2)" : "none"
            }}
            className="px-6 h-11 rounded-full text-[13px] font-semibold flex items-center justify-center gap-2 backdrop-blur-md transition-colors"
          >
            {valuesActive ? <Eye className="w-4 h-4" /> : <LayoutGrid className="w-4 h-4" />}
            Values
          </motion.button>
        </div>

        {/* Inactive State: The Card Layouts */}
        <div className={`flex-1 flex flex-col relative z-10 w-full overflow-hidden ${isGridMode ? "justify-center" : "justify-end pb-24"}`}>
          
          {/* 
            We swap the layout based on `isGridMode`. 
            Framer Motion's `layout` on the children handles the exact rearrangement animation!
          */}
          <motion.div 
            layout
            className={`w-full ${
              isGridMode 
                ? "h-full overflow-y-auto no-scrollbar px-12 pt-24 pb-12" 
                : "overflow-x-auto no-scrollbar scroll-smooth px-[5vw] flex items-end"
            }`}
          >
            <motion.div 
              layout
              className={`flex ${
                isGridMode 
                  ? "flex-wrap items-center justify-center gap-6 max-w-300 mx-auto h-full" 
                  : "items-end justify-start gap-6 min-w-max h-112.5 pr-[10vw]"
              }`}
            >
              {CARDS.map((card, idx) => {
                const isActive = activeCard === card.id;
                
                // If a card is active, hide the others
                if (activeCard && !isActive) return (
                  <motion.div 
                    key={card.id} 
                    initial={{ opacity: 1, y: 0, scale: 1 }}
                    animate={{ opacity: 0, y: 40, scale: 0.85 }}
                    transition={{ duration: 0.5, ease: [0.32, 0.72, 0, 1] }}
                    className={`relative ${card.aspect} pointer-events-none`} 
                    style={{ width: card.width }}
                  />
                );
                
                // Placeholder to keep layout rigid when one is active
                if (isActive) return (
                  <div key={card.id} className={`relative ${card.aspect}`} style={{ width: card.width }} />
                );

                return (
                  <motion.div
                    layout
                    layoutId={`card-${card.id}`}
                    key={card.id}
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveCard(card.id);
                    }}
                    whileHover={{ y: isGridMode ? -8 : -24, scale: 1.05, zIndex: 10 }}
                    whileTap={{ scale: 0.95 }}
                    transition={springConfig}
                    className={`relative ${card.aspect} shrink-0 cursor-pointer rounded-4 overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.15)] group`}
                    style={{ width: card.width }}
                  >
                    <img src={card.src} alt={card.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    
                    {/* The "Values" Metadata Toggle Overlay */}
                    <AnimatePresence>
                      {valuesActive && (
                        <motion.div 
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 20 }}
                          className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-4"
                        >
                          <span className="text-white font-bold text-[12px] leading-tight mb-2">{card.title}</span>
                          <div className="flex gap-2">
                            {card.tags.map(t => (
                              <span key={t} className="px-2 py-1 bg-white/20 backdrop-blur-md rounded text-[8px] font-bold text-white uppercase tracking-wider">{t}</span>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </div>

        {/* Active State: The Expanded Card */}
        <AnimatePresence>
          {activeCard && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none"
            >
              {CARDS.filter(c => c.id === activeCard).map((card) => (
                <motion.div
                  layoutId={`card-${card.id}`}
                  key={`active-${card.id}`}
                  className="relative rounded-8 overflow-hidden shadow-[0_60px_140px_rgba(0,0,0,0.5)] cursor-pointer pointer-events-auto"
                  style={{ 
                    width: card.id === "salad" ? "740px" : "660px",
                    height: card.id === "salad" ? "740px" : "660px",
                    backgroundColor: card.id === "salad" ? "#f4f5e8" : "#fff" 
                  }}
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveCard(null);
                  }}
                  transition={springConfig}
                >
                  <img src={card.src} alt={card.title} className={`w-full h-full object-cover ${card.id === 'salad' ? 'opacity-30 mix-blend-multiply filter blur-[3px]' : ''}`} />
                  
                  {/* Overlay Title appearing on expand */}
                  <motion.div 
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.35, duration: 0.6, ease: "easeOut" }}
                    className="absolute top-8 left-8"
                  >
                    <span className={`text-[13px] font-bold uppercase tracking-wider ${card.id === 'salad' ? 'text-[#333]' : 'text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.8)] px-4 py-2 bg-black/30 backdrop-blur-md rounded-xl'}`}>
                      {card.title}
                    </span>
                  </motion.div>

                  {/* 🌟 Special Interaction for the Salad Card */}
                  {card.id === "salad" && (
                    <motion.div 
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.45, duration: 0.6 }}
                      className="absolute inset-0 pointer-events-none"
                    >
                      {/* Fake 3D Vegetable Blobs to mimic the video */}
                      <motion.div 
                        animate={{ y: [-6, 6, -6], rotate: [-2, 2, -2] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                        className="absolute top-[38%] left-[28%] w-22.5 h-45 bg-linear-to-br from-[#2a684b] to-[#123326] rounded-[45px] shadow-[inset_-12px_-12px_24px_rgba(0,0,0,0.5),0_24px_48px_rgba(0,0,0,0.2)] rotate-[-15deg]" 
                      /> {/* Cucumber */}
                      
                      <motion.div 
                        animate={{ y: [5, -5, 5], rotate: [2, -2, 2] }} transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                        className="absolute top-[30%] left-[44%] w-15 h-60 bg-linear-to-br from-[#fc7960] to-[#c7432c] rounded-7.5 shadow-[inset_-10px_-10px_20px_rgba(0,0,0,0.3),0_24px_48px_rgba(0,0,0,0.2)] rotate-25" 
                      /> {/* Carrot */}
                      
                      <motion.div 
                        animate={{ y: [-4, 4, -4], rotate: [-1, 1, -1] }} transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                        className="absolute top-[58%] left-[47%] w-35 h-25 bg-linear-to-br from-[#d49988] to-[#9c6353] rounded-15 shadow-[inset_-14px_-14px_28px_rgba(0,0,0,0.4),0_24px_48px_rgba(0,0,0,0.3)] rotate-[-10deg]" 
                      /> {/* Potato */}
                      
                      <motion.div 
                        animate={{ y: [4, -4, 4], rotate: [1, -1, 1] }} transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                        className="absolute top-[60%] left-[64%] w-32.5 h-27.5 bg-linear-to-br from-[#9c1e52] to-[#540c29] rounded-[60px_60px_20px_20px] shadow-[inset_-18px_-12px_36px_rgba(0,0,0,0.6),0_24px_48px_rgba(0,0,0,0.4)]" 
                      /> {/* Onion */}

                      {/* SVG Annotation Lines & Labels */}
                      <svg className="absolute inset-0 w-full h-full" style={{ overflow: 'visible' }}>
                        
                        {/* Cucumber Line */}
                        <motion.path 
                          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 0.9, duration: 1.2, ease: [0.32, 0.72, 0, 1] }}
                          d="M 280,380 Q 320,380 300,450" fill="none" stroke="#222" strokeWidth="1.5" strokeLinecap="round"
                        />
                        <motion.text initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.3 }} x="190" y="384" fontSize="11" fill="#222" fontWeight="800" letterSpacing="0.05em">CUCUMBER</motion.text>

                        {/* Carrot Line */}
                        <motion.path 
                          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1.0, duration: 1.2, ease: [0.32, 0.72, 0, 1] }}
                          d="M 400,300 Q 430,280 430,320" fill="none" stroke="#222" strokeWidth="1.5" strokeLinecap="round"
                        />
                        <motion.text initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.4 }} x="340" y="295" fontSize="11" fill="#222" fontWeight="800" letterSpacing="0.05em">CARROT</motion.text>

                        {/* Potato Line */}
                        <motion.path 
                          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1.1, duration: 1.2, ease: [0.32, 0.72, 0, 1] }}
                          d="M 520,470 Q 580,460 580,430 L 610,430" fill="none" stroke="#222" strokeWidth="1.5" strokeLinecap="round"
                        />
                        <motion.text initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.5 }} x="620" y="434" fontSize="11" fill="#222" fontWeight="800" letterSpacing="0.05em">POTATO</motion.text>

                        {/* Onion Line */}
                        <motion.path 
                          initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 1.2, duration: 1.2, ease: [0.32, 0.72, 0, 1] }}
                          d="M 570,610 L 610,610" fill="none" stroke="#222" strokeWidth="1.5" strokeLinecap="round"
                        />
                        <motion.text initial={{ opacity: 0, x: 10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 1.6 }} x="620" y="614" fontSize="11" fill="#222" fontWeight="800" letterSpacing="0.05em">ONION</motion.text>

                      </svg>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

      </motion.div>

    </div>
  );
}
