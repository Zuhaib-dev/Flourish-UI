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
      <aside className="w-[240px] flex-shrink-0 flex flex-col h-full bg-[#fafafa] border-r border-gray-100">
        
        {/* Logo */}
        <div className="px-5 pt-5 pb-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-[#2a2a2a] rounded-md flex items-center justify-center shadow-sm">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round">
                <path d="M4 12h16M4 6h16M4 18h16" />
              </svg>
            </div>
            <span className="font-bold text-[15px] tracking-tight">Proma</span>
          </div>
          <ChevronDown className="w-4 h-4 text-gray-400" />
        </div>

        {/* Main Nav */}
        <div className="px-3 py-2 flex flex-col gap-1">
          <NavItem icon={<Search className="w-[15px] h-[15px]" />} label="Search" />
          <NavItem icon={<Home className="w-[15px] h-[15px]" />} label="Home" />
          <NavItem icon={<LayoutTemplate className="w-[15px] h-[15px]" />} label="Content Pipeline" right={<span className="text-[10px] font-bold text-sky-500 bg-sky-50 px-1.5 py-0.5 rounded uppercase tracking-wider">New</span>} />
          <NavItem icon={<MonitorPlay className="w-[15px] h-[15px]" />} label="Studio" />
          <NavItem icon={<Sparkles className="w-[15px] h-[15px]" />} label="Magic Chat" />
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
            <div className="flex items-center justify-between px-2 py-1.5 group cursor-pointer">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-emerald-500 rounded flex items-center justify-center text-white text-[10px] font-bold">H</div>
                <span className="text-[13px] font-semibold">House Cleaning BC</span>
              </div>
              <ChevronDown className="w-3.5 h-3.5 text-gray-400 group-hover:text-gray-700" />
            </div>
            
            <div className="flex flex-col ml-1 border-l border-gray-100 pl-2 gap-0.5">
              <NavItem icon={<Mic className="w-3.5 h-3.5" />} label="Recording" active />
              <NavItem icon={<FileText className="w-3.5 h-3.5" />} label="Pages" />
              <NavItem icon={<Users className="w-3.5 h-3.5" />} label="Speakers" />
              <NavItem icon={<Settings className="w-3.5 h-3.5" />} label="Settings" />
              <div className="pl-7 flex flex-col gap-1.5 mt-0.5">
                <span className="text-[12px] text-gray-500 hover:text-gray-900 cursor-pointer transition-colors">Prompt</span>
                <span className="text-[12px] text-gray-500 hover:text-gray-900 cursor-pointer transition-colors">Team</span>
                <span className="text-[12px] text-gray-500 hover:text-gray-900 cursor-pointer transition-colors">Workflow</span>
              </div>
            </div>
          </div>

          {/* Workspace 2 */}
          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between px-2 py-1.5 group cursor-pointer opacity-70 hover:opacity-100 transition-opacity">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-purple-500 rounded flex items-center justify-center text-white text-[10px] font-bold">B</div>
                <span className="text-[13px] font-semibold">Baked Design</span>
              </div>
              <ChevronDown className="w-3.5 h-3.5 text-gray-400 rotate-180" />
            </div>
          </div>

        </div>
      </aside>

      {/* Main Container */}
      <main className="flex-1 flex flex-col h-full overflow-hidden">
        
        {/* Top Header */}
        <header className="px-6 py-4 flex items-center justify-between border-b border-gray-100 shrink-0">
          <div className="flex items-center gap-2 text-[13px] font-medium text-gray-500">
            <div className="flex items-center gap-1.5 text-gray-800">
              <div className="w-4 h-4 rounded-full border-[2px] border-emerald-500 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              </div>
              <span className="font-semibold tracking-tight">House Cleaning BC</span>
            </div>
            <span>/</span>
            <div className="flex items-center gap-1.5 hover:text-gray-800 cursor-pointer transition-colors">
              <Mic className="w-3.5 h-3.5" />
              <span>Recordings</span>
            </div>
            <span>/</span>
            <span className="text-gray-900 font-semibold tracking-tight">Building Immense Inner Strength</span>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center p-0.5 bg-gray-50 border border-gray-200 rounded-lg shadow-sm">
              <button className="p-1.5 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-md transition-colors"><Layout className="w-4 h-4" /></button>
              <button className="p-1.5 text-gray-700 bg-white rounded-md shadow-sm transition-colors"><Columns className="w-4 h-4" /></button>
              <button className="p-1.5 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-md transition-colors"><AlignLeft className="w-4 h-4" /></button>
            </div>
            
            <button className="flex items-center gap-1.5 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 text-[13px] font-semibold px-3 py-1.5 rounded-lg shadow-sm transition-colors">
              <Edit3 className="w-3.5 h-3.5 text-gray-500" /> Edit recording
            </button>
          </div>
        </header>

        {/* 2-Column Content Layout */}
        <div className="flex-1 flex overflow-hidden">
          
          {/* Middle Column (Create Content / Chat) */}
          <div className="flex-1 flex flex-col border-r border-gray-100 overflow-hidden relative">
            <div className="px-6 py-4 flex items-center justify-between shrink-0">
              <h2 className="text-[18px] font-semibold tracking-tight">Create Content</h2>
              <div className="flex items-center gap-2">
                <button className="p-1.5 text-gray-400 hover:text-gray-800 transition-colors rounded-md hover:bg-gray-50"><Star className="w-[18px] h-[18px]" /></button>
                <button className="p-1.5 text-gray-400 hover:text-gray-800 transition-colors rounded-md hover:bg-gray-50"><Plus className="w-[18px] h-[18px]" /></button>
                <button className="p-1.5 text-gray-400 hover:text-gray-800 transition-colors rounded-md hover:bg-gray-50"><PanelRight className="w-[18px] h-[18px]" /></button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-4 flex flex-col gap-6 no-scrollbar pb-32">
              <motion.div variants={containerVars} initial="hidden" animate={mounted ? "show" : "hidden"} className="flex flex-col gap-6 w-full max-w-[600px] mx-auto">
                
                {/* File Attachments Block */}
                <motion.div variants={itemVars} className="flex flex-col items-end">
                  <div className="relative w-64 h-16">
                    {/* Background card */}
                    <div className="absolute top-0 right-0 w-full h-full bg-white border border-gray-100 rounded-xl shadow-sm translate-x-2 -translate-y-2 opacity-50 flex items-center gap-3 px-4">
                      <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                        <File className="w-4 h-4 text-orange-500" />
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[13px] font-semibold text-gray-900">Project v2</span>
                      </div>
                    </div>
                    {/* Foreground card */}
                    <div className="absolute top-0 right-0 w-full h-full bg-white border border-gray-200 rounded-xl shadow-[0_4px_12px_rgba(0,0,0,0.05)] flex items-center gap-3 px-4 z-10 hover:-translate-y-1 transition-transform cursor-pointer">
                      <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                        <span className="text-purple-600 font-serif font-bold">B</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[13px] font-semibold text-gray-900">The Future of AI</span>
                        <span className="text-[11px] text-gray-400">blogspot.com/project...</span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* User Prompt */}
                <motion.div variants={itemVars} className="flex justify-end">
                  <div className="bg-[#f1f3f5] text-[#111827] text-[13px] font-medium leading-relaxed px-4 py-3 rounded-2xl rounded-tr-sm max-w-[85%]">
                    Summarize the meeting conversation and provide a bullet list of the key takeaways.
                  </div>
                </motion.div>

                {/* AI Processing Steps */}
                <motion.div variants={itemVars} className="flex flex-col gap-2 mt-2">
                  <ProcessingStep icon={<Lightbulb className="w-3.5 h-3.5" />} text="Thought for 4 second" />
                  <ProcessingStep icon={<Link2 className="w-3.5 h-3.5" />} text="Let me fetch the data into the memories..." />
                  
                  <div className="flex items-center gap-2 text-[12px] font-medium text-gray-500 py-1">
                    <Search className="w-3.5 h-3.5" />
                    <span>Searching for 5 resources</span>
                    <div className="flex items-center gap-1 text-emerald-500">
                      <Sparkles className="w-3 h-3" />
                      <div className="w-3 h-3 bg-orange-400 rounded-sm" />
                      <div className="w-3 h-3 bg-black rounded-sm" />
                      <div className="w-3 h-3 bg-blue-600 rounded-full" />
                    </div>
                    <ChevronRight className="w-3 h-3" />
                  </div>
                  
                  <ProcessingStep icon={<Database className="w-3.5 h-3.5" />} text="Contextualizing the data collected from the resources" />
                </motion.div>

                {/* AI Text Response */}
                <motion.div variants={itemVars} className="text-[13px] leading-[1.7] text-gray-700">
                  AI is not replacing creativity — it is changing the role of the creator. In the future, creative professionals will spend less time on repetitive execution and more time on direction, taste, storytelling, and decision-making. Tools powered by AI can already generate images, music, videos, and written content within seconds, making production faster and more accessible than ever before.
                </motion.div>

                {/* AI Generated File Card */}
                <motion.div variants={itemVars} className="w-full bg-[#f8f9fa] border border-gray-100 rounded-xl p-3 flex items-center justify-between hover:bg-gray-50 transition-colors cursor-pointer group">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-white rounded-lg border border-gray-100 shadow-sm">
                      <FileText className="w-5 h-5 text-gray-400" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[13px] font-semibold text-gray-900 line-clamp-1 pr-4">Summary of the future of AI and its impact on the c...</span>
                      <span className="text-[11px] text-gray-500">Text file.txt</span>
                    </div>
                  </div>
                  <div className="w-8 h-8 rounded-lg border border-gray-200 bg-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight className="w-4 h-4 text-gray-500" />
                  </div>
                </motion.div>

                {/* Grid Action Cards */}
                <motion.div variants={itemVars} className="grid grid-cols-3 gap-3">
                  <GridActionCard icon={<LayoutTemplate className="w-4 h-4 text-blue-500" />} title="Pipelines" subtitle="Link your min" />
                  <GridActionCard icon={<Sparkles className="w-4 h-4 text-purple-500" />} title="Magic Chat" subtitle="Link your min" />
                  <GridActionCard icon={<MonitorPlay className="w-4 h-4 text-sky-500" />} title="Studio" subtitle="Link your min" />
                </motion.div>

              </motion.div>
            </div>

            {/* Bottom Floating Attached Files */}
            <div className="absolute bottom-6 left-0 right-0 px-6 flex items-center gap-2 pointer-events-none">
              <div className="bg-white/90 backdrop-blur-md p-1.5 rounded-2xl border border-gray-200 shadow-[0_8px_30px_rgba(0,0,0,0.08)] flex items-center gap-2 pointer-events-auto">
                <FileBadge color="bg-red-50" iconColor="text-red-500" text="The Future of AI ..." />
                <FileBadge color="bg-blue-50" iconColor="text-blue-500" text="Audio file.mp3" />
                <FileBadge color="bg-pink-50" iconColor="text-pink-500" text="Video file.mp3" />
              </div>
            </div>

          </div>

          {/* Right Column (Transcript) */}
          <aside className="w-[380px] shrink-0 bg-[#fcfcfd] flex flex-col h-full overflow-hidden">
            
            {/* Tabs */}
            <div className="px-5 pt-5 pb-3">
              <div className="flex items-center gap-2">
                <button className="flex items-center gap-1.5 bg-gray-100 text-gray-900 text-[13px] font-semibold px-3 py-1.5 rounded-full">
                  <FileText className="w-3.5 h-3.5" /> Transcript
                </button>
                <button className="flex items-center gap-1.5 text-gray-500 hover:text-gray-900 text-[13px] font-medium px-3 py-1.5 rounded-full transition-colors">
                  <Scissors className="w-3.5 h-3.5" /> Clips
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto px-5 pb-10 flex flex-col gap-5 no-scrollbar">
              
              {/* Info Header */}
              <div className="flex flex-col gap-2 mt-2">
                <h3 className="text-[17px] font-bold leading-[1.3] tracking-tight">Summary of the future of AI and its impact creative field</h3>
                <span className="text-[12px] text-gray-400 font-medium">Based on 5 sources</span>
                <p className="text-[13px] leading-relaxed text-gray-600 mt-1">
                  David Goggins, a Navy SEAL turned ultra-marathon a speaker, explains mastering inner dialogue.
                </p>
              </div>

              {/* Video Thumbnail */}
              <div className="w-full aspect-video rounded-xl overflow-hidden bg-gray-100 relative group cursor-pointer border border-gray-200/60">
                <img 
                  src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&w=600&auto=format&fit=crop" 
                  alt="Podcast Speaker"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                <div className="absolute bottom-2 right-2 bg-black/60 backdrop-blur text-white text-[10px] font-bold px-1.5 py-0.5 rounded">
                  45:20
                </div>
              </div>

              {/* Video Actions */}
              <div className="flex items-center gap-2">
                <button className="flex items-center gap-1.5 bg-white border border-gray-200 hover:bg-gray-50 text-gray-600 text-[12px] font-semibold px-3 py-1.5 rounded-lg shadow-sm transition-colors flex-1 justify-center">
                  <Edit3 className="w-3.5 h-3.5" /> Edit Transcriptions
                </button>
                <button className="flex items-center gap-1.5 bg-white border border-gray-200 hover:bg-gray-50 text-gray-600 text-[12px] font-semibold px-3 py-1.5 rounded-lg shadow-sm transition-colors flex-1 justify-center">
                  <Users className="w-3.5 h-3.5" /> Speakers <ChevronDown className="w-3.5 h-3.5 ml-1 opacity-50" />
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
    <button className={`w-full flex items-center justify-between px-2.5 py-2 rounded-lg text-[13px] font-medium transition-colors group ${active ? 'bg-white shadow-sm border border-gray-100 text-[#111827]' : 'text-gray-600 hover:bg-gray-100/60 hover:text-gray-900 border border-transparent'}`}>
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
    <div className="flex items-center justify-between text-[12px] font-medium text-gray-400 py-1 group cursor-pointer hover:text-gray-600 transition-colors w-fit gap-2">
      <div className="flex items-center gap-2">
        {icon}
        <span>{text}</span>
      </div>
      <ChevronRight className="w-3 h-3 opacity-0 -ml-1 group-hover:opacity-100 transition-all translate-x-[-4px] group-hover:translate-x-0" />
    </div>
  );
}

