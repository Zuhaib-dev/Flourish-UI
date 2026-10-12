import type { ComponentEntry } from './components'

export const registryItem = (component: ComponentEntry, code: string) => ({
  $schema: 'https://ui.shadcn.com/schema/registry-item.json',
  name: component.slug,
  type: 'registry:ui',
  title: component.title,
  description: component.description,
  author: 'Zuhaib Rashid <zuhaibrashid01@gmail.com>',
  dependencies: component.dependencies,
  devDependencies: [],
  registryDependencies: [],
  files: [
    {
      path: `components/flourish/${component.slug}.tsx`,
      target: `@components/flourish/${component.slug}.tsx`,
      content: code,
      type: 'registry:ui',
    },
  ],
  ...(component.slug === 'digital-signature-modal'
    ? {
        cssVars: {
          theme: {
            'color-background': '#f8f9fa',
            'color-surface-container-highest': '#e1e3e4',
            'color-surface-container-low': '#f3f4f5',
            'color-surface-container-lowest': '#ffffff',
            'color-surface-container-high': '#e7e8e9',
            'color-surface-container': '#edeeef',
            'color-primary': '#000000',
            'color-secondary': '#555f6d',
            'color-on-surface': '#191c1d',
            'color-on-primary': '#ffffff',
            'color-outline-variant': '#c6c6cd',
            'spacing-space-md': '1rem',
            'spacing-space-xl': '2rem',
            'spacing-space-sm': '0.5rem',
            'font-headline-lg': 'ui-sans-serif, system-ui, sans-serif',
            'font-body-sm': 'ui-sans-serif, system-ui, sans-serif',
            'font-label-lg': 'ui-sans-serif, system-ui, sans-serif',
            'font-label-md': 'ui-sans-serif, system-ui, sans-serif',
          },
        },
      }
    : {}),
})
