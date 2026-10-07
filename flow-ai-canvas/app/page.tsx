"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  ChevronDown, Search, Plus, Bell, Play, Save,
  LayoutGrid, LayoutDashboard, LayoutTemplate, BarChart2,
  Users, Plug, Settings, HelpCircle, Sun, Star, Lock,
  Undo, Redo, ZoomIn, ZoomOut, MousePointer2, Hand,
  Globe, Clock, MousePointerClick, Code, Shuffle, 
  Split, Repeat, Mail
} from 'lucide-react';

export default function FlowCanvas() {
  return (
    <div className="flex h-screen w-full bg-white text-[#111827] font-sans overflow-hidden">
      
      {/* LEFT SIDEBAR */}
      <aside className="w-[240px] flex-shrink-0 border-r border-gray-100 bg-[#fefefe] flex flex-col h-full overflow-y-auto no-scrollbar z-30">
        
        {/* Header */}
        <div className="px-5 h-[56px] flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 bg-[#1a1a1a] rounded flex items-center justify-center shadow-sm">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round">
                <path d="M4 12v-4a2 2 0 0 1 2-2h12" />
                <path d="M4 12h12" />
                <path d="M4 20h8" />
              </svg>
            </div>
            <span className="font-bold text-[14px] tracking-tight">FlowAI</span>
          </div>
          <button className="w-[18px] h-[18px] border border-gray-200 rounded flex items-center justify-center text-gray-400 hover:text-gray-700 transition-colors">
             <LayoutGrid className="w-2.5 h-2.5" />
          </button>
        </div>

        {/* Workspaces Group */}
        <div className="px-3 pt-2 pb-3 flex flex-col gap-0.5">
          <div className="px-2 py-1.5 flex items-center gap-2">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2.5" strokeDasharray="3 3"><circle cx="12" cy="12" r="10"/></svg>
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Workspaces</span>
          </div>
          <SidebarItem icon={<LayoutDashboard />} label="Dashboard" />
          <SidebarItem icon={<LayoutGrid />} label="Workflow Library" right={<span className="text-[10px] font-bold text-blue-500 bg-blue-50 px-1.5 py-0.5 rounded-full">28</span>} />
          <SidebarItem icon={<ZapIcon />} label="Workflow Canvas" active right={<span className="text-[12px]">🔥</span>} />
          <SidebarItem icon={<LayoutTemplate />} label="Templates" />
          <SidebarItem icon={<BarChart2 />} label="Analytics" />
          <SidebarItem icon={<Users />} label="Team Members" right={<span className="text-[10px] font-bold text-emerald-500 bg-emerald-50 px-1.5 py-0.5 rounded-full">35+</span>} />
          <SidebarItem icon={<Plug />} label="Integrations" />
        </div>

        <div className="h-px bg-gray-100 mx-5 my-1" />

        {/* Agent Managements Group */}
        <div className="px-3 py-3 flex flex-col gap-0.5">
          <div className="px-2 py-1.5 flex items-center gap-2">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2.5" strokeDasharray="3 3"><circle cx="12" cy="12" r="10"/></svg>
            <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Agent Managements</span>
          </div>
          <SidebarItem icon={<Settings />} label="Settings" />
          <SidebarItem icon={<HelpCircle />} label="Help & Support" />
          <SidebarItem icon={<LayoutTemplate />} label="Appearance" right={<Sun className="w-3.5 h-3.5 text-gray-400" />} />
        </div>
        
        <div className="h-px bg-gray-100 mx-5 my-1" />

        {/* Workflow Runs Group */}
        <div className="px-3 py-3 flex flex-col gap-0.5 flex-1">
          <div className="px-2 py-1.5 flex items-center justify-between group cursor-pointer">
            <div className="flex items-center gap-2">
               <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2.5" strokeDasharray="3 3"><circle cx="12" cy="12" r="10"/></svg>
               <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Workflow Runs</span>
            </div>
            <button className="w-4 h-4 rounded-sm bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-200 transition-colors">
              <Plus className="w-3 h-3" strokeWidth={2.5} />
            </button>
          </div>
          <WorkflowRunItem color="bg-red-400" label="Email support router wor..." />
          <WorkflowRunItem color="bg-yellow-400" label="Lead scoring pipeline Wo..." />
          <WorkflowRunItem color="bg-blue-400" label="Weekly report gen workfl..." />
          <WorkflowRunItem color="bg-orange-400" label="HubSpot sync workflow" />
        </div>

        {/* Bottom Usage & Profile */}
        <div className="p-4 flex flex-col gap-3 mt-auto">
          <div className="flex flex-col gap-1.5 p-3 rounded-xl border border-gray-100 bg-gray-50/50">
            <div className="flex items-center gap-2 text-gray-800">
              <ZapIcon />
              <span className="text-[12px] font-bold tracking-tight">891/1000</span>
            </div>
            <p className="text-[11px] text-gray-500 font-medium">Upgrade for unlimited use</p>
            <button className="w-full py-1.5 mt-1 bg-white hover:bg-gray-50 border border-gray-200 rounded-lg text-[12px] font-semibold text-gray-700 shadow-sm transition-colors">
              Upgrade
            </button>
          </div>
          
          <div className="flex items-center justify-between group cursor-pointer px-1 py-1 mt-1">
             <div className="flex items-center gap-2.5">
                <img src="https://api.dicebear.com/7.x/notionists/svg?seed=Tanjim&backgroundColor=f3f4f6" alt="User" className="w-8 h-8 rounded-full border border-gray-200" />
                <div className="flex flex-col">
                  <span className="text-[12px] font-bold text-gray-900 leading-tight">Zuhaib Rashid</span>
                  <span className="text-[10px] font-medium text-gray-500">zuhaibrashid01@gmail.com</span>
                </div>
             </div>
             <ChevronDown className="w-3.5 h-3.5 text-gray-400 group-hover:text-gray-700" strokeWidth={2} />
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
        
        {/* Top App Header */}
        <header className="h-[56px] border-b border-gray-100 bg-white flex items-center justify-between px-6 shrink-0 z-20">
          <div className="flex items-center gap-2 text-[13px] font-medium text-gray-500">
            <div className="w-4 h-4 border border-gray-300 rounded-sm flex items-center justify-center">
              <LayoutGrid className="w-2.5 h-2.5 text-gray-400" strokeWidth={2.5} />
            </div>
            <span>Workflow Canvas</span>
          </div>
          <div className="flex items-center gap-3">
             <button className="flex items-center gap-1.5 border border-gray-200 rounded-full px-3 py-1.5 text-[12px] font-semibold text-gray-700 hover:bg-gray-50 transition-colors shadow-sm">
                <Star className="w-3.5 h-3.5" strokeWidth={2} /> Ask AI
             </button>
             <button className="w-[30px] h-[30px] flex items-center justify-center border border-gray-200 rounded-full text-gray-600 hover:bg-gray-50 transition-colors shadow-sm relative">
                <Bell className="w-3.5 h-3.5" strokeWidth={2} />
                <div className="absolute top-1.5 right-1.5 w-1.5 h-1.5 bg-red-500 rounded-full border border-white" />
             </button>
          </div>
        </header>

        {/* Canvas Toolbar */}
        <div className="h-[56px] border-b border-gray-100 bg-white flex items-center justify-between px-6 shrink-0 z-20 relative">
          <div className="flex items-center gap-2.5 text-[13px]">
             <div className="flex items-center gap-2 text-gray-400 font-medium">
               <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeDasharray="3 3"><circle cx="12" cy="12" r="10"/></svg>
               <span>Library</span>
               <ChevronDown className="w-3.5 h-3.5 -rotate-90" strokeWidth={2.5} />
             </div>
             <span className="font-bold text-gray-900 tracking-tight">Email Classifier</span>
             <div className="w-px h-3 bg-gray-300 mx-1" />
             <span className="text-gray-400 font-medium text-[12px]">7 nodes - 6 edges</span>
          </div>

          <div className="flex items-center gap-2.5 text-[12px] font-semibold">
             <button className="text-gray-400 hover:text-gray-700 flex items-center justify-center w-7 h-7 rounded hover:bg-gray-50 transition-colors">
               <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="3 3"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/></svg>
             </button>
             <div className="w-px h-4 bg-gray-200 mx-1" />
             <button className="flex items-center gap-1.5 px-3 py-1.5 border border-gray-200 rounded-md text-gray-700 hover:bg-gray-50 shadow-sm transition-colors">
               <Play className="w-3 h-3" strokeWidth={2.5} /> Test Run
             </button>
             <button className="flex items-center gap-1.5 px-3 py-1.5 border border-gray-200 rounded-md text-gray-700 hover:bg-gray-50 shadow-sm transition-colors">
               <Save className="w-3 h-3" strokeWidth={2.5} /> Save
             </button>
             <button className="flex items-center gap-1.5 px-4 py-1.5 bg-[#1f2329] hover:bg-black rounded-md text-white shadow-sm transition-colors">
               <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
               Publish
             </button>
          </div>
        </div>

        {/* CANVAS AREA (Dot Grid) */}
        <div className="flex-1 w-full h-full relative overflow-hidden dot-grid z-0 cursor-grab active:cursor-grabbing">
          
          {/* Node Library Floating Panel */}
          <div className="absolute top-4 left-4 bottom-4 w-[260px] bg-white rounded-2xl shadow-[0_4px_24px_rgba(0,0,0,0.06)] border border-gray-100 flex flex-col z-20 overflow-hidden cursor-default">
             
             <div className="p-4 shrink-0">
                <span className="text-[13px] font-bold text-gray-700">Nodes</span>
                <div className="mt-2.5 relative">
                  <Search className="w-3.5 h-3.5 text-gray-400 absolute left-2.5 top-1/2 -translate-y-1/2" strokeWidth={2.5} />
                  <input 
                    type="text" 
                    placeholder="Search nodes..." 
                    className="w-full pl-8 pr-3 py-1.5 bg-white border border-gray-200 rounded-lg text-[12px] font-medium outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-gray-400 shadow-sm"
                  />
                </div>
             </div>

             <div className="flex-1 overflow-y-auto px-2 pb-4 flex flex-col gap-0.5 no-scrollbar">
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
          <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" style={{ filter: 'drop-shadow(0px 1px 1px rgba(0,0,0,0.05))' }}>
             {/* Webhook -> AI Agent */}
             <path d="M 430 220 C 500 220, 500 220, 600 220" fill="none" stroke="#cbd5e1" strokeWidth="2.5" />
             
             {/* AI Agent -> Route by Type */}
             {/* Out of AI Agent (880, 220) -> down and backward -> Route by Type (300, 470) */}
             <path d="M 880 220 C 950 220, 950 340, 600 340 C 200 340, 200 470, 300 470" fill="none" stroke="#cbd5e1" strokeWidth="2.5" />
             
             {/* Route (Urgent) -> Slack Alert */}
             {/* Route out 1 (580, 470) -> Slack in (800, 370) */}
             <path d="M 580 470 C 680 470, 700 370, 800 370" fill="none" stroke="#cbd5e1" strokeWidth="2.5" />
             
             {/* Route (Billing) -> Draft Reply */}
             {/* Route out 2 (580, 494) -> Draft in (850, 520) */}
             <path d="M 580 494 C 700 494, 700 520, 850 520" fill="none" stroke="#cbd5e1" strokeWidth="2.5" />
             
             {/* Route (Other) -> Update Contact */}
             {/* Route out 3 (580, 518) -> Contact in (800, 670) */}
             <path d="M 580 518 C 680 518, 700 670, 800 670" fill="none" stroke="#cbd5e1" strokeWidth="2.5" />
             
             {/* Draft Reply -> Send Reply */}
             {/* Draft out (1130, 520) -> Send in (1250, 520) */}
             <path d="M 1130 520 C 1180 520, 1180 520, 1250 520" fill="none" stroke="#cbd5e1" strokeWidth="2.5" />
          </svg>

          {/* Nodes Layer */}
          <div className="absolute inset-0 w-full h-full z-10">
             
             <div className="absolute left-[150px] top-[150px]">
               <WorkflowNode 
                 icon={<Globe className="w-4 h-4 text-blue-500" strokeWidth={2} />} 
                 title="Webhook Trigger" 
                 subtitle="Triggered by HTTP requests"
                 outputs={[{ label: 'Trigger', color: 'bg-blue-500' }]}
                 width="w-[280px]"
               />
             </div>

             <div className="absolute left-[600px] top-[150px]">
               <WorkflowNode 
                 icon={
                   <div className="w-5 h-5 bg-gray-100 rounded flex items-center justify-center">
                     <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#4b5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="10" rx="2" ry="2"></rect><circle cx="12" cy="5" r="2"></circle><path d="M12 7v4"></path><line x1="8" y1="16" x2="8" y2="16"></line><line x1="16" y1="16" x2="16" y2="16"></line></svg>
                   </div>
                 } 
                 title="AI Agent" 
                 subtitle="OpenAI GPT- 5.5 2 tools"
                 inputs={[{ label: 'Input', color: 'bg-gray-400' }]}
                 outputs={[{ label: 'Output', color: 'bg-blue-500' }]}
                 width="w-[280px]"
               />
             </div>

             <div className="absolute left-[300px] top-[400px]">
               <WorkflowNode 
                 icon={<Shuffle className="w-4 h-4 text-orange-500" strokeWidth={2} />} 
                 title="Route by Type" 
                 subtitle="Multi-way branch by value"
                 inputs={[{ label: 'Input', color: 'bg-gray-400' }]}
                 outputs={[
                   { label: 'Urgent', color: 'bg-blue-500' },
                   { label: 'Billing', color: 'bg-blue-500' },
                   { label: 'Other', color: 'bg-gray-400' }
                 ]}
                 width="w-[280px]"
               />
             </div>

             <div className="absolute left-[800px] top-[300px]">
               <WorkflowNode 
                 icon={
                   <div className="w-5 h-5 rounded flex items-center justify-center">
                     <svg viewBox="0 0 24 24" fill="none" className="w-4 h-4">
                        <path d="M5.042 15.165a2.528 2.528 0 0 1-2.52-2.523A2.528 2.528 0 0 1 5.042 10.12a2.528 2.528 0 0 1 2.52 2.523v2.522H5.042zM8.2 15.165a2.528 2.528 0 0 1 2.52-2.523 2.528 2.528 0 0 1 2.52 2.523v6.306a2.528 2.528 0 1 1-5.04 0v-6.306z" fill="#36C5F0"/>
                        <path d="M8.835 5.042a2.528 2.528 0 0 1 2.523-2.52A2.528 2.528 0 0 1 13.88 5.042a2.528 2.528 0 0 1-2.523 2.52H8.835zM8.835 8.2a2.528 2.528 0 0 1 2.523 2.52 2.528 2.528 0 0 1-2.523 2.52H2.53a2.528 2.528 0 1 1 0-5.04h6.306z" fill="#2EB67D"/>
                        <path d="M18.958 8.835a2.528 2.528 0 0 1 2.52 2.523 2.528 2.528 0 0 1-2.52 2.523h-2.52V11.36a2.528 2.528 0 0 1 2.52-2.523zM15.8 8.835a2.528 2.528 0 0 1-2.52 2.523 2.528 2.528 0 0 1-2.52-2.523V2.53a2.528 2.528 0 1 1 5.04 0v6.306z" fill="#E01E5A"/>
                        <path d="M15.165 18.958a2.528 2.528 0 0 1-2.523 2.52 2.528 2.528 0 0 1-2.523-2.52v-2.52h2.523a2.528 2.528 0 0 1 2.523 2.52zM15.165 15.8a2.528 2.528 0 0 1-2.523-2.52 2.528 2.528 0 0 1 2.523-2.52h6.306a2.528 2.528 0 1 1 0 5.04h-6.306z" fill="#ECB22E"/>
                     </svg>
                   </div>
                 } 
                 title="Slack Alert" 
                 subtitle="Send Slack messages"
                 inputs={[{ label: 'Input', color: 'bg-gray-400' }]}
                 outputs={[{ label: 'Sent', color: 'bg-gray-400' }]}
                 width="w-[260px]"
               />
             </div>

             <div className="absolute left-[850px] top-[450px]">
               <WorkflowNode 
                 icon={
                   <div className="w-5 h-5 rounded flex items-center justify-center">
                     <svg width="18" height="18" viewBox="0 0 24 24" fill="#f97316"><path d="M12 2l2.4 7.6H22l-6.2 4.5 2.4 7.6-6.2-4.5-6.2 4.5 2.4-7.6L2 9.6h7.6z"/></svg>
                   </div>
                 } 
                 title="Draft Reply" 
                 subtitle="Anthropic Claude completion"
                 inputs={[{ label: 'Input', color: 'bg-gray-400' }]}
                 outputs={[{ label: 'Output', color: 'bg-blue-500' }]}
                 width="w-[280px]"
               />
             </div>

             <div className="absolute left-[800px] top-[600px]">
               <WorkflowNode 
                 icon={
                   <div className="w-5 h-5 rounded flex items-center justify-center">
                     <svg width="16" height="16" viewBox="0 0 24 24" fill="#ef4444"><circle cx="12" cy="4" r="3"/><circle cx="4" cy="18" r="3"/><circle cx="20" cy="18" r="3"/><path d="M10.5 6.5l-5 9M13.5 6.5l5 9M6.5 18h11" stroke="#ef4444" strokeWidth="2"/></svg>
                   </div>
                 } 
                 title="Update Contact" 
                 subtitle="Read/write HubSpot CRM data"
                 inputs={[{ label: 'Input', color: 'bg-gray-400' }]}
                 outputs={[{ label: 'Output', color: 'bg-gray-400' }]}
                 width="w-[280px]"
               />
             </div>

             <div className="absolute left-[1250px] top-[450px]">
               <WorkflowNode 
                 icon={
                   <div className="w-5 h-5 rounded flex items-center justify-center">
                     <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                   </div>
                 } 
                 title="Send Reply" 
                 subtitle="Send or read Gmail emails"
                 inputs={[{ label: 'Input', color: 'bg-gray-400' }]}
                 outputs={[{ label: 'Send', color: 'bg-gray-400' }]}
                 width="w-[280px]"
               />
             </div>
          </div>

          {/* Canvas Controls (Bottom Center) */}
          <div className="absolute bottom-6 left-[50%] -translate-x-1/2 bg-white border border-gray-100 rounded-[12px] shadow-[0_4px_16px_rgba(0,0,0,0.06)] flex items-center px-1.5 py-1.5 z-20 cursor-default">
             <div className="flex items-center gap-1">
               <ControlButton icon={<MousePointer2 className="w-3.5 h-3.5" strokeWidth={2} />} active />
               <ControlButton icon={<Hand className="w-3.5 h-3.5" strokeWidth={2} />} />
             </div>
             <div className="w-px h-4 bg-gray-200 mx-2" />
             <div className="flex items-center gap-1 text-[12px] font-semibold text-gray-600">
               <button className="w-6 h-6 flex items-center justify-center hover:bg-gray-100 rounded transition-colors"><ZoomOut className="w-3.5 h-3.5" /></button>
               <span className="w-10 text-center">100%</span>
               <button className="w-6 h-6 flex items-center justify-center bg-gray-900 hover:bg-black text-white rounded transition-colors"><Plus className="w-3.5 h-3.5" strokeWidth={2.5} /></button>
             </div>
             <div className="w-px h-4 bg-gray-200 mx-2" />
             <div className="flex items-center gap-1">
               <ControlButton icon={<Undo className="w-3.5 h-3.5" strokeWidth={2} />} />
               <ControlButton icon={<Redo className="w-3.5 h-3.5" strokeWidth={2} />} />
               <ControlButton icon={<Lock className="w-3.5 h-3.5" strokeWidth={2} />} />
             </div>
          </div>

          {/* Minimap (Bottom Right) */}
          <div className="absolute bottom-6 right-6 w-36 h-24 bg-white border border-gray-100 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.06)] z-20 p-2 overflow-hidden flex items-center justify-center cursor-default">
             <div className="w-full h-full relative opacity-60">
               <div className="absolute left-[10%] top-[20%] w-3 h-2 bg-blue-500 rounded-[1px]" />
               <div className="absolute left-[35%] top-[20%] w-3 h-2 bg-gray-400 rounded-[1px]" />
               <div className="absolute left-[25%] top-[45%] w-3 h-3 bg-orange-400 rounded-[1px]" />
               <div className="absolute left-[50%] top-[40%] w-3 h-2 bg-gray-400 rounded-[1px]" />
               <div className="absolute left-[55%] top-[60%] w-3 h-2 bg-gray-400 rounded-[1px]" />
               <div className="absolute left-[50%] top-[80%] w-3 h-2 bg-red-400 rounded-[1px]" />
               <div className="absolute left-[80%] top-[50%] w-3 h-2 bg-red-400 rounded-[1px]" />
               
               <svg className="absolute inset-0 w-full h-full pointer-events-none">
                 <path d="M 12 11 L 30 11 M 22 22 L 35 22 M 22 24 L 38 31 M 22 26 L 35 41 M 38 31 L 58 26" fill="none" stroke="#9ca3af" strokeWidth="1" />
               </svg>
               
               <div className="absolute left-[5%] top-[10%] w-[90%] h-[80%] border border-blue-500/40 bg-blue-500/5 rounded-sm" />
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

function ZapIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
  );
}

