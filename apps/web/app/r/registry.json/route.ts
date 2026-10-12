import { NextResponse } from 'next/server'
import { components, registryCatalogItem } from '@/config/components'

export async function GET() {
  return NextResponse.json({
    $schema: 'https://ui.shadcn.com/schema/registry.json',
    name: 'flourish-ui',
    homepage: 'https://flourish-ui.dev',
    items: components.map(registryCatalogItem),
  }, {
    headers: { 'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400' },
  })
}
