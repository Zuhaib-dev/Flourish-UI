"use client";

import React, { useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import { 
  Sun, 
  Calendar, 
  Library, 
  BookOpen, 
  HelpCircle, 
  SlidersHorizontal, 
  Plus,
  ChevronLeft,
  ChevronRight,
  FileText,
  CalendarDays,
  ChevronRight as ChevronRightSmall
} from "lucide-react";

export default function PostPlanner() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // Animation variants
  const containerVars: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVars: Variants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <div className="min-h-screen bg-[#f8f9fb] text-[#111827] font-sans selection:bg-black selection:text-white pb-20">
      
      {/* Top Navigation */}
      <header className="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-100">
        
        {/* Logo area */}
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="w-8 h-8 bg-[#111827] rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-sm">
            {/* Custom elegant solid lotus logo */}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
              <path d="M12 22C12 22 17 18 17 11C17 6 12 2 12 2C12 2 7 6 7 11C7 18 12 22 12 22Z" />
              <path d="M10 19C10 19 3 16 3 10C3 5 7 3 7 3C7 3 9 7 9 12C9 15 10 19 10 19Z" />
              <path d="M14 19C14 19 21 16 21 10C21 5 17 3 17 3C17 3 15 7 15 12C15 15 14 19 14 19Z" />
            </svg>
          </div>
          <span className="font-bold text-[15px] tracking-tight group-hover:text-gray-600 transition-colors">Post planner</span>
        </div>

        {/* Center Tabs */}
        <div className="flex items-center gap-1">
          <NavTab icon={<Sun className="w-3.75 h-3.75" />} label="Today" />
          <NavTab icon={<Calendar className="w-3.75 h-3.75" />} label="Calendar" active />
          <NavTab icon={<Library className="w-3.75 h-3.75" />} label="Library" />
          <NavTab icon={<BookOpen className="w-3.75 h-3.75" />} label="Playbook" />
        </div>

        {/* Right Tools */}
        <div className="flex items-center gap-4">
          <button className="text-gray-400 hover:text-gray-900 transition-colors">
            <HelpCircle className="w-5 h-5" />
          </button>
          <button className="text-gray-400 hover:text-gray-900 transition-colors">
            <SlidersHorizontal className="w-5 h-5" />
          </button>
          <button className="bg-[#111827] hover:bg-black text-white text-[13px] font-medium px-4 py-2 rounded-full flex items-center gap-1.5 transition-colors shadow-sm">
            <Plus className="w-4 h-4" /> New post
          </button>
        </div>
      </header>

      <main className="max-w-300 mx-auto px-8 pt-8">
        
        <motion.div variants={containerVars} initial="hidden" animate={mounted ? "show" : "hidden"}>
          
          {/* Header Section */}
          <motion.div variants={itemVars} className="flex flex-col gap-4 mb-8">
          <div className="flex items-center gap-2">
            <span className="bg-gray-100 text-gray-600 text-[12px] font-medium px-3 py-1 rounded-full">October 2026</span>
            <span className="bg-gray-100 text-gray-600 text-[12px] font-medium px-3 py-1 rounded-full">This month</span>
          </div>

          <div className="flex items-end justify-between">
            <h1 className="text-[32px] font-semibold tracking-tight leading-none">October 2026</h1>
            
            <div className="flex items-center gap-4">
              <span className="bg-orange-50 text-orange-600 text-[12px] font-bold px-3 py-1.5 rounded-full">49 open slots</span>
              
              {/* Toggle Week/Month */}
              <div className="bg-gray-100 p-0.5 rounded-full flex items-center">
                <button className="text-[13px] font-medium text-gray-500 px-4 py-1.5 rounded-full">Week</button>
                <button className="text-[13px] font-medium text-[#111827] bg-white px-4 py-1.5 rounded-full shadow-sm">Month</button>
              </div>

              {/* Prev/Next Arrows */}
              <div className="bg-white border border-gray-200 p-0.5 rounded-full flex items-center shadow-sm">
                <button className="p-1.5 text-gray-400 hover:text-gray-900 transition-colors rounded-full hover:bg-gray-50">
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <div className="w-px h-4 bg-gray-200 mx-0.5" />
                <button className="p-1.5 text-gray-400 hover:text-gray-900 transition-colors rounded-full hover:bg-gray-50">
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

          {/* Dashboard Cards Row */}
          <motion.div variants={itemVars} className="grid grid-cols-2 gap-6 mb-8">
            
            {/* Card 1: Slots filled */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow duration-300">
              <div>
                <div className="flex justify-between items-center mb-6">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 bg-gray-50 rounded-md">
                      <FileText className="w-4 h-4 text-gray-400" />
                    </div>
                    <h2 className="text-[14px] font-semibold text-gray-800">Slots filled</h2>
                  </div>
                  <span className="text-[13px] text-gray-400">this month</span>
                </div>

                <div className="flex items-baseline justify-between mb-4">
                  <div className="flex items-baseline">
                    <span className="text-[36px] font-semibold leading-none">7</span>
                    <span className="text-[28px] text-gray-400 font-medium leading-none">/62</span>
                  </div>
                  <span className="text-[12px] font-medium text-gray-400">11% of your rhythm</span>
                </div>

                {/* Progress Bar */}
                <div className="h-5.5 w-full bg-gray-100 rounded-md flex gap-0.5 mb-6 overflow-hidden p-0.5">
                  <motion.div initial={{ width: 0 }} animate={{ width: '4%' }} transition={{ duration: 1, delay: 0.5 }} className="h-full bg-emerald-500 rounded-sm" />
                  <motion.div initial={{ width: 0 }} animate={{ width: '5%' }} transition={{ duration: 1, delay: 0.6 }} className="h-full bg-[#111827] rounded-sm" />
                  <motion.div initial={{ width: 0 }} animate={{ width: '2%' }} transition={{ duration: 1, delay: 0.7 }} className="h-full bg-orange-400 rounded-sm" />
                </div>
              </div>

              {/* Legend */}
              <div className="grid grid-cols-2 gap-y-3">
                <LegendItem color="bg-emerald-500" label="Posted" value="2" />
                <LegendItem color="bg-[#111827]" label="Ready" value="4" />
                <LegendItem color="bg-orange-400" label="Draft" value="1" />
                <LegendItem color="bg-gray-300" label="Idea" value="0" />
              </div>
            </div>

            {/* Card 2: Open slots */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm flex flex-col hover:shadow-md transition-shadow duration-300">
              <div className="flex justify-between items-center mb-6">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 bg-gray-50 rounded-md">
                    <CalendarDays className="w-4 h-4 text-gray-400" />
                  </div>
                  <h2 className="text-[14px] font-semibold text-gray-800">Open slots</h2>
                </div>
                <span className="text-[13px] text-gray-400">49 to plan</span>
              </div>

            <div className="flex flex-col">
              <OpenSlotRow date="Tue, Oct 6" tags={[{ color: "bg-blue-500", label: "Visual" }]} />
              <OpenSlotRow date="Wed, Oct 7" tags={[{ color: "bg-blue-500", label: "Visual" }]} />
              <OpenSlotRow date="Thu, Oct 8" tags={[{ color: "bg-blue-500", label: "Visual" }, { color: "bg-purple-500", label: "Educational" }]} />
              <OpenSlotRow date="Fri, Oct 9" tags={[{ color: "bg-blue-500", label: "Visual" }, { color: "bg-orange-400", label: "Business" }]} border={false} />
            </div>
            
              <div className="mt-4 pt-4 border-t border-gray-50">
                <span className="text-[12px] font-medium text-gray-400 bg-gray-50 px-2 py-1 rounded-md cursor-pointer hover:bg-gray-100 transition-colors">+22 more days</span>
              </div>
            </div>
          </motion.div>

          {/* Pillars Row */}
          <motion.div variants={itemVars} className="flex items-center gap-4 mb-4 px-2">
            <PillarBadge color="bg-blue-500" label="Visual" fraction="2/31" />
            <PillarBadge color="bg-purple-500" label="Educational" fraction="2/17" />
            <PillarBadge color="bg-orange-400" label="Business" fraction="1/9" />
            <PillarBadge color="bg-pink-500" label="Personal" fraction="1/5" />
            <PillarBadge color="bg-gray-300" label="No pillar" fraction="1" />
          </motion.div>

          {/* Calendar Grid */}
          <motion.div variants={itemVars} className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden flex flex-col hover:shadow-md transition-shadow duration-300">
            {/* Days Header */}
            <div className="grid grid-cols-7 border-b border-gray-100 bg-gray-50/50">
            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
              <div key={day} className="px-4 py-3 text-[12px] font-semibold text-gray-400 border-r border-gray-100 last:border-0">
                {day}
              </div>
            ))}
          </div>

          {/* Grid Cells */}
          <div className="grid grid-cols-7">
            {/* Week 1 */}
            <CalendarCell date="28" dim />
            <CalendarCell date="29" dim />
            <CalendarCell date="30" dim />
            <CalendarCell date="1" />
            <CalendarCell date="2" />
            <CalendarCell date="3" />
            <CalendarCell date="4" items={[
              { type: 'dot', color: 'bg-blue-500', text: 'Chibi me, do I push it live o...' },
              { type: 'dot', color: 'bg-purple-500', text: "I've been designing for yea..." }
            ]} bars={['bg-emerald-500', 'bg-emerald-500']} />

            {/* Week 2 */}
            <CalendarCell date="5" active items={[
              { type: 'dot', color: 'bg-blue-500', text: "It's crazy that now you can..." },
              { type: 'dot', color: 'bg-gray-300', text: "I just learned some...", badge: { text: "Draft", color: "bg-orange-50 text-orange-600" } }
            ]} bars={['bg-[#111827]', 'bg-orange-400']} />
            <CalendarCell date="6" rings={['border-blue-500']} items={[
              { type: 'dot', color: 'bg-orange-400', text: "I made $2K in September ..." }
            ]} bars={['bg-gray-200', 'bg-[#111827]']} />
            <CalendarCell date="7" rings={['border-blue-500']} items={[
              { type: 'dot', color: 'bg-purple-500', text: "I've designed 3+ brands in ..." }
            ]} bars={['bg-gray-200', 'bg-[#111827]']} />
            <CalendarCell date="8" rings={['border-purple-500', 'border-blue-500']} />
            <CalendarCell date="9" rings={['border-orange-400', 'border-blue-500']} />
            <CalendarCell date="10" rings={['border-blue-500']} items={[
              { type: 'dot', color: 'bg-pink-500', text: "5 years ago: I started as a ..." }
            ]} bars={['bg-gray-200', 'bg-[#111827]']} />
            <CalendarCell date="11" rings={['border-purple-500', 'border-blue-500']} />

            {/* Week 3 */}
            <CalendarCell date="12" rings={['border-purple-500', 'border-blue-500']} />
            <CalendarCell date="13" rings={['border-orange-400', 'border-blue-500']} />
            <CalendarCell date="14" rings={['border-purple-500', 'border-blue-500']} />
            <CalendarCell date="15" rings={['border-purple-500', 'border-blue-500']} />
            <CalendarCell date="16" rings={['border-orange-400', 'border-blue-500']} />
            <CalendarCell date="17" rings={['border-pink-500', 'border-blue-500']} />
            <CalendarCell date="18" rings={['border-purple-500', 'border-blue-500']} />
            
            </div>
          </motion.div>
        </motion.div>

      </main>
    </div>
  );
}