function SidebarItem({ icon, label, right, active = false }: { icon: React.ReactNode, label: string, right?: React.ReactNode, active?: boolean }) {
  return (
    <button className={`w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-[12px] font-semibold transition-colors group ${active ? 'bg-gray-100/80 text-gray-900 shadow-sm' : 'text-gray-500 hover:bg-gray-100/50 hover:text-gray-800'}`}>
      <div className="flex items-center gap-2.5">
        <div className={`flex-shrink-0 ${active ? 'text-gray-700' : 'text-gray-400 group-hover:text-gray-600'} [&>svg]:w-[14px] [&>svg]:h-[14px] [&>svg]:stroke-[2.5]`}>
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
    <button className="w-full flex items-center justify-between px-2.5 py-1.5 rounded-lg text-[12px] font-semibold transition-colors group hover:bg-gray-100/50 text-gray-500 hover:text-gray-800">
      <div className="flex items-center gap-2.5">
        <div className={`w-3 h-3 rounded-sm ${color} flex items-center justify-center shrink-0`}>
          <svg width="6" height="6" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><path d="M4 14c2-4 6-4 8 0s6 4 8 0" /></svg>
        </div>
        <span className="truncate max-w-[130px]">{label}</span>
      </div>
      <Star className="w-3.5 h-3.5 text-gray-300 group-hover:text-gray-400" strokeWidth={2.5} />
    </button>
  );
}

