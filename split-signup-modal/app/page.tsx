"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mountain, Zap, Asterisk, ListTree, ChevronDown, Plus, LineChart } from "lucide-react";

export default function SplitSignupModal() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 lg:p-8 relative">
      
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[#f6f5f2] -z-10" />

      {/* The Main Modal Container - Elongated & Expanded */}
      <div className="w-full max-w-[1280px] h-[85vh] max-h-[850px] min-h-[700px] bg-white rounded-[32px] shadow-[0_40px_100px_rgba(0,0,0,0.06)] border border-black/[0.04] overflow-hidden flex flex-col md:flex-row relative">
        
        {/* ======================= */}
        {/* LEFT COLUMN (Form)      */}
        {/* ======================= */}
        <div className="w-full md:w-[45%] lg:w-[42%] flex flex-col pt-20 pb-10 px-12 lg:px-24 relative bg-white z-10">
          
          <div className="flex-1 flex flex-col justify-center max-w-[360px] mx-auto w-full">
            {/* Logo */}
            <div className="w-11 h-11 rounded-2xl bg-[#fdf2e4] shadow-sm flex items-center justify-center mb-8 border border-[#f5e3cc]/50">
              <Mountain className="w-5 h-5 text-[#222]" />
            </div>

            <h1 className="text-[28px] font-bold text-[#111] tracking-tight mb-2 leading-none">Sign up</h1>
            <p className="text-[15px] text-neutral-500 mb-10 font-medium">Be back in control of your team decision</p>

            {/* Google Button */}
            <button className="w-full h-12 bg-white border border-neutral-200/80 rounded-xl flex items-center justify-center gap-3 hover:bg-neutral-50 hover:border-neutral-300 transition-all shadow-[0_2px_8px_rgba(0,0,0,0.02)] active:scale-[0.98]">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25C22.56 11.47 22.49 10.72 22.36 10H12V14.26H17.92C17.66 15.63 16.88 16.78 15.7 17.57V20.34H19.27C21.36 18.42 22.56 15.6 22.56 12.25Z" fill="#4285F4"/>
                <path d="M12 23C14.97 23 17.46 22.02 19.27 20.34L15.7 17.57C14.72 18.23 13.47 18.63 12 18.63C9.15 18.63 6.74 16.71 5.86 14.14H2.18V16.99C4.01 20.63 7.74 23 12 23Z" fill="#34A853"/>
                <path d="M5.86 14.14C5.63 13.48 5.5 12.76 5.5 12C5.5 11.24 5.63 10.52 5.86 9.86V7.01H2.18C1.43 8.5 1 10.2 1 12C1 13.8 1.43 15.5 2.18 16.99L5.86 14.14Z" fill="#FBBC05"/>
                <path d="M12 5.38C13.62 5.38 15.06 5.93 16.2 7.02L19.34 3.88C17.45 2.12 14.97 1 12 1C7.74 1 4.01 3.37 2.18 7.01L5.86 9.86C6.74 7.29 9.15 5.38 12 5.38Z" fill="#EA4335"/>
              </svg>
              <span className="text-[14px] font-bold text-[#333]">Connect with Google</span>
            </button>

            {/* Divider */}
            <div className="flex items-center gap-4 my-8">
              <div className="flex-1 h-px bg-neutral-100" />
              <span className="text-[11px] font-bold text-neutral-400 tracking-widest">OR</span>
              <div className="flex-1 h-px bg-neutral-100" />
            </div>

            {/* Email Form */}
            <div className="flex flex-col gap-2.5 mb-8">
              <label className="text-[13px] font-bold text-[#222]">Work email</label>
              <input 
                type="email" 
                placeholder="mail@example.com"
                className="w-full h-12 px-4 rounded-xl border border-neutral-200/80 text-[14px] outline-none focus:border-neutral-400 focus:ring-4 focus:ring-neutral-100 transition-all placeholder:text-neutral-400 shadow-sm"
              />
            </div>

            <button className="w-full h-12 bg-[#111] hover:bg-black text-white rounded-xl text-[14.5px] font-bold transition-all shadow-[0_8px_20px_rgba(0,0,0,0.12)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.18)] active:scale-[0.98]">
              Continue with email
            </button>

            <p className="text-[11px] text-neutral-400 text-center mt-8 max-w-[260px] mx-auto leading-relaxed">
              By signing up, you agree to the <a href="#" className="font-bold text-neutral-600 hover:text-black transition-colors underline decoration-neutral-200 underline-offset-2">Terms of Service</a> and <a href="#" className="font-bold text-neutral-600 hover:text-black transition-colors underline decoration-neutral-200 underline-offset-2">Data Processing Agreement</a>.
            </p>
          </div>

          {/* Footer */}
          <div className="mt-auto w-full flex items-center justify-center lg:justify-start gap-4 text-[11px] font-semibold text-neutral-400 pb-2">
            <span>© 2024 Jupi Limited</span>
            <span className="opacity-50">•</span>
            <a href="#" className="hover:text-neutral-700 transition-colors">Privacy Policy</a>
            <span className="opacity-50">•</span>
            <a href="#" className="hover:text-neutral-700 transition-colors">Terms and conditions</a>
          </div>
        </div>

        {/* ======================= */}
        {/* RIGHT COLUMN (Visual)   */}
        {/* ======================= */}
        <div className="hidden md:flex flex-1 relative bg-[#fdfbf7] overflow-hidden border-l border-neutral-100 items-center justify-center">
          
          {/* Advanced Mesh Gradient Base */}
          <div className="absolute inset-0 opacity-[0.85]" style={{
            backgroundImage: `
              radial-gradient(circle at 85% 10%, #fadce4 0%, transparent 45%),
              radial-gradient(circle at 10% 85%, #fbe8d5 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, #f4e1f7 0%, transparent 50%),
              radial-gradient(circle at 20% 20%, #fef3e5 0%, transparent 40%)
            `
          }} />

          {/* Animated Ambient Orbs for Living Light */}
          <motion.div 
            animate={{ x: [-20, 20, -20], y: [-20, 20, -20] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[15%] right-[10%] w-[40vw] h-[40vw] bg-pink-300/20 rounded-full mix-blend-multiply blur-[120px]" 
          />
          <motion.div 
            animate={{ x: [20, -20, 20], y: [20, -20, 20] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-[10%] left-[10%] w-[40vw] h-[40vw] bg-orange-200/20 rounded-full mix-blend-multiply blur-[120px]" 
          />

          {/* Floating CSS Clouds (Mimicking 3D painted clouds) */}
          <motion.div 
            animate={{ y: [-10, 10, -10], rotate: [-1, 1, -1] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[22%] right-[12%] z-20 drop-shadow-[0_12px_24px_rgba(200,160,220,0.25)]"
          >
            <div className="relative w-[130px] h-[50px]">
              {/* Cloud Puffs */}
              <div className="absolute bottom-0 left-0 right-0 h-[40px] bg-gradient-to-r from-[#e7d5ef] via-[#f3e6f5] to-[#f4dcf1] rounded-full blur-[1px] shadow-inner" />
              <div className="absolute bottom-[15px] left-[20px] w-[50px] h-[50px] bg-gradient-to-br from-[#f6eef8] to-[#e7d5ef] rounded-full blur-[1px]" />
              <div className="absolute bottom-[10px] left-[55px] w-[55px] h-[55px] bg-gradient-to-b from-[#faeff8] to-[#eeddf3] rounded-full blur-[1px]" />
            </div>
          </motion.div>

          <motion.div 
            animate={{ y: [8, -8, 8], rotate: [1, -1, 1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            className="absolute top-[52%] left-[10%] z-20 drop-shadow-[0_12px_24px_rgba(200,160,220,0.2)]"
          >
            <div className="relative w-[110px] h-[45px]">
              {/* Cloud Puffs */}
              <div className="absolute bottom-0 left-0 right-0 h-[35px] bg-gradient-to-r from-[#efe0f4] via-[#f7ebf8] to-[#ebdaef] rounded-full blur-[1px] shadow-inner" />
              <div className="absolute bottom-[10px] left-[15px] w-[45px] h-[45px] bg-gradient-to-br from-[#faeff8] to-[#ebdaef] rounded-full blur-[1px]" />
              <div className="absolute bottom-[8px] left-[45px] w-[45px] h-[45px] bg-gradient-to-b from-[#fdf6fc] to-[#e8d5ec] rounded-full blur-[1px]" />
            </div>
          </motion.div>

          {/* Central Glass Mockup - Elongated */}
          <div className="relative z-10 w-[420px] h-[520px] -mt-20 ml-16">
            
            {/* The Glass Card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="absolute inset-0 bg-white/50 backdrop-blur-[40px] backdrop-saturate-[1.1] rounded-[32px] border border-white/70 shadow-[0_32px_100px_rgba(0,0,0,0.06)] overflow-hidden flex flex-col p-8 pl-[90px]"
            >
              <h2 className="text-[19px] font-bold text-[#333] tracking-tight mb-8 mt-2">Better, faster decisions</h2>
              
              {/* Fake UI Header */}
              <div className="flex items-center gap-4 mb-8">
                <LineChart className="w-5 h-5 text-neutral-400" />
                <div className="h-2.5 w-24 bg-neutral-200/80 rounded-full" />
              </div>

              {/* Fake UI List (Decisions) */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2.5">
                  <ChevronDown className="w-4 h-4 text-neutral-500" />
                  <span className="text-[13px] font-bold text-neutral-700">Decisions</span>
                </div>
                <Plus className="w-4 h-4 text-neutral-400" />
              </div>

              <div className="flex flex-col gap-4">
                {[1,2,3,4,5,6,7,8,9,10,11].map((i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-2 h-2 rounded-full bg-neutral-200" />
                    <div 
                      className="h-2.5 rounded-full bg-neutral-200/80" 
                      style={{ width: i % 2 === 0 ? '60%' : i % 3 === 0 ? '85%' : '45%' }}
                    />
                    {i === 6 && <div className="h-2.5 w-20 bg-neutral-200/80 rounded-full ml-2" />}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Floating Left-Side Icons */}
            <div className="absolute left-[-24px] top-10 flex flex-col gap-4 z-20">
              <motion.div 
                initial={{ scale: 0, rotate: -20 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", delay: 0.4, bounce: 0.5 }}
                className="w-12 h-12 rounded-[14px] bg-[#f4eafc] border border-white flex items-center justify-center shadow-lg"
              >
                <Asterisk className="w-6 h-6 text-[#b070ec]" />
              </motion.div>
              <motion.div 
                initial={{ scale: 0, rotate: -20 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", delay: 0.5, bounce: 0.5 }}
                className="w-12 h-12 rounded-[14px] bg-[#ffdbbd] border border-white flex items-center justify-center shadow-lg"
              >
                <Zap className="w-5 h-5 text-[#f58b44]" fill="#f58b44" />
              </motion.div>
              <motion.div 
                initial={{ scale: 0, rotate: -20 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: "spring", delay: 0.6, bounce: 0.5 }}
                className="w-12 h-12 rounded-[14px] bg-[#a0d2aa] border border-white flex items-center justify-center shadow-lg"
              >
                <ListTree className="w-5 h-5 text-[#3b854a]" />
              </motion.div>
            </div>
            
          </div>

          {/* Bottom Glass Stats Cards */}
          <div className="absolute bottom-12 left-10 right-10 flex gap-4 z-20">
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, ease: "easeOut" }}
              className="flex-1 bg-white/70 backdrop-blur-[32px] rounded-2xl border border-white shadow-[0_12px_40px_rgba(0,0,0,0.04)] p-5 flex flex-col justify-center"
            >
              <span className="text-[12px] font-semibold text-neutral-500 mb-1.5 tracking-tight">Deadline</span>
              <span className="text-[14px] font-bold text-[#222]">Wed, Sep 12 2024</span>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, ease: "easeOut" }}
              className="flex-1 bg-white/70 backdrop-blur-[32px] rounded-2xl border border-white shadow-[0_12px_40px_rgba(0,0,0,0.04)] p-5 flex flex-col justify-center"
            >
              <span className="text-[12px] font-semibold text-neutral-500 mb-1.5 tracking-tight">Decision maker</span>
              <span className="text-[14px] font-bold text-[#222]">Jordyn Torff</span>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, ease: "easeOut" }}
              className="flex-1 bg-white/70 backdrop-blur-[32px] rounded-2xl border border-white shadow-[0_12px_40px_rgba(0,0,0,0.04)] p-5 flex flex-col justify-center"
            >
              <span className="text-[12px] font-semibold text-neutral-500 mb-1.5 tracking-tight">Contributors</span>
              <span className="text-[14px] font-bold text-[#222]">89</span>
            </motion.div>
          </div>

        </div>

      </div>
    </div>
  );
}
