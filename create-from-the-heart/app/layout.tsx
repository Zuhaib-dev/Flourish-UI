import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://flourish-ui.vercel.app'),
  title: 'Create from the Heart | Wilde & Co. — Flourish UI',
  description:
    'An artisanal pastoral storybook hero component featuring organic brush calligraphy, plein air landscape art, and interactive cottagecore studio aesthetics.',
  keywords: [
    'create from the heart',
    'wilde and co',
    'editorial hero',
    'cottagecore ui',
    'plein air art',
    'storybook hero',
    'brush typography',
    'organic mask',
    'pastoral landscape',
    'react hero component',
    'nextjs',
    'tailwind css',
    'Flourish UI',
    'Zuhaib Rashid',
  ],
  authors: [{ name: 'Zuhaib Rashid', url: 'https://www.zuhaibrashid.com' }],
  creator: 'Zuhaib Rashid',
  publisher: 'Flourish UI',
  category: 'Design & Technology',
  alternates: {
    canonical: '/components/create-from-the-heart',
  },
  openGraph: {
    title: 'Create from the Heart | Wilde & Co. — Flourish UI',
    description:
      'An artisanal pastoral storybook hero component featuring organic brush calligraphy, plein air landscape art, and interactive cottagecore studio aesthetics.',
    url: '/components/create-from-the-heart',
    siteName: 'Flourish UI',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://raw.githubusercontent.com/Zuhaib-dev/Flourish-UI/main/create-from-the-heart/public/Preview.png',
        width: 1200,
        height: 630,
        alt: 'Create from the Heart Hero Preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Create from the Heart | Zuhaib Rashid — Flourish UI',
    description:
      'Artisanal pastoral hero landing page with plein air sheep hillside painting and brush calligraphy.',
    creator: '@xuhaibx9',
    images: [
      'https://raw.githubusercontent.com/Zuhaib-dev/Flourish-UI/main/create-from-the-heart/public/Preview.png',
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
  themeColor: '#faf8f5',
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
              name: 'Create from the Heart',
              description:
                'An artisanal pastoral storybook hero component featuring organic brush calligraphy, plein air landscape art, and interactive cottagecore studio aesthetics.',
              programmingLanguage: 'TypeScript',
              author: {
                '@type': 'Person',
                name: 'Zuhaib Rashid',
                url: 'https://www.zuhaibrashid.com',
                sameAs: [
                  'https://github.com/Zuhaib-dev',
                  'https://x.com/xuhaib_x9',
                  'https://www.linkedin.com/in/zuhaib-rashid-661345318/',
                ],
              },
            }),
          }}
        />
      </head>
      <body className="antialiased bg-[#faf8f5]">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
