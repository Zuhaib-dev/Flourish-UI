import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://flourish-ui.vercel.app'),
  title: 'Genesis Onboarding Card | Zuhaib Rashid — Flourish UI',
  description:
    'A surreal 3D-illustrated onboarding card featuring profile photo upload, animated display name validation, and modern micro-interactions.',
  keywords: [
    'genesis onboarding card',
    'onboarding ui',
    '3d illustration card',
    'profile setup card',
    'photo upload component',
    'username input',
    'surreal tree 3d',
    'pixar aesthetic',
    'react component',
    'nextjs',
    'tailwind css',
    'Flourish UI',
    'Zuhaib Rashid',
  ],
  authors: [{ name: 'Zuhaib Rashid', url: 'https://www.zuhaibrashid.com' }],
  creator: 'Zuhaib Rashid',
  publisher: 'Flourish UI',
  category: 'Onboarding & UI Design',
  alternates: {
    canonical: '/components/genesis-onboarding-card',
  },
  openGraph: {
    title: 'Genesis Onboarding Card | Flourish UI',
    description:
      'A surreal 3D-illustrated onboarding card featuring profile photo upload, animated display name validation, and modern micro-interactions.',
    url: '/components/genesis-onboarding-card',
    siteName: 'Flourish UI',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://raw.githubusercontent.com/Zuhaib-dev/Flourish-UI/main/genesis-onboarding-card/public/Preview.png',
        width: 960,
        height: 1024,
        alt: 'Genesis Onboarding Card Preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Genesis Onboarding Card | Zuhaib Rashid — Flourish UI',
    description:
      'Surreal 3D-illustrated onboarding card with photo upload, username picker, and pixel-perfect aesthetics.',
    creator: '@xuhaibx9',
    images: [
      'https://raw.githubusercontent.com/Zuhaib-dev/Flourish-UI/main/genesis-onboarding-card/public/Preview.png',
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
  themeColor: '#ebebeb',
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
              name: 'Genesis Onboarding Card',
              description:
                'A surreal 3D-illustrated onboarding card featuring profile photo upload, animated display name validation, and modern micro-interactions.',
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
      <body className="antialiased bg-[#ebebeb]">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
