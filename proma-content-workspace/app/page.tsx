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
        <div className="px-5 pt-6 pb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <motion.div 
              whileHover={{ rotate: 180, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 200, damping: 10 }}
              className="w-[22px] h-[22px] bg-gradient-to-tr from-gray-900 to-gray-800 rounded-[6px] flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.12)] cursor-pointer"
            >
              {/* Proma stylized logo */}
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 14c2-4 6-4 8 0s6 4 8 0" />
              </svg>
            </motion.div>
            <span className="font-bold text-[16px] tracking-tight text-gray-800">Proma</span>
          </div>
          <motion.div whileHover={{ y: 2 }} className="cursor-pointer">
            <ChevronDown className="w-4 h-4 text-gray-400" strokeWidth={2} />
          </motion.div>
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
        <header className="px-6 py-4 flex items-center justify-between border-b border-gray-100/60 shrink-0 bg-white/50 backdrop-blur-sm">
          <div className="flex items-center gap-2 text-[13px] font-medium text-gray-400">
            <div className="flex items-center gap-1.5 text-gray-800 hover:text-gray-900 cursor-pointer transition-colors">
              <div className="w-[18px] h-[18px] bg-gradient-to-tr from-emerald-500 to-emerald-400 rounded-full flex items-center justify-center text-white shadow-sm">
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
            <div className="flex items-center p-0.5 bg-gray-50/80 border border-gray-200/60 rounded-lg shadow-sm">
              <button className="p-1.5 text-gray-400 hover:text-gray-700 hover:bg-white hover:shadow-sm rounded-md transition-all"><PanelRight className="w-4 h-4 rotate-180" strokeWidth={1.5} /></button>
              <button className="p-1.5 text-gray-700 bg-white rounded-md shadow-sm border border-gray-200/50 transition-all"><AlignLeft className="w-4 h-4" strokeWidth={1.5} /></button>
              <button className="p-1.5 text-gray-400 hover:text-gray-700 hover:bg-white hover:shadow-sm rounded-md transition-all"><Layout className="w-4 h-4" strokeWidth={1.5} /></button>
            </div>
            
            <motion.button 
              whileHover={{ scale: 1.02 }} 
              whileTap={{ scale: 0.98 }}
              className="flex items-center gap-1.5 bg-white border border-gray-200 hover:bg-gray-50 hover:shadow-md text-gray-700 text-[13px] font-semibold px-3 py-1.5 rounded-lg shadow-sm transition-all"
            >
              <Edit3 className="w-3.5 h-3.5 text-gray-500" strokeWidth={1.5} /> Edit recording
            </motion.button>
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
                <motion.div variants={itemVars} className="flex flex-col items-end w-full pt-4 pr-1">
                  <div className="relative w-[240px] h-[52px] z-10 mb-2 mt-2 flex flex-col items-center">
                    
                    {/* Background card (Project v2) */}
                    <div className="absolute top-0 w-[220px] h-[52px] bg-white border border-gray-200/80 rounded-[12px] shadow-sm -translate-y-[10px] flex items-center gap-3 px-3 z-0">
                      <div className="w-7 h-7 bg-[#fff7ed] rounded-[8px] flex items-center justify-center">
                        <File className="w-3.5 h-3.5 text-orange-400" strokeWidth={2.5} />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[13px] font-semibold text-gray-800">Project v2</span>
                      </div>
                    </div>

                    {/* Foreground card (The Future of AI) */}
                    <motion.div 
                      whileHover={{ y: -2 }}
                      className="relative w-[240px] h-[52px] bg-white border border-gray-200/80 rounded-[12px] shadow-[0_8px_24px_rgba(0,0,0,0.06)] flex items-center gap-3 px-3 z-10 cursor-pointer"
                    >
                      <div className="w-7 h-7 bg-[#f3e8ff] rounded-[8px] flex items-center justify-center">
                        <span className="text-[#a855f7] font-serif font-bold text-[14px]">B</span>
                      </div>
                      <div className="flex flex-col gap-0.5">
                        <span className="text-[13px] font-semibold text-gray-800 leading-none">The Future of AI</span>
                        <span className="text-[11px] text-gray-400 leading-none mt-0.5">blogspot.com/project...</span>
                      </div>
                    </motion.div>
                    
                  </div>
                </motion.div>

                {/* User Prompt */}
                <motion.div variants={itemVars} className="flex justify-end mt-4">
                  <div className="bg-[#f3f4f6] text-gray-800 text-[13.5px] font-medium leading-[1.6] px-4 py-3.5 rounded-[12px] rounded-tr-[4px] max-w-[85%] shadow-sm hover:shadow-md transition-shadow">
                    Summarize the meeting conversation and provide a bullet list of the key takeaways.
                  </div>
                </motion.div>

                {/* AI Processing Steps */}
                <motion.div variants={itemVars} className="flex flex-col gap-2 mt-4">
                  <ProcessingStep icon={<Lightbulb className="w-3.5 h-3.5" strokeWidth={2} />} text="Thought for 4 second" />
                  <ProcessingStep icon={<Link2 className="w-3.5 h-3.5" strokeWidth={2} />} text="Let me fetch the data into the memories..." />
                  
                  <div className="flex items-center justify-between text-[13px] font-medium text-gray-500 py-1.5 group cursor-pointer hover:text-gray-700 transition-colors w-fit gap-2">
                    <div className="flex items-center gap-2.5">
                      <Search className="w-3.5 h-3.5" strokeWidth={2} />
                      <span>Searching for 5 resources</span>
                      <div className="flex items-center gap-1.5 text-gray-400 ml-1">
                        <motion.span whileHover={{ scale: 1.2, rotate: 180 }} className="text-emerald-500 text-[14px]">🍀</motion.span>
                        <motion.span whileHover={{ scale: 1.2, rotate: 90 }} className="text-orange-400 text-[14px]">❊</motion.span>
                        <motion.span whileHover={{ scale: 1.2 }} className="text-orange-600 font-bold font-serif text-[12px]">N</motion.span>
                        <motion.span whileHover={{ scale: 1.2, rotate: -45 }} className="text-blue-500 text-[14px]">✦</motion.span>
                        <motion.span whileHover={{ scale: 1.2 }} className="text-blue-600 text-[14px]">🔷</motion.span>
                      </div>
                    </div>
                    <ChevronRight className="w-3.5 h-3.5 opacity-0 -ml-1 group-hover:opacity-100 transition-all translate-x-[-4px] group-hover:translate-x-0" strokeWidth={2} />
                  </div>
                  
                  <ProcessingStep icon={<FileText className="w-3.5 h-3.5" strokeWidth={2} />} text="Contextualizing the data collected from the resources" />
                </motion.div>

                {/* AI Text Response */}
                <motion.div variants={itemVars} className="text-[13.5px] leading-[1.7] text-gray-800 font-medium tracking-tight mt-3">
                  AI is not replacing creativity — it is changing the role of the creator. In the future, creative professionals will spend less time on repetitive execution and more time on direction, taste, storytelling, and decision-making. Tools powered by AI can already generate images, music, videos, and written content within seconds, making production faster and more accessible than ever before.
                </motion.div>

                {/* AI Generated File Card */}
                <motion.div variants={itemVars} className="w-[96%] bg-[#f9fafb] rounded-[16px] p-4 flex items-center justify-between group mt-2 mx-auto shadow-sm">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-white rounded-[10px] border border-gray-200/60 shadow-sm flex items-center justify-center">
                      <FileText className="w-5 h-5 text-gray-400" strokeWidth={1.5} />
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <span className="text-[13.5px] font-semibold text-gray-800">Summary of the future of AI and its impact on the c...</span>
                      <span className="text-[12px] text-gray-400 font-medium">Text file.txt</span>
                    </div>
                  </div>
                  <div className="w-8 h-8 flex items-center justify-center mr-1">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path><line x1="12" y1="11" x2="12" y2="17"></line><line x1="9" y1="14" x2="15" y2="14"></line></svg>
                  </div>
                </motion.div>

                {/* Grid Action Items (Row with dividers) */}
                <motion.div variants={itemVars} className="flex items-center justify-between w-full mt-4 pb-2 px-2">
                  
                  <div className="flex flex-col gap-4 flex-1">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-50/50">
                      <Database className="w-4 h-4 text-blue-500" strokeWidth={1.5} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[14px] font-bold text-gray-800 tracking-tight">Pipelines</span>
                      <span className="text-[12px] font-medium text-gray-400">Link your min</span>
                    </div>
                    <div className="w-7 h-7 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-400 shadow-sm mt-2">
                      <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={2} />
                    </div>
                  </div>

                  <VerticalDivider />

                  <div className="flex flex-col gap-4 flex-1 pl-6">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-50/50">
                      <Sparkles className="w-4 h-4 text-purple-500" strokeWidth={1.5} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[14px] font-bold text-gray-800 tracking-tight">Magic Chat</span>
                      <span className="text-[12px] font-medium text-gray-400">Link your min</span>
                    </div>
                    <div className="w-7 h-7 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-400 shadow-sm mt-2">
                      <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={2} />
                    </div>
                  </div>

                  <VerticalDivider />

                  <div className="flex flex-col gap-4 flex-1 pl-6">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-blue-50/50">
                      <svg className="w-4 h-4 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m14 7-6.5 6.5a2.12 2.12 0 0 0 0 3v0a2.12 2.12 0 0 0 3 0l6.5-6.5a2.12 2.12 0 0 0 0-3v0a2.12 2.12 0 0 0-3 0z"/><path d="M12 18h10"/><path d="m3 3 5 5"/></svg>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[14px] font-bold text-gray-800 tracking-tight">Studio</span>
                      <span className="text-[12px] font-medium text-gray-400">Link your min</span>
                    </div>
                    <div className="w-7 h-7 rounded-full border border-gray-200 bg-white flex items-center justify-center text-gray-400 shadow-sm mt-2">
                      <ArrowUpRight className="w-3.5 h-3.5" strokeWidth={2} />
                    </div>
                  </div>
                  
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
              <motion.div 
                whileHover="hover"
                className="w-full aspect-video rounded-xl overflow-hidden bg-gray-100 relative group cursor-pointer border border-gray-200 mt-2 shadow-sm"
              >
                <motion.img 
                  variants={{ hover: { scale: 1.05 } }}
                  transition={{ duration: 0.4 }}
                  src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=600&auto=format&fit=crop" 
                  alt="Podcast Speaker"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-300" />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <motion.div 
                    variants={{ hover: { scale: 1.1, backgroundColor: "rgba(255,255,255,0.95)" } }}
                    className="w-12 h-12 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center text-gray-800 shadow-lg"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="ml-1"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                  </motion.div>
                </div>

                <div className="absolute bottom-3 right-3 flex items-center gap-1">
                   <div className="w-auto h-6 px-2 rounded-md bg-black/60 backdrop-blur-md flex items-center justify-center text-white text-[11px] font-bold">
                      45:20
                   </div>
                </div>
              </motion.div>

              {/* Video Actions */}
              <div className="flex items-center gap-2 mt-1">
                <motion.button whileHover={{ y: -1 }} className="flex items-center gap-1.5 bg-white border border-gray-200/80 hover:bg-gray-50 hover:shadow-md text-gray-700 text-[12px] font-semibold px-3 py-2 rounded-[8px] shadow-sm transition-all flex-1 justify-center">
                  <Edit3 className="w-3.5 h-3.5 text-gray-400" strokeWidth={2} /> Edit Transcriptions
                </motion.button>
                <motion.button whileHover={{ y: -1 }} className="flex items-center gap-1.5 bg-white border border-gray-200/80 hover:bg-gray-50 hover:shadow-md text-gray-700 text-[12px] font-semibold px-3 py-2 rounded-[8px] shadow-sm transition-all flex-1 justify-center">
                  <Users className="w-3.5 h-3.5 text-gray-400" strokeWidth={2} /> Speakers <ChevronDown className="w-3.5 h-3.5 ml-0.5 text-gray-400" strokeWidth={2} />
                </motion.button>
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
    <div className="flex items-center justify-between text-[13px] font-medium text-gray-500 py-1 cursor-default w-fit gap-2">
      <div className="flex items-center gap-2.5 text-gray-400">
        {icon}
        <span className="text-gray-500">{text}</span>
      </div>
      <ChevronRight className="w-3.5 h-3.5 text-gray-300" strokeWidth={2} />
    </div>
  );
}