// ----------------------------------------------------------------------
// Sub-components
// ----------------------------------------------------------------------

function NavTab({ icon, label, active = false }: { icon: React.ReactNode, label: string, active?: boolean }) {
  return (
    <button className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-[13px] font-medium transition-colors ${active ? 'bg-gray-100 text-[#111827]' : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'}`}>
      {icon}
      <span>{label}</span>
    </button>
  );
}

function LegendItem({ color, label, value }: { color: string, label: string, value: string }) {
  return (
    <div className="flex items-center justify-between group cursor-default">
      <div className="flex items-center gap-2">
        <div className={`w-1.5 h-1.5 rounded-full ${color} group-hover:scale-150 transition-transform`} />
        <span className="text-[13px] text-gray-500 font-medium group-hover:text-gray-800 transition-colors">{label}</span>
      </div>
      <span className="text-[13px] font-bold group-hover:text-gray-900 transition-colors">{value}</span>
    </div>
  );
}

function OpenSlotRow({ date, tags, border = true }: { date: string, tags: { color: string, label: string }[], border?: boolean }) {
  return (
    <div className={`flex items-center justify-between py-3 group cursor-pointer hover:px-2 -mx-2 transition-all duration-300 ${border ? 'border-b border-gray-50' : ''}`}>
      <span className="text-[13px] font-bold w-24 group-hover:text-gray-600 transition-colors">{date}</span>
      <div className="flex items-center gap-3 flex-1 px-4">
        {tags.map((tag, i) => (
          <div key={i} className="flex items-center gap-1.5">
            <div className={`w-1.5 h-1.5 rounded-full ${tag.color}`} />
            <span className="text-[13px] text-gray-500 font-medium">{tag.label}</span>
          </div>
        ))}
      </div>
      <ChevronRightSmall className="w-4 h-4 text-gray-300 group-hover:text-gray-800 group-hover:translate-x-1 transition-all" />
    </div>
  );
}

function PillarBadge({ color, label, fraction }: { color: string, label: string, fraction: string }) {
  return (
    <div className="flex items-center gap-1.5 text-[12px] font-semibold cursor-pointer group hover:bg-white hover:shadow-sm px-2 py-1 -mx-2 rounded-md transition-all">
      <div className={`w-1.5 h-1.5 rounded-full ${color} group-hover:scale-125 transition-transform`} />
      <span className="text-gray-600 group-hover:text-gray-900 transition-colors">{label}</span>
      <span className="text-gray-400">{fraction}</span>
    </div>
  );
}

type CellItem = {
  type: 'dot';
  color: string;
  text: string;
  badge?: { text: string, color: string };
};

function CalendarCell({ 
  date, 
  dim = false, 
  active = false, 
  rings = [],
  items = [],
  bars = []
}: { 
  date: string; 
  dim?: boolean; 
  active?: boolean;
  rings?: string[];
  items?: CellItem[];
  bars?: string[];
}) {
  return (
    <div className="border-r border-b border-gray-100/80 min-h-35 p-3 flex flex-col justify-between hover:bg-gray-50/80 hover:shadow-[inset_0_0_0_1px_rgba(229,231,235,1)] transition-all cursor-pointer group">
      
      {/* Date & Rings */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-1.5">
          <div className={`
            flex items-center justify-center text-[12px] font-semibold rounded-full
            ${active ? 'w-6 h-6 bg-[#111827] text-white' : 'w-6 h-6'}
            ${dim && !active ? 'text-gray-300' : (!active ? 'text-gray-500' : '')}
          `}>
            {date}
          </div>
          
          {/* Ring indicators */}
          {rings && rings.length > 0 && (
            <div className="flex items-center gap-0.5 mt-px">
              {rings.map((r, i) => (
                <div key={i} className={`w-1.5 h-1.5 rounded-full border-[1.5px] ${r} bg-transparent`} />
              ))}
            </div>
          )}
        </div>

        {/* Content Items */}
        <div className="flex flex-col gap-1.5 mt-1">
          {items.map((item, i) => (
            <div key={i} className="flex items-start gap-1.5">
              <div className={`w-1.5 h-1.5 rounded-full ${item.color} shrink-0 mt-1.5`} />
              <div className="flex flex-wrap items-center gap-1">
                <span className="text-[11px] font-medium text-gray-600 line-clamp-1 break-all leading-relaxed">
                  {item.text}
                </span>
                {item.badge && (
                  <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded ${item.badge.color}`}>
                    {item.badge.text}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bars */}
      <div className="flex gap-1 mt-4">
        {bars.length > 0 ? (
          bars.map((b, i) => (
            <div key={i} className={`h-0.75 rounded-full flex-1 ${b}`} />
          ))
        ) : (
          <>
            <div className={`h-0.75 rounded-full flex-1 bg-gray-100`} />
            <div className={`h-0.75 rounded-full flex-1 bg-gray-100`} />
          </>
        )}
      </div>

    </div>
  );
}
