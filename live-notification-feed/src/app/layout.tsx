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
  title: "Live Notification Event Feed | Zuhaib Rashid — Flourish UI",
  description: "A premium, interactive live notification feed designed for real-time dashboards and product demos. Built with Next.js, Framer Motion (conceptually adapted via native animations), and Tailwind CSS.",
  keywords: [
  "live-notification-feed",
  "live notification event feed",
  "interactive surfaces",
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
    canonical: '/components/live-notification-feed',
  },
  openGraph: {
    title: "Live Notification Event Feed | Flourish UI",
    description: "A premium, interactive live notification feed designed for real-time dashboards and product demos. Built with Next.js, Framer Motion (conceptually adapted via native animations), and Tailwind CSS.",
    url: '/components/live-notification-feed',
    siteName: 'Flourish UI',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://raw.githubusercontent.com/Zuhaib-dev/Flourish-UI/main/live-notification-feed/public/Preview.png',
        width: 1200,
        height: 630,
        alt: "Live Notification Event Feed Preview",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Live Notification Event Feed | Zuhaib Rashid — Flourish UI",
    description: "A premium, interactive live notification feed designed for real-time dashboards and product demos. Built with Next.js, Framer Motion (conceptually adapted via native animations), and Tailwind CSS.",
    creator: '@xuhaib_x9',
    images: [
      'https://raw.githubusercontent.com/Zuhaib-dev/Flourish-UI/main/live-notification-feed/public/Preview.png',
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
  themeColor: '#faf9f6',
  colorScheme: 'light',
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
              name: "Live Notification Event Feed",
              description: "A premium, interactive live notification feed designed for real-time dashboards and product demos. Built with Next.js, Framer Motion (conceptually adapted via native animations), and Tailwind CSS.",
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
