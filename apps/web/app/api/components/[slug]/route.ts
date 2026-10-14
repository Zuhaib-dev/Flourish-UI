import { type NextRequest, NextResponse } from 'next/server'
import { getComponent, installCommand } from '@/config/components'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization',
  'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
}

export async function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: corsHeaders })
}

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ slug: string }> },
) {
  const { slug } = await params
  const component = getComponent(slug)

  if (!component) {
    return NextResponse.json(
      { success: false, error: `Component with slug '${slug}' not found` },
      { status: 404, headers: corsHeaders },
    )
  }

  const registryUrl = `https://flourish-ui.vercel.app/r/${component.slug}.json`
  const installCommands = {
    pnpm: `pnpm dlx shadcn@latest add ${registryUrl}`,
    npm: `npx shadcn@latest add ${registryUrl}`,
    bun: `bunx --bun shadcn@latest add ${registryUrl}`,
    yarn: `yarn dlx shadcn@latest add ${registryUrl}`,
  }

  return NextResponse.json(
    {
      success: true,
      component: {
        ...component,
        installCommand: installCommand(component.slug),
        installCommands,
        registryUrl,
        pageUrl: `https://flourish-ui.vercel.app/components/${component.slug}`,
        previewUrl: `https://flourish-ui.vercel.app/previews/${component.slug}`,
        sourceApiUrl: `https://flourish-ui.vercel.app/api/components/${component.slug}/source`,
      },
    },
    { headers: corsHeaders },
  )
}
