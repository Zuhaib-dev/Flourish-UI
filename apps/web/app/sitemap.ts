import type { MetadataRoute } from 'next'
import { categories, categorySlug, components } from '@/config/components'

const siteUrl = 'https://flourish-ui.vercel.app'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${siteUrl}/`, changeFrequency: 'weekly', priority: 1 },
    { url: `${siteUrl}/components`, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${siteUrl}/registry`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${siteUrl}/changelog`, changeFrequency: 'weekly', priority: 0.65 },
    ...categories.slice(1).map((category) => ({ url: `${siteUrl}/categories/${categorySlug(category)}`, changeFrequency: 'weekly' as const, priority: 0.75 })),
    ...components.map(({ slug, previewImage }) => ({
      url: `${siteUrl}/components/${slug}`,
      images: [`${siteUrl}${previewImage}`],
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })),
  ]
}
