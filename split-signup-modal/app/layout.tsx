import type { Metadata, Viewport } from 'next'
import { Outfit } from "next/font/google";
import './globals.css'

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://flourish-ui.vercel.app'),
  title: "Split Frosted Sign Up Modal | Zuhaib Rashid — Flourish UI",
  description: "A highly premium, two-column split-layout sign up modal featuring a clean typographic left panel and a dreamy, animated glassmorphic right panel. Built for the Flourish UI component library.",
  keywords: [
  "split-signup-modal",
  "split frosted sign up modal",
  "interactive surfaces",
  "motion",
  "typescript",
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
    canonical: '/components/split-signup-modal',
  },
  openGraph: {
    title: "Split Frosted Sign Up Modal | Flourish UI",
    description: "A highly premium, two-column split-layout sign up modal featuring a clean typographic left panel and a dreamy, animated glassmorphic right panel. Built for the Flourish UI component library.",
    url: '/components/split-signup-modal',
    siteName: 'Flourish UI',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://raw.githubusercontent.com/Zuhaib-dev/Flourish-UI/main/split-signup-modal/public/Preview.png',
        width: 1200,
        height: 630,
        alt: "Split Frosted Sign Up Modal Preview",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Split Frosted Sign Up Modal | Zuhaib Rashid — Flourish UI",
    description: "A highly premium, two-column split-layout sign up modal featuring a clean typographic left panel and a dreamy, animated glassmorphic right panel. Built for the Flourish UI component library.",
    creator: '@xuhaib_x9',
    images: [
      'https://raw.githubusercontent.com/Zuhaib-dev/Flourish-UI/main/split-signup-modal/public/Preview.png',
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
              name: "Split Frosted Sign Up Modal",
              description: "A highly premium, two-column split-layout sign up modal featuring a clean typographic left panel and a dreamy, animated glassmorphic right panel. Built for the Flourish UI component library.",
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
      <body className={`${outfit.variable} font-sans bg-[#f4f3f0] text-neutral-900 antialiased h-screen overflow-hidden`}>
        {children}
      </body>
    </html>
  )
}
