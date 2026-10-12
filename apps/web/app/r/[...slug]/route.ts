import { NextResponse } from 'next/server'
import { getComponent } from '@/config/components'
import { getComponentSource } from '@/config/component-sources'
import { registryItem } from '@/config/registry'

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string[] }> },
) {
  const { slug } = await params
  if (slug.length !== 1) {
    return NextResponse.json({ error: 'Component not found' }, { status: 404 })
  }

  const requestedName = slug[0]
  const componentSlug = requestedName.endsWith('.json')
    ? requestedName.slice(0, -'.json'.length)
    : requestedName
  const component = getComponent(componentSlug)
  if (!component) return NextResponse.json({ error: 'Component not found' }, { status: 404 })
  const source = await getComponentSource(component.slug)
  if (!source) return NextResponse.json({ error: 'Component source not found' }, { status: 404 })

  return NextResponse.json(registryItem(component, source), {
    headers: {
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      'X-Robots-Tag': 'noindex, nofollow',
    },
  })
}
