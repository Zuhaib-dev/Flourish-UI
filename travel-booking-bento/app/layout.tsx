import type { Metadata, Viewport } from 'next'
import { Inter, Plus_Jakarta_Sans, Outfit, Poppins } from "next/font/google";
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta" });

const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });

const poppins = Poppins({ weight: ["400", "500", "600", "700", "800", "900"], subsets: ["latin"], variable: "--font-poppins" });

export const metadata: Metadata = {
  metadataBase: new URL('https://flourish-ui.vercel.app'),
  title: "Travel Booking Bento Grid | Zuhaib Rashid — Flourish UI",
  description: "A beautiful, highly complex travel booking dashboard featuring a modern bento-box grid layout, glassmorphism overlays, and stunning typography.",
  keywords: [
  "travel-booking-bento",
  "travel booking bento grid",
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
    canonical: '/components/travel-booking-bento',
  },
  openGraph: {
    title: "Travel Booking Bento Grid | Flourish UI",
    description: "A beautiful, highly complex travel booking dashboard featuring a modern bento-box grid layout, glassmorphism overlays, and stunning typography.",
    url: '/components/travel-booking-bento',
    siteName: 'Flourish UI',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://raw.githubusercontent.com/Zuhaib-dev/Flourish-UI/main/travel-booking-bento/public/Preview.png',
        width: 1200,
        height: 630,
        alt: "Travel Booking Bento Grid Preview",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Travel Booking Bento Grid | Zuhaib Rashid — Flourish UI",
    description: "A beautiful, highly complex travel booking dashboard featuring a modern bento-box grid layout, glassmorphism overlays, and stunning typography.",
    creator: '@xuhaib_x9',
    images: [
      'https://raw.githubusercontent.com/Zuhaib-dev/Flourish-UI/main/travel-booking-bento/public/Preview.png',
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
    <html lang="en" className={`${inter.variable} ${jakarta.variable} ${outfit.variable} ${poppins.variable} font-sans antialiased bg-[#e2e3df]`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SoftwareSourceCode',
              name: "Travel Booking Bento Grid",
              description: "A beautiful, highly complex travel booking dashboard featuring a modern bento-box grid layout, glassmorphism overlays, and stunning typography.",
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
      <body>
        {children}
      </body>
    </html>
  )
}
