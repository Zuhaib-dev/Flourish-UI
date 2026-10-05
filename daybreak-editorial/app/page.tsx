"use client";

import React, { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    // Micro-interaction for playful hover tactile responsiveness
    const actionButtons = document.querySelectorAll("button");
    actionButtons.forEach(btn => {
      btn.addEventListener("mousedown", () => {
        btn.style.transform = "scale(0.98)";
      });
      btn.addEventListener("mouseup", () => {
        btn.style.transform = "";
      });
      btn.addEventListener("mouseleave", () => {
        btn.style.transform = "";
      });
    });
  }, []);

  return (
    <>
      <header className="fixed top-0 w-full z-50 bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(40,30,20,0.04)]"><div className="h-16 w-full px-gutter-lg flex items-center justify-between gap-space-lg"><div className="flex items-center gap-space-lg"><div className="flex items-center gap-space-sm"><img alt="Daybreak Literary Studio Logo" className="h-8 w-auto object-contain" src="https://lh3.googleusercontent.com/aida/AEtjO1W-_hYhJKmSYFH6Tc1j6wAPHuvKTkPwsB93qLlna8PBT0yrwNfxG27gb_ycO6Y0wA5RijRphIHP5ZhiYJgSvUIjIdZgpqFosesBNZBtc6neAOcLWOizT0QHF6HX6tHKzfm0nUm-NpoBGY__h4ZhUcpKpTMeaQUmazK7Wl9e3aHlsyhuge1FqdWW21IR8bp1Bbu7Sppn2q-_S9KTMq_6abAi-iOUBFzR4kEw_b3oiQMxb4fzYBrgWuiVxw" /><span className="font-headline-sm text-headline-sm text-primary tracking-tight font-serif select-none">Daybreak</span></div><div className="hidden md:flex items-center gap-space-xs text-on-surface-variant font-ui-label-sm text-ui-label-sm tracking-wider uppercase pl-space-md bg-surface-container-low/60 py-1.5 px-3 rounded-full"><span className="opacity-60">Folio 04</span><span className="opacity-40">/</span><span className="text-on-surface font-medium lowercase italic font-body-md text-body-md tracking-normal">The Architecture of Silence</span></div></div><nav className="hidden lg:flex items-center gap-space-xs p-1 bg-surface-container-low/70 rounded-full shadow-[0_2px_6px_-1px_rgba(40,30,20,0.02)]" data-active-classes="bg-primary-container text-on-primary-container font-semibold rounded-full"><a aria-current="page" className="px-space-md py-1.5 transition-all bg-primary-container text-on-primary-container font-semibold rounded-full" data-path="manuscript-studio" href="#">Manuscript</a><a className="px-space-md py-1.5 rounded-full font-ui-label-md text-ui-label-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-all" data-path="folio-archive" href="#">Archive</a><a className="px-space-md py-1.5 rounded-full font-ui-label-md text-ui-label-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-all" data-path="marginalia-notes" href="#">Marginalia</a><a className="px-space-md py-1.5 rounded-full font-ui-label-md text-ui-label-md text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-all" data-path="chronicle-timeline" href="#">Chronicle</a></nav><div className="flex items-center gap-space-md"><div className="hidden sm:flex items-center gap-space-sm px-3 py-1.5 rounded-full bg-surface-container-low font-ui-label-sm text-ui-label-sm text-on-surface-variant"><span className="material-symbols-outlined text-[16px] text-on-surface-variant">history_edu</span><span>2,840 words</span><span className="w-1 h-1 rounded-full bg-outline-variant"></span><span>11 min read</span></div><button className="p-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high rounded-full transition-colors" type="button"><span className="material-symbols-outlined text-[20px]">tune</span></button><button className="p-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high rounded-full transition-colors" type="button"><span className="material-symbols-outlined text-[20px]">bookmark</span></button><div className="pl-space-xs"><img alt="Profile" className="w-8 h-8 rounded-full object-cover shadow-[0_2px_6px_rgba(40,30,20,0.08)]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwKAkj0S3RmtgTqXTJ4yyj7W5t-2eMsU5XuExTnygKRFHgW9kRaZSxwE61vPhETzkujuv0yrRJuDS3ldx6SQDhWdYQmdnANj1kqTGhxRR43UqIFr5AHvJtRC-XizAtguytQMqNLlbjkorU6WGz949VXMGok5fZHNYhBBF0z-cHAEsd956qWAiTQz4bfFezbSNU_vIlYm0SnQ0Mj1WzBdN2CMam8MZHJw8CbwZnhUsjQRIZHFDe554" /></div></div></div></header><main className="w-full pt-16 bg-surface min-h-screen"><div className="flex flex-col w-full relative">

<div className="w-full relative px-margin md:px-margin-md lg:px-margin-lg pb-32 pt-8 select-text">

<div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto mb-16 relative">
<div className="flex items-center gap-space-sm mb-4">
<span className="w-8 h-[1px] bg-outline-variant"></span>
<span className="font-ui-label-sm text-ui-label-sm uppercase tracking-widest text-on-surface-variant font-medium">Folio IV • First Morning Draft</span>
<span className="w-8 h-[1px] bg-outline-variant"></span>
</div>
<h1 className="font-display-lg text-display-lg text-primary tracking-tight font-serif lowercase italic mb-2">
<span className="font-normal font-sans not-italic uppercase tracking-wider text-headline-sm block text-secondary mb-1">Canto Primus</span>
        The Anatomy of Dawn
      </h1>
<p className="font-ui-label-md text-ui-label-md tracking-[0.2em] uppercase text-on-surface-variant max-w-xl font-medium">
        On Temporality, Marble, and the Architecture of the Written Word
      </p>
<div className="flex items-center justify-center gap-space-lg mt-6 text-on-surface-variant font-ui-code text-ui-code">
<span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-[14px] text-secondary">wb_twilight</span> Solar Arc: 06:14 AM</span>
<span className="opacity-30">•</span>
<span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-[14px]">auto_stories</span> Libri III, Sec. 12</span>
<span className="opacity-30">•</span>
<span className="flex items-center gap-1.5"><span className="material-symbols-outlined text-[14px]">timer</span> Cadence Index: 94.2</span>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-gutter lg:gap-gutter-lg max-w-7xl mx-auto relative">

<div className="lg:col-span-4 relative group">
<div className="hidden lg:block absolute -left-8 top-1 font-ui-code text-ui-code text-outline select-none opacity-60">001</div>
<p className="font-body-md text-body-md text-on-surface text-justify leading-relaxed">
<span className="float-left font-editorial-dropcap text-editorial-dropcap leading-none pr-3 pt-1 text-primary font-serif select-none">A</span>
          ll light in the northern portico arrives not as illumination, but as an excavation of mass. Before the sun clears the damp red roofs of the fondaco, the travertine columns are merely dormant solids, indistinguishable from the grey limestone quarries of Istria from which they were hewn four centuries prior. In this pale interstice between night and daylight, the writer inherits an ancient silence—a parchment cleared of yesterday’s trivial notations, waiting for the first deliberate strike of the pen.
        </p>
<p className="font-body-md text-body-md text-on-surface text-justify leading-relaxed mt-5">
          To articulate space within a sentence is to construct a colonnade. Every clause demands an architrave; every cadence requires an abyss beneath its footings. If a paragraph is sustained too breathlessly without caesura, the marble buckles under the sheer unmitigated weight of thought.
        </p>

<div className="my-8 py-5 px-6 bg-surface-container-low/70 rounded-xl relative overflow-hidden">
<div className="absolute left-0 top-0 bottom-0 w-1 bg-secondary"></div>
<blockquote className="font-pull-quote text-pull-quote font-serif italic text-primary leading-snug">
            “Silence is never the absence of resonance, but the exact stone foundation upon which the syllable rests.”
          </blockquote>
<cite className="block font-ui-label-sm text-ui-label-sm text-secondary uppercase tracking-widest mt-3 not-italic">
            — Marginalia, Venice Note-Folio 1884
          </cite>
</div>
<p className="font-body-md text-body-md text-on-surface text-justify leading-relaxed">
          One discovers that the syntax of Petrarca was not forged in study alone, but modulated against the rhythmic slap of canal waters upon mossed watergates. Words bear salinity. They rust or they endure according to their internal proportion.
        </p>
</div>

<div className="lg:col-span-4 relative">
<div className="hidden lg:block absolute -left-6 top-1 font-ui-code text-ui-code text-outline select-none opacity-60">048</div>
<p className="font-body-md text-body-md text-on-surface text-justify leading-relaxed">
          The hand pauses. What is recorded in the margins often surpasses the central thesis. In the transcript of 1521 preserved in Padua, the scribe has scribbled an inventory of morning birds alongside a theological dispute on grace. It is there that literature breathes through the cracks of doctrine.
        </p>

<div className="my-5 p-4 bg-secondary-container/40 rounded-lg relative transition-all duration-300">
<div className="flex items-center justify-between pb-2 mb-2 border-b border-secondary/20">
<span className="font-ui-label-sm text-ui-label-sm text-secondary uppercase tracking-widest font-semibold flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Selected for Synthesis
            </span>
<span className="font-ui-code text-ui-code text-on-surface-variant">Lines 62–78</span>
</div>
<p className="font-body-lg text-body-lg text-primary font-serif italic leading-relaxed">
            “We do not invent the morning; we merely record the precise moment its slow grey tides inundate the library floor. The syntax must mirror the slow thaw of shadows across the cedar desk.”
          </p>
</div>
<p className="font-body-md text-body-md text-on-surface text-justify leading-relaxed">
          Consider the structural mechanics of the caesura. When we introduce an em-dash, we construct a balcony over the courtyard. The reader steps out, observes the courtyard fountain suspended mid-drop, draws a singular breath of chill air, and is ushered back into the chambers of the predicated verb.
        </p>

<div className="my-6 rounded-xl overflow-hidden bg-surface-container shadow-sm">
<img className="w-full h-44 object-cover" data-alt="Classical architectural copperplate etching showing dawn sunlight streaming through arched Venetian cloister columns onto an antique wooden writing table with parchment, quill, and hourglass, high contrast historical book engraving aesthetic in soft sepia and ivory tones" src="https://lh3.googleusercontent.com/aida-public/AB6AXuALo9lA1fhbn6A_e-BnTGigWkJQyISZf4eMY5HPeMTNLBnNYaZ59APCSlCPKQZimEOJ61hsdc0eH2XAKGkOe4KFqrXNfVkcDYPvRsoalkUDhKWjnm97-P_8_1MCeJOH03ezFus9UJ6Hh5OA1Wr8eYdILhrqaqOlD95T4hCVkpuLYtR-lu8BqZ2snL-TWkuNAPsyitNrFRljFADZIPzcYB0f6JBz0SqHDZtLUg8ENdiOIyf4wvz04Bk" />
<div className="p-3 bg-surface-container-high/80 flex items-center justify-between">
<span className="font-ui-label-sm text-ui-label-sm text-on-surface-variant uppercase tracking-wider">Fig. 4 • Architectural Cloister at Solstice</span>
<span className="font-ui-code text-ui-code text-secondary">Ink on Rag, 1742</span>
</div>
</div>
<p className="font-body-md text-body-md text-on-surface text-justify leading-relaxed">
          Thus, when narrative designers build virtual spaces today, they inevitably fall prey to the temptation of perpetual fullness. Yet classical prose masters understood that the void between words is where the reader’s memory takes root.
        </p>
</div>

<div className="lg:col-span-4 relative">
<div className="hidden lg:block absolute -left-6 top-1 font-ui-code text-ui-code text-outline select-none opacity-60">096</div>
<p className="font-body-md text-body-md text-on-surface text-justify leading-relaxed">
          Rhythm is an equation of vowels and consonantal friction. The Italianate hendecasyllable owes its grace to the gentle tumble of unaccented terminations, whereas English blank verse marches like a Roman legion in boots of heavy oak. To harmonize these traditions is the true ambition of modern editorial poetics.
        </p>

<div className="my-6 p-5 bg-surface-container rounded-xl shadow-sm">
<div className="flex items-center justify-between mb-3">
<span className="font-ui-label-md text-ui-label-md font-semibold text-primary">Harmonic Metric Dispersion</span>
<span className="font-ui-code text-ui-code text-on-surface-variant font-medium">Folio Measure</span>
</div>

<svg className="w-full h-12 text-secondary" fill="none" viewBox="0 0 320 48" xmlns="http://www.w3.org/2000/svg">
<path d="M0 24C20 24 35 8 55 8C75 8 90 38 110 38C130 38 145 16 165 16C185 16 200 32 220 32C240 32 255 12 275 12C295 12 305 24 320 24" stroke="currentColor" strokeLinecap="round" strokeWidth="2"></path>
<circle className="animate-ping origin-center" cx="165" cy="16" fill="currentColor" opacity="0.4" r="4"></circle>
<circle cx="165" cy="16" fill="currentColor" r="3"></circle>
<line stroke="currentColor" strokeDasharray="4 4" strokeOpacity="0.15" x1="0" x2="320" y1="44" y2="44"></line>
</svg>
<div className="flex items-center justify-between text-on-surface-variant font-ui-label-sm text-ui-label-sm mt-2">
<span>Dactylic Surge (42%)</span>
<span className="text-primary font-semibold">Tension Balanced</span>
<span>Iambic Drift (58%)</span>
</div>
</div>
<p className="font-body-md text-body-md text-on-surface text-justify leading-relaxed">
          Let the ink settle. To read attentively is to listen to the room in which the page was inscribed. If one listens carefully enough across the centuries, past the dry scratch of steel nib upon linen fiber, one hears the bell tower striking six in a city that no longer exists.
        </p>

<div className="mt-8 pt-4 border-t border-surface-variant text-on-surface-variant font-ui-label-sm text-ui-label-sm space-y-2">
<p><sup className="text-secondary font-semibold">1</sup> Compare with John Ruskin, <em>The Stones of Venice</em>, Vol. II, § 42: "The temper of the builder is manifested not in ornament, but in restraint."</p>
<p><sup className="text-secondary font-semibold">2</sup> Manuscript copy verified against Cod. Marc. Lat. VI, 114.</p>
</div>
</div>
</div>
</div>

<div className="pointer-events-none sticky bottom-6 w-full z-40 px-margin flex flex-col items-center gap-4">

<div className="pointer-events-auto flex items-center gap-1 p-1.5 rounded-full bg-surface-container-lowest/90 backdrop-blur-xl shadow-[0_12px_32px_-6px_rgba(36,28,21,0.08),0_2px_8px_-1px_rgba(36,28,21,0.04)] border border-surface-variant/80 transition-all hover:shadow-lg">
<button className="group flex items-center gap-1.5 px-3 py-1.5 rounded-full text-on-surface hover:bg-surface-container-high transition-colors" type="button">
<span className="material-symbols-outlined text-[18px] text-secondary">match_case</span>
<span className="font-ui-label-sm text-ui-label-sm font-semibold">Aa Style</span>
</button>
<span className="h-4 w-[1px] bg-outline-variant/60"></span>
<button className="group flex items-center gap-1.5 px-3 py-1.5 rounded-full text-on-surface hover:bg-surface-container-high transition-colors" type="button">
<span className="material-symbols-outlined text-[18px] text-on-surface-variant group-hover:text-primary">brush</span>
<span className="font-ui-label-sm text-ui-label-sm">Image Study</span>
</button>
<button className="group flex items-center gap-1.5 px-3 py-1.5 rounded-full text-on-surface hover:bg-surface-container-high transition-colors" type="button">
<span className="material-symbols-outlined text-[18px] text-on-surface-variant group-hover:text-primary">edit_note</span>
<span className="font-ui-label-sm text-ui-label-sm">Marginalia</span>
</button>
<span className="h-4 w-[1px] bg-outline-variant/60"></span>
<button className="group flex items-center gap-1.5 px-3 py-1.5 rounded-full text-on-surface hover:bg-surface-container-high transition-colors" type="button">
<span className="material-symbols-outlined text-[18px] text-on-surface-variant group-hover:text-primary">graphic_eq</span>
<span className="font-ui-label-sm text-ui-label-sm">Cadence</span>
</button>
<button className="p-1.5 text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high rounded-full transition-colors" type="button">
<span className="material-symbols-outlined text-[18px]">more_vert</span>
</button>
</div>

<div className="pointer-events-auto w-full max-w-3xl rounded-2xl bg-surface-container-lowest/95 backdrop-blur-2xl shadow-[0_24px_64px_-12px_rgba(36,28,21,0.12),0_4px_16px_-2px_rgba(36,28,21,0.04)] border border-surface-variant/90 p-6 md:p-8 transition-transform duration-300">

<div className="flex items-start justify-between gap-4 mb-4">
<div className="flex items-center gap-space-sm">
<div className="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container">
<span className="material-symbols-outlined text-[18px]">auto_awesome</span>
</div>
<div>
<div className="flex items-center gap-2">
<span className="font-ui-label-sm text-ui-label-sm uppercase tracking-wider font-semibold text-secondary">Narrative Synthesis</span>
<span className="w-1 h-1 rounded-full bg-outline-variant"></span>
<span className="font-ui-code text-ui-code text-on-surface-variant">Archival Core v2.4</span>
</div>
<span className="font-ui-label-sm text-ui-label-sm text-on-surface-variant">Synchronized with Folio 04: The Anatomy of Dawn</span>
</div>
</div>
<div className="flex items-center gap-2">
<span className="px-2.5 py-1 rounded-full bg-surface-container font-ui-code text-ui-code text-on-surface-variant flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-emerald-600 animate-pulse"></span>
            14,280 Words Indexed
          </span>
<button className="p-1 text-on-surface-variant hover:text-on-surface hover:bg-surface-container rounded-lg transition-colors" type="button">
<span className="material-symbols-outlined text-[20px]">close_fullscreen</span>
</button>
</div>
</div>

<div className="mb-6">
<h2 className="font-headline-lg text-headline-lg text-primary font-serif tracking-tight leading-snug">
          Let Daybreak sculpt your chapter’s cadence.
        </h2>
<p className="font-body-md text-body-md text-on-surface-variant mt-2 leading-relaxed">
          Analyze syntactic rhythm across consecutive paragraphs, interweave Venetian architectural metaphors into passage transitions, and elevate the rhetorical pace toward dawn.
        </p>
</div>

<div className="flex flex-wrap items-center gap-2 mb-6">
<div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container hover:bg-surface-container-high transition-colors cursor-pointer border border-transparent hover:border-outline-variant/40">
<span className="material-symbols-outlined text-[16px] text-secondary">speed</span>
<span className="font-ui-label-sm text-ui-label-sm text-on-surface font-medium">Cadence: <span className="text-primary font-semibold">Andante Maestoso</span></span>
<span className="material-symbols-outlined text-[14px] text-outline">expand_more</span>
</div>
<div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container hover:bg-surface-container-high transition-colors cursor-pointer border border-transparent hover:border-outline-variant/40">
<span className="material-symbols-outlined text-[16px] text-secondary">palette</span>
<span className="font-ui-label-sm text-ui-label-sm text-on-surface font-medium">Tone: <span className="text-primary font-semibold">Neo-Classical Elegiac</span></span>
<span className="material-symbols-outlined text-[14px] text-outline">expand_more</span>
</div>
<div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container hover:bg-surface-container-high transition-colors cursor-pointer border border-transparent hover:border-outline-variant/40">
<span className="material-symbols-outlined text-[16px] text-secondary">architecture</span>
<span className="font-ui-label-sm text-ui-label-sm text-on-surface font-medium">Motif Focus: <span className="text-primary font-semibold">Light &amp; Marble</span></span>
<span className="material-symbols-outlined text-[14px] text-outline">expand_more</span>
</div>
<div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-secondary-container/50 text-on-secondary-container font-ui-label-sm text-ui-label-sm font-semibold cursor-pointer">
<span className="material-symbols-outlined text-[16px]">add</span>
<span>Add Constraint</span>
</div>
</div>

<div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-surface-variant/80">
<div className="flex items-center gap-space-sm text-on-surface-variant font-ui-label-sm text-ui-label-sm">
<span className="material-symbols-outlined text-[18px] text-secondary">flare</span>
<span>Atmospheric light tuning: <strong>Morning Light • 5,200K</strong></span>
</div>
<div className="flex items-center gap-space-sm w-full sm:w-auto justify-end">
<button className="px-4 py-2 rounded-full font-ui-label-md text-ui-label-md text-on-surface hover:bg-surface-container transition-colors flex items-center gap-1.5" type="button">
<span className="material-symbols-outlined text-[18px]">history</span>
<span>Compare Drafts</span>
</button>
<button className="px-4 py-2 rounded-full font-ui-label-md text-ui-label-md text-on-surface hover:bg-surface-container transition-colors flex items-center gap-1.5" type="button">
<span className="material-symbols-outlined text-[18px]">ios_share</span>
<span>Export Folio</span>
</button>
<button className="px-5 py-2 rounded-full font-ui-label-md text-ui-label-md bg-primary-container text-surface hover:bg-primary transition-all shadow-md flex items-center gap-2 group" type="button">
<span>Synthesize Passage</span>
<span className="material-symbols-outlined text-[18px] group-hover:translate-x-0.5 transition-transform">arrow_forward</span>
</button>
</div>
</div>
</div>
</div>

<aside className="hidden xl:block fixed right-8 top-28 w-80 z-30 pointer-events-auto">
<div className="rounded-2xl bg-surface-container-lowest/90 backdrop-blur-xl shadow-[0_16px_40px_-8px_rgba(36,28,21,0.09)] border border-surface-variant/80 p-5 space-y-5">

<div className="flex items-center justify-between pb-3 border-b border-surface-variant">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-[20px] text-secondary">local_library</span>
<span className="font-ui-label-md text-ui-label-md font-semibold text-primary">Lexicon &amp; Marginalia</span>
</div>
<span className="font-ui-code text-ui-code px-2 py-0.5 rounded bg-surface-container text-on-surface-variant">Live</span>
</div>

<div className="p-3.5 rounded-xl bg-surface-container-low/70">
<div className="flex items-center justify-between mb-1">
<span className="font-headline-sm text-headline-sm font-serif italic text-primary">caesura</span>
<span className="font-ui-code text-ui-code text-secondary font-medium">lat. caedere</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant text-sm leading-relaxed">
          “To cut or cleave.” A metrical break where one phrase terminates and another opens, allowing resonance to pool in the reader's breath.
        </p>
</div>

<div className="space-y-2">
<span className="font-ui-label-sm text-ui-label-sm uppercase tracking-wider font-semibold text-on-surface-variant">Archival Reference</span>
<div className="flex items-start gap-3 p-3 rounded-xl bg-surface-container hover:bg-surface-container-high transition-colors cursor-pointer">
<div className="w-10 h-10 rounded-lg overflow-hidden shrink-0 bg-surface-variant">
<img className="w-full h-full object-cover" data-alt="Sepia macro photograph of 16th century handmade Italian cotton manuscript paper with deckled edges and iron gall ink cursive annotations" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDLtlhP1xhmNeYOCd13HiXzt61FcDxl9afWRAelYLo1tXvB545q1P3MBX4CnvKoUAXjujZtyPEc8jfqz5YndV4C7T_-W5H5GhDXZgVUCzAluhmjdSOQ4YDwtBu9Y0iKNC0lIWLWGiSR3b96XUWyX3j-rann4tRlPrp3Tplh7e6bDLgqliYZOnFhHYzQpn88fJ59TA2CE01Pz5gdg0R-XkBjUFaPjwxjvya-3ifyqz8YDX-QPvMf7J4" />
</div>
<div className="min-w-0">
<h3 className="font-ui-label-sm text-ui-label-sm font-bold text-primary truncate">Venetian Quaderni 1502</h3>
<p className="font-ui-code text-ui-code text-on-surface-variant truncate">Bibl. Marciana • Col. 84</p>
<span className="font-ui-label-sm text-ui-label-sm text-secondary font-medium mt-1 inline-block">Motif: Travertine Shadows</span>
</div>
</div>
</div>

<div className="p-3.5 rounded-xl bg-secondary-container/30">
<div className="flex items-center justify-between mb-1">
<span className="font-ui-label-sm text-ui-label-sm uppercase tracking-wider font-semibold text-secondary flex items-center gap-1">
<span className="material-symbols-outlined text-[14px]">push_pin</span> Studio Note
          </span>
<span className="font-ui-code text-ui-code text-on-surface-variant">06:22 AM</span>
</div>
<p className="font-body-md text-body-md text-on-surface italic text-sm">
          “Revise stanza three before dawn printing. Ensure the transition between the Istrian stone and the canal current sounds completely inevitable.”
        </p>
</div>

<div className="pt-2 border-t border-surface-variant flex items-center justify-between text-on-surface-variant font-ui-code text-ui-code">
<span>Readability Score: 88.4</span>
<span className="text-secondary font-medium">Flawless Harmony</span>
</div>
</div>
</aside>

<aside className="hidden xl:flex fixed left-8 top-32 flex-col items-center gap-4 z-30 pointer-events-auto">
<div className="p-2 rounded-full bg-surface-container-lowest/80 backdrop-blur-md shadow-md border border-surface-variant/80 flex flex-col items-center gap-3">
<button className="w-7 h-7 rounded-full flex items-center justify-center text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors" title="Beginning of Folio">
<span className="material-symbols-outlined text-[16px]">vertical_align_top</span>
</button>
<div className="w-[2px] h-28 bg-surface-variant rounded-full relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1/3 bg-secondary rounded-full"></div>
</div>
<span className="font-ui-code text-ui-code text-on-surface-variant -rotate-90 select-none py-2 whitespace-nowrap">Pg. 48 of 120</span>
<button className="w-7 h-7 rounded-full flex items-center justify-center text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors" title="End of Folio">
<span className="material-symbols-outlined text-[16px]">vertical_align_bottom</span>
</button>
</div>
</aside>
</div>
</main><footer className="w-full bg-surface-container-low/80 py-margin-md shadow-[0_-1px_6px_rgba(40,30,20,0.02)]"><div className="w-full px-gutter-lg flex flex-col md:flex-row items-center justify-between gap-space-md font-ui-label-sm text-ui-label-sm text-on-surface-variant"><div className="flex items-center gap-space-sm"><span className="font-headline-sm text-headline-sm text-on-surface select-none font-serif">Daybreak</span><span className="opacity-40">•</span><span>Sanctuary for Classical Narrative &amp; Prose</span></div><div className="flex items-center gap-space-lg"><span className="italic font-body-md text-body-md text-on-surface-variant/80">"Silence is the canvas of the sentence."</span><span className="opacity-40">© 2025 Studio Daybreak</span></div></div></footer>
    </>
  );
}
