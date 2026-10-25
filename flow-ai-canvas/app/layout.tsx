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
  title: "FlowAI Node Workflow Canvas | Zuhaib Rashid — Flourish UI",
  description: "An ultra-premium node-based visual workflow editor interface. Built with an intricate left sidebar, an interactive node library panel, and a beautifully designed dot-grid canvas with floating toolbars and a minimap.",
  keywords: [
  "flow-ai-canvas",
  "flowai node workflow canvas",
  "dashboards",
  "motion",
  "canvas",
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
    canonical: '/components/flow-ai-canvas',
  },
  openGraph: {
    title: "FlowAI Node Workflow Canvas | Flourish UI",
    description: "An ultra-premium node-based visual workflow editor interface. Built with an intricate left sidebar, an interactive node library panel, and a beautifully designed dot-grid canvas with floating toolbars and a minimap.",
    url: '/components/flow-ai-canvas',
    siteName: 'Flourish UI',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://raw.githubusercontent.com/Zuhaib-dev/Flourish-UI/main/flow-ai-canvas/public/Preview.png',
        width: 1200,
        height: 630,
        alt: "FlowAI Node Workflow Canvas Preview",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "FlowAI Node Workflow Canvas | Zuhaib Rashid — Flourish UI",
    description: "An ultra-premium node-based visual workflow editor interface. Built with an intricate left sidebar, an interactive node library panel, and a beautifully designed dot-grid canvas with floating toolbars and a minimap.",
    creator: '@xuhaib_x9',
    images: [
      'https://raw.githubusercontent.com/Zuhaib-dev/Flourish-UI/main/flow-ai-canvas/public/Preview.png',
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
              name: "FlowAI Node Workflow Canvas",
              description: "An ultra-premium node-based visual workflow editor interface. Built with an intricate left sidebar, an interactive node library panel, and a beautifully designed dot-grid canvas with floating toolbars and a minimap.",
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
