import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from "next/font/google";
import './globals.css'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://flourish-ui.vercel.app'),
  title: "ASCII Cyberpunk Hero | Zuhaib Rashid — Flourish UI",
  description: "A dark, cyber-themed animated hero component featuring Unicorn Studio background rendering and typing aesthetics.",
  keywords: [
  "hero-ascii-one",
  "ascii cyberpunk hero",
  "canvas",
  "typescript",
  "canvas & generative",
  "react component",
  "nextjs",
  "tailwind css",
  "Flourish UI",
  "Zuhaib Rashid"
],
  authors: [{ name: 'Zuhaib Rashid', url: 'https://www.zuhaibrashid.com' }],
  creator: 'Zuhaib Rashid',
  publisher: 'Flourish UI',
  category: "Canvas & Generative",
  alternates: {
    canonical: '/components/hero-ascii-one',
  },
  openGraph: {
    title: "ASCII Cyberpunk Hero | Flourish UI",
    description: "A dark, cyber-themed animated hero component featuring Unicorn Studio background rendering and typing aesthetics.",
    url: '/components/hero-ascii-one',
    siteName: 'Flourish UI',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://raw.githubusercontent.com/Zuhaib-dev/Flourish-UI/main/hero-ascii-one/public/Preview.png',
        width: 1200,
        height: 630,
        alt: "ASCII Cyberpunk Hero Preview",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "ASCII Cyberpunk Hero | Zuhaib Rashid — Flourish UI",
    description: "A dark, cyber-themed animated hero component featuring Unicorn Studio background rendering and typing aesthetics.",
    creator: '@xuhaib_x9',
    images: [
      'https://raw.githubusercontent.com/Zuhaib-dev/Flourish-UI/main/hero-ascii-one/public/Preview.png',
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
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SoftwareSourceCode',
              name: "ASCII Cyberpunk Hero",
              description: "A dark, cyber-themed animated hero component featuring Unicorn Studio background rendering and typing aesthetics.",
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
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  )
}
