"use client";

import { Check, Info, ArrowLeft, X, Globe, Zap, Hexagon, Sparkles, Brain, Bot } from "lucide-react";

export default function QuadrantSetup() {
  return (
    <div 
      className="min-h-screen bg-cover bg-center flex flex-col p-6 font-sans relative"
      style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&q=80&w=2000")',
      }}
    >
      {/* Overlay to soften the background image slightly */}
      <div className="absolute inset-0 bg-[#e4dfd2]/30 backdrop-blur-[1px]" />

      {/* Header */}
      <header className="relative z-10 flex justify-between items-center w-full max-w-225 mx-auto mb-10 px-2 mt-2">
        <div className="text-[28px] font-extrabold tracking-tight font-(family-name:--font-outfit) bg-clip-text text-transparent bg-linear-to-r from-gray-900 to-gray-600">
          Quadrant
        </div>
        <button className="bg-white/95 backdrop-blur-md px-4 py-1.5 rounded-md shadow-[0_2px_4px_rgba(0,0,0,0.05)] text-[13px] font-semibold text-gray-700 border border-gray-200 hover:bg-gray-50 transition-colors">
          Discard
        </button>
      </header>

      {/* Main Card */}
      <main className="relative z-10 flex-1 w-full max-w-225 mx-auto bg-white rounded-xl shadow-[0_30px_80px_-20px_rgba(0,0,0,0.3)] flex overflow-hidden border border-white/60 ring-1 ring-black/5 min-h-150 mb-8">
        
        {/* Left Sidebar */}
        <div className="w-70 bg-[#f1f0ec] p-8 pr-6 shrink-0 flex flex-col">
           <h2 className="text-[#a1a1aa] text-[14px] font-medium mb-1">Create new workspace,</h2>
           <h1 className="text-[20px] font-medium text-gray-800 leading-tight mb-10 pr-2">
             Tell us about your brand and website
           </h1>
           
           <div className="flex flex-col gap-6">
             <Step 
               icon={<Check className="text-white w-3.5 h-3.5" strokeWidth={3} />} 
               iconBg="bg-[#3ebc67]" 
               title="Brand Information" 
               active={false}
               completed={true}
             />
             <Step 
               icon={<span className="text-white text-[13px] font-bold">2</span>} 
               iconBg="bg-[#1e1e1e]" 
               title="Topic & Region Setup" 
               active={true}
               completed={false}
             />
             <Step 
               icon={<span className="text-[#a1a1aa] text-[13px] font-bold">3</span>} 
               iconBg="bg-white border border-[#e4e4e7]" 
               title="Review & Edit Prompts" 
               active={false}
               completed={false}
             />
             <Step 
               icon={<span className="text-[#a1a1aa] text-[13px] font-bold">4</span>} 
               iconBg="bg-white border border-[#e4e4e7]" 
               title="Finalizing Setup" 
               active={false}
               completed={false}
             />
           </div>
        </div>

        {/* Right Content */}
        <div className="flex-1 px-10 py-8 overflow-y-auto bg-white border-l border-gray-100">
           <div className="max-w-125">
             
             {/* Add Topics */}
             <div className="mb-7">
               <h3 className="text-[14px] font-semibold text-gray-900 mb-0.5 flex gap-1">Add Topics <span className="text-gray-500">*</span></h3>
               <p className="text-[13px] text-[#71717a] mb-3">Choose focus areas for your prompts. You can add multiple topics</p>
               
               <div className="border border-[#e4e4e7] rounded-lg p-2.5 pb-2 mb-3 shadow-[0_1px_2px_rgba(0,0,0,0.02)] focus-within:border-blue-400 focus-within:ring-1 focus-within:ring-blue-400 transition-all">
                 <div className="text-[11px] text-[#a1a1aa] font-medium mb-1 tracking-wide">Brand name</div>
                 <input 
                   type="text" 
                   placeholder="Enter your brand name" 
                   className="w-full text-[14px] outline-none placeholder:text-[#d4d4d8] text-gray-800 bg-transparent" 
                 />
               </div>

               <div className="flex flex-wrap gap-2">
                 <Chip text="Drinks" />
                 <Chip text="Sparkling Drinks" />
                 <Chip text="Coke" />
               </div>
             </div>

             {/* Select Regions */}
             <div className="mb-7">
               <h3 className="text-[14px] font-semibold text-gray-900 mb-0.5 flex gap-1">Select Regions <span className="text-gray-500">*</span></h3>
               <p className="text-[13px] text-[#71717a] mb-3">Choose target regions for your prompts. You can select multiple countries or global.</p>
               
               <div className="border border-[#e4e4e7] rounded-lg p-2 flex items-center min-h-11.5 shadow-[0_1px_2px_rgba(0,0,0,0.02)]">
                 <Chip text="Worldwide" />
               </div>
             </div>

             {/* Select AI Models */}
             <div className="mb-7">
               <h3 className="text-[14px] font-semibold text-gray-900 mb-0.5 flex gap-1">Select AI Models <span className="text-gray-500">*</span></h3>
               <p className="text-[13px] text-[#71717a] mb-4">Choose which AI models to use for your prompts. You can select multiple models.</p>
               
               <div className="grid grid-cols-2 gap-3">
                 <ModelCard name="Wordpress" active={false} icon={<Globe className="w-4 h-4 text-gray-500" />} />
                 <ModelCard name="OpenAI" active={true} icon={<Bot className="w-4 h-4 text-black" />} />
                 <ModelCard name="Claude" active={true} icon={<Zap className="w-4 h-4 text-[#d97757]" />} />
                 <ModelCard name="Perplexity" active={true} icon={<Hexagon className="w-4 h-4 text-teal-500" />} />
                 <ModelCard name="Gemini" active={true} icon={<Sparkles className="w-4 h-4 text-indigo-500" />} />
                 <ModelCard name="LLaMA" active={false} icon={<Brain className="w-4 h-4 text-blue-600" />} />
               </div>
             </div>

             {/* Number of prompts */}
             <div className="mb-2">
               <h3 className="text-[14px] font-semibold text-gray-900 mb-0.5">Number of prompts</h3>
               <p className="text-[13px] text-[#71717a] mb-5">Total number of prompts to generate per topic and region.</p>
               
               <div className="flex items-center gap-2 mb-5">
                 <span className="text-[13px] text-gray-700 font-medium">Advanced options</span>
                 <Info className="w-3.5 h-3.5 text-gray-400" />
                 <div className="w-8 h-4.5 bg-[#1e1e1e] rounded-full p-0.5 flex justify-end cursor-pointer ml-1 shadow-inner">
                   <div className="w-3.5 h-3.5 bg-white rounded-full shadow-sm" />
                 </div>
               </div>

               <div className="flex flex-col gap-3 mb-8">
                 <NumberInput label="Drinks" value="20" />
                 <NumberInput label="Sparkling Drinks" value="20" />
                 <NumberInput label="Coke" value="20" />
               </div>

               {/* Info Box */}
               <div className="bg-[#f6f7f5] rounded-lg p-5 text-[12px] text-[#52525b] leading-[1.6]">
                 <p className="mb-3">
                   Total prompts to generate: 1 regions × 5 topics × 20 prompts per topic-region = 100 prompts.
                 </p>
                 <p className="mb-3">
                   1 regions × 5 topics = 5 sentiment-analysis prompts (one per topic-region).<br/>
                   <strong className="text-gray-900 font-medium">Total: 105 prompts (limit: 200)</strong>
                 </p>
                 <p>
                   Enable advanced options to customize how many prompts are generated for each topic in each region.
                 </p>
               </div>
             </div>

             {/* Buttons */}
             <div className="flex justify-between items-center mt-10 pt-5 border-t border-[#f4f4f5]">
               <button className="flex items-center gap-1.5 text-[14px] font-medium text-[#52525b] hover:text-black transition-colors bg-[#f4f4f5] px-4 py-2 rounded-md">
                 <ArrowLeft className="w-4 h-4" /> Back
               </button>
               <button className="bg-[#fbc02d] hover:bg-[#f5b300] text-gray-900 text-[14px] font-medium py-2 px-6 rounded-md transition-colors shadow-sm">
                 Continue
               </button>
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

