import type { Metadata, Viewport } from 'next'

import './globals.css'



export const metadata: Metadata = {
  metadataBase: new URL('https://flourish-ui.vercel.app'),
  title: "Tactile 3D Credit Card Form | Zuhaib Rashid — Flourish UI",
  description: "A tactile, interactive 3D flippable credit card form component with dynamic input focus highlighting, number slot slide animations, Luhn validation, and smooth dual-sided flip transitions.",
  keywords: [
  "credit-card-form",
  "tactile 3d credit card form",
  "skeuomorphic",
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
    canonical: '/components/credit-card-form',
  },
  openGraph: {
    title: "Tactile 3D Credit Card Form | Flourish UI",
    description: "A tactile, interactive 3D flippable credit card form component with dynamic input focus highlighting, number slot slide animations, Luhn validation, and smooth dual-sided flip transitions.",
    url: '/components/credit-card-form',
    siteName: 'Flourish UI',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://raw.githubusercontent.com/Zuhaib-dev/Flourish-UI/main/credit-card-form/public/Preview.png',
        width: 1200,
        height: 630,
        alt: "Tactile 3D Credit Card Form Preview",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Tactile 3D Credit Card Form | Zuhaib Rashid — Flourish UI",
    description: "A tactile, interactive 3D flippable credit card form component with dynamic input focus highlighting, number slot slide animations, Luhn validation, and smooth dual-sided flip transitions.",
    creator: '@xuhaib_x9',
    images: [
      'https://raw.githubusercontent.com/Zuhaib-dev/Flourish-UI/main/credit-card-form/public/Preview.png',
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
    <html lang="en" className="h-full antialiased">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SoftwareSourceCode',
              name: "Tactile 3D Credit Card Form",
              description: "A tactile, interactive 3D flippable credit card form component with dynamic input focus highlighting, number slot slide animations, Luhn validation, and smooth dual-sided flip transitions.",
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
