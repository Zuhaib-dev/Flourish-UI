import type { Metadata, Viewport } from 'next'
import { Outfit, JetBrains_Mono } from "next/font/google";
import './globals.css'

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://flourish-ui.vercel.app'),
  title: "Minimalist Control Room | Zuhaib Rashid — Flourish UI",
  description: "A stunning, hyper-minimal SaaS dashboard UI featuring bespoke handcrafted SVG charts, wireframe-style crop marks, and perfect technical typography.",
  keywords: [
  "dashboard-may-look-minimal",
  "minimalist control room",
  "dashboards",
  "motion",
  "typescript",
  "dashboards & editors",
  "react component",
  "nextjs",
  "tailwind css",
  "Flourish UI",
  "Zuhaib Rashid"
],
  authors: [{ name: 'Zuhaib Rashid', url: 'https://www.zuhaibrashid.com' }],
  creator: 'Zuhaib Rashid',
  publisher: 'Flourish UI',
  category: "Dashboards & Editors",
  alternates: {
    canonical: '/components/dashboard-may-look-minimal',
  },
  openGraph: {
    title: "Minimalist Control Room | Flourish UI",
    description: "A stunning, hyper-minimal SaaS dashboard UI featuring bespoke handcrafted SVG charts, wireframe-style crop marks, and perfect technical typography.",
    url: '/components/dashboard-may-look-minimal',
    siteName: 'Flourish UI',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://raw.githubusercontent.com/Zuhaib-dev/Flourish-UI/main/dashboard-may-look-minimal/public/Preview.png',
        width: 1200,
        height: 630,
        alt: "Minimalist Control Room Preview",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Minimalist Control Room | Zuhaib Rashid — Flourish UI",
    description: "A stunning, hyper-minimal SaaS dashboard UI featuring bespoke handcrafted SVG charts, wireframe-style crop marks, and perfect technical typography.",
    creator: '@xuhaib_x9',
    images: [
      'https://raw.githubusercontent.com/Zuhaib-dev/Flourish-UI/main/dashboard-may-look-minimal/public/Preview.png',
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
              name: "Minimalist Control Room",
              description: "A stunning, hyper-minimal SaaS dashboard UI featuring bespoke handcrafted SVG charts, wireframe-style crop marks, and perfect technical typography.",
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
      <body
        className={`${outfit.variable} ${jetbrains.variable} antialiased bg-[#f5f7fa] font-sans`}
      >
        {children}
      </body>
    </html>
  )
}
