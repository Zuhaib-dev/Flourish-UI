"use client";

import React, { useState, useEffect } from "react";

export default function VerifyEmail() {
  const [timeLeft, setTimeLeft] = useState(59);

  useEffect(() => {
    if (timeLeft > 0) {
      const timerId = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timerId);
    }
  }, [timeLeft]);

  const formattedTime = `00:${timeLeft.toString().padStart(2, '0')}`;

  return (
    <main className="flex-1 flex flex-col items-center justify-center p-6 selection:bg-neutral-200">
      
      {/* 3D Mailbox Image with mix-blend-multiply to remove white background */}
      <div className="w-[320px] h-[320px] mb-2 -mt-16 pointer-events-none">
        <img 
          src="/mailbox.jpg" 
          alt="3D Mailbox" 
          className="w-full h-full object-contain mix-blend-multiply opacity-90"
        />
      </div>

      {/* Typography block */}
      <div className="text-center max-w-[360px] flex flex-col items-center">
        <h1 className="text-[19px] font-semibold tracking-tight text-[#222222] mb-3">
          Verify your email
        </h1>
        
        <p className="text-[15px] leading-[1.6] text-[#7a7a7a]">
          We sent you an email at <span className="font-medium text-[#222222]">murat@email.com.</span><br />
          Click the link inside to get started with Fumez.
        </p>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-4 mt-8">
        
        {/* Disabled / Pressed Button */}
        <button 
          disabled
          className="
            px-5 py-2.5 
            rounded-[14px] 
            bg-[#ebe8dd] 
            border border-black/[0.04]
            shadow-[inset_0_2px_4px_rgba(0,0,0,0.06),inset_0_1px_2px_rgba(0,0,0,0.04)]
            text-[#a0a0a0] 
            text-[14.5px] font-medium 
            tracking-tight
            cursor-not-allowed
            select-none
          "
        >
          Resend ({formattedTime})
        </button>

        {/* Active / Elevated Button */}
        <button 
          className="
            px-5 py-2.5 
            rounded-[14px] 
            bg-white 
            border border-black/[0.03]
            shadow-[0_2px_8px_rgba(0,0,0,0.04),0_1px_2px_rgba(0,0,0,0.06),inset_0_-2px_4px_rgba(0,0,0,0.02)]
            text-[#222222] 
            text-[14.5px] font-medium 
            tracking-tight
            active:scale-[0.98]
            active:shadow-[inset_0_2px_4px_rgba(0,0,0,0.04)]
            transition-all
            duration-200
            select-none
          "
        >
          Open mail app
        </button>
        
      </div>
    </main>
  );
}
