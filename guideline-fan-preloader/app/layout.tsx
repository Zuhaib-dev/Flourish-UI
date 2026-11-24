import type { Metadata, Viewport } from 'next'

import './globals.css'

const title = 'Guideline Fan Preloader React Component | Flourish UI'
const description =
  'An editorial React preloader that unfolds seven photographs through a fan, a rotating cube, a picture ring, and a double-sided print.'
const previewImage =
  'https://raw.githubusercontent.com/Zuhaib-dev/Flourish-UI/main/guideline-fan-preloader/public/Preview.png'
const repository =
  'https://github.com/Zuhaib-dev/Flourish-UI/tree/main/guideline-fan-preloader'

export const metadata: Metadata = {
  metadataBase: new URL('https://flourish-ui.vercel.app'),
  title,
  description,
  keywords: [
    'guideline fan preloader',
    'React preloader',
    'editorial loading animation',
    'image loading screen',
    'React component',
    'Flourish UI',
  ],
  authors: [{ name: 'Flourish UI', url: 'https://flourish-ui.vercel.app' }],
  creator: 'Flourish UI',
  publisher: 'Flourish UI',
  alternates: { canonical: '/components/guideline-fan-preloader' },
  openGraph: {
    title,
    description,
    url: '/components/guideline-fan-preloader',
    siteName: 'Flourish UI',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: previewImage,
        width: 2390,
        height: 1608,
        alt: 'Guideline Fan Preloader showing its photo grid, red guides, and editorial captions',
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
}

export const viewport: Viewport = {
  themeColor: '#181516',
  colorScheme: 'dark light',
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareSourceCode',
  name: 'Guideline Fan Preloader',
  description,
  programmingLanguage: 'TypeScript',
  codeRepository: repository,
  image: previewImage,
  author: {
    '@type': 'Organization',
    name: 'Flourish UI',
    url: 'https://flourish-ui.vercel.app',
  },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
