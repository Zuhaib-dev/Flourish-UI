import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://flourish-ui.vercel.app'),
  title: 'Letters from the garden | Zuhaib Rashid — Flourish UI',
  description:
    'An idyllic, cottagecore editorial garden footer and newsletter component with interactive clothesline sway, floating wildflower petals, and classical typography.',
  keywords: [
    'letters from the garden',
    'cottagecore footer',
    'botanical newsletter',
    'clothesline animation',
    'editorial footer',
    'linen laundry',
    'classical serif',
    'react component',
    'nextjs',
    'tailwind css',
    'Flourish UI',
    'Zuhaib Rashid',
  ],
  authors: [{ name: 'Zuhaib Rashid', url: 'https://www.zuhaibrashid.com' }],
  creator: 'Zuhaib Rashid',
  publisher: 'Flourish UI',
  category: 'Editorial & UI Design',
  alternates: {
    canonical: '/components/letters-from-the-garden',
  },
  openGraph: {
    title: 'Letters from the garden | Flourish UI',
    description:
      'An idyllic, cottagecore editorial garden footer and newsletter component with interactive clothesline sway, floating wildflower petals, and classical typography.',
    url: '/components/letters-from-the-garden',
    siteName: 'Flourish UI',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://raw.githubusercontent.com/Zuhaib-dev/Flourish-UI/main/letters-from-the-garden/public/Preview.png',
        width: 1200,
        height: 630,
        alt: 'Letters from the garden — Editorial Footer Preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Letters from the garden | Zuhaib Rashid — Flourish UI',
    description:
      'An idyllic, cottagecore editorial garden footer and newsletter component with interactive clothesline sway and classical typography.',
    creator: '@xuhaib_x9',
    images: [
      'https://raw.githubusercontent.com/Zuhaib-dev/Flourish-UI/main/letters-from-the-garden/public/Preview.png',
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
  themeColor: '#f6efe7',
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
              name: 'Letters from the garden',
              description:
                'An idyllic, cottagecore editorial garden footer and newsletter component with interactive clothesline sway, floating wildflower petals, and classical typography.',
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
      <body className="antialiased min-h-screen bg-[#f6efe7] text-[#323c33] selection:bg-[#426149]/15 selection:text-[#426149]">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
