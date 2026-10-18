import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://flourish-ui.vercel.app'),
  title: 'Sequel Frontier Footer | Zuhaib Rashid — Flourish UI',
  description:
    'An evocative cyanotype editorial footer with an antique American desert plain engraving, lone horse rider, and classical risograph typography.',
  keywords: [
    'sequel frontier footer',
    'cyanotype footer',
    'woodcut engraving footer',
    'editorial footer',
    'cobalt blue footer',
    'desert plain engraving',
    'lone rider',
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
    canonical: '/components/sequel-frontier-footer',
  },
  openGraph: {
    title: 'Sequel Frontier Footer | Flourish UI',
    description:
      'An evocative cyanotype editorial footer with an antique American desert plain engraving, lone horse rider, and classical risograph typography.',
    url: '/components/sequel-frontier-footer',
    siteName: 'Flourish UI',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://raw.githubusercontent.com/Zuhaib-dev/Flourish-UI/main/sequel-frontier-footer/public/Preview.png',
        width: 1200,
        height: 630,
        alt: 'Sequel Frontier Footer Preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sequel Frontier Footer | Zuhaib Rashid — Flourish UI',
    description:
      'An evocative cyanotype editorial footer with an antique American desert plain engraving, lone horse rider, and classical risograph typography.',
    creator: '@xuhaib_x9',
    images: [
      'https://raw.githubusercontent.com/Zuhaib-dev/Flourish-UI/main/sequel-frontier-footer/public/Preview.png',
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
  themeColor: '#0b3987',
  colorScheme: 'dark',
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
              name: 'Sequel Frontier Footer',
              description:
                'An evocative cyanotype editorial footer with an antique American desert plain engraving, lone horse rider, and classical risograph typography.',
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
      <body className="antialiased min-h-screen bg-[#0b3987] text-white selection:bg-white/20 selection:text-white">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
