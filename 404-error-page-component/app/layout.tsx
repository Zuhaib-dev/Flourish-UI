import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL("https://flourish-ui.vercel.app"),
  title: "No Internet Offline 404 | Zuhaib Rashid — Flourish UI",
  description:
    "An evocative illustrated 404 offline error page featuring the nostalgic Chrome dinosaur and an overhead crowd perspective reminding visitors to disconnect and explore nature.",
  keywords: [
    "404 error page",
    "offline page",
    "no internet",
    "chrome dino",
    "editorial 404",
    "bird-eye-view illustration",
    "crowd perspective",
    "react error page",
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
    canonical: "/components/404-error-page-component",
  },
  openGraph: {
    title: "No Internet Offline 404 | Flourish UI",
    description:
      "An evocative illustrated 404 offline error page featuring the nostalgic Chrome dinosaur and an overhead crowd perspective.",
    url: "/components/404-error-page-component",
    siteName: "Flourish UI",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://raw.githubusercontent.com/Zuhaib-dev/Flourish-UI/main/404-error-page-component/public/Preview.png",
        width: 1200,
        height: 630,
        alt: "No Internet Offline 404 Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "No Internet Offline 404 | Zuhaib Rashid — Flourish UI",
    description:
      "An evocative illustrated 404 offline error page with nostalgic Chrome dinosaur and crowd perspective.",
    creator: "@xuhaibx9",
    images: [
      "https://raw.githubusercontent.com/Zuhaib-dev/Flourish-UI/main/404-error-page-component/public/Preview.png",
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
  themeColor: "#e7e6e1",
  colorScheme: "light dark",
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
              name: "No Internet Offline 404",
              description:
                "An evocative illustrated 404 offline error page featuring the nostalgic Chrome dinosaur and an overhead crowd perspective reminding visitors to disconnect and explore nature.",
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
