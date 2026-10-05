'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SignatureCanvas from 'react-signature-canvas';
import { 
  BookOpen, Volume2, Edit3, User, CheckCircle2, ChevronLeft, Book, 
  ChevronRight, Pencil, Mail, Star, Apple, Coffee, Info, MapPin, 
  ArrowUpRight, Activity, Play, Pause, ArrowRight, Bookmark, Camera, 
  X, Pen, Check, Search, SlidersHorizontal, Feather 
} from 'lucide-react';

export default function NotebookGuestbook() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [seconds, setSeconds] = useState(42);
  const [currentLeftPage, setCurrentLeftPage] = useState(14);
  const [isFlipping, setIsFlipping] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isWaxSealed, setIsWaxSealed] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [inkColor, setInkColor] = useState('#6c2f00'); // Default Sepia Russet
  const sigCanvas = useRef<SignatureCanvas>(null);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setSeconds((prev) => {
          if (prev >= 78) return 0;
          return prev + 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const flipPage = (forward: boolean) => {
    if (isFlipping) return;
    setIsFlipping(true);
    setTimeout(() => {
      if (forward) {
        setCurrentLeftPage((prev) => Math.min(82, prev + 2));
      } else {
        setCurrentLeftPage((prev) => Math.max(2, prev - 2));
      }
      setIsFlipping(false);
    }, 400); // Wait for flip animation
  };

  const handleWaxSeal = () => {
    if (sigCanvas.current?.isEmpty()) {
      alert("Please leave your signature before sealing!");
      return;
    }
    setIsWaxSealed(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setIsWaxSealed(false);
      if (sigCanvas.current) {
        sigCanvas.current.clear();
      }
    }, 1200);
  };

  const formatTime = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const remSecs = String(totalSeconds % 60).padStart(2, '0');
    return `${mins}:${remSecs}`;
  };

  return (
    <div className="font-body-md text-on-surface min-h-screen relative antialiased selection:bg-primary-fixed selection:text-on-primary-fixed bg-background">
      <header className="fixed top-0 left-0 right-0 z-40 bg-surface-bright/85 backdrop-blur-md shadow-[0_1px_8px_rgba(60,40,20,0.06)]">
        <div className="h-16 max-w-7xl mx-auto px-4 lg:px-10 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <BookOpen className="text-primary w-6 h-6" />
              <span className="font-title-script text-[26px] leading-[32px] font-bold text-primary tracking-normal hidden sm:block">Folio Guestbook</span>
            </div>
            <div className="hidden md:flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high/80 text-on-surface-variant font-label-sm text-[11px] font-semibold uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
              <span>Edition Nº 12 • 148 Keepsakes</span>
            </div>
          </div>
          <nav className="hidden lg:flex items-center gap-1 bg-surface-container-low/70 p-1 rounded-full shadow-[0_1px_3px_rgba(60,40,20,0.05)]">
            <a aria-current="page" className="px-4 py-1.5 rounded-full transition-all bg-surface-container-highest text-primary font-semibold shadow-[inset_0_1px_2px_rgba(0,0,0,0.05)] text-[13px]" href="#">Guestbook</a>
            <a className="px-4 py-1.5 rounded-full font-label-md text-[13px] font-semibold text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-all" href="#">Archive Gallery</a>
            <a className="px-4 py-1.5 rounded-full font-label-md text-[13px] font-semibold text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-all" href="#">Curator's Log</a>
          </nav>
          <div className="flex items-center gap-3">
            <button aria-label="Toggle ambient room sound" className="w-9 h-9 rounded-full bg-surface-container hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface flex items-center justify-center transition-all active:scale-90" type="button">
              <Volume2 className="w-5 h-5" />
            </button>
            <button onClick={() => setIsModalOpen(true)} className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary hover:bg-primary-container text-on-primary font-label-md text-[13px] font-semibold shadow-[0_2px_8px_rgba(108,47,0,0.2)] active:scale-95 transition-all" type="button">
              <Edit3 className="w-4 h-4" />
              <span>Sign Page</span>
            </button>
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center ml-1">
              <User className="text-on-primary w-4 h-4" />
            </div>
          </div>
        </div>
      </header>

      <main className="w-full pt-16 bg-background pb-32">
        <div className="flex flex-col w-full">
          <section className="relative w-full max-w-7xl mx-auto px-2 sm:px-6 lg:px-10 py-6">
            
            {/* Top Meta Ribbon Bar */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-6 px-2">
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container shadow-sm border border-outline-variant/30">
                  <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                  <span className="font-label-sm text-[11px] font-semibold text-on-surface uppercase tracking-wider">Curated Archive Spread</span>
                  <span className="text-outline font-label-sm text-[11px] font-semibold">•</span>
                  <span className="font-label-sm text-[11px] font-semibold text-primary uppercase tracking-wider">October Gathering 2024</span>
                </div>
                <div className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-[11px] font-semibold">
                  <CheckCircle2 className="w-4 h-4 text-tertiary" />
                  <span>142 Preserved Memories</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={() => flipPage(false)} aria-label="Previous Spread" className="w-9 h-9 rounded-full bg-surface-bright text-on-surface shadow-sm border border-outline-variant/30 hover:bg-surface-container flex items-center justify-center transition-transform active:scale-90" type="button">
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <div className="px-4 py-2 rounded-full bg-surface-bright shadow-sm border border-outline-variant/30 font-label-md text-[13px] text-on-surface font-semibold flex items-center gap-2">
                  <Book className="text-surface-tint w-4 h-4" />
                  <span>Pages {currentLeftPage} – {currentLeftPage + 1} of 84</span>
                </div>
                <button onClick={() => flipPage(true)} aria-label="Next Spread" className="w-9 h-9 rounded-full bg-surface-bright text-on-surface shadow-sm border border-outline-variant/30 hover:bg-surface-container flex items-center justify-center transition-transform active:scale-90" type="button">
                  <ChevronRight className="w-5 h-5" />
                </button>
                <button onClick={() => setIsModalOpen(true)} className="ml-2 hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary hover:bg-primary-container text-on-primary font-label-md text-[13px] font-semibold shadow-md active:scale-95 transition-all" type="button">
                  <Pencil className="w-4 h-4" />
                  <span>Add Keepsake</span>
                </button>
              </div>
            </div>

            {/* MAIN SKEUOMORPHIC LEATHER BOOK WRAPPER */}
            <div className="relative w-full rounded-[1.75rem] p-3 sm:p-5 lg:p-7 shadow-[0_25px_60px_-15px_rgba(40,22,10,0.35),0_10px_20px_-8px_rgba(30,15,5,0.22)] bg-linear-to-br from-[#4e2206] via-[#3a1803] to-[#270e01] transition-all overflow-hidden group/book">
              <div className="absolute inset-2 sm:inset-3 rounded-[1.4rem] border-2 border-dashed border-[#8d4f20]/45 pointer-events-none"></div>
              
              {/* Brass Corners */}
              <div className="absolute top-2 left-2 w-8 h-8 rounded-tl-[1.2rem] border-t-4 border-l-4 border-[#c5a059]/80 pointer-events-none shadow-[inset_1px_1px_2px_rgba(255,255,255,0.3)]"></div>
              <div className="absolute top-2 right-2 w-8 h-8 rounded-tr-[1.2rem] border-t-4 border-r-4 border-[#c5a059]/80 pointer-events-none shadow-[inset_-1px_1px_2px_rgba(255,255,255,0.3)]"></div>
              <div className="absolute bottom-2 left-2 w-8 h-8 rounded-bl-[1.2rem] border-b-4 border-l-4 border-[#c5a059]/80 pointer-events-none shadow-[inset_1px_-1px_2px_rgba(255,255,255,0.3)]"></div>
              <div className="absolute bottom-2 right-2 w-8 h-8 rounded-br-[1.2rem] border-b-4 border-r-4 border-[#c5a059]/80 pointer-events-none shadow-[inset_-1px_-1px_2px_rgba(255,255,255,0.3)]"></div>
              
              {/* Velvet Bookmark */}
              <div className="absolute -top-3 left-[48%] md:left-1/2 w-7 h-16 bg-linear-to-b from-tertiary to-tertiary-container shadow-lg pointer-events-none z-30 origin-top animate-pulse">
                <div className="w-full h-full flex items-end justify-center pb-1">
                  <div className="w-0 h-0 border-l-14 border-l-transparent border-r-14 border-r-transparent border-t-10 border-t-[#2a0e06]"></div>
                </div>
              </div>

              {/* STACKED PAPERS UNDERLAY EFFECT */}
              <div className="relative w-full rounded-xl bg-[#e3ded5] shadow-[0_3px_1px_rgba(0,0,0,0.15),0_6px_2px_rgba(0,0,0,0.1)] p-0.5 sm:p-1">
                <div className="w-full rounded-lg bg-[#ede8df] shadow-[0_2px_1px_rgba(0,0,0,0.12)] p-0.5">
                  
                  {/* TWO-PAGE OPEN BOOK SPREAD */}
                  <motion.div 
                    initial={false}
                    animate={{ rotateY: isFlipping ? -180 : 0, scale: isFlipping ? 0.98 : 1, filter: isFlipping ? 'blur(2px)' : 'blur(0px)' }}
                    transition={{ duration: 0.6, type: "spring", stiffness: 60, damping: 15 }}
                    style={{ transformStyle: 'preserve-3d', transformOrigin: 'center left' }}
                    className="relative grid grid-cols-1 lg:grid-cols-2 bg-[#FAF6EE] rounded-md shadow-[inset_0_0_40px_rgba(140,110,80,0.12)] overflow-hidden"
                  >
                    {/* CENTRAL SPINE */}
                    <div className="hidden lg:block absolute inset-y-0 left-1/2 -translate-x-1/2 w-12 pointer-events-none z-20">
                      <div className="w-full h-full bg-linear-to-r from-black/25 via-black/40 to-black/20 shadow-inner"></div>
                      <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-0.5 bg-[#3a1805]/40"></div>
                      <div className="absolute inset-y-4 left-1/2 -translate-x-1/2 flex flex-col justify-between py-2">
                        {Array.from({length: 7}).map((_, i) => (
                          <span key={i} className="w-3 -ml-1.25 h-0.75 rounded-full bg-[#f8f1e2] shadow-sm"></span>
                        ))}
                      </div>
                    </div>

                    {/* LEFT PAGE */}
                    <div className="relative p-6 sm:p-9 lg:p-11 flex flex-col justify-between min-h-145 lg:min-h-165 bg-linear-to-r from-[#FAF6EE] via-[#FDFBF7] to-[#F1ECE1] lg:pr-12 backface-hidden">
                      <div className="absolute inset-0 opacity-40 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#937d6e 0.75px, transparent 0.75px)', backgroundSize: '20px 20px' }}></div>
                      
                      <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 z-10">
                        <div className="flex items-center gap-2">
                          <span className="font-label-sm text-[11px] font-semibold uppercase tracking-widest text-outline">Folio Nº {String(currentLeftPage).padStart(3, '0')}</span>
                          <span className="w-1 h-1 rounded-full bg-outline hidden sm:block"></span>
                          <span className="font-signature-casual text-[20px] text-on-surface-variant hidden sm:block">Sunny Autumn Afternoon</span>
                        </div>
                        <motion.div whileHover={{ scale: 1.05, rotate: 8 }} className="relative rotate-6 inline-flex flex-col items-center justify-center p-2 rounded border border-dashed border-tertiary/60 bg-tertiary-fixed/40 text-tertiary select-none cursor-pointer">
                          <div className="flex items-center gap-1 font-label-sm text-[9px] tracking-widest uppercase font-bold">
                            <Mail className="w-3 h-3" />
                            <span>VERIFIED VISITOR</span>
                          </div>
                          <span className="font-headline-md text-[11px] leading-tight font-bold tracking-tight">OCT 14, 2024</span>
                          <div className="w-full flex items-center justify-center gap-0.5 mt-0.5">
                            <span className="h-px w-3 bg-tertiary/70"></span>
                            <span className="font-label-sm text-[8px] uppercase">PORTUGAL POST</span>
                            <span className="h-px w-3 bg-tertiary/70"></span>
                          </div>
                        </motion.div>
                      </div>

                      <div className="relative my-4 flex-1 flex flex-col justify-center z-10">
                        <motion.div whileHover={{ rotate: 0, scale: 1.05 }} className="relative self-start -rotate-3 w-56 sm:w-64 p-3 pb-4 bg-surface-container-lowest rounded-sm shadow-[1px_4px_12px_rgba(60,35,15,0.18)] transition-all duration-300 cursor-pointer group/polaroid">
                          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-28 h-6 bg-[#eeddb9]/85 backdrop-blur-[1px] rotate-1 shadow-sm border-l border-r border-[#cfbb8c]/50 flex items-center justify-center pointer-events-none">
                            <span className="font-label-sm text-[9px] tracking-wider text-[#795a32]/80 uppercase font-bold">• ARCHIVAL TAPE •</span>
                          </div>
                          <div className="relative w-full aspect-4/3 bg-surface-container overflow-hidden rounded-xs">
                            <img className="w-full h-full object-cover filter contrast-[1.05] sepia-[0.18] group-hover/polaroid:scale-110 transition-transform duration-700" alt="Polaroid" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHdM1_YHkTUE1Y_Bix-iTp9KPCdCpCLBjmQWLi0KBDJ8zgz_WDYPQLNBZY_Hv_gDDp8TYE_I0Bs2Hzbf8Wm4bkV8C0DiztQYc0LKlN9FHsu1Gg0ZtSXYKNIxX1Q_5g-b3CFFaVK5Pk2NUT9gGqWG30KR5wgqP-A43QUEEnVnktAcrAOJy6qmjVIk0TNsJ5iHh15GZc6aEDmIuUh-f5zt6yDU4qb0GH6Cpq5oDd8zcc6mMoSu_6vm5d" />
                            <div className="absolute inset-0 bg-linear-to-t from-black/25 via-transparent to-transparent pointer-events-none"></div>
                          </div>
                          <p className="font-signature-freehand text-[24px] text-primary text-center mt-3 select-none tracking-wide">Spring Gathering '24 ♥</p>
                        </motion.div>

                        <motion.div whileHover={{ rotate: 45, scale: 1.2 }} className="absolute -top-2 right-4 md:left-60 md:right-auto rotate-12 p-2 bg-linear-to-tr from-amber-200 via-pink-200 to-indigo-200 rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.14)] border border-white/60 cursor-pointer select-none">
                          <Star className="text-[#8a4a15] w-5 h-5 fill-current" />
                        </motion.div>

                        <motion.div whileHover={{ scale: 1.2 }} className="absolute top-28 right-2 sm:right-6 rotate-18 w-14 h-14 rounded-full bg-linear-to-br from-[#ffa642] to-[#e65c00] p-1 shadow-[1px_3px_8px_rgba(0,0,0,0.2)] flex items-center justify-center text-white cursor-pointer select-none">
                          <div className="w-full h-full rounded-full border border-dashed border-white/70 flex flex-col items-center justify-center">
                            <Apple className="w-5 h-5" />
                            <span className="font-label-sm text-[8px] uppercase tracking-tighter font-black mt-0.5">SWEET</span>
                          </div>
                        </motion.div>

                        <motion.div whileHover={{ y: -5 }} className="absolute bottom-16 right-10 rotate-[-10deg] px-3 py-1.5 rounded-md bg-[#f5e6d3] shadow-[1px_2px_5px_rgba(0,0,0,0.12)] flex items-center gap-1.5 cursor-pointer select-none">
                          <Coffee className="text-primary w-4 h-4" />
                          <span className="font-signature-casual text-[16px] text-primary font-bold tracking-tight">Refill!</span>
                        </motion.div>

                        <div className="mt-8 pt-3 pl-1 relative">
                          <p className="font-signature-expressive text-[22px] text-on-surface leading-[1.6]">
                            “May your memories be warm and your pages full! Every corner here smells of cedar and freshly steeped tea.”
                          </p>
                          <div className="relative inline-block mt-4 group">
                            <button className="flex items-center gap-2 focus:outline-none" type="button">
                              <span className="font-title-script text-[28px] font-bold text-primary underline decoration-wavy decoration-surface-tint underline-offset-4 cursor-pointer">
                                — Elena Rostova
                              </span>
                              <span className="text-tertiary text-xl font-signature-casual ml-1">♥</span>
                              <Info className="w-4 h-4 text-outline opacity-60 group-hover:opacity-100 transition-opacity ml-1" />
                            </button>
                            
                            {/* Interactive Tooltip using CSS for instant hover, but Framer Motion handles the enter */}
                            <div className="absolute bottom-full left-0 mb-3 w-72 p-4 bg-surface-bright/95 backdrop-blur-md rounded-xl shadow-[0_12px_30px_-5px_rgba(40,25,10,0.22)] border border-outline-variant/40 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto focus-within:opacity-100 focus-within:pointer-events-auto transition-all duration-300 z-30 translate-y-2 group-hover:translate-y-0">
                              <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-full bg-primary-fixed overflow-hidden shrink-0 shadow-inner">
                                  <img className="w-full h-full object-cover" alt="Elena" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCql2zrZrxN_lKeFlOTGQxBxX2_zHsyi05uohpFdRgGCbFt0iOZrM_KySwxWWc6AFu3rKwE8UuLXQlXKfJWzl0C1hItAf68V-hI_2hEBTP2TOZAOENJ65C6Tqkk99aDsBPs7dr17ORzvGk6kh0EDYHQY2VHiNUNeYEVXDxBaFUn_nz3i2bFqTP3Slq3F8PLOzZBmfKaC6rjqjrlw5fFt-4VRp7rHGMhqBIHAc_25PpLX6yqrJdGHG6i"/>
                                </div>
                                <div className="min-w-0">
                                  <h4 className="font-headline-md text-[15px] font-semibold text-on-surface truncate">Elena Rostova</h4>
                                  <p className="font-body-sm text-[13px] text-on-surface-variant">Botanist &amp; Dreamer</p>
                                  <span className="inline-flex items-center gap-1 font-label-sm text-[10px] font-semibold text-secondary mt-0.5">
                                    <MapPin className="w-3 h-3" />
                                    <span>Lisbon, Portugal</span>
                                  </span>
                                </div>
                              </div>
                              <div className="mt-4 pt-3 border-t border-surface-container-high flex items-center justify-between">
                                <span className="font-label-sm text-[11px] font-semibold text-outline uppercase tracking-wider">Shared Keepsake</span>
                                <a className="inline-flex items-center gap-1 font-label-sm text-[11px] font-semibold text-primary hover:text-primary-container transition-colors" href="#sketchbook">
                                  <span>View Sketchbook</span>
                                  <ArrowUpRight className="w-3 h-3" />
                                </a>
                              </div>
                            </div>

                          </div>
                        </div>
                      </div>
                      
                      <div className="relative pt-3 flex items-center justify-between border-t border-outline-variant/30 z-10">
                        <span className="font-label-sm text-[11px] font-semibold text-outline tracking-wider">INK: SEPIA ARCHIVAL • 0.5MM NIB</span>
                        <span className="font-signature-casual text-[18px] font-bold text-outline">{currentLeftPage}</span>
                      </div>
                    </div>

                    {/* RIGHT PAGE */}
                    <div className="relative p-6 sm:p-9 lg:p-11 flex flex-col justify-between min-h-145 lg:min-h-165 bg-linear-to-l from-[#FAF6EE] via-[#FDFBF7] to-[#F1ECE1] lg:pl-12 backface-hidden">
                      <div className="absolute inset-0 opacity-40 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#937d6e 0.75px, transparent 0.75px)', backgroundSize: '20px 20px' }}></div>
                      
                      <div className="relative flex items-start justify-between z-10">
                        <motion.div whileHover={{ rotate: -2, y: -5 }} className="relative -mt-3 -rotate-6 group cursor-pointer">
                          <div className="absolute -top-3 left-6 z-20 w-5 h-12 pointer-events-none">
                            <svg className="w-full h-full drop-shadow-sm" fill="none" viewBox="0 0 24 64">
                              <path d="M7 16V46C7 51 11 55 16 55C21 55 25 51 25 46V12C25 6 20 1 14 1C8 1 3 6 3 12V48" stroke="#C5A059" strokeLinecap="round" strokeWidth="2.5"></path>
                              <path d="M7 16V46C7 51 11 55 16 55C21 55 25 51 25 46V12C25 6 20 1 14 1C8 1 3 6 3 12V48" stroke="#F5DF9E" strokeLinecap="round" strokeWidth="0.8"></path>
                            </svg>
                          </div>
                          <div className="relative p-2.5 bg-surface-bright rounded shadow-[1px_3px_8px_rgba(60,35,15,0.15)] flex flex-col items-center border border-outline-variant/30 group-hover:shadow-[2px_6px_16px_rgba(60,35,15,0.2)] transition-shadow">
                            <div className="w-20 h-28 bg-[#f5efe3] rounded overflow-hidden flex items-center justify-center p-1">
                              <img className="w-full h-full object-contain mix-blend-multiply opacity-90 group-hover:scale-105 transition-transform duration-500" alt="Herbarium" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGb8S0x0ZzbFTurZOr9u3vldOJdsJCt6T9J2iNPqRDid1-vNE1zIDZChblMkQ_O8_WkEFBqnaxJ6hvU9vv8gsOTQfOku7AyRTTcY_LtlIVCw3BjeRL3WIgX3PIopLEew3P4EFVKUNjrXA8z3iqf2qc49YCymHx8nvK7aTCqDusJ0wHJ54iqU57q2kvtIHVE6zvultz7VkC665rDi4ULzEOPVJonkNE_RpPxgKe3uAJQ-m19qowLJqa"/>
                            </div>
                            <span className="font-signature-casual text-[13px] font-bold text-secondary mt-1 tracking-tight">Trifolium repens</span>
                          </div>
                        </motion.div>
                        
                        <div className="flex flex-col items-end gap-1">
                          <div className="flex items-center gap-2">
                            <span className="font-signature-casual text-[20px] text-on-surface-variant hidden sm:block">Gathering Reflections</span>
                            <span className="w-1 h-1 rounded-full bg-outline hidden sm:block"></span>
                            <span className="font-label-sm text-[11px] font-semibold uppercase tracking-widest text-outline">Folio Nº {String(currentLeftPage + 1).padStart(3, '0')}</span>
                          </div>
                        </div>
                      </div>

                      <div className="relative my-4 flex-1 flex flex-col justify-around z-10">
                        <div className="p-5 sm:p-6 rounded-xl bg-surface-bright/70 shadow-[0_2px_10px_rgba(50,30,10,0.06)] border border-dashed border-secondary-fixed-dim/70 relative hover:bg-surface-bright transition-colors">
                          <div className="absolute -top-3.5 -right-2 flex items-center justify-center w-8 h-8 rounded-full bg-secondary-fixed shadow-sm">
                            <span className="text-secondary text-xl font-bold select-none leading-none -mt-1">♣</span>
                          </div>
                          <p className="font-signature-brush text-[19px] text-secondary leading-relaxed tracking-wide">
                            “Left a little lucky clover for future wanderers. May your journeys stay curious and your bags light! 🍀 Keepsake perfection.”
                          </p>
                          <div className="mt-4 flex items-center justify-between">
                            <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                              <span className="font-title-script text-[22px] font-bold text-secondary-container bg-secondary px-3 py-0.5 rounded shadow-sm inline-block">
                                Julian K.
                              </span>
                              <span className="font-label-sm text-[10px] font-semibold text-on-surface-variant uppercase tracking-wider">Hiker &amp; Archivist</span>
                            </div>
                            <span className="font-label-sm text-[11px] font-bold text-outline tracking-wider">16:42 PM</span>
                          </div>
                        </div>

                        <div className="relative mt-4 p-4 rounded-xl bg-linear-to-r from-surface-container to-surface-container-high shadow-[0_4px_14px_rgba(0,0,0,0.09)] border border-outline-variant/40 hover:shadow-[0_6px_20px_rgba(0,0,0,0.12)] transition-shadow">
                          <div className="flex items-center gap-4">
                            <motion.button whileTap={{ scale: 0.9 }} onClick={() => setIsPlaying(!isPlaying)} className={`w-12 h-12 rounded-full flex items-center justify-center shadow-lg transition-colors ${isPlaying ? 'bg-secondary' : 'bg-tertiary'} text-white`} type="button">
                              {isPlaying ? <Pause className="w-5 h-5 fill-current" /> : <Play className="w-5 h-5 fill-current ml-1" />}
                            </motion.button>
                            <div className="flex-1 min-w-0">
                              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-1">
                                <div className="flex items-center gap-2">
                                  <Activity className="text-tertiary w-4 h-4" />
                                  <span className="font-label-md text-[14px] font-bold text-on-surface truncate">Campfire Laughter &amp; Acoustic Jam</span>
                                </div>
                                <span className="font-label-sm text-[11px] font-semibold text-on-surface-variant bg-surface/50 px-2 py-0.5 rounded-full">{formatTime(seconds)} / 1:18</span>
                              </div>
                              <div className="flex items-center gap-0.5 h-8 w-full py-1">
                                {Array.from({ length: 20 }).map((_, i) => (
                                  <motion.div 
                                    key={i} 
                                    animate={isPlaying ? { height: Math.max(4, Math.random() * 32) } : { height: [12, 20, 16, 24, 12, 20, 16, 8, 20, 24, 12, 16, 20, 12, 8, 20, 24, 12, 16, 12][i] }}
                                    transition={{ duration: 0.2, repeat: isPlaying ? Infinity : 0, repeatType: "mirror" }}
                                    className={`w-1 rounded-full ${i < (seconds/78)*20 ? 'bg-tertiary' : 'bg-outline-variant'}`}
                                  ></motion.div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>

                        <motion.button whileHover={{ x: 5 }} onClick={() => flipPage(true)} className="mt-6 self-end inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-fixed hover:bg-primary-fixed-dim text-on-primary-fixed font-signature-casual text-[18px] font-bold shadow-sm transition-colors" type="button">
                          <span>Tap to flip to next spread</span>
                          <ArrowRight className="w-4 h-4" />
                        </motion.button>
                      </div>

                      <div className="relative pt-3 flex items-center justify-between border-t border-outline-variant/30 z-10">
                        <span className="font-signature-casual text-[18px] font-bold text-outline">{currentLeftPage + 1}</span>
                        <span className="font-label-sm text-[11px] font-semibold text-outline uppercase tracking-wider">Preserved in Archive Collection A-24</span>
                      </div>

                      {/* Interactive Page Curl */}
                      <div onClick={() => flipPage(true)} className="absolute bottom-0 right-0 w-20 h-20 cursor-pointer group/curl" title="Click to flip to next spread">
                        <div className="absolute inset-0 bg-linear-to-tl from-black/25 via-black/5 to-transparent rounded-tl-xl pointer-events-none opacity-50 group-hover/curl:opacity-100 transition-opacity"></div>
                        <div className="absolute bottom-0 right-0 w-0 h-0 border-solid border-t-40 border-r-40 border-t-[#dfd8cc] border-r-[#c0b7a8] drop-shadow-[-3px_3px_5px_rgba(0,0,0,0.25)] group-hover/curl:border-t-54 group-hover/curl:border-r-54 transition-all duration-300 ease-out"></div>
                        <div className="absolute bottom-3 right-3 text-primary/60 group-hover/curl:text-primary transition-colors">
                          <BookOpen className="w-4 h-4" />
                        </div>
                      </div>
                    </div>

                  </motion.div>
                </div>
              </div>
            </div>

            {/* ELEVATED SEARCH FLYOUT (Shows when search is focused) */}
            <AnimatePresence>
              {isSearchOpen && (
                <motion.div 
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 20, scale: 0.95 }}
                  className="absolute bottom-28 left-0 right-0 mx-auto max-w-2xl w-[92vw] z-30"
                >
                  <div className="bg-surface-bright/95 backdrop-blur-xl rounded-2xl p-5 shadow-[0_20px_40px_-6px_rgba(40,25,12,0.25)] border border-outline-variant/50">
                    <div className="flex items-center justify-between pb-3 border-b border-surface-container-high">
                      <div className="flex items-center gap-2">
                        <Bookmark className="text-primary w-5 h-5 fill-current/20" />
                        <span className="font-headline-md text-[16px] font-semibold text-on-surface">Bookmarked &amp; Matching Keepsakes</span>
                      </div>
                      <span className="font-label-sm text-[11px] font-bold px-3 py-1 rounded-full bg-surface-container text-on-surface-variant">
                        3 Matches Found
                      </span>
                    </div>
                    
                    <div className="mt-4 space-y-2">
                      <div className="group flex items-center justify-between p-3 rounded-xl bg-surface-container-low hover:bg-surface-container transition-all cursor-pointer">
                        <div className="flex items-center gap-4 min-w-0">
                          <div className="w-12 h-12 rounded-xl bg-surface-container-high shrink-0 flex items-center justify-center text-primary overflow-hidden">
                            <img className="w-full h-full object-cover" alt="Thumb" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDs7fIRmsAR0MTNk7T03rR8ggjDcPtLSSylGstY8jngCuPn88FDXXGiOyqDDMzA2R_yMP00yj8Wdw_OrJww1aYcqtz-Zh6DMfuMZoc_hDyfgtqK9ibzURBTschQ3-E0exCUUjRXrSXTW29iaVCa1WeFZfdDcDtga-LodqVbVMxDh5xP6fh7pFj4JcgMcQGBS4ZTe3aPbaQeIzcse91XjIwOmUroyY5EsPH7bZ8TMVQnuAfWo_F5bist"/>
                          </div>
                          <div className="min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <h5 className="font-headline-md text-[15px] font-semibold text-on-surface truncate group-hover:text-primary transition-colors">Elena Rostova</h5>
                              <span className="px-2 py-0.5 rounded-full bg-[#ffa642]/20 text-surface-tint font-label-sm text-[10px] font-bold uppercase tracking-wider">Citrus Sticker</span>
                            </div>
                            <p className="font-body-sm text-[13px] text-on-surface-variant truncate">“May your memories be warm and your pages full!”</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 shrink-0 ml-4">
                          <span className="font-label-sm text-[11px] font-bold text-outline">Page 14</span>
                          <ChevronRight className="text-outline w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>

                      <div className="group flex items-center justify-between p-3 rounded-xl bg-surface-container-low hover:bg-surface-container transition-all cursor-pointer">
                        <div className="flex items-center gap-4 min-w-0">
                          <div className="w-12 h-12 rounded-xl bg-secondary-fixed shrink-0 flex items-center justify-center text-secondary shadow-inner">
                            <span className="text-2xl font-bold select-none -mt-1">♣</span>
                          </div>
                          <div className="min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <h5 className="font-headline-md text-[15px] font-semibold text-on-surface truncate group-hover:text-primary transition-colors">Julian K.</h5>
                              <span className="px-2 py-0.5 rounded-full bg-secondary-fixed-dim text-on-secondary-fixed font-label-sm text-[10px] font-bold uppercase tracking-wider">Clover Doodle</span>
                            </div>
                            <p className="font-body-sm text-[13px] text-on-surface-variant truncate">“Left a little lucky clover for future wanderers...”</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 shrink-0 ml-4">
                          <span className="font-label-sm text-[11px] font-bold text-outline">Page 15</span>
                          <ChevronRight className="text-outline w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                      
                      <div className="group flex items-center justify-between p-3 rounded-xl bg-surface-container-low hover:bg-surface-container transition-all cursor-pointer">
                        <div className="flex items-center gap-4 min-w-0">
                          <div className="w-12 h-12 rounded-xl bg-surface-container-high shrink-0 flex items-center justify-center text-tertiary">
                            <Camera className="w-5 h-5" />
                          </div>
                          <div className="min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <h5 className="font-headline-md text-[15px] font-semibold text-on-surface truncate group-hover:text-primary transition-colors">Marcus Vance</h5>
                              <span className="px-2 py-0.5 rounded-full bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-[10px] font-bold uppercase tracking-wider">Vintage 35mm</span>
                            </div>
                            <p className="font-body-sm text-[13px] text-on-surface-variant truncate">“Cheers to the journey ahead! Let the mountain wind guide us.”</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 shrink-0 ml-4">
                          <span className="font-label-sm text-[11px] font-bold text-outline">Page 8</span>
                          <ChevronRight className="text-outline w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* QUICK SIGNATURE MODAL DRAWER */}
            <AnimatePresence>
              {isModalOpen && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 bg-inverse-surface/60 backdrop-blur-md z-50 flex items-center justify-center p-4"
                >
                  <motion.div 
                    initial={{ scale: 0.9, y: 20 }}
                    animate={{ scale: 1, y: 0 }}
                    exit={{ scale: 0.9, y: 20 }}
                    transition={{ type: "spring", damping: 25, stiffness: 300 }}
                    className="w-full max-w-lg bg-[#FAF6EE] rounded-3xl shadow-[0_30px_60px_rgba(30,15,5,0.4)] border-8 border-[#e3ded5] p-6 sm:p-8 relative"
                  >
                    <button onClick={() => setIsModalOpen(false)} className="absolute top-5 right-5 w-10 h-10 rounded-full bg-surface-container hover:bg-surface-container-high text-on-surface flex items-center justify-center transition-colors active:scale-90">
                      <X className="w-5 h-5" />
                    </button>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Pen className="text-primary w-6 h-6" />
                      </div>
                      <h3 className="font-headline-md text-[24px] font-bold text-on-surface tracking-tight">Leave Your Memento</h3>
                    </div>

                    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                      <div>
                        <label className="block font-label-sm text-[11px] font-bold text-on-surface-variant uppercase tracking-widest mb-2">Your Name or Pen Name</label>
                        <input className="w-full bg-transparent border-b-2 border-outline-variant/60 focus:border-secondary pb-2 font-signature-casual text-[24px] text-on-surface focus:outline-none transition-colors placeholder:text-outline-variant/50" placeholder="e.g. Clara &amp; Thomas" type="text" />
                      </div>
                      
                      <div>
                        <label className="block font-label-sm text-[11px] font-bold text-on-surface-variant uppercase tracking-widest mb-2">Draw Your Signature / Note</label>
                        <div className="w-full h-40 bg-surface-container-lowest rounded-xl border-2 border-dashed border-outline-variant/50 relative overflow-hidden cursor-crosshair">
                          <SignatureCanvas 
                            ref={sigCanvas} 
                            penColor={inkColor}
                            canvasProps={{ className: 'w-full h-full' }} 
                          />
                          <div className="absolute bottom-2 right-2 flex items-center gap-2">
                            <button onClick={() => sigCanvas.current?.clear()} className="p-1.5 rounded-full bg-surface-container hover:bg-surface-container-high text-on-surface-variant transition-colors" title="Clear Canvas">
                              <Feather className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>

                      <div>
                        <label className="block font-label-sm text-[11px] font-bold text-on-surface-variant uppercase tracking-widest mb-2">Select Ink Well</label>
                        <div className="flex items-center gap-4 py-1">
                          <button onClick={() => setInkColor('#6c2f00')} className={`w-8 h-8 rounded-full bg-primary transition-all ${inkColor === '#6c2f00' ? 'ring-4 ring-offset-2 ring-primary' : 'hover:scale-110'}`} title="Sepia Russet" type="button"></button>
                          <button onClick={() => setInkColor('#46654f')} className={`w-8 h-8 rounded-full bg-secondary transition-all ${inkColor === '#46654f' ? 'ring-4 ring-offset-2 ring-secondary' : 'hover:scale-110'}`} title="Moss Green" type="button"></button>
                          <button onClick={() => setInkColor('#702c19')} className={`w-8 h-8 rounded-full bg-tertiary transition-all ${inkColor === '#702c19' ? 'ring-4 ring-offset-2 ring-tertiary' : 'hover:scale-110'}`} title="Terracotta" type="button"></button>
                          <button onClick={() => setInkColor('#1e2a38')} className={`w-8 h-8 rounded-full bg-[#1e2a38] transition-all ${inkColor === '#1e2a38' ? 'ring-4 ring-offset-2 ring-[#1e2a38]' : 'hover:scale-110'}`} title="Vintage Ink" type="button"></button>
                        </div>
                      </div>
                      
                      <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-outline-variant/30">
                        <div className="flex items-center gap-3">
                          <span className="font-label-sm text-[11px] font-bold text-on-surface-variant uppercase tracking-wider">Attach Sticker:</span>
                          <button className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-lg shadow-sm hover:scale-110 transition-transform" type="button">🌸</button>
                          <button className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-lg shadow-sm hover:scale-110 transition-transform" type="button">🍀</button>
                          <button className="w-9 h-9 rounded-full bg-surface-container flex items-center justify-center text-lg shadow-sm hover:scale-110 transition-transform" type="button">☕</button>
                        </div>
                        <motion.button 
                          whileTap={{ scale: 0.95 }}
                          onClick={handleWaxSeal} 
                          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-tertiary hover:bg-tertiary-container text-on-tertiary font-label-md text-[14px] font-bold shadow-lg shadow-tertiary/20 transition-colors" 
                          type="button"
                        >
                          {isWaxSealed ? (
                            <><Check className="w-5 h-5" /><span>Sealed &amp; Pinned!</span></>
                          ) : (
                            <><CheckCircle2 className="w-5 h-5" /><span>Press Wax Seal</span></>
                          )}
                        </motion.button>
                      </div>
                    </form>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

          </section>
        </div>
      </main>

      {/* FLOATING SEARCH BAR PILL */}
      <aside className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 w-[92vw] max-w-3xl">
        <div className="bg-surface-bright/95 backdrop-blur-xl rounded-full p-2 pl-5 pr-2 shadow-[0_16px_40px_-4px_rgba(50,40,30,0.25),0_4px_12px_rgba(0,0,0,0.1)] flex items-center justify-between gap-4 border border-outline-variant/40">
          <div className="flex items-center gap-3 flex-1 min-w-0">
            <Search className="text-outline w-5 h-5 shrink-0" />
            <input 
              onFocus={() => setIsSearchOpen(true)}
              onBlur={() => setTimeout(() => setIsSearchOpen(false), 200)}
              className="w-full bg-transparent font-body-sm text-[15px] font-medium text-on-surface placeholder:text-outline/70 focus:outline-none" 
              placeholder="Search memories, names, washi notes..." 
              type="text"
            />
            <div className="hidden md:flex items-center gap-1.5 shrink-0 ml-4 border-l border-outline-variant/30 pl-4">
              <button className="px-3 py-1.5 rounded-full bg-surface-container-highest text-on-surface font-label-sm text-[11px] font-bold hover:bg-surface-dim transition-colors" type="button">All Entries</button>
              <button className="px-3 py-1.5 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-[11px] font-bold hover:bg-surface-container-high hover:text-on-surface transition-colors" type="button">Drawings</button>
              <button className="px-3 py-1.5 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-[11px] font-bold hover:bg-surface-container-high hover:text-on-surface transition-colors" type="button">Wishes</button>
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <button aria-label="Search filters" className="md:hidden w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant hover:text-on-surface" type="button">
              <SlidersHorizontal className="w-4 h-4" />
            </button>
            <motion.button whileTap={{ scale: 0.95 }} onClick={() => setIsModalOpen(true)} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-tertiary hover:bg-tertiary-container text-on-tertiary font-label-md text-[13px] font-bold shadow-[0_4px_12px_rgba(112,44,25,0.3)] transition-colors" type="button">
              <Pencil className="w-4 h-4" />
              <span className="hidden sm:inline">Leave Note</span>
            </motion.button>
          </div>
        </div>
      </aside>

      <footer className="w-full bg-surface-container-low py-16 pb-32">
        <div className="max-w-7xl mx-auto px-4 lg:px-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-on-surface-variant font-body-sm text-[13px]">
          <div className="flex items-center gap-3">
            <BookOpen className="text-primary w-5 h-5" />
            <span className="font-medium">Folio Heirloom Journal Edition • Bound with Linen &amp; Archival Parchment</span>
          </div>
          <div className="flex items-center gap-6 font-label-sm text-[11px] font-bold tracking-widest uppercase">
            <a className="text-on-surface-variant hover:text-primary transition-colors" href="#">Colophon</a>
            <a className="text-on-surface-variant hover:text-primary transition-colors" href="#">Archival Guidelines</a>
            <a className="text-on-surface-variant hover:text-primary transition-colors" href="#">Export Keepsake</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
