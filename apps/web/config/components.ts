export type ComponentEntry = {
  slug: string
  title: string
  category: string
  description: string
  tags: string[]
  tone: string
  dependencies: string[]
  code: string
}

export const categories = ['All components', 'Shaders & WebGL', 'Skeuomorphic & 3D', 'Dashboards & Bento', 'Interactive Inputs', 'Cards & Surfaces', 'Navigation & Menus']

export const components: ComponentEntry[] = [
  { slug: 'waves-shaders', title: 'Waves / Shaders', category: 'Shaders & WebGL', description: 'A liquid canvas that turns pointer movement into a living surface.', tags: ['shader', 'webgl', 'canvas'], tone: 'lime', dependencies: [], code: 'export function WavesShaders() {\n  return <div className="waves-shaders" aria-label="Animated liquid shader" />\n}' },
  { slug: 'admit-one', title: 'Admit One', category: 'Skeuomorphic & 3D', description: 'A physical ticket with layered depth, foil, and a little theatre.', tags: ['3d', 'ticket', 'motion'], tone: 'peach', dependencies: [], code: 'export function AdmitOne() {\n  return <article className="admit-one">Admit one</article>\n}' },
  { slug: 'command-deck', title: 'Command Deck', category: 'Dashboards & Bento', description: 'A compact command surface for systems that need a clear pulse.', tags: ['dashboard', 'bento', 'analytics'], tone: 'blue', dependencies: [], code: 'export function CommandDeck() {\n  return <section className="command-deck">Command Deck</section>\n}' },
  { slug: 'credit-card-form', title: 'Credit Card Form', category: 'Interactive Inputs', description: 'A tactile payment flow with live card preview and quiet feedback.', tags: ['form', 'input', 'payment'], tone: 'violet', dependencies: [], code: 'export function CreditCardForm() {\n  return <form className="credit-card-form">Card details</form>\n}' },
  { slug: 'orbit-tabs', title: 'Orbit Tabs', category: 'Navigation & Menus', description: 'A magnetic tab indicator that makes navigation feel physical.', tags: ['tabs', 'navigation', 'motion'], tone: 'yellow', dependencies: [], code: 'export function OrbitTabs() {\n  return <nav className="orbit-tabs">Overview · Activity · Settings</nav>\n}' },
  { slug: 'aurora-footer', title: 'Aurora Footer', category: 'Cards & Surfaces', description: 'A generous closing section that gives a product somewhere to land.', tags: ['footer', 'cta', 'layout'], tone: 'coral', dependencies: [], code: 'export function AuroraFooter() {\n  return <footer className="aurora-footer">Keep making</footer>\n}' },
]

export const getComponent = (slug: string) => components.find((component) => component.slug === slug)
export const stats = { components: components.length, categories: new Set(components.map((item) => item.category)).size, installMethods: 4 }
export const installCommand = (slug: string, manager = 'pnpm') => `${manager} dlx shadcn@latest add https://flourish-ui.dev/r/${slug}.json`

export const registryItem = (component: ComponentEntry) => ({
  $schema: 'https://ui.shadcn.com/schema/registry-item.json',
  name: component.slug,
  type: 'registry:ui',
  title: component.title,
  description: component.description,
  author: 'Zuhaib Rashid',
  dependencies: component.dependencies,
  devDependencies: [],
  registryDependencies: [],
  files: [{ path: `components/flourish/${component.slug}.tsx`, content: component.code, type: 'registry:ui' }],
})
