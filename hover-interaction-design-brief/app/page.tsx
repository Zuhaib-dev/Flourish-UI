'use client'

import Image from 'next/image'
import { useState } from 'react'

const projects = [
  {
    number: '01',
    title: 'A quieter kind of loud',
    category: 'Editorial / 2024',
    description: 'A visual identity for a new generation of independent publishing.',
    image: '/preview-editorial.png',
    color: '#c8dcff',
  },
  {
    number: '02',
    title: 'Objects with intent',
    category: 'Art direction / 2023',
    description: 'Still life studies exploring the tension between utility and desire.',
    image: '/preview-objects.png',
    color: '#f5d7a4',
  },
  {
    number: '03',
    title: 'Between the lines',
    category: 'Architecture / 2023',
    description: 'A photographic essay on the geometry of everyday movement.',
    image: '/preview-architecture.png',
    color: '#d7d0c8',
  },
  {
    number: '04',
    title: 'The common thread',
    category: 'Campaign / 2022',
    description: 'A campaign about the small rituals that bring us together.',
    image: '/preview-editorial.png',
    color: '#d8e8d1',
  },
]

export default function Page() {
  const [activeProject, setActiveProject] = useState(0)
  const active = projects[activeProject]

  return (
    <main className="portfolio-shell">
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Northstar home">northstar<span>®</span></a>
        <p className="header-note">Independent creative practice<br />New York / Everywhere</p>
        <a className="contact-link" href="mailto:hello@northstar.studio">Get in touch <span aria-hidden="true">↗</span></a>
      </header>

      <section className="intro" id="top">
        <p className="eyebrow">Selected work, 2022—24</p>
        <h1>Ideas made<br /><em>visible.</em></h1>
        <p className="intro-copy">Northstar is a small creative studio for brands, people, and places with something to say.</p>
      </section>

      <section className="work-grid" aria-label="Selected projects">
        <div className="project-list">
          <div className="list-labels" aria-hidden="true"><span>Index</span><span>Project</span><span>Discipline</span></div>
          {projects.map((project, index) => (
            <a
              className={`project-row ${activeProject === index ? 'is-active' : ''}`}
              href={`#project-${project.number}`}
              key={project.number}
              onMouseEnter={() => setActiveProject(index)}
              onFocus={() => setActiveProject(index)}
            >
              <span className="project-number">{project.number}</span>
              <span className="project-title">{project.title}</span>
              <span className="project-category">{project.category}</span>
              <span className="project-arrow" aria-hidden="true">↗</span>
            </a>
          ))}
        </div>

        <aside className="preview-wrap" aria-live="polite">
          <div className="preview-card" style={{ '--accent': active.color } as React.CSSProperties} id={`project-${active.number}`}>
            <div className="preview-image">
              <Image src={active.image} alt="" fill sizes="(max-width: 800px) 100vw, 42vw" priority={activeProject === 0} />
              <span className="preview-count">{active.number} / 04</span>
            </div>
            <div className="preview-meta">
              <div><p className="preview-kicker">Currently viewing</p><h2>{active.title}</h2></div>
              <p className="preview-description">{active.description}</p>
            </div>
          </div>
        </aside>
      </section>

      <footer className="site-footer">
        <span>© Northstar Studio</span>
        <span>Available for select projects</span>
        <a href="mailto:hello@northstar.studio">hello@northstar.studio</a>
      </footer>
    </main>
  )
}

