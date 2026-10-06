"use client";

import React from "react";
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
  return (
    <div className="min-h-screen bg-white flex items-center justify-center p-8 relative overflow-hidden font-sans text-slate-800">
      
      {/* Blueprint Grid Background */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: "linear-gradient(#cbd5e1 1px, transparent 1px), linear-gradient(90deg, #cbd5e1 1px, transparent 1px)",
          backgroundSize: "40px 40px"
        }}
      />
      
      {/* Outer Crop Marks (Mockup style) */}
      <div className="absolute top-10 left-10 w-full h-[1px] bg-slate-300 opacity-50" />
      <div className="absolute top-10 left-10 h-full w-[1px] bg-slate-300 opacity-50" />
      <div className="absolute bottom-10 right-10 w-full h-[1px] bg-slate-300 opacity-50" />
      <div className="absolute bottom-10 right-10 h-full w-[1px] bg-slate-300 opacity-50" />

      {/* Main Dashboard Container */}
      <div className="relative z-10 w-full max-w-[1300px] h-[850px] bg-white border border-slate-200 shadow-2xl shadow-slate-200/50 flex">
        
        {/* Sidebar */}
        <div className="w-[260px] h-full bg-[#f8fafc] border-r border-slate-200 flex flex-col pt-6 pb-6 px-4">
          
          {/* Logo / Account */}
          <div className="flex items-center gap-3 px-2 mb-10 cursor-pointer">
            <div className="w-9 h-9 rounded-full bg-[#ff6b2b] flex items-center justify-center shadow-sm">
              <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
            </div>
            <div className="flex-1">
              <h2 className="text-[14px] font-bold text-slate-900 leading-tight">Insightfy.AI</h2>
              <p className="text-[11px] font-mono text-slate-500">Professional Plan</p>
            </div>
            <svg className="w-4 h-4 text-slate-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m7 15 5 5 5-5M7 9l5-5 5 5"/></svg>
          </div>

          <div className="flex-1 overflow-y-auto no-scrollbar space-y-8">
            {/* Analytics Section */}
            <div>
              <h3 className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest mb-3 px-2">Analytics</h3>
              <nav className="space-y-0.5">
                <NavItem icon={<Home className="w-[15px] h-[15px]" />} label="Overview" />
                <NavItem icon={<BarChart2 className="w-[15px] h-[15px]" />} label="Marketing Channels" />
                <NavItem icon={<LineChart className="w-[15px] h-[15px]" />} label="Analytics" />
                <NavItem icon={<Zap className="w-[15px] h-[15px]" />} label="Conversion Funnel" active />
                <NavItem icon={<PieChart className="w-[15px] h-[15px]" />} label="Ads Report" />
              </nav>
            </div>

            {/* Favourite Section */}
            <div>
              <div className="flex items-center justify-between px-2 mb-3">
                <h3 className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">Favourite</h3>
                <Plus className="w-3.5 h-3.5 text-slate-400 cursor-pointer hover:text-slate-700" />
              </div>
              <nav className="space-y-0.5">
                <NavItem icon={<Folder className="w-[15px] h-[15px]" />} label="Retention Funnel" />
                <div className="pl-6 space-y-0.5 relative">
                  {/* Tree lines */}
                  <div className="absolute left-[20px] top-0 bottom-4 w-px bg-slate-200" />
                  <div className="absolute left-[20px] top-[18px] w-3 h-px bg-slate-200" />
                  <div className="absolute left-[20px] top-[50px] w-3 h-px bg-slate-200" />
                  
                  <NavItem icon={<FileText className="w-[14px] h-[14px]" />} label="Funnel Cohort Analysis" sub />
                  <NavItem icon={<Users className="w-[14px] h-[14px]" />} label="Paid User Lifecycle" sub />
                </div>
                <NavItem icon={<Briefcase className="w-[15px] h-[15px]" />} label="Company Metric S1" />
              </nav>
            </div>

            {/* Settings Section */}
            <div>
              <div className="flex items-center justify-between px-2 mb-3">
                <h3 className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest">Settings</h3>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 cursor-pointer hover:text-slate-700" />
              </div>
              <nav className="space-y-0.5">
                <NavItem icon={<Sun className="w-[15px] h-[15px]" />} label="Appearance" />
                <NavItem icon={<Grid className="w-[15px] h-[15px]" />} label="Integrations" />
                <NavItem icon={<Settings className="w-[15px] h-[15px]" />} label="Account Settings" />
              </nav>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 bg-white p-10 overflow-y-auto no-scrollbar">
          
          {/* Header 1 */}
          <div className="flex justify-between items-end mb-8">
            <div>
              <h1 className="text-[18px] font-bold text-slate-800 mb-1">Conversion Performance</h1>
              <p className="text-[12px] font-mono text-slate-400">See how new users progress toward their first meaningful action</p>
            </div>
            <div className="flex gap-1">
              <button className="w-8 h-8 rounded border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-50 transition-colors">
                <List className="w-4 h-4" />
              </button>
              <button className="w-8 h-8 rounded border border-slate-200 flex items-center justify-center bg-slate-50 text-slate-800 shadow-sm transition-colors">
                <LayoutGrid className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Top Row Grid */}
          <div className="grid grid-cols-3 gap-6 mb-12">
            <TopCard 
              title="Conversion Rate"
              value="24.30%"
              subtitle="Visit To Purchase"
              status="Increased"
              statusVal="6%"
              chartColor="green"
            />
            <TopCard 
              title="Total Revenue"
              value="$1,601,241"
              subtitle="Excluding Returns Items"
              status="Decreased"
              statusVal="$1,250"
              chartColor="red"
            />
            <TopCard 
              title="Total Visitors"
              value="22,407,705"
              subtitle="All Website Visitors"
              status="Increased"
              statusVal="33,857,2"
              chartColor="green"
            />
          </div>

          {/* Header 2 */}
          <div className="mb-8">
            <h1 className="text-[18px] font-bold text-slate-800 mb-1">Activation & Engagement</h1>
            <p className="text-[12px] font-mono text-slate-400">Track how users form early habits and move closer to long-term retention</p>
          </div>

          {/* Bottom Row Grid */}
          <div className="grid grid-cols-3 gap-6">
            <BottomCard1 />
            <BottomCard2 />
            <BottomCard3 />
          </div>

        </div>

      </div>
    </div>
  );
}

