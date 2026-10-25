import type { Metadata, Viewport } from 'next'
import { Inter, Outfit } from "next/font/google";
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

export const metadata: Metadata = {
  metadataBase: new URL('https://flourish-ui.vercel.app'),
  title: "Quadrant Workstation Hub | Zuhaib Rashid — Flourish UI",
  description: "A premium, highly polished workspace setup and configuration modal. It features a stunning split-layout design with a picturesque background, meticulous form elements, and smooth interactions.",
  keywords: [
  "quadrant-workspace-setup",
  "quadrant workstation hub",
  "dashboards",
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
    canonical: '/components/quadrant-workspace-setup',
  },
  openGraph: {
    title: "Quadrant Workstation Hub | Flourish UI",
    description: "A premium, highly polished workspace setup and configuration modal. It features a stunning split-layout design with a picturesque background, meticulous form elements, and smooth interactions.",
    url: '/components/quadrant-workspace-setup',
    siteName: 'Flourish UI',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://raw.githubusercontent.com/Zuhaib-dev/Flourish-UI/main/quadrant-workspace-setup/public/Preview.png',
        width: 1200,
        height: 630,
        alt: "Quadrant Workstation Hub Preview",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Quadrant Workstation Hub | Zuhaib Rashid — Flourish UI",
    description: "A premium, highly polished workspace setup and configuration modal. It features a stunning split-layout design with a picturesque background, meticulous form elements, and smooth interactions.",
    creator: '@xuhaib_x9',
    images: [
      'https://raw.githubusercontent.com/Zuhaib-dev/Flourish-UI/main/quadrant-workspace-setup/public/Preview.png',
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
    <html lang="en" className={`${inter.variable} ${outfit.variable} font-sans h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SoftwareSourceCode',
              name: "Quadrant Workstation Hub",
              description: "A premium, highly polished workspace setup and configuration modal. It features a stunning split-layout design with a picturesque background, meticulous form elements, and smooth interactions.",
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
