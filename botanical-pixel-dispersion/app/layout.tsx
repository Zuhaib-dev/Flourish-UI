import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://flourish-ui.vercel.app'),
  title: 'Botanical Pixel Dispersion — Yuni Yoshida Inspired | Zuhaib Rashid — Flourish UI',
  description:
    'An interactive, high-fidelity botanical mosaic pixel dispersion component inspired by the artwork of Yuni Yoshida. Features magnetic cursor physics, physical square tile dispersal, 3D elevation dynamics, and organic spring reassembly.',
  keywords: [
    'botanical pixel dispersion',
    'yuni yoshida inspired',
    'interactive pixel flower',
    'pixel mosaic art',
    'cursor repulsion physics',
    'framer motion canvas',
    'generative botanical ui',
    'creative coding',
    'react component',
    'nextjs',
    'tailwind css',
    'Flourish UI',
    'Zuhaib Rashid',
  ],
  authors: [{ name: 'Zuhaib Rashid', url: 'https://www.zuhaibrashid.com' }],
  creator: 'Zuhaib Rashid',
  publisher: 'Flourish UI',
  category: 'Interactive Creative Coding',
  alternates: {
    canonical: '/components/botanical-pixel-dispersion',
  },
  openGraph: {
    title: 'Botanical Pixel Dispersion | Flourish UI',
    description:
      'An interactive, high-fidelity botanical mosaic pixel dispersion component inspired by Yuni Yoshida. Move cursor to scatter, elevate, and reassemble physical flower pixel tiles with real-time spring physics.',
    url: '/components/botanical-pixel-dispersion',
    siteName: 'Flourish UI',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://raw.githubusercontent.com/Zuhaib-dev/Flourish-UI/main/botanical-pixel-dispersion/public/Preview.png',
        width: 1200,
        height: 630,
        alt: 'Botanical Pixel Dispersion Preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Botanical Pixel Dispersion | Zuhaib Rashid — Flourish UI',
    description:
      'An interactive botanical mosaic pixel dispersion component inspired by Yuni Yoshida. Move cursor to scatter, elevate, and reassemble physical flower pixel tiles with real-time spring physics.',
    creator: '@xuhaib_x9',
    images: [
      'https://raw.githubusercontent.com/Zuhaib-dev/Flourish-UI/main/botanical-pixel-dispersion/public/Preview.png',
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
  themeColor: '#f7f6f4',
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
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Space+Grotesk:wght@500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SoftwareSourceCode',
              name: 'Botanical Pixel Dispersion',
              description:
                'An interactive botanical mosaic pixel dispersion component inspired by Yuni Yoshida. Features magnetic cursor physics, physical square tile dispersal, 3D elevation dynamics, and organic spring reassembly.',
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
