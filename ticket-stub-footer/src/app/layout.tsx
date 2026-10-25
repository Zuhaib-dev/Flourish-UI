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
  title: "Ticket Stub Perforated Footer | Zuhaib Rashid — Flourish UI",
  description: "A dark, hairline-ruled closing section for an ops product, with the brand printed on an orange ticket.",
  keywords: [
  "ticket-stub-footer",
  "ticket stub perforated footer",
  "interactive surfaces",
  "canvas",
  "typescript",
  "react component",
  "nextjs",
  "tailwind css",
  "Flourish UI",
  "Zuhaib Rashid"
],
  authors: [{ name: 'Zuhaib Rashid', url: 'https://www.zuhaibrashid.com' }],
  creator: 'Zuhaib Rashid',
  publisher: 'Flourish UI',
  category: "Interactive Surfaces",
  alternates: {
    canonical: '/components/ticket-stub-footer',
  },
  openGraph: {
    title: "Ticket Stub Perforated Footer | Flourish UI",
    description: "A dark, hairline-ruled closing section for an ops product, with the brand printed on an orange ticket.",
    url: '/components/ticket-stub-footer',
    siteName: 'Flourish UI',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://raw.githubusercontent.com/Zuhaib-dev/Flourish-UI/main/ticket-stub-footer/public/Preview.png',
        width: 1200,
        height: 630,
        alt: "Ticket Stub Perforated Footer Preview",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Ticket Stub Perforated Footer | Zuhaib Rashid — Flourish UI",
    description: "A dark, hairline-ruled closing section for an ops product, with the brand printed on an orange ticket.",
    creator: '@xuhaib_x9',
    images: [
      'https://raw.githubusercontent.com/Zuhaib-dev/Flourish-UI/main/ticket-stub-footer/public/Preview.png',
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
              name: "Ticket Stub Perforated Footer",
              description: "A dark, hairline-ruled closing section for an ops product, with the brand printed on an orange ticket.",
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
