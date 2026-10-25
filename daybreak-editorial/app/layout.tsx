import type { Metadata, Viewport } from 'next'
import { Newsreader, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css'

const plusJakartaSans = Plus_Jakarta_Sans({ 
  subsets: ['latin'], 
  variable: '--font-plus-jakarta-sans' 
});

export const metadata: Metadata = {
  metadataBase: new URL('https://flourish-ui.vercel.app'),
  title: "Daybreak Editorial Narrative | Zuhaib Rashid — Flourish UI",
  description: "A premium, interactive Neo-Classical design system and UI shell for long-form narrative, reading, and writing experiences. Built with Next.js 15, Tailwind CSS v4, and Framer Motion.",
  keywords: [
  "daybreak-editorial",
  "daybreak editorial narrative",
  "interactive surfaces",
  "motion",
  "canvas",
  "threejs",
  "react component",
  "nextjs",
  "tailwind css",
  "Flourish UI",
  "Zuhaib Rashid"
],
  authors: [{ name: 'Zuhaib Rashid', url: 'https://www.zuhaibrashid.com' }],
  creator: 'Zuhaib Rashid',
  publisher: 'Flourish UI',
  category: "Interactive Surfaces",
  alternates: {
    canonical: '/components/daybreak-editorial',
  },
  openGraph: {
    title: "Daybreak Editorial Narrative | Flourish UI",
    description: "A premium, interactive Neo-Classical design system and UI shell for long-form narrative, reading, and writing experiences. Built with Next.js 15, Tailwind CSS v4, and Framer Motion.",
    url: '/components/daybreak-editorial',
    siteName: 'Flourish UI',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://raw.githubusercontent.com/Zuhaib-dev/Flourish-UI/main/daybreak-editorial/public/Preview.png',
        width: 1200,
        height: 630,
        alt: "Daybreak Editorial Narrative Preview",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Daybreak Editorial Narrative | Zuhaib Rashid — Flourish UI",
    description: "A premium, interactive Neo-Classical design system and UI shell for long-form narrative, reading, and writing experiences. Built with Next.js 15, Tailwind CSS v4, and Framer Motion.",
    creator: '@xuhaib_x9',
    images: [
      'https://raw.githubusercontent.com/Zuhaib-dev/Flourish-UI/main/daybreak-editorial/public/Preview.png',
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
    <html lang="en" className={`${newsreader.variable} ${plusJakartaSans.variable}`}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SoftwareSourceCode',
              name: "Daybreak Editorial Narrative",
              description: "A premium, interactive Neo-Classical design system and UI shell for long-form narrative, reading, and writing experiences. Built with Next.js 15, Tailwind CSS v4, and Framer Motion.",
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
      <body className="bg-background font-body-md text-on-surface antialiased">
        {children}
      </body>
    </html>
  )
}
