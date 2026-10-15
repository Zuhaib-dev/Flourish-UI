import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://flourish-ui.vercel.app'),
  title: 'Design with Soul — Mira Hayes Portfolio Hero | Flourish UI',
  description:
    'An impressionist, fine-art portfolio hero section featuring painterly canvas aesthetics, bespoke studio services, and an interactive studio notes newsletter dock.',
  keywords: [
    'design with soul',
    'mira hayes',
    'portfolio hero section',
    'impressionist design',
    'fine art web design',
    'artisan portfolio',
    'bespoke studio',
    'botanical design',
    'editorial typography',
    'react component',
    'nextjs',
    'tailwind css',
    'Flourish UI',
    'Zuhaib Rashid',
  ],
  authors: [{ name: 'Zuhaib Rashid', url: 'https://www.zuhaibrashid.com' }],
  creator: 'Zuhaib Rashid',
  publisher: 'Flourish UI',
  category: 'Portfolio & Fine Art UI Design',
  alternates: {
    canonical: '/components/design-with-soul',
  },
  openGraph: {
    title: 'Design with Soul — Mira Hayes Portfolio Hero | Flourish UI',
    description:
      'An impressionist, fine-art portfolio hero section featuring painterly canvas aesthetics, bespoke studio services, and an interactive studio notes newsletter dock.',
    url: '/components/design-with-soul',
    siteName: 'Flourish UI',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://raw.githubusercontent.com/Zuhaib-dev/Flourish-UI/main/design-with-soul/public/Preview.png',
        width: 1200,
        height: 630,
        alt: 'Design with Soul Portfolio Hero Preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Design with Soul — Mira Hayes Portfolio Hero | Zuhaib Rashid — Flourish UI',
    description:
      'An impressionist, fine-art portfolio hero section featuring painterly canvas aesthetics, bespoke studio services, and an interactive studio notes newsletter dock.',
    creator: '@xuhaib_x9',
    images: [
      'https://raw.githubusercontent.com/Zuhaib-dev/Flourish-UI/main/design-with-soul/public/Preview.png',
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
  themeColor: '#6da2c4',
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
              name: 'Design with Soul — Portfolio Hero',
              description:
                'An impressionist, fine-art portfolio hero section featuring painterly canvas aesthetics, bespoke studio services, and an interactive studio notes newsletter dock.',
              programmingLanguage: 'TypeScript',
              author: {
                '@type': 'Person',
                name: 'Zuhaib Rashid',
                url: 'https://www.zuhaibrashid.com',
                sameAs: [
                  'https://github.com/Zuhaib-dev',
                  'https://x.com/xuhaib_x9',
                  'https://www.linkedin.com/in/zuhaib-rashid-661345318/',
                ],
              },
            }),
          }}
        />
      </head>
      <body className="antialiased bg-[#6da2c4] text-[#221e1a]">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
