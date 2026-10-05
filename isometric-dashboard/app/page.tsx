"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar } from 'lucide-react';

const isoColors: Record<string, { top: string, right: string, left: string }> = {
  cyan: { top: 'bg-sky-400', right: 'bg-sky-500', left: 'bg-sky-600' },
  yellow: { top: 'bg-yellow-400', right: 'bg-yellow-500', left: 'bg-yellow-600' },
  emerald: { top: 'bg-emerald-400', right: 'bg-emerald-500', left: 'bg-emerald-600' },
  purple: { top: 'bg-violet-400', right: 'bg-violet-500', left: 'bg-violet-600' },
  pink: { top: 'bg-pink-400', right: 'bg-pink-500', left: 'bg-pink-600' },
  orange: { top: 'bg-orange-400', right: 'bg-orange-500', left: 'bg-orange-600' },
};

const rawData = [
  { h: 10, b: 30, s: 5, c: 8, rw: 12, sc: 8 },
  { h: 12, b: 50, s: 5, c: 10, rw: 8, sc: 5 },
  { h: 10, b: 45, s: 5, c: 15, rw: 10, sc: 10 },
  { h: 8, b: 55, s: 5, c: 8, rw: 15, sc: 5 },
  { h: 10, b: 40, s: 5, c: 12, rw: 10, sc: 8 },
  { h: 15, b: 30, s: 5, c: 10, rw: 8, sc: 12 },
  { h: 10, b: 20, s: 5, c: 8, rw: 5, sc: 5 },
  { h: 8, b: 15, s: 5, c: 8, rw: 25, sc: 15 },
  { h: 10, b: 35, s: 5, c: 10, rw: 15, sc: 8 },
  { h: 12, b: 45, s: 5, c: 12, rw: 10, sc: 5 },
  { h: 15, b: 50, s: 5, c: 8, rw: 8, sc: 5 },
  { h: 10, b: 40, s: 5, c: 10, rw: 5, sc: 5 },
];

const chartData = rawData.map((d, i) => ({
  day: `Sep ${14 + i}`,
  output: [
    { id: 'housing', h: d.h * 1.5, color: 'cyan', val: d.h * 10 },
    { id: 'bracket', h: d.b * 1.5, color: 'yellow', val: d.b * 10 },
    { id: 'shaft', h: d.s * 1.5, color: 'emerald', val: d.s * 10 },
    { id: 'cap', h: d.c * 1.5, color: 'purple', val: d.c * 10 },
  ],
  scrap: [
    { id: 'rework', h: d.rw * 1.5, color: 'pink', val: d.rw * 10 },
    { id: 'scrap', h: d.sc * 1.5, color: 'orange', val: d.sc * 10 },
  ]
}));

const IsoBar = ({ x, y, z, w, h, colorKey, onMouseMove, onLeave }: any) => {
  const c = isoColors[colorKey];
  return (
    <div 
      className="absolute top-0 left-0 hover:brightness-110 transition-all cursor-pointer group"
      style={{ 
        width: w, height: w, 
        transform: `translate3d(${x}px, ${y}px, ${z}px)`, 
        transformStyle: 'preserve-3d' 
      }}
      onMouseMove={onMouseMove}
      onMouseLeave={onLeave}
    >
      {/* Top Face */}
      <div className={`absolute inset-0 ${c.top} border-[0.5px] border-black/20`} style={{ transform: `translateZ(${h}px)` }} />
      {/* Right Face */}
      <div 
        className={`absolute bottom-0 left-0 ${c.right} origin-bottom border-[0.5px] border-black/20`} 
        style={{ width: w, height: h, transform: `rotateX(-90deg)` }} 
      />
      {/* Left Face */}
      <div 
        className={`absolute top-0 left-0 ${c.left} origin-left border-[0.5px] border-black/20`} 
        style={{ width: h, height: w, transform: `rotateY(-90deg)` }} 
      />
    </div>
  );
};

const Stack = ({ x, y, w, segments, onMouseMove, onLeave }: any) => {
  let currentZ = 0;
  return (
    <>
      {segments.map((seg: any, i: number) => {
        const z = currentZ;
        currentZ += seg.h;
        return (
          <IsoBar 
            key={i} x={x} y={y} z={z} w={w} h={seg.h} colorKey={seg.color}
            onMouseMove={(e: any) => onMouseMove(e, seg)}
            onLeave={onLeave}
          />
        );
      })}
    </>
  );
};

