import { NextResponse } from 'next/server'
import { categories, categoryDescriptions, categorySlug, components } from '@/config/components'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
}

export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: corsHeaders })
}

export async function GET() {
  const activeCategories = categories.slice(1).map((name) => {
    const slug = categorySlug(name)
    const count = components.filter((c) => c.category === name).length
    return {
      name,
      slug,
      count,
      description: categoryDescriptions[name] ?? '',
      url: `https://flourish-ui.vercel.app/categories/${slug}`,
    }
  })

  return NextResponse.json(
    {
      success: true,
      totalCategories: activeCategories.length,
      totalComponents: components.length,
      categories: activeCategories,
    },
    { headers: corsHeaders },
  )
}
