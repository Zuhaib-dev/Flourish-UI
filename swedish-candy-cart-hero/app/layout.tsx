import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://flourish-ui.vercel.app'),
  title: 'The Swedish Candy Cart of Your Dreams | Nectar — Flourish UI',
  description:
    'An artisanal, vintage-inspired Swedish candy cart hero section featuring whimsical editorial typography, interactive floating sweets physics, and a boutique mobile cart showcase.',
  keywords: [
    'swedish candy cart hero',
    'nectar candy',
    'vintage candy cart',
    'piaggio ape food truck',
    'swedish pick and mix',
    'editorial hero section',
    'whimsical design',
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
    canonical: '/components/swedish-candy-cart-hero',
  },
  openGraph: {
    title: 'The Swedish Candy Cart of Your Dreams | Flourish UI',
    description:
      'An artisanal, vintage-inspired Swedish candy cart hero section featuring whimsical editorial typography, interactive floating sweets physics, and a boutique mobile cart showcase.',
    url: '/components/swedish-candy-cart-hero',
    siteName: 'Flourish UI',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://raw.githubusercontent.com/Zuhaib-dev/Flourish-UI/main/swedish-candy-cart-hero/public/Preview.png',
        width: 1200,
        height: 630,
        alt: 'The Swedish Candy Cart of Your Dreams Preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Swedish Candy Cart of Your Dreams | Zuhaib Rashid — Flourish UI',
    description:
      'An artisanal, vintage-inspired Swedish candy cart hero section featuring whimsical editorial typography and boutique mobile cart showcase.',
    creator: '@xuhaib_x9',
    images: [
      'https://raw.githubusercontent.com/Zuhaib-dev/Flourish-UI/main/swedish-candy-cart-hero/public/Preview.png',
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
  themeColor: '#fff5f7',
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
              name: 'The Swedish Candy Cart of Your Dreams',
              description:
                'An artisanal, vintage-inspired Swedish candy cart hero section featuring whimsical editorial typography, interactive floating sweets physics, and a boutique mobile cart showcase.',
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
