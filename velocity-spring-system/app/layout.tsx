import type { Metadata, Viewport } from 'next'
import { Inter } from "next/font/google";
import './globals.css'

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://flourish-ui.vercel.app'),
  title: "Velocity Spring Dock System | Zuhaib Rashid — Flourish UI",
  description: "A breathtaking, highly interactive layout animation system featuring MacOS dock mechanics, seamless masonry grid toggles, and perfect physical spring interpolation. Built for the Flourish UI component library.",
  keywords: [
  "velocity-spring-system",
  "velocity spring dock system",
  "motion",
  "typescript",
  "motion & physics",
  "react component",
  "nextjs",
  "tailwind css",
  "Flourish UI",
  "Zuhaib Rashid"
],
  authors: [{ name: 'Zuhaib Rashid', url: 'https://www.zuhaibrashid.com' }],
  creator: 'Zuhaib Rashid',
  publisher: 'Flourish UI',
  category: "Motion & Physics",
  alternates: {
    canonical: '/components/velocity-spring-system',
  },
  openGraph: {
    title: "Velocity Spring Dock System | Flourish UI",
    description: "A breathtaking, highly interactive layout animation system featuring MacOS dock mechanics, seamless masonry grid toggles, and perfect physical spring interpolation. Built for the Flourish UI component library.",
    url: '/components/velocity-spring-system',
    siteName: 'Flourish UI',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://raw.githubusercontent.com/Zuhaib-dev/Flourish-UI/main/velocity-spring-system/public/Preview.png',
        width: 1200,
        height: 630,
        alt: "Velocity Spring Dock System Preview",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Velocity Spring Dock System | Zuhaib Rashid — Flourish UI",
    description: "A breathtaking, highly interactive layout animation system featuring MacOS dock mechanics, seamless masonry grid toggles, and perfect physical spring interpolation. Built for the Flourish UI component library.",
    creator: '@xuhaib_x9',
    images: [
      'https://raw.githubusercontent.com/Zuhaib-dev/Flourish-UI/main/velocity-spring-system/public/Preview.png',
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
              name: "Velocity Spring Dock System",
              description: "A breathtaking, highly interactive layout animation system featuring MacOS dock mechanics, seamless masonry grid toggles, and perfect physical spring interpolation. Built for the Flourish UI component library.",
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
      <body className={`${inter.variable} font-sans antialiased h-screen overflow-hidden`}>
        {children}
      </body>
    </html>
  )
}
