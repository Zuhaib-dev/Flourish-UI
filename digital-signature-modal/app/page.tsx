'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Page() {
  const [activeTab, setActiveTab] = useState<'draw' | 'type' | 'upload'>('draw');
  const [inkColor, setInkColor] = useState<'black' | 'navy'>('black');
  const [isCleared, setIsCleared] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-surface/90 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
        <div className="h-16 w-full px-gutter-desktop flex items-center justify-between gap-space-md">
          <div className="flex items-center gap-space-md min-w-0">
            <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-surface-container">
              <span className="material-symbols-outlined text-on-surface text-[20px]">description</span>
            </div>
            <div className="flex items-center gap-space-sm min-w-0">
              <span className="font-headline-sm text-headline-sm text-on-surface truncate">Master Services Agreement (MSA) - Ref #4092-B</span>
              <span className="inline-flex items-center px-space-sm py-space-xs rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm whitespace-nowrap">Pending Signature</span>
            </div>
          </div>
          <div className="flex items-center gap-space-md flex-shrink-0">
            <nav className="hidden lg:flex items-center gap-space-xs">
              <a aria-current="page" className="px-space-md py-space-sm transition-colors bg-surface-container text-on-surface font-label-md text-label-md rounded-lg" href="#">Signing Workspace</a>
              <a className="px-space-md py-space-sm rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container font-label-md text-label-md transition-colors" href="#">Audit Log</a>
              <a className="px-space-md py-space-sm rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container font-label-md text-label-md transition-colors" href="#">Details &amp; Parties</a>
            </nav>
            <div className="h-5 w-px bg-surface-container-highest hidden sm:block"></div>
            <div className="flex items-center gap-space-sm">
              <button className="inline-flex items-center justify-center gap-space-xs px-space-md py-space-sm rounded-lg bg-surface-container text-on-surface hover:bg-surface-container-high font-label-md text-label-md transition-colors" type="button">
                <span className="material-symbols-outlined text-[18px]">download</span>
                <span className="hidden sm:inline">Download</span>
              </button>
              <button className="inline-flex items-center justify-center gap-space-xs px-space-md py-space-sm rounded-lg bg-primary text-on-primary hover:bg-surface-tint font-label-md text-label-md transition-colors" type="button">
                <span className="material-symbols-outlined text-[18px]">draw</span>
                <span>Sign Now</span>
              </button>
            </div>
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
            </div>
          </div>
        </div>
      </header>

      <main className="w-full pt-16 bg-background min-h-screen">
        <div className="flex flex-col w-full relative min-h-[calc(100vh-4rem)]">
          {/* Underlying Executive Contract Preview */}
          <div className="w-full max-w-5xl mx-auto px-gutter py-space-xl flex flex-col gap-space-lg select-none filter blur-[2px] opacity-40 pointer-events-none transition-all duration-300">
            <div className="bg-surface-container-lowest p-space-xl rounded-xl shadow-sm flex flex-col gap-space-lg">
              <div className="flex items-center justify-between pb-space-md bg-surface-container-low px-space-md py-space-sm rounded-lg">
                <div className="flex items-center gap-space-sm">
                  <span className="material-symbols-outlined text-primary text-[20px]">verified</span>
                  <span className="font-headline-sm text-headline-sm text-on-surface">MSA Execution Copy • Exhibit B</span>
                </div>
                <span className="font-label-sm text-label-sm text-secondary">Document Hash: 8b73...ea04</span>
              </div>
              <div className="flex flex-col gap-space-md">
                <h2 className="font-headline-md text-headline-md text-on-surface">Section 14. Execution, Counterparts &amp; Authority</h2>
                <p className="font-body-md text-body-md text-secondary leading-relaxed">
                  This Master Services Agreement ("Agreement") may be executed in counterparts, each of which will be deemed an original, but all of which together constitute one and the same instrument. The parties acknowledge and agree that electronic signatures, via authorized digital workspace execution systems, shall carry the same legal weight, validity, and enforceability as standard holographic manual signatures.
                </p>
                <p className="font-body-md text-body-md text-secondary leading-relaxed">
                  IN WITNESS WHEREOF, the duly authorized representatives of the parties have executed and delivered this Master Services Agreement as of the Effective Date written below.
                </p>
              </div>
              {/* Mock Signatures Grid on Background Page */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg mt-space-lg pt-space-lg bg-surface-container-low p-space-lg rounded-xl">
                <div className="flex flex-col gap-space-sm">
                  <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">Party A: Service Provider</span>
                  <div className="h-24 bg-surface-container-lowest rounded-lg p-space-md flex flex-col justify-end">
                    <span className="font-headline-sm text-headline-sm text-on-surface italic">Eleanor Vance</span>
                    <div className="h-0.5 w-full bg-surface-container-highest mt-space-xs"></div>
                    <span className="font-body-sm text-body-sm text-secondary mt-1">VP Legal &amp; Compliance, Meridian Core Inc.</span>
                  </div>
                </div>
                <div className="flex flex-col gap-space-sm">
                  <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">Party B: Client Signatory</span>
                  <div className="h-24 bg-surface-container-highest rounded-lg p-space-md flex items-center justify-center">
                    <div className="px-space-md py-space-xs rounded-full bg-primary text-on-primary font-label-md text-label-md flex items-center gap-space-xs">
                      <span className="material-symbols-outlined text-[16px]">edit_note</span>
                      <span>[SIGN HERE - REQUIRED]</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Focused Modal Overlay Backing */}
          <div className="fixed inset-0 top-16 z-40 bg-on-background/45 backdrop-blur-[4px] flex items-center justify-center p-space-md overflow-y-auto">
            {/* Centered Modal Container */}
            <div aria-labelledby="modal-title" aria-modal="true" className="relative w-full max-w-[640px] bg-surface-container-lowest rounded-xl shadow-2xl flex flex-col overflow-hidden my-auto animate-in fade-in zoom-in-95 duration-200" role="dialog">
              
              {/* Modal Header */}
              <div className="px-space-lg pt-space-lg pb-space-md flex items-start justify-between bg-surface-container-lowest">
                <div className="flex flex-col gap-0.5 pr-space-md">
                  <div className="flex items-center gap-space-xs">
                    <h1 className="font-headline-md text-headline-md text-on-surface" id="modal-title">Adopt Your Signature</h1>
                    <span className="inline-flex items-center px-space-xs py-0.5 rounded-full bg-secondary-container text-on-secondary-container font-label-sm text-label-sm">
                      Step 1 of 2
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-secondary">
                    Review or create your signature for Master Services Agreement (MSA) - Ref #4092-B
                  </p>
                </div>
                <button aria-label="Dismiss signature modal" className="w-8 h-8 rounded-lg flex items-center justify-center text-secondary hover:text-on-surface hover:bg-surface-container transition-colors flex-shrink-0" type="button">
                  <span className="material-symbols-outlined text-[20px]">close</span>
                </button>
              </div>

              {/* Segmented Mode Selector Bar */}
              <div className="px-space-lg pb-space-md">
                <div className="w-full p-1 bg-surface-container rounded-lg flex items-center gap-1 relative">
                  {(['draw', 'type', 'upload'] as const).map((tab) => (
                    <button 
                      key={tab}
                      onClick={() => setActiveTab(tab)} 
                      className={`flex-1 py-1.5 px-space-md rounded-[6px] font-label-md text-label-md transition-colors flex items-center justify-center gap-space-xs relative z-10 ${activeTab === tab ? 'text-on-surface' : 'text-secondary hover:text-on-surface'}`} 
                      type="button"
                    >
                      {activeTab === tab && (
                        <motion.div
                          layoutId="activeTabIndicator"
                          className="absolute inset-0 bg-surface-container-lowest shadow-sm rounded-[6px] -z-10"
                          transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        />
                      )}
                      <span className="material-symbols-outlined text-[18px]">
                        {tab === 'draw' ? 'gesture' : tab === 'type' ? 'match_case' : 'upload_file'}
                      </span>
                      <span className="capitalize">{tab === 'draw' ? 'Draw / Sign' : tab === 'type' ? 'Type Signature' : 'Upload Image'}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Modal Interactive Body */}
              <div className="px-space-lg flex flex-col gap-space-md">
                
                {/* Views */}
                <div className="relative min-h-[220px]">
                  <AnimatePresence mode="wait">
                    {activeTab === 'draw' && (
                      <motion.div 
                        key="draw"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="flex flex-col gap-space-sm absolute inset-0"
                      >
                        <div className="relative w-full h-[200px] bg-surface rounded-xl p-space-md flex flex-col justify-between overflow-hidden shadow-inner cursor-crosshair group">
                          <div className="relative z-10 flex items-center justify-between w-full">
                            {/* Ink Selector */}
                            <div className="flex items-center gap-space-xs bg-surface-container-lowest/90 backdrop-blur-sm px-space-sm py-1 rounded-full shadow-sm">
                              <span className="font-label-sm text-label-sm text-secondary pr-1">Ink:</span>
                              <button onClick={() => setInkColor('black')} className={`w-5 h-5 rounded-full bg-primary flex items-center justify-center focus:outline-none ${inkColor === 'black' ? 'ring-2 ring-primary ring-offset-1' : 'hover:opacity-90'}`} title="Obsidian Black" type="button">
                                <span className={`material-symbols-outlined text-[12px] ${inkColor === 'black' ? 'text-on-primary' : 'text-transparent'}`}>check</span>
                              </button>
                              <button onClick={() => setInkColor('navy')} className={`w-5 h-5 rounded-full bg-primary-container flex items-center justify-center focus:outline-none ${inkColor === 'navy' ? 'ring-2 ring-primary ring-offset-1' : 'hover:opacity-90'}`} title="Executive Navy Blue" type="button">
                                <span className={`material-symbols-outlined text-[12px] ${inkColor === 'navy' ? 'text-on-primary' : 'text-transparent'}`}>check</span>
                              </button>
                            </div>
                            {/* History Controls */}
                            <div className="flex items-center gap-1 bg-surface-container-lowest/90 backdrop-blur-sm px-1.5 py-1 rounded-lg shadow-sm">
                              <button className="w-6 h-6 rounded flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors" title="Undo stroke" type="button">
                                <span className="material-symbols-outlined text-[16px]">undo</span>
                              </button>
                              <button className="w-6 h-6 rounded flex items-center justify-center text-outline-variant cursor-not-allowed" disabled title="Redo stroke" type="button">
                                <span className="material-symbols-outlined text-[16px]">redo</span>
                              </button>
                            </div>
                          </div>
                          
                          {/* Signature Display Area */}
                          <div className="absolute inset-0 flex items-center justify-center px-space-xl pointer-events-none">
                            <svg className={`w-full h-full max-h-[140px] transition-colors duration-200 ${inkColor === 'navy' ? 'text-primary-container' : 'text-primary'}`} style={{ opacity: isCleared ? 0 : 1, transition: 'opacity 0.3s ease' }} viewBox="0 0 520 140">
                              <motion.path 
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: isCleared ? 0 : 1 }}
                                transition={{ duration: 1.5, ease: "easeOut" }}
                                d="M 45 68 C 65 30, 95 18, 92 82 C 90 120, 78 128, 70 122 C 60 114, 82 78, 125 72 C 145 70, 160 84, 172 74 C 182 66, 188 56, 198 76 C 205 90, 218 84, 230 76 C 245 65, 275 62, 290 80 C 315 110, 335 40, 350 25 C 362 14, 375 52, 385 82 C 392 102, 404 88, 420 72 C 445 48, 470 60, 495 55" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.6" 
                              />
                              <motion.path 
                                initial={{ pathLength: 0 }}
                                animate={{ pathLength: isCleared ? 0 : 1 }}
                                transition={{ duration: 0.5, delay: 1, ease: "easeOut" }}
                                d="M 110 98 Q 280 115 480 82" fill="none" opacity="0.9" stroke="currentColor" strokeLinecap="round" strokeWidth="1.8" 
                              />
                            </svg>
                          </div>

                          {/* Authentic Legal Signing Baseline & Watermark */}
                          <div className="relative z-10 w-full flex items-end justify-between pb-1">
                            <div className="flex items-center gap-space-xs w-2/3">
                              <span className="font-headline-sm text-headline-sm text-secondary select-none font-bold">✕</span>
                              <div className="h-px w-full bg-outline-variant border-b border-dashed border-secondary/40"></div>
                            </div>
                            <button onClick={() => setIsCleared(!isCleared)} className="flex items-center gap-1 text-secondary hover:text-error font-label-sm text-label-sm px-space-sm py-1 rounded bg-surface-container-lowest/80 backdrop-blur-sm shadow-sm transition-colors" type="button">
                              <span className="material-symbols-outlined text-[15px]">{isCleared ? 'restore' : 'delete_sweep'}</span>
                              <span>{isCleared ? 'Undo clear' : 'Clear canvas'}</span>
                            </button>
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
                        className="flex flex-col gap-space-sm absolute inset-0"
                      >
                        <div className="flex flex-col gap-space-xs">
                          <label className="font-label-sm text-label-sm text-secondary" htmlFor="typed-name-input">Signatory Full Legal Name</label>
                          <input className="w-full px-space-md py-2 rounded-lg bg-surface-container-low text-on-surface font-headline-sm text-headline-sm focus:outline-none focus:bg-surface-container" id="typed-name-input" type="text" defaultValue="Jonathan Vance" />
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-xs mt-space-xs h-[106px]">
                          <div className="p-space-md rounded-lg bg-surface-container-lowest shadow-sm flex flex-col justify-between cursor-pointer ring-2 ring-primary">
                            <span className="italic font-headline-lg text-headline-lg text-primary tracking-wide">Jonathan Vance</span>
                            <span className="font-label-sm text-label-sm text-secondary mt-space-sm">Executive Script Style 1 (Selected)</span>
                          </div>
                          <div className="p-space-md rounded-lg bg-surface-container-low hover:bg-surface-container flex flex-col justify-between cursor-pointer transition-colors">
                            <span className="italic font-headline-md text-headline-md text-on-surface font-serif">J. Vance</span>
                            <span className="font-label-sm text-label-sm text-secondary mt-space-sm">Corporate Cursive Style 2</span>
                          </div>
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
                        <div className="w-full h-44 rounded-xl bg-surface-container-low flex flex-col items-center justify-center p-space-md text-center hover:bg-surface-container transition-colors cursor-pointer">
                          <div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center mb-space-xs text-on-surface">
                            <span className="material-symbols-outlined text-[20px]">cloud_upload</span>
                          </div>
                          <p className="font-label-md text-label-md text-on-surface">Drag &amp; drop your scanned signature</p>
                          <p className="font-body-sm text-body-sm text-secondary mt-0.5">Supports transparent PNG, SVG, or high-res JPEG (Max 5MB)</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Signer Identity Metadata Summary Strip */}
                <div className="grid grid-cols-3 gap-space-sm bg-surface-container-low p-space-sm rounded-lg">
                  <div className="flex flex-col px-space-xs">
                    <span className="font-legal-disclaimer text-legal-disclaimer text-secondary uppercase tracking-wider">Signer</span>
                    <span className="font-label-md text-label-md text-on-surface truncate">Jonathan Vance</span>
                  </div>
                  <div className="flex flex-col px-space-xs">
                    <span className="font-legal-disclaimer text-legal-disclaimer text-secondary uppercase tracking-wider">Initials</span>
                    <span className="font-label-md text-label-md text-on-surface font-semibold">JV</span>
                  </div>
                  <div className="flex flex-col px-space-xs">
                    <span className="font-legal-disclaimer text-legal-disclaimer text-secondary uppercase tracking-wider">Designation</span>
                    <span className="font-label-md text-label-md text-on-surface truncate">Chief Executive Officer</span>
                  </div>
                </div>

                {/* ESIGN / UETA Compliance Agreement Checkbox */}
                <div className="flex items-start gap-space-sm pt-space-xs">
                  <label className="relative flex items-center p-0.5 cursor-pointer mt-0.5">
                    <input defaultChecked className="peer sr-only" id="legal-consent-toggle" type="checkbox" />
                    <div className="w-4 h-4 rounded bg-surface-container-highest peer-checked:bg-primary transition-all flex items-center justify-center">
                      <span className="material-symbols-outlined text-[13px] text-on-primary font-bold">check</span>
                    </div>
                  </label>
                  <label className="font-body-sm text-body-sm text-secondary leading-snug cursor-pointer select-none" htmlFor="legal-consent-toggle">
                    I confirm that this adopted mark represents my legal electronic signature, and I agree to be legally bound under the <span className="text-on-surface font-medium">U.S. ESIGN Act</span>, <span className="text-on-surface font-medium">UETA</span>, and global e-commerce statutes.
                  </label>
                </div>
              </div>

              {/* Modal Footer Bar */}
              <div className="mt-space-lg px-space-lg py-space-md bg-surface-container-low flex flex-col sm:flex-row items-center justify-between gap-space-md">
                <div className="flex items-center gap-space-xs text-secondary font-legal-disclaimer text-legal-disclaimer">
                  <span className="material-symbols-outlined text-[15px] text-secondary">lock</span>
                  <span>256-bit TLS Encrypted • Audit Trail Logged</span>
                </div>
                <div className="flex items-center gap-space-sm w-full sm:w-auto justify-end">
                  <button className="w-full sm:w-auto px-space-md py-2 rounded-lg bg-surface-container-lowest hover:bg-surface-container-high text-on-surface font-label-md text-label-md transition-colors" type="button">
                    Cancel
                  </button>
                  <button className="w-full sm:w-auto px-space-lg py-2 rounded-lg bg-primary hover:bg-on-surface-variant active:scale-[0.99] text-on-primary font-label-md text-label-md transition-all shadow-sm flex items-center justify-center gap-space-xs" type="button">
                    <span className="material-symbols-outlined text-[18px]">verified</span>
                    <span>Adopt &amp; Sign Document</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="w-full bg-surface-container-lowest shadow-[0_-1px_8px_rgba(0,0,0,0.02)] py-space-md">
        <div className="w-full px-gutter-desktop flex flex-col sm:flex-row items-center justify-between gap-space-sm">
          <div className="flex items-center gap-space-sm text-on-surface-variant font-legal-disclaimer text-legal-disclaimer">
            <span className="material-symbols-outlined text-[14px]">verified_user</span>
            <span>256-Bit Encrypted Audit Hash: SHA256:4d80a1b2...9f0c • Legally Binding Under ESIGN Act</span>
          </div>
          <div className="flex items-center gap-space-md text-on-surface-variant font-label-sm text-label-sm">
            <span>Security Verification</span>
            <span>Terms of Execution</span>
          </div>
        </div>
      </footer>
    </>
  );
}
