'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SignatureCanvas from 'react-signature-canvas';
import { FileSignature, X, PenTool, Type, Upload, Check, Eraser, Keyboard, CloudUpload, RefreshCw, Trash2, Lock, BadgeCheck } from 'lucide-react';

export default function Page() {
  const [activeTab, setActiveTab] = useState<'draw' | 'type' | 'upload'>('draw');
  
  // Draw Canvas State
  const [inkColor, setInkColor] = useState<'#0f172a' | '#1d4ed8'>('#0f172a'); // slate-900 or blue-700
  const sigCanvas = useRef<SignatureCanvas>(null);
  const [hasUserDrawn, setHasUserDrawn] = useState(false);

  // Re-trigger animation when tab changes back to draw
  const [animationKey, setAnimationKey] = useState(0);
  
  useEffect(() => {
    if (activeTab === 'draw' && !hasUserDrawn) {
      setAnimationKey(prev => prev + 1);
    }
  }, [activeTab, hasUserDrawn]);

  // Type Signature State
  const [typedName, setTypedName] = useState('Jonathan Vance');
  const [signatureStyle, setSignatureStyle] = useState<1 | 2>(1);

  // Upload Signature State
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleClear = () => {
    if (sigCanvas.current) {
      sigCanvas.current.clear();
    }
    setHasUserDrawn(true); // Hide animated pre-draw if user clears
  };

  const handleDrawBegin = () => {
    setHasUserDrawn(true);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <main className="w-full min-h-screen bg-linear-to-br from-surface-container-highest/20 via-background to-surface-container-low flex items-center justify-center p-space-md sm:p-space-xl relative overflow-hidden">
      
      {/* Decorative ambient background glows */}
      <div className="absolute top-[20%] left-[20%] w-125 h-125 bg-primary/5 rounded-full blur-[120px] pointer-events-none mix-blend-multiply"></div>
      <div className="absolute bottom-[20%] right-[20%] w-100 h-100 bg-secondary/5 rounded-full blur-[100px] pointer-events-none mix-blend-multiply"></div>

      {/* Centered Modal Container */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
        aria-labelledby="modal-title" 
        aria-modal="true" 
        className="relative w-full max-w-160 bg-surface-container-lowest/80 backdrop-blur-xl rounded-3xl shadow-[0_32px_80px_-12px_rgba(0,0,0,0.12)] border border-outline-variant/30 flex flex-col overflow-hidden" 
        role="dialog"
      >
        
        {/* Modal Header */}
        <div className="px-space-xl pt-space-xl pb-space-md flex items-start justify-between border-b border-outline-variant/10">
          <div className="flex flex-col gap-1 pr-space-md">
            <div className="flex items-center gap-space-sm">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <FileSignature className="w-5 h-5" strokeWidth={2.5} />
              </div>
              <h1 className="font-headline-lg font-semibold text-on-surface tracking-tight" id="modal-title">Adopt Your Signature</h1>
            </div>
            <p className="font-body-sm text-secondary mt-1 pl-13">
              Review or create your signature for Master Services Agreement (MSA) - Ref #4092-B
            </p>
          </div>
          <button aria-label="Dismiss signature modal" className="w-9 h-9 rounded-full flex items-center justify-center text-secondary hover:text-on-surface hover:bg-surface-container transition-all active:scale-95 shrink-0" type="button">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Segmented Mode Selector Bar */}
        <div className="px-space-xl pt-space-md pb-space-md">
          <div className="w-full p-1.5 bg-surface-container-high/50 backdrop-blur-md rounded-xl flex items-center gap-1.5 relative border border-outline-variant/20 shadow-inner">
            {(['draw', 'type', 'upload'] as const).map((tab) => (
              <button 
                key={tab}
                onClick={() => setActiveTab(tab)} 
                className={`flex-1 py-2 px-space-md rounded-lg font-label-md font-medium transition-colors flex items-center justify-center gap-space-sm relative z-10 ${activeTab === tab ? 'text-on-surface' : 'text-secondary hover:text-on-surface hover:bg-surface-container-lowest/30'}`} 
                type="button"
              >
                {activeTab === tab && (
                  <motion.div
                    layoutId="activeTabIndicator"
                    className="absolute inset-0 bg-surface-container-lowest shadow-[0_2px_8px_rgba(0,0,0,0.06)] rounded-lg -z-10"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                {tab === 'draw' && <PenTool className="w-4.5 h-4.5" />}
                {tab === 'type' && <Type className="w-4.5 h-4.5" />}
                {tab === 'upload' && <Upload className="w-4.5 h-4.5" />}
                <span className="capitalize">{tab === 'draw' ? 'Draw' : tab === 'type' ? 'Type' : 'Upload'}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Modal Interactive Body */}
        <div className="px-space-xl flex flex-col gap-space-lg pb-space-lg">
          
          {/* Views Container */}
          <div className="relative min-h-60">
            <AnimatePresence mode="wait">
              
              {/* View 1: DRAW CANVAS */}
              {activeTab === 'draw' && (
                <motion.div 
                  key="draw"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-col absolute inset-0"
                >
                  <div className="relative w-full h-55 bg-[#fcfcfc] rounded-2xl flex flex-col justify-between overflow-hidden shadow-inner group border border-outline-variant/40 ring-1 ring-inset ring-black/5">
                    
                    {/* Top Controls Overlay */}
                    <div className="absolute top-space-sm left-space-sm right-space-sm z-20 flex items-center justify-between pointer-events-none">
                      {/* Ink Selector */}
                      <div className="flex items-center gap-1.5 bg-white/90 backdrop-blur-md px-2.5 py-1.5 rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.08)] border border-outline-variant/30 pointer-events-auto transition-transform hover:scale-105">
                        <span className="font-label-sm text-secondary pr-1 font-medium">Ink</span>
                        <button onClick={() => setInkColor('#0f172a')} className={`w-5 h-5 rounded-full bg-slate-900 flex items-center justify-center focus:outline-none transition-all ${inkColor === '#0f172a' ? 'ring-2 ring-primary ring-offset-2 scale-110' : 'hover:opacity-80 scale-100'}`} title="Obsidian Black" type="button">
                          <Check className={`w-3 h-3 text-white transition-opacity ${inkColor === '#0f172a' ? 'opacity-100' : 'opacity-0'}`} strokeWidth={3} />
                        </button>
                        <button onClick={() => setInkColor('#1d4ed8')} className={`w-5 h-5 rounded-full bg-blue-700 flex items-center justify-center focus:outline-none transition-all ${inkColor === '#1d4ed8' ? 'ring-2 ring-primary ring-offset-2 scale-110' : 'hover:opacity-80 scale-100'}`} title="Executive Navy" type="button">
                          <Check className={`w-3 h-3 text-white transition-opacity ${inkColor === '#1d4ed8' ? 'opacity-100' : 'opacity-0'}`} strokeWidth={3} />
                        </button>
                      </div>
                      
                      {/* History Controls */}
                      <div className="flex items-center bg-white/90 backdrop-blur-md p-1 rounded-xl shadow-[0_2px_8px_rgba(0,0,0,0.08)] border border-outline-variant/30 pointer-events-auto">
                        <button onClick={handleClear} className="w-8 h-8 rounded-lg flex items-center justify-center text-secondary hover:text-error hover:bg-error/10 transition-colors" title="Clear canvas" type="button">
                          <Eraser className="w-4.5 h-4.5" />
                        </button>
                      </div>
                    </div>
                    
                    {/* The Actual Signature Canvas */}
                    <div className="absolute inset-0 z-10 cursor-crosshair">
                      <SignatureCanvas
                        ref={sigCanvas}
                        penColor={inkColor}
                        onBegin={handleDrawBegin}
                        canvasProps={{ className: 'w-full h-full' }}
                        velocityFilterWeight={0.7}
                        minWidth={1.5}
                        maxWidth={3.5}
                        dotSize={2}
                      />
                    </div>

                    {/* Pre-drawn Animated Signature (Fades out when user starts drawing) */}
                    <AnimatePresence>
                      {!hasUserDrawn && (
                        <motion.div 
                          key={animationKey}
                          initial={{ opacity: 1 }}
                          exit={{ opacity: 0, transition: { duration: 0.3 } }}
                          className="absolute inset-0 z-0 flex items-center justify-center px-space-xl pointer-events-none"
                        >
                          <svg className={`w-full h-full max-h-35 transition-colors duration-200 ${inkColor === '#1d4ed8' ? 'text-blue-700' : 'text-slate-900'}`} viewBox="0 0 520 140">
                            <motion.path 
                              initial={{ pathLength: 0 }}
                              animate={{ pathLength: 1 }}
                              transition={{ duration: 1.5, ease: "easeOut" }}
                              d="M 45 68 C 65 30, 95 18, 92 82 C 90 120, 78 128, 70 122 C 60 114, 82 78, 125 72 C 145 70, 160 84, 172 74 C 182 66, 188 56, 198 76 C 205 90, 218 84, 230 76 C 245 65, 275 62, 290 80 C 315 110, 335 40, 350 25 C 362 14, 375 52, 385 82 C 392 102, 404 88, 420 72 C 445 48, 470 60, 495 55" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.6" 
                            />
                            <motion.path 
                              initial={{ pathLength: 0 }}
                              animate={{ pathLength: 1 }}
                              transition={{ duration: 0.5, delay: 1, ease: "easeOut" }}
                              d="M 110 98 Q 280 115 480 82" fill="none" opacity="0.9" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" 
                            />
                          </svg>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Authentic Legal Signing Baseline & Watermark */}
                    <div className="absolute bottom-4 left-space-lg right-space-lg z-0 flex items-end justify-between pointer-events-none">
                      <div className="flex items-center gap-space-xs w-full">
                        <span className="font-headline-sm text-secondary/40 select-none font-bold">✕</span>
                        <div className="h-px w-full border-b-2 border-dotted border-secondary/20"></div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* View 2: TYPE SIGNATURE */}
              {activeTab === 'type' && (
                <motion.div 
                  key="type"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-col absolute inset-0"
                >
                  <div className="flex flex-col gap-1.5 mb-space-md">
                    <label className="font-label-sm font-medium text-secondary" htmlFor="typed-name-input">Signatory Full Legal Name</label>
                    <div className="relative">
                      <input 
                        className="w-full px-space-md py-3 rounded-xl bg-surface-container-highest/20 border border-outline-variant/50 text-on-surface font-headline-sm focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all placeholder:text-secondary/50 shadow-sm" 
                        id="typed-name-input" 
                        type="text" 
                        value={typedName}
                        onChange={(e) => setTypedName(e.target.value)}
                        placeholder="Enter your full name"
                      />
                      <Keyboard className="absolute right-space-md top-1/2 -translate-y-1/2 w-5 h-5 text-secondary/50 pointer-events-none" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md h-30">
                    {/* Style 1: Caveat */}
                    <button 
                      onClick={() => setSignatureStyle(1)}
                      className={`relative overflow-hidden p-space-md rounded-2xl flex flex-col justify-center items-center cursor-pointer transition-all ${signatureStyle === 1 ? 'bg-primary/5 border-2 border-primary shadow-sm' : 'bg-surface-container-highest/20 border-2 border-transparent hover:bg-surface-container-highest/40'}`}
                      type="button"
                    >
                      <span 
                        className="text-4xl text-on-surface whitespace-nowrap px-4 w-full text-center truncate" 
                        style={{ fontFamily: 'var(--font-caveat)' }}
                      >
                        {typedName || 'Your Name'}
                      </span>
                      {signatureStyle === 1 && (
                        <div className="absolute top-2 right-2 w-5 h-5 bg-primary rounded-full flex items-center justify-center shadow-sm">
                          <Check className="w-3 h-3 text-on-primary font-bold" strokeWidth={3} />
                        </div>
                      )}
                    </button>

                    {/* Style 2: Dancing Script */}
                    <button 
                      onClick={() => setSignatureStyle(2)}
                      className={`relative overflow-hidden p-space-md rounded-2xl flex flex-col justify-center items-center cursor-pointer transition-all ${signatureStyle === 2 ? 'bg-primary/5 border-2 border-primary shadow-sm' : 'bg-surface-container-highest/20 border-2 border-transparent hover:bg-surface-container-highest/40'}`}
                      type="button"
                    >
                      <span 
                        className="text-[2rem] text-on-surface whitespace-nowrap px-4 w-full text-center truncate" 
                        style={{ fontFamily: 'var(--font-dancing-script)' }}
                      >
                        {typedName || 'Your Name'}
                      </span>
                      {signatureStyle === 2 && (
                        <div className="absolute top-2 right-2 w-5 h-5 bg-primary rounded-full flex items-center justify-center shadow-sm">
                          <Check className="w-3 h-3 text-on-primary font-bold" strokeWidth={3} />
                        </div>
                      )}
                    </button>
                  </div>
                </motion.div>
              )}

              {/* View 3: UPLOAD SIGNATURE */}
              {activeTab === 'upload' && (
                <motion.div 
                  key="upload"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="flex flex-col absolute inset-0"
                >
                  <input 
                    type="file" 
                    accept="image/*" 
                    className="hidden" 
                    ref={fileInputRef} 
                    onChange={handleFileUpload} 
                  />
                  
                  {!uploadedImage ? (
                    <button 
                      onClick={() => fileInputRef.current?.click()}
                      className="w-full h-55 rounded-2xl bg-surface-container-highest/10 flex flex-col items-center justify-center p-space-md text-center hover:bg-surface-container-highest/20 transition-all cursor-pointer border-2 border-outline-variant/40 border-dashed group"
                      type="button"
                    >
                      <div className="w-14 h-14 rounded-full bg-surface-container-highest/50 flex items-center justify-center mb-space-sm text-secondary group-hover:scale-110 group-hover:text-primary transition-all duration-300 shadow-sm">
                        <CloudUpload className="w-6.5 h-6.5" />
                      </div>
                      <p className="font-label-lg font-semibold text-on-surface">Click to upload signature</p>
                      <p className="font-body-sm text-secondary mt-1">Supports transparent PNG, SVG, or high-res JPEG (Max 5MB)</p>
                    </button>
                  ) : (
                    <div className="relative w-full h-55 rounded-2xl bg-[#fcfcfc] border border-outline-variant/30 flex items-center justify-center p-space-xl group shadow-inner">
                      <img src={uploadedImage} alt="Uploaded signature" className="max-w-full max-h-full object-contain filter contrast-125 mix-blend-multiply" />
                      <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button onClick={() => fileInputRef.current?.click()} className="w-9 h-9 rounded-full bg-white shadow-md flex items-center justify-center text-secondary hover:text-primary hover:scale-105 transition-all" title="Replace image" type="button">
                          <RefreshCw className="w-4.5 h-4.5" />
                        </button>
                        <button onClick={() => setUploadedImage(null)} className="w-9 h-9 rounded-full bg-white shadow-md flex items-center justify-center text-secondary hover:text-error hover:scale-105 transition-all" title="Remove image" type="button">
                          <Trash2 className="w-4.5 h-4.5" />
                        </button>
                      </div>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Signer Identity Metadata Summary Strip */}
          <div className="grid grid-cols-3 gap-space-sm bg-surface-container-low/50 border border-outline-variant/20 p-space-md rounded-xl mt-2">
            <div className="flex flex-col px-space-xs">
              <span className="font-legal-disclaimer text-[10px] font-semibold text-secondary uppercase tracking-widest mb-0.5">Signer</span>
              <span className="font-label-md font-medium text-on-surface truncate">{typedName || 'Jonathan Vance'}</span>
            </div>
            <div className="flex flex-col px-space-xs border-l border-outline-variant/30 pl-space-md">
              <span className="font-legal-disclaimer text-[10px] font-semibold text-secondary uppercase tracking-widest mb-0.5">Initials</span>
              <span className="font-label-md font-semibold text-on-surface">
                {typedName ? typedName.split(' ').map(n => n[0]).join('').toUpperCase().substring(0, 2) : 'JV'}
              </span>
            </div>
            <div className="flex flex-col px-space-xs border-l border-outline-variant/30 pl-space-md">
              <span className="font-legal-disclaimer text-[10px] font-semibold text-secondary uppercase tracking-widest mb-0.5">Designation</span>
              <span className="font-label-md font-medium text-on-surface truncate">Chief Executive Officer</span>
            </div>
          </div>

          {/* ESIGN / UETA Compliance Agreement Checkbox */}
          <div className="flex items-start gap-space-md pt-2">
            <label className="relative flex items-center p-0.5 cursor-pointer mt-0.5 group shrink-0">
              <input defaultChecked className="peer sr-only" id="legal-consent-toggle" type="checkbox" />
              <div className="w-5 h-5 rounded-md bg-surface-container-highest border border-outline-variant/50 peer-checked:bg-primary peer-checked:border-primary transition-all flex items-center justify-center group-hover:ring-4 ring-primary/10">
                <Check className="w-3.5 h-3.5 text-white opacity-0 peer-checked:opacity-100 scale-50 peer-checked:scale-100 transition-all duration-300" strokeWidth={3} />
              </div>
            </label>
            <label className="font-body-sm text-secondary leading-relaxed cursor-pointer select-none pt-0.5" htmlFor="legal-consent-toggle">
              I confirm that this adopted mark represents my legal electronic signature, and I agree to be legally bound under the <span className="text-on-surface font-semibold underline decoration-outline-variant/50 underline-offset-2">U.S. ESIGN Act</span>, <span className="text-on-surface font-semibold underline decoration-outline-variant/50 underline-offset-2">UETA</span>, and global e-commerce statutes.
            </label>
          </div>
        </div>

        {/* Modal Footer Bar */}
        <div className="mt-auto px-space-xl py-space-md bg-surface-container-lowest/90 border-t border-outline-variant/10 flex flex-col sm:flex-row items-center justify-between gap-space-md rounded-b-3xl">
          <div className="flex items-center gap-2 text-secondary">
            <Lock className="w-4 h-4 text-green-600" />
            <span className="font-legal-disclaimer text-[11px] font-medium tracking-wide">256-BIT TLS ENCRYPTED</span>
          </div>
          <div className="flex items-center gap-space-sm w-full sm:w-auto justify-end">
            <button className="w-full sm:w-auto px-space-lg py-2.5 rounded-[10px] bg-surface-container-lowest hover:bg-surface-container-highest/50 text-on-surface font-label-md font-semibold transition-all border border-outline-variant/30 hover:border-outline-variant/60" type="button">
              Cancel
            </button>
            <button className="w-full sm:w-auto px-space-xl py-2.5 rounded-[10px] bg-primary hover:bg-primary/90 hover:shadow-[0_4px_12px_rgba(0,0,0,0.15)] active:scale-[0.98] text-white font-label-md font-semibold transition-all flex items-center justify-center gap-2" type="button">
              <BadgeCheck className="w-4.5 h-4.5" />
              <span>Adopt &amp; Sign</span>
            </button>
          </div>
        </div>
      </motion.div>
    </main>
  );
}
