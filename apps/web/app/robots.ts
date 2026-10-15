import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: ['/', '/api/', '/r/', '/developers', '/openapi.json', '/llms.txt', '/llms-full.txt', '/pricing.md', '/okf/'],
        disallow: ['/previews/'],
      },
      {
        userAgent: [
          'OAI-SearchBot',
          'GPTBot',
          'ChatGPT-User',
          'Claude-SearchBot',
          'Claude-User',
          'ClaudeBot',
          'Claude-Web',
          'PerplexityBot',
          'Perplexity-User',
          'Google-Extended',
          'Applebot-Extended',
          'cohere-ai',
        ],
        allow: ['/', '/api/', '/r/', '/developers', '/openapi.json', '/llms.txt', '/llms-full.txt', '/pricing.md', '/okf/'],
        disallow: ['/previews/'],
      },
    ],
    sitemap: 'https://flourish-ui.vercel.app/sitemap.xml',
    host: 'https://flourish-ui.vercel.app',
  }
}

