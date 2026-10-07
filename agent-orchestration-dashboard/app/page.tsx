"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Search, 
  Bell, 
  Home,
  Folder,
  GitBranch,
  ArrowUp,
  Activity,
  GitPullRequest,
  Check,
  XCircle,
  BarChart2,
  Server,
  Zap,
  RefreshCw
} from "lucide-react";

export default function AgentDashboard() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div className="min-h-screen bg-[#111113] text-zinc-300 font-sans selection:bg-blue-500/30 overflow-hidden relative flex flex-col items-center">
      
      {/* Background Image with Gradient Fade */}
      <div className="absolute top-0 left-0 w-full h-[600px] pointer-events-none z-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/background.jpg')" }}
        />
        {/* Gradients to blend the image into the dark background and darken the top */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#111113]/60 via-[#111113]/60 to-[#111113]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111113] via-[#111113]/50 to-transparent h-[600px]" />
        <div className="absolute top-0 w-full h-[100px] bg-gradient-to-b from-[#111113]/90 to-transparent" />
      </div>

      {/* Main App Window Container (Simulating a desktop window) */}
      <div className="w-full h-screen flex flex-col relative z-10 max-w-[1600px]">
        
        {/* Top Navbar */}
        <header className="flex justify-between items-center px-6 py-4 w-full">
          {/* Left: Home Dropdown */}
          <button className="flex items-center gap-2 bg-[#18181b]/80 backdrop-blur-md border border-[#27272a] hover:bg-[#27272a] transition-colors rounded-full px-3 py-1.5 text-[13px] font-medium text-zinc-400">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
            <span className="bg-zinc-800 text-yellow-500 text-[10px] px-1.5 py-0.5 rounded-md leading-none ml-1">3</span>
            <span className="ml-1 opacity-50">▾</span>
          </button>

          {/* Right: Search & Notifications */}
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 bg-[#18181b]/80 backdrop-blur-md border border-[#27272a] hover:bg-[#27272a] transition-colors rounded-full px-4 py-1.5 text-[13px] font-medium text-zinc-400">
              <span>Search</span>
              <span className="text-[10px] opacity-60">⌘K</span>
            </button>
            <button className="relative bg-[#18181b]/80 backdrop-blur-md border border-[#27272a] hover:bg-[#27272a] transition-colors rounded-full w-[34px] h-[34px] flex items-center justify-center text-zinc-400">
              <Bell className="w-4 h-4" />
              <span className="absolute top-0 right-0 translate-x-1/4 -translate-y-1/4 bg-yellow-600 text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center border-2 border-[#111113]">1</span>
            </button>
          </div>
        </header>

        {/* Hero Area: Search / Input Box */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center mt-[120px] mb-[60px] w-full px-4"
        >
          <h1 className="text-[20px] font-bold text-white mb-6 tracking-tight drop-shadow-md">What should your agents work on?</h1>
          
          {/* Complex Input Container */}
          <div className="w-full max-w-[640px] bg-[#18181b]/90 backdrop-blur-xl border border-[#27272a] hover:border-[#3f3f46] transition-colors duration-500 rounded-xl overflow-hidden flex flex-col group">
            
            {/* Tabs Row */}
            <div className="flex items-center justify-between border-b border-[#27272a] bg-[#121214]/50">
              <div className="flex items-center">
                <button className="px-4 py-2.5 text-[12px] font-medium text-white bg-[#1e1e20] border-r border-[#27272a]">New task</button>
                <button className="px-4 py-2.5 text-[12px] font-medium text-zinc-500 hover:text-zinc-300 transition-colors">Running agents <span className="opacity-50 ml-1">10</span></button>
              </div>
              <div className="flex items-center gap-2 px-3">
                <button className="text-zinc-500 hover:text-zinc-300 transition-colors"><ListIcon /></button>
                <button className="text-zinc-500 hover:text-zinc-300 transition-colors"><GridIcon /></button>
              </div>
            </div>

            {/* Input Area */}
            <div className="p-4 bg-[#121214] min-h-[100px]">
              <textarea 
                placeholder="Describe a task, a bug to fix, an idea to try..."
                className="w-full bg-transparent text-[14px] text-white placeholder-zinc-600 outline-none resize-none h-[40px]"
              />
            </div>

            {/* Footer Row */}
            <div className="flex items-center justify-between p-2.5 bg-[#121214] border-t border-[#27272a]">
              <div className="flex items-center gap-2">
                <button className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md hover:bg-[#1e1e20] text-zinc-400 text-[12px] transition-colors">
                  <Folder className="w-3.5 h-3.5" /> evals <span className="opacity-50 ml-1">▾</span>
                </button>
                <button className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md hover:bg-[#1e1e20] text-zinc-400 text-[12px] transition-colors">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500" /> gpu
                </button>
                <button className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md hover:bg-[#1e1e20] text-zinc-400 text-[12px] transition-colors">
                  <GitBranch className="w-3.5 h-3.5" /> New worktree
                </button>
              </div>
              
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5 text-[12px] font-medium text-red-400 px-2 group-hover:text-red-300 transition-colors">
                  <motion.span 
                    animate={{ opacity: [1, 0.4, 1] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    className="text-[16px] leading-none mb-1"
                  >*</motion.span> Claude Code
                </div>
                <button className="w-7 h-7 rounded-md bg-[#27272a] hover:bg-[#3f3f46] text-white flex items-center justify-center transition-colors">
                  <ArrowUp className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Widgets Grid Area */}
        <div className="flex-1 w-full max-w-[1200px] mx-auto px-6 overflow-y-auto no-scrollbar pb-10">
          
          <div className="flex justify-end mb-4 w-full">
            <button className="flex items-center gap-1.5 text-[12px] font-medium text-zinc-400 hover:text-white transition-colors">
              <GridIcon /> Customize
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
            
            {/* Left Column */}
            <div className="flex flex-col gap-4">
              
              {/* Working Now */}
              <WidgetContainer delay={0.1}>
                <WidgetHeader icon={<Activity className="w-3.5 h-3.5 text-blue-400" />} title="Working now" count={1} />
                <div className="mt-4 flex flex-col gap-1 group">
                  <div className="flex items-center justify-between">
                    <h3 className="text-[14px] font-bold text-white flex items-center gap-2 group-hover:text-blue-100 transition-colors">
                      <div className="w-3.5 h-3.5 border-2 border-blue-500 rounded-full border-t-transparent animate-spin" />
                      Tune the judge prompt
                    </h3>
                    <div className="flex items-center gap-1.5 text-[12px] text-zinc-400 font-mono">
                      <motion.span 
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="text-red-500"
                      >*</motion.span> 2m 13s
                    </div>
                  </div>
                  <div className="pl-5 text-[11px] font-mono text-zinc-500 truncate mt-1">
                    Running <span className="text-zinc-400">pnpm test --filter checkout...</span> RUNS payments/webhook.test.ts
                  </div>
                </div>
              </WidgetContainer>

              {/* Git Activity */}
              <WidgetContainer delay={0.2}>
                <WidgetHeader icon={<BarChart2 className="w-3.5 h-3.5 text-zinc-400" />} title="Git activity" />
                <div className="mt-4 flex items-end justify-between">
                  <div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-[28px] font-bold text-white leading-none">120</span>
                      <span className="text-[13px] text-zinc-500 font-medium">commits · 14 days</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-[11px] font-mono">
                    <span className="text-emerald-400">+8.7k</span>
                    <span className="text-red-400">-3.0k</span>
                  </div>
                </div>
                
                {/* Bar Chart Recreation */}
                <div className="mt-6 w-full h-[60px] flex items-end gap-[3px]">
                  {[3, 4, 3, 2, 10, 10, 9, 2, 4, 12, 14, 15, 12, 6].map((h, i) => (
                    <div key={i} className="flex-1 flex flex-col justify-end items-center gap-2 h-full group">
                      <motion.div 
                        initial={{ height: 0 }}
                        animate={{ height: mounted ? `${(h/15)*100}%` : 0 }}
                        transition={{ duration: 0.8, delay: 0.3 + (i * 0.03), ease: [0.16, 1, 0.3, 1] }}
                        className="w-full bg-[#2563eb] rounded-[2px] group-hover:bg-[#60a5fa] transition-colors cursor-pointer relative"
                      >
                        <div className="absolute inset-0 bg-blue-400/20 opacity-0 group-hover:opacity-100 blur-[4px] transition-opacity" />
                      </motion.div>
                      <span className="text-[8px] font-mono text-zinc-600 uppercase group-hover:text-zinc-300 transition-colors">
                        {['W','T','F','S','S','S','M','T','W','T','F','S','S','M'][i]}
                      </span>
                    </div>
                  ))}
                </div>
              </WidgetContainer>

              {/* Boxes */}
              <WidgetContainer delay={0.3}>
                <WidgetHeader icon={<Server className="w-3.5 h-3.5 text-zinc-400" />} title="Boxes" />
                <div className="mt-4 flex flex-col gap-3">
                  
                  {/* Box 1 */}
                  <div className="flex flex-col gap-1.5 p-2 rounded-lg hover:bg-[#27272a]/50 transition-colors cursor-pointer">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        <span className="text-[13px] font-bold text-white">devl</span>
                        <span className="text-[12px] text-zinc-500">8 CPU · 16.0 GB</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 text-[10px] font-mono text-zinc-500 mt-1">
                      <span>CPU <span className="text-zinc-400">15%</span></span>
                      <span>Mem <span className="text-zinc-400">58%</span></span>
                      <span>Disk <span className="text-zinc-400">44%</span></span>
                    </div>
                    {/* Tiny Progress Bars */}
                    <div className="flex items-center gap-1 h-[2px] mt-0.5">
                      <div className="h-full bg-emerald-500/80 rounded-full" style={{ width: '15%' }} />
                      <div className="h-full bg-[#27272a] rounded-full flex-1" />
                    </div>
                  </div>

                  {/* Box 2 */}
                  <div className="flex flex-col gap-1.5 p-2 rounded-lg hover:bg-[#27272a]/50 transition-colors cursor-pointer relative">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        <span className="text-[13px] font-bold text-white">gpu</span>
                        <span className="text-[12px] text-zinc-500">32 CPU · 128 GB</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-yellow-600" />
                        <span className="text-[10px] font-bold text-zinc-400">1</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 text-[10px] font-mono text-zinc-500 mt-1">
                      <span>CPU <span className="text-zinc-400">13%</span></span>
                      <span>Mem <span className="text-zinc-400">32%</span></span>
                      <span>Disk <span className="text-zinc-400">42%</span></span>
                    </div>
                    <div className="flex items-center gap-1 h-[2px] mt-0.5">
                      <div className="h-full bg-emerald-500/80 rounded-full" style={{ width: '13%' }} />
                      <div className="h-full bg-[#27272a] rounded-full flex-1" />
                    </div>
                  </div>

                  <div className="text-[12px] text-zinc-500 font-medium pl-2 pt-1 cursor-pointer hover:text-zinc-300 transition-colors">
                    +1 more box
                  </div>
                </div>
              </WidgetContainer>

              {/* Recent Areas */}
              <WidgetContainer delay={0.4}>
                <WidgetHeader icon={<Zap className="w-3.5 h-3.5 text-zinc-400" />} title="Recent areas" />
                <div className="mt-4 flex items-center justify-between p-2 rounded-lg hover:bg-[#27272a] transition-all cursor-pointer group hover:scale-[1.02]">
                  <div className="flex items-center gap-2 text-[13px] font-medium text-zinc-300 group-hover:text-white transition-colors">
                    <GitBranch className="w-3.5 h-3.5 text-zinc-500 group-hover:text-blue-400 transition-colors" />
                    shop / qa-deck
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] font-medium text-zinc-500">
                    <motion.div 
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="w-1.5 h-1.5 rounded-full bg-yellow-600" 
                    />
                    devl <span className="opacity-50 group-hover:opacity-100 transition-opacity">now</span>
                  </div>
                </div>
              </WidgetContainer>
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-4">
              
              {/* Pull Requests */}
              <WidgetContainer delay={0.15}>
                <WidgetHeader icon={<GitPullRequest className="w-3.5 h-3.5 text-zinc-400" />} title="Pull requests" count={2} />
                
                <div className="mt-4 flex flex-col gap-5">
                  {/* Group 1 */}
                  <div>
                    <h4 className="text-[11px] font-bold text-yellow-600 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      Waiting on your review <span className="opacity-50">· 2</span>
                    </h4>
                    <div className="flex flex-col gap-0.5">
                      <PRItem icon={<Check className="w-3.5 h-3.5 text-emerald-500" />} title="Speed up product search with a trigra..." id="shap#1291" author="ana-rng" />
                      <PRItem icon={<div className="w-3.5 h-3.5 rounded-full border-2 border-zinc-500" />} title="Add a CSV export for orders" id="shap#1293" author="kofi-b" />
                    </div>
                  </div>

                  {/* Group 2 */}
                  <div>
                    <h4 className="text-[11px] font-bold text-zinc-500 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                      Yours <span className="opacity-50">· 4</span>
                    </h4>
                    <div className="flex flex-col gap-0.5">
                      <PRItem icon={<Check className="w-3.5 h-3.5 text-emerald-500" />} title="Retry checkout webhooks with backoff" id="shap#1287" author="Approved" authorColor="text-zinc-500" />
                      <PRItem icon={<XCircle className="w-3.5 h-3.5 text-red-500" />} title="Fix the flaky checkout e2e test" id="shap#1279" author="In review" authorColor="text-zinc-500" />
                      <PRItem icon={<div className="w-3.5 h-3.5 rounded-full border-2 border-zinc-500" />} title="Weekly notes template" id="notes#54" author="Draft" authorColor="text-zinc-500" />
                      <PRItem icon={<Check className="w-3.5 h-3.5 text-emerald-500" />} title="Dark logo for transactional emails" id="shap#1270" author="Changes" authorColor="text-zinc-500" />
                    </div>
                  </div>
                </div>
              </WidgetContainer>

              {/* Running Services */}
              <WidgetContainer delay={0.25}>
                <WidgetHeader icon={<Activity className="w-3.5 h-3.5 text-zinc-400" />} title="Running services" />
                <div className="mt-4 flex flex-col gap-1.5">
                  <ServiceItem port=":3000" name="shop" type="node" />
                  <ServiceItem port=":3001" name="shop / checkout-fix" type="next dev" />
                  <ServiceItem port=":3002" name="shop / order-export" type="vite" />
                  <div className="text-[12px] text-zinc-500 font-medium pl-2 pt-1 mt-1 cursor-pointer hover:text-white transition-colors">
                    +5 more listening
                  </div>
                </div>
              </WidgetContainer>

              {/* CI Failures */}
              <WidgetContainer delay={0.35}>
                <WidgetHeader icon={<XCircle className="w-3.5 h-3.5 text-zinc-400" />} title="CI failures" />
                <div className="mt-4 flex items-center justify-between p-2 rounded-lg hover:bg-[#27272a] transition-all cursor-pointer group hover:scale-[1.02]">
                  <div className="flex items-center gap-2 text-[13px] font-medium text-zinc-300 group-hover:text-white transition-colors">
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500 group-hover:shadow-[0_0_8px_rgba(239,68,68,0.6)] transition-shadow" />
                    <span className="font-bold text-white group-hover:text-red-400 transition-colors">e2e (chromium)</span>
                    <span className="text-zinc-500 mx-1">·</span>
                    shop / me/ci-flake
                  </div>
                  <div className="text-[11px] font-medium text-zinc-500 group-hover:text-red-400 transition-colors">
                    12m
                  </div>
                </div>
              </WidgetContainer>

            </div>
          </div>
        </div>
        
        {/* Footer Overlay button */}
        <div className="absolute bottom-6 right-6 z-50">
          <button className="flex items-center gap-1.5 bg-[#18181b]/80 backdrop-blur-md border border-[#27272a] hover:bg-[#27272a] text-zinc-400 text-[12px] font-medium px-3 py-1.5 rounded-full transition-colors">
            <RefreshCw className="w-3.5 h-3.5" /> 1 loop <ArrowUp className="w-3 h-3 ml-1" />
          </button>
        </div>

      </div>
    </div>
  );
}

// -------------------------------------------------------------
// Helper Components
// -------------------------------------------------------------

function WidgetContainer({ children, delay = 0 }: { children: React.ReactNode, delay?: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: delay, ease: [0.16, 1, 0.3, 1] }}
      className="w-full bg-[#18181b]/95 backdrop-blur-md border border-[#27272a] hover:border-[#3f3f46] hover:bg-[#18181b] transition-all duration-300 rounded-[14px] p-5 relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent rounded-[14px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      {children}
    </motion.div>
  );
}

function WidgetHeader({ icon, title, count }: { icon: React.ReactNode, title: string, count?: number }) {
  return (
    <div className="flex items-center gap-2">
      {icon}
      <h2 className="text-[12px] font-bold text-zinc-400 uppercase tracking-wide">{title}</h2>
      {count !== undefined && (
        <span className="text-yellow-600 text-[12px] font-bold ml-1">{count}</span>
      )}
    </div>
  );
}

function PRItem({ icon, title, id, author, authorColor = "text-zinc-300" }: any) {
  return (
    <div className="flex items-center justify-between p-2 -mx-2 rounded-lg hover:bg-[#27272a] hover:px-3 transition-all duration-300 cursor-pointer group">
      <div className="flex items-center gap-3 overflow-hidden">
        <div className="flex-shrink-0 w-4 flex justify-center group-hover:scale-110 transition-transform">{icon}</div>
        <span className="text-[13px] font-medium text-zinc-300 group-hover:text-white transition-colors truncate">{title}</span>
      </div>
      <div className="flex items-center gap-4 flex-shrink-0 ml-4">
        <span className="text-[11px] font-mono text-zinc-500 group-hover:text-zinc-400 transition-colors">{id}</span>
        <span className={`text-[12px] font-medium w-16 text-right truncate ${authorColor}`}>{author}</span>
      </div>
    </div>
  );
}

function ServiceItem({ port, name, type }: any) {
  return (
    <div className="flex items-center justify-between p-2 -mx-2 rounded-lg hover:bg-[#27272a] hover:px-3 transition-all duration-300 cursor-pointer group">
      <div className="flex items-center gap-4">
        <span className="text-[13px] font-bold text-white font-mono w-12 group-hover:text-blue-400 transition-colors">{port}</span>
        <span className="text-[13px] font-medium text-zinc-300 group-hover:text-white transition-colors">{name}</span>
      </div>
      <span className="text-[11px] font-medium text-zinc-500 group-hover:text-zinc-400 transition-colors">{type}</span>
    </div>
  );
}

function ListIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line>
    </svg>
  );
}

function GridIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect>
    </svg>
  );
}
