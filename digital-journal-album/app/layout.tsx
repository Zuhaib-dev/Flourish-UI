import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Inter } from "next/font/google";
import './globals.css'

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://flourish-ui.vercel.app'),
  title: "Digital Journal 3D Album | Zuhaib Rashid — Flourish UI",
  description: "A photorealistic, highly interactive 3D digital journal with true physical flipbook mechanics and cinematic visuals, built for the Flourish UI component library.",
  keywords: [
  "digital-journal-album",
  "digital journal 3d album",
  "skeuomorphic",
  "motion",
  "typescript",
  "skeuomorphic & 3d",
  "react component",
  "nextjs",
  "tailwind css",
  "Flourish UI",
  "Zuhaib Rashid"
],
  authors: [{ name: 'Zuhaib Rashid', url: 'https://www.zuhaibrashid.com' }],
  creator: 'Zuhaib Rashid',
  publisher: 'Flourish UI',
  category: "Skeuomorphic & 3D",
  alternates: {
    canonical: '/components/digital-journal-album',
  },
  openGraph: {
    title: "Digital Journal 3D Album | Flourish UI",
    description: "A photorealistic, highly interactive 3D digital journal with true physical flipbook mechanics and cinematic visuals, built for the Flourish UI component library.",
    url: '/components/digital-journal-album',
    siteName: 'Flourish UI',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://raw.githubusercontent.com/Zuhaib-dev/Flourish-UI/main/digital-journal-album/public/Preview.png',
        width: 1200,
        height: 630,
        alt: "Digital Journal 3D Album Preview",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Digital Journal 3D Album | Zuhaib Rashid — Flourish UI",
    description: "A photorealistic, highly interactive 3D digital journal with true physical flipbook mechanics and cinematic visuals, built for the Flourish UI component library.",
    creator: '@xuhaib_x9',
    images: [
      'https://raw.githubusercontent.com/Zuhaib-dev/Flourish-UI/main/digital-journal-album/public/Preview.png',
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
              name: "Digital Journal 3D Album",
              description: "A photorealistic, highly interactive 3D digital journal with true physical flipbook mechanics and cinematic visuals, built for the Flourish UI component library.",
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
      <body className={`${playfair.variable} ${inter.variable} antialiased bg-[#f2f1ef]`}>
        {children}
      </body>
    </html>
  )
}