function NodeCategory({ title, children, defaultOpen = false }: { title: string, children: React.ReactNode, defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="flex flex-col">
      <button 
        onClick={() => setOpen(!open)}
        className="flex items-center gap-1.5 px-2 py-1.5 text-[10px] font-bold text-gray-400 hover:text-gray-600 transition-colors"
      >
        <ChevronDown className={`w-3 h-3 transition-transform ${open ? '' : '-rotate-90'}`} strokeWidth={2.5} />
        <span className="uppercase tracking-wider">{title}</span>
        <div className="ml-auto w-3 h-3 rounded-full border border-gray-300 border-dashed opacity-60" />
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
    <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors group">
      <div className="w-4 h-4 flex items-center justify-center shrink-0 [&>svg]:w-3.5 [&>svg]:h-3.5 [&>svg]:stroke-[2.5]">
        {icon}
      </div>
      <span className="text-[12px] font-semibold text-gray-600 group-hover:text-gray-900">{label}</span>
    </div>
  );
}

function ControlButton({ icon, active = false }: { icon: React.ReactNode, active?: boolean }) {
  return (
    <button className={`p-1.5 rounded-md transition-colors ${active ? 'bg-gray-100 text-gray-800' : 'text-gray-400 hover:bg-gray-50 hover:text-gray-700'}`}>
      {icon}
    </button>
  );
}

