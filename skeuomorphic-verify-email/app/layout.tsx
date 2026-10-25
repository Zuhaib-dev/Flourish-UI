import type { Metadata, Viewport } from 'next'
import { Inter } from "next/font/google";
import './globals.css'

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://flourish-ui.vercel.app'),
  title: "Skeuomorphic Verify Email | Zuhaib Rashid — Flourish UI",
  description: "A beautifully crafted, physically inspired email verification component featuring a 3D rendered mailbox, deep inset shadows, and tactile button interactions.",
  keywords: [
  "skeuomorphic-verify-email",
  "skeuomorphic verify email",
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
    canonical: '/components/skeuomorphic-verify-email',
  },
  openGraph: {
    title: "Skeuomorphic Verify Email | Flourish UI",
    description: "A beautifully crafted, physically inspired email verification component featuring a 3D rendered mailbox, deep inset shadows, and tactile button interactions.",
    url: '/components/skeuomorphic-verify-email',
    siteName: 'Flourish UI',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://raw.githubusercontent.com/Zuhaib-dev/Flourish-UI/main/skeuomorphic-verify-email/public/Preview.png',
        width: 1200,
        height: 630,
        alt: "Skeuomorphic Verify Email Preview",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Skeuomorphic Verify Email | Zuhaib Rashid — Flourish UI",
    description: "A beautifully crafted, physically inspired email verification component featuring a 3D rendered mailbox, deep inset shadows, and tactile button interactions.",
    creator: '@xuhaib_x9',
    images: [
      'https://raw.githubusercontent.com/Zuhaib-dev/Flourish-UI/main/skeuomorphic-verify-email/public/Preview.png',
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
              name: "Skeuomorphic Verify Email",
              description: "A beautifully crafted, physically inspired email verification component featuring a 3D rendered mailbox, deep inset shadows, and tactile button interactions.",
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
      <body className={`${inter.variable} font-sans bg-[#f6f4eb] text-neutral-900 antialiased min-h-screen flex flex-col`}>
        {children}
      </body>
    </html>
  )
}
