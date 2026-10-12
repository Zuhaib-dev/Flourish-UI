import { NextResponse } from 'next/server'
import { getComponent, registryItem } from '@/config/components'

export async function GET(_request: Request, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const component = getComponent(slug)
  if (!component) return NextResponse.json({ error: 'Component not found' }, { status: 404 })
  return NextResponse.json(registryItem(component), { headers: { 'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400' } })
}
