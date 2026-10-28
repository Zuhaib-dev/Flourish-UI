import type { MetadataRoute } from 'next'
import { categories, categorySlug, components } from '@/config/components'

const siteUrl = 'https://flourish-ui.vercel.app'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // Keep the sitemap focused on canonical, user-facing HTML pages. Feeds,
    // API responses, and agent documentation are discoverable through their
    // own endpoints and should not compete with the site's landing pages.
    { url: `${siteUrl}/` },
    { url: `${siteUrl}/components` },
    { url: `${siteUrl}/registry` },
    { url: `${siteUrl}/changelog` },
    { url: `${siteUrl}/developers` },
    { url: `${siteUrl}/about` },
    { url: `${siteUrl}/contact` },
    { url: `${siteUrl}/privacy` },
    ...categories.slice(1).map((category) => ({
      url: `${siteUrl}/categories/${categorySlug(category)}`,
    })),
    ...components.map(({ slug, previewImage }) => ({
      url: `${siteUrl}/components/${slug}`,
      images: [`${siteUrl}${previewImage}`],
    })),
  ]
}