function GridActionCard({ icon, title, subtitle }: { icon: React.ReactNode, title: string, subtitle: string }) {
  return (
    <div className="bg-white border border-gray-100 rounded-xl p-4 flex flex-col justify-between h-28 hover:shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:-translate-y-0.5 transition-all cursor-pointer group relative">
      <div className="w-7 h-7 rounded-lg bg-gray-50 flex items-center justify-center border border-gray-100">
        {icon}
      </div>
      <div className="flex flex-col">
        <span className="text-[13px] font-semibold text-gray-900 tracking-tight">{title}</span>
        <span className="text-[11px] text-gray-400">{subtitle}</span>
      </div>
      <div className="absolute bottom-3 right-3 w-6 h-6 rounded-md border border-gray-100 bg-gray-50 flex items-center justify-center text-gray-400 group-hover:text-gray-800 group-hover:bg-gray-200 transition-colors">
        <ArrowUpRight className="w-3 h-3" />
      </div>
    </div>
  );
}

function FileBadge({ color, iconColor, text }: { color: string, iconColor: string, text: string }) {
  return (
    <div className="flex items-center gap-1.5 bg-white border border-gray-100 pl-1.5 pr-2 py-1 rounded-xl shadow-sm hover:bg-gray-50 transition-colors cursor-pointer">
      <div className={`w-5 h-5 rounded-md ${color} flex items-center justify-center`}>
        <File className={`w-3 h-3 ${iconColor}`} />
      </div>
      <span className="text-[11px] font-semibold text-gray-700 truncate max-w-[100px]">{text}</span>
      <button className="text-gray-400 hover:text-gray-700 p-0.5 ml-1"><Plus className="w-3 h-3 rotate-45" /></button>
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
