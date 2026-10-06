"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { 
  Home, 
  BarChart2, 
  LineChart, 
  Zap, 
  PieChart, 
  Folder, 
  FileText, 
  Users, 
  Briefcase, 
  Sun, 
  Grid, 
  Settings, 
  Plus,
  ArrowUpRight,
  List,
  LayoutGrid
} from "lucide-react";

export default function MinimalDashboard() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-8 relative overflow-hidden font-sans text-slate-800 selection:bg-[#ff6b2b] selection:text-white">
      
      {/* Blueprint Grid Background */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.15]"
        style={{
          backgroundImage: "linear-gradient(#94a3b8 1px, transparent 1px), linear-gradient(90deg, #94a3b8 1px, transparent 1px)",
          backgroundSize: "60px 60px"
        }}
      />
      
      {/* Outer Crop Marks (Mockup style) */}
      <div className="absolute top-[40px] left-0 w-full h-[1px] bg-slate-300 opacity-40 border-dashed" />
      <div className="absolute top-0 left-[40px] h-full w-[1px] bg-slate-300 opacity-40 border-dashed" />
      <div className="absolute bottom-[40px] left-0 w-full h-[1px] bg-slate-300 opacity-40 border-dashed" />
      <div className="absolute top-0 right-[40px] h-full w-[1px] bg-slate-300 opacity-40 border-dashed" />

      {/* Main Dashboard Container */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 w-full max-w-[1240px] h-[800px] bg-white shadow-[0_20px_80px_rgba(0,0,0,0.07)] flex"
      >
        
        {/* Sidebar */}
        <div className="w-[260px] h-full bg-[#fcfcfc] border-r border-slate-200 flex flex-col pt-6 pb-6 px-5 relative z-10">
          
          {/* Logo / Account */}
          <div className="flex items-center gap-3 px-2 mb-10 cursor-pointer group">
            <div className="w-9 h-9 rounded-full bg-[#ff6b2b] flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform duration-300">
              {/* Star-like logo from screenshot */}
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z"/></svg>
            </div>
            <div className="flex-1">
              <h2 className="text-[14px] font-bold text-slate-900 leading-tight">Insightfy.AI</h2>
              <p className="text-[11px] font-mono text-slate-400">Professional Plan</p>
            </div>
            <svg className="w-3.5 h-3.5 text-slate-300 group-hover:text-slate-500 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m7 15 5 5 5-5M7 9l5-5 5 5"/></svg>
          </div>

          <div className="flex-1 overflow-y-auto no-scrollbar space-y-8 pr-2">
            {/* Analytics Section */}
            <div>
              <h3 className="text-[10px] font-mono font-bold text-slate-300 uppercase tracking-[0.2em] mb-4 px-2">Analytics</h3>
              <nav className="space-y-1">
                <NavItem icon={<Home className="w-[14px] h-[14px]" />} label="Overview" />
                <NavItem icon={<BarChart2 className="w-[14px] h-[14px]" />} label="Marketing Channels" />
                <NavItem icon={<LineChart className="w-[14px] h-[14px]" />} label="Analytics" />
                <NavItem icon={<Zap className="w-[14px] h-[14px]" />} label="Conversion Funnel" active />
                <NavItem icon={<PieChart className="w-[14px] h-[14px]" />} label="Ads Report" />
              </nav>
            </div>

            {/* Favourite Section */}
            <div>
              <div className="flex items-center justify-between px-2 mb-4">
                <h3 className="text-[10px] font-mono font-bold text-slate-300 uppercase tracking-[0.2em]">Favourite</h3>
                <Plus className="w-3.5 h-3.5 text-slate-300 cursor-pointer hover:text-slate-600 transition-colors" />
              </div>
              <nav className="space-y-1">
                <NavItem icon={<Folder className="w-[14px] h-[14px]" />} label="Retention Funnel" />
                <div className="pl-6 space-y-1 relative mt-1">
                  {/* Tree lines perfectly matched */}
                  <div className="absolute left-[19px] top-[-8px] bottom-4 w-px bg-slate-200" />
                  <div className="absolute left-[19px] top-[14px] w-3 h-px bg-slate-200" />
                  <div className="absolute left-[19px] top-[46px] w-3 h-px bg-slate-200" />
                  
                  <NavItem icon={<FileText className="w-[13px] h-[13px]" />} label="Funnel Cohort Analysis" sub />
                  <NavItem icon={<Users className="w-[13px] h-[13px]" />} label="Paid User Lifecycle" sub />
                </div>
                <NavItem icon={<Briefcase className="w-[14px] h-[14px]" />} label="Company Metric S1" />
              </nav>
            </div>

            {/* Settings Section */}
            <div>
              <div className="flex items-center justify-between px-2 mb-4">
                <h3 className="text-[10px] font-mono font-bold text-slate-300 uppercase tracking-[0.2em]">Settings</h3>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-300 cursor-pointer hover:text-slate-600 transition-colors" />
              </div>
              <nav className="space-y-1">
                <NavItem icon={<Sun className="w-[14px] h-[14px]" />} label="Appearance" />
                <NavItem icon={<Grid className="w-[14px] h-[14px]" />} label="Integrations" />
                <NavItem icon={<Settings className="w-[14px] h-[14px]" />} label="Account Settings" />
              </nav>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 bg-white p-10 overflow-y-auto no-scrollbar relative z-0">
          
          {/* Header 1 */}
          <div className="flex justify-between items-end mb-8 relative z-10">
            <div>
              <h1 className="text-[17px] font-bold text-slate-800 mb-1.5 tracking-tight">Conversion Performance</h1>
              <p className="text-[12px] font-mono text-slate-400">See how new users progress toward their first meaningful action</p>
            </div>
            <div className="flex gap-2">
              <button className="w-[30px] h-[30px] rounded border border-slate-200 flex items-center justify-center text-slate-400 hover:text-slate-700 hover:bg-slate-50 transition-colors">
                <List className="w-3.5 h-3.5" />
              </button>
              <button className="w-[30px] h-[30px] rounded border border-slate-200 flex items-center justify-center bg-slate-50 text-slate-700 shadow-sm transition-colors">
                <LayoutGrid className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Top Row Grid */}
          <div className="grid grid-cols-3 gap-[26px] mb-[44px]">
            <TopCard 
              title="Conversion Rate"
              value="24.30%"
              subtitle="Visit To Purchase"
              status="Increased"
              statusVal="6%"
              type="green"
              mounted={mounted}
            />
            <TopCard 
              title="Total Revenue"
              value="$1,601,241"
              subtitle="Excluding Returns Items"
              status="Decreased"
              statusVal="$1,250"
              type="red"
              mounted={mounted}
            />
            <TopCard 
              title="Total Visitors"
              value="22,407,705"
              subtitle="All Website Visitors"
              status="Increased"
              statusVal="33,857,2"
              type="green"
              mounted={mounted}
            />
          </div>

          {/* Header 2 */}
          <div className="mb-8 relative z-10">
            <h1 className="text-[17px] font-bold text-slate-800 mb-1.5 tracking-tight">Activation & Engagement</h1>
            <p className="text-[12px] font-mono text-slate-400">Track how users form early habits and move closer to long-term retention</p>
          </div>

          {/* Bottom Row Grid */}
          <div className="grid grid-cols-3 gap-[26px]">
            <BottomCard1 mounted={mounted} />
            <BottomCard2 mounted={mounted} />
            <BottomCard3 mounted={mounted} />
          </div>

        </div>

      </motion.div>
    </div>
  );
}

