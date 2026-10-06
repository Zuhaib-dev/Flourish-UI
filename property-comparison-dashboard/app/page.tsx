"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowLeft, MoreHorizontal, Maximize2, Sparkles, Home, 
  Search, BookOpen, Layers, Bookmark, Download, MapPin
} from "lucide-react";

const properties = [
  { 
    id: 1, 
    address: "718 Elm St", 
    price: "$472,000", 
    tag: "B3", 
    beds: "3 bed / 2 ba", 
    img: "/house1.jpg",
    details: "Single-family home · 0.28-acre lot · Built in 1998",
    description: "A cozy three-bedroom home with 2 bathrooms and 1,800 sq ft of living space. Great starter home with a recently updated kitchen and a beautiful fenced backyard."
  },
  { 
    id: 2, 
    address: "305 Maple Dr", 
    price: "$491,000", 
    tag: "B3", 
    beds: "4 bed / 2.5 ba", 
    img: "/house2.jpg",
    details: "Single-family home · 0.40-acre lot · Built in 2010",
    description: "Beautifully maintained two-story property featuring a wrap-around porch, open-concept living area, and a spacious garage. Perfect for a growing family."
  },
  { 
    id: 3, 
    address: "129 Cedar Ln", 
    price: "$488,500", 
    tag: "B3", 
    beds: "3 bed / 2 ba", 
    img: "/house3.jpg",
    details: "Single-family home · 0.31-acre lot · Built in 2002",
    description: "Stunning red brick home nestled in a quiet cul-de-sac. Features a brand new roof, hardwood floors throughout, and a beautifully manicured front lawn."
  },
  { 
    id: 4, 
    address: "742 Evergreen Ter", 
    price: "$485,000", 
    tag: "B4", 
    beds: "3 bed / 2 ba", 
    img: "/house4.jpg",
    details: "Single-family home · 0.33-acre lot · Built in 2015",
    description: "Modern suburban living at its finest. This property boasts high ceilings, smart home integration, and a massive driveway suitable for multiple vehicles."
  },
  { 
    id: 5, 
    address: "310 Oak Ave", 
    price: "$510,000", 
    tag: "B4", 
    beds: "4 bed / 2.5 ba", 
    img: "/house5.jpg",
    details: "Single-family home · 0.35-acre lot · Built in 2005",
    description: "A four-bedroom home with 2.5 bathrooms and 2,200 sq ft of living space. It offers the Martins more room to work with. Compare the added space with the lot size adjustments."
  },
];

