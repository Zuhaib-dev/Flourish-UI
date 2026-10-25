import type { Metadata, Viewport } from 'next'
import { Inter } from "next/font/google";
import './globals.css'

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://flourish-ui.vercel.app'),
  title: "Property Comparison Matrix | Zuhaib Rashid — Flourish UI",
  description: "A highly interactive, fluid property comparison dashboard featuring soft skeuomorphic design and smooth `framer-motion` state transitions, built for the Flourish UI component library.",
  keywords: [
  "property-comparison-dashboard",
  "property comparison matrix",
  "dashboards",
  "motion",
  "threejs",
  "typescript",
  "dashboards & editors",
  "react component",
  "nextjs",
  "tailwind css",
  "Flourish UI",
  "Zuhaib Rashid"
],
  authors: [{ name: 'Zuhaib Rashid', url: 'https://www.zuhaibrashid.com' }],
  creator: 'Zuhaib Rashid',
  publisher: 'Flourish UI',
  category: "Dashboards & Editors",
  alternates: {
    canonical: '/components/property-comparison-dashboard',
  },
  openGraph: {
    title: "Property Comparison Matrix | Flourish UI",
    description: "A highly interactive, fluid property comparison dashboard featuring soft skeuomorphic design and smooth `framer-motion` state transitions, built for the Flourish UI component library.",
    url: '/components/property-comparison-dashboard',
    siteName: 'Flourish UI',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://raw.githubusercontent.com/Zuhaib-dev/Flourish-UI/main/property-comparison-dashboard/public/Preview.png',
        width: 1200,
        height: 630,
        alt: "Property Comparison Matrix Preview",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Property Comparison Matrix | Zuhaib Rashid — Flourish UI",
    description: "A highly interactive, fluid property comparison dashboard featuring soft skeuomorphic design and smooth `framer-motion` state transitions, built for the Flourish UI component library.",
    creator: '@xuhaib_x9',
    images: [
      'https://raw.githubusercontent.com/Zuhaib-dev/Flourish-UI/main/property-comparison-dashboard/public/Preview.png',
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
              name: "Property Comparison Matrix",
              description: "A highly interactive, fluid property comparison dashboard featuring soft skeuomorphic design and smooth `framer-motion` state transitions, built for the Flourish UI component library.",
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
      <body className={`${inter.variable} font-sans bg-[#f7f6f0] text-neutral-800 antialiased h-screen overflow-hidden`}>
        {children}
      </body>
    </html>
  )
}
