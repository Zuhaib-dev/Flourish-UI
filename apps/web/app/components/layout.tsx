import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Explore the Component Library',
  description: 'Browse and preview expressive React components for interfaces, dashboards, motion, and creative interactions.',
  alternates: { canonical: '/components' },
}

export default function ComponentsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children
}
