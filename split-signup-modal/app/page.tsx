"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mountain, Chrome, Zap, Asterisk, ListTree, ChevronDown, Plus, LineChart } from "lucide-react";

export default function SplitSignupModal() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 lg:p-12 relative">
      
      {/* Background Decor (optional, just to ground the modal in the center) */}
      <div className="absolute inset-0 bg-[#f4f3f0] -z-10" />

      {/* The Main Modal Container */}
      <div className="w-full max-w-[1200px] h-full max-h-[800px] min-h-[600px] bg-white rounded-[24px] shadow-[0_32px_80px_rgba(0,0,0,0.06)] border border-black/[0.04] overflow-hidden flex flex-col md:flex-row relative">
        
        {/* ======================= */}
        {/* LEFT COLUMN (Form)      */}
        {/* ======================= */}
        <div className="w-full md:w-[45%] lg:w-[40%] flex flex-col pt-16 pb-8 px-12 lg:px-20 relative bg-white z-10">
          
          <div className="flex-1 flex flex-col justify-center max-w-[340px] mx-auto w-full">
            {/* Logo */}
            <div className="w-10 h-10 rounded-xl bg-[#f7ebd7] shadow-sm flex items-center justify-center mb-6">
              <Mountain className="w-5 h-5 text-[#222]" />
            </div>

            <h1 className="text-[26px] font-bold text-[#111] tracking-tight mb-2">Sign up</h1>
            <p className="text-[14px] text-neutral-500 mb-8 font-medium">Be back in control of your team decision</p>

            {/* Google Button */}
            <button className="w-full h-11 bg-white border border-neutral-200 rounded-lg flex items-center justify-center gap-2 hover:bg-neutral-50 transition-colors shadow-sm active:scale-[0.98]">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.56 12.25C22.56 11.47 22.49 10.72 22.36 10H12V14.26H17.92C17.66 15.63 16.88 16.78 15.7 17.57V20.34H19.27C21.36 18.42 22.56 15.6 22.56 12.25Z" fill="#4285F4"/>
                <path d="M12 23C14.97 23 17.46 22.02 19.27 20.34L15.7 17.57C14.72 18.23 13.47 18.63 12 18.63C9.15 18.63 6.74 16.71 5.86 14.14H2.18V16.99C4.01 20.63 7.74 23 12 23Z" fill="#34A853"/>
                <path d="M5.86 14.14C5.63 13.48 5.5 12.76 5.5 12C5.5 11.24 5.63 10.52 5.86 9.86V7.01H2.18C1.43 8.5 1 10.2 1 12C1 13.8 1.43 15.5 2.18 16.99L5.86 14.14Z" fill="#FBBC05"/>
                <path d="M12 5.38C13.62 5.38 15.06 5.93 16.2 7.02L19.34 3.88C17.45 2.12 14.97 1 12 1C7.74 1 4.01 3.37 2.18 7.01L5.86 9.86C6.74 7.29 9.15 5.38 12 5.38Z" fill="#EA4335"/>
              </svg>
              <span className="text-[13.5px] font-semibold text-[#333]">Connect with Google</span>
            </button>

            {/* Divider */}
            <div className="flex items-center gap-4 my-6">
              <div className="flex-1 h-px bg-neutral-100" />
              <span className="text-[10px] font-bold text-neutral-400 tracking-wider">OR</span>
              <div className="flex-1 h-px bg-neutral-100" />
            </div>

            {/* Email Form */}
            <div className="flex flex-col gap-2 mb-6">
              <label className="text-[12px] font-bold text-[#222]">Work email</label>
              <input 
                type="email" 
                placeholder="mail@example.com"
                className="w-full h-11 px-4 rounded-lg border border-neutral-200 text-[14px] outline-none focus:border-neutral-400 focus:ring-4 focus:ring-neutral-100 transition-all placeholder:text-neutral-400 shadow-sm"
              />
            </div>

            <button className="w-full h-11 bg-[#111] hover:bg-[#000] text-white rounded-lg text-[14px] font-semibold transition-colors shadow-[0_4px_12px_rgba(0,0,0,0.15)] active:scale-[0.98]">
              Continue with email
            </button>

            <p className="text-[10px] text-neutral-400 text-center mt-6 max-w-[240px] mx-auto leading-relaxed">
              By signing up, you agree to the <a href="#" className="font-semibold text-neutral-600 hover:text-black">Terms of Service</a> and <a href="#" className="font-semibold text-neutral-600 hover:text-black">Data Processing Agreement</a>.
            </p>
          </div>

          {/* Footer */}
          <div className="mt-auto w-full flex items-center gap-3 text-[10px] font-medium text-neutral-400 pb-2">
            <span>© 2024 Jupi Limited</span>
            <span>•</span>
            <a href="#" className="hover:text-neutral-600">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-neutral-600">Terms and conditions</a>
          </div>
        </div>

        {/* ======================= */}
        {/* RIGHT COLUMN (Visual)   */}
        {/* ======================= */}
        <div className="hidden md:flex flex-1 relative bg-gradient-to-br from-[#f8f1de] via-[#f9e9e5] to-[#f4dfee] overflow-hidden border-l border-neutral-100 items-center justify-center">
          
          {/* Animated Mesh Gradient Blobs */}
          <motion.div 
            animate={{ 
              x: [-20, 20, -20],
              y: [-10, 10, -10],
              rotate: [0, 5, 0]
            }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[20%] right-[10%] w-[300px] h-[300px] bg-[#d9a5e8] rounded-full mix-blend-multiply filter blur-[100px] opacity-40" 
          />
          <motion.div 
            animate={{ 
              x: [20, -20, 20],
              y: [10, -10, 10],
              rotate: [0, -5, 0]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute bottom-[20%] left-[10%] w-[350px] h-[350px] bg-[#f9cfa4] rounded-full mix-blend-multiply filter blur-[100px] opacity-40" 
          />

          {/* Abstract Floating Clouds (Using ultra-soft CSS radial gradients) */}
          <motion.div 
            animate={{ y: [-5, 5, -5] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-[22%] right-[15%] w-32 h-12 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full blur-[2px] opacity-90 shadow-[0_8px_32px_rgba(150,100,200,0.2)] border border-white/60"
            style={{ borderRadius: "50% 50% 40% 60% / 60% 50% 50% 40%" }}
          />
          <motion.div 
            animate={{ y: [5, -5, 5] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-[52%] left-[12%] w-28 h-10 bg-gradient-to-r from-pink-50 to-purple-100 rounded-full blur-[1px] opacity-80 shadow-[0_8px_32px_rgba(150,100,200,0.15)] border border-white/60"
            style={{ borderRadius: "40% 60% 50% 50% / 50% 40% 60% 50%" }}
          />

          {/* Central Glass Mockup */}
          <div className="relative z-10 w-[380px] h-[480px] -mt-16 ml-12">
            
            {/* The Glass Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute inset-0 bg-white/40 backdrop-blur-[24px] rounded-3xl border border-white/80 shadow-[0_24px_80px_rgba(0,0,0,0.05)] overflow-hidden flex flex-col p-6 pl-[80px]"
            >
              <h2 className="text-[17px] font-semibold text-[#333] tracking-tight mb-6 mt-1">Better, faster decisions</h2>
              
              {/* Fake UI Header */}
              <div className="flex items-center gap-3 mb-6">
                <LineChart className="w-4 h-4 text-neutral-400" />
                <div className="h-2 w-20 bg-neutral-200 rounded-full" />
              </div>

              {/* Fake UI List (Decisions) */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <ChevronDown className="w-3.5 h-3.5 text-neutral-500" />
                  <span className="text-[12px] font-semibold text-neutral-700">Decisions</span>
                </div>
                <Plus className="w-4 h-4 text-neutral-400" />
              </div>

              <div className="flex flex-col gap-3.5">
                {[1,2,3,4,5,6,7,8,9].map((i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-neutral-200" />
                    <div 
                      className="h-2 rounded-full bg-neutral-200/80" 
                      style={{ width: i % 2 === 0 ? '60%' : i % 3 === 0 ? '80%' : '40%' }}
                    />
                    {i === 6 && <div className="h-2 w-16 bg-neutral-200/80 rounded-full ml-1" />}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Floating Left-Side Icons */}
            <div className="absolute left-[-20px] top-6 flex flex-col gap-3 z-20">
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", delay: 0.3 }}
                className="w-11 h-11 rounded-xl bg-[#f2e6fd] border border-white flex items-center justify-center shadow-lg"
              >
                <Asterisk className="w-5 h-5 text-[#b070ec]" />
              </motion.div>
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", delay: 0.4 }}
                className="w-11 h-11 rounded-xl bg-[#ffdbbd] border border-white flex items-center justify-center shadow-lg"
              >
                <Zap className="w-5 h-5 text-[#f58b44]" fill="#f58b44" />
              </motion.div>
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", delay: 0.5 }}
                className="w-11 h-11 rounded-xl bg-[#a0d2aa] border border-white flex items-center justify-center shadow-lg"
              >
                <ListTree className="w-5 h-5 text-[#3b854a]" />
              </motion.div>
            </div>
            
          </div>

          {/* Bottom Glass Stats Cards */}
          <div className="absolute bottom-16 left-8 right-8 flex gap-3 z-20">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex-1 bg-white/70 backdrop-blur-xl rounded-xl border border-white shadow-[0_8px_32px_rgba(0,0,0,0.03)] p-4 flex flex-col justify-center"
            >
              <span className="text-[11px] font-medium text-neutral-500 mb-1">Deadline</span>
              <span className="text-[13px] font-semibold text-[#222]">Wed, Sep 12 2024</span>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex-1 bg-white/70 backdrop-blur-xl rounded-xl border border-white shadow-[0_8px_32px_rgba(0,0,0,0.03)] p-4 flex flex-col justify-center"
            >
              <span className="text-[11px] font-medium text-neutral-500 mb-1">Decision maker</span>
              <span className="text-[13px] font-semibold text-[#222]">Jordyn Torff</span>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex-1 bg-white/70 backdrop-blur-xl rounded-xl border border-white shadow-[0_8px_32px_rgba(0,0,0,0.03)] p-4 flex flex-col justify-center"
            >
              <span className="text-[11px] font-medium text-neutral-500 mb-1">Contributors</span>
              <span className="text-[13px] font-semibold text-[#222]">89</span>
            </motion.div>
          </div>

        </div>

      </div>
    </div>
  );
}
