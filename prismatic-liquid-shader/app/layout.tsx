import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://flourish-ui.vercel.app'),
  title: 'Prismatic Liquid Shader | Zuhaib Rashid — Flourish UI',
  description:
    'An interactive, hyper-fluid WebGL liquid wave shader featuring perceptual OKLab color transitions, dynamic velocity ripples, multi-spectral presets, and customizable physical turbulence.',
  keywords: [
    'prismatic liquid shader',
    'oklab liquid shader',
    'webgl waves',
    'fluid dynamics shader',
    'creative coding',
    'glsl shader',
    'generative art',
    'interactive cursor shader',
    'react component',
    'nextjs',
    'tailwind css',
    'framer motion',
    'Flourish UI',
    'Zuhaib Rashid',
  ],
  authors: [{ name: 'Zuhaib Rashid', url: 'https://www.zuhaibrashid.com' }],
  creator: 'Zuhaib Rashid',
  publisher: 'Flourish UI',
  category: 'Creative Coding & Interactive Shaders',
  alternates: {
    canonical: '/components/prismatic-liquid-shader',
  },
  openGraph: {
    title: 'Prismatic Liquid Shader | Flourish UI',
    description:
      'An interactive, hyper-fluid WebGL liquid wave shader featuring perceptual OKLab color transitions, dynamic velocity ripples, multi-spectral presets, and customizable physical turbulence.',
    url: '/components/prismatic-liquid-shader',
    siteName: 'Flourish UI',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://raw.githubusercontent.com/Zuhaib-dev/Flourish-UI/main/prismatic-liquid-shader/public/Preview.png',
        width: 1200,
        height: 630,
        alt: 'Prismatic Liquid Shader Preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Prismatic Liquid Shader | Zuhaib Rashid — Flourish UI',
    description:
      'An interactive, hyper-fluid WebGL liquid wave shader featuring perceptual OKLab color transitions and dynamic velocity ripples.',
    creator: '@xuhaib_x9',
    images: [
      'https://raw.githubusercontent.com/Zuhaib-dev/Flourish-UI/main/prismatic-liquid-shader/public/Preview.png',
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
  themeColor: '#07090e',
  colorScheme: 'dark',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SoftwareSourceCode',
              name: 'Prismatic Liquid Shader',
              description:
                'An interactive, hyper-fluid WebGL liquid wave shader featuring perceptual OKLab color transitions, dynamic velocity ripples, multi-spectral presets, and customizable physical turbulence.',
              programmingLanguage: 'GLSL / TypeScript',
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
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
