import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://flourish-ui.vercel.app/components/letters-from-the-garden/sitemap.xml',
  }
}
