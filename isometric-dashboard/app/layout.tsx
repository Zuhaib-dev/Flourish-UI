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
  title: "3D Isometric Dashboard | Zuhaib Rashid — Flourish UI",
  description: "A premium, high-fidelity dark-mode dashboard component featuring a true 3D isometric stacked bar chart and a highly detailed interactive heatmap calendar.",
  keywords: [
  "isometric-dashboard",
  "3d isometric dashboard",
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
    canonical: '/components/isometric-dashboard',
  },
  openGraph: {
    title: "3D Isometric Dashboard | Flourish UI",
    description: "A premium, high-fidelity dark-mode dashboard component featuring a true 3D isometric stacked bar chart and a highly detailed interactive heatmap calendar.",
    url: '/components/isometric-dashboard',
    siteName: 'Flourish UI',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://raw.githubusercontent.com/Zuhaib-dev/Flourish-UI/main/isometric-dashboard/public/Preview.png',
        width: 1200,
        height: 630,
        alt: "3D Isometric Dashboard Preview",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "3D Isometric Dashboard | Zuhaib Rashid — Flourish UI",
    description: "A premium, high-fidelity dark-mode dashboard component featuring a true 3D isometric stacked bar chart and a highly detailed interactive heatmap calendar.",
    creator: '@xuhaib_x9',
    images: [
      'https://raw.githubusercontent.com/Zuhaib-dev/Flourish-UI/main/isometric-dashboard/public/Preview.png',
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
              name: "3D Isometric Dashboard",
              description: "A premium, high-fidelity dark-mode dashboard component featuring a true 3D isometric stacked bar chart and a highly detailed interactive heatmap calendar.",
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
