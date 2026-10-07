"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ChevronDown, Search, Plus, Bell, Play, Save, Check,
  LayoutGrid, LayoutDashboard, LayoutTemplate, BarChart2,
  Users, Plug, Settings, HelpCircle, Sun, Star, Lock,
  Undo, Redo, ZoomIn, ZoomOut, MousePointer2, Hand,
  Globe, Clock, MousePointerClick, Code, Shuffle, 
  Split, Repeat, Mail, MessageSquare, Zap
} from 'lucide-react';

export default function FlowCanvas() {
  return (
    <div className="flex h-screen w-full bg-white text-[#111827] font-sans overflow-hidden selection:bg-blue-100">
      
      {/* LEFT SIDEBAR */}
      <aside className="w-[260px] flex-shrink-0 border-r border-gray-200/80 bg-[#fafafa] flex flex-col h-full overflow-y-auto no-scrollbar">
        
        {/* Header */}
        <div className="px-5 h-[60px] flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-6 h-6 bg-black rounded-md flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 12v-4a2 2 0 0 1 2-2h12" />
                <path d="M4 12h12" />
                <path d="M4 20h8" />
              </svg>
            </div>
            <span className="font-bold text-[15px] tracking-tight text-gray-900">FlowAI</span>
          </div>
          <button className="text-gray-400 hover:text-gray-600">
             <LayoutGrid className="w-4 h-4" />
          </button>
        </div>

        {/* Workspaces Group */}
        <div className="px-3 pt-2 pb-4 flex flex-col gap-0.5">
          <div className="px-2 py-1.5 flex items-center gap-2 text-gray-400">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="2 2"><circle cx="12" cy="12" r="10"/></svg>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-gray-400">Workspaces</span>
          </div>
          <SidebarItem icon={<LayoutDashboard />} label="Dashboard" />
          <SidebarItem icon={<LayoutGrid />} label="Workflow Library" right={<span className="text-[11px] font-bold text-blue-600 bg-blue-50 px-1.5 py-0.5 rounded-full">28</span>} />
          <SidebarItem icon={<Zap />} label="Workflow Canvas" active right={<span className="text-[14px]">🔥</span>} />
          <SidebarItem icon={<LayoutTemplate />} label="Templates" />
          <SidebarItem icon={<BarChart2 />} label="Analytics" />
          <SidebarItem icon={<Users />} label="Team Members" right={<span className="text-[11px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-full">35+</span>} />
          <SidebarItem icon={<Plug />} label="Integrations" />
        </div>

        <div className="h-px bg-gray-200/60 mx-5 my-1" />

        {/* Agent Managements Group */}
        <div className="px-3 py-4 flex flex-col gap-0.5">
          <div className="px-2 py-1.5 flex items-center gap-2 text-gray-400">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="2 2"><circle cx="12" cy="12" r="10"/></svg>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-gray-400">Agent Managements</span>
          </div>
          <SidebarItem icon={<Settings />} label="Settings" />
          <SidebarItem icon={<HelpCircle />} label="Help & Support" />
          <SidebarItem icon={<LayoutTemplate />} label="Appearance" right={<Sun className="w-4 h-4 text-gray-400" />} />
        </div>
        
        <div className="h-px bg-gray-200/60 mx-5 my-1" />

        {/* Workflow Runs Group */}
        <div className="px-3 py-4 flex flex-col gap-0.5 flex-1">
          <div className="px-2 py-1.5 flex items-center justify-between text-gray-400 group cursor-pointer">
            <div className="flex items-center gap-2">
               <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="2 2"><circle cx="12" cy="12" r="10"/></svg>
               <span className="text-[11px] font-semibold uppercase tracking-wider text-gray-400">Workflow Runs</span>
            </div>
            <button className="w-4 h-4 rounded bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-200 transition-colors">
              <Plus className="w-3 h-3" strokeWidth={3} />
            </button>
          </div>
          <WorkflowRunItem color="bg-red-500" label="Email support router wor..." />
          <WorkflowRunItem color="bg-yellow-500" label="Lead scoring pipeline Wo..." />
          <WorkflowRunItem color="bg-blue-500" label="Weekly report gen workfl..." />
          <WorkflowRunItem color="bg-orange-500" label="HubSpot sync workflow" />
        </div>

        {/* Bottom Usage & Profile */}
        <div className="p-5 flex flex-col gap-4 mt-auto border-t border-gray-200/60 bg-gray-50/50">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-gray-400" />
              <span className="text-[13px] font-bold text-gray-800">891/1000</span>
            </div>
            <p className="text-[12px] text-gray-500 font-medium leading-tight">Upgrade for unlimited use</p>
            <button className="w-full py-1.5 bg-gray-100 hover:bg-gray-200 border border-gray-200/80 rounded-md text-[13px] font-semibold text-gray-700 transition-colors mt-1">
              Upgrade
            </button>
          </div>
          
          <div className="flex items-center justify-between group cursor-pointer">
             <div className="flex items-center gap-2.5">
                <img src="https://api.dicebear.com/7.x/notionists/svg?seed=Tanjim&backgroundColor=e5e7eb" alt="User" className="w-9 h-9 rounded-full bg-gray-200 border border-gray-200" />
                <div className="flex flex-col">
                  <span className="text-[13px] font-bold text-gray-900 leading-tight">Tanjim Islam</span>
                  <span className="text-[11px] font-medium text-gray-500">tanjim@gr8rstudio.com</span>
                </div>
             </div>
             <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-gray-700" />
          </div>
        </div>

      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
        
        {/* Top App Header */}
        <header className="h-[60px] border-b border-gray-200/80 bg-white flex items-center justify-between px-6 shrink-0 z-20">
          <div className="flex items-center gap-2 text-[14px] font-medium text-gray-500">
            <LayoutGrid className="w-4 h-4 text-gray-400" />
            <span>Workflow Canvas</span>
          </div>
          <div className="flex items-center gap-3">
             <button className="flex items-center gap-2 border border-gray-200 rounded-full px-3 py-1.5 text-[13px] font-semibold text-gray-700 hover:bg-gray-50 transition-colors shadow-sm">
                <Star className="w-3.5 h-3.5" /> Ask AI
             </button>
             <button className="w-8 h-8 flex items-center justify-center border border-gray-200 rounded-full text-gray-600 hover:bg-gray-50 transition-colors shadow-sm relative">
                <Bell className="w-4 h-4" />
                <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-red-500 rounded-full border border-white" />
             </button>
          </div>
        </header>

        {/* Canvas Toolbar */}
        <div className="h-[60px] border-b border-gray-200/80 bg-white/80 backdrop-blur-sm flex items-center justify-between px-6 shrink-0 z-20 shadow-sm relative">
          <div className="flex items-center gap-3 text-[14px]">
             <div className="flex items-center gap-2 text-gray-500 font-medium">
               <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="2 2"><circle cx="12" cy="12" r="10"/></svg>
               <span>Library</span>
               <ChevronDown className="w-3 h-3 -rotate-90" />
             </div>
             <span className="font-bold text-gray-900">Email Classifier</span>
             <div className="w-px h-4 bg-gray-300 mx-1" />
             <span className="text-gray-400 font-medium">7 nodes - 6 edges</span>
          </div>

          <div className="flex items-center gap-2 text-[13px] font-semibold">
             <button className="text-gray-400 hover:text-gray-700 p-2 rounded-md hover:bg-gray-50 transition-colors">
               <LayoutGrid className="w-4 h-4" />
             </button>
             <button className="flex items-center gap-1.5 px-3 py-1.5 border border-gray-200 rounded-md text-gray-700 hover:bg-gray-50 shadow-sm transition-colors ml-2">
               <Play className="w-3.5 h-3.5" /> Test Run
             </button>
             <button className="flex items-center gap-1.5 px-3 py-1.5 border border-gray-200 rounded-md text-gray-700 hover:bg-gray-50 shadow-sm transition-colors">
               <Save className="w-3.5 h-3.5" /> Save
             </button>
             <button className="flex items-center gap-1.5 px-4 py-1.5 bg-[#1a1a1a] hover:bg-black rounded-md text-white shadow-sm transition-colors">
               <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
               Publish
             </button>
          </div>
        </div>

        {/* CANVAS AREA (Dot Grid) */}
        <div className="flex-1 w-full h-full relative overflow-hidden dot-grid z-0">
          
          {/* Node Library Floating Panel */}
          <div className="absolute top-4 left-4 bottom-4 w-[280px] bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-gray-200/60 flex flex-col z-20 overflow-hidden">
             
             <div className="p-4 shrink-0">
                <span className="text-[14px] font-bold text-gray-800">Nodes</span>
                <div className="mt-3 relative">
                  <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input 
                    type="text" 
                    placeholder="Search nodes..." 
                    className="w-full pl-9 pr-3 py-2 bg-white border border-gray-200 rounded-lg text-[13px] font-medium outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-gray-400"
                  />
                </div>
             </div>

             <div className="flex-1 overflow-y-auto px-2 pb-4 flex flex-col gap-1 no-scrollbar">
                
                <NodeCategory title="Triggers" defaultOpen>
                  <NodeItem icon={<Globe className="text-blue-500" />} label="Webhook Trigger" />
                  <NodeItem icon={<Clock className="text-orange-500" />} label="Schedule" />
                  <NodeItem icon={<MousePointerClick className="text-emerald-500" />} label="Manual Trigger" />
                </NodeCategory>

                <NodeCategory title="Actions">
                  <NodeItem icon={<Globe className="text-blue-500" />} label="HTTP Request" />
                  <NodeItem icon={<Code className="text-blue-500" />} label="Code Block" />
                  <NodeItem icon={<Shuffle className="text-red-500" />} label="Transform" />
                  <NodeItem icon={<Clock className="text-yellow-500" />} label="Delay" />
                </NodeCategory>

                <NodeCategory title="AI">
                  <NodeItem icon={<Star className="text-purple-600 fill-purple-600" />} label="GPT- 5.5" />
                  <NodeItem icon={<Star className="text-orange-500 fill-orange-500" />} label="Claude 4.5" />
                  <NodeItem icon={<Star className="text-blue-500 fill-blue-500" />} label="Gemini" />
                  <NodeItem icon={<LayoutGrid className="text-slate-800" />} label="LangChain" />
                </NodeCategory>

                <NodeCategory title="Logic">
                  <NodeItem icon={<Split className="text-blue-500" />} label="Condition" />
                  <NodeItem icon={<Shuffle className="text-orange-500" />} label="Switch" />
                  <NodeItem icon={<Repeat className="text-emerald-500" />} label="For Each" />
                </NodeCategory>
                
                <NodeCategory title="Integrations" defaultOpen>
                  <NodeItem icon={<LayoutGrid className="text-blue-500" />} label="Airtable" />
                  <NodeItem icon={<Globe className="text-teal-500" />} label="Airtop" />
                  <NodeItem icon={<Code className="text-green-500" />} label="Apify" />
                </NodeCategory>

             </div>
          </div>

          {/* SVG Edges Layer */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
             <path d="M 520 180 C 580 180, 580 280, 640 280" fill="none" stroke="#d1d5db" strokeWidth="2" />
             <path d="M 800 180 C 860 180, 860 220, 920 220" fill="none" stroke="#d1d5db" strokeWidth="2" />
             <path d="M 760 280 C 800 280, 800 340, 840 340" fill="none" stroke="#d1d5db" strokeWidth="2" />
             <path d="M 760 300 C 800 300, 800 370, 1020 370" fill="none" stroke="#d1d5db" strokeWidth="2" />
             <path d="M 960 340 C 1000 340, 1000 260, 1040 260" fill="none" stroke="#d1d5db" strokeWidth="2" />
             <path d="M 760 320 C 800 320, 800 440, 840 440" fill="none" stroke="#d1d5db" strokeWidth="2" />
          </svg>

          {/* Nodes Layer */}
          <div className="absolute inset-0 w-full h-full z-10">
             
             {/* Webhook Trigger */}
             <div className="absolute left-[330px] top-[140px]">
               <WorkflowNode 
                 icon={<Globe className="w-4 h-4 text-blue-500" />} 
                 title="Webhook Trigger" 
                 subtitle="Triggered by HTTP requests"
                 outputs={[{ label: 'Trigger', color: 'bg-blue-500' }]}
               />
             </div>

             {/* AI Agent */}
             <div className="absolute left-[540px] top-[140px]">
               <WorkflowNode 
                 icon={<div className="w-4 h-4 bg-gray-800 rounded-sm flex items-center justify-center"><svg width="10" height="10" viewBox="0 0 24 24" fill="white"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6z"/></svg></div>} 
                 title="AI Agent" 
                 subtitle="OpenAI GPT- 5.5 2 tools"
                 inputs={[{ label: 'Input', color: 'bg-gray-300' }]}
                 outputs={[{ label: 'Output', color: 'bg-blue-500' }]}
               />
             </div>

             {/* Route by Type */}
             <div className="absolute left-[410px] top-[260px]">
               <WorkflowNode 
                 icon={<Shuffle className="w-4 h-4 text-orange-500" />} 
                 title="Route by Type" 
                 subtitle="Multi-way branch by value"
                 inputs={[{ label: 'Input', color: 'bg-gray-300' }]}
                 outputs={[
                   { label: 'Urgent', color: 'bg-blue-500' },
                   { label: 'Billing', color: 'bg-blue-500' },
                   { label: 'Other', color: 'bg-gray-300' }
                 ]}
                 width="w-[200px]"
               />
             </div>

             {/* Slack Alert */}
             <div className="absolute left-[630px] top-[240px]">
               <WorkflowNode 
                 icon={<div className="w-4 h-4 rounded-sm flex items-center justify-center"><svg viewBox="0 0 24 24" className="w-full h-full"><path d="M5.042 15.165a2.528 2.528 0 0 1-2.52-2.523A2.528 2.528 0 0 1 5.042 10.12a2.528 2.528 0 0 1 2.52 2.523v2.522H5.042zM8.2 15.165a2.528 2.528 0 0 1 2.52-2.523 2.528 2.528 0 0 1 2.52 2.523v6.306a2.528 2.528 0 1 1-5.04 0v-6.306zM8.835 5.042a2.528 2.528 0 0 1 2.523-2.52A2.528 2.528 0 0 1 13.88 5.042a2.528 2.528 0 0 1-2.523 2.52H8.835zM8.835 8.2a2.528 2.528 0 0 1 2.523 2.52 2.528 2.528 0 0 1-2.523 2.52H2.53a2.528 2.528 0 1 1 0-5.04h6.306zM18.958 8.835a2.528 2.528 0 0 1 2.52 2.523 2.528 2.528 0 0 1-2.52 2.523h-2.52V11.36a2.528 2.528 0 0 1 2.52-2.523zM15.8 8.835a2.528 2.528 0 0 1-2.52 2.523 2.528 2.528 0 0 1-2.52-2.523V2.53a2.528 2.528 0 1 1 5.04 0v6.306zM15.165 18.958a2.528 2.528 0 0 1-2.523 2.52 2.528 2.528 0 0 1-2.523-2.52v-2.52h2.523a2.528 2.528 0 0 1 2.523 2.52zM15.165 15.8a2.528 2.528 0 0 1-2.523-2.52 2.528 2.528 0 0 1 2.523-2.52h6.306a2.528 2.528 0 1 1 0 5.04h-6.306z" fill="#E01E5A"/></svg></div>} 
                 title="Slack Alert" 
                 subtitle="Send Slack messages"
                 inputs={[{ label: 'Input', color: 'bg-gray-300' }]}
                 outputs={[{ label: 'Sent', color: 'bg-gray-300' }]}
               />
             </div>

             {/* Draft Reply */}
             <div className="absolute left-[650px] top-[320px]">
               <WorkflowNode 
                 icon={<Star className="w-4 h-4 text-orange-500 fill-orange-500" />} 
                 title="Draft Reply" 
                 subtitle="Anthropic Claude completion"
                 inputs={[{ label: 'Input', color: 'bg-gray-300' }]}
                 outputs={[{ label: 'Output', color: 'bg-blue-500' }]}
               />
             </div>

             {/* Update Contact */}
             <div className="absolute left-[630px] top-[420px]">
               <WorkflowNode 
                 icon={<div className="w-4 h-4 rounded-sm flex items-center justify-center text-red-500"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6z"/></svg></div>} 
                 title="Update Contact" 
                 subtitle="Read/write HubSpot CRM data"
                 inputs={[{ label: 'Input', color: 'bg-gray-300' }]}
                 outputs={[{ label: 'Output', color: 'bg-gray-300' }]}
               />
             </div>

             {/* Send Reply */}
             <div className="absolute left-[830px] top-[280px]">
               <WorkflowNode 
                 icon={<Mail className="w-4 h-4 text-red-500" />} 
                 title="Send Reply" 
                 subtitle="Send or read Gmail emails"
                 inputs={[{ label: 'Input', color: 'bg-gray-300' }]}
                 outputs={[{ label: 'Send', color: 'bg-gray-300' }]}
               />
             </div>
          </div>

          {/* Canvas Controls (Bottom Center) */}
          <div className="absolute bottom-6 left-[50%] -translate-x-1/2 bg-white border border-gray-200/80 rounded-xl shadow-lg flex items-center px-2 py-1.5 z-20">
             <div className="flex items-center gap-1">
               <ControlButton icon={<MousePointer2 className="w-4 h-4" />} active />
               <ControlButton icon={<Hand className="w-4 h-4" />} />
             </div>
             <div className="w-px h-5 bg-gray-200 mx-3" />
             <div className="flex items-center gap-1.5 text-[13px] font-semibold text-gray-700">
               <button className="w-6 h-6 flex items-center justify-center hover:bg-gray-100 rounded-md transition-colors"><ZoomOut className="w-3.5 h-3.5" /></button>
               <span className="w-10 text-center">100%</span>
               <button className="w-6 h-6 flex items-center justify-center bg-gray-900 text-white rounded-md transition-colors shadow-sm"><Plus className="w-3.5 h-3.5" strokeWidth={3} /></button>
             </div>
             <div className="w-px h-5 bg-gray-200 mx-3" />
             <div className="flex items-center gap-1">
               <ControlButton icon={<Undo className="w-4 h-4" />} />
               <ControlButton icon={<Redo className="w-4 h-4" />} />
               <ControlButton icon={<Lock className="w-4 h-4" />} />
             </div>
          </div>

          {/* Minimap (Bottom Right) */}
          <div className="absolute bottom-6 right-6 w-36 h-24 bg-white border border-gray-200/80 rounded-xl shadow-lg z-20 p-2 overflow-hidden flex items-center justify-center">
             <div className="w-full h-full relative opacity-40">
               {/* Simplified minimap representation */}
               <div className="absolute left-[10%] top-[20%] w-3 h-2 bg-blue-500 rounded-sm" />
               <div className="absolute left-[35%] top-[20%] w-3 h-2 bg-gray-500 rounded-sm" />
               <div className="absolute left-[25%] top-[45%] w-3 h-3 bg-orange-500 rounded-sm" />
               <div className="absolute left-[50%] top-[40%] w-3 h-2 bg-gray-500 rounded-sm" />
               <div className="absolute left-[55%] top-[60%] w-3 h-2 bg-gray-500 rounded-sm" />
               <div className="absolute left-[50%] top-[80%] w-3 h-2 bg-red-500 rounded-sm" />
               <div className="absolute left-[80%] top-[50%] w-3 h-2 bg-red-500 rounded-sm" />
               
               <svg className="absolute inset-0 w-full h-full pointer-events-none">
                 <path d="M 12 11 L 30 11 M 22 22 L 35 22 M 22 24 L 38 31 M 22 26 L 35 41 M 38 31 L 58 26" fill="none" stroke="#9ca3af" strokeWidth="1" />
               </svg>
               
               {/* Minimap viewport highlight */}
               <div className="absolute left-[5%] top-[10%] w-[90%] h-[80%] border-2 border-blue-500/30 bg-blue-500/5 rounded" />
             </div>
          </div>
        </div>

      </main>
    </div>
  );
}

// ----------------------------------------------------------------------
// Sub-components
// ----------------------------------------------------------------------

function SidebarItem({ icon, label, right, active = false }: { icon: React.ReactNode, label: string, right?: React.ReactNode, active?: boolean }) {
  return (
    <button className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-[13px] font-medium transition-colors group ${active ? 'bg-gray-100 text-gray-900 shadow-[inset_0_1px_2px_rgba(0,0,0,0.02)]' : 'text-gray-600 hover:bg-gray-100/50 hover:text-gray-900'}`}>
      <div className="flex items-center gap-3">
        <div className={`flex-shrink-0 ${active ? 'text-gray-800' : 'text-gray-400 group-hover:text-gray-600'} [&>svg]:w-[18px] [&>svg]:h-[18px] [&>svg]:stroke-[1.5]`}>
          {icon}
        </div>
        <span>{label}</span>
      </div>
      {right && <div>{right}</div>}
    </button>
  );
}

function WorkflowRunItem({ color, label }: { color: string, label: string }) {
  return (
    <button className="w-full flex items-center justify-between px-3 py-1.5 rounded-lg text-[13px] font-medium transition-colors group hover:bg-gray-100/50 text-gray-600 hover:text-gray-900">
      <div className="flex items-center gap-3">
        <div className="w-[18px] flex items-center justify-center">
          <div className={`w-[14px] h-[14px] rounded-[4px] ${color} flex items-center justify-center shrink-0`}>
            <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M4 14c2-4 6-4 8 0s6 4 8 0" /></svg>
          </div>
        </div>
        <span className="truncate max-w-[140px]">{label}</span>
      </div>
      <Star className="w-3.5 h-3.5 text-gray-300 group-hover:text-gray-400" />
    </button>
  );
}

function NodeCategory({ title, children, defaultOpen = false }: { title: string, children: React.ReactNode, defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  
  return (
    <div className="flex flex-col">
      <button 
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-2 py-2 text-[12px] font-semibold text-gray-500 hover:text-gray-800 transition-colors"
      >
        <ChevronDown className={`w-3.5 h-3.5 transition-transform ${open ? '' : '-rotate-90'}`} />
        <span className="uppercase tracking-wider">{title}</span>
        <div className="ml-auto w-3.5 h-3.5 rounded-full border border-gray-300 border-dashed opacity-50" />
      </button>
      {open && (
        <div className="flex flex-col gap-0.5 pb-1">
          {children}
        </div>
      )}
    </div>
  );
}

function NodeItem({ icon, label }: { icon: React.ReactNode, label: string }) {
  return (
    <div className="flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors group">
      <div className="w-5 h-5 flex items-center justify-center shrink-0 [&>svg]:w-4 [&>svg]:h-4 [&>svg]:stroke-[2]">
        {icon}
      </div>
      <span className="text-[13px] font-medium text-gray-700 group-hover:text-gray-900">{label}</span>
    </div>
  );
}

function ControlButton({ icon, active = false }: { icon: React.ReactNode, active?: boolean }) {
  return (
    <button className={`p-2 rounded-lg transition-colors ${active ? 'bg-gray-100 text-gray-900' : 'text-gray-500 hover:bg-gray-50 hover:text-gray-700'}`}>
      {icon}
    </button>
  );
}

function WorkflowNode({ icon, title, subtitle, inputs = [], outputs = [], width = 'w-[180px]' }: { 
  icon: React.ReactNode, 
  title: string, 
  subtitle: string, 
  inputs?: {label: string, color: string}[], 
  outputs?: {label: string, color: string}[],
  width?: string
}) {
  return (
    <div className={`bg-white rounded-xl shadow-[0_2px_12px_rgba(0,0,0,0.06)] border border-gray-200/80 p-3 flex flex-col gap-3 ${width}`}>
      <div className="flex items-center gap-2.5">
        <div className="w-6 h-6 rounded-md bg-gray-50 border border-gray-100 flex items-center justify-center shrink-0">
          {icon}
        </div>
        <div className="flex flex-col">
          <span className="text-[13px] font-bold text-gray-800 leading-tight tracking-tight">{title}</span>
          <span className="text-[10px] text-gray-400 font-medium leading-tight truncate">{subtitle}</span>
        </div>
      </div>
      
      {(inputs.length > 0 || outputs.length > 0) && (
        <>
          <div className="h-px w-full bg-gray-100" />
          <div className="flex justify-between w-full">
            <div className="flex flex-col gap-2">
              {inputs.map((input, i) => (
                <div key={i} className="flex items-center gap-1.5 text-[11px] font-medium text-gray-500 relative">
                  <div className={`absolute -left-[17px] w-2 h-2 rounded-full border-[1.5px] border-white ring-1 ring-gray-200 ${input.color} shadow-sm z-10`} />
                  <span>{input.label}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-2 items-end text-right">
              {outputs.map((output, i) => (
                <div key={i} className="flex items-center justify-end gap-1.5 text-[11px] font-medium text-gray-500 relative">
                  <span>{output.label}</span>
                  <div className={`absolute -right-[17px] w-2 h-2 rounded-full border-[1.5px] border-white ring-1 ring-gray-200 ${output.color} shadow-sm z-10`} />
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
