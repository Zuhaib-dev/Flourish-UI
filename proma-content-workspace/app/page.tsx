"use client";

import React, { useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import { 
  Search, 
  Home, 
  LayoutTemplate, 
  MonitorPlay, 
  Sparkles, 
  Plus, 
  Mic, 
  FileText, 
  Users, 
  Settings, 
  ChevronDown,
  Layout,
  AlignLeft,
  Columns,
  Edit3,
  Star,
  PanelRight,
  File,
  Lightbulb,
  Link2,
  Database,
  ArrowUpRight,
  ChevronRight,
  Scissors
} from "lucide-react";

export default function PromaWorkspace() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const containerVars: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.1 }
    }
  };

  const itemVars: Variants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <div className="flex h-screen w-full bg-white text-[#111827] font-sans overflow-hidden selection:bg-emerald-100">
      
      {/* Sidebar */}
      <aside className="w-[240px] flex-shrink-0 flex flex-col h-full bg-[#fcfcfc] border-r border-gray-100/60">
        
        {/* Logo */}
        <div className="px-5 pt-5 pb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-[22px] h-[22px] bg-[#1a1a1a] rounded-[6px] flex items-center justify-center shadow-sm">
              {/* Proma stylized logo */}
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 14c2-4 6-4 8 0s6 4 8 0" />
              </svg>
            </div>
            <span className="font-bold text-[15px] tracking-tight text-gray-800">Proma</span>
          </div>
          <ChevronDown className="w-4 h-4 text-gray-400" strokeWidth={2} />
        </div>

        {/* Main Nav */}
        <div className="px-3 py-2 flex flex-col gap-0.5">
          <NavItem icon={<Search className="w-[16px] h-[16px]" strokeWidth={1.5} />} label="Search" />
          <NavItem icon={<Home className="w-[16px] h-[16px]" strokeWidth={1.5} />} label="Home" />
          <NavItem icon={<LayoutTemplate className="w-[16px] h-[16px]" strokeWidth={1.5} />} label="Content Pipeline" right={<span className="text-[10px] font-bold text-[#0ea5e9] bg-[#e0f2fe] px-1.5 py-0.5 rounded uppercase tracking-wide">New</span>} />
          <NavItem icon={<MonitorPlay className="w-[16px] h-[16px]" strokeWidth={1.5} />} label="Studio" />
          <NavItem icon={<Sparkles className="w-[16px] h-[16px]" strokeWidth={1.5} />} label="Magic Chat" />
        </div>

        {/* Workspaces Scroll Area */}
        <div className="flex-1 overflow-y-auto no-scrollbar px-3 py-4 flex flex-col gap-4">
          
          <div className="flex items-center justify-between px-2">
            <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wider">My Space</span>
            <button className="text-gray-400 hover:text-gray-700 transition-colors">
              <Plus className="w-4 h-4" />
            </button>
          </div>

          {/* Workspace 1 */}
          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between px-2 py-1 group cursor-pointer">
              <div className="flex items-center gap-2.5">
                <div className="w-[18px] h-[18px] bg-[#22c55e] rounded-md flex items-center justify-center text-white">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <span className="text-[13px] font-semibold text-gray-800">House Cleaning BC</span>
              </div>
              <ChevronDown className="w-3.5 h-3.5 text-gray-400 group-hover:text-gray-700" strokeWidth={2} />
            </div>
            
            <div className="flex flex-col ml-1.5 border-l border-gray-100/80 pl-2.5 gap-0.5 mt-1">
              <NavItem icon={<Mic className="w-3.5 h-3.5" strokeWidth={1.5} />} label="Recording" active />
              <NavItem icon={<FileText className="w-3.5 h-3.5" strokeWidth={1.5} />} label="Pages" />
              <NavItem icon={<Users className="w-3.5 h-3.5" strokeWidth={1.5} />} label="Speakers" />
              <NavItem icon={<Settings className="w-3.5 h-3.5" strokeWidth={1.5} />} label="Settings" />
              <div className="pl-7 flex flex-col gap-2 mt-1 mb-1">
                <span className="text-[12.5px] font-medium text-gray-500 hover:text-gray-900 cursor-pointer transition-colors">Prompt</span>
                <span className="text-[12.5px] font-medium text-gray-500 hover:text-gray-900 cursor-pointer transition-colors">Team</span>
                <span className="text-[12.5px] font-medium text-gray-500 hover:text-gray-900 cursor-pointer transition-colors">Workflow</span>
              </div>
            </div>
          </div>

          {/* Workspace 2 */}
          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between px-2 py-1 group cursor-pointer opacity-80 hover:opacity-100 transition-opacity">
              <div className="flex items-center gap-2.5">
                <div className="w-[18px] h-[18px] bg-[#a855f7] rounded-md flex items-center justify-center text-white">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                </div>
                <span className="text-[13px] font-semibold text-gray-800">Baked Design</span>
              </div>
              <ChevronDown className="w-3.5 h-3.5 text-gray-400 rotate-180" strokeWidth={2} />
            </div>
          </div>

        </div>
      </aside>

      {/* Main Container */}
      <main className="flex-1 flex flex-col h-full overflow-hidden">
        
        {/* Top Header */}
        <header className="px-6 py-4 flex items-center justify-between border-b border-gray-100/60 shrink-0">
          <div className="flex items-center gap-2 text-[13px] font-medium text-gray-400">
            <div className="flex items-center gap-1.5 text-gray-800">
              <div className="w-[18px] h-[18px] bg-[#22c55e] rounded-full flex items-center justify-center text-white">
                 <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <span className="font-semibold tracking-tight">House Cleaning BC</span>
            </div>
            <span>/</span>
            <div className="flex items-center gap-1.5 hover:text-gray-800 cursor-pointer transition-colors">
              <Mic className="w-3.5 h-3.5" strokeWidth={1.5} />
              <span>Recordings</span>
            </div>
            <span>/</span>
            <span className="text-gray-900 font-semibold tracking-tight">Building Immense Inner Strength</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center p-0.5 bg-white border border-gray-200 rounded-lg shadow-sm">
              <button className="p-1.5 text-gray-400 hover:text-gray-700 hover:bg-gray-50 rounded-md transition-colors"><PanelRight className="w-4 h-4 rotate-180" strokeWidth={1.5} /></button>
              <button className="p-1.5 text-gray-700 bg-gray-100 rounded-md shadow-sm transition-colors"><AlignLeft className="w-4 h-4" strokeWidth={1.5} /></button>
              <button className="p-1.5 text-gray-400 hover:text-gray-700 hover:bg-gray-50 rounded-md transition-colors"><Layout className="w-4 h-4" strokeWidth={1.5} /></button>
            </div>
            
            <button className="flex items-center gap-1.5 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 text-[13px] font-semibold px-3 py-1.5 rounded-lg shadow-sm transition-colors">
              <Edit3 className="w-3.5 h-3.5 text-gray-500" strokeWidth={1.5} /> Edit recording
            </button>
          </div>
        </header>

        {/* 2-Column Content Layout */}
        <div className="flex-1 flex overflow-hidden">
          
          {/* Middle Column (Create Content / Chat) */}
          <div className="flex-1 flex flex-col border-r border-gray-100/60 overflow-hidden relative bg-white">
            <div className="px-8 py-5 flex items-center justify-between shrink-0">
              <h2 className="text-[17px] font-bold tracking-tight text-gray-800">Create Content</h2>
              <div className="flex items-center gap-1.5 text-gray-400">
                <button className="p-1.5 hover:text-gray-800 transition-colors rounded-md hover:bg-gray-50"><Star className="w-[16px] h-[16px]" strokeWidth={1.5} /></button>
                <button className="p-1.5 hover:text-gray-800 transition-colors rounded-md hover:bg-gray-50"><Plus className="w-[16px] h-[16px]" strokeWidth={1.5} /></button>
                <button className="p-1.5 hover:text-gray-800 transition-colors rounded-md hover:bg-gray-50"><PanelRight className="w-[16px] h-[16px] rotate-180" strokeWidth={1.5} /></button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto px-8 py-2 flex flex-col gap-6 no-scrollbar pb-32">
              <motion.div variants={containerVars} initial="hidden" animate={mounted ? "show" : "hidden"} className="flex flex-col gap-5 w-full max-w-[620px] mx-auto">
                
                {/* File Attachments Block */}
                <motion.div variants={itemVars} className="flex flex-col items-end w-full pt-4">
                  <div className="relative w-64 h-14 z-10 -mb-2">
                    {/* Background card (Project v2) */}
                    <div className="absolute top-0 right-0 w-[240px] h-[52px] bg-white border border-gray-200/80 rounded-xl shadow-sm -translate-y-[8px] translate-x-[4px] flex items-center gap-3 px-3">
                      <div className="w-7 h-7 bg-[#ffedd5] rounded-md flex items-center justify-center">
                        <File className="w-3.5 h-3.5 text-orange-500" strokeWidth={2} />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[13px] font-semibold text-gray-800">Project v2</span>
                      </div>
                    </div>
                    {/* Foreground card (The Future of AI) */}
                    <div className="absolute top-0 right-0 w-[240px] h-[52px] bg-white border border-gray-200 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.04)] flex items-center gap-3 px-3 z-10">
                      <div className="w-7 h-7 bg-[#f3e8ff] rounded-md flex items-center justify-center">
                        <span className="text-[#a855f7] font-serif font-bold text-[13px]">B</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[13px] font-semibold text-gray-800">The Future of AI</span>
                        <span className="text-[11px] text-gray-400 mt-0.5">blogspot.com/project...</span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* User Prompt */}
                <motion.div variants={itemVars} className="flex justify-end">
                  <div className="bg-[#f4f4f5] text-gray-800 text-[13.5px] font-medium leading-relaxed px-4 py-3 rounded-[16px] rounded-tr-[4px] max-w-[85%]">
                    Summarize the meeting conversation and provide a bullet list of the key takeaways.
                  </div>
                </motion.div>

                {/* AI Processing Steps */}
                <motion.div variants={itemVars} className="flex flex-col gap-2.5 mt-2">
                  <ProcessingStep icon={<Lightbulb className="w-3.5 h-3.5" strokeWidth={2} />} text="Thought for 4 second" />
                  <ProcessingStep icon={<Link2 className="w-3.5 h-3.5" strokeWidth={2} />} text="Let me fetch the data into the memories..." />
                  
                  <div className="flex items-center justify-between text-[13px] font-medium text-gray-500 py-1 group cursor-pointer hover:text-gray-700 transition-colors w-fit gap-2">
                    <div className="flex items-center gap-2.5">
                      <Search className="w-3.5 h-3.5" strokeWidth={2} />
                      <span>Searching for 5 resources</span>
                      <div className="flex items-center gap-1.5 text-gray-400 ml-1">
                        <span className="text-emerald-500 text-[14px]">🍀</span>
                        <span className="text-orange-400 text-[14px]">❊</span>
                        <span className="text-orange-600 font-bold font-serif text-[12px]">N</span>
                        <span className="text-blue-500 text-[14px]">✦</span>
                        <span className="text-blue-600 text-[14px]">🔷</span>
                      </div>
                    </div>
                    <ChevronRight className="w-3.5 h-3.5 opacity-0 -ml-1 group-hover:opacity-100 transition-all translate-x-[-4px] group-hover:translate-x-0" strokeWidth={2} />
                  </div>
                  
                  <ProcessingStep icon={<FileText className="w-3.5 h-3.5" strokeWidth={2} />} text="Contextualizing the data collected from the resources" />
                </motion.div>

                {/* AI Text Response */}
                <motion.div variants={itemVars} className="text-[13.5px] leading-[1.7] text-gray-800 font-medium tracking-tight mt-1">
                  AI is not replacing creativity — it is changing the role of the creator. In the future, creative professionals will spend less time on repetitive execution and more time on direction, taste, storytelling, and decision-making. Tools powered by AI can already generate images, music, videos, and written content within seconds, making production faster and more accessible than ever before.
                </motion.div>

                {/* AI Generated File Card */}
                <motion.div variants={itemVars} className="w-[90%] bg-[#fcfcfc] border border-gray-200/80 rounded-2xl p-3.5 flex items-center justify-between hover:bg-gray-50 transition-colors cursor-pointer group mt-2">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-white rounded-xl border border-gray-200 shadow-sm flex items-center justify-center">
                      <FileText className="w-5 h-5 text-gray-400" strokeWidth={1.5} />
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span className="text-[13.5px] font-semibold text-gray-800 line-clamp-1 pr-4">Summary of the future of AI and its impact on the c...</span>
                      <span className="text-[12px] text-gray-400 font-medium">Text file.txt</span>
                    </div>
                  </div>
                  <div className="w-7 h-7 rounded-full border border-gray-200 bg-white flex items-center justify-center mr-1">
                    <ArrowUpRight className="w-3.5 h-3.5 text-gray-400" strokeWidth={2} />
                  </div>
                </motion.div>

                {/* Grid Action Cards */}
                <motion.div variants={itemVars} className="grid grid-cols-3 gap-3 mt-1">
                  <GridActionCard icon={<Database className="w-4 h-4 text-blue-500" strokeWidth={2} />} title="Pipelines" subtitle="Link your min" />
                  <GridActionCard icon={<Sparkles className="w-4 h-4 text-purple-500" strokeWidth={2} />} title="Magic Chat" subtitle="Link your min" />
                  <GridActionCard icon={<MonitorPlay className="w-4 h-4 text-blue-400" strokeWidth={2} />} title="Studio" subtitle="Link your min" />
                </motion.div>

              </motion.div>
            </div>

            {/* Bottom Floating Attached Files */}
            <div className="absolute bottom-6 left-0 right-0 px-8 flex items-center justify-center pointer-events-none">
              <div className="bg-white/95 backdrop-blur-md px-1.5 py-2 rounded-2xl border border-gray-100 shadow-[0_12px_40px_rgba(0,0,0,0.06)] flex items-center gap-2 pointer-events-auto">
                <FileBadge color="bg-[#fef2f2]" iconColor="text-red-500" text="The Future of AI ..." type="pdf" />
                <FileBadge color="bg-[#eff6ff]" iconColor="text-blue-500" text="Audio file.mp3" type="audio" />
                <FileBadge color="bg-[#fdf2f8]" iconColor="text-pink-500" text="Video file.mp3" type="video" />
              </div>
            </div>

          </div>

          {/* Right Column (Transcript) */}
          <aside className="w-[380px] shrink-0 bg-white flex flex-col h-full overflow-hidden">
            
            {/* Tabs */}
            <div className="px-5 pt-5 pb-3">
              <div className="flex items-center gap-2">
                <button className="flex items-center gap-1.5 bg-[#f4f4f5] text-gray-800 text-[13px] font-semibold px-3 py-1.5 rounded-lg border border-gray-200/60 shadow-sm">
                  <FileText className="w-3.5 h-3.5" strokeWidth={2} /> Transcript
                </button>
                <button className="flex items-center gap-1.5 text-gray-500 hover:text-gray-900 text-[13px] font-medium px-3 py-1.5 rounded-lg transition-colors border border-transparent">
                  <Scissors className="w-3.5 h-3.5" strokeWidth={2} /> Clips
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto px-5 pb-10 flex flex-col gap-4 no-scrollbar">
              
              {/* Info Header */}
              <div className="flex flex-col gap-1.5 mt-2">
                <h3 className="text-[17px] font-bold leading-[1.3] tracking-tight text-gray-900">Summary of the future of AI and its impact creative field</h3>
                <span className="text-[12px] text-gray-400 font-medium">Based on 5 sources</span>
                <p className="text-[13px] leading-[1.6] text-gray-600 mt-1">
                  David Goggins, a Navy SEAL turned ultra-marathon a speaker, explains mastering inner dialogue.
                </p>
              </div>

              {/* Video Thumbnail */}
              <div className="w-full aspect-video rounded-xl overflow-hidden bg-gray-100 relative group cursor-pointer border border-gray-200 mt-2">
                <img 
                  src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=600&auto=format&fit=crop" 
                  alt="Podcast Speaker"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute bottom-2 right-2 flex items-center gap-1">
                   <div className="w-6 h-6 rounded-full bg-black/50 backdrop-blur-md flex items-center justify-center text-white">
                      <MonitorPlay className="w-3 h-3" />
                   </div>
                </div>
              </div>

              {/* Video Actions */}
              <div className="flex items-center gap-2 mt-1">
                <button className="flex items-center gap-1.5 bg-white border border-gray-200/80 hover:bg-gray-50 text-gray-600 text-[12px] font-semibold px-3 py-1.5 rounded-[8px] shadow-sm transition-colors">
                  <Edit3 className="w-3.5 h-3.5 text-gray-400" strokeWidth={2} /> Edit Transcriptions
                </button>
                <button className="flex items-center gap-1.5 bg-white border border-gray-200/80 hover:bg-gray-50 text-gray-600 text-[12px] font-semibold px-3 py-1.5 rounded-[8px] shadow-sm transition-colors">
                  <Users className="w-3.5 h-3.5 text-gray-400" strokeWidth={2} /> Speakers <ChevronDown className="w-3.5 h-3.5 ml-0.5 text-gray-400" strokeWidth={2} />
                </button>
              </div>

              {/* Transcript Feed */}
              <div className="flex flex-col gap-6 mt-2">
                <TranscriptBlock name="David Miller" time="00:30" avatarSeed="David" text="Good to see you again." />
                <TranscriptBlock name="Roger Jackob" time="00:30" avatarSeed="Roger" text="Good to see you too. This is going to be a great conversation. Have you ever explored these topics before?" />
                <TranscriptBlock name="David Miller" time="00:30" avatarSeed="David" text="For sure! yes, I have and it is fascinating to see and hear everyone analyzing the future of AI." />
              </div>
            </div>

          </aside>
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
    <button className={`w-full flex items-center justify-between px-2.5 py-[7px] rounded-lg text-[13px] font-medium transition-colors group ${active ? 'bg-white shadow-sm border border-gray-200/60 text-gray-800' : 'text-gray-500 hover:bg-gray-100/60 hover:text-gray-900 border border-transparent'}`}>
      <div className="flex items-center gap-2.5">
        <div className={`flex-shrink-0 ${active ? 'text-gray-800' : 'text-gray-400 group-hover:text-gray-600'}`}>
          {icon}
        </div>
        <span>{label}</span>
      </div>
      {right && <div>{right}</div>}
    </button>
  );
}

