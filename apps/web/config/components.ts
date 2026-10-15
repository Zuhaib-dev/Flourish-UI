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

export const categorySlug = (category: string) => category.toLowerCase().replace(/ & /g, '-').replace(/[^a-z0-9]+/g, '-')
export const categoryDescriptions: Record<string, string> = {
  'Shaders & WebGL': 'Shader-driven visuals, WebGL effects, and interactive graphics ready to bring depth to your interface.',
  'Skeuomorphic & 3D': 'Tactile, dimensional interfaces with thoughtful materials, depth, and physical interaction.',
  'Canvas & Generative': 'Generative visuals and canvas-powered experiences built for expressive interfaces.',
  'Motion & Physics': 'Components shaped by motion, spring physics, and playful response to user input.',
  'Dashboards & Editors': 'Practical dashboards, creative tools, and polished workflows for real product interfaces.',
  'Interactive Surfaces': 'Distinctive interactive sections and surfaces for engaging product experiences.',
}
export const recentlyAddedSlugs = ['design-with-soul', 'create-from-the-heart', 'house-savings-goal-card', 'genesis-onboarding-card', 'storybook-play-canvas', '404-error-page-component', 'liquid-glass-folder-stack', 'raster-dynamics-wordmark']

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
    "previewImage": "/previews/admit-one-3-d-holographic-ticket.webp"
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
    "previewImage": "/previews/agent-orchestration-dashboard.webp"
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
    "previewImage": "/previews/auth-section-1.webp"
  },
  {
    "slug": "bloom-select",
    "title": "Bloom Select Text Garden",
    "category": "Motion & Physics",
    "description": "Bloom Select turns highlighted text into playful, animated flowers, adding an expressive moment to reading and writing interfaces.",
    "tags": [
      "motion",
      "typescript"
    ],
    "tone": "violet",
    "dependencies": [
      "framer-motion"
    ],
    "previewImage": "/previews/bloom-select.webp"
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
    "previewImage": "/previews/cold-flame-drift.webp"
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
    "previewImage": "/previews/contribution-skyline.webp"
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
    "previewImage": "/previews/credit-card-form.webp"
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
    "previewImage": "/previews/dashboard-may-look-minimal.webp"
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
    "previewImage": "/previews/daybreak-editorial.webp"
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
    "previewImage": "/previews/digital-journal-album.webp"
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
    "previewImage": "/previews/digital-signature-modal.webp"
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
    "previewImage": "/previews/draggable-widget-grid.webp"
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
    "previewImage": "/previews/flow-ai-canvas.webp"
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
    "previewImage": "/previews/hero-ascii-one.webp"
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
    "previewImage": "/previews/ink-orbit-hero.webp"
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
    "previewImage": "/previews/isometric-dashboard.webp"
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
    "previewImage": "/previews/kinetic-hover.webp"
  },
  {
    "slug": "liquid-glass-folder-stack",
    "title": "Liquid Glass Folder Stack",
    "category": "Skeuomorphic & 3D",
    "description": "A tactile 3D frosted-glass interactive folder component with procedural domain-warped liquid marble artwork, spring hinge physics, dynamic file fan, and interactive keyboard menu.",
    "tags": [
      "skeuomorphic",
      "3d",
      "glassmorphism",
      "canvas",
      "spring-physics",
      "procedural-art",
      "typescript"
    ],
    "tone": "cyan",
    "dependencies": [],
    "previewImage": "/previews/liquid-glass-folder-stack.webp"
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
    "previewImage": "/previews/live-notification-feed.webp"
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
    "previewImage": "/previews/particle-wordmark.webp"
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
    "previewImage": "/previews/post-planner-calendar.webp"
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
    "previewImage": "/previews/prisma-hero.webp"
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
    "previewImage": "/previews/proma-content-workspace.webp"
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
    "previewImage": "/previews/property-comparison-dashboard.webp"
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
    "previewImage": "/previews/quadrant-workspace-setup.webp"
  },
  {
    "slug": "raster-dynamics-wordmark",
    "title": "Raster Dynamics Wordmark",
    "category": "Canvas & Generative",
    "description": "An expressive site footer whose wordmark is printed as an interactive field of spring-physics halftone dots with real-time pointer push and expanding shockwave ring animations.",
    "tags": [
      "canvas",
      "generative",
      "typography",
      "physics",
      "typescript"
    ],
    "tone": "amber",
    "dependencies": [],
    "previewImage": "/previews/raster-dynamics-wordmark.webp"
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
    "previewImage": "/previews/seo-agent-chat-ui.webp"
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
    "previewImage": "/previews/share-file-dialog.webp"
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
    "previewImage": "/previews/skeuomorphic-notebook.webp"
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
    "previewImage": "/previews/skeuomorphic-verify-email.webp"
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
    "previewImage": "/previews/skiper39.webp"
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
    "previewImage": "/previews/split-signup-modal.webp"
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
    "previewImage": "/previews/ticket-stub-footer.webp"
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
    "previewImage": "/previews/travel-booking-bento.webp"
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
    "previewImage": "/previews/velocity-spring-system.webp"
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
    "previewImage": "/previews/waves-shaders-homlu-ui.webp"
  },
  {
    "slug": "404-error-page-component",
    "title": "Offline Pixel 404 Error",
    "category": "Interactive Surfaces",
    "description": "An expressive retro-futuristic offline 404 error experience featuring a playable offline Dino runner, radar sweep animation, telemetry diagnostics, and tactile back-to-home actions.",
    "tags": [
      "interactive",
      "retro",
      "404",
      "canvas",
      "game"
    ],
    "tone": "slate",
    "dependencies": [
      "lucide-react",
      "clsx",
      "tailwind-merge"
    ],
    "previewImage": "/previews/404-error-page-component.png"
  },
  {
    "slug": "create-from-the-heart",
    "title": "Create from the Heart",
    "category": "Interactive Surfaces",
    "description": "An editorial fine-art portfolio landing hero inspired by Oscar Wilde. Features calligraphic typography, fine art pastoral illustration, interactive audio synthesis, and an animated newsletter studio dock.",
    "tags": [
      "editorial",
      "fine-art",
      "typography",
      "audio",
      "creative"
    ],
    "tone": "peach",
    "dependencies": [
      "lucide-react",
      "clsx",
      "tailwind-merge"
    ],
    "previewImage": "/previews/create-from-the-heart.png"
  },
  {
    "slug": "design-with-soul",
    "title": "Design with Soul",
    "category": "Interactive Surfaces",
    "description": "An impressionist portfolio hero featuring a boy and his golden retriever on a grassy hill, calligraphic script typography, instant impasto painting style toggle, botanical animations, and parchment dock with services modal.",
    "tags": [
      "portfolio",
      "fine-art",
      "editorial",
      "modal",
      "accessibility"
    ],
    "tone": "amber",
    "dependencies": [
      "lucide-react",
      "clsx",
      "tailwind-merge"
    ],
    "previewImage": "/previews/design-with-soul.png"
  },
  {
    "slug": "genesis-onboarding-card",
    "title": "Genesis Onboarding Card",
    "category": "Skeuomorphic & 3D",
    "description": "A delightful pastel skeuomorphic onboarding card featuring a floating 3D unicorn avatar, interactive onboarding milestones, progress rings, and spring micro-interactions.",
    "tags": [
      "skeuomorphic",
      "onboarding",
      "cards",
      "3d",
      "pastel"
    ],
    "tone": "lavender",
    "dependencies": [
      "lucide-react",
      "clsx",
      "tailwind-merge"
    ],
    "previewImage": "/previews/genesis-onboarding-card.png"
  },
  {
    "slug": "house-savings-goal-card",
    "title": "House Savings Goal Card",
    "category": "Skeuomorphic & 3D",
    "description": "A tactile skeuomorphic savings goal card featuring an architectural Nordic A-frame cabin, live rupee (₹) target calculator, tactile milestone badges, and smooth progress filling physics.",
    "tags": [
      "fintech",
      "skeuomorphic",
      "cards",
      "savings",
      "tactile"
    ],
    "tone": "emerald",
    "dependencies": [
      "lucide-react",
      "clsx",
      "tailwind-merge"
    ],
    "previewImage": "/previews/house-savings-goal-card.png"
  },
  {
    "slug": "storybook-play-canvas",
    "title": "Storybook Play Canvas",
    "category": "Canvas & Generative",
    "description": "A whimsical storybook canvas scene featuring an animated storybook world, interactive character controls, spring-loaded audio stems, and layered parallax depth.",
    "tags": [
      "canvas",
      "storybook",
      "motion",
      "framer-motion",
      "generative"
    ],
    "tone": "rose",
    "dependencies": [
      "framer-motion",
      "lucide-react",
      "clsx",
      "tailwind-merge"
    ],
    "previewImage": "/previews/storybook-play-canvas.png"
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