export default function Dashboard() {
  const [tooltip, setTooltip] = useState<{show: boolean, x: number, y: number, day: string, id: string, val: number} | null>(null);
  const [compare, setCompare] = useState(true);

  const handleMouseMove = (e: React.MouseEvent, day: string, seg: any) => {
    setTooltip({
      show: true,
      x: e.clientX,
      y: e.clientY,
      day,
      id: seg.id,
      val: seg.val
    });
  };

  return (
    <div className="min-h-screen bg-[#121212] flex items-center justify-center p-8 font-sans selection:bg-sky-500/30">
      <div className="flex flex-col md:flex-row gap-6 max-w-5xl relative z-10">
        
        {/* Time Range Card */}
        <div className="w-80 bg-[#1f1f1f] rounded-[32px] p-6 shadow-2xl border border-white/5 flex flex-col gap-6 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-white/10 blur-xl"></div>
          
          <div className="relative z-10">
            <h2 className="text-neutral-100 font-semibold text-lg">Time Range</h2>
            <p className="text-neutral-500 text-[13px] mt-0.5">Line 3 • all cells</p>
          </div>

          <div className="bg-[#2a2a2a] rounded-xl p-3 flex items-center gap-3 border border-white/5 cursor-pointer hover:bg-[#303030] transition-colors relative z-10">
            <Calendar className="w-5 h-5 text-neutral-400" />
            <span className="text-neutral-200 text-[13px] font-medium">Sep 4 - Sep 25 • 22 days</span>
          </div>

          <div className="bg-[#141414] rounded-xl p-1 flex items-center justify-between border border-white/5 relative z-10">
            {['12h', '24h', '1W', '1M', '3M'].map(opt => (
              <button key={opt} className={`flex-1 py-1.5 text-[11px] font-semibold rounded-lg transition-all ${opt === '1M' ? 'bg-[#333333] text-white shadow-sm' : 'text-neutral-500 hover:text-neutral-300'}`}>
                {opt}
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-2 relative z-10">
            <div className="grid grid-cols-7 gap-1 mb-1">
              {['M','T','W','T','F','S','S'].map((d, i) => <div key={i} className="text-center text-[10px] text-neutral-500 font-bold">{d}</div>)}
            </div>
            <div className="grid grid-cols-7 gap-y-2 gap-x-1 place-items-center">
              {Array.from({length: 30}).map((_, i) => {
                const d = i + 1;
                const isOut = d < 4;
                const isStart = d === 4;
                const isEnd = d === 25;
                const isHigh = [8,11,17,18,24].includes(d);
                const isMed = [9,10,14,15,16,19,20,21,22,23,26,27].includes(d);
                const isLow = [5,6,7,12,13].includes(d);
                const isNone = [28,29,30].includes(d);

                let bg = 'bg-transparent';
                let text = 'text-neutral-500';
                let border = 'border border-transparent';

                if (isOut) { text = 'text-neutral-600'; }
                else if (isStart || isEnd) { bg = 'bg-[#2a2a2a]'; text = 'text-white'; border = 'border-[2px] border-sky-500'; }
                else if (isHigh) { bg = 'bg-white'; text = 'text-black'; }
                else if (isMed) { bg = 'bg-[#4a4a4a]'; text = 'text-white'; }
                else if (isLow) { bg = 'bg-[#2a2a2a]'; text = 'text-neutral-300'; }
                else if (isNone) { text = 'text-neutral-600'; border = 'border border-dashed border-white/10'; }

                return (
                  <div key={d} className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold ${bg} ${text} ${border}`}>
                    {d}
                  </div>
                )
              })}
            </div>
          </div>

          <div className="flex items-center gap-2 text-[11px] text-neutral-500 font-medium mt-1 relative z-10">
            <span>fewer stops</span>
            <div className="flex gap-1.5 ml-auto mr-auto">
              <div className="w-2.5 h-2.5 rounded-full bg-[#1a1a1a] border border-white/10"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-[#2a2a2a]"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-[#4a4a4a]"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-neutral-300"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-white"></div>
            </div>
            <span>more</span>
          </div>

          <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent w-full my-1 relative z-10"></div>

          <div className="flex items-center justify-between relative z-10">
            <div>
              <h3 className="text-neutral-100 font-semibold text-[13px]">Compare</h3>
              <p className="text-neutral-500 text-[11px] mt-0.5">previous 28 days</p>
            </div>
            <button 
              onClick={() => setCompare(!compare)}
              className={`w-11 h-[22px] rounded-full flex items-center p-[2px] transition-colors ${compare ? 'bg-sky-500' : 'bg-[#333]'}`}
            >
              <div className={`w-[18px] h-[18px] bg-white rounded-full shadow-sm transition-transform ${compare ? 'translate-x-[22px]' : 'translate-x-0'}`}></div>
            </button>
          </div>
        </div>

        {/* Output & Scrap Card */}
        <div className="w-[480px] bg-[#1f1f1f] rounded-[32px] p-7 shadow-2xl border border-white/5 flex flex-col relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-1 bg-white/10 blur-xl"></div>
          
          <div className="mb-6 relative z-10">
            <h2 className="text-neutral-100 font-semibold text-lg">Output & Scrap</h2>
            <p className="text-neutral-500 text-[13px] mt-0.5">units per day • by product</p>
          </div>

          <div className="flex items-end justify-between mb-2 relative z-10">
            <div className="flex items-baseline gap-2">
              <span className="text-[32px] font-bold text-white tracking-tight leading-none">41,208</span>
              <span className="text-neutral-500 text-sm font-medium">units</span>
            </div>
            <span className="text-orange-500 font-semibold text-sm">scrap 2.4 %</span>
          </div>

          {/* 3D Chart Area */}
          <div className="flex-1 relative min-h-[320px] flex items-center justify-center pointer-events-none mt-4">
            <div 
              className="relative pointer-events-auto"
              style={{ 
                transform: 'rotateX(60deg) rotateZ(45deg)', 
                transformStyle: 'preserve-3d',
                width: '280px', height: '100px',
                marginLeft: '-120px',
                marginTop: '-40px'
              }}
            >
              {chartData.map((col, i) => (
                <React.Fragment key={i}>
                  <Stack 
                    x={i * 24} y={0} w={14} segments={col.output} 
                    onMouseMove={(e: any, seg: any) => handleMouseMove(e, col.day, seg)}
                    onLeave={() => setTooltip(null)}
                  />
                  <Stack 
                    x={i * 24} y={24} w={14} segments={col.scrap} 
                    onMouseMove={(e: any, seg: any) => handleMouseMove(e, col.day, seg)}
                    onLeave={() => setTooltip(null)}
                  />
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Legend */}
          <div className="mt-auto grid grid-cols-4 gap-y-3 gap-x-2 text-xs font-semibold text-neutral-400 relative z-10 pt-4">
            <div className="flex items-center gap-2"><div className="w-2.5 h-2.5 bg-sky-400 rounded-sm"></div>Housing</div>
            <div className="flex items-center gap-2"><div className="w-2.5 h-2.5 bg-yellow-400 rounded-sm"></div>Bracket</div>
            <div className="flex items-center gap-2"><div className="w-2.5 h-2.5 bg-emerald-400 rounded-sm"></div>Shaft</div>
            <div className="flex items-center gap-2"><div className="w-2.5 h-2.5 bg-violet-400 rounded-sm"></div>Cap</div>
            <div className="flex items-center gap-2"><div className="w-2.5 h-2.5 bg-pink-400 rounded-sm"></div>Rework</div>
            <div className="flex items-center gap-2"><div className="w-2.5 h-2.5 bg-orange-400 rounded-sm"></div>Scrap</div>
          </div>
        </div>

        {/* Tooltip Overlay */}
        <AnimatePresence>
          {tooltip && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.1 } }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="fixed z-50 pointer-events-none bg-[#2a2a2a]/90 border border-white/10 rounded-xl px-3 py-2 shadow-[0_10px_40px_rgba(0,0,0,0.5)] backdrop-blur-md"
              style={{ left: tooltip.x + 15, top: tooltip.y - 40 }}
            >
              <div className="text-[10px] text-neutral-400 font-semibold mb-0.5">{tooltip.day}</div>
              <div className="text-[13px] text-white font-bold flex items-center gap-1.5">
                <span>{tooltip.val}</span>
                <span className="text-neutral-500 font-normal">•</span>
                <span className="capitalize">{tooltip.id}</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
