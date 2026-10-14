import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL("https://flourish-ui.vercel.app"),
  title: "Storybook Play Canvas | Zuhaib Rashid — Flourish UI",
  description:
    "Whimsical illustrated retro easel & storybook playground with interactive drawing, custom palettes, and tactile studio controls.",
  keywords: [
    "storybook play canvas",
    "woset world",
    "storybook artboard",
    "illustrated easel",
    "retro canvas",
    "interactive drawing toy",
    "playful ui",
    "framer motion",
    "nextjs",
    "tailwind css",
    "shadcn",
    "Flourish UI",
    "Zuhaib Rashid",
  ],
  authors: [{ name: "Zuhaib Rashid", url: "https://www.zuhaibrashid.com" }],
  creator: "Zuhaib Rashid",
  publisher: "Flourish UI",
  category: "Technology",
  alternates: {
    canonical: "/components/storybook-play-canvas",
  },
  openGraph: {
    title: "Storybook Play Canvas | Flourish UI",
    description:
      "Whimsical illustrated retro easel & storybook playground with interactive drawing, custom palettes, and tactile studio controls.",
    url: "/components/storybook-play-canvas",
    siteName: "Flourish UI",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://raw.githubusercontent.com/Zuhaib-dev/Flourish-UI/main/storybook-play-canvas/public/Preview.png",
        width: 1200,
        height: 630,
        alt: "Storybook Play Canvas Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Storybook Play Canvas | Zuhaib Rashid — Flourish UI",
    description:
      "Whimsical illustrated retro easel & storybook playground with interactive drawing, custom palettes, and tactile studio controls.",
    creator: "@xuhaibx9",
    images: [
      "https://raw.githubusercontent.com/Zuhaib-dev/Flourish-UI/main/storybook-play-canvas/public/Preview.png",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
}

export const viewport: Viewport = {
  themeColor: "#d6d3ce",
  colorScheme: "light",
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
              "@context": "https://schema.org",
              "@type": "SoftwareSourceCode",
              name: "Storybook Play Canvas",
              description:
                "Whimsical illustrated retro easel & storybook playground with interactive drawing, custom palettes, and tactile studio controls.",
              programmingLanguage: "TypeScript",
              author: {
                "@type": "Person",
                name: "Zuhaib Rashid",
                url: "https://www.zuhaibrashid.com",
                sameAs: [
                  "https://github.com/Zuhaib-dev",
                  "https://x.com/xuhaib_x9",
                  "https://www.linkedin.com/in/zuhaib-rashid-661345318/",
                ],
              },
            }),
          }}
        />
      </head>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