function Step({ icon, iconBg, title, active, completed }: { icon: React.ReactNode, iconBg: string, title: string, active: boolean, completed: boolean }) {
  return (
    <div className="flex items-center gap-3.5">
      <div className={`w-6 h-6 rounded flex items-center justify-center shrink-0 ${iconBg}`}>
        {icon}
      </div>
      <span className={`text-[14px] ${active || completed ? 'text-gray-800 font-medium' : 'text-[#71717a]'}`}>
        {title}
      </span>
    </div>
  );
}

function Chip({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-1.5 bg-[#f4f4f5] border border-[#e4e4e7] px-3 py-1.5 rounded-md text-[13px] text-gray-700">
      {text}
      <X className="w-3.5 h-3.5 text-gray-400 cursor-pointer hover:text-gray-600" />
    </div>
  );
}

function ModelCard({ name, active, icon }: { name: string, active: boolean, icon: React.ReactNode }) {
  return (
    <div 
      className={`
        flex items-center gap-3 px-3.5 py-2.5 rounded-lg border transition-all cursor-pointer
        ${active 
          ? 'bg-white border-[#e4e4e7] shadow-[0_1px_3px_rgba(0,0,0,0.04)]' 
          : 'bg-[#f4f4f5] border-transparent text-[#71717a]'
        }
      `}
    >
      <div className="shrink-0 flex items-center justify-center">
        {icon}
      </div>
      <span className={`text-[13.5px] ${active ? 'text-gray-800 font-medium' : 'text-[#71717a]'}`}>
        {name}
      </span>
    </div>
  );
}

function NumberInput({ label, value }: { label: string, value: string }) {
  return (
    <div className="border border-[#e4e4e7] rounded-lg p-2.5 pb-2 shadow-[0_1px_2px_rgba(0,0,0,0.02)] flex flex-col focus-within:border-gray-400 transition-all bg-white">
      <div className="text-[11px] text-[#a1a1aa] font-medium mb-1 tracking-wide">{label}</div>
      <input 
        type="text" 
        defaultValue={value}
        className="w-full text-[14px] outline-none text-gray-800 font-medium bg-transparent" 
      />
    </div>
  );
}