export default function PropertyDashboard() {
  const [activeId, setActiveId] = useState(5);
  const activeProp = properties.find(p => p.id === activeId)!;

  return (
    <div className="flex h-screen w-full bg-[#f6f5ef] p-4 gap-6 font-sans overflow-hidden selection:bg-blue-100">
      
      {/* 1. Left Navigation Sidebar */}
      <nav className="w-16 h-full bg-white rounded-3xl flex flex-col items-center py-6 shadow-[0_8px_40px_rgba(0,0,0,0.03)] border border-black/3 z-20">
        <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center mb-8 shadow-sm border border-indigo-100/50 cursor-pointer hover:bg-indigo-100 transition-colors">
          <Sparkles className="w-4 h-4 text-indigo-500" />
        </div>
        
        <div className="flex flex-col gap-4 text-neutral-400 w-full px-3">
          <button className="hover:text-neutral-900 hover:bg-neutral-50 transition-all p-2.5 rounded-xl flex justify-center"><Home className="w-5 h-5" /></button>
          <button className="hover:text-neutral-900 hover:bg-neutral-50 transition-all p-2.5 rounded-xl flex justify-center"><Search className="w-5 h-5" /></button>
          <button className="bg-neutral-100 text-neutral-900 p-2.5 rounded-xl flex justify-center shadow-sm border border-black/2"><BookOpen className="w-5 h-5" /></button>
          <button className="hover:text-neutral-900 hover:bg-neutral-50 transition-all p-2.5 rounded-xl flex justify-center"><Layers className="w-5 h-5" /></button>
          <button className="hover:text-neutral-900 hover:bg-neutral-50 transition-all p-2.5 rounded-xl flex justify-center"><Bookmark className="w-5 h-5" /></button>
        </div>

        <div className="mt-auto w-full px-3">
          <button className="hover:text-neutral-900 hover:bg-neutral-50 transition-all p-2.5 rounded-xl flex justify-center w-full"><Sparkles className="w-5 h-5" /></button>
        </div>
      </nav>

      {/* 2. Middle Column: Comparison List */}
      <div className="flex-1 max-w-145 flex flex-col pt-1 h-full z-10">
        
        {/* Top Header */}
        <div className="flex items-center justify-between mb-8 px-1">
          <div className="flex items-center gap-3">
            <button className="w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-black/4 hover:bg-neutral-50 transition-all active:scale-95 text-neutral-500 hover:text-neutral-900">
              <ArrowLeft className="w-4 h-4" />
            </button>
            <div className="bg-white h-9 px-4 rounded-full flex items-center gap-2 shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-black/4">
              <span className="font-semibold text-[13.5px] text-[#222] tracking-tight">Martins — Home Search</span>
              <div className="bg-blue-50/80 text-blue-700 text-[10px] font-bold px-2 py-0.5 rounded-md flex items-center gap-1 border border-blue-100/50 uppercase tracking-wide">
                V1.2
                <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
              </div>
            </div>
          </div>
          <button className="w-9 h-9 bg-white rounded-full flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-black/4 hover:bg-neutral-50 transition-all active:scale-95 text-neutral-500 hover:text-neutral-900">
            <MoreHorizontal className="w-4 h-4" />
          </button>
        </div>

        {/* Bullet Points */}
        <div className="mb-6 px-3 space-y-2.5">
          <div className="flex items-start gap-2.5 group">
            <span className="text-neutral-300 mt-1.5 text-[8px] group-hover:text-neutral-500 transition-colors">●</span>
            <p className="text-[14.5px] text-neutral-600 font-medium tracking-tight">Adjusted -$5,000 for smaller lot size vs 305 Maple Dr</p>
          </div>
          <div className="flex items-start gap-2.5 group">
            <span className="text-neutral-300 mt-1.5 text-[8px] group-hover:text-neutral-500 transition-colors">●</span>
            <p className="text-[14.5px] text-neutral-600 font-medium tracking-tight">Median adjusted comp value: <span className="text-neutral-900 font-semibold">$487,200</span></p>
          </div>
        </div>

        {/* Table Card */}
        <div className="bg-white rounded-3xl shadow-[0_8px_40px_rgba(0,0,0,0.03)] border border-black/3 flex flex-col flex-1 overflow-hidden min-h-0 relative">
          
          {/* Card Header */}
          <div className="px-6 pt-7 pb-5 flex items-center justify-between">
            <h2 className="text-[16px] font-semibold text-[#222] tracking-tight">Property Comparison</h2>
            <div className="flex items-center gap-2.5">
              <button className="w-8 h-8 rounded-lg border border-black/6 flex items-center justify-center hover:bg-neutral-50 transition-all active:scale-95 text-neutral-500 shadow-sm">
                <Download className="w-3.5 h-3.5" />
              </button>
              <button className="bg-[#222] text-white text-[13px] font-semibold px-4 h-8 rounded-lg flex items-center gap-2 hover:bg-black transition-all active:scale-95 shadow-[0_2px_8px_rgba(0,0,0,0.12)]">
                Expand table
                <Maximize2 className="w-3.5 h-3.5 opacity-80" />
              </button>
            </div>
          </div>

          {/* Table Headers */}
          <div className="grid grid-cols-[1fr_110px_110px] px-6 py-2.5 bg-[#f6f5ef]/40 border-y border-black/3 text-[12px] font-semibold text-neutral-500 tracking-wide uppercase">
            <div>Property</div>
            <div>Price</div>
            <div>Beds / baths</div>
          </div>

          {/* Table Rows (Interactive) */}
          <div className="flex-1 overflow-y-auto relative py-1">
            {properties.map((prop) => {
              const isActive = prop.id === activeId;
              
              return (
                <div 
                  key={prop.id} 
                  onClick={() => setActiveId(prop.id)}
                  className="relative grid grid-cols-[1fr_110px_110px] items-center px-6 py-3.5 cursor-pointer group"
                >
                  {/* Subtle hover background (only when not active) */}
                  {!isActive && (
                    <div className="absolute inset-x-2 inset-y-0.5 rounded-xl bg-neutral-50 opacity-0 group-hover:opacity-100 transition-opacity" />
                  )}

                  {/* Highlight Bar and Background for Active Row */}
                  {isActive && (
                    <motion.div 
                      layoutId="active-row-bg"
                      className="absolute inset-x-2 inset-y-0.5 rounded-xl bg-blue-50/40 border border-blue-100/50"
                      initial={false}
                      transition={{ type: "spring", stiffness: 400, damping: 35 }}
                    />
                  )}
                  {isActive && (
                    <motion.div 
                      layoutId="active-row-indicator"
                      className="absolute left-2 top-2 bottom-2 w-1 rounded-full bg-blue-500 z-10"
                      initial={false}
                      transition={{ type: "spring", stiffness: 400, damping: 35 }}
                    />
                  )}

                  <div className="flex items-center gap-3.5 relative z-10 pl-1">
                    <img src={prop.img} alt={prop.address} className="w-12 h-10 rounded-lg object-cover border border-black/6 shadow-[0_2px_8px_rgba(0,0,0,0.06)]" />
                    <span className={`text-[14.5px] font-semibold tracking-tight transition-colors ${isActive ? 'text-blue-900' : 'text-[#222]'}`}>
                      {prop.address}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 relative z-10">
                    <span className={`px-2.5 py-1 rounded-md text-[13px] font-bold shadow-sm border transition-colors
                      ${isActive ? 'bg-blue-100/50 text-blue-700 border-blue-200/50' : 'bg-[#fff5e6] text-orange-900/80 border-orange-200/30'}
                    `}>
                      {prop.price}
                    </span>
                    <span className="text-[12px] font-bold text-neutral-400">{prop.tag}</span>
                  </div>

                  <div className={`text-[13.5px] relative z-10 transition-colors ${isActive ? 'text-blue-700 font-semibold' : 'text-neutral-500 font-medium'}`}>
                    {prop.beds}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Pagination */}
          <div className="p-4 border-t border-black/3 flex items-center justify-between bg-white/50">
            <div className="w-48 h-1.5 bg-neutral-100 rounded-full overflow-hidden ml-3 shadow-inner">
              <div className="w-1/2 h-full bg-neutral-300 rounded-full" />
            </div>
            <div className="flex items-center gap-3 text-[13px] font-semibold">
              <div className="flex gap-2">
                <button className="w-8 h-8 rounded-lg bg-white border border-black/6 shadow-sm flex items-center justify-center text-[#222]">1</button>
                <button className="w-8 h-8 rounded-lg flex items-center justify-center text-neutral-400 hover:text-neutral-800 hover:bg-neutral-50 transition-colors">2</button>
              </div>
              <button className="h-8 px-3.5 rounded-lg bg-white border border-black/6 shadow-[0_2px_6px_rgba(0,0,0,0.03)] flex items-center gap-1.5 text-[#222] hover:bg-neutral-50 transition-all active:scale-95">
                Next <ArrowLeft className="w-3.5 h-3.5 rotate-180 opacity-50" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Resize Handle (Visual Only) */}
      <div className="w-8 flex items-center justify-center h-full opacity-60">
        <div className="w-1 h-12 bg-black/5 rounded-full" />
      </div>

      {/* 3. Right Column: Detail View */}
      <div className="flex-[1.5] h-full flex flex-col pt-1 pb-2 z-10">
        
        {/* Top Breadcrumb */}
        <div className="flex items-center gap-3 mb-8 px-1">
          <div className="bg-white h-9 px-4 rounded-full flex items-center gap-2 shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-black/4">
            <span className="font-semibold text-[13.5px] text-[#222] tracking-tight">Property details</span>
            <div className="bg-blue-50/80 text-blue-700 text-[10px] font-bold px-2 py-0.5 rounded-md flex items-center gap-1 border border-blue-100/50 uppercase tracking-wide">
              V1.2
              <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
            </div>
          </div>
          
          <AnimatePresence mode="popLayout">
            <motion.div 
              key={activeProp.id}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="bg-white/40 h-9 px-4 rounded-full flex items-center shadow-sm border border-black/3 backdrop-blur-md"
            >
              <span className="font-semibold text-[13.5px] text-neutral-500 tracking-tight">{activeProp.address}</span>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Agent Pill */}
        <div className="mb-6 flex px-1">
          <div className="bg-white shadow-[0_4px_12px_rgba(0,0,0,0.03)] border border-black/4 rounded-full pl-3 pr-4 py-1.5 flex items-center gap-3 cursor-pointer hover:bg-neutral-50 transition-colors">
            <span className="text-[13px] font-medium text-neutral-400">Listing agent:</span>
            <div className="flex items-center gap-2.5">
              <img src="/avatar.jpg" alt="Jenny Dukes" className="w-6 h-6 rounded-full object-cover border border-black/5" />
              <span className="text-[13.5px] font-bold text-[#222]">Jenny Dukes</span>
            </div>
          </div>
        </div>

        {/* Dynamic Property Details Content */}
        <div className="flex flex-col mb-8 px-2 relative min-h-40">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProp.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="absolute inset-0 flex flex-col"
            >
              <div className="flex items-center gap-3 mb-2">
                <MapPin className="w-5 h-5 text-neutral-300" />
                <h1 className="text-[34px] font-bold text-[#222] tracking-tight leading-none">{activeProp.address}</h1>
              </div>
              
              <p className="text-[14.5px] text-neutral-500 font-semibold tracking-tight mt-1 pl-8">
                {activeProp.details}
              </p>
              
              <p className="text-[15.5px] leading-[1.7] text-neutral-600 max-w-[65ch] mt-4 pl-8">
                {activeProp.description}
              </p>

              <div className="flex items-center gap-4 mt-6 pl-8">
                <span className="text-[14px] font-medium text-neutral-400">Asking price:</span>
                <span className="px-3.5 py-1.5 rounded-lg text-[15px] font-black shadow-sm border border-orange-200/40 bg-[#fff5e6] text-orange-900 tracking-tight">
                  {activeProp.price}
                </span>
                <span className="text-[13px] font-bold text-neutral-400 uppercase tracking-widest">{activeProp.tag} category</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Massive Dynamic Image Container */}
        <div className="flex-1 w-full bg-white rounded-10 shadow-[0_12px_48px_rgba(0,0,0,0.06)] border border-black/4 overflow-hidden relative group">
          <AnimatePresence mode="wait">
            <motion.img 
              key={activeProp.id}
              src={activeProp.img} 
              alt={activeProp.address} 
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="w-full h-full object-cover absolute inset-0 transition-transform duration-700 group-hover:scale-105"
            />
          </AnimatePresence>
          {/* Subtle Inner shadow to ground the image in the card */}
          <div className="absolute inset-0 shadow-[inset_0_0_30px_rgba(0,0,0,0.1)] pointer-events-none rounded-10" />
          
          {/* Subtle gradient overlay at bottom for premium feel */}
          <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-black/20 to-transparent pointer-events-none rounded-b-[40px]" />
        </div>

      </div>
    </div>
  );
}
