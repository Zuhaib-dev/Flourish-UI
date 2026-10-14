import type { MetadataRoute } from 'next'
import { categories, categorySlug, components } from '@/config/components'

const siteUrl = 'https://flourish-ui.vercel.app'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  return [
    { url: `${siteUrl}/`, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${siteUrl}/components`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${siteUrl}/registry`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${siteUrl}/changelog`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    ...categories.slice(1).map((category) => ({
      url: `${siteUrl}/categories/${categorySlug(category)}`,
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.75,
    })),
    ...components.map(({ slug, previewImage }) => ({
      url: `${siteUrl}/components/${slug}`,
      images: [`${siteUrl}${previewImage}`],
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    })),
  ]
}
