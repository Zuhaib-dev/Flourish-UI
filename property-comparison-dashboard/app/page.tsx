"use client";

import React, { useState } from "react";
import { 
  ArrowLeft, MoreHorizontal, Maximize2, Sparkles, Home, 
  Link2, BookOpen, Layers, Bookmark, ChevronLeft, ChevronRight,
  Download
} from "lucide-react";

const properties = [
  { id: 1, address: "718 Elm St", price: "$472,000", tag: "B3", beds: "3 bed / 2 ba", img: "/house1.jpg" },
  { id: 2, address: "305 Maple Dr", price: "$491,000", tag: "B3", beds: "4 bed / 2.5 ba", img: "/house2.jpg" },
  { id: 3, address: "129 Cedar Ln", price: "$488,500", tag: "B3", beds: "3 bed / 2 ba", img: "/house3.jpg" },
  { id: 4, address: "742 Evergreen Terrace", price: "$485,000", tag: "B4", beds: "3 bed / 2 ba", img: "/house4.jpg" },
  { id: 5, address: "310 Oak Ave", price: "$510,000", tag: "B4", beds: "4 bed / 2.5 ba", img: "/house5.jpg", active: true },
];

export default function PropertyDashboard() {
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
            <button className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm border border-black/[0.03] hover:bg-neutral-50">
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
          <button className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm border border-black/[0.03] hover:bg-neutral-50 text-neutral-500">
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
              <button className="w-8 h-8 rounded-lg border border-black/[0.06] flex items-center justify-center hover:bg-neutral-50 text-neutral-500">
                <Download className="w-4 h-4" />
              </button>
              <button className="bg-[#222222] text-white text-[13px] font-medium px-4 h-8 rounded-lg flex items-center gap-2 hover:bg-black">
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

          {/* Table Rows */}
          <div className="flex-1 overflow-y-auto">
            {properties.map((prop, i) => (
              <div 
                key={prop.id} 
                className={`grid grid-cols-[1fr_120px_120px] items-center px-6 py-4 border-b border-black/[0.03] transition-colors
                  ${prop.active ? 'bg-blue-50/30' : 'hover:bg-neutral-50'}
                `}
              >
                <div className="flex items-center gap-3">
                  <img src={prop.img} alt={prop.address} className="w-12 h-10 rounded-md object-cover border border-black/[0.05] shadow-sm" />
                  <span className="text-[14px] font-medium text-neutral-800">{prop.address}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className={`px-2.5 py-0.5 rounded-md text-[13px] font-semibold shadow-sm border border-black/[0.02]
                    ${prop.active ? 'bg-[#e6f0ff] text-blue-700' : 'bg-[#fff5e6] text-orange-800'}
                  `}>
                    {prop.price}
                  </span>
                  <span className="text-[13px] font-medium text-neutral-500">{prop.tag}</span>
                </div>
                <div className="text-[13px] text-neutral-600">{prop.beds}</div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="p-4 border-t border-black/[0.04] flex items-center justify-between">
            <div className="w-48 h-1 bg-neutral-200 rounded-full overflow-hidden ml-2">
              <div className="w-1/2 h-full bg-[#d6cbb5]" />
            </div>
            <div className="flex items-center gap-4 text-[13px] font-medium">
              <div className="flex gap-2">
                <button className="w-8 h-8 rounded-lg bg-white border border-black/[0.06] shadow-sm flex items-center justify-center text-neutral-800">1</button>
                <button className="w-8 h-8 rounded-lg flex items-center justify-center text-neutral-500 hover:bg-neutral-100">2</button>
              </div>
              <button className="h-8 px-3 rounded-lg bg-white border border-black/[0.06] shadow-sm flex items-center gap-1 text-neutral-800 hover:bg-neutral-50">
                Next <ArrowLeft className="w-3.5 h-3.5 rotate-180 opacity-60" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Resize Handle (Visual Only) */}
      <div className="w-6 flex items-center justify-center cursor-col-resize h-full">
        <div className="w-1.5 h-8 bg-white border border-black/[0.05] rounded-full shadow-sm" />
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
          <div className="bg-white/60 h-10 px-4 rounded-xl flex items-center shadow-[0_2px_8px_rgba(0,0,0,0.02)] border border-black/[0.02] backdrop-blur-sm">
            <span className="font-medium text-[14px] text-neutral-600 tracking-tight">310 Oak Ave</span>
          </div>
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

        {/* Property Details Content */}
        <div className="flex flex-col gap-3 mb-8 px-2">
          <h1 className="text-[32px] font-semibold text-neutral-900 tracking-tight">310 Oak Ave</h1>
          
          <p className="text-[14px] text-neutral-600 font-medium">
            Single-family home · 0.35-acre lot · Built in 2005
          </p>
          
          <p className="text-[15px] leading-relaxed text-neutral-700 max-w-2xl mt-2">
            A four-bedroom home with 2.5 bathrooms and 2,200 sq ft of living space. It offers the 
            Martins more room to work with. Compare the added space with the lot size adjustments.
          </p>

          <div className="flex items-center gap-3 mt-4">
            <span className="text-[14px] text-neutral-500">Asking price:</span>
            <span className="px-3 py-1 rounded-md text-[14px] font-bold shadow-sm border border-black/[0.02] bg-[#fff5e6] text-orange-900">
              $510,000
            </span>
            <span className="text-[14px] font-bold text-neutral-800 ml-2">B2 category</span>
          </div>
        </div>

        {/* Massive Image Container */}
        <div className="flex-1 w-full bg-white rounded-[32px] shadow-[0_12px_40px_rgba(0,0,0,0.06)] border border-black/[0.03] overflow-hidden relative">
          <img 
            src="/house5.jpg" 
            alt="310 Oak Ave" 
            className="w-full h-full object-cover absolute inset-0"
          />
          {/* Subtle Inner shadow to ground the image in the card */}
          <div className="absolute inset-0 shadow-[inset_0_0_20px_rgba(0,0,0,0.1)] pointer-events-none rounded-[32px]" />
        </div>

      </div>
    </div>
  );
}
