import type { Metadata, Viewport } from 'next'
import { Outfit, Caveat, Dancing_Script } from 'next/font/google';
import './globals.css'

const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });

export const metadata: Metadata = {
  metadataBase: new URL('https://flourish-ui.vercel.app'),
  title: "Digital Signature Modal | Zuhaib Rashid — Flourish UI",
  description: "A premium, highly interactive, and functionally complete React component for capturing digital signatures in web applications. It provides a polished and legally compliant-looking interface for users to sign documents.",
  keywords: [
  "digital-signature-modal",
  "digital signature modal",
  "interactive surfaces",
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
    canonical: '/components/digital-signature-modal',
  },
  openGraph: {
    title: "Digital Signature Modal | Flourish UI",
    description: "A premium, highly interactive, and functionally complete React component for capturing digital signatures in web applications. It provides a polished and legally compliant-looking interface for users to sign documents.",
    url: '/components/digital-signature-modal',
    siteName: 'Flourish UI',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://raw.githubusercontent.com/Zuhaib-dev/Flourish-UI/main/digital-signature-modal/public/Preview.jpeg',
        width: 1200,
        height: 630,
        alt: "Digital Signature Modal Preview",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Digital Signature Modal | Zuhaib Rashid — Flourish UI",
    description: "A premium, highly interactive, and functionally complete React component for capturing digital signatures in web applications. It provides a polished and legally compliant-looking interface for users to sign documents.",
    creator: '@xuhaib_x9',
    images: [
      'https://raw.githubusercontent.com/Zuhaib-dev/Flourish-UI/main/digital-signature-modal/public/Preview.jpeg',
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
    <html lang="en" className={`${outfit.variable} ${caveat.variable} ${dancingScript.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'SoftwareSourceCode',
              name: "Digital Signature Modal",
              description: "A premium, highly interactive, and functionally complete React component for capturing digital signatures in web applications. It provides a polished and legally compliant-looking interface for users to sign documents.",
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
      <body className="font-sans bg-background text-on-surface antialiased selection:bg-primary/10">
        {children}
      </body>
    </html>
  )
}
