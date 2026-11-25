import type { Metadata, Viewport } from 'next'

import './globals.css'

const title = 'Fuzzfall Footer React Component | Flourish UI'
const description =
  'A 3D React footer with six soft, fuzzy creatures that fall, bounce, respond to dragging, and hop on click, alongside configurable navigation and a giant wordmark.'
const previewImage =
  'https://raw.githubusercontent.com/Zuhaib-dev/Flourish-UI/main/fuzzfall-footer/public/Preview.png'
const repository =
  'https://github.com/Zuhaib-dev/Flourish-UI/tree/main/fuzzfall-footer'

export const metadata: Metadata = {
  metadataBase: new URL('https://flourish-ui.vercel.app'),
  title,
  description,
  keywords: [
    'Fuzzfall Footer',
    'interactive React footer',
    'Three.js footer',
    '3D character animation',
    'WebGL React component',
    'playful website footer',
    'Flourish UI',
  ],
  authors: [{ name: 'Zuhaib Rashid', url: 'https://www.zuhaibrashid.com' }],
  creator: 'Zuhaib Rashid',
  publisher: 'Flourish UI',
  category: 'Interactive UI',
  alternates: {
    canonical: '/components/fuzzfall-footer',
  },
  openGraph: {
    title,
    description,
    url: '/components/fuzzfall-footer',
    siteName: 'Flourish UI',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: previewImage,
        alt: 'Fuzzfall Footer showing six colorful fuzzy 3D critters above a large wordmark',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    creator: '@xuhaib_x9',
    images: [previewImage],
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
  themeColor: '#171915',
  colorScheme: 'dark',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareSourceCode',
  name: 'Fuzzfall Footer React Component',
  description,
  programmingLanguage: 'TypeScript',
  codeRepository: repository,
  image: previewImage,
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
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="h-full antialiased dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  )
}
