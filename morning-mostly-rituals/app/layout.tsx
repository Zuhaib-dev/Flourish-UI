import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://flourish-ui.vercel.app'),
  title: 'Morning, Mostly — Five Small Rituals | Zuhaib Rashid — Flourish UI',
  description:
    'An evocative, mid-century modern risograph editorial gallery and interactive timeline component chronicling morning rituals with fluid horizontal scroll physics.',
  keywords: [
    'morning mostly rituals',
    'five small rituals',
    'risograph editorial',
    'horizontal scroll gallery',
    'timeline scrubber',
    'mid century graphic design',
    'tubik studio style',
    'interactive editorial',
    'react component',
    'nextjs',
    'tailwind css',
    'framer motion',
    'Flourish UI',
    'Zuhaib Rashid',
  ],
  authors: [{ name: 'Zuhaib Rashid', url: 'https://www.zuhaibrashid.com' }],
  creator: 'Zuhaib Rashid',
  publisher: 'Flourish UI',
  category: 'Editorial & UI Design',
  alternates: {
    canonical: '/components/morning-mostly-rituals',
  },
  openGraph: {
    title: 'Morning, Mostly — Five Small Rituals | Flourish UI',
    description:
      'An evocative, mid-century modern risograph editorial gallery and interactive timeline component chronicling morning rituals with fluid horizontal scroll physics.',
    url: '/components/morning-mostly-rituals',
    siteName: 'Flourish UI',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://raw.githubusercontent.com/Zuhaib-dev/Flourish-UI/main/morning-mostly-rituals/public/Preview.png',
        width: 1200,
        height: 630,
        alt: 'Morning, Mostly — Five Small Rituals Preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Morning, Mostly — Five Small Rituals | Zuhaib Rashid — Flourish UI',
    description:
      'An evocative, mid-century modern risograph editorial gallery and interactive timeline component chronicling morning rituals with fluid horizontal scroll physics.',
    creator: '@xuhaib_x9',
    images: [
      'https://raw.githubusercontent.com/Zuhaib-dev/Flourish-UI/main/morning-mostly-rituals/public/Preview.png',
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
}

export const viewport: Viewport = {
  themeColor: '#eae1d3',
  colorScheme: 'light',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SoftwareSourceCode',
              name: 'Morning, Mostly — Five Small Rituals',
              description:
                'An evocative, mid-century modern risograph editorial gallery and interactive timeline component chronicling morning rituals with fluid horizontal scroll physics.',
              programmingLanguage: 'TypeScript',
              author: {
                '@type': 'Person',
                name: 'Zuhaib Rashid',
                url: 'https://www.zuhaibrashid.com',
                sameAs: [
                  'https://github.com/Zuhaib-dev',
                  'https://www.linkedin.com/in/zuhaib-rashid-661345318/',
                  'https://x.com/xuhaib_x9',
                ],
              },
            }),
          }}
        />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
