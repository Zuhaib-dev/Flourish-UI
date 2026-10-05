"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plane, Plus, Wallet, Briefcase, Check } from 'lucide-react';

const folders = [
  { title: "Kyoto in Autumn", dates: "Nov 3 – 11", flag: "🇯🇵", image: "/kyoto.jpg", status: "In 41 D", statusColor: "bg-[#eaf1ff] text-[#4a72d4]", avatars: ["👦🏻","👦🏽","👧🏾"] },
  { title: "Reykjavík lights", dates: "Jan 18 – 22", flag: "🇮🇸", image: "/reykjavik.jpg", status: "In 4 Mo", statusColor: "bg-[#fbeaf4] text-[#d153a0]", avatars: ["👦🏻","👧🏾"] },
  { title: "Yerevan & Dilijan", dates: "Mar 6 – 10", flag: "🇦🇲", image: "/yerevan.jpg", status: "Draft", statusColor: "bg-[#ffede2] text-[#ee7d4f]", avatars: ["👦🏻"] }
];

export default function VoyageDashboard() {
  const [activeTab, setActiveTab] = useState("Upcoming");

  return (
    <div className="min-h-screen bg-[#ebebeb] flex items-center justify-center p-8 font-sans antialiased text-neutral-900 selection:bg-neutral-200">
      
      {/* Main Container */}
      <motion.div 
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="bg-[#f9f9f9] rounded-[36px] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08),0_0_0_1px_rgba(0,0,0,0.02)] p-6 max-w-4xl flex flex-col gap-6"
      >
        
        {/* Header */}
        <div className="flex justify-between items-center px-3 pt-1">
          <div className="flex items-center gap-2.5 text-neutral-400 font-bold text-[24px]">
            <Briefcase className="w-6 h-6 text-neutral-400" fill="currentColor" strokeWidth={0.5} />
            <span className="text-neutral-500">Trips</span>
          </div>
          <div className="bg-[#f0f0f0] rounded-full p-1 flex gap-1 border border-black/[0.03]">
            {["Upcoming", "Past"].map(tab => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative px-5 py-1.5 text-[13px] font-bold rounded-full transition-colors ${activeTab === tab ? 'text-neutral-900' : 'text-neutral-500 hover:text-neutral-700'}`}
              >
                {activeTab === tab && (
                  <motion.div 
                    layoutId="tab"
                    className="absolute inset-0 bg-white rounded-full shadow-sm border border-black/[0.04]"
                    style={{ zIndex: 0 }}
                  />
                )}
                <span className="relative z-10">{tab}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content Body */}
        <div className="flex flex-col md:flex-row gap-5">
          
          {/* Left Column: The Ticket */}
          <motion.div 
            whileHover={{ y: -4 }}
            className="w-[360px] bg-white rounded-[28px] shadow-[0_12px_24px_-8px_rgba(0,0,0,0.08),0_0_0_1px_rgba(0,0,0,0.02)] flex flex-col relative overflow-hidden transition-all duration-300"
          >
            {/* Top Image Area */}
            <div className="p-3 pb-0">
              <div className="relative h-[180px] rounded-[20px] overflow-hidden bg-neutral-100 border border-black/[0.03]">
                <img src="/lisbon.jpg" alt="Lisbon" className="w-full h-full object-cover" />
                {/* Lisbon Getaway pill */}
                <div className="absolute bottom-[-16px] left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-xl rounded-full px-3 py-1 shadow-[0_4px_16px_rgba(0,0,0,0.12)] border border-white/50 flex items-center gap-1.5 text-[11px] font-bold z-10 whitespace-nowrap">
                  <span className="text-sm shadow-sm rounded-full bg-white leading-none">🇵🇹</span> Lisbon Getaway
                </div>
              </div>
            </div>

            {/* Flight Info Area */}
            <div className="px-7 pt-10 pb-6 flex flex-col gap-6">
              <div className="flex justify-between items-start relative">
                <div className="text-center w-[72px]">
                  <h3 className="text-3xl font-bold tracking-tight text-neutral-800">CDG</h3>
                  <p className="text-[11px] text-neutral-400 font-medium mt-1">Paris • 07:40</p>
                </div>
                
                {/* Flight path curve */}
                <div className="flex-1 px-2 relative flex flex-col items-center justify-start pt-2">
                  <div className="absolute top-[14px] w-[calc(100%-24px)] h-12 border-t-[1.5px] border-dashed border-neutral-300 rounded-[100%]"></div>
                  <div className="bg-white px-1 z-10 relative">
                    <Plane className="w-[18px] h-[18px] text-neutral-800 rotate-45" fill="currentColor" strokeWidth={1} />
                  </div>
                  <div className="bg-white px-2 mt-1 text-[10px] text-neutral-300 font-bold tracking-wide relative z-10">2h 35m</div>
                  <div className="absolute top-[14px] left-3 w-1.5 h-1.5 rounded-full bg-neutral-300 -translate-y-1/2"></div>
                  <div className="absolute top-[14px] right-3 w-1.5 h-1.5 rounded-full bg-emerald-700 -translate-y-1/2"></div>
                </div>

                <div className="text-center w-[72px]">
                  <h3 className="text-3xl font-bold tracking-tight text-neutral-800">LIS</h3>
                  <p className="text-[11px] text-neutral-400 font-medium mt-1">08:15 • Lisbon</p>
                </div>
              </div>

              {/* Details Grid */}
              <div className="flex justify-between items-start mt-2 px-1">
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] text-neutral-400 font-medium">Date</span>
                  <span className="text-[13px] font-bold text-neutral-800">Oct 12</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] text-neutral-400 font-medium">Gate</span>
                  <span className="text-[13px] font-bold text-neutral-800">K42</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[10px] text-neutral-400 font-medium">Seat</span>
                  <span className="text-[13px] font-bold text-neutral-800">14C</span>
                </div>
                <div className="flex flex-col gap-1 items-end">
                  <span className="text-[10px] text-neutral-400 font-medium">Stay</span>
                  <span className="text-[13px] font-bold text-neutral-800">6 nights</span>
                </div>
              </div>
            </div>

            {/* Tear-off Line */}
            <div className="relative flex items-center justify-center h-4">
              <div className="absolute left-[-12px] w-6 h-6 rounded-full bg-[#f9f9f9] shadow-[inset_-3px_0_6px_-3px_rgba(0,0,0,0.15)] border-r border-black/[0.03]"></div>
              <div className="absolute right-[-12px] w-6 h-6 rounded-full bg-[#f9f9f9] shadow-[inset_3px_0_6px_-3px_rgba(0,0,0,0.15)] border-l border-black/[0.03]"></div>
              <div className="w-full border-t-[2px] border-dashed border-neutral-200 mx-6"></div>
            </div>

            {/* Footer */}
            <div className="px-6 py-5 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-[#f8d7d0] border-2 border-white text-sm flex items-center justify-center shadow-sm relative z-30">👦🏼</div>
                  <div className="w-8 h-8 rounded-full bg-[#d0dcf8] border-2 border-white text-sm flex items-center justify-center shadow-sm relative z-20">👦🏻</div>
                  <div className="w-8 h-8 rounded-full bg-[#fce4c4] border-2 border-white text-sm flex items-center justify-center shadow-sm relative z-10">👦🏽</div>
                </div>
                <div>
                  <p className="text-[13px] font-bold">4 travelers</p>
                  <p className="text-[10px] text-emerald-600 font-bold flex items-center gap-1 mt-0.5">
                    All checked in <Check className="w-3 h-3 stroke-[3px]"/>
                  </p>
                </div>
              </div>
              
              {/* CSS Barcode */}
              <div 
                className="w-14 h-9 opacity-40 mix-blend-multiply" 
                style={{ 
                  background: 'repeating-linear-gradient(to right, #000, #000 2px, transparent 2px, transparent 4px, #000 4px, #000 5px, transparent 5px, transparent 8px, #000 8px, #000 11px, transparent 11px, transparent 13px)' 
                }}
              ></div>
            </div>
          </motion.div>

          {/* Right Column: Folders List */}
          <div className="w-[340px] flex flex-col h-full">
            <div className="flex flex-col gap-[16px] flex-1 justify-center">
              {folders.map((f, i) => (
                <motion.div 
                  key={f.title}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1, type: "spring", stiffness: 300, damping: 30 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white rounded-[20px] px-[20px] py-[22px] flex items-center gap-4 shadow-[0_4px_12px_-4px_rgba(0,0,0,0.05),0_0_0_1px_rgba(0,0,0,0.02)] cursor-pointer"
                >
                  {/* Folder Icon Construction */}
                  <div className="relative w-[68px] h-[60px] shrink-0">
                    {/* Back flap */}
                    <div className="absolute inset-0 bg-[#e2e8f4] rounded-[14px] rounded-tl-sm">
                      <div className="absolute top-0 left-0 w-7 h-2.5 bg-[#e2e8f4] rounded-t-md -translate-y-[90%]"></div>
                    </div>
                  {/* Image/Content inside folder */}
                  <div className="absolute inset-x-1.5 bottom-1.5 top-2 bg-white rounded-lg shadow-sm border border-neutral-100 overflow-hidden transform -rotate-3 z-10">
                    <img src={f.image} alt={f.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute inset-x-1.5 bottom-1.5 top-2 bg-white rounded-lg shadow-sm border border-neutral-100 overflow-hidden transform rotate-6 z-[11] opacity-60">
                    <img src={f.image} alt={f.title} className="w-full h-full object-cover" />
                  </div>
                    {/* Front flap (glassmorphic) */}
                    <div className="absolute inset-x-0 bottom-0 h-[40px] bg-white/50 backdrop-blur-[10px] rounded-[14px] shadow-[0_-2px_6px_rgba(0,0,0,0.02)] border border-white z-20"></div>
                    {/* Flag pill */}
                    <div className="absolute bottom-[-8px] left-[-4px] bg-white rounded-[8px] shadow-[0_4px_10px_rgba(0,0,0,0.1)] border border-neutral-100 text-[11px] p-0.5 px-1.5 z-30 flex items-center justify-center h-[22px]">
                      {f.flag}
                    </div>
                  </div>
                  
                  {/* Info */}
                  <div className="flex-1">
                    <h4 className="text-[14px] font-bold text-neutral-900 leading-tight">{f.title}</h4>
                    <p className="text-[12px] text-neutral-400 font-bold mt-1">{f.dates}</p>
                  <div className="mt-2.5 flex items-center justify-between">
                    <div className="flex -space-x-1.5">
                      {f.avatars.map((a, j) => (
                         <div key={j} className={`w-5 h-5 rounded-full border-2 border-white text-[10px] flex items-center justify-center shadow-sm relative z-${30-j} ${
                           j === 0 ? 'bg-[#f8d7d0]' : j === 1 ? 'bg-[#d0dcf8]' : 'bg-[#fce4c4]'
                         }`}>
                           {a}
                         </div>
                      ))}
                    </div>
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${f.statusColor}`}>
                      {f.status}
                    </span>
                  </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bottom Actions */}
            <div className="flex gap-3 mt-4 pt-2">
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="flex-1 bg-[#18181b] text-white rounded-[18px] py-[15px] flex items-center justify-center gap-2 font-bold text-[13px] shadow-[0_8px_16px_rgba(24,24,27,0.2)] hover:bg-black transition-colors"
              >
                <Plus className="w-4 h-4 stroke-[3px]" /> Plan a trip
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-[50px] h-[50px] bg-white rounded-[18px] flex items-center justify-center shadow-[0_4px_12px_-4px_rgba(0,0,0,0.05),0_0_0_1px_rgba(0,0,0,0.02)] text-neutral-900 hover:bg-neutral-50 transition-colors"
              >
                <Wallet className="w-[18px] h-[18px]" />
              </motion.button>
            </div>
          </div>
          
        </div>
      </motion.div>
    </div>
  );
}
