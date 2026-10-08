"use client";

import { 
  Menu, 
  Bell, 
  ArrowLeft, 
  ArrowRight, 
  Star, 
  Heart, 
  Globe, 
  Search, 
  Maximize2,
  Zap,
  Leaf
} from "lucide-react";

export default function TravelDashboard() {
  return (
    <div className="min-h-screen bg-[#e6e7e4] p-6 md:p-8 flex items-center justify-center font-[family-name:var(--font-inter)] text-[#1a1a1a]">
      <div className="w-full max-w-[1240px] flex flex-col gap-6">
        
        {/* TOP NAVBAR */}
        <div className="flex flex-col md:flex-row gap-6 w-full">
          {/* Left Nav */}
          <div className="flex-1 bg-[#f8f8f6] rounded-[24px] p-2 pr-8 flex items-center justify-between shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)]">
            <div className="flex items-center gap-6">
              <div className="w-[52px] h-[52px] bg-[#1a1a1a] rounded-[16px] flex items-center justify-center text-white shrink-0 shadow-lg">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="rotate-45">
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              </div>
              <div className="hidden sm:flex items-center gap-10 text-[14px] font-semibold text-[#8e8e8e]">
                <div className="bg-[#1e1e24] text-white px-5 py-2.5 rounded-full flex items-center gap-2.5 shadow-md">
                  <div className="w-2 h-2 bg-[#4ade80] rounded-full shadow-[0_0_8px_#4ade80]" />
                  New destination
                </div>
                <button className="hover:text-black transition-colors">Search</button>
                <button className="hover:text-black transition-colors">Tours</button>
              </div>
            </div>
          </div>

          {/* Right Nav */}
          <div className="w-full md:w-[380px] bg-[#f8f8f6] rounded-[24px] p-2 px-6 flex items-center justify-between shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] h-[68px]">
            <div className="flex items-center gap-8">
              <button className="text-black hover:bg-gray-100 p-2 rounded-full transition-colors">
                <Menu className="w-[22px] h-[22px]" strokeWidth={2.5} />
              </button>
              <div className="relative cursor-pointer hover:bg-gray-100 p-2 rounded-full transition-colors">
                <Bell className="w-[22px] h-[22px] text-black" strokeWidth={2.5} />
                <div className="absolute top-2 right-2 w-2.5 h-2.5 bg-[#ef4444] rounded-full border-2 border-[#f8f8f6]" />
              </div>
            </div>
            <div className="w-[46px] h-[46px] bg-gradient-to-tr from-blue-600 to-indigo-400 rounded-2xl shadow-inner cursor-pointer flex items-center justify-center text-white/90">
              <Leaf className="w-5 h-5" fill="currentColor" />
            </div>
          </div>
        </div>

        {/* MAIN BENTO GRID */}
        <div className="flex flex-col lg:flex-row gap-6 h-[720px]">
          
          {/* Left Column: Switzerland Card */}
          <div 
            className="flex-1 rounded-[32px] relative overflow-hidden flex flex-col justify-between p-8 bg-black shadow-2xl group"
          >
            {/* Background Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80 group-hover:scale-105 transition-transform duration-1000"
              style={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=2000&auto=format&fit=crop")',
              }}
            />
            {/* Gradient Overlay for bottom text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

            {/* Card Header */}
            <div className="relative z-10 flex items-center justify-between">
              <div className="flex items-center gap-6 text-[#1a1a1a]">
                <div className="flex items-center gap-2.5 font-bold text-[18px]">
                  <span className="text-[20px]">🇨🇭</span> Switzerland
                </div>
                <div className="flex items-center gap-2">
                  <button className="w-9 h-9 rounded-full border border-black/20 flex items-center justify-center hover:bg-black/5 transition-colors">
                    <ArrowLeft className="w-4 h-4" strokeWidth={2} />
                  </button>
                  <button className="w-9 h-9 flex items-center justify-center hover:opacity-70 transition-opacity">
                    <ArrowRight className="w-4 h-4" strokeWidth={2} />
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-6 w-[280px]">
                <div className="h-[1px] bg-black/20 flex-1 relative">
                  <div className="absolute top-0 left-0 h-full bg-[#1a1a1a] w-1/3" />
                </div>
                <div className="flex items-baseline font-[family-name:var(--font-outfit)]">
                  <span className="text-[26px] font-bold text-[#1a1a1a] leading-none">01</span>
                  <span className="text-[14px] font-bold text-black/30 ml-0.5">/03</span>
                </div>
              </div>
            </div>

            {/* Card Footer Content */}
            <div className="relative z-10 flex flex-col md:flex-row gap-8 md:gap-12 text-white mt-auto pt-20">
              
              {/* Left Info */}
              <div className="flex-1 border-r border-white/10 pr-8">
                <div className="flex items-center gap-2 mb-1">
                  <Star className="w-5 h-5 text-white" fill="currentColor" />
                  <div className="text-[28px] font-[family-name:var(--font-jakarta)] font-bold tracking-tight">
                    4.86 <span className="text-white/60 text-[20px]">/ 5.00</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-white/80 text-[13px] font-medium mb-6">
                  <div className="w-4 h-4 rounded-full border border-white/40 flex items-center justify-center">
                    <div className="w-2 h-2 bg-white/80 rounded-full" />
                  </div>
                  Airbnb's reviewers
                </div>
                
                <div className="w-full h-[3px] bg-white/20 rounded-full mb-6">
                  <div className="w-[70%] h-full bg-white rounded-full" />
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex -space-x-3">
                    <img src="https://i.pravatar.cc/100?img=11" className="w-10 h-10 rounded-full border-2 border-black/40" alt="avatar" />
                    <img src="https://i.pravatar.cc/100?img=12" className="w-10 h-10 rounded-full border-2 border-black/40" alt="avatar" />
                    <img src="https://i.pravatar.cc/100?img=13" className="w-10 h-10 rounded-full border-2 border-black/40" alt="avatar" />
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#a78bfa] border-2 border-black/40 flex items-center justify-center text-white shadow-lg">
                    <Zap className="w-4 h-4" fill="currentColor" />
                  </div>
                </div>
              </div>

              {/* Right Info */}
              <div className="flex-[1.5]">
                <h2 className="text-[28px] font-[family-name:var(--font-jakarta)] font-bold tracking-tight mb-3">
                  Places in Switzerland
                </h2>
                
                <div className="flex items-center gap-5 text-white/70 text-[13px] font-medium mb-8">
                  <div className="flex items-center gap-1.5">
                    <Heart className="w-4 h-4" /> Voted by Roam®
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Globe className="w-4 h-4" /> 112k visitors
                  </div>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  <Chip text="Zurich" />
                  <Chip text="Interlaken" active />
                  <Chip text="Zermatt" />
                  <Chip text="Geneva" />
                  <Chip text="Bern" />
                  <Chip text="Lucerne" />
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Two stacked cards */}
          <div className="w-full lg:w-[380px] flex flex-col gap-6">
            
            {/* Take a Break Card */}
            <div className="flex-[1.4] bg-[#eef3ea] rounded-[32px] p-8 relative overflow-hidden flex flex-col shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] border border-white/50">
              {/* Decorative shapes */}
              <div className="absolute -bottom-20 -right-20 w-[300px] h-[300px] bg-[#bceda1] rounded-full opacity-70 mix-blend-multiply blur-[1px]" />
              <div className="absolute top-1/2 right-12 w-[18px] h-[18px] bg-white rounded-full shadow-sm" />
              <div className="absolute bottom-24 -right-2 w-2 h-2 bg-white rounded-full opacity-60" />
              
              <h2 className="relative z-10 text-[76px] leading-[0.9] font-[family-name:var(--font-outfit)] font-black tracking-[-0.05em] text-[#1a1a1a] mb-5 mt-2">
                Take a<br />Break
              </h2>
              
              <p className="relative z-10 text-[16px] leading-[1.5] text-[#333333] font-medium max-w-[95%] mb-10">
                Indulge in the freedom of <br/>exploration with effortless <br/>booking platform.
              </p>
              
              <button className="relative z-10 mt-auto self-start border-2 border-[#1a1a1a] rounded-full px-6 py-2.5 text-[15px] font-bold text-[#1a1a1a] flex items-center gap-2 hover:bg-[#1a1a1a] hover:text-white transition-all">
                Explore new places <ArrowRight className="w-[18px] h-[18px]" strokeWidth={2.5} />
              </button>
            </div>

            {/* Search Destination Card */}
            <div className="flex-1 bg-white rounded-[32px] p-8 relative flex flex-col shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] border border-gray-100/50">
              <button className="absolute top-6 right-6 w-10 h-10 bg-white shadow-[0_4px_12px_rgba(0,0,0,0.06)] rounded-full flex items-center justify-center hover:scale-105 transition-transform">
                <Maximize2 className="w-[18px] h-[18px] text-gray-700" strokeWidth={2.5} />
              </button>
              
              <div className="mt-6 mb-8">
                <h3 className="text-[24px] font-[family-name:var(--font-outfit)] font-bold text-[#1c1c1c] mb-1">
                  Where
                </h3>
                <input 
                  type="text" 
                  placeholder="Search destination" 
                  className="w-full bg-transparent text-[15px] font-medium text-gray-500 placeholder:text-[#a1a1aa] outline-none mt-1"
                />
              </div>

              <button className="w-full bg-[#1c1c1c] hover:bg-black text-white rounded-[24px] py-4 flex items-center justify-center gap-2.5 text-[15px] font-bold transition-all shadow-[0_8px_20px_rgba(0,0,0,0.15)] mt-auto">
                Start your search <Search className="w-[18px] h-[18px]" strokeWidth={3} />
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

// ----------------------------------------------------------------------
// Sub-components
// ----------------------------------------------------------------------

function Chip({ text, active = false }: { text: string, active?: boolean }) {
  return (
    <div 
      className={`
        px-5 py-2.5 rounded-full text-[13px] font-semibold transition-colors cursor-pointer border
        ${active 
          ? 'bg-white text-black border-white shadow-md' 
          : 'bg-transparent text-white border-white/30 hover:bg-white/10'
        }
      `}
    >
      {text}
    </div>
  );
}
