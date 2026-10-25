import type { Metadata, Viewport } from 'next'

import { Analytics } from '@vercel/analytics/next'
import './globals.css'



export const metadata: Metadata = {
  metadataBase: new URL('https://flourish-ui.vercel.app'),
  title: "Kinetic Typography Hover | Zuhaib Rashid — Flourish UI",
  description: "A high-fidelity, interactive hover layout component designed for editorial portfolios and creative agencies.",
  keywords: [
  "kinetic-hover",
  "kinetic typography hover",
  "motion",
  "typescript",
  "motion & physics",
  "react component",
  "nextjs",
  "tailwind css",
  "Flourish UI",
  "Zuhaib Rashid"
],
  authors: [{ name: 'Zuhaib Rashid', url: 'https://www.zuhaibrashid.com' }],
  creator: 'Zuhaib Rashid',
  publisher: 'Flourish UI',
  category: "Motion & Physics",
  alternates: {
    canonical: '/components/kinetic-hover',
  },
  openGraph: {
    title: "Kinetic Typography Hover | Flourish UI",
    description: "A high-fidelity, interactive hover layout component designed for editorial portfolios and creative agencies.",
    url: '/components/kinetic-hover',
    siteName: 'Flourish UI',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://raw.githubusercontent.com/Zuhaib-dev/Flourish-UI/main/kinetic-hover/public/Preview.png',
        width: 1200,
        height: 630,
        alt: "Kinetic Typography Hover Preview",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Kinetic Typography Hover | Zuhaib Rashid — Flourish UI",
    description: "A high-fidelity, interactive hover layout component designed for editorial portfolios and creative agencies.",
    creator: '@xuhaib_x9',
    images: [
      'https://raw.githubusercontent.com/Zuhaib-dev/Flourish-UI/main/kinetic-hover/public/Preview.png',
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
  themeColor: '#0a0a0a',
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
              name: "Kinetic Typography Hover",
              description: "A high-fidelity, interactive hover layout component designed for editorial portfolios and creative agencies.",
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
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
