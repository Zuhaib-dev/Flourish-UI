import type { Metadata, Viewport } from 'next'

import './globals.css'



export const metadata: Metadata = {
  metadataBase: new URL('https://flourish-ui.vercel.app'),
  title: "Cold Flame Drift Risograph | Zuhaib Rashid — Flourish UI",
  description: "A tactile, generative field of grainy, hand-printed risograph flames sliding along a diagonal. Features noise-bent flow rows, dual-ink stippled grain, drifting dash marks, and dynamic pointer interaction (hover curl, speed boost, and click flare shockwaves).",
  keywords: [
  "cold-flame-drift",
  "cold flame drift risograph",
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
    canonical: '/components/cold-flame-drift',
  },
  openGraph: {
    title: "Cold Flame Drift Risograph | Flourish UI",
    description: "A tactile, generative field of grainy, hand-printed risograph flames sliding along a diagonal. Features noise-bent flow rows, dual-ink stippled grain, drifting dash marks, and dynamic pointer interaction (hover curl, speed boost, and click flare shockwaves).",
    url: '/components/cold-flame-drift',
    siteName: 'Flourish UI',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://raw.githubusercontent.com/Zuhaib-dev/Flourish-UI/main/cold-flame-drift/public/Preview.png',
        width: 1200,
        height: 630,
        alt: "Cold Flame Drift Risograph Preview",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Cold Flame Drift Risograph | Zuhaib Rashid — Flourish UI",
    description: "A tactile, generative field of grainy, hand-printed risograph flames sliding along a diagonal. Features noise-bent flow rows, dual-ink stippled grain, drifting dash marks, and dynamic pointer interaction (hover curl, speed boost, and click flare shockwaves).",
    creator: '@xuhaib_x9',
    images: [
      'https://raw.githubusercontent.com/Zuhaib-dev/Flourish-UI/main/cold-flame-drift/public/Preview.png',
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
              name: "Cold Flame Drift Risograph",
              description: "A tactile, generative field of grainy, hand-printed risograph flames sliding along a diagonal. Features noise-bent flow rows, dual-ink stippled grain, drifting dash marks, and dynamic pointer interaction (hover curl, speed boost, and click flare shockwaves).",
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
