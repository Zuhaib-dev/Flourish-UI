"use client";

import React, { useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import { 
  Search, 
  Plus,
  PanelLeftClose,
  ChevronDown,
  Home,
  Bot,
  CheckSquare,
  Activity,
  Star,
  Settings,
  HelpCircle,
  Bell,
  RotateCcw,
  BarChart2,
  Share2,
  Mail,
  MoreHorizontal,
  ArrowUpRight,
  TrendingUp,
  TrendingDown,
  ChevronUp,
  Image as ImageIcon
} from "lucide-react";

export default function AgentChatUI() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const containerVars: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVars: Variants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <div className="flex h-screen w-full bg-[#f9fafb] text-[#111827] font-sans overflow-hidden selection:bg-blue-100">
      
      {/* Sidebar */}
      <aside className="w-[260px] flex-shrink-0 flex flex-col h-full bg-[#f9fafb] border-r border-transparent">
        
        {/* Sidebar Header */}
        <div className="px-4 pt-4 pb-2 flex items-center justify-between">
          <button className="flex items-center gap-2 hover:bg-gray-100 p-1.5 -ml-1.5 rounded-lg transition-colors group">
            <div className="w-5 h-5 rounded-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 group-hover:scale-105 transition-transform shadow-sm border border-gray-700">
              {/* Better Acme Logo (Abstract lines) */}
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round">
                <path d="M4 8h16M4 16h10" />
              </svg>
            </div>
            <span className="font-semibold text-[14px]">Acme Inc.</span>
            <ChevronDown className="w-3.5 h-3.5 text-gray-400 group-hover:text-gray-600 transition-colors" />
          </button>
          
          <button className="text-gray-400 hover:text-gray-700 transition-colors p-1 rounded-md hover:bg-gray-100">
            <PanelLeftClose className="w-[18px] h-[18px]" />
          </button>
        </div>

        {/* New Button */}
        <div className="px-4 py-2">
          <button className="w-full bg-white border border-gray-200 hover:border-gray-300 hover:shadow-sm text-[13px] font-medium py-1.5 rounded-full flex items-center justify-center gap-1.5 transition-all">
            <Plus className="w-4 h-4 text-gray-500" /> New
          </button>
        </div>

        {/* Search */}
        <div className="px-4 py-2">
          <div className="relative group">
            <Search className="w-3.5 h-3.5 text-gray-400 absolute left-2.5 top-1/2 -translate-y-1/2" />
            <input 
              type="text" 
              placeholder="Search anything" 
              className="w-full bg-transparent border border-gray-200 text-[13px] rounded-lg pl-8 pr-8 py-1.5 focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-all placeholder:text-gray-400"
            />
            <div className="absolute right-2.5 top-1/2 -translate-y-1/2 flex items-center text-[10px] text-gray-400 font-medium">
              <span className="text-[12px] mr-0.5">⌘</span> K
            </div>
          </div>
        </div>

        {/* Navigation Scroll Area */}
        <div className="flex-1 overflow-y-auto no-scrollbar px-3 py-2 flex flex-col gap-6">
          
          {/* Main Nav */}
          <div className="flex flex-col gap-0.5">
            <NavItem icon={<Home />} label="Overview" />
            <NavItem icon={<Bot />} label="Agents" right={<div className="flex items-center gap-1.5"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500" /><span className="text-[11px] text-gray-400">4</span></div>} />
            <NavItem icon={<CheckSquare />} label="Tasks" right={<span className="text-[11px] text-gray-400">12</span>} />
            <NavItem icon={<Activity />} label="Activity" />
          </div>

          {/* Favorites */}
          <div className="flex flex-col gap-0.5">
            <div className="px-2 pb-1 text-[11px] font-semibold text-gray-400 uppercase tracking-wider">Favorites</div>
            <NavItem icon={<SunIcon />} label="SEO Specialist" active />
            <NavItem icon={<div className="text-red-400"><Bot size={16} /></div>} label="Content Writer" />
          </div>

          {/* Folders */}
          <div className="flex flex-col gap-0.5">
            <NavAccordion label="Marketing" />
            <NavAccordion label="Automation" />
            <NavAccordion label="Integrations" open items={[
              { icon: <BrandIcon name="google-analytics" />, label: "Google Analytics" },
              { icon: <BrandIcon name="meta" />, label: "Meta Ads" },
              { icon: <BrandIcon name="google-ads" />, label: "Google Ads" },
              { icon: <BrandIcon name="wordpress" />, label: "Wordpress" },
              { icon: <BrandIcon name="mailchimp" />, label: "Mailchimp" },
              { icon: <BrandIcon name="canva" />, label: "Canva" },
            ]} />
          </div>
        </div>

        {/* Footer Nav */}
        <div className="p-3 border-t border-gray-100 flex flex-col gap-0.5">
          <NavItem icon={<HelpCircle />} label="Help" />
          <NavItem icon={<Settings />} label="Settings" />
          <NavItem icon={<div className="w-4 h-4 rounded-full border border-gray-300 flex items-center justify-center text-[8px] font-bold">✨</div>} label="What's new" right={<div className="w-1.5 h-1.5 rounded-full bg-blue-500" />} />
          
          <div className="mt-2 px-2 py-1.5 flex items-center justify-between hover:bg-gray-100 rounded-lg cursor-pointer transition-colors group">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-gray-200 overflow-hidden">
                <img src={`https://api.dicebear.com/7.x/notionists/svg?seed=Tugba&backgroundColor=e5e7eb`} alt="User" />
              </div>
              <span className="text-[13px] font-medium">Tugba Sel</span>
            </div>
            <MoreHorizontal className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 h-full p-4 pl-0">
        <div className="bg-white w-full h-full rounded-[20px] border border-gray-200 shadow-[0_4px_24px_rgba(0,0,0,0.02)] flex flex-col overflow-hidden relative">
          
          {/* Chat Header */}
          <header className="px-6 py-4 flex items-center justify-between border-b border-transparent z-10 bg-white/80 backdrop-blur-md">
            <div className="flex items-center gap-3">
              <button className="p-2 border border-gray-200 rounded-xl hover:bg-gray-50 text-gray-500 transition-colors">
                <RotateCcw className="w-4 h-4" />
              </button>
              
              {/* Agent Pill */}
              <div className="flex items-center gap-2 bg-white border border-gray-200 shadow-sm rounded-full px-3 py-1.5">
                <SunIcon className="w-4 h-4 text-blue-500" />
                <span className="text-[13px] font-semibold">SEO Specialist</span>
                <div className="w-2 h-2 rounded-full bg-emerald-500 relative ml-1">
                  <div className="absolute inset-0 rounded-full bg-emerald-500 animate-ping opacity-50" />
                </div>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button className="text-gray-400 hover:text-gray-700 transition-colors relative">
                <Bell className="w-5 h-5" />
                <div className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full border-2 border-white" />
              </button>
              
              {/* Credits */}
              <div className="flex items-center gap-1.5 bg-gray-50 rounded-full pl-1.5 pr-3 py-1 border border-gray-100">
                <svg className="w-5 h-5 text-blue-500 -rotate-90" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                  <circle cx="12" cy="12" r="8" stroke="currentColor" strokeOpacity="0.2" />
                  <path d="M12 4a8 8 0 0 1 8 8" />
                </svg>
                <span className="text-[13px] font-semibold text-gray-700">12,450</span>
              </div>

              <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden cursor-pointer border border-gray-200">
                <img src={`https://api.dicebear.com/7.x/notionists/svg?seed=Tugba&backgroundColor=e5e7eb`} alt="User" />
              </div>
            </div>
          </header>

          {/* Chat Feed */}
          <div className="flex-1 overflow-y-auto px-6 py-6 pb-32 flex flex-col gap-6">
            <motion.div variants={containerVars} initial="hidden" animate={mounted ? "show" : "hidden"} className="flex flex-col gap-6 max-w-[800px] mx-auto w-full">
              
              {/* User Message 1 */}
              <motion.div variants={itemVars} className="flex flex-col items-end gap-1">
                <div className="bg-[#fcfcfd] border border-gray-100 text-[#4b5563] px-4 py-2.5 rounded-2xl rounded-tr-sm text-[14px] leading-relaxed max-w-[85%] shadow-sm">
                  Analyze our Meta Ads performance and recommend a new budget.
                </div>
                <span className="text-[10px] text-gray-400 font-medium px-1">2:14 PM</span>
              </motion.div>

              {/* Agent Message 1 */}
              <motion.div variants={itemVars} className="flex flex-col items-start gap-4 max-w-[90%]">
                
                {/* Meta Indicator */}
                <div className="flex items-center gap-1.5 text-[12px] text-gray-500 font-medium mb-1">
                  <div className="w-4 h-4 rounded-full bg-blue-50 flex items-center justify-center">
                    <BrandIcon name="meta" size={10} />
                  </div>
                  Connected to Meta Ads · Analyzed 12 campaigns
                </div>

                <div className="text-[14px] leading-relaxed text-gray-700">
                  <p className="mb-4">I analyzed your last 30 days across 12 campaigns.</p>
                  <p>Spend is up 6%, but blended ROAS dropped from 2.7x to 2.4x. Most of the decline is coming from Broad US.</p>
                </div>

                {/* Performance Snapshot Card */}
                <div className="w-full bg-white border border-gray-200 rounded-2xl p-5 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
                  <h3 className="text-[14px] font-semibold mb-4">Performance Snapshot</h3>
                  <div className="grid grid-cols-4 gap-4">
                    <StatBox label="Spend" value="$18.4k" change="+6%" trend="up" />
                    <StatBox label="ROAS" value="2.4x" change="↓0.3" trend="down" />
                    <StatBox label="CPA" value="$34.80" change="↑11%" trend="up" />
                    <StatBox label="CTR" value="1.82%" change="↑0.2pt" trend="up" color="text-emerald-500" />
                  </div>
                </div>

                <div className="text-[14px] leading-relaxed text-gray-700 mt-2">
                  <p>I'd shift some budget toward your two retargeting campaigns.</p>
                </div>

                {/* Recommended Allocation Card */}
                <div className="w-full bg-white border border-gray-200 rounded-2xl p-5 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
                  <div className="flex justify-between items-center mb-5">
                    <h3 className="text-[14px] font-semibold">Recommended Allocation</h3>
                    <span className="text-[11px] font-medium text-gray-400">2.9x ROAS</span>
                  </div>
                  
                  <div className="flex flex-col gap-4 mb-6">
                    <AllocationRow name="Broad US" before="$4,200" after="$2,100" change="-50%" trend="down" />
                    <div className="h-px bg-gray-100" />
                    <AllocationRow name="Cart Abandoners" before="$900" after="$1,600" change="+78%" trend="up" />
                    <div className="h-px bg-gray-100" />
                    <AllocationRow name="Site Visitors" before="$1,400" after="$2,000" change="+43%" trend="up" />
                  </div>

                  <div className="flex items-center gap-3">
                    <button className="bg-[#111827] hover:bg-black text-white text-[13px] font-medium px-4 py-2 rounded-lg shadow-sm transition-colors">
                      Apply this budget
                    </button>
                    <button className="bg-gray-50 hover:bg-gray-100 text-gray-700 border border-gray-200 text-[13px] font-medium px-4 py-2 rounded-lg shadow-sm transition-colors">
                      Export as PDF
                    </button>
                  </div>
                </div>
              </motion.div>

              {/* User Message 2 */}
              <motion.div variants={itemVars} className="flex flex-col items-end gap-1 mt-4">
                <div className="bg-[#fcfcfd] border border-gray-100 text-[#4b5563] px-4 py-2.5 rounded-2xl rounded-tr-sm text-[14px] leading-relaxed max-w-[85%] shadow-sm">
                  Explain the reasoning for the retargeting increases first.
                </div>
                <span className="text-[10px] text-gray-400 font-medium px-1">2:17 PM</span>
              </motion.div>

              {/* Agent Message 2 */}
              <motion.div variants={itemVars} className="flex flex-col items-start gap-4 max-w-[90%] mb-12">
                <div className="text-[14px] leading-relaxed text-gray-700">
                  <p>Both campaigns are hitting their daily caps...</p>
                </div>
                
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2 bg-white shadow-sm w-fit">
                    <ShoppingCartIcon className="w-3.5 h-3.5 text-gray-400" />
                    <span className="text-[13px] font-medium text-gray-700">Cart Abandoners · 6.2× ROAS</span>
                  </div>
                  <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2 bg-white shadow-sm w-fit">
                    <EyeIcon className="w-3.5 h-3.5 text-gray-400" />
                    <span className="text-[13px] font-medium text-gray-700">Site Visitors · 4.4× ROAS</span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-2 mt-2">
                  <button className="bg-white border border-gray-200 hover:bg-gray-50 text-gray-600 text-[12px] font-medium px-3 py-1.5 rounded-full transition-colors shadow-sm">
                    Compare to last month
                  </button>
                  <button className="bg-white border border-gray-200 hover:bg-gray-50 text-gray-600 text-[12px] font-medium px-3 py-1.5 rounded-full transition-colors shadow-sm">
                    Show campaign insights
                  </button>
                </div>
                
                {/* Fade out text to show it continues */}
                <div className="text-[14px] leading-relaxed text-gray-400 mt-2 relative">
                  <p>They're already proven, so increasing their budgets is lower risk than testing a new audience right now.</p>
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none" />
                </div>
              </motion.div>

            </motion.div>
          </div>

          {/* Chat Input Floating */}
          <div className="absolute bottom-6 left-0 right-0 flex justify-center px-6 pointer-events-none z-20">
            <div className="w-full max-w-[640px] bg-white border border-gray-200 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.06)] flex items-center p-1.5 pointer-events-auto transition-transform hover:-translate-y-0.5 duration-300 group focus-within:ring-2 focus-within:ring-blue-100 focus-within:border-blue-400">
              <input 
                type="text" 
                placeholder="Ask SEO Specialist..."
                className="flex-1 bg-transparent border-none focus:ring-0 px-4 py-2 text-[14px] placeholder:text-gray-400 outline-none"
              />
              <button className="w-8 h-8 rounded-xl bg-[#0f62fe] hover:bg-blue-600 text-white flex items-center justify-center transition-colors shadow-sm shadow-blue-500/20 group-focus-within:bg-blue-600">
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
          
          {/* Subtle gradient to fade out messages behind input */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none z-10" />
        </div>
      </main>

    </div>
  );
}

// ----------------------------------------------------------------------
// Sub-components
// ----------------------------------------------------------------------

function NavItem({ icon, label, right, active = false }: { icon: React.ReactNode, label: string, right?: React.ReactNode, active?: boolean }) {
  return (
    <button className={`w-full flex items-center justify-between px-2 py-1.5 rounded-lg text-[13px] font-medium transition-colors group ${active ? 'bg-gray-200/50 text-[#111827]' : 'text-gray-500 hover:bg-gray-100/60 hover:text-gray-900'}`}>
      <div className="flex items-center gap-2.5">
        <div className={`flex-shrink-0 ${active ? 'text-gray-700' : 'text-gray-400 group-hover:text-gray-600'} [&>svg]:w-[16px] [&>svg]:h-[16px]`}>
          {icon}
        </div>
        <span>{label}</span>
      </div>
      {right && <div>{right}</div>}
    </button>
  );
}

function NavAccordion({ label, open = false, items = [] }: { label: string, open?: boolean, items?: { icon: React.ReactNode, label: string }[] }) {
  return (
    <div className="flex flex-col">
      <button className="w-full flex items-center justify-between px-2 py-1.5 rounded-lg text-[13px] font-medium text-gray-500 hover:bg-gray-100/60 hover:text-gray-900 transition-colors group">
        <span>{label}</span>
        <ChevronUp className={`w-3.5 h-3.5 text-gray-400 group-hover:text-gray-600 transition-transform ${open ? '' : 'rotate-180'}`} />
      </button>
      
      {open && items.length > 0 && (
        <div className="flex flex-col gap-0.5 mt-0.5 ml-2">
          {items.map((item, i) => (
            <button key={i} className="w-full flex items-center gap-2.5 px-2 py-1.5 rounded-lg text-[13px] font-medium text-gray-500 hover:bg-gray-100/60 hover:text-gray-900 transition-colors group">
              <div className="w-[16px] flex justify-center">
                {item.icon}
              </div>
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function BrandIcon({ name, size = 16 }: { name: string, size?: number }) {
  const s = size;
  switch (name) {
    case 'meta':
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="#1877f2" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 12c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 0c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5z" />
          <path d="M7 12c-2.76 0-5-2.24-5-5s2.24-5 5-5M17 12c2.76 0 5 2.24 5 5s-2.24 5-5 5" />
        </svg>
      );
    case 'google-analytics':
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="#f59e0b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 20V10M12 20V4M6 20v-6" />
        </svg>
      );
    case 'google-ads':
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 3l9 16H3L12 3z" />
          <path d="M12 9v6" />
        </svg>
      );
    case 'wordpress':
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="#374151" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M8 12l2 5 2-5 2 5 2-5" />
        </svg>
      );
    case 'mailchimp':
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="#ca8a04" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8z" />
          <path d="M7 16c0-2.5 2-4.5 4.5-4.5h1c2.5 0 4.5 2 4.5 4.5V20H7v-4z" />
        </svg>
      );
    case 'canva':
      return (
        <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="9" />
          <path d="M15 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z" />
        </svg>
      );
    default:
      return <div className={`w-${s/4} h-${s/4} bg-gray-400 rounded-full`} />;
  }
}

function StatBox({ label, value, change, trend, color = "text-emerald-500" }: { label: string, value: string, change: string, trend: 'up' | 'down', color?: string }) {
  return (
    <div className="flex flex-col gap-1">
      <span className="text-[11px] font-medium text-gray-400 uppercase tracking-wide">{label}</span>
      <span className="text-[18px] font-bold text-gray-900">{value}</span>
      <span className={`text-[11px] font-semibold ${trend === 'up' ? color : 'text-red-500'}`}>
        {change}
      </span>
    </div>
  );
}

function AllocationRow({ name, before, after, change, trend }: { name: string, before: string, after: string, change: string, trend: 'up' | 'down' }) {
  return (
    <div className="flex items-center justify-between group cursor-default hover:bg-gray-50 -mx-2 px-2 py-1 rounded-lg transition-colors">
      <span className="text-[13px] font-medium text-gray-700">{name}</span>
      <div className="flex items-center gap-4 text-[13px] font-medium">
        <span className="text-gray-500 w-12 text-right">{before}</span>
        <span className="text-gray-300">→</span>
        <span className="text-gray-900 w-12">{after}</span>
        <span className={`w-10 text-right font-bold ${trend === 'up' ? 'text-emerald-500' : 'text-red-500'}`}>{change}</span>
      </div>
    </div>
  );
}

// Icons
function SunIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5" />
      <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
    </svg>
  );
}

function ShoppingCartIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" />
      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    </svg>
  );
}

function EyeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}
