import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://flourish-ui.vercel.app'),
  title: 'Shelter Skin — Meet The Team Dossier | Zuhaib Rashid — Flourish UI',
  description:
    'A tactile, editorial questionnaire dossier card and interactive modal component for skincare and fashion brands featuring a clipped Polaroid, authentic pen handwriting, hand-drawn doodles, and rich paper textures.',
  keywords: [
    'shelter skin',
    'meet the team',
    'team dossier',
    'polaroid card',
    'paperclip ui',
    'questionnaire card',
    'tactile editorial ui',
    'handwritten font component',
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
    canonical: '/components/shelter-skin-team-dossier',
  },
  openGraph: {
    title: 'Shelter Skin — Meet The Team Dossier | Flourish UI',
    description:
      'A tactile, editorial questionnaire dossier card and interactive modal component for skincare and fashion brands featuring a clipped Polaroid, authentic pen handwriting, and hand-drawn doodles.',
    url: '/components/shelter-skin-team-dossier',
    siteName: 'Flourish UI',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://raw.githubusercontent.com/Zuhaib-dev/Flourish-UI/main/shelter-skin-team-dossier/public/Preview.png',
        width: 1200,
        height: 630,
        alt: 'Shelter Skin — Meet The Team Dossier Preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Shelter Skin — Meet The Team Dossier | Zuhaib Rashid — Flourish UI',
    description:
      'A tactile, editorial questionnaire dossier card and interactive modal component for skincare and fashion brands featuring a clipped Polaroid, authentic pen handwriting, and hand-drawn doodles.',
    creator: '@xuhaib_x9',
    images: [
      'https://raw.githubusercontent.com/Zuhaib-dev/Flourish-UI/main/shelter-skin-team-dossier/public/Preview.png',
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
  themeColor: '#9ebfd8',
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Caveat:wght@500;600;700&family=Patrick+Hand&family=Playfair+Display:ital,wght@0,400..900;1,400&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Space+Mono:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SoftwareSourceCode',
              name: 'Shelter Skin — Meet The Team Dossier',
              description:
                'A tactile, editorial questionnaire dossier card and interactive modal component for skincare and fashion brands featuring a clipped Polaroid, authentic pen handwriting, and hand-drawn doodles.',
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
