'use client'

import { motion } from 'framer-motion'

const colors = ['#a43c45', '#5c70a0', '#6d5367', '#36685d', '#d7c37a']

function AnimalScene() {
  return (
    <svg className="animal-scene" viewBox="0 0 540 360" role="img" aria-label="A playful blue donkey beside a small animal house">
      <g stroke="#0f1112" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round">
        <path fill="#6077ae" d="M160 272c12-37 20-77 16-120l-19-55c-5-15 10-28 20-16l20 34-3-57c-1-15 18-21 23-7l10 51c44-8 87-8 111 5 23 13 19 42-6 49l-79 6-5 77c-1 21 0 35 11 47l-20 12-33-7-29-7z" />
        <path fill="#6077ae" d="M186 297l-22 30M221 301l-17 31M188 299l-15 24M217 300l17 23" />
        <path fill="#326353" d="M240 278l-20 38 14 6 15-18 5 22 14-3-8-32 12-20z" />
        <path fill="#f1efe8" d="M260 171c-3 23-20 35-45 39-11 2-14-10-4-14 24-9 38-20 41-33z" />
        <path fill="#f1efe8" d="M278 187c-8 20-12 39-10 60l-18 0c4-22 4-43 0-61z" />
        <circle fill="#111" stroke="none" cx="269" cy="92" r="3" />
        <circle fill="#111" stroke="none" cx="285" cy="92" r="3" />
        <path d="M271 107c11 3 18 2 25-2" fill="none" />
        <path fill="#f5f0e8" d="M363 143c13-24 29-45 42-45 11 0 18 12 10 22l-20 20 37 9 13 21-31 4-21-17-21 6z" />
        <path fill="#f5f0e8" d="M395 130l-7-28M409 132l13-24M378 161l-14 30M411 160l6 31" />
        <circle fill="#f5f0e8" cx="369" cy="91" r="14" />
        <path fill="#f5f0e8" d="M359 80l-2-16 12 10M375 79l8-15 3 20" />
        <circle fill="#111" stroke="none" cx="374" cy="91" r="2.5" />
        <path fill="#f5f0e8" d="M324 220l-15 17 4 22 20 0 8-32z" />
        <path fill="#f5f0e8" d="M317 258l-4 39M333 258l8 39M310 297h14M337 297h11" />
        <path fill="#e7d467" d="M365 196h112v104H365z" />
        <path fill="#f5f0e8" d="M349 194h145v24H349z" />
        <path fill="#466f66" d="M419 159l22 35h-44z" />
        <path fill="#5f739d" d="M399 142h61v18h-61z" />
        <path fill="#f5f0e8" d="M383 229h22v71h-22zM444 229h22v71h-22z" />
        <path fill="#f5f0e8" d="M417 300c0-24 7-37 20-37s20 13 20 37z" />
        <circle fill="#e5c84a" cx="455" cy="134" r="10" />
        <path fill="#e4d05b" d="M350 238h23v20h-23z" />
      </g>
    </svg>
  )
}

export default function Page() {
  return (
    <main className="playground">
      <motion.section
        className="browser-window"
        initial={{ opacity: 0, y: 18, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="browser-chrome" aria-hidden="true"><i /><i /><i /></div>
        <header className="site-header">
          <nav><a href="#shop">Shop</a><a className="active" href="#play">Play</a></nav>
          <a className="wordmark" href="#top">woset</a>
          <nav><a href="#cart">Cart (0)</a><a href="#information">Information</a></nav>
        </header>

        <div className="artboard" id="play">
          <motion.h1 initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.35 }}>NESSA&nbsp;&nbsp; HAS&nbsp;&nbsp; BUILT A<br />HOUSE FOR<br />THE ANIMALS</motion.h1>
          <motion.div className="scene-wrap" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45, duration: 0.8 }}><AnimalScene /></motion.div>
        </div>

        <aside className="profile-copy">
          <h2>Nessa</h2>
          <p>Nessa is very shy and always hides herself behind her mask. Behind the mask is someone very helpful and kind.</p>
          <a href="#play">Back to Play</a>
        </aside>

        <footer className="toolbar">
          <div className="actions">{['START OVER', 'ERASER', 'SAVE', 'SHARE'].map((item) => <button key={item}>{item}</button>)}</div>
          <div className="swatches" aria-label="Choose a color">{colors.map((color) => <button key={color} style={{ backgroundColor: color }} aria-label={`Choose ${color}`} />)}</div>
          <div className="slider" aria-label="Brush size"><span /><b /></div>
        </footer>
      </motion.section>
    </main>
  )
}

      
