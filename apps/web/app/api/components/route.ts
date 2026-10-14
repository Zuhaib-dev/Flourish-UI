import { type NextRequest, NextResponse } from 'next/server'
import { categories, components, installCommand } from '@/config/components'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
}

export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: corsHeaders })
}

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const categoryParam = searchParams.get('category')
  const tagParam = searchParams.get('tag')
  const searchParam = searchParams.get('search') ?? searchParams.get('q')
  const limitParam = searchParams.get('limit')
  const offsetParam = searchParams.get('offset')

  let results = [...components]

  if (categoryParam && categoryParam !== 'All components') {
    const normalized = categoryParam.toLowerCase().trim()
    results = results.filter((c) => c.category.toLowerCase() === normalized)
  }

  if (tagParam) {
    const normalizedTag = tagParam.toLowerCase().trim()
    results = results.filter((c) => c.tags.some((t) => t.toLowerCase() === normalizedTag))
  }

  if (searchParam) {
    const query = searchParam.toLowerCase().trim()
    results = results.filter(
      (c) =>
        c.title.toLowerCase().includes(query) ||
        c.description.toLowerCase().includes(query) ||
        c.category.toLowerCase().includes(query) ||
        c.tags.some((t) => t.toLowerCase().includes(query)),
    )
  }

  const total = results.length
  const offset = offsetParam ? Math.max(0, parseInt(offsetParam, 10) || 0) : 0
  const limit = limitParam ? Math.max(1, parseInt(limitParam, 10) || total) : total

  const paginated = results.slice(offset, offset + limit).map((c) => ({
    ...c,
    installCommand: installCommand(c.slug),
    registryUrl: `https://flourish-ui.vercel.app/r/${c.slug}.json`,
    pageUrl: `https://flourish-ui.vercel.app/components/${c.slug}`,
    previewUrl: `https://flourish-ui.vercel.app/previews/${c.slug}`,
    sourceApiUrl: `https://flourish-ui.vercel.app/api/components/${c.slug}/source`,
  }))

  return NextResponse.json(
    {
      success: true,
      total,
      count: paginated.length,
      offset,
      limit,
      categories: categories.slice(1),
      components: paginated,
    },
    { headers: corsHeaders },
  )
}
