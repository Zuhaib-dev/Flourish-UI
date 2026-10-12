import type { MetadataRoute } from 'next'
import { components } from '@/config/components'

const siteUrl = 'https://flourish-ui.vercel.app'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${siteUrl}/`, changeFrequency: 'weekly', priority: 1 },
    { url: `${siteUrl}/components`, changeFrequency: 'weekly', priority: 0.9 },
    ...components.map(({ slug, previewImage }) => ({
      url: `${siteUrl}/components/${slug}`,
      images: [`${siteUrl}${previewImage}`],
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ]
}