// -------------------------------------------------------------
// Sidebar Item Component
// -------------------------------------------------------------
function NavItem({ icon, label, active = false, sub = false }: { icon: React.ReactNode, label: string, active?: boolean, sub?: boolean }) {
  return (
    <div className={`
      flex items-center gap-3 px-3 py-1.5 rounded cursor-pointer transition-all duration-200 group
      ${active ? 'bg-white shadow-[0_2px_10px_rgba(0,0,0,0.03)] text-slate-900 border border-slate-100' : 'text-slate-500 hover:bg-slate-100/50 hover:text-slate-700'}
      ${sub ? 'text-[11.5px]' : 'text-[12.5px] font-medium'}
    `}>
      <span className={`${active ? 'text-[#ff6b2b]' : 'text-slate-400 group-hover:text-slate-500'} transition-colors`}>{icon}</span>
      <span className={`flex-1 truncate ${active ? 'font-bold tracking-tight' : ''}`}>{label}</span>
      {active && <motion.div layoutId="nav-indicator" className="w-[5px] h-[5px] bg-[#ff6b2b]" />}
    </div>
  );
}

// -------------------------------------------------------------
// Top Card Component
// -------------------------------------------------------------
function TopCard({ title, value, subtitle, status, statusVal, type, mounted }: any) {
  const isUp = status === "Increased";
  
  // Generating the exact bar patterns from screenshot
  const bars = Array.from({length: 16});

  return (
    <div className="relative border border-slate-200 bg-white pt-[22px] flex flex-col justify-between group hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-shadow duration-500">
      <div className="crop-mark-tl absolute top-0 left-0 transition-opacity opacity-40 group-hover:opacity-100" />
      <div className="crop-mark-tr absolute top-0 right-0 transition-opacity opacity-40 group-hover:opacity-100" />
      <div className="crop-mark-bl absolute bottom-0 left-0 transition-opacity opacity-40 group-hover:opacity-100" />
      <div className="crop-mark-br absolute bottom-0 right-0 transition-opacity opacity-40 group-hover:opacity-100" />

      <div className="px-5">
        <div className="flex justify-between items-start mb-6">
          <span className="text-[12px] font-mono text-slate-800 font-bold">{title}</span>
          <ArrowUpRight className="w-3.5 h-3.5 text-slate-300" />
        </div>
        
        <div className="flex justify-between items-end mb-5">
          <div>
            <div className="text-[22px] font-mono font-bold text-slate-900 leading-none mb-1.5 tracking-tight">{value}</div>
            <div className="text-[10px] font-mono text-slate-400">{subtitle}</div>
          </div>
          
          {/* Animated Mini Bar Chart */}
          <div className="flex items-end gap-[3px] h-[34px]">
            {bars.map((_, i) => {
              // Creating the two-tone effect seen in screenshot
              const isHighlight = i >= 10;
              const height = Math.max(15, Math.random() * 100);
              
              let bgColor = "";
              if (type === "green") {
                bgColor = isHighlight ? "#10b981" : "#a7f3d0";
              } else {
                bgColor = isHighlight ? "#fecaca" : "#ef4444";
              }

              return (
                <motion.div 
                  key={i} 
                  initial={{ height: 0 }}
                  animate={{ height: mounted ? `${height}%` : 0 }}
                  transition={{ duration: 0.8, delay: i * 0.03, ease: [0.16, 1, 0.3, 1] }}
                  className="w-[3px] rounded-t-[1px]"
                  style={{ backgroundColor: bgColor }} 
                />
              )
            })}
          </div>
        </div>
      </div>

      <div className="px-5 py-[14px] bg-[#f8fafc] border-t border-slate-100 text-[9px] font-mono text-slate-400">
        {title.split(" ")[0]} {status} by <span className={isUp ? 'text-emerald-500 font-bold' : 'text-red-500 font-bold'}>{isUp ? '↑' : '↓'} {statusVal}</span> vs <span className="text-slate-800 font-bold">last month</span>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// Bottom Card 1: Engagement Distribution (Animated Waveform)
// -------------------------------------------------------------
function BottomCard1({ mounted }: any) {
  return (
    <div className="relative border border-slate-200 bg-white p-[22px] flex flex-col h-[280px] group hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-shadow duration-500">
      <div className="crop-mark-tl absolute top-0 left-0 transition-opacity opacity-40 group-hover:opacity-100" />
      <div className="crop-mark-tr absolute top-0 right-0 transition-opacity opacity-40 group-hover:opacity-100" />
      <div className="crop-mark-bl absolute bottom-0 left-0 transition-opacity opacity-40 group-hover:opacity-100" />
      <div className="crop-mark-br absolute bottom-0 right-0 transition-opacity opacity-40 group-hover:opacity-100" />

      <div className="flex justify-between items-start mb-5 z-10">
        <span className="text-[12px] font-mono text-slate-800 font-bold">Engagement Distribution</span>
        <ArrowUpRight className="w-3.5 h-3.5 text-slate-300" />
      </div>
      
      <div className="mb-2 z-10">
        <div className="text-[22px] font-mono font-bold text-slate-900 leading-none mb-1.5 tracking-tight">12,606</div>
        <div className="text-[10px] font-mono text-slate-400">24.6% <span className="text-emerald-500 font-bold">↑</span> last 30 days</div>
      </div>

      {/* Animated Waveform Chart Centered */}
      <div className="flex-1 flex items-center justify-center gap-[4px] mt-2 relative">
        
        {/* Exact Tooltip from screenshot */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 10 }}
          transition={{ delay: 0.8 }}
          className="absolute top-[-10px] left-[52%] -translate-x-1/2 bg-white border border-slate-200 shadow-[0_4px_12px_rgba(0,0,0,0.05)] px-2.5 py-1.5 rounded-[3px] text-[9px] font-mono text-slate-400 z-20 flex items-center gap-1.5"
        >
          Max <span className="text-black font-bold">31,484</span>
        </motion.div>

        {Array.from({length: 19}).map((_, i) => {
          // Bell-curve pattern
          const distance = Math.abs(9 - i);
          const baseHeight = Math.max(10, 80 - (distance * 8));
          const isCenter = i >= 7 && i <= 11;
          
          return (
            <div key={i} className="flex flex-col gap-[3px] items-center justify-center h-[120px]">
              <motion.div 
                animate={{ 
                  height: mounted ? [`${baseHeight}%`, `${baseHeight + (Math.random()*15)}%`, `${baseHeight}%`] : 0 
                }}
                transition={{ duration: 2 + Math.random(), repeat: Infinity, ease: "easeInOut" }}
                className={`w-[4px] rounded-t-full ${isCenter ? 'bg-gradient-to-t from-[#8b5cf6] to-[#c4b5fd]' : 'bg-slate-200'}`}
              />
              <motion.div 
                animate={{ 
                  height: mounted ? [`${baseHeight * 0.6}%`, `${(baseHeight + (Math.random()*15)) * 0.6}%`, `${baseHeight * 0.6}%`] : 0 
                }}
                transition={{ duration: 2 + Math.random(), repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className={`w-[4px] rounded-b-full ${isCenter ? 'bg-gradient-to-b from-[#8b5cf6] to-[#c4b5fd]' : 'bg-slate-200'}`}
              />
            </div>
          )
        })}
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// Bottom Card 2: Trial Booking Rate (Animated Line Area Chart)
// -------------------------------------------------------------
function BottomCard2({ mounted }: any) {
  return (
    <div className="relative border border-slate-200 bg-white p-[22px] flex flex-col h-[280px] overflow-hidden group hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-shadow duration-500">
      <div className="crop-mark-tl absolute top-0 left-0 z-20 transition-opacity opacity-40 group-hover:opacity-100" />
      <div className="crop-mark-tr absolute top-0 right-0 z-20 transition-opacity opacity-40 group-hover:opacity-100" />
      <div className="crop-mark-bl absolute bottom-0 left-0 z-20 transition-opacity opacity-40 group-hover:opacity-100" />
      <div className="crop-mark-br absolute bottom-0 right-0 z-20 transition-opacity opacity-40 group-hover:opacity-100" />

      <div className="flex justify-between items-start mb-5 z-10 relative">
        <span className="text-[12px] font-mono text-slate-800 font-bold">Trial Booking Rate</span>
        <ArrowUpRight className="w-3.5 h-3.5 text-slate-300" />
      </div>
      
      <div className="mb-4 z-10 relative">
        <div className="text-[22px] font-mono font-bold text-slate-900 leading-none mb-1.5 tracking-tight">10.12%</div>
        <div className="text-[10px] font-mono text-slate-400">60.24% <span className="text-emerald-500 font-bold">↑</span> last 30 days</div>
      </div>

      {/* Line Chart Area */}
      <div className="absolute bottom-0 left-0 w-full h-[150px]">
        {/* Striped Background Pattern matched exactly */}
        <div 
          className="absolute inset-0 opacity-[0.07]"
          style={{ backgroundImage: "linear-gradient(90deg, #f97316 1px, transparent 1px)", backgroundSize: "8px 100%" }}
        />
        
        {/* Animated SVG Line and Area */}
        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
          <defs>
            <linearGradient id="orangeGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#f97316" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#f97316" stopOpacity="0" />
            </linearGradient>
          </defs>
          <motion.path 
            initial={{ opacity: 0 }}
            animate={{ opacity: mounted ? 1 : 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            d="M 0,100 L 0,80 C 15,40 25,90 40,60 C 50,40 65,30 70,25 C 80,15 90,40 100,5 L 100,100 Z" 
            fill="url(#orangeGrad)" 
          />
          <motion.path 
            initial={{ pathLength: 0 }}
            animate={{ pathLength: mounted ? 1 : 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            d="M 0,80 C 15,40 25,90 40,60 C 50,40 65,30 70,25 C 80,15 90,40 100,5" 
            fill="none" 
            stroke="#f97316" 
            strokeWidth="2" 
            strokeLinecap="round"
          />
          {/* Active Point */}
          <motion.circle 
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: mounted ? 1 : 0, opacity: mounted ? 1 : 0 }}
            transition={{ delay: 1.2, type: "spring" }}
            cx="70" cy="25" r="3" fill="white" stroke="#f97316" strokeWidth="2" 
          />
        </svg>

        {/* Tooltip precisely positioned */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: mounted ? 1 : 0, y: mounted ? 0 : 10 }}
          transition={{ delay: 1.4 }}
          className="absolute top-[8px] left-[52%] bg-white border border-slate-200 shadow-[0_8px_20px_rgba(0,0,0,0.06)] px-3 py-1.5 rounded-[3px] text-[10px] font-mono text-slate-600 z-20 flex flex-col gap-0.5"
        >
          <span className="text-slate-400 text-[8px]">Thu, Jan 24</span>
          <div className="font-bold flex items-center gap-1.5 text-[11px] text-slate-800">
            3,484 <span className="text-emerald-500 font-normal">+7.1%</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// Bottom Card 3: MAU (Dot Map Chart)
// -------------------------------------------------------------
function BottomCard3({ mounted }: any) {
  return (
    <div className="relative border border-slate-200 bg-white p-[22px] flex flex-col h-[280px] overflow-hidden group hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-shadow duration-500">
      <div className="crop-mark-tl absolute top-0 left-0 transition-opacity opacity-40 group-hover:opacity-100 z-30" />
      <div className="crop-mark-tr absolute top-0 right-0 transition-opacity opacity-40 group-hover:opacity-100 z-30" />
      <div className="crop-mark-bl absolute bottom-0 left-0 transition-opacity opacity-40 group-hover:opacity-100 z-30" />
      <div className="crop-mark-br absolute bottom-0 right-0 transition-opacity opacity-40 group-hover:opacity-100 z-30" />

      <div className="flex justify-between items-start mb-5 z-20 relative">
        <span className="text-[12px] font-mono text-slate-800 font-bold">Monthly Active Users (MAU)</span>
        <ArrowUpRight className="w-3.5 h-3.5 text-slate-300" />
      </div>
      
      <div className="mb-4 z-20 relative">
        <div className="text-[22px] font-mono font-bold text-slate-900 leading-none mb-1.5 tracking-tight">10,20,060</div>
        <div className="text-[10px] font-mono text-slate-400">24.6% <span className="text-emerald-500 font-bold">↑</span> last 30 days</div>
      </div>

      {/* Abstract World Map using SVG dots */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: mounted ? 0.6 : 0 }}
        transition={{ duration: 1.5 }}
        className="absolute bottom-6 left-6 right-6 h-[110px]"
      >
        <svg className="w-full h-full" viewBox="0 0 200 100" preserveAspectRatio="xMidYMid slice">
          {/* Detailed generative dot map representation of the world */}
          <g fill="#cbd5e1">
            {/* NA */}
            <circle cx="20" cy="20" r="1.2"/><circle cx="25" cy="18" r="1.2"/><circle cx="30" cy="22" r="1.2"/><circle cx="25" cy="25" r="1.2"/><circle cx="15" cy="15" r="1.2"/><circle cx="35" cy="20" r="1.2"/><circle cx="40" cy="25" r="1.2"/><circle cx="20" cy="30" r="1.2"/><circle cx="30" cy="35" r="1.2"/><circle cx="35" cy="30" r="1.2"/><circle cx="25" cy="35" r="1.2"/><circle cx="45" cy="30" r="1.2"/><circle cx="50" cy="35" r="1.2"/><circle cx="55" cy="40" r="1.2"/><circle cx="60" cy="45" r="1.2"/>
            {/* SA */}
            <circle cx="60" cy="60" r="1.2"/><circle cx="65" cy="65" r="1.2"/><circle cx="60" cy="70" r="1.2"/><circle cx="65" cy="75" r="1.2"/><circle cx="70" cy="70" r="1.2"/><circle cx="70" cy="60" r="1.2"/><circle cx="75" cy="65" r="1.2"/><circle cx="75" cy="80" r="1.2"/><circle cx="65" cy="85" r="1.2"/>
            {/* EU/AF */}
            <circle cx="95" cy="20" r="1.2"/><circle cx="100" cy="18" r="1.2"/><circle cx="105" cy="22" r="1.2"/><circle cx="100" cy="25" r="1.2"/><circle cx="110" cy="20" r="1.2"/><circle cx="115" cy="25" r="1.2"/><circle cx="90" cy="30" r="1.2"/><circle cx="100" cy="35" r="1.2"/><circle cx="105" cy="30" r="1.2"/><circle cx="100" cy="45" r="1.2"/><circle cx="105" cy="50" r="1.2"/><circle cx="100" cy="55" r="1.2"/><circle cx="110" cy="55" r="1.2"/><circle cx="115" cy="60" r="1.2"/><circle cx="110" cy="65" r="1.2"/><circle cx="105" cy="70" r="1.2"/><circle cx="115" cy="75" r="1.2"/>
            {/* ASIA */}
            <circle cx="125" cy="20" r="1.2"/><circle cx="130" cy="18" r="1.2"/><circle cx="135" cy="22" r="1.2"/><circle cx="140" cy="20" r="1.2"/><circle cx="145" cy="25" r="1.2"/><circle cx="150" cy="20" r="1.2"/><circle cx="130" cy="30" r="1.2"/><circle cx="140" cy="35" r="1.2"/><circle cx="145" cy="30" r="1.2"/><circle cx="155" cy="30" r="1.2"/><circle cx="160" cy="35" r="1.2"/><circle cx="165" cy="30" r="1.2"/><circle cx="150" cy="45" r="1.2"/><circle cx="155" cy="50" r="1.2"/><circle cx="150" cy="55" r="1.2"/><circle cx="160" cy="60" r="1.2"/><circle cx="170" cy="40" r="1.2"/><circle cx="175" cy="35" r="1.2"/>
            {/* AUS */}
            <circle cx="165" cy="75" r="1.2"/><circle cx="170" cy="75" r="1.2"/><circle cx="175" cy="80" r="1.2"/><circle cx="165" cy="85" r="1.2"/><circle cx="170" cy="85" r="1.2"/>
          </g>
        </svg>

        {/* Dynamic Radar Ping positioned exactly in Asia as per screenshot */}
        <div className="absolute top-[42%] right-[16%] flex items-center justify-center">
          <div className="w-[7px] h-[7px] rounded-full bg-[#ec4899] z-10" />
          <motion.div 
            animate={{ scale: [1, 3], opacity: [0.5, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
            className="absolute w-[24px] h-[24px] rounded-full border-[1.5px] border-[#ec4899]" 
          />
          <motion.div 
            animate={{ scale: [1, 4], opacity: [0.2, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 0.4 }}
            className="absolute w-[24px] h-[24px] rounded-full bg-[#ec4899]" 
          />
        </div>
      </motion.div>

      {/* Map Controls */}
      <div className="absolute bottom-5 left-5 flex flex-col border border-slate-200 bg-white rounded shadow-[0_2px_8px_rgba(0,0,0,0.04)] z-20">
        <button className="w-[22px] h-[22px] flex items-center justify-center text-slate-400 hover:text-slate-600 hover:bg-slate-50 border-b border-slate-100 transition-colors"><Plus className="w-[10px] h-[10px]" /></button>
        <button className="w-[22px] h-[22px] flex items-center justify-center text-slate-400 hover:text-slate-600 hover:bg-slate-50 transition-colors"><div className="w-2.5 h-px bg-current" /></button>
      </div>

      <div className="absolute bottom-5 right-5 flex flex-col border border-slate-200 bg-white rounded shadow-[0_2px_8px_rgba(0,0,0,0.04)] z-20">
        <button className="w-6 h-[22px] flex items-center justify-center text-slate-400 hover:text-slate-600 hover:bg-slate-50 font-mono text-[8px] font-bold transition-colors">&lt;&gt;</button>
      </div>
    </div>
  );
}
