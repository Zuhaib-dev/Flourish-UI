import { getComponent } from '@/config/components'
import { getComponentSource } from '@/config/component-sources'

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params
  if (!getComponent(slug)) return new Response('Component not found', { status: 404 })

  const source = await getComponentSource(slug)
  if (!source) return new Response('Component source not found', { status: 404 })

  return new Response(source, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=0, s-maxage=86400, stale-while-revalidate=604800',
    },
  })
}
