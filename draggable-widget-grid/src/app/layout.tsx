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
  title: "Draggable Widget Observability Grid | Zuhaib Rashid — Flourish UI",
  description: "A beautiful, draggable grid of widgets that can be rearranged seamlessly using `motion/react`.",
  keywords: [
  "draggable-widget-grid",
  "draggable widget observability grid",
  "dashboards",
  "motion",
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
    canonical: '/components/draggable-widget-grid',
  },
  openGraph: {
    title: "Draggable Widget Observability Grid | Flourish UI",
    description: "A beautiful, draggable grid of widgets that can be rearranged seamlessly using `motion/react`.",
    url: '/components/draggable-widget-grid',
    siteName: 'Flourish UI',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://raw.githubusercontent.com/Zuhaib-dev/Flourish-UI/main/draggable-widget-grid/public/Preview.png',
        width: 1200,
        height: 630,
        alt: "Draggable Widget Observability Grid Preview",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Draggable Widget Observability Grid | Zuhaib Rashid — Flourish UI",
    description: "A beautiful, draggable grid of widgets that can be rearranged seamlessly using `motion/react`.",
    creator: '@xuhaib_x9',
    images: [
      'https://raw.githubusercontent.com/Zuhaib-dev/Flourish-UI/main/draggable-widget-grid/public/Preview.png',
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
              name: "Draggable Widget Observability Grid",
              description: "A beautiful, draggable grid of widgets that can be rearranged seamlessly using `motion/react`.",
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