// -------------------------------------------------------------
// Sidebar Item Component
// -------------------------------------------------------------
function NavItem({ icon, label, active = false, sub = false }: { icon: React.ReactNode, label: string, active?: boolean, sub?: boolean }) {
  return (
    <div className={`
      flex items-center gap-3 px-3 py-2 rounded-md cursor-pointer transition-colors
      ${active ? 'bg-white shadow-[0_2px_10px_rgba(0,0,0,0.02)] text-slate-800' : 'text-slate-500 hover:bg-slate-100'}
      ${sub ? 'text-[12px] py-1.5' : 'text-[13px] font-medium'}
    `}>
      <span className={active ? 'text-[#ff6b2b]' : 'text-slate-400'}>{icon}</span>
      <span className={`flex-1 truncate ${active ? 'font-bold' : ''}`}>{label}</span>
      {active && <div className="w-1.5 h-1.5 bg-[#ff6b2b] rounded-sm" />}
    </div>
  );
}

// -------------------------------------------------------------
// Top Card Component
// -------------------------------------------------------------
function TopCard({ title, value, subtitle, status, statusVal, chartColor }: any) {
  const isUp = status === "Increased";
  
  return (
    <div className="relative border border-slate-200 bg-white pt-5 flex flex-col justify-between">
      {/* Wireframe Crop Marks */}
      <div className="crop-mark-tl absolute top-0 left-0" />
      <div className="crop-mark-tr absolute top-0 right-0" />
      <div className="crop-mark-bl absolute bottom-0 left-0" />
      <div className="crop-mark-br absolute bottom-0 right-0" />

      <div className="px-5">
        <div className="flex justify-between items-start mb-4">
          <span className="text-[13px] font-mono text-slate-500">{title}</span>
          <ArrowUpRight className="w-4 h-4 text-slate-400" />
        </div>
        
        <div className="flex justify-between items-end mb-4">
          <div>
            <div className="text-[26px] font-mono font-semibold text-slate-800 leading-none mb-1">{value}</div>
            <div className="text-[11px] font-mono text-slate-400">{subtitle}</div>
          </div>
          
          {/* Mini Bar Chart */}
          <div className="flex items-end gap-[2px] h-[40px]">
            {Array.from({length: 12}).map((_, i) => (
              <div 
                key={i} 
                className="w-1 rounded-t-sm"
                style={{ 
                  height: `${Math.max(20, Math.random() * 100)}%`,
                  background: chartColor === 'green' ? 'linear-gradient(to top, #10b981, #34d399)' : 'linear-gradient(to top, #ef4444, #fca5a5)'
                }} 
              />
            ))}
          </div>
        </div>
      </div>

      <div className="px-5 py-3 bg-[#f8fafc] border-t border-slate-200 text-[10px] font-mono text-slate-500">
        {title.split(" ")[0]} {status} by <span className={isUp ? 'text-emerald-500 font-bold' : 'text-red-500 font-bold'}>{isUp ? '↑' : '↓'} {statusVal}</span> vs <span className="text-slate-800 font-bold">last month</span>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// Bottom Card 1: Engagement Distribution (Waveform Chart)
// -------------------------------------------------------------
function BottomCard1() {
  return (
    <div className="relative border border-slate-200 bg-white p-5 flex flex-col h-[280px]">
      <div className="crop-mark-tl absolute top-0 left-0" />
      <div className="crop-mark-tr absolute top-0 right-0" />
      <div className="crop-mark-bl absolute bottom-0 left-0" />
      <div className="crop-mark-br absolute bottom-0 right-0" />

      <div className="flex justify-between items-start mb-4 z-10">
        <span className="text-[13px] font-mono text-slate-500">Engagement Distribution</span>
        <ArrowUpRight className="w-4 h-4 text-slate-400" />
      </div>
      
      <div className="mb-4 z-10">
        <div className="text-[26px] font-mono font-semibold text-slate-800 leading-none mb-1">12,606</div>
        <div className="text-[11px] font-mono text-slate-400">24.6% <span className="text-emerald-500 font-bold">↑</span> last 30 days</div>
      </div>

      {/* Waveform Chart Centered */}
      <div className="flex-1 flex items-center justify-center gap-1.5 mt-4 relative">
        
        {/* Tooltip */}
        <div className="absolute top-[-10px] left-1/2 -translate-x-1/2 bg-white border border-slate-200 shadow-md px-2 py-1 rounded text-[10px] font-mono font-bold text-slate-700 z-20 flex items-center gap-1">
          Max <span className="text-black">31,484</span>
        </div>

        {Array.from({length: 21}).map((_, i) => {
          // Create a bell-curve-like height pattern
          const distance = Math.abs(10 - i);
          const height = Math.max(10, 80 - (distance * 8) + (Math.random() * 15 - 7));
          const isCenter = i >= 8 && i <= 12;
          
          return (
            <div key={i} className="flex flex-col gap-1 items-center justify-center h-full">
              <div 
                className={`w-[4px] rounded-t-full transition-all duration-500 ${isCenter ? 'bg-gradient-to-t from-[#8b5cf6] to-[#a78bfa]' : 'bg-slate-200'}`}
                style={{ height: `${height}%` }}
              />
              <div 
                className={`w-[4px] rounded-b-full transition-all duration-500 ${isCenter ? 'bg-gradient-to-b from-[#8b5cf6] to-[#a78bfa]' : 'bg-slate-200'}`}
                style={{ height: `${height * 0.6}%` }}
              />
            </div>
          )
        })}
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// Bottom Card 2: Trial Booking Rate (Line Area Chart)
// -------------------------------------------------------------
function BottomCard2() {
  return (
    <div className="relative border border-slate-200 bg-white p-5 flex flex-col h-[280px] overflow-hidden">
      <div className="crop-mark-tl absolute top-0 left-0" />
      <div className="crop-mark-tr absolute top-0 right-0" />
      <div className="crop-mark-bl absolute bottom-0 left-0" />
      <div className="crop-mark-br absolute bottom-0 right-0" />

      <div className="flex justify-between items-start mb-4 z-10 relative">
        <span className="text-[13px] font-mono text-slate-500">Trial Booking Rate</span>
        <ArrowUpRight className="w-4 h-4 text-slate-400" />
      </div>
      
      <div className="mb-4 z-10 relative">
        <div className="text-[26px] font-mono font-semibold text-slate-800 leading-none mb-1">10.12%</div>
        <div className="text-[11px] font-mono text-slate-400">60.24% <span className="text-emerald-500 font-bold">↑</span> last 30 days</div>
      </div>

      {/* Line Chart Area */}
      <div className="absolute bottom-0 left-0 w-full h-[140px]">
        {/* Striped Background (Vertical lines) */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{ backgroundImage: "linear-gradient(90deg, #f97316 1px, transparent 1px)", backgroundSize: "6px 100%" }}
        />
        
        {/* SVG Line and Area */}
        <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
          <defs>
            <linearGradient id="orangeGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#f97316" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#f97316" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path 
            d="M 0,100 L 0,80 C 15,40 25,90 40,60 C 50,40 65,30 70,25 C 80,15 90,40 100,5 L 100,100 Z" 
            fill="url(#orangeGrad)" 
          />
          <path 
            d="M 0,80 C 15,40 25,90 40,60 C 50,40 65,30 70,25 C 80,15 90,40 100,5" 
            fill="none" 
            stroke="#f97316" 
            strokeWidth="2.5" 
            strokeLinecap="round"
          />
          {/* Active Point */}
          <circle cx="70" cy="25" r="4" fill="white" stroke="#f97316" strokeWidth="2.5" />
        </svg>

        {/* Tooltip */}
        <div className="absolute top-[10px] left-[55%] bg-white border border-slate-200 shadow-lg px-3 py-2 rounded text-[11px] font-mono text-slate-700 z-20 flex flex-col gap-1">
          <span className="text-slate-400 text-[9px]">Thu, Jan 24</span>
          <div className="font-bold flex items-center gap-1 text-[12px]">
            3,484 <span className="text-emerald-500 font-normal">+7.1%</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// Bottom Card 3: MAU (Dot Map Chart)
// -------------------------------------------------------------
function BottomCard3() {
  return (
    <div className="relative border border-slate-200 bg-white p-5 flex flex-col h-[280px] overflow-hidden">
      <div className="crop-mark-tl absolute top-0 left-0" />
      <div className="crop-mark-tr absolute top-0 right-0" />
      <div className="crop-mark-bl absolute bottom-0 left-0" />
      <div className="crop-mark-br absolute bottom-0 right-0" />

      <div className="flex justify-between items-start mb-4 z-10 relative">
        <span className="text-[13px] font-mono text-slate-500">Monthly Active Users (MAU)</span>
        <ArrowUpRight className="w-4 h-4 text-slate-400" />
      </div>
      
      <div className="mb-4 z-10 relative">
        <div className="text-[26px] font-mono font-semibold text-slate-800 leading-none mb-1">10,20,060</div>
        <div className="text-[11px] font-mono text-slate-400">24.6% <span className="text-emerald-500 font-bold">↑</span> last 30 days</div>
      </div>

      {/* Abstract World Map using SVG dots */}
      <div className="absolute bottom-4 left-4 right-4 h-[130px] opacity-40">
        <svg className="w-full h-full" viewBox="0 0 200 100" preserveAspectRatio="xMidYMid slice">
          {/* A crude generative dot map representation of the world */}
          <g fill="#94a3b8">
            {/* NA */}
            <circle cx="30" cy="30" r="1.5"/><circle cx="35" cy="28" r="1.5"/><circle cx="40" cy="32" r="1.5"/><circle cx="35" cy="35" r="1.5"/><circle cx="25" cy="25" r="1.5"/><circle cx="45" cy="30" r="1.5"/><circle cx="50" cy="35" r="1.5"/><circle cx="30" cy="40" r="1.5"/><circle cx="40" cy="45" r="1.5"/><circle cx="45" cy="40" r="1.5"/><circle cx="35" cy="45" r="1.5"/>
            <circle cx="55" cy="40" r="1.5"/><circle cx="60" cy="45" r="1.5"/>
            {/* SA */}
            <circle cx="60" cy="60" r="1.5"/><circle cx="65" cy="65" r="1.5"/><circle cx="60" cy="70" r="1.5"/><circle cx="65" cy="75" r="1.5"/><circle cx="70" cy="70" r="1.5"/><circle cx="70" cy="60" r="1.5"/>
            {/* EU/AF */}
            <circle cx="95" cy="30" r="1.5"/><circle cx="100" cy="28" r="1.5"/><circle cx="105" cy="32" r="1.5"/><circle cx="100" cy="35" r="1.5"/><circle cx="110" cy="30" r="1.5"/><circle cx="115" cy="35" r="1.5"/><circle cx="90" cy="40" r="1.5"/><circle cx="100" cy="45" r="1.5"/><circle cx="105" cy="40" r="1.5"/>
            <circle cx="100" cy="55" r="1.5"/><circle cx="105" cy="60" r="1.5"/><circle cx="100" cy="65" r="1.5"/><circle cx="110" cy="65" r="1.5"/><circle cx="115" cy="70" r="1.5"/><circle cx="110" cy="75" r="1.5"/>
            {/* ASIA */}
            <circle cx="125" cy="30" r="1.5"/><circle cx="130" cy="28" r="1.5"/><circle cx="135" cy="32" r="1.5"/><circle cx="140" cy="30" r="1.5"/><circle cx="145" cy="35" r="1.5"/><circle cx="150" cy="30" r="1.5"/><circle cx="130" cy="40" r="1.5"/><circle cx="140" cy="45" r="1.5"/><circle cx="145" cy="40" r="1.5"/>
            <circle cx="155" cy="40" r="1.5"/><circle cx="160" cy="45" r="1.5"/><circle cx="165" cy="40" r="1.5"/>
            <circle cx="150" cy="55" r="1.5"/><circle cx="155" cy="60" r="1.5"/><circle cx="150" cy="65" r="1.5"/>
            {/* AUS */}
            <circle cx="165" cy="75" r="1.5"/><circle cx="170" cy="75" r="1.5"/><circle cx="175" cy="80" r="1.5"/><circle cx="165" cy="85" r="1.5"/>
          </g>
        </svg>

        {/* Radar Ping */}
        <div className="absolute top-[40%] right-[30%] w-3 h-3 rounded-full bg-[#ec4899] shadow-[0_0_0_4px_rgba(236,72,153,0.3)] z-10 animate-pulse" />
      </div>

      {/* Map Controls */}
      <div className="absolute bottom-4 left-4 flex flex-col border border-slate-200 bg-white rounded shadow-sm z-20">
        <button className="w-6 h-6 flex items-center justify-center text-slate-500 hover:bg-slate-50 border-b border-slate-200"><Plus className="w-3 h-3" /></button>
        <button className="w-6 h-6 flex items-center justify-center text-slate-500 hover:bg-slate-50"><div className="w-2.5 h-px bg-slate-500" /></button>
      </div>

      <div className="absolute bottom-4 right-4 flex flex-col border border-slate-200 bg-white rounded shadow-sm z-20">
        <button className="w-7 h-6 flex items-center justify-center text-slate-500 hover:bg-slate-50 font-mono text-[9px] font-bold">&lt;&gt;</button>
      </div>
    </div>
  );
}
