import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://flourish-ui.vercel.app'),
  title: 'Product Rail Gallery — Interactive Clothing Rail Hero | Zuhaib Rashid — Flourish UI',
  description:
    'An interactive, physically-simulated clothing rail hero gallery with harmonic pendulum swing physics, 3D perspective rotation, hanger drape inertia, drag collision dynamics, and high-fashion editorial lightbox inspection.',
  keywords: [
    'product rail gallery',
    'clothing rail hero',
    'clothing rack interactive',
    'pendulum swing physics',
    '3d garment rotation',
    'interactive fashion gallery',
    'e-commerce hero component',
    'react clothing rail',
    'nextjs',
    'tailwind css',
    'shadcn ui',
    'Flourish UI',
    'Zuhaib Rashid',
  ],
  authors: [{ name: 'Zuhaib Rashid', url: 'https://www.zuhaibrashid.com' }],
  creator: 'Zuhaib Rashid',
  publisher: 'Flourish UI',
  category: 'E-commerce & Interactive Hero',
  alternates: {
    canonical: '/components/product-rail-gallery',
  },
  openGraph: {
    title: 'Product Rail Gallery | Flourish UI',
    description:
      'An interactive, physically-simulated clothing rail hero gallery with harmonic pendulum swing physics, 3D perspective rotation, hanger drape inertia, and editorial lightbox inspection.',
    url: '/components/product-rail-gallery',
    siteName: 'Flourish UI',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://raw.githubusercontent.com/Zuhaib-dev/Flourish-UI/main/product-rail-gallery/public/Preview.png',
        width: 1200,
        height: 630,
        alt: 'Product Rail Gallery Component Preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Product Rail Gallery | Zuhaib Rashid — Flourish UI',
    description:
      'Interactive clothing rail hero with harmonic pendulum physics, hanger slide collision, 3D rotation, and lightbox inspection.',
    creator: '@xuhaib_x9',
    images: [
      'https://raw.githubusercontent.com/Zuhaib-dev/Flourish-UI/main/product-rail-gallery/public/Preview.png',
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
  themeColor: '#fbfbf9',
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
              name: 'Product Rail Gallery',
              description:
                'An interactive, physically-simulated clothing rail hero gallery with harmonic pendulum swing physics, 3D perspective rotation, hanger drape inertia, drag collision dynamics, and high-fashion editorial lightbox inspection.',
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
