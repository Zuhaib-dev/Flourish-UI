import type { Metadata, Viewport } from 'next'
import { Inter } from "next/font/google";
import './globals.css'

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://flourish-ui.vercel.app'),
  title: "SEO Analysis AI Agent Chat | Zuhaib Rashid — Flourish UI",
  description: "A pristine, high-fidelity chat interface designed for interacting with specialized AI agents (like an SEO Specialist). It features a full-width viewport design with a collapsible sidebar and a central chat feed capable of rendering complex, interactive data cards.",
  keywords: [
  "seo-agent-chat-ui",
  "seo analysis ai agent chat",
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
    canonical: '/components/seo-agent-chat-ui',
  },
  openGraph: {
    title: "SEO Analysis AI Agent Chat | Flourish UI",
    description: "A pristine, high-fidelity chat interface designed for interacting with specialized AI agents (like an SEO Specialist). It features a full-width viewport design with a collapsible sidebar and a central chat feed capable of rendering complex, interactive data cards.",
    url: '/components/seo-agent-chat-ui',
    siteName: 'Flourish UI',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://raw.githubusercontent.com/Zuhaib-dev/Flourish-UI/main/seo-agent-chat-ui/public/Preview.png',
        width: 1200,
        height: 630,
        alt: "SEO Analysis AI Agent Chat Preview",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "SEO Analysis AI Agent Chat | Zuhaib Rashid — Flourish UI",
    description: "A pristine, high-fidelity chat interface designed for interacting with specialized AI agents (like an SEO Specialist). It features a full-width viewport design with a collapsible sidebar and a central chat feed capable of rendering complex, interactive data cards.",
    creator: '@xuhaib_x9',
    images: [
      'https://raw.githubusercontent.com/Zuhaib-dev/Flourish-UI/main/seo-agent-chat-ui/public/Preview.png',
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
              name: "SEO Analysis AI Agent Chat",
              description: "A pristine, high-fidelity chat interface designed for interacting with specialized AI agents (like an SEO Specialist). It features a full-width viewport design with a collapsible sidebar and a central chat feed capable of rendering complex, interactive data cards.",
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
      <body className={`${inter.variable} antialiased font-sans bg-[#f9fafb] text-[#111827]`}>
        {children}
      </body>
    </html>
  )
}
