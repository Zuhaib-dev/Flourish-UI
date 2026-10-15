import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://flourish-ui.vercel.app'),
  title: 'House Savings Goal Card | Zuhaib Rashid — Flourish UI',
  description:
    'A minimalist, high-fidelity financial savings goal card with dynamic tick progress meter, automated yield details, and interactive transaction ledger.',
  keywords: [
    'house savings goal card',
    'fintech card',
    'savings progress tracker',
    'tick progress bar',
    'financial widget',
    'nordic design',
    'vanguard yield',
    'transaction ledger',
    'react component',
    'nextjs',
    'tailwind css',
    'Flourish UI',
    'Zuhaib Rashid',
  ],
  authors: [{ name: 'Zuhaib Rashid', url: 'https://www.zuhaibrashid.com' }],
  creator: 'Zuhaib Rashid',
  publisher: 'Flourish UI',
  category: 'Fintech & UI Design',
  alternates: {
    canonical: '/components/house-savings-goal-card',
  },
  openGraph: {
    title: 'House Savings Goal Card | Flourish UI',
    description:
      'A minimalist, high-fidelity financial savings goal card with dynamic tick progress meter, automated yield details, and interactive transaction ledger.',
    url: '/components/house-savings-goal-card',
    siteName: 'Flourish UI',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://raw.githubusercontent.com/Zuhaib-dev/Flourish-UI/main/house-savings-goal-card/public/Preview.png',
        width: 1200,
        height: 630,
        alt: 'House Savings Goal Card Preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'House Savings Goal Card | Zuhaib Rashid — Flourish UI',
    description:
      'Minimalist fintech savings goal card with tick progress meter, auto-invest yield info, and transactions.',
    creator: '@xuhaibx9',
    images: [
      'https://raw.githubusercontent.com/Zuhaib-dev/Flourish-UI/main/house-savings-goal-card/public/Preview.png',
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
  themeColor: '#e5e5e5',
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
              name: 'House Savings Goal Card',
              description:
                'A minimalist, high-fidelity financial savings goal card with dynamic tick progress meter, automated yield details, and interactive transaction ledger.',
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
      <body className="antialiased bg-[#e5e5e5]">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
