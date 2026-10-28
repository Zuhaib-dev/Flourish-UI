import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://flourish-ui.vercel.app'),
  title: 'Liquid Glass Navbar — Fluid WebGL Waterline Navigation | Zuhaib Rashid — Flourish UI',
  description:
    'A fluid WebGL liquid glass navigation bar component featuring dynamic water droplet physics, surface tension stretching, meniscus cursor attraction, interactive splash ripple waves, and micro-animated scenes.',
  keywords: [
    'liquid glass navbar',
    'waterline navigation',
    'webgl water shader',
    'liquid navigation bar',
    'fluid glass navbar',
    'glassmorphism menu',
    'water droplet physics',
    'reactive navigation',
    'react navbar',
    'nextjs',
    'tailwind css',
    'shadcn ui',
    'Flourish UI',
    'Zuhaib Rashid',
  ],
  authors: [{ name: 'Zuhaib Rashid', url: 'https://www.zuhaibrashid.com' }],
  creator: 'Zuhaib Rashid',
  publisher: 'Flourish UI',
  category: 'Navigation & Fluid WebGL',
  alternates: {
    canonical: '/components/liquid-glass-navbar',
  },
  openGraph: {
    title: 'Liquid Glass Navbar | Flourish UI',
    description:
      'A fluid WebGL liquid glass navigation bar with stretching droplet physics, meniscus cursor physics, interactive ripples, and micro-animated icons.',
    url: '/components/liquid-glass-navbar',
    siteName: 'Flourish UI',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://raw.githubusercontent.com/Zuhaib-dev/Flourish-UI/main/liquid-glass-navbar/public/Preview.png',
        width: 1200,
        height: 630,
        alt: 'Liquid Glass Navbar Component Preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Liquid Glass Navbar | Zuhaib Rashid — Flourish UI',
    description:
      'A fluid WebGL liquid glass navigation bar with stretching water droplet physics, meniscus cursor physics, and micro-animated icon scenes.',
    creator: '@xuhaib_x9',
    images: [
      'https://raw.githubusercontent.com/Zuhaib-dev/Flourish-UI/main/liquid-glass-navbar/public/Preview.png',
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
  themeColor: '#dcebf5',
  colorScheme: 'light dark',
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
              name: 'Liquid Glass Navbar',
              description:
                'A fluid WebGL liquid glass navigation bar component featuring dynamic water droplet physics, surface tension stretching, meniscus cursor attraction, interactive splash ripple waves, and micro-animated scenes.',
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
