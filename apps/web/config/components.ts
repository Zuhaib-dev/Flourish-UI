export type ComponentEntry = {
  slug: string
  title: string
  category: string
  description: string
  tags: string[]
  tone: string
  dependencies: string[]
  previewImage: string
}

export const categories = [
  'All components',
  'Shaders & WebGL',
  'Skeuomorphic & 3D',
  'Canvas & Generative',
  'Motion & Physics',
  'Dashboards & Editors',
  'Interactive Surfaces',
]

export const components: ComponentEntry[] = [
  {
    "slug": "admit-one-3-d-holographic-ticket",
    "title": "Admit One 3D Holographic Ticket",
    "category": "Shaders & WebGL",
    "description": "A high-fidelity 3D holographic foil admission ticket featuring procedural WebGL shaders, Bayer matrix dithering, simplex noise foil, interactive physical mouse tilt, and realistic specular glare.",
    "tags": [
      "shaders",
      "webgl",
      "canvas",
      "typescript"
    ],
    "tone": "lime",
    "dependencies": [],
    "previewImage": "/previews/admit-one-3-d-holographic-ticket.png"
  },
  {
    "slug": "agent-orchestration-dashboard",
    "title": "Agent Orchestration Dashboard",
    "category": "Dashboards & Editors",
    "description": "An ultra-premium, dark-mode orchestration dashboard designed for monitoring and deploying AI agents. Features a bespoke 16-bit pixel art lighthouse background and intricate widget layouts.",
    "tags": [
      "dashboards",
      "motion",
      "typescript"
    ],
    "tone": "peach",
    "dependencies": [
      "framer-motion",
      "lucide-react"
    ],
    "previewImage": "/previews/agent-orchestration-dashboard.png"
  },
  {
    "slug": "auth-section-1",
    "title": "Auth Section Split Portal",
    "category": "Interactive Surfaces",
    "description": "A gorgeous, highly-converting split-screen authentication component layout built for Next.js.",
    "tags": [
      "interactive surfaces",
      "webgl",
      "typescript"
    ],
    "tone": "blue",
    "dependencies": [
      "@paper-design/shaders-react"
    ],
    "previewImage": "/previews/auth-section-1.png"
  },
  {
    "slug": "bloom-select",
    "title": "Bloom Select Text Garden",
    "category": "Motion & Physics",
    "description": "A premium, highly interactive React component library crafted for modern web applications.",
    "tags": [
      "motion",
      "typescript"
    ],
    "tone": "violet",
    "dependencies": [
      "framer-motion"
    ],
    "previewImage": "/previews/bloom-select.png"
  },
  {
    "slug": "cold-flame-drift",
    "title": "Cold Flame Drift Risograph",
    "category": "Shaders & WebGL",
    "description": "A tactile, generative field of grainy, hand-printed risograph flames sliding along a diagonal. Features noise-bent flow rows, dual-ink stippled grain, drifting dash marks, and dynamic pointer interaction (hover curl, speed boost, and click flare shockwaves).",
    "tags": [
      "shaders",
      "webgl",
      "canvas",
      "typescript"
    ],
    "tone": "yellow",
    "dependencies": [],
    "previewImage": "/previews/cold-flame-drift.png"
  },
  {
    "slug": "contribution-skyline",
    "title": "GitHub Contribution Skyline",
    "category": "Canvas & Generative",
    "description": "A GitHub-style contribution heat map that seamlessly transforms into an isometric 3D skyline. Every day is a box on a grid, smoothly transitioning between a 2D overhead view and a 3D perspective using HTML5 Canvas.",
    "tags": [
      "canvas",
      "typescript"
    ],
    "tone": "coral",
    "dependencies": [],
    "previewImage": "/previews/contribution-skyline.png"
  },
  {
    "slug": "credit-card-form",
    "title": "Tactile 3D Credit Card Form",
    "category": "Skeuomorphic & 3D",
    "description": "A tactile, interactive 3D flippable credit card form component with dynamic input focus highlighting, number slot slide animations, Luhn validation, and smooth dual-sided flip transitions.",
    "tags": [
      "skeuomorphic",
      "typescript"
    ],
    "tone": "emerald",
    "dependencies": [],
    "previewImage": "/previews/credit-card-form.png"
  },
  {
    "slug": "dashboard-may-look-minimal",
    "title": "Minimalist Control Room",
    "category": "Dashboards & Editors",
    "description": "A stunning, hyper-minimal SaaS dashboard UI featuring bespoke handcrafted SVG charts, wireframe-style crop marks, and perfect technical typography.",
    "tags": [
      "dashboards",
      "motion",
      "typescript"
    ],
    "tone": "indigo",
    "dependencies": [
      "framer-motion",
      "lucide-react"
    ],
    "previewImage": "/previews/dashboard-may-look-minimal.png"
  },
  {
    "slug": "daybreak-editorial",
    "title": "Daybreak Editorial Narrative",
    "category": "Interactive Surfaces",
    "description": "A premium, interactive Neo-Classical design system and UI shell for long-form narrative, reading, and writing experiences. Built with Next.js 15, Tailwind CSS v4, and Framer Motion.",
    "tags": [
      "interactive surfaces",
      "motion",
      "canvas",
      "threejs"
    ],
    "tone": "rose",
    "dependencies": [
      "framer-motion",
      "lucide-react"
    ],
    "previewImage": "/previews/daybreak-editorial.png"
  },
  {
    "slug": "digital-journal-album",
    "title": "Digital Journal 3D Album",
    "category": "Skeuomorphic & 3D",
    "description": "A photorealistic, highly interactive 3D digital journal with true physical flipbook mechanics and cinematic visuals, built for the Flourish UI component library.",
    "tags": [
      "skeuomorphic",
      "motion",
      "typescript"
    ],
    "tone": "cyan",
    "dependencies": [
      "framer-motion"
    ],
    "previewImage": "/previews/digital-journal-album.png"
  },
  {
    "slug": "digital-signature-modal",
    "title": "Digital Signature Modal",
    "category": "Interactive Surfaces",
    "description": "A premium, highly interactive, and functionally complete React component for capturing digital signatures in web applications. It provides a polished and legally compliant-looking interface for users to sign documents.",
    "tags": [
      "interactive surfaces",
      "typescript"
    ],
    "tone": "amber",
    "dependencies": [
      "framer-motion",
      "lucide-react",
      "react-signature-canvas"
    ],
    "previewImage": "/previews/digital-signature-modal.png"
  },
  {
    "slug": "draggable-widget-grid",
    "title": "Draggable Widget Observability Grid",
    "category": "Dashboards & Editors",
    "description": "A beautiful, draggable grid of widgets that can be rearranged seamlessly using `motion/react`.",
    "tags": [
      "dashboards",
      "motion",
      "typescript"
    ],
    "tone": "lime",
    "dependencies": [
      "motion"
    ],
    "previewImage": "/previews/draggable-widget-grid.png"
  },
  {
    "slug": "flow-ai-canvas",
    "title": "FlowAI Node Workflow Canvas",
    "category": "Dashboards & Editors",
    "description": "An ultra-premium node-based visual workflow editor interface. Built with an intricate left sidebar, an interactive node library panel, and a beautifully designed dot-grid canvas with floating toolbars and a minimap.",
    "tags": [
      "dashboards",
      "motion",
      "canvas",
      "typescript"
    ],
    "tone": "peach",
    "dependencies": [
      "framer-motion",
      "lucide-react"
    ],
    "previewImage": "/previews/flow-ai-canvas.png"
  },
  {
    "slug": "hero-ascii-one",
    "title": "ASCII Cyberpunk Hero",
    "category": "Canvas & Generative",
    "description": "A dark, cyber-themed animated hero component featuring Unicorn Studio background rendering and typing aesthetics.",
    "tags": [
      "canvas",
      "typescript"
    ],
    "tone": "blue",
    "dependencies": [],
    "previewImage": "/previews/hero-ascii-one.png"
  },
  {
    "slug": "ink-orbit-hero",
    "title": "Generative 3D Ink Orbit Hero",
    "category": "Canvas & Generative",
    "description": "A stunning hero section featuring a generative 3D ink sculpture that responds to drag, tilt, and click gestures. Built entirely using HTML5 Canvas and React with zero external dependencies.",
    "tags": [
      "canvas",
      "motion",
      "typescript"
    ],
    "tone": "violet",
    "dependencies": [],
    "previewImage": "/previews/ink-orbit-hero.png"
  },
  {
    "slug": "isometric-dashboard",
    "title": "3D Isometric Dashboard",
    "category": "Dashboards & Editors",
    "description": "A premium, high-fidelity dark-mode dashboard component featuring a true 3D isometric stacked bar chart and a highly detailed interactive heatmap calendar.",
    "tags": [
      "dashboards",
      "motion",
      "typescript"
    ],
    "tone": "yellow",
    "dependencies": [
      "framer-motion",
      "lucide-react"
    ],
    "previewImage": "/previews/isometric-dashboard.png"
  },
  {
    "slug": "kinetic-hover",
    "title": "Kinetic Typography Hover",
    "category": "Motion & Physics",
    "description": "A high-fidelity, interactive hover layout component designed for editorial portfolios and creative agencies.",
    "tags": [
      "motion",
      "typescript"
    ],
    "tone": "coral",
    "dependencies": [
      "framer-motion"
    ],
    "previewImage": "/previews/kinetic-hover.png"
  },
  {
    "slug": "live-notification-feed",
    "title": "Live Notification Event Feed",
    "category": "Interactive Surfaces",
    "description": "A premium, interactive live notification feed designed for real-time dashboards and product demos. Built with Next.js, Framer Motion (conceptually adapted via native animations), and Tailwind CSS.",
    "tags": [
      "interactive surfaces",
      "typescript"
    ],
    "tone": "emerald",
    "dependencies": [],
    "previewImage": "/previews/live-notification-feed.png"
  },
  {
    "slug": "particle-wordmark",
    "title": "Interactive Particle Wordmark",
    "category": "Canvas & Generative",
    "description": "A gorgeous, interactive particle-based wordmark component.",
    "tags": [
      "canvas",
      "webgl",
      "threejs",
      "typescript"
    ],
    "tone": "indigo",
    "dependencies": [],
    "previewImage": "/previews/particle-wordmark.png"
  },
  {
    "slug": "post-planner-calendar",
    "title": "Post Planner Content Calendar",
    "category": "Dashboards & Editors",
    "description": "A pristine, minimalist SaaS dashboard component designed for planning and organizing content posts. Features a comprehensive calendar grid and data summary cards with a clean light-mode aesthetic.",
    "tags": [
      "dashboards",
      "motion",
      "typescript"
    ],
    "tone": "rose",
    "dependencies": [
      "framer-motion",
      "lucide-react"
    ],
    "previewImage": "/previews/post-planner-calendar.png"
  },
  {
    "slug": "prisma-hero",
    "title": "Prisma Cinematic Video Hero",
    "category": "Interactive Surfaces",
    "description": "A dark, atmospheric hero component featuring a full-bleed background video, glassmorphic noise overlays, and `framer-motion` staggered text pull-up effects.",
    "tags": [
      "interactive surfaces",
      "motion",
      "typescript"
    ],
    "tone": "cyan",
    "dependencies": [
      "framer-motion",
      "lucide-react"
    ],
    "previewImage": "/previews/prisma-hero.png"
  },
  {
    "slug": "proma-content-workspace",
    "title": "Proma Podcast Workspace",
    "category": "Dashboards & Editors",
    "description": "A high-fidelity, 3-column workspace dashboard designed for podcast and content studios. It features an intricate collapsible sidebar, a central AI-assisted content creation feed, and a rich media transcript view.",
    "tags": [
      "dashboards",
      "motion",
      "typescript"
    ],
    "tone": "amber",
    "dependencies": [
      "framer-motion",
      "lucide-react"
    ],
    "previewImage": "/previews/proma-content-workspace.png"
  },
  {
    "slug": "property-comparison-dashboard",
    "title": "Property Comparison Matrix",
    "category": "Dashboards & Editors",
    "description": "A highly interactive, fluid property comparison dashboard featuring soft skeuomorphic design and smooth `framer-motion` state transitions, built for the Flourish UI component library.",
    "tags": [
      "dashboards",
      "motion",
      "threejs",
      "typescript"
    ],
    "tone": "lime",
    "dependencies": [
      "framer-motion",
      "lucide-react"
    ],
    "previewImage": "/previews/property-comparison-dashboard.png"
  },
  {
    "slug": "quadrant-workspace-setup",
    "title": "Quadrant Workstation Hub",
    "category": "Dashboards & Editors",
    "description": "A premium, highly polished workspace setup and configuration modal. It features a stunning split-layout design with a picturesque background, meticulous form elements, and smooth interactions.",
    "tags": [
      "dashboards",
      "typescript"
    ],
    "tone": "peach",
    "dependencies": [
      "lucide-react"
    ],
    "previewImage": "/previews/quadrant-workspace-setup.png"
  },
  {
    "slug": "seo-agent-chat-ui",
    "title": "SEO Analysis AI Agent Chat",
    "category": "Dashboards & Editors",
    "description": "A pristine, high-fidelity chat interface designed for interacting with specialized AI agents (like an SEO Specialist). It features a full-width viewport design with a collapsible sidebar and a central chat feed capable of rendering complex, interactive data cards.",
    "tags": [
      "dashboards",
      "motion",
      "typescript"
    ],
    "tone": "blue",
    "dependencies": [
      "framer-motion",
      "lucide-react"
    ],
    "previewImage": "/previews/seo-agent-chat-ui.png"
  },
  {
    "slug": "share-file-dialog",
    "title": "Squircle Share File Dialog",
    "category": "Interactive Surfaces",
    "description": "A highly-detailed, highly-polished share file dialog modal built for Next.js, featuring smooth Framer Motion animations.",
    "tags": [
      "interactive surfaces",
      "motion",
      "typescript"
    ],
    "tone": "violet",
    "dependencies": [
      "framer-motion",
      "lucide-react"
    ],
    "previewImage": "/previews/share-file-dialog.png"
  },
  {
    "slug": "skeuomorphic-notebook",
    "title": "Skeuomorphic Folio Notebook",
    "category": "Skeuomorphic & 3D",
    "description": "A playful, highly interactive skeuomorphic take on a digital guestbook. It brings the tactile feel of a physical leather-bound journal into the browser with realistic page flips, handwritten typography, and organic ink features.",
    "tags": [
      "skeuomorphic",
      "motion",
      "canvas",
      "typescript"
    ],
    "tone": "yellow",
    "dependencies": [
      "framer-motion",
      "lucide-react",
      "react-signature-canvas"
    ],
    "previewImage": "/previews/skeuomorphic-notebook.png"
  },
  {
    "slug": "skeuomorphic-verify-email",
    "title": "Skeuomorphic Verify Email",
    "category": "Skeuomorphic & 3D",
    "description": "A beautifully crafted, physically inspired email verification component featuring a 3D rendered mailbox, deep inset shadows, and tactile button interactions.",
    "tags": [
      "skeuomorphic",
      "typescript"
    ],
    "tone": "coral",
    "dependencies": [],
    "previewImage": "/previews/skeuomorphic-verify-email.png"
  },
  {
    "slug": "skiper39",
    "title": "Skiper39 Generative Crowd Canvas",
    "category": "Canvas & Generative",
    "description": "A highly interactive and animated crowd rendering component using HTML5 Canvas and `gsap` (GreenSock Animation Platform).",
    "tags": [
      "canvas",
      "typescript"
    ],
    "tone": "emerald",
    "dependencies": [
      "gsap"
    ],
    "previewImage": "/previews/skiper39.png"
  },
  {
    "slug": "split-signup-modal",
    "title": "Split Frosted Sign Up Modal",
    "category": "Interactive Surfaces",
    "description": "A highly premium, two-column split-layout sign up modal featuring a clean typographic left panel and a dreamy, animated glassmorphic right panel. Built for the Flourish UI component library.",
    "tags": [
      "interactive surfaces",
      "motion",
      "typescript"
    ],
    "tone": "indigo",
    "dependencies": [
      "framer-motion",
      "lucide-react"
    ],
    "previewImage": "/previews/split-signup-modal.png"
  },
  {
    "slug": "ticket-stub-footer",
    "title": "Ticket Stub Perforated Footer",
    "category": "Interactive Surfaces",
    "description": "A dark, hairline-ruled closing section for an ops product, with the brand printed on an orange ticket.",
    "tags": [
      "interactive surfaces",
      "canvas",
      "typescript"
    ],
    "tone": "rose",
    "dependencies": [],
    "previewImage": "/previews/ticket-stub-footer.png"
  },
  {
    "slug": "travel-booking-bento",
    "title": "Travel Booking Bento Grid",
    "category": "Dashboards & Editors",
    "description": "A beautiful, highly complex travel booking dashboard featuring a modern bento-box grid layout, glassmorphism overlays, and stunning typography.",
    "tags": [
      "dashboards",
      "motion",
      "typescript"
    ],
    "tone": "cyan",
    "dependencies": [
      "framer-motion",
      "lucide-react"
    ],
    "previewImage": "/previews/travel-booking-bento.png"
  },
  {
    "slug": "velocity-spring-system",
    "title": "Velocity Spring Dock System",
    "category": "Motion & Physics",
    "description": "A breathtaking, highly interactive layout animation system featuring MacOS dock mechanics, seamless masonry grid toggles, and perfect physical spring interpolation. Built for the Flourish UI component library.",
    "tags": [
      "motion",
      "typescript"
    ],
    "tone": "amber",
    "dependencies": [
      "framer-motion",
      "lucide-react"
    ],
    "previewImage": "/previews/velocity-spring-system.png"
  },
  {
    "slug": "voyage-planner",
    "title": "Voyage Soft-Skeuomorphic Planner",
    "category": "Skeuomorphic & 3D",
    "description": "A gorgeous, soft-skeuomorphic trip planner widget featuring realistic ticket cutouts, glassmorphic folders, and ultra-premium UI details.",
    "tags": [
      "skeuomorphic",
      "motion",
      "typescript"
    ],
    "tone": "lime",
    "dependencies": [
      "framer-motion",
      "lucide-react"
    ],
    "previewImage": "/previews/voyage-planner.jpeg"
  },
  {
    "slug": "waves-shaders-homlu-ui",
    "title": "Waves OKLab Liquid Shader",
    "category": "Shaders & WebGL",
    "description": "An interactive, organic wave field shader background featuring perceptual OKLab color transitions, 5-tap blur, film grain, and dynamic pointer displacement effects (push, directional distortion, swirl, and ripple).",
    "tags": [
      "shaders",
      "webgl",
      "canvas",
      "typescript"
    ],
    "tone": "peach",
    "dependencies": [],
    "previewImage": "/previews/waves-shaders-homlu-ui.png"
  }
]

export const getComponent = (slug: string) => components.find((component) => component.slug === slug)

export const stats = {
  components: components.length,
  categories: categories.length - 1,
  installMethods: 4,
}

export const installCommand = (slug: string, manager = 'pnpm') =>
  `${manager} dlx shadcn@latest add https://flourish-ui.vercel.app/r/${slug}.json`

export const registryCatalogItem = (component: ComponentEntry) => ({
  name: component.slug,
  type: 'registry:ui',
  title: component.title,
  description: component.description,
  author: 'Zuhaib Rashid <zuhaibrashid01@gmail.com>',
  dependencies: component.dependencies,
  registryDependencies: [],
  files: [{
    path: `components/flourish/${component.slug}.tsx`,
    target: `@components/flourish/${component.slug}.tsx`,
    type: 'registry:ui',
  }],
})