function ProcessingStep({ icon, text }: { icon: React.ReactNode, text: string }) {
  return (
    <div className="flex items-center justify-between text-[13px] font-medium text-gray-500 py-1 group cursor-pointer hover:text-gray-700 transition-colors w-fit gap-2">
      <div className="flex items-center gap-2.5 text-gray-400 group-hover:text-gray-600">
        {icon}
        <span className="text-gray-500">{text}</span>
      </div>
      <ChevronRight className="w-3.5 h-3.5 opacity-0 -ml-1 group-hover:opacity-100 transition-all translate-x-[-4px] group-hover:translate-x-0" strokeWidth={2} />
    </div>
  );
}

function GridActionCard({ icon, title, subtitle }: { icon: React.ReactNode, title: string, subtitle: string }) {
  return (
    <div className="bg-white border border-gray-200 rounded-[14px] p-4 flex flex-col justify-between h-32 hover:shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:-translate-y-0.5 transition-all cursor-pointer group relative">
      <div className="flex flex-col gap-2">
        <div className="w-7 h-7 rounded-[8px] bg-gray-50/50 flex items-center justify-center border border-gray-100/80">
          {icon}
        </div>
        <div className="flex flex-col">
          <span className="text-[14px] font-semibold text-gray-800 tracking-tight">{title}</span>
          <span className="text-[12px] font-medium text-gray-400 mt-0.5">{subtitle}</span>
        </div>
      </div>
      <div className="w-6 h-6 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-400 group-hover:text-gray-800 group-hover:bg-gray-50 transition-colors shadow-sm self-start">
        <ArrowUpRight className="w-3 h-3" strokeWidth={2} />
      </div>
    </div>
  );
}

