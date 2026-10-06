"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mountain, Zap, Asterisk, ListTree, ChevronDown, Plus } from "lucide-react";

export default function SplitSignupModal() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 lg:p-8 relative bg-[#f4f3f0]">
      
      {/* The Main Modal Container */}
      <div className="w-full max-w-285 h-[80vh] max-h-205 min-h-160 bg-white rounded-6 shadow-[0_24px_80px_rgba(0,0,0,0.07),0_4px_20px_rgba(0,0,0,0.04)] overflow-hidden flex flex-col md:flex-row relative">
        
        {/* ======================= */}
        {/* LEFT COLUMN (Form)      */}
        {/* ======================= */}
        <div className="w-full md:w-[45%] lg:w-[42%] flex flex-col pt-16 pb-8 px-12 lg:px-20 relative bg-white z-10">
          
          <div className="flex-1 flex flex-col justify-center max-w-85 mx-auto w-full">
            {/* Logo */}
            <div className="w-10 h-10 rounded-xl bg-[#faecd8] flex items-center justify-center mb-6">
              <Mountain className="w-5 h-5 text-[#222] stroke-[2.5]" />
            </div>

            <h1 className="text-[26px] font-bold text-[#111] tracking-tight mb-1.5 leading-none">Sign up</h1>
            <p className="text-[13.5px] text-neutral-500 mb-8 font-medium">Be back in control of your team decision</p>

            {/* Google Button */}
            <button className="w-full h-11.5 bg-white border border-neutral-200/80 rounded-lg flex items-center justify-center gap-2.5 hover:bg-neutral-50 transition-colors shadow-sm active:scale-[0.98]">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25C22.56 11.47 22.49 10.72 22.36 10H12V14.26H17.92C17.66 15.63 16.88 16.78 15.7 17.57V20.34H19.27C21.36 18.42 22.56 15.6 22.56 12.25Z" fill="#4285F4"/>
                <path d="M12 23C14.97 23 17.46 22.02 19.27 20.34L15.7 17.57C14.72 18.23 13.47 18.63 12 18.63C9.15 18.63 6.74 16.71 5.86 14.14H2.18V16.99C4.01 20.63 7.74 23 12 23Z" fill="#34A853"/>
                <path d="M5.86 14.14C5.63 13.48 5.5 12.76 5.5 12C5.5 11.24 5.63 10.52 5.86 9.86V7.01H2.18C1.43 8.5 1 10.2 1 12C1 13.8 1.43 15.5 2.18 16.99L5.86 14.14Z" fill="#FBBC05"/>
                <path d="M12 5.38C13.62 5.38 15.06 5.93 16.2 7.02L19.34 3.88C17.45 2.12 14.97 1 12 1C7.74 1 4.01 3.37 2.18 7.01L5.86 9.86C6.74 7.29 9.15 5.38 12 5.38Z" fill="#EA4335"/>
              </svg>
              <span className="text-[13px] font-semibold text-[#333]">Connect with Google</span>
            </button>

            {/* Divider */}
            <div className="flex items-center gap-3 my-6">
              <div className="flex-1 h-px bg-neutral-100" />
              <span className="text-[9px] font-bold text-neutral-400 tracking-wider">OR</span>
              <div className="flex-1 h-px bg-neutral-100" />
            </div>

            {/* Email Form */}
            <div className="flex flex-col gap-2 mb-6">
              <label className="text-[11.5px] font-bold text-[#222]">Work email</label>
              <input 
                type="email" 
                placeholder="mail@example.com"
                className="w-full h-11.5 px-4 rounded-lg border border-neutral-200/80 text-[13px] font-medium outline-none focus:border-neutral-400 transition-colors placeholder:text-neutral-400 shadow-sm"
              />
            </div>

            <button className="w-full h-11.5 bg-[#111] hover:bg-black text-white rounded-lg text-[13.5px] font-semibold transition-all shadow-md active:scale-[0.98]">
              Continue with email
            </button>

            <p className="text-[10px] text-neutral-400 text-center mt-6 max-w-60 mx-auto leading-relaxed">
              By signing up, you agree to the <a href="#" className="font-semibold text-neutral-600 hover:text-black transition-colors">Terms of Service</a> and <a href="#" className="font-semibold text-neutral-600 hover:text-black transition-colors">Data Processing Agreement</a>.
            </p>
          </div>

          {/* Footer */}
          <div className="mt-auto w-full flex items-center justify-center lg:justify-start gap-3 text-[10px] font-medium text-neutral-400 pb-2">
            <span>© 2024 Jupi Limited</span>
            <span className="opacity-40">•</span>
            <a href="#" className="hover:text-neutral-700 transition-colors">Privacy Policy</a>
            <span className="opacity-40">•</span>
            <a href="#" className="hover:text-neutral-700 transition-colors">Terms and conditions</a>
          </div>
        </div>

        {/* ======================= */}
        {/* RIGHT COLUMN (Visual)   */}
        {/* ======================= */}
        <div className="hidden md:flex flex-1 relative bg-linear-to-tr from-[#fbf5eb] via-[#faede6] to-[#fae6f2] overflow-hidden items-center justify-center">
          
          {/* Ambient Lighting Orbs */}
          <motion.div 
            animate={{ x: [-15, 15, -15], y: [-15, 15, -15] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 right-0 w-[60%] h-[60%] bg-[#f7d6e6] rounded-full filter blur-[100px] opacity-60 mix-blend-multiply" 
          />
          <motion.div 
            animate={{ x: [15, -15, 15], y: [15, -15, 15] }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-0 left-0 w-[50%] h-[50%] bg-[#fbead7] rounded-full filter blur-[90px] opacity-50 mix-blend-multiply" 
          />

          {/* Floating Clouds (Hand-built to match 3D reference) */}
          <motion.div 
            animate={{ y: [-5, 5, -5], rotate: [-1, 1, -1] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[22%] right-[16%] z-30"
          >
            <div className="relative w-27.5 h-13.75 opacity-95 drop-shadow-[0_12px_24px_rgba(200,160,220,0.25)]">
              {/* Cloud body */}
              <div className="absolute bottom-0 left-0 right-0 h-7 bg-linear-to-r from-[#e7d3ef] via-[#f7ebf8] to-[#edd9f3] rounded-full blur-[0.5px] shadow-[inset_0_-2px_6px_rgba(255,255,255,0.7)]" />
              <div className="absolute bottom-3 left-4.5 w-9.5 h-9.5 bg-linear-to-br from-[#f8f0fa] to-[#e4cee9] rounded-full blur-[0.5px]" />
              <div className="absolute bottom-2.5 left-11.25 w-11.25 h-11.25 bg-linear-to-b from-[#fbf4fc] to-[#ebd7f1] rounded-full blur-[0.5px]" />
            </div>
          </motion.div>

          <motion.div 
            animate={{ y: [6, -6, 6], rotate: [1, -1, 1] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-[48%] left-[8%] z-30"
          >
            <div className="relative w-30 h-11.25 opacity-90 drop-shadow-[0_8px_20px_rgba(200,160,220,0.2)]">
              {/* Cloud body */}
              <div className="absolute bottom-0 left-0 right-0 h-6.5 bg-linear-to-r from-[#ebd6ed] via-[#f9eef9] to-[#ebd9ee] rounded-full blur-[0.5px] shadow-[inset_0_-2px_4px_rgba(255,255,255,0.6)]" />
              <div className="absolute bottom-2.5 left-3.75 w-10 h-10 bg-linear-to-br from-[#faf2fa] to-[#ebd8ec] rounded-full blur-[0.5px]" />
              <div className="absolute bottom-2 left-12.5 w-8.75 h-8.75 bg-linear-to-b from-[#fdf8fd] to-[#ebd4ea] rounded-full blur-[0.5px]" />
            </div>
          </motion.div>

          {/* Central UI Stack */}
          <div className="relative z-10 w-87.5 flex flex-col gap-5 mt-4">
            
            {/* The Glass Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative w-full h-110 bg-white/40 backdrop-blur-[32px] rounded-6 border border-white/60 shadow-[0_24px_80px_rgba(0,0,0,0.05)] flex flex-col p-6 pl-20"
            >
              <h2 className="text-[14px] font-semibold text-[#444] mb-6">Better, faster decisions</h2>
              
              {/* Fake UI Header Image Placeholder */}
              <div className="w-10.5 h-7.5 rounded border border-neutral-200/50 bg-white/50 mb-8 flex items-center justify-center">
                <div className="w-4.5 h-2.5 bg-neutral-200 rounded-0.5" />
              </div>

              {/* Fake UI List (Decisions) */}
              <div className="flex items-center justify-between mb-4 pr-2">
                <div className="flex items-center gap-2">
                  <ChevronDown className="w-3.5 h-3.5 text-neutral-400" />
                  <span className="text-[11px] font-semibold text-[#333]">Decisions</span>
                </div>
                <Plus className="w-3.5 h-3.5 text-neutral-400" />
              </div>

              <div className="flex flex-col gap-3">
                {[1,2,3,4,5,6,7,8].map((i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-neutral-200" />
                    <div 
                      className="h-1.5 rounded-full bg-neutral-200" 
                      style={{ width: i % 2 === 0 ? '55%' : i % 3 === 0 ? '75%' : '40%' }}
                    />
                    {i === 6 && <div className="h-1.5 w-12.5 bg-neutral-200 rounded-full ml-1" />}
                  </div>
                ))}
              </div>

              {/* Floating Left-Side Icons */}
              <div className="absolute -left-5 top-6 flex flex-col gap-3">
                <motion.div 
                  initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", delay: 0.3 }}
                  className="w-10 h-10 rounded-xl bg-[#f6edff] flex items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.05)]"
                >
                  <Asterisk className="w-4 h-4 text-[#bc7bee]" />
                </motion.div>
                <motion.div 
                  initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", delay: 0.4 }}
                  className="w-10 h-10 rounded-xl bg-[#ffdbbd] flex items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.05)]"
                >
                  <Zap className="w-4 h-4 text-[#f58b44]" fill="#f58b44" />
                </motion.div>
                <motion.div 
                  initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", delay: 0.5 }}
                  className="w-10 h-10 rounded-xl bg-[#a0d2aa] flex items-center justify-center shadow-[0_4px_12px_rgba(0,0,0,0.05)]"
                >
                  <ListTree className="w-4 h-4 text-[#3b854a]" />
                </motion.div>
              </div>
            </motion.div>

            {/* Bottom Glass Stats Cards Container */}
            <div className="flex gap-2.5">
              <motion.div 
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
                className="flex-1 h-16 bg-white/60 backdrop-blur-xl rounded-xl border border-white shadow-sm flex flex-col justify-center px-4"
              >
                <span className="text-[9.5px] font-medium text-neutral-500 mb-0.5">Deadline</span>
                <span className="text-[11px] font-semibold text-[#222]">Wed, Sep 12 2024</span>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7 }}
                className="flex-1 h-16 bg-white/60 backdrop-blur-xl rounded-xl border border-white shadow-sm flex flex-col justify-center px-4"
              >
                <span className="text-[9.5px] font-medium text-neutral-500 mb-0.5">Decision maker</span>
                <span className="text-[11px] font-semibold text-[#222]">Jordyn Torff</span>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}
                className="flex-1 h-16 bg-white/60 backdrop-blur-xl rounded-xl border border-white shadow-sm flex flex-col justify-center px-4"
              >
                <span className="text-[9.5px] font-medium text-neutral-500 mb-0.5">Contributors</span>
                <span className="text-[11px] font-semibold text-[#222]">89</span>
              </motion.div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
