import type { Metadata, Viewport } from 'next'

import './globals.css'



export const metadata: Metadata = {
  metadataBase: new URL('https://flourish-ui.vercel.app'),
  title: "Admit One 3D Holographic Ticket | Zuhaib Rashid — Flourish UI",
  description: "A high-fidelity 3D holographic foil admission ticket featuring procedural WebGL shaders, Bayer matrix dithering, simplex noise foil, interactive physical mouse tilt, and realistic specular glare.",
  keywords: [
  "admit-one-3-d-holographic-ticket",
  "admit one 3d holographic ticket",
  "shaders",
  "webgl",
  "canvas",
  "typescript",
  "shaders & webgl",
  "react component",
  "nextjs",
  "tailwind css",
  "Flourish UI",
  "Zuhaib Rashid"
],
  authors: [{ name: 'Zuhaib Rashid', url: 'https://www.zuhaibrashid.com' }],
  creator: 'Zuhaib Rashid',
  publisher: 'Flourish UI',
  category: "Shaders & WebGL",
  alternates: {
    canonical: '/components/admit-one-3-d-holographic-ticket',
  },
  openGraph: {
    title: "Admit One 3D Holographic Ticket | Flourish UI",
    description: "A high-fidelity 3D holographic foil admission ticket featuring procedural WebGL shaders, Bayer matrix dithering, simplex noise foil, interactive physical mouse tilt, and realistic specular glare.",
    url: '/components/admit-one-3-d-holographic-ticket',
    siteName: 'Flourish UI',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://raw.githubusercontent.com/Zuhaib-dev/Flourish-UI/main/admit-one-3-d-holographic-ticket/public/Preview.png',
        width: 1200,
        height: 630,
        alt: "Admit One 3D Holographic Ticket Preview",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Admit One 3D Holographic Ticket | Zuhaib Rashid — Flourish UI",
    description: "A high-fidelity 3D holographic foil admission ticket featuring procedural WebGL shaders, Bayer matrix dithering, simplex noise foil, interactive physical mouse tilt, and realistic specular glare.",
    creator: '@xuhaib_x9',
    images: [
      'https://raw.githubusercontent.com/Zuhaib-dev/Flourish-UI/main/admit-one-3-d-holographic-ticket/public/Preview.png',
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
    <html lang="en" className="h-full antialiased dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SoftwareSourceCode',
              name: "Admit One 3D Holographic Ticket",
              description: "A high-fidelity 3D holographic foil admission ticket featuring procedural WebGL shaders, Bayer matrix dithering, simplex noise foil, interactive physical mouse tilt, and realistic specular glare.",
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
