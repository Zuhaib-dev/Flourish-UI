import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://flourish-ui.vercel.app'),
  title: 'Etched Accretion — Procedural WebGL2 Black Hole Engraving | Zuhaib Rashid — Flourish UI',
  description:
    'A black hole drawn like a classical copperplate engraving: a tilted accretion disk of hair-thin orbital streaks banded in crimson, a photon crown flaring off the horizon, and dark nebula banks cut out of contour lines. 100% procedural WebGL2 fragment shader.',
  keywords: [
    'etched accretion',
    'black hole shader',
    'accretion disk',
    'webgl2 shader',
    'procedural space',
    'engraving shader',
    'astrophysics simulation',
    'relativistic beaming',
    'gravitational lensing',
    'react black hole',
    'nextjs',
    'tailwind css',
    'shadcn ui',
    'Flourish UI',
    'Zuhaib Rashid',
  ],
  authors: [{ name: 'Zuhaib Rashid', url: 'https://www.zuhaibrashid.com' }],
  creator: 'Zuhaib Rashid',
  publisher: 'Flourish UI',
  category: 'Shaders & WebGL',
  alternates: {
    canonical: '/components/etched-accretion',
  },
  openGraph: {
    title: 'Etched Accretion | Flourish UI',
    description:
      'A black hole drawn like an engraving: tilted accretion disk with hair-thin orbital streaks, flaring photon crown, and contour line nebula banks.',
    url: '/components/etched-accretion',
    siteName: 'Flourish UI',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://raw.githubusercontent.com/Zuhaib-dev/Flourish-UI/main/etched-accretion/public/Preview.png',
        width: 1200,
        height: 630,
        alt: 'Etched Accretion Black Hole Component Preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Etched Accretion | Zuhaib Rashid — Flourish UI',
    description:
      'A black hole drawn like an engraving: tilted accretion disk with hair-thin orbital streaks, flaring photon crown, and contour line nebula banks.',
    creator: '@xuhaib_x9',
    images: [
      'https://raw.githubusercontent.com/Zuhaib-dev/Flourish-UI/main/etched-accretion/public/Preview.png',
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
  themeColor: '#030307',
  colorScheme: 'dark',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
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
              name: 'Etched Accretion',
              description:
                'A black hole drawn like a classical copperplate engraving: tilted accretion disk with hair-thin orbital streaks banded in crimson, photon crown flares, and dark nebula banks cut out of contour lines. Built with WebGL2.',
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
      <body className="bg-[#030307] text-[#e9e4df] antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
