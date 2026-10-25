import type { Metadata, Viewport } from 'next'
import { Inter } from "next/font/google";
import './globals.css'

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://flourish-ui.vercel.app'),
  title: "Post Planner Content Calendar | Zuhaib Rashid — Flourish UI",
  description: "A pristine, minimalist SaaS dashboard component designed for planning and organizing content posts. Features a comprehensive calendar grid and data summary cards with a clean light-mode aesthetic.",
  keywords: [
  "post-planner-calendar",
  "post planner content calendar",
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
    canonical: '/components/post-planner-calendar',
  },
  openGraph: {
    title: "Post Planner Content Calendar | Flourish UI",
    description: "A pristine, minimalist SaaS dashboard component designed for planning and organizing content posts. Features a comprehensive calendar grid and data summary cards with a clean light-mode aesthetic.",
    url: '/components/post-planner-calendar',
    siteName: 'Flourish UI',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://raw.githubusercontent.com/Zuhaib-dev/Flourish-UI/main/post-planner-calendar/public/Preview.png',
        width: 1200,
        height: 630,
        alt: "Post Planner Content Calendar Preview",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Post Planner Content Calendar | Zuhaib Rashid — Flourish UI",
    description: "A pristine, minimalist SaaS dashboard component designed for planning and organizing content posts. Features a comprehensive calendar grid and data summary cards with a clean light-mode aesthetic.",
    creator: '@xuhaib_x9',
    images: [
      'https://raw.githubusercontent.com/Zuhaib-dev/Flourish-UI/main/post-planner-calendar/public/Preview.png',
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
              name: "Post Planner Content Calendar",
              description: "A pristine, minimalist SaaS dashboard component designed for planning and organizing content posts. Features a comprehensive calendar grid and data summary cards with a clean light-mode aesthetic.",
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
      <body className={`${inter.variable} antialiased font-sans bg-[#f8f9fb] text-[#111827]`}>
        {children}
      </body>
    </html>
  )
}
