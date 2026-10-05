'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Feather, SlidersHorizontal, Bookmark, Sunrise, BookOpen, Timer, CaseSensitive, Paintbrush, 
  Edit3, Activity, MoreVertical, Sparkles, Minimize2, Maximize2, Gauge, Palette, PencilRuler, 
  Plus, Sun, History, Share, ArrowRight, Library, Pin, ArrowUpToLine, ArrowDownToLine, X, Search
} from 'lucide-react';

export default function Page() {
  const [isSynthesisExpanded, setIsSynthesisExpanded] = useState(true);
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const [selectedText, setSelectedText] = useState(false);

  // Toggle selection state for demonstration
  const handleTextClick = () => {
    setSelectedText(prev => !prev);
  };

  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(40,30,20,0.04)]">
        <div className="h-16 w-full px-4 md:px-10 flex items-center justify-between gap-8">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                <span className="text-surface font-serif font-bold text-xl leading-none">D</span>
              </div>
              <span className="font-headline-sm text-headline-sm text-primary tracking-tight select-none">Daybreak</span>
            </div>
            <div className="hidden md:flex items-center gap-2 text-on-surface-variant font-ui-label-sm text-ui-label-sm tracking-wider uppercase pl-4 bg-surface-container-low/60 py-1.5 px-3 rounded-full">
              <span className="opacity-60">Folio 04</span>
              <span className="opacity-40">/</span>
              <span className="text-on-surface font-medium lowercase italic font-body-md text-body-md tracking-normal">The Architecture of Silence</span>
            </div>
          </div>

          <nav className="hidden lg:flex items-center gap-2 p-1 bg-surface-container-low/70 rounded-full shadow-[0_2px_6px_-1px_rgba(40,30,20,0.02)]">
            <a aria-current="page" className="px-4 py-1.5 transition-all bg-primary-container text-on-primary-container font-semibold rounded-full text-sm" href="#">Manuscript</a>
            <a className="px-4 py-1.5 rounded-full font-ui-label-md text-sm text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-all" href="#">Archive</a>
            <a className="px-4 py-1.5 rounded-full font-ui-label-md text-sm text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-all" href="#">Marginalia</a>
            <a className="px-4 py-1.5 rounded-full font-ui-label-md text-sm text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-all" href="#">Chronicle</a>
          </nav>

          <div className="flex items-center gap-6">
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container-low font-ui-label-sm text-sm text-on-surface-variant">
              <Feather className="w-4 h-4 text-on-surface-variant" />
              <span>2,840 words</span>
              <span className="w-1 h-1 rounded-full bg-outline-variant"></span>
              <span>11 min read</span>
            </div>
            <button className="p-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high rounded-full transition-colors active:scale-95" type="button">
              <SlidersHorizontal className="w-5 h-5" />
            </button>
            <button 
              onClick={() => setIsSidebarVisible(!isSidebarVisible)}
              className={`p-2 rounded-full transition-colors active:scale-95 ${isSidebarVisible ? 'bg-primary/10 text-primary' : 'text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high'}`} 
              type="button"
            >
              <Library className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      <main className="w-full pt-16 bg-surface min-h-screen">
        <div className="flex flex-col w-full relative">
          
          <div className="w-full relative px-6 md:px-16 lg:px-32 pb-48 pt-12 select-text">
            
            <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto mb-16 relative">
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-3 mb-4">
                <span className="w-12 h-px bg-outline-variant"></span>
                <span className="font-ui-label-sm text-xs uppercase tracking-[0.2em] text-on-surface-variant font-medium">Folio IV • First Morning Draft</span>
                <span className="w-12 h-px bg-outline-variant"></span>
              </motion.div>
              <motion.h1 initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="font-display-lg text-5xl md:text-6xl text-primary tracking-tight lowercase italic mb-4">
                <span className="font-normal font-sans not-italic uppercase tracking-wider text-xl md:text-2xl block text-secondary mb-3">Canto Primus</span>
                The Anatomy of Dawn
              </motion.h1>
              <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }} className="font-ui-label-md text-sm md:text-base tracking-[0.2em] uppercase text-on-surface-variant max-w-2xl font-medium">
                On Temporality, Marble, and the Architecture of the Written Word
              </motion.p>
              
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="flex items-center justify-center gap-6 mt-8 text-on-surface-variant font-ui-code text-xs md:text-sm">
                <span className="flex items-center gap-1.5"><Sunrise className="w-4 h-4 text-secondary" /> Solar Arc: 06:14 AM</span>
                <span className="opacity-30">•</span>
                <span className="flex items-center gap-1.5"><BookOpen className="w-4 h-4" /> Libri III, Sec. 12</span>
                <span className="opacity-30">•</span>
                <span className="flex items-center gap-1.5"><Timer className="w-4 h-4" /> Cadence Index: 94.2</span>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-7xl mx-auto relative">
              
              <div className="lg:col-span-4 relative group">
                <div className="hidden lg:block absolute -left-12 top-1 font-ui-code text-xs text-outline select-none opacity-40">001</div>
                <p className="font-body-md text-lg text-on-surface text-justify leading-[1.8]">
                  <span className="float-left font-editorial-dropcap text-6xl leading-none pr-4 pt-2 text-primary select-none">A</span>
                  ll light in the northern portico arrives not as illumination, but as an excavation of mass. Before the sun clears the damp red roofs of the fondaco, the travertine columns are merely dormant solids, indistinguishable from the grey limestone quarries of Istria from which they were hewn four centuries prior. In this pale interstice between night and daylight, the writer inherits an ancient silence—a parchment cleared of yesterday’s trivial notations, waiting for the first deliberate strike of the pen.
                </p>
                <p className="font-body-md text-lg text-on-surface text-justify leading-[1.8] mt-6">
                  To articulate space within a sentence is to construct a colonnade. Every clause demands an architrave; every cadence requires an abyss beneath its footings. If a paragraph is sustained too breathlessly without caesura, the marble buckles under the sheer unmitigated weight of thought.
                </p>

                <motion.div whileHover={{ scale: 1.02 }} className="my-10 py-6 px-8 bg-surface-container-low/70 rounded-2xl relative overflow-hidden group cursor-pointer transition-colors hover:bg-surface-container-low">
                  <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-secondary group-hover:bg-primary transition-colors"></div>
                  <blockquote className="font-pull-quote text-2xl italic text-primary leading-snug">
                    “Silence is never the absence of resonance, but the exact stone foundation upon which the syllable rests.”
                  </blockquote>
                  <cite className="block font-ui-label-sm text-xs text-secondary uppercase tracking-widest mt-4 not-italic">
                    — Marginalia, Venice Note-Folio 1884
                  </cite>
                </motion.div>

                <p className="font-body-md text-lg text-on-surface text-justify leading-[1.8]">
                  One discovers that the syntax of Petrarca was not forged in study alone, but modulated against the rhythmic slap of canal waters upon mossed watergates. Words bear salinity. They rust or they endure according to their internal proportion.
                </p>
              </div>

              <div className="lg:col-span-4 relative">
                <div className="hidden lg:block absolute -left-12 top-1 font-ui-code text-xs text-outline select-none opacity-40">048</div>
                <p className="font-body-md text-lg text-on-surface text-justify leading-[1.8]">
                  The hand pauses. What is recorded in the margins often surpasses the central thesis. In the transcript of 1521 preserved in Padua, the scribe has scribbled an inventory of morning birds alongside a theological dispute on grace. It is there that literature breathes through the cracks of doctrine.
                </p>

                {/* Interactive Selectable Block */}
                <motion.div 
                  onClick={handleTextClick}
                  animate={selectedText ? { backgroundColor: 'rgba(255,215,203, 0.4)', scale: 1.02 } : { backgroundColor: 'transparent', scale: 1 }}
                  className={`my-8 p-6 rounded-xl relative transition-all duration-300 cursor-pointer border ${selectedText ? 'border-secondary/30 shadow-lg' : 'border-transparent hover:bg-surface-container-low/50'}`}
                >
                  <AnimatePresence>
                    {selectedText && (
                      <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="flex items-center justify-between pb-3 mb-3 border-b border-secondary/20">
                        <span className="font-ui-label-sm text-xs text-secondary uppercase tracking-widest font-semibold flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span> Selected for Synthesis
                        </span>
                        <span className="font-ui-code text-xs text-on-surface-variant">Lines 62–78</span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  <p className="font-body-lg text-xl text-primary italic leading-relaxed">
                    “We do not invent the morning; we merely record the precise moment its slow grey tides inundate the library floor. The syntax must mirror the slow thaw of shadows across the cedar desk.”
                  </p>
                </motion.div>

                <p className="font-body-md text-lg text-on-surface text-justify leading-[1.8]">
                  Consider the structural mechanics of the caesura. When we introduce an em-dash, we construct a balcony over the courtyard. The reader steps out, observes the courtyard fountain suspended mid-drop, draws a singular breath of chill air, and is ushered back into the chambers of the predicated verb.
                </p>

                <div className="my-8 rounded-2xl overflow-hidden bg-surface-container shadow-sm group">
                  <div className="overflow-hidden">
                    <img className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-700" alt="Classical architectural copperplate etching" src="https://lh3.googleusercontent.com/aida-public/AB6AXuALo9lA1fhbn6A_e-BnTGigWkJQyISZf4eMY5HPeMTNLBnNYaZ59APCSlCPKQZimEOJ61hsdc0eH2XAKGkOe4KFqrXNfVkcDYPvRsoalkUDhKWjnm97-P_8_1MCeJOH03ezFus9UJ6Hh5OA1Wr8eYdILhrqaqOlD95T4hCVkpuLYtR-lu8BqZ2snL-TWkuNAPsyitNrFRljFADZIPzcYB0f6JBz0SqHDZtLUg8ENdiOIyf4wvz04Bk" />
                  </div>
                  <div className="p-4 bg-surface-container-high/90 flex items-center justify-between backdrop-blur-md">
                    <span className="font-ui-label-sm text-xs text-on-surface-variant uppercase tracking-widest">Fig. 4 • Architectural Cloister</span>
                    <span className="font-ui-code text-xs text-secondary">Ink on Rag, 1742</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 relative">
                <div className="hidden lg:block absolute -left-12 top-1 font-ui-code text-xs text-outline select-none opacity-40">096</div>
                <p className="font-body-md text-lg text-on-surface text-justify leading-[1.8]">
                  Rhythm is an equation of vowels and consonantal friction. The Italianate hendecasyllable owes its grace to the gentle tumble of unaccented terminations, whereas English blank verse marches like a Roman legion in boots of heavy oak. To harmonize these traditions is the true ambition of modern editorial poetics.
                </p>

                <motion.div whileHover={{ scale: 1.02 }} className="my-8 p-6 bg-surface-container rounded-2xl shadow-sm border border-surface-variant/50">
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-ui-label-md text-sm font-semibold text-primary">Harmonic Metric Dispersion</span>
                    <span className="font-ui-code text-xs text-on-surface-variant font-medium bg-surface-variant px-2 py-1 rounded-md">Folio Measure</span>
                  </div>
                  <svg className="w-full h-16 text-secondary overflow-visible" fill="none" viewBox="0 0 320 48" xmlns="http://www.w3.org/2000/svg">
                    <motion.path 
                      initial={{ pathLength: 0 }} 
                      animate={{ pathLength: 1 }} 
                      transition={{ duration: 2, ease: "easeInOut" }}
                      d="M0 24C20 24 35 8 55 8C75 8 90 38 110 38C130 38 145 16 165 16C185 16 200 32 220 32C240 32 255 12 275 12C295 12 305 24 320 24" 
                      stroke="currentColor" strokeLinecap="round" strokeWidth="2"
                    />
                    <circle className="animate-ping origin-center" cx="165" cy="16" fill="currentColor" opacity="0.4" r="4"></circle>
                    <circle cx="165" cy="16" fill="currentColor" r="3"></circle>
                    <line stroke="currentColor" strokeDasharray="4 4" strokeOpacity="0.15" x1="0" x2="320" y1="44" y2="44"></line>
                  </svg>
                  <div className="flex items-center justify-between text-on-surface-variant font-ui-label-sm text-xs mt-3">
                    <span>Dactylic (42%)</span>
                    <span className="text-primary font-semibold">Balanced</span>
                    <span>Iambic (58%)</span>
                  </div>
                </motion.div>

                <p className="font-body-md text-lg text-on-surface text-justify leading-[1.8]">
                  Let the ink settle. To read attentively is to listen to the room in which the page was inscribed. If one listens carefully enough across the centuries, past the dry scratch of steel nib upon linen fiber, one hears the bell tower striking six in a city that no longer exists.
                </p>

                <div className="mt-12 pt-6 border-t border-surface-variant/60 text-on-surface-variant font-ui-label-sm text-sm space-y-3">
                  <p><sup className="text-secondary font-semibold mr-1">1</sup> Compare with John Ruskin, <em>The Stones of Venice</em>, Vol. II, § 42: "The temper of the builder is manifested not in ornament, but in restraint."</p>
                  <p><sup className="text-secondary font-semibold mr-1">2</sup> Manuscript copy verified against Cod. Marc. Lat. VI, 114.</p>
                </div>
              </div>
            </div>
          </div>

          {/* FLOATING UI OVERLAYS */}
          <div className="pointer-events-none fixed bottom-8 w-full z-40 px-6 flex flex-col items-center gap-6">
            
            {/* Minimal Toolbar */}
            <motion.div 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="pointer-events-auto flex items-center gap-1 p-2 rounded-full bg-surface-container-lowest/90 backdrop-blur-xl shadow-[0_12px_32px_-6px_rgba(36,28,21,0.1),0_2px_8px_-1px_rgba(36,28,21,0.06)] border border-surface-variant/80"
            >
              <button className="group flex items-center gap-2 px-4 py-2 rounded-full text-on-surface hover:bg-surface-container-high transition-colors active:scale-95">
                <CaseSensitive className="w-4 h-4 text-secondary" />
                <span className="font-ui-label-sm text-sm font-semibold">Aa Style</span>
              </button>
              <span className="h-5 w-px bg-outline-variant/60 mx-1"></span>
              <button className="group flex items-center gap-2 px-4 py-2 rounded-full text-on-surface hover:bg-surface-container-high transition-colors active:scale-95">
                <Paintbrush className="w-4 h-4 text-on-surface-variant group-hover:text-primary" />
                <span className="font-ui-label-sm text-sm hidden sm:inline">Image Study</span>
              </button>
              <button className="group flex items-center gap-2 px-4 py-2 rounded-full text-on-surface hover:bg-surface-container-high transition-colors active:scale-95">
                <Edit3 className="w-4 h-4 text-on-surface-variant group-hover:text-primary" />
                <span className="font-ui-label-sm text-sm hidden sm:inline">Marginalia</span>
              </button>
              <span className="h-5 w-px bg-outline-variant/60 mx-1"></span>
              <button className="p-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high rounded-full transition-colors active:scale-95">
                <MoreVertical className="w-5 h-5" />
              </button>
            </motion.div>

            {/* Expanding Synthesis Modal */}
            <motion.div 
              layout
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1, width: isSynthesisExpanded ? '100%' : 'auto' }}
              className="pointer-events-auto max-w-3xl overflow-hidden rounded-4xl bg-surface-container-lowest/95 backdrop-blur-2xl shadow-[0_24px_64px_-12px_rgba(36,28,21,0.15),0_4px_16px_-2px_rgba(36,28,21,0.05)] border border-surface-variant/90"
            >
              {isSynthesisExpanded ? (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="p-6 md:p-8">
                  <div className="flex items-start justify-between gap-4 mb-6">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container shadow-inner">
                        <Sparkles className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-ui-label-sm text-xs uppercase tracking-widest font-semibold text-secondary">Narrative Synthesis</span>
                          <span className="w-1 h-1 rounded-full bg-outline-variant"></span>
                          <span className="font-ui-code text-xs text-on-surface-variant">Archival Core v2.4</span>
                        </div>
                        <span className="font-ui-label-sm text-sm text-on-surface-variant">Synchronized with Folio 04</span>
                      </div>
                    </div>
                    <button 
                      onClick={() => setIsSynthesisExpanded(false)}
                      className="p-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-container rounded-full transition-colors active:scale-90 bg-surface-variant/30"
                    >
                      <Minimize2 className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="mb-8">
                    <h2 className="font-headline-lg text-3xl text-primary tracking-tight leading-snug">
                      Let Daybreak sculpt your chapter’s cadence.
                    </h2>
                    <p className="font-body-md text-base text-on-surface-variant mt-3 leading-relaxed">
                      Analyze syntactic rhythm across consecutive paragraphs, interweave Venetian architectural metaphors into passage transitions, and elevate the rhetorical pace toward dawn.
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 mb-8">
                    <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-surface-container hover:bg-surface-container-high transition-colors border border-surface-variant/50 active:scale-95">
                      <Gauge className="w-4 h-4 text-secondary" />
                      <span className="font-ui-label-sm text-sm font-medium">Cadence: <span className="text-primary font-semibold">Andante</span></span>
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-surface-container hover:bg-surface-container-high transition-colors border border-surface-variant/50 active:scale-95">
                      <Palette className="w-4 h-4 text-secondary" />
                      <span className="font-ui-label-sm text-sm font-medium">Tone: <span className="text-primary font-semibold">Elegiac</span></span>
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary-container/50 text-on-secondary-container hover:bg-secondary-container transition-colors font-ui-label-sm text-sm font-semibold active:scale-95">
                      <Plus className="w-4 h-4" />
                      Add Constraint
                    </button>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-surface-variant/80">
                    <div className="flex items-center gap-2 text-on-surface-variant font-ui-label-sm text-sm">
                      <Sun className="w-4 h-4 text-amber-500" />
                      <span>Light tuning: <strong>Morning Light</strong></span>
                    </div>
                    <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                      <button className="px-5 py-2.5 rounded-full font-ui-label-md text-sm text-on-surface hover:bg-surface-container transition-colors flex items-center gap-2 active:scale-95">
                        <History className="w-4 h-4" />
                        Compare
                      </button>
                      <button className="px-6 py-2.5 rounded-full font-ui-label-md text-sm bg-primary text-surface hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 flex items-center gap-2 group active:scale-95">
                        Synthesize
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div 
                  initial={{ opacity: 0 }} 
                  animate={{ opacity: 1 }} 
                  className="flex items-center gap-4 px-6 py-4 cursor-pointer hover:bg-surface-container-lowest/80 transition-colors"
                  onClick={() => setIsSynthesisExpanded(true)}
                >
                  <div className="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <span className="font-ui-label-sm text-sm font-semibold text-primary">Daybreak Synthesis Ready</span>
                  <div className="ml-auto flex items-center gap-2 pl-4 border-l border-surface-variant">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span className="font-ui-code text-xs text-on-surface-variant hidden sm:block">14,280 Words Indexed</span>
                    <Maximize2 className="w-4 h-4 ml-2 text-on-surface-variant" />
                  </div>
                </motion.div>
              )}
            </motion.div>
          </div>

          {/* Right Sidebar Companion Overlay */}
          <AnimatePresence>
            {isSidebarVisible && (
              <motion.aside 
                initial={{ x: 400, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 400, opacity: 0 }}
                transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                className="hidden xl:block fixed right-8 top-28 w-80 z-30 pointer-events-auto"
              >
                <div className="rounded-3xl bg-surface-container-lowest/90 backdrop-blur-2xl shadow-[0_16px_40px_-8px_rgba(36,28,21,0.1)] border border-surface-variant/80 p-6 space-y-6">
                  
                  <div className="flex items-center justify-between pb-4 border-b border-surface-variant">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center">
                        <Library className="w-4 h-4 text-secondary" />
                      </div>
                      <span className="font-ui-label-md text-base font-bold text-primary">Lexicon</span>
                    </div>
                    <button onClick={() => setIsSidebarVisible(false)} className="p-1.5 rounded-full hover:bg-surface-container transition-colors text-on-surface-variant">
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="p-4 rounded-2xl bg-surface-container-low">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-headline-sm text-xl italic text-primary">caesura</span>
                      <span className="font-ui-code text-xs text-secondary font-medium px-2 py-1 bg-secondary/10 rounded-md">lat. caedere</span>
                    </div>
                    <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
                      “To cut or cleave.” A metrical break where one phrase terminates and another opens, allowing resonance to pool in the reader's breath.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <span className="font-ui-label-sm text-xs uppercase tracking-widest font-bold text-on-surface-variant">Archival Reference</span>
                    <div className="flex items-start gap-4 p-4 rounded-2xl bg-surface-container border border-surface-variant/50 hover:bg-surface-container-high transition-colors cursor-pointer group">
                      <div className="w-12 h-12 rounded-xl overflow-hidden shrink-0 bg-surface-variant">
                        <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt="Sepia macro photograph" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLtlhP1xhmNeYOCd13HiXzt61FcDxl9afWRAelYLo1tXvB545q1P3MBX4CnvKoUAXjujZtyPEc8jfqz5YndV4C7T_-W5H5GhDXZgVUCzAluhmjdSOQ4YDwtBu9Y0iKNC0lIWLWGiSR3b96XUWyX3j-rann4tRlPrp3Tplh7e6bDLgqliYZOnFhHYzQpn88fJ59TA2CE01Pz5gdg0R-XkBjUFaPjwxjvya-3ifyqz8YDX-QPvMf7J4" />
                      </div>
                      <div className="min-w-0">
                        <h3 className="font-ui-label-sm text-sm font-bold text-primary truncate">Venetian Quaderni 1502</h3>
                        <p className="font-ui-code text-xs text-on-surface-variant mt-1">Bibl. Marciana • Col. 84</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-2xl bg-secondary-container/40 border border-secondary/10">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-ui-label-sm text-xs uppercase tracking-widest font-bold text-secondary flex items-center gap-1.5">
                        <Pin className="w-3 h-3" /> Studio Note
                      </span>
                      <span className="font-ui-code text-xs text-on-surface-variant">06:22 AM</span>
                    </div>
                    <p className="font-body-md text-sm italic text-on-surface-variant/90 leading-relaxed">
                      “Revise stanza three before dawn printing. Ensure the transition between the Istrian stone and the canal current sounds completely inevitable.”
                    </p>
                  </div>
                </div>
              </motion.aside>
            )}
          </AnimatePresence>

          {/* Left Floated Vertical Folio Progress Bar */}
          <aside className="hidden xl:flex fixed left-8 top-32 flex-col items-center gap-4 z-30 pointer-events-auto">
            <div className="p-3 rounded-4xl bg-surface-container-lowest/80 backdrop-blur-xl shadow-lg border border-surface-variant/80 flex flex-col items-center gap-4">
              <button className="w-8 h-8 rounded-full flex items-center justify-center text-on-surface-variant hover:text-primary hover:bg-surface-container transition-all active:scale-90" title="Beginning of Folio">
                <ArrowUpToLine className="w-4 h-4" />
              </button>
              <div className="w-1 h-32 bg-surface-container-high rounded-full relative overflow-hidden">
                <motion.div 
                  initial={{ height: 0 }}
                  animate={{ height: '33%' }}
                  transition={{ duration: 1, ease: 'easeOut' }}
                  className="absolute top-0 left-0 w-full bg-secondary rounded-full"
                ></motion.div>
              </div>
              <span className="font-ui-code text-xs text-on-surface-variant -rotate-90 select-none py-4 whitespace-nowrap font-medium">Pg. 48 of 120</span>
              <button className="w-8 h-8 rounded-full flex items-center justify-center text-on-surface-variant hover:text-primary hover:bg-surface-container transition-all active:scale-90" title="End of Folio">
                <ArrowDownToLine className="w-4 h-4" />
              </button>
            </div>
          </aside>
          
        </div>
      </main>

      <footer className="w-full bg-surface-container-low/80 py-12 shadow-inner border-t border-surface-variant/30">
        <div className="w-full px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6 font-ui-label-sm text-sm text-on-surface-variant">
          <div className="flex items-center gap-4">
            <span className="font-headline-sm text-lg text-on-surface select-none font-bold">Daybreak</span>
            <span className="opacity-40">•</span>
            <span>Sanctuary for Classical Narrative &amp; Prose</span>
          </div>
          <div className="flex items-center gap-6">
            <span className="italic font-body-md text-sm text-on-surface-variant/80">"Silence is the canvas of the sentence."</span>
            <span className="opacity-40">© 2026 Studio Daybreak</span>
          </div>
        </div>
      </footer>
    </>
  );
}
