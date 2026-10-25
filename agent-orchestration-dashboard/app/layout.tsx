import type { Metadata, Viewport } from 'next'
import { Inter } from "next/font/google";
import './globals.css'

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://flourish-ui.vercel.app'),
  title: "Agent Orchestration Dashboard | Zuhaib Rashid — Flourish UI",
  description: "An ultra-premium, dark-mode orchestration dashboard designed for monitoring and deploying AI agents. Features a bespoke 16-bit pixel art lighthouse background and intricate widget layouts.",
  keywords: [
  "agent-orchestration-dashboard",
  "agent orchestration dashboard",
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
    canonical: '/components/agent-orchestration-dashboard',
  },
  openGraph: {
    title: "Agent Orchestration Dashboard | Flourish UI",
    description: "An ultra-premium, dark-mode orchestration dashboard designed for monitoring and deploying AI agents. Features a bespoke 16-bit pixel art lighthouse background and intricate widget layouts.",
    url: '/components/agent-orchestration-dashboard',
    siteName: 'Flourish UI',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://raw.githubusercontent.com/Zuhaib-dev/Flourish-UI/main/agent-orchestration-dashboard/public/Preview.png',
        width: 1200,
        height: 630,
        alt: "Agent Orchestration Dashboard Preview",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Agent Orchestration Dashboard | Zuhaib Rashid — Flourish UI",
    description: "An ultra-premium, dark-mode orchestration dashboard designed for monitoring and deploying AI agents. Features a bespoke 16-bit pixel art lighthouse background and intricate widget layouts.",
    creator: '@xuhaib_x9',
    images: [
      'https://raw.githubusercontent.com/Zuhaib-dev/Flourish-UI/main/agent-orchestration-dashboard/public/Preview.png',
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
  themeColor: '#0a0a0a',
  colorScheme: 'dark',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SoftwareSourceCode',
              name: "Agent Orchestration Dashboard",
              description: "An ultra-premium, dark-mode orchestration dashboard designed for monitoring and deploying AI agents. Features a bespoke 16-bit pixel art lighthouse background and intricate widget layouts.",
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
      <body className={`${inter.variable} antialiased font-sans bg-[#111113] text-white selection:bg-[#3b82f6] selection:text-white`}>
        {children}
      </body>
    </html>
  )
}
