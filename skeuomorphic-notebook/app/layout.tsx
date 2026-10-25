import type { Metadata, Viewport } from 'next'

import './globals.css'



export const metadata: Metadata = {
  metadataBase: new URL('https://flourish-ui.vercel.app'),
  title: "Skeuomorphic Folio Notebook | Zuhaib Rashid — Flourish UI",
  description: "A playful, highly interactive skeuomorphic take on a digital guestbook. It brings the tactile feel of a physical leather-bound journal into the browser with realistic page flips, handwritten typography, and organic ink features.",
  keywords: [
  "skeuomorphic-notebook",
  "skeuomorphic folio notebook",
  "skeuomorphic",
  "motion",
  "canvas",
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
    canonical: '/components/skeuomorphic-notebook',
  },
  openGraph: {
    title: "Skeuomorphic Folio Notebook | Flourish UI",
    description: "A playful, highly interactive skeuomorphic take on a digital guestbook. It brings the tactile feel of a physical leather-bound journal into the browser with realistic page flips, handwritten typography, and organic ink features.",
    url: '/components/skeuomorphic-notebook',
    siteName: 'Flourish UI',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://raw.githubusercontent.com/Zuhaib-dev/Flourish-UI/main/skeuomorphic-notebook/public/Preview.png',
        width: 1200,
        height: 630,
        alt: "Skeuomorphic Folio Notebook Preview",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Skeuomorphic Folio Notebook | Zuhaib Rashid — Flourish UI",
    description: "A playful, highly interactive skeuomorphic take on a digital guestbook. It brings the tactile feel of a physical leather-bound journal into the browser with realistic page flips, handwritten typography, and organic ink features.",
    creator: '@xuhaib_x9',
    images: [
      'https://raw.githubusercontent.com/Zuhaib-dev/Flourish-UI/main/skeuomorphic-notebook/public/Preview.png',
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
        <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@500;700&amp;family=Epilogue:wght@600;700&amp;family=Kalam:wght@400&amp;family=Literata:ital,wght@0,400;0,600;1,400&amp;family=Patrick+Hand&amp;family=Shadows+Into+Light&amp;family=Work+Sans:wght@500;600&amp;display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SoftwareSourceCode',
              name: "Skeuomorphic Folio Notebook",
              description: "A playful, highly interactive skeuomorphic take on a digital guestbook. It brings the tactile feel of a physical leather-bound journal into the browser with realistic page flips, handwritten typography, and organic ink features.",
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
      <body className="antialiased selection:bg-primary-fixed selection:text-on-primary-fixed">
        {children}
      </body>
    </html>
  )
}