function WorkflowNode({ icon, title, subtitle, inputs = [], outputs = [], width = 'w-[280px]' }: { 
  icon: React.ReactNode, 
  title: string, 
  subtitle: string, 
  inputs?: {label: string, color: string}[], 
  outputs?: {label: string, color: string}[],
  width?: string
}) {
  return (
    <div className={`bg-white/95 backdrop-blur-xl rounded-[14px] shadow-[0_8px_32px_rgba(0,0,0,0.06)] border border-white ring-1 ring-gray-200/50 p-3.5 flex flex-col gap-3.5 ${width} cursor-grab active:cursor-grabbing hover:shadow-[0_8px_32px_rgba(0,0,0,0.12)] transition-shadow`}>
      <div className="flex items-center gap-3">
        <div className="w-7 h-7 rounded-md bg-gray-50 border border-gray-100 flex items-center justify-center shrink-0">
          {icon}
        </div>
        <div className="flex flex-col">
          <span className="text-[13px] font-bold text-gray-900 leading-tight tracking-tight">{title}</span>
          <span className="text-[11px] text-gray-400 font-medium leading-tight truncate mt-0.5">{subtitle}</span>
        </div>
      </div>
      
      {(inputs.length > 0 || outputs.length > 0) && (
        <div className="flex flex-col gap-2 mt-1 relative">
          <div className="absolute top-0 left-[-12px] right-[-12px] h-px bg-gray-100" />
          <div className="flex justify-between w-full pt-2">
            <div className="flex flex-col gap-2">
              {inputs.map((input, i) => (
                <div key={i} className="flex items-center gap-2 text-[11px] font-semibold text-gray-500 relative min-h-[16px]">
                  <div className={`absolute top-1/2 -translate-y-1/2 -left-[17px] w-2.5 h-2.5 rounded-full border-[2px] border-white ring-1 ring-gray-200 ${input.color} shadow-sm z-10`} />
                  <span>{input.label}</span>
                </div>
              ))}
            </div>
            <div className="flex flex-col gap-2 items-end text-right">
              {outputs.map((output, i) => (
                <div key={i} className="flex items-center justify-end gap-2 text-[11px] font-semibold text-gray-500 relative min-h-[16px]">
                  <span>{output.label}</span>
                  <div className={`absolute top-1/2 -translate-y-1/2 -right-[17px] w-2.5 h-2.5 rounded-full border-[2px] border-white ring-1 ring-gray-200 ${output.color} shadow-sm z-10`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
