import type { Metadata, Viewport } from 'next'

import './globals.css'



export const metadata: Metadata = {
  metadataBase: new URL('https://flourish-ui.vercel.app'),
  title: "Waves OKLab Liquid Shader | Zuhaib Rashid — Flourish UI",
  description: "An interactive, organic wave field shader background featuring perceptual OKLab color transitions, 5-tap blur, film grain, and dynamic pointer displacement effects (push, directional distortion, swirl, and ripple).",
  keywords: [
  "waves-shaders-homlu-ui",
  "waves oklab liquid shader",
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
    canonical: '/components/waves-shaders-homlu-ui',
  },
  openGraph: {
    title: "Waves OKLab Liquid Shader | Flourish UI",
    description: "An interactive, organic wave field shader background featuring perceptual OKLab color transitions, 5-tap blur, film grain, and dynamic pointer displacement effects (push, directional distortion, swirl, and ripple).",
    url: '/components/waves-shaders-homlu-ui',
    siteName: 'Flourish UI',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://raw.githubusercontent.com/Zuhaib-dev/Flourish-UI/main/waves-shaders-homlu-ui/public/Preview.png',
        width: 1200,
        height: 630,
        alt: "Waves OKLab Liquid Shader Preview",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Waves OKLab Liquid Shader | Zuhaib Rashid — Flourish UI",
    description: "An interactive, organic wave field shader background featuring perceptual OKLab color transitions, 5-tap blur, film grain, and dynamic pointer displacement effects (push, directional distortion, swirl, and ripple).",
    creator: '@xuhaib_x9',
    images: [
      'https://raw.githubusercontent.com/Zuhaib-dev/Flourish-UI/main/waves-shaders-homlu-ui/public/Preview.png',
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
              name: "Waves OKLab Liquid Shader",
              description: "An interactive, organic wave field shader background featuring perceptual OKLab color transitions, 5-tap blur, film grain, and dynamic pointer displacement effects (push, directional distortion, swirl, and ripple).",
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
