import { components } from '@/config/components'

export const dynamic = 'force-static'
export const revalidate = 86400

const siteUrl = 'https://flourish-ui.vercel.app'

function escapeXml(unsafe: string): string {
  return unsafe.replace(/[<>&'"]/g, (c) => {
    switch (c) {
      case '<':
        return '&lt;'
      case '>':
        return '&gt;'
      case '&':
        return '&amp;'
      case '\'':
        return '&apos;'
      case '"':
        return '&quot;'
      default:
        return c
    }
  })
}

export async function GET() {
  const pubDate = new Date('2026-10-25T00:00:00Z').toUTCString()

  const items = components
    .map((c) => {
      const itemUrl = `${siteUrl}/components/${c.slug}`
      const imageUrl = `${siteUrl}${c.previewImage}`
      return `    <item>
      <title>${escapeXml(c.title)}</title>
      <link>${itemUrl}</link>
      <guid isPermaLink="true">${itemUrl}</guid>
      <description>${escapeXml(c.description)}</description>
      <category>${escapeXml(c.category)}</category>
      <pubDate>${pubDate}</pubDate>
      <enclosure url="${imageUrl}" type="image/webp" />
    </item>`
    })
    .join('\n')

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Flourish UI — Expressive React Components</title>
    <link>${siteUrl}</link>
    <description>An open-source collection of 50+ expressive React and Next.js components with live previews, WebGL shaders, tactile skeuomorphism, and shadcn CLI registry support.</description>
    <language>en-US</language>
    <lastBuildDate>${pubDate}</lastBuildDate>
    <atom:link href="${siteUrl}/feed.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>`

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400, stale-while-revalidate=86400',
    },
  })
}
