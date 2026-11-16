import type { Metadata, Viewport } from 'next'

import './globals.css'



export const metadata: Metadata = {
  title: "Emberveil Shader React Component | Flourish UI",
  description: "A warm WebGL shader background with flowing ember, copper, and cream gradients, subtle film grain, and a responsive canvas for React hero sections.",
  keywords: [
    "emberveil shader",
    "react shader background",
    "webgl background",
    "procedural shader",
    "react component",
    "Flourish UI",
    "Zuhaib Rashid",
  ],
  authors: [{ name: 'Zuhaib Rashid', url: 'https://www.zuhaibrashid.com' }],
  creator: 'Zuhaib Rashid',
  openGraph: {
    title: "Emberveil Shader React Component | Flourish UI",
    description: "A warm WebGL shader background with flowing ember, copper, and cream gradients, subtle film grain, and a responsive canvas for React hero sections.",
    siteName: 'Flourish UI',
    locale: 'en_US',
    type: 'website',
    images: ['/Preview.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Emberveil Shader React Component | Flourish UI",
    description: "A warm WebGL shader background with flowing ember, copper, and cream gradients, subtle film grain, and a responsive canvas for React hero sections.",
    creator: '@xuhaib_x9',
    images: ['/Preview.png'],
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
              name: "Emberveil Shader",
              description: "A warm WebGL shader background with flowing ember, copper, and cream gradients, subtle film grain, and a responsive canvas for React hero sections.",
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