function VerticalDivider() {
  return (
    <div className="flex flex-col items-center self-stretch py-2 opacity-60">
      <div className="w-1 h-1 rounded-full bg-gray-300" />
      <div className="w-px flex-1 border-l border-dashed border-gray-300 my-1" />
      <div className="w-1 h-1 rounded-full bg-gray-300" />
    </div>
  );
}

function FileBadge({ color, iconColor, text, type }: { color: string, iconColor: string, text: string, type: 'pdf' | 'audio' | 'video' }) {
  return (
    <motion.div 
      whileHover={{ y: -2 }}
      className="flex items-center gap-2 bg-white border border-gray-200/80 pl-1.5 pr-2.5 py-1.5 rounded-[12px] shadow-sm hover:shadow-md transition-shadow cursor-pointer group"
    >
      <div className={`w-[22px] h-[22px] rounded-[6px] ${color} flex items-center justify-center`}>
        {type === 'pdf' ? <FileText className={`w-3.5 h-3.5 ${iconColor}`} strokeWidth={2} /> : 
         type === 'audio' ? <Mic className={`w-3.5 h-3.5 ${iconColor}`} strokeWidth={2} /> : 
         <MonitorPlay className={`w-3.5 h-3.5 ${iconColor}`} strokeWidth={2} />}
      </div>
      <span className="text-[12px] font-semibold text-gray-800 truncate max-w-[110px]">{text}</span>
      <button className="text-gray-300 hover:text-gray-600 p-0.5 ml-0.5 group-hover:bg-gray-200/50 rounded-md transition-colors">
        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
      </button>
    </motion.div>
  );
}

function TranscriptBlock({ name, time, text, avatarSeed }: { name: string, time: string, text: string, avatarSeed: string }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 5 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex flex-col gap-1.5 group cursor-pointer"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <motion.div whileHover={{ scale: 1.1 }} className="w-5 h-5 rounded-full bg-gray-200 overflow-hidden shrink-0 border border-gray-200 shadow-sm">
            <img src={`https://api.dicebear.com/7.x/notionists/svg?seed=${avatarSeed}&backgroundColor=e5e7eb`} alt={name} />
          </motion.div>
          <span className="text-[13px] font-bold tracking-tight">{name}</span>
          <span className="text-[11px] font-medium text-gray-400 group-hover:text-gray-600 transition-colors">{time}</span>
        </div>
      </div>
      <p className="text-[13px] leading-relaxed text-gray-700 group-hover:text-gray-900 transition-colors pl-7">
        {text}
      </p>
    </motion.div>
  );
}
