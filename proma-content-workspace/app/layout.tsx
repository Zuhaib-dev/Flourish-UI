import type { Metadata, Viewport } from 'next'
import { Inter } from "next/font/google";
import './globals.css'

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://flourish-ui.vercel.app'),
  title: "Proma Podcast Workspace | Zuhaib Rashid — Flourish UI",
  description: "A high-fidelity, 3-column workspace dashboard designed for podcast and content studios. It features an intricate collapsible sidebar, a central AI-assisted content creation feed, and a rich media transcript view.",
  keywords: [
  "proma-content-workspace",
  "proma podcast workspace",
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
    canonical: '/components/proma-content-workspace',
  },
  openGraph: {
    title: "Proma Podcast Workspace | Flourish UI",
    description: "A high-fidelity, 3-column workspace dashboard designed for podcast and content studios. It features an intricate collapsible sidebar, a central AI-assisted content creation feed, and a rich media transcript view.",
    url: '/components/proma-content-workspace',
    siteName: 'Flourish UI',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://raw.githubusercontent.com/Zuhaib-dev/Flourish-UI/main/proma-content-workspace/public/Preview.png',
        width: 1200,
        height: 630,
        alt: "Proma Podcast Workspace Preview",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Proma Podcast Workspace | Zuhaib Rashid — Flourish UI",
    description: "A high-fidelity, 3-column workspace dashboard designed for podcast and content studios. It features an intricate collapsible sidebar, a central AI-assisted content creation feed, and a rich media transcript view.",
    creator: '@xuhaib_x9',
    images: [
      'https://raw.githubusercontent.com/Zuhaib-dev/Flourish-UI/main/proma-content-workspace/public/Preview.png',
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
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SoftwareSourceCode',
              name: "Proma Podcast Workspace",
              description: "A high-fidelity, 3-column workspace dashboard designed for podcast and content studios. It features an intricate collapsible sidebar, a central AI-assisted content creation feed, and a rich media transcript view.",
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
      <body className={`${inter.variable} antialiased font-sans bg-white text-[#111827]`}>
        {children}
      </body>
    </html>
  )
}
