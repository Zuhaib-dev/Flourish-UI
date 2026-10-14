import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://flourish-ui.vercel.app"),
  title: "Halftone Wordmark Footer | Zuhaib Rashid — Flourish UI",
  description:
    "An expressive site footer whose wordmark is printed as an interactive field of spring-physics halftone dots with real-time pointer push and shock wave animations.",
  keywords: [
    "halftone wordmark footer",
    "halftone footer",
    "wordmark footer",
    "canvas halftone",
    "spring physics",
    "interactive footer",
    "react footer component",
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
    canonical: "/components/halftone-wordmark-footer",
  },
  openGraph: {
    title: "Halftone Wordmark Footer | Flourish UI",
    description:
      "A site footer whose wordmark is set enormous and cropped by the bottom edge, printed as a field of interactive spring-physics halftone dots.",
    url: "/components/halftone-wordmark-footer",
    siteName: "Flourish UI",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://raw.githubusercontent.com/Zuhaib-dev/Flourish-UI/main/halftone-wordmark-footer/public/Preview.png",
        width: 1200,
        height: 630,
        alt: "Halftone Wordmark Footer Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Halftone Wordmark Footer | Zuhaib Rashid — Flourish UI",
    description:
      "Interactive field of spring-physics halftone dots that part around the pointer and ripple on click.",
    creator: "@xuhaibx9",
    images: [
      "https://raw.githubusercontent.com/Zuhaib-dev/Flourish-UI/main/halftone-wordmark-footer/public/Preview.png",
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
};

export const viewport: Viewport = {
  themeColor: "#0c0c0b",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareSourceCode",
              name: "Halftone Wordmark Footer",
              description:
                "An expressive site footer whose wordmark is printed as an interactive field of spring-physics halftone dots.",
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
