import type { MetadataRoute } from 'next'
import { categories, categorySlug, components } from '@/config/components'

const siteUrl = 'https://flourish-ui.vercel.app'

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date('2026-10-25T00:00:00.000Z')

  return [
    { url: `${siteUrl}/`, lastModified: currentDate, changeFrequency: 'daily', priority: 1.0 },
    { url: `${siteUrl}/components`, lastModified: currentDate, changeFrequency: 'daily', priority: 0.95 },
    { url: `${siteUrl}/registry`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${siteUrl}/changelog`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${siteUrl}/developers`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${siteUrl}/about`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteUrl}/contact`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${siteUrl}/feed.xml`, lastModified: currentDate, changeFrequency: 'daily', priority: 0.8 },
    { url: `${siteUrl}/openapi.json`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.75 },
    { url: `${siteUrl}/pricing.md`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${siteUrl}/AGENTS.md`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${siteUrl}/llms.txt`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${siteUrl}/llms-full.txt`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${siteUrl}/okf/index.md`, lastModified: currentDate, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${siteUrl}/privacy`, lastModified: currentDate, changeFrequency: 'monthly', priority: 0.6 },
    ...categories.slice(1).map((category) => ({
      url: `${siteUrl}/categories/${categorySlug(category)}`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.85,
    })),
    ...components.map(({ slug, previewImage }) => ({
      url: `${siteUrl}/components/${slug}`,
      images: [`${siteUrl}${previewImage}`],
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.85,
    })),
  ]
}
