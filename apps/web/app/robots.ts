import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/', '/api/', '/r/', '/developers', '/openapi.json', '/llms.txt'],
        disallow: ['/previews/'],
      },
      {
        userAgent: [
          'GPTBot',
          'ChatGPT-User',
          'Claude-Web',
          'ClaudeBot',
          'PerplexityBot',
          'Google-Extended',
          'Applebot-Extended',
          'cohere-ai',
          'OAI-SearchBot',
        ],
        allow: ['/', '/api/', '/r/', '/developers', '/openapi.json', '/llms.txt'],
        disallow: ['/previews/'],
      },
    ],
    sitemap: 'https://flourish-ui.vercel.app/sitemap.xml',
    host: 'https://flourish-ui.vercel.app',
  }
}

