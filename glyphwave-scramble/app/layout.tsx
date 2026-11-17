import type { Metadata, Viewport } from 'next'

import './globals.css'

const description = "An interactive canvas text effect that turns words into colorful mathematical symbols as the pointer passes, then settles each letter back into place."

export const metadata: Metadata = {
  title: 'Glyphwave Scramble React Component | Flourish UI',
  description,
  keywords: [
    'glyphwave scramble',
    'text scramble effect',
    'interactive typography',
    'canvas text animation',
    'react component',
    'Flourish UI',
  ],
  authors: [
  
    { name: 'Zuhaib Rashid', url: 'https://www.zuhaibrashid.com' },
  ],
  creator: 'Zuhaib Rashid',
  openGraph: {
    title: 'Glyphwave Scramble React Component | Flourish UI',
    description,
    siteName: 'Flourish UI',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Glyphwave Scramble React Component | Flourish UI',
    description,
    creator: '@xuhaib_x9',
  },
}

export const viewport: Viewport = {
  themeColor: '#000000',
  colorScheme: 'dark',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full antialiased dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SoftwareSourceCode',
              name: 'Glyphwave Scramble',
              description,
              programmingLanguage: 'TypeScript',
              author: [
                {
                  '@type': 'Person',
                  name: 'Zuhaib Rashid',
                  url: 'https://www.zuhaibrashid.com',
                },
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  )
}
