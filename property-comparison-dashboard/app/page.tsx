"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowLeft, MoreHorizontal, Maximize2, Sparkles, Home, 
  Link2, BookOpen, Layers, Bookmark, Download
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
    <div className="flex h-screen w-full bg-[#f8f6f0] p-4 gap-6 font-sans overflow-hidden">
      
      {/* 1. Left Navigation Sidebar */}
      <nav className="w-16 h-full bg-white rounded-3xl flex flex-col items-center py-6 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-black/[0.02]">
        <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center mb-8 shadow-sm border border-indigo-100">
          <Sparkles className="w-5 h-5 text-indigo-500" />
        </div>
        
        <div className="flex flex-col gap-6 text-neutral-400">
          <button className="hover:text-neutral-800 transition-colors p-2"><Home className="w-5 h-5" /></button>
          <button className="hover:text-neutral-800 transition-colors p-2"><Link2 className="w-5 h-5" /></button>
          <button className="bg-neutral-100 text-neutral-800 p-2 rounded-xl"><BookOpen className="w-5 h-5" /></button>
          <button className="hover:text-neutral-800 transition-colors p-2"><Layers className="w-5 h-5" /></button>
          <button className="hover:text-neutral-800 transition-colors p-2"><Bookmark className="w-5 h-5" /></button>
        </div>

        <div className="mt-auto">
          <button className="hover:text-neutral-800 transition-colors p-2 text-neutral-400"><Sparkles className="w-5 h-5" /></button>
        </div>
      </nav>

      {/* 2. Middle Column: Comparison List */}
      <div className="flex-1 max-w-xl flex flex-col pt-2 h-full">
        
        {/* Top Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <button className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm border border-black/[0.03] hover:bg-neutral-50 transition-colors">
              <ArrowLeft className="w-4 h-4 text-neutral-600" />
            </button>
            <div className="bg-white h-10 px-4 rounded-xl flex items-center gap-3 shadow-sm border border-black/[0.03]">
              <span className="font-semibold text-[14px] text-neutral-900 tracking-tight">Martins — Home Search</span>
              <div className="bg-blue-50 text-blue-600 text-[11px] font-semibold px-2 py-0.5 rounded-md flex items-center gap-1">
                V1.2
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
              </div>
            </div>
          </div>
          <button className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm border border-black/[0.03] hover:bg-neutral-50 transition-colors text-neutral-500">
            <MoreHorizontal className="w-5 h-5" />
          </button>
        </div>

        {/* Bullet Points */}
        <div className="mb-8 px-2 space-y-2">
          <div className="flex items-start gap-2">
            <span className="text-neutral-400 mt-1.5 text-[10px]">●</span>
            <p className="text-[14px] text-neutral-700">Adjusted -$5,000 for smaller lot size vs 305 Maple Dr</p>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-neutral-400 mt-1.5 text-[10px]">●</span>
            <p className="text-[14px] text-neutral-700">Median adjusted comp value: $487,200</p>
          </div>
        </div>

        {/* Table Card */}
        <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-black/[0.02] flex flex-col overflow-hidden h-[550px]">
          
          {/* Card Header */}
          <div className="px-6 pt-6 pb-4 flex items-center justify-between">
            <h2 className="text-[15px] font-semibold text-neutral-800">Property Comparison</h2>
            <div className="flex items-center gap-2">
              <button className="w-8 h-8 rounded-lg border border-black/[0.06] flex items-center justify-center hover:bg-neutral-50 transition-colors text-neutral-500">
                <Download className="w-4 h-4" />
              </button>
              <button className="bg-[#222222] text-white text-[13px] font-medium px-4 h-8 rounded-lg flex items-center gap-2 hover:bg-black transition-colors">
                Expand table
                <Maximize2 className="w-3.5 h-3.5 opacity-70" />
              </button>
            </div>
          </div>

          {/* Table Headers */}
          <div className="grid grid-cols-[1fr_120px_120px] px-6 py-3 bg-[#f7f6ec]/50 border-y border-black/[0.04] text-[13px] font-medium text-neutral-600">
            <div>Property</div>
            <div>Price</div>
            <div>Beds / baths</div>
          </div>

          {/* Table Rows (Interactive) */}
          <div className="flex-1 overflow-y-auto relative">
            {properties.map((prop) => {
              const isActive = prop.id === activeId;
              
              return (
                <div 
                  key={prop.id} 
                  onClick={() => setActiveId(prop.id)}
                  className={`relative grid grid-cols-[1fr_120px_120px] items-center px-6 py-4 border-b border-black/[0.03] cursor-pointer transition-colors
                    ${isActive ? 'bg-blue-50/10' : 'hover:bg-neutral-50'}
                  `}
                >
                  {/* Highlight Bar for Active Row */}
                  {isActive && (
                    <motion.div 
                      layoutId="active-row-indicator"
                      className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500"
                      initial={false}
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}

                  <div className="flex items-center gap-3">
                    <img src={prop.img} alt={prop.address} className="w-12 h-10 rounded-md object-cover border border-black/[0.05] shadow-sm" />
                    <span className={`text-[14px] font-medium ${isActive ? 'text-blue-700' : 'text-neutral-800'}`}>
                      {prop.address}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`px-2.5 py-0.5 rounded-md text-[13px] font-semibold shadow-sm border border-black/[0.02] transition-colors
                      ${isActive ? 'bg-[#e6f0ff] text-blue-700' : 'bg-[#fff5e6] text-orange-800'}
                    `}>
                      {prop.price}
                    </span>
                    <span className="text-[13px] font-medium text-neutral-500">{prop.tag}</span>
                  </div>
                  <div className={`text-[13px] ${isActive ? 'text-blue-600/80 font-medium' : 'text-neutral-600'}`}>
                    {prop.beds}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Pagination */}
          <div className="p-4 border-t border-black/[0.04] flex items-center justify-between">
            <div className="w-48 h-1 bg-neutral-200 rounded-full overflow-hidden ml-2">
              <div className="w-1/2 h-full bg-[#d6cbb5]" />
            </div>
            <div className="flex items-center gap-4 text-[13px] font-medium">
              <div className="flex gap-2">
                <button className="w-8 h-8 rounded-lg bg-white border border-black/[0.06] shadow-sm flex items-center justify-center text-neutral-800">1</button>
                <button className="w-8 h-8 rounded-lg flex items-center justify-center text-neutral-500 hover:bg-neutral-100 transition-colors">2</button>
              </div>
              <button className="h-8 px-3 rounded-lg bg-white border border-black/[0.06] shadow-sm flex items-center gap-1 text-neutral-800 hover:bg-neutral-50 transition-colors">
                Next <ArrowLeft className="w-3.5 h-3.5 rotate-180 opacity-60" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Resize Handle (Visual Only) */}
      <div className="w-6 flex items-center justify-center h-full">
        <div className="w-1 h-12 bg-black/[0.04] rounded-full" />
      </div>

      {/* 3. Right Column: Detail View */}
      <div className="flex-[1.5] h-full flex flex-col pt-2 pb-4">
        
        {/* Top Breadcrumb */}
        <div className="flex items-center gap-3 mb-6">
          <div className="bg-white h-10 px-4 rounded-xl flex items-center gap-3 shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-black/[0.02]">
            <span className="font-semibold text-[14px] text-neutral-900 tracking-tight">Property details</span>
            <div className="bg-blue-50 text-blue-600 text-[11px] font-semibold px-2 py-0.5 rounded-md flex items-center gap-1">
              V1.2
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
            </div>
          </div>
          
          <AnimatePresence mode="popLayout">
            <motion.div 
              key={activeProp.id}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              className="bg-white/60 h-10 px-4 rounded-xl flex items-center shadow-[0_2px_8px_rgba(0,0,0,0.02)] border border-black/[0.02] backdrop-blur-sm"
            >
              <span className="font-medium text-[14px] text-neutral-600 tracking-tight">{activeProp.address}</span>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Agent Pill */}
        <div className="mb-6 flex">
          <div className="bg-white shadow-sm border border-black/[0.03] rounded-full pl-3 pr-4 py-1.5 flex items-center gap-3">
            <span className="text-[13px] font-medium text-neutral-500">Listing agent:</span>
            <div className="flex items-center gap-2">
              <img src="/avatar.jpg" alt="Jenny Dukes" className="w-6 h-6 rounded-full object-cover border border-black/[0.05]" />
              <span className="text-[13px] font-semibold text-neutral-800">Jenny Dukes</span>
            </div>
          </div>
        </div>

        {/* Dynamic Property Details Content */}
        <div className="flex flex-col gap-3 mb-8 px-2 relative min-h-[140px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProp.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-0"
            >
              <h1 className="text-[32px] font-semibold text-neutral-900 tracking-tight">{activeProp.address}</h1>
              
              <p className="text-[14px] text-neutral-600 font-medium">
                {activeProp.details}
              </p>
              
              <p className="text-[15px] leading-relaxed text-neutral-700 max-w-2xl mt-2">
                {activeProp.description}
              </p>

              <div className="flex items-center gap-3 mt-4">
                <span className="text-[14px] text-neutral-500">Asking price:</span>
                <span className="px-3 py-1 rounded-md text-[14px] font-bold shadow-sm border border-black/[0.02] bg-[#fff5e6] text-orange-900">
                  {activeProp.price}
                </span>
                <span className="text-[14px] font-bold text-neutral-800 ml-2">{activeProp.tag} category</span>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Massive Dynamic Image Container */}
        <div className="flex-1 w-full bg-white rounded-[32px] shadow-[0_12px_40px_rgba(0,0,0,0.06)] border border-black/[0.03] overflow-hidden relative">
          <AnimatePresence mode="wait">
            <motion.img 
              key={activeProp.id}
              src={activeProp.img} 
              alt={activeProp.address} 
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="w-full h-full object-cover absolute inset-0"
            />
          </AnimatePresence>
          {/* Subtle Inner shadow to ground the image in the card */}
          <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.1)] pointer-events-none rounded-[32px]" />
        </div>

      </div>
    </div>
  );
}
