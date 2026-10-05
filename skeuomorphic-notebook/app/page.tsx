'use client';

import React, { useState, useEffect } from 'react';

export default function NotebookGuestbook() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [seconds, setSeconds] = useState(42);
  const [currentLeftPage, setCurrentLeftPage] = useState(14);
  const [isFlipping, setIsFlipping] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isWaxSealed, setIsWaxSealed] = useState(false);

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
    }, 160);
  };

  const handleWaxSeal = () => {
    setIsWaxSealed(true);
    setTimeout(() => {
      setIsModalOpen(false);
      setIsWaxSealed(false);
    }, 800);
  };

  const formatTime = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const remSecs = String(totalSeconds % 60).padStart(2, '0');
    return `${mins}:${remSecs}`;
  };

  return (
    <div className="font-body-md text-on-surface min-h-screen relative antialiased selection:bg-primary-fixed selection:text-on-primary-fixed bg-background">
      <header className="fixed top-0 left-0 right-0 z-40 bg-surface-bright/85 backdrop-blur-md shadow-[0_1px_8px_rgba(60,40,20,0.06)]">
        <div className="h-16 max-w-7xl mx-auto px-space-md lg:px-space-xl flex items-center justify-between">
          <div className="flex items-center gap-space-md">
            <div className="flex items-center gap-space-xs">
              <span className="material-symbols-outlined text-primary text-[22px]">auto_stories</span>
              <span className="font-title-script text-[26px] leading-[32px] font-bold text-primary tracking-normal">Folio Guestbook</span>
            </div>
            <div className="hidden sm:flex items-center gap-space-xs px-space-sm py-0.5 rounded-full bg-surface-container-high/80 text-on-surface-variant font-label-sm text-[11px] font-semibold uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
              <span>Edition Nº 12 • 148 Keepsakes</span>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-space-xs bg-surface-container-low/70 p-1 rounded-full shadow-[0_1px_3px_rgba(60,40,20,0.05)]">
            <a aria-current="page" className="px-space-md py-1.5 rounded-full transition-all bg-surface-container-highest text-primary font-semibold shadow-[inset_0_1px_2px_rgba(0,0,0,0.05)] text-[13px]" href="#">Guestbook</a>
            <a className="px-space-md py-1.5 rounded-full font-label-md text-[13px] font-semibold text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-all" href="#">Archive Gallery</a>
            <a className="px-space-md py-1.5 rounded-full font-label-md text-[13px] font-semibold text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-all" href="#">Curator's Log</a>
          </nav>
          <div className="flex items-center gap-space-sm">
            <button aria-label="Toggle ambient room sound" className="w-9 h-9 rounded-full bg-surface-container hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface flex items-center justify-center transition-all" type="button">
              <span className="material-symbols-outlined text-[19px]">volume_up</span>
            </button>
            <button onClick={() => setIsModalOpen(true)} className="hidden sm:inline-flex items-center gap-space-xs px-space-md py-2 rounded-full bg-primary hover:bg-primary-container text-on-primary font-label-md text-[13px] font-semibold shadow-[0_2px_8px_rgba(108,47,0,0.2)] active:translate-y-0.5 transition-all" type="button">
              <span className="material-symbols-outlined text-[17px]">edit_note</span>
              <span>Sign Page</span>
            </button>
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center ml-1">
              <span className="material-symbols-outlined text-on-primary text-[18px]">person</span>
            </div>
          </div>
        </div>
      </header>

      <main className="w-full pt-16 bg-background pb-32">
        <div className="flex flex-col w-full">
          <section className="relative w-full max-w-7xl mx-auto px-space-xs sm:px-space-md lg:px-space-xl py-space-md">
            
            {/* Top Meta Ribbon Bar */}
            <div className="flex flex-wrap items-center justify-between gap-space-sm mb-space-md px-2">
              <div className="flex items-center gap-space-sm">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-container shadow-sm">
                  <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
                  <span className="font-label-sm text-[11px] font-semibold text-on-surface">Curated Archive Spread</span>
                  <span className="text-outline font-label-sm text-[11px] font-semibold">•</span>
                  <span className="font-label-sm text-[11px] font-semibold text-primary">October Gathering 2024</span>
                </div>
                <div className="hidden sm:inline-flex items-center gap-1 px-3 py-1 rounded-full bg-surface-container-high text-on-surface-variant font-label-sm text-[11px] font-semibold">
                  <span className="material-symbols-outlined text-[15px] text-tertiary">verified</span>
                  <span>142 Preserved Memories</span>
                </div>
              </div>
              <div className="flex items-center gap-space-xs">
                <button onClick={() => flipPage(false)} aria-label="Previous Spread" className="w-9 h-9 rounded-full bg-surface-bright text-on-surface shadow-sm hover:bg-surface-container flex items-center justify-center transition-transform active:scale-95" type="button">
                  <span className="material-symbols-outlined text-[19px]">arrow_back_ios_new</span>
                </button>
                <div className="px-3.5 py-1.5 rounded-full bg-surface-bright shadow-sm font-label-md text-[13px] text-on-surface font-semibold flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-surface-tint text-[16px]">menu_book</span>
                  <span>Pages {currentLeftPage} – {currentLeftPage + 1} of 84</span>
                </div>
                <button onClick={() => flipPage(true)} aria-label="Next Spread" className="w-9 h-9 rounded-full bg-surface-bright text-on-surface shadow-sm hover:bg-surface-container flex items-center justify-center transition-transform active:scale-95" type="button">
                  <span className="material-symbols-outlined text-[19px]">arrow_forward_ios</span>
                </button>
                <button onClick={() => setIsModalOpen(true)} className="ml-2 inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-primary hover:bg-primary-container text-on-primary font-label-md text-[13px] font-semibold shadow-md active:translate-y-0.5 transition-all" type="button">
                  <span className="material-symbols-outlined text-[16px]">draw</span>
                  <span>Add Keepsake</span>
                </button>
              </div>
            </div>

            {/* MAIN SKEUOMORPHIC LEATHER BOOK WRAPPER */}
            <div className="relative w-full rounded-[1.75rem] p-3 sm:p-5 lg:p-7 shadow-[0_25px_60px_-15px_rgba(40,22,10,0.35),0_10px_20px_-8px_rgba(30,15,5,0.22)] bg-gradient-to-br from-[#4e2206] via-[#3a1803] to-[#270e01] transition-all">
              <div className="absolute inset-2 sm:inset-3 rounded-[1.4rem] border-2 border-dashed border-[#8d4f20]/45 pointer-events-none"></div>
              <div className="absolute top-2 left-2 w-8 h-8 rounded-tl-[1.2rem] border-t-4 border-l-4 border-[#c5a059]/80 pointer-events-none shadow-[inset_1px_1px_2px_rgba(255,255,255,0.3)]"></div>
              <div className="absolute top-2 right-2 w-8 h-8 rounded-tr-[1.2rem] border-t-4 border-r-4 border-[#c5a059]/80 pointer-events-none shadow-[inset_-1px_1px_2px_rgba(255,255,255,0.3)]"></div>
              <div className="absolute bottom-2 left-2 w-8 h-8 rounded-bl-[1.2rem] border-b-4 border-l-4 border-[#c5a059]/80 pointer-events-none shadow-[inset_1px_-1px_2px_rgba(255,255,255,0.3)]"></div>
              <div className="absolute bottom-2 right-2 w-8 h-8 rounded-br-[1.2rem] border-b-4 border-r-4 border-[#c5a059]/80 pointer-events-none shadow-[inset_-1px_-1px_2px_rgba(255,255,255,0.3)]"></div>
              
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-7 h-10 bg-gradient-to-b from-tertiary to-tertiary-container rounded-t-sm shadow-md pointer-events-none z-30">
                <div className="w-full h-full flex items-end justify-center pb-1">
                  <div className="w-0 h-0 border-l-[7px] border-l-transparent border-r-[7px] border-r-transparent border-t-[8px] border-t-[#2a0e06]"></div>
                </div>
              </div>

              {/* STACKED PAPERS UNDERLAY EFFECT */}
              <div className="relative w-full rounded-xl bg-[#e3ded5] shadow-[0_3px_1px_rgba(0,0,0,0.15),0_6px_2px_rgba(0,0,0,0.1)] p-0.5 sm:p-1">
                <div className="w-full rounded-lg bg-[#ede8df] shadow-[0_2px_1px_rgba(0,0,0,0.12)] p-0.5">
                  
                  {/* TWO-PAGE OPEN BOOK SPREAD */}
                  <div className={`relative grid grid-cols-1 lg:grid-cols-2 bg-[#FAF6EE] rounded-md shadow-[inset_0_0_40px_rgba(140,110,80,0.12)] overflow-hidden transition-all duration-300 ${isFlipping ? 'opacity-40 scale-[0.99]' : ''}`}>
                    
                    {/* CENTRAL SPINE */}
                    <div className="hidden lg:block absolute inset-y-0 left-1/2 -translate-x-1/2 w-12 pointer-events-none z-20">
                      <div className="w-full h-full bg-gradient-to-r from-black/25 via-black/40 to-black/20 shadow-inner"></div>
                      <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-[2px] bg-[#3a1805]/40"></div>
                      <div className="absolute inset-y-4 left-1/2 -translate-x-1/2 flex flex-col justify-between py-2">
                        {Array.from({length: 7}).map((_, i) => (
                          <span key={i} className="w-3 -ml-[5px] h-[3px] rounded-full bg-[#f8f1e2] shadow-sm"></span>
                        ))}
                      </div>
                    </div>

                    {/* LEFT PAGE */}
                    <div className="relative p-6 sm:p-9 lg:p-11 flex flex-col justify-between min-h-[580px] lg:min-h-[660px] bg-gradient-to-r from-[#FAF6EE] via-[#FDFBF7] to-[#F1ECE1] lg:pr-12">
                      <div className="absolute inset-0 opacity-40 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#937d6e 0.75px, transparent 0.75px)', backgroundSize: '20px 20px' }}></div>
                      
                      <div className="relative flex items-center justify-between z-10">
                        <div className="flex items-center gap-2">
                          <span className="font-label-sm text-[11px] font-semibold uppercase tracking-widest text-outline">Folio Nº {String(currentLeftPage).padStart(3, '0')}</span>
                          <span className="w-1 h-1 rounded-full bg-outline"></span>
                          <span className="font-signature-casual text-[20px] text-on-surface-variant">Sunny Autumn Afternoon</span>
                        </div>
                        <div className="relative rotate-6 inline-flex flex-col items-center justify-center p-2 rounded border border-dashed border-tertiary/60 bg-tertiary-fixed/40 text-tertiary select-none">
                          <div className="flex items-center gap-1 font-label-sm text-[9px] tracking-widest uppercase font-bold">
                            <span className="material-symbols-outlined text-[12px]">local_post_office</span>
                            <span>VERIFIED VISITOR</span>
                          </div>
                          <span className="font-headline-md text-[11px] leading-tight font-bold tracking-tight">OCT 14, 2024</span>
                          <div className="w-full flex items-center justify-center gap-0.5 mt-0.5">
                            <span className="h-[1px] w-3 bg-tertiary/70"></span>
                            <span className="font-label-sm text-[8px] uppercase">PORTUGAL POST</span>
                            <span className="h-[1px] w-3 bg-tertiary/70"></span>
                          </div>
                        </div>
                      </div>

                      <div className="relative my-4 flex-1 flex flex-col justify-center z-10">
                        <div className="relative self-start -rotate-3 w-56 sm:w-64 p-3 pb-4 bg-surface-container-lowest rounded-sm shadow-[1px_4px_12px_rgba(60,35,15,0.18)] transition-transform hover:rotate-0 hover:scale-105 duration-200 cursor-pointer">
                          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-28 h-6 bg-[#eeddb9]/85 backdrop-blur-[1px] rotate-1 shadow-sm border-l border-r border-[#cfbb8c]/50 flex items-center justify-center pointer-events-none">
                            <span className="font-label-sm text-[9px] tracking-wider text-[#795a32]/80 uppercase">• ARCHIVAL TAPE •</span>
                          </div>
                          <div className="relative w-full aspect-[4/3] bg-surface-container overflow-hidden rounded-[2px]">
                            <img className="w-full h-full object-cover filter contrast-[1.05] sepia-[0.18]" alt="Polaroid" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHdM1_YHkTUE1Y_Bix-iTp9KPCdCpCLBjmQWLi0KBDJ8zgz_WDYPQLNBZY_Hv_gDDp8TYE_I0Bs2Hzbf8Wm4bkV8C0DiztQYc0LKlN9FHsu1Gg0ZtSXYKNIxX1Q_5g-b3CFFaVK5Pk2NUT9gGqWG30KR5wgqP-A43QUEEnVnktAcrAOJy6qmjVIk0TNsJ5iHh15GZc6aEDmIuUh-f5zt6yDU4qb0GH6Cpq5oDd8zcc6mMoSu_6vm5d" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none"></div>
                          </div>
                          <p className="font-signature-freehand text-[24px] text-primary text-center mt-2 select-none">Spring Gathering '24 ♥</p>
                        </div>

                        <div className="absolute -top-2 left-60 sm:left-64 rotate-12 p-2 bg-gradient-to-tr from-amber-200 via-pink-200 to-indigo-200 rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.14)] border border-white/60 hover:rotate-45 transition-transform cursor-pointer select-none">
                          <span className="material-symbols-outlined text-[#8a4a15] text-[20px] block" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                        </div>

                        <div className="absolute top-28 right-2 sm:right-6 rotate-[18deg] w-14 h-14 rounded-full bg-gradient-to-br from-[#ffa642] to-[#e65c00] p-1 shadow-[1px_3px_8px_rgba(0,0,0,0.2)] flex items-center justify-center text-white cursor-pointer hover:scale-110 transition-transform select-none">
                          <div className="w-full h-full rounded-full border border-dashed border-white/70 flex flex-col items-center justify-center">
                            <span className="material-symbols-outlined text-[20px]">nutrition</span>
                            <span className="font-label-sm text-[8px] uppercase tracking-tighter font-black">SWEET</span>
                          </div>
                        </div>

                        <div className="absolute bottom-16 right-10 rotate-[-10deg] px-2.5 py-1 rounded-md bg-[#f5e6d3] shadow-[1px_2px_5px_rgba(0,0,0,0.12)] flex items-center gap-1 cursor-pointer select-none hover:-translate-y-1 transition-transform">
                          <span className="material-symbols-outlined text-primary text-[16px]">local_cafe</span>
                          <span className="font-signature-casual text-[14px] text-primary">Refill!</span>
                        </div>

                        <div className="mt-4 pt-3 pl-1">
                          <p className="font-signature-expressive text-[21px] text-on-surface leading-relaxed">
                            “May your memories be warm and your pages full! Every corner here smells of cedar and freshly steeped tea.”
                          </p>
                          <div className="relative inline-block mt-3 group">
                            <button className="flex items-center gap-2 group-hover:opacity-90 focus:outline-none" type="button">
                              <span className="font-title-script text-[26px] font-bold text-primary underline decoration-wavy decoration-surface-tint underline-offset-4 cursor-pointer">
                                — Elena Rostova
                              </span>
                              <span className="text-tertiary text-lg font-signature-casual">♥</span>
                              <span className="material-symbols-outlined text-[16px] text-outline opacity-60 group-hover:opacity-100 transition-opacity">info</span>
                            </button>
                            
                            <div className="absolute bottom-full left-0 mb-3 w-72 p-4 bg-surface-bright/95 backdrop-blur-md rounded-xl shadow-[0_12px_30px_-5px_rgba(40,25,10,0.22)] border border-outline-variant/40 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto focus-within:opacity-100 focus-within:pointer-events-auto transition-all duration-200 z-30">
                              <div className="flex items-center gap-3">
                                <div className="w-11 h-11 rounded-full bg-primary-fixed overflow-hidden flex-shrink-0">
                                  <img className="w-full h-full object-cover" alt="Elena" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCql2zrZrxN_lKeFlOTGQxBxX2_zHsyi05uohpFdRgGCbFt0iOZrM_KySwxWWc6AFu3rKwE8UuLXQlXKfJWzl0C1hItAf68V-hI_2hEBTP2TOZAOENJ65C6Tqkk99aDsBPs7dr17ORzvGk6kh0EDYHQY2VHiNUNeYEVXDxBaFUn_nz3i2bFqTP3Slq3F8PLOzZBmfKaC6rjqjrlw5fFt-4VRp7rHGMhqBIHAc_25PpLX6yqrJdGHG6i"/>
                                </div>
                                <div className="min-w-0">
                                  <h4 className="font-headline-md text-[14px] font-semibold text-on-surface truncate">Elena Rostova</h4>
                                  <p className="font-body-sm text-[13px] text-on-surface-variant">Botanist &amp; Dreamer</p>
                                  <span className="inline-flex items-center gap-1 font-label-sm text-[10px] font-semibold text-secondary">
                                    <span className="material-symbols-outlined text-[12px]">location_on</span>
                                    <span>Lisbon, Portugal</span>
                                  </span>
                                </div>
                              </div>
                              <div className="mt-3 pt-2 border-t border-surface-container-high flex items-center justify-between">
                                <span className="font-label-sm text-[11px] font-semibold text-outline">Shared Keepsake</span>
                                <a className="inline-flex items-center gap-1 font-label-sm text-[11px] font-semibold text-primary hover:text-primary-container transition-colors" href="#sketchbook">
                                  <span>View Sketchbook</span>
                                  <span className="material-symbols-outlined text-[13px]">arrow_outward</span>
                                </a>
                              </div>
                            </div>

                          </div>
                        </div>
                      </div>
                      
                      <div className="relative pt-2 flex items-center justify-between border-t border-outline-variant/20 z-10">
                        <span className="font-label-sm text-[11px] font-semibold text-outline">Ink: Sepia archival • 0.5mm nib</span>
                        <span className="font-signature-casual text-[15px] text-outline">{currentLeftPage}</span>
                      </div>
                    </div>

                    {/* RIGHT PAGE */}
                    <div className="relative p-6 sm:p-9 lg:p-11 flex flex-col justify-between min-h-[580px] lg:min-h-[660px] bg-gradient-to-l from-[#FAF6EE] via-[#FDFBF7] to-[#F1ECE1] lg:pl-12">
                      <div className="absolute inset-0 opacity-40 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#937d6e 0.75px, transparent 0.75px)', backgroundSize: '20px 20px' }}></div>
                      
                      <div className="relative flex items-start justify-between z-10">
                        <div className="relative -mt-3 -rotate-6 group cursor-pointer">
                          <div className="absolute -top-3 left-6 z-20 w-5 h-12 pointer-events-none">
                            <svg className="w-full h-full drop-shadow-sm" fill="none" viewBox="0 0 24 64">
                              <path d="M7 16V46C7 51 11 55 16 55C21 55 25 51 25 46V12C25 6 20 1 14 1C8 1 3 6 3 12V48" stroke="#C5A059" strokeLinecap="round" strokeWidth="2.5"></path>
                              <path d="M7 16V46C7 51 11 55 16 55C21 55 25 51 25 46V12C25 6 20 1 14 1C8 1 3 6 3 12V48" stroke="#F5DF9E" strokeLinecap="round" strokeWidth="0.8"></path>
                            </svg>
                          </div>
                          <div className="relative p-2.5 bg-surface-bright rounded shadow-[1px_3px_8px_rgba(60,35,15,0.15)] flex flex-col items-center border border-outline-variant/30">
                            <div className="w-20 h-28 bg-[#f5efe3] rounded overflow-hidden flex items-center justify-center p-1">
                              <img className="w-full h-full object-contain mix-blend-multiply opacity-90" alt="Herbarium" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGb8S0x0ZzbFTurZOr9u3vldOJdsJCt6T9J2iNPqRDid1-vNE1zIDZChblMkQ_O8_WkEFBqnaxJ6hvU9vv8gsOTQfOku7AyRTTcY_LtlIVCw3BjeRL3WIgX3PIopLEew3P4EFVKUNjrXA8z3iqf2qc49YCymHx8nvK7aTCqDusJ0wHJ54iqU57q2kvtIHVE6zvultz7VkC665rDi4ULzEOPVJonkNE_RpPxgKe3uAJQ-m19qowLJqa"/>
                            </div>
                            <span className="font-signature-casual text-[12px] text-secondary mt-1 tracking-tight">Trifolium repens</span>
                          </div>
                        </div>
                        
                        <div className="flex items-center gap-2">
                          <span className="font-signature-casual text-[20px] text-on-surface-variant">Gathering Reflections</span>
                          <span className="w-1 h-1 rounded-full bg-outline"></span>
                          <span className="font-label-sm text-[11px] font-semibold uppercase tracking-widest text-outline">Folio Nº {String(currentLeftPage + 1).padStart(3, '0')}</span>
                        </div>
                      </div>

                      <div className="relative my-4 flex-1 flex flex-col justify-around z-10">
                        <div className="p-4 sm:p-5 rounded-lg bg-surface-bright/70 shadow-[0_2px_10px_rgba(50,30,10,0.06)] border border-dashed border-[#accfb3]/70 relative">
                          <div className="absolute -top-3.5 -right-2 flex items-center justify-center w-8 h-8 rounded-full bg-secondary-fixed shadow-sm">
                            <span className="text-secondary text-lg select-none">♣</span>
                          </div>
                          <p className="font-signature-brush text-[18px] text-secondary leading-relaxed">
                            “Left a little lucky clover for future wanderers. May your journeys stay curious and your bags light! 🍀 Keepsake perfection.”
                          </p>
                          <div className="mt-3 flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <span className="font-title-script text-[19px] font-bold text-secondary-container bg-secondary px-2.5 py-0.5 rounded shadow-sm">
                                Julian K.
                              </span>
                              <span className="font-label-sm text-[10px] font-semibold text-on-surface-variant uppercase tracking-wider">Hiker &amp; Archivist</span>
                            </div>
                            <span className="font-label-sm text-[11px] font-semibold text-outline">16:42 PM</span>
                          </div>
                        </div>

                        <div className="relative mt-3 p-3.5 rounded-xl bg-gradient-to-r from-surface-container to-surface-container-high shadow-[0_4px_14px_rgba(0,0,0,0.09)] border border-outline-variant/40">
                          <div className="flex items-center gap-3">
                            <button onClick={() => setIsPlaying(!isPlaying)} className={`w-11 h-11 rounded-full flex items-center justify-center shadow-md active:scale-95 transition-all ${isPlaying ? 'bg-secondary' : 'bg-tertiary'} text-white`} type="button">
                              <span className="material-symbols-outlined text-[22px]">{isPlaying ? 'pause' : 'play_arrow'}</span>
                            </button>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between mb-1">
                                <div className="flex items-center gap-1.5">
                                  <span className="material-symbols-outlined text-tertiary text-[15px]">graphic_eq</span>
                                  <span className="font-label-md text-[13px] font-semibold text-on-surface truncate">Campfire Laughter &amp; Acoustic Jam</span>
                                </div>
                                <span className="font-label-sm text-[11px] font-semibold text-on-surface-variant">{formatTime(seconds)} / 1:18</span>
                              </div>
                              <div className="flex items-center gap-0.5 h-6 w-full py-1">
                                <div className="w-1 h-3 rounded-full bg-tertiary"></div>
                                <div className="w-1 h-5 rounded-full bg-tertiary"></div>
                                <div className="w-1 h-4 rounded-full bg-tertiary"></div>
                                <div className={`w-1 h-6 rounded-full bg-tertiary-container ${isPlaying ? 'animate-pulse' : ''}`}></div>
                                <div className="w-1 h-3 rounded-full bg-tertiary"></div>
                                <div className="w-1 h-5 rounded-full bg-outline-variant"></div>
                                <div className="w-1 h-4 rounded-full bg-outline-variant"></div>
                                <div className="w-1 h-2 rounded-full bg-outline-variant"></div>
                                <div className="w-1 h-5 rounded-full bg-outline-variant"></div>
                                <div className="w-1 h-6 rounded-full bg-outline-variant"></div>
                                <div className="w-1 h-3 rounded-full bg-outline-variant"></div>
                                <div className="w-1 h-4 rounded-full bg-outline-variant"></div>
                                <div className="w-1 h-5 rounded-full bg-outline-variant"></div>
                                <div className="w-1 h-2 rounded-full bg-outline-variant"></div>
                                <div className="w-1 h-3 rounded-full bg-outline-variant"></div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <button onClick={() => flipPage(true)} className="self-end inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary-fixed hover:bg-primary-fixed-dim text-on-primary-fixed font-signature-casual text-[15px] shadow-sm transition-all hover:translate-x-1" type="button">
                          <span>Tap to flip to next spread</span>
                          <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                        </button>
                      </div>

                      <div className="relative pt-2 flex items-center justify-between border-t border-outline-variant/20 z-10">
                        <span className="font-signature-casual text-[15px] text-outline">{currentLeftPage + 1}</span>
                        <span className="font-label-sm text-[11px] font-semibold text-outline">Preserved in Archive Collection A-24</span>
                      </div>

                      <div onClick={() => flipPage(true)} className="absolute bottom-0 right-0 w-16 h-16 cursor-pointer group" title="Click to flip to next spread">
                        <div className="absolute inset-0 bg-gradient-to-tl from-black/25 via-black/5 to-transparent rounded-tl-xl pointer-events-none"></div>
                        <div className="absolute bottom-0 right-0 w-0 h-0 border-solid border-t-[34px] border-r-[34px] border-t-[#dfd8cc] border-r-[#c0b7a8] drop-shadow-[-3px_3px_5px_rgba(0,0,0,0.22)] group-hover:border-t-[44px] group-hover:border-r-[44px] transition-all duration-200"></div>
                        <div className="absolute bottom-2 right-2 text-primary/60 group-hover:text-primary transition-colors">
                          <span className="material-symbols-outlined text-[14px]">auto_stories</span>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>

            {/* QUICK SIGNATURE MODAL DRAWER */}
            {isModalOpen && (
              <div className="fixed inset-0 bg-inverse-surface/40 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                <div className="w-full max-w-lg bg-[#FAF6EE] rounded-2xl shadow-[0_20px_50px_rgba(30,15,5,0.3)] border-4 border-[#e3ded5] p-6 relative animate-in fade-in zoom-in duration-200">
                  <button onClick={() => setIsModalOpen(false)} className="absolute top-4 right-4 w-8 h-8 rounded-full bg-surface-container hover:bg-surface-container-high text-on-surface flex items-center justify-center">
                    <span className="material-symbols-outlined text-[18px]">close</span>
                  </button>
                  <div className="flex items-center gap-2 mb-4">
                    <span className="material-symbols-outlined text-primary text-[24px]">ink_pen</span>
                    <h3 className="font-headline-md text-[20px] font-semibold text-on-surface">Leave Your Memento</h3>
                  </div>
                  <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                    <div>
                      <label className="block font-label-sm text-[11px] font-semibold text-on-surface-variant uppercase mb-1">Your Name or Pen Name</label>
                      <input className="w-full bg-transparent border-b-2 border-outline-variant/60 focus:border-secondary pb-1.5 font-signature-casual text-[20px] text-on-surface focus:outline-none transition-colors" placeholder="e.g. Clara &amp; Thomas" type="text" />
                    </div>
                    <div>
                      <label className="block font-label-sm text-[11px] font-semibold text-on-surface-variant uppercase mb-1">Select Ink Well</label>
                      <div className="flex items-center gap-3 py-1">
                        <button className="w-6 h-6 rounded-full bg-primary ring-2 ring-offset-2 ring-primary" title="Sepia Russet" type="button"></button>
                        <button className="w-6 h-6 rounded-full bg-secondary hover:ring-2 hover:ring-secondary" title="Moss Green" type="button"></button>
                        <button className="w-6 h-6 rounded-full bg-tertiary hover:ring-2 hover:ring-tertiary" title="Terracotta" type="button"></button>
                        <button className="w-6 h-6 rounded-full bg-[#1e2a38] hover:ring-2 hover:ring-[#1e2a38]" title="Vintage Ink" type="button"></button>
                      </div>
                    </div>
                    <div>
                      <label className="block font-label-sm text-[11px] font-semibold text-on-surface-variant uppercase mb-1">Message or Blessing</label>
                      <textarea className="w-full bg-surface-container-low/50 rounded-lg p-3 font-signature-freehand text-[24px] text-on-surface border-none focus:ring-1 focus:ring-secondary focus:outline-none resize-none" placeholder="Write your heartfelt note..." rows={3}></textarea>
                    </div>
                    <div className="pt-2 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-label-sm text-[11px] font-semibold text-on-surface-variant">Attach Sticker:</span>
                        <button className="w-7 h-7 rounded-full bg-surface-container flex items-center justify-center text-sm shadow-xs hover:scale-110" type="button">🌸</button>
                        <button className="w-7 h-7 rounded-full bg-surface-container flex items-center justify-center text-sm shadow-xs hover:scale-110" type="button">🍀</button>
                        <button className="w-7 h-7 rounded-full bg-surface-container flex items-center justify-center text-sm shadow-xs hover:scale-110" type="button">☕</button>
                      </div>
                      <button onClick={handleWaxSeal} className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-tertiary hover:bg-tertiary-container text-on-tertiary font-label-md text-[13px] font-semibold shadow-md active:scale-95 transition-all" type="button">
                        {isWaxSealed ? (
                          <><span className="material-symbols-outlined text-[18px]">done</span><span>Sealed &amp; Pinned!</span></>
                        ) : (
                          <><span className="material-symbols-outlined text-[18px]">verified</span><span>Press Wax Seal</span></>
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            )}

          </section>
        </div>
      </main>

      <footer className="w-full bg-surface-container-low py-space-xl">
        <div className="max-w-7xl mx-auto px-space-md lg:px-space-xl flex flex-col sm:flex-row items-center justify-between gap-space-md text-on-surface-variant font-body-sm text-[13px]">
          <div className="flex items-center gap-space-sm">
            <span className="material-symbols-outlined text-primary text-[18px]">history_edu</span>
            <span>Folio Heirloom Journal Edition • Bound with Linen &amp; Archival Parchment</span>
          </div>
          <div className="flex items-center gap-space-lg font-label-sm text-[11px] font-semibold">
            <a className="text-on-surface-variant hover:text-on-surface transition-colors" href="#">Colophon</a>
            <a className="text-on-surface-variant hover:text-on-surface transition-colors" href="#">Archival Guidelines</a>
            <a className="text-on-surface-variant hover:text-on-surface transition-colors" href="#">Export Keepsake</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