function FileBadge({ color, iconColor, text, type }: { color: string, iconColor: string, text: string, type: 'pdf' | 'audio' | 'video' }) {
  return (
    <div className="flex items-center gap-2 bg-white border border-gray-200/80 pl-1.5 pr-2.5 py-1.5 rounded-[12px] shadow-sm hover:bg-gray-50 transition-colors cursor-pointer group">
      <div className={`w-[22px] h-[22px] rounded-[6px] ${color} flex items-center justify-center`}>
        {type === 'pdf' ? <FileText className={`w-3.5 h-3.5 ${iconColor}`} strokeWidth={2} /> : 
         type === 'audio' ? <Mic className={`w-3.5 h-3.5 ${iconColor}`} strokeWidth={2} /> : 
         <MonitorPlay className={`w-3.5 h-3.5 ${iconColor}`} strokeWidth={2} />}
      </div>
      <span className="text-[12px] font-semibold text-gray-800 truncate max-w-[110px]">{text}</span>
      <button className="text-gray-300 hover:text-gray-600 p-0.5 ml-0.5 group-hover:bg-gray-200/50 rounded-md transition-colors">
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
      </button>
    </div>
  );
}

function TranscriptBlock({ name, time, text, avatarSeed }: { name: string, time: string, text: string, avatarSeed: string }) {
  return (
    <div className="flex flex-col gap-1.5 group">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded-full bg-gray-200 overflow-hidden shrink-0 border border-gray-200">
            <img src={`https://api.dicebear.com/7.x/notionists/svg?seed=${avatarSeed}&backgroundColor=e5e7eb`} alt={name} />
          </div>
          <span className="text-[13px] font-bold tracking-tight">{name}</span>
          <span className="text-[11px] font-medium text-gray-400">{time}</span>
        </div>
      </div>
      <p className="text-[13px] leading-relaxed text-gray-700 group-hover:text-gray-900 transition-colors pl-7">
        {text}
      </p>
    </div>
  );
}
