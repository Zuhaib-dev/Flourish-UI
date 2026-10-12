import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://flourish-ui.dev'),
  title: {
    default: 'Flourish UI — Expressive React Components',
    template: '%s | Flourish UI',
  },
  description: 'Explore expressive, interactive React components with live previews. Copy the source, customize the details, and make them your own.',
  applicationName: 'Flourish UI',
  authors: [{ name: 'Zuhaib Rashid', url: 'https://www.zuhaibrashid.com' }],
  creator: 'Zuhaib Rashid',
  publisher: 'Flourish UI',
  category: 'Technology',
  keywords: [
    'Flourish UI',
    'React components',
    'interactive components',
    'Next.js components',
    'shadcn registry',
    'UI component library',
    'Zuhaib Rashid',
  ],
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
  icons: {
    icon: [
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
      { url: '/icon-light-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [{ url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }],
    shortcut: ['/icon.svg'],
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: '/',
    siteName: 'Flourish UI',
    title: 'Flourish UI — Expressive React Components',
    description: 'A considered collection of interactive React components. Explore live previews, then bring the source into your project.',
    images: [{
      url: '/og-image.png',
      width: 1200,
      height: 630,
      alt: 'Flourish UI — expressive React components, ready to explore and make your own',
    }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Flourish UI — Expressive React Components',
    description: 'Explore interactive React components with live previews. Copy the source and make them your own.',
    creator: '@xuhaibx9',
    images: [{ url: '/og-image.png', alt: 'Flourish UI component library' }],
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f5f4ef',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="light" suppressHydrationWarning>
      <body className="antialiased bg-[#f5f4ef] text-[#191916] min-h-screen selection:bg-orange-200/50 selection:text-[#191916]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@graph': [
                {
                  '@type': 'Person',
                  '@id': 'https://www.zuhaibrashid.com/#person',
                  name: 'Zuhaib Rashid',
                  url: 'https://www.zuhaibrashid.com',
                  jobTitle: 'Full Stack Developer',
                  sameAs: [
                    'https://x.com/xuhaib_x9',
                    'https://github.com/Zuhaib-dev',
                    'https://www.linkedin.com/in/zuhaib-rashid-661345318/',
                  ],
                  knowsAbout: ['React', 'Next.js', 'TypeScript', 'Node.js', 'UI engineering', 'Web accessibility'],
                  address: {
                    '@type': 'PostalAddress',
                    addressLocality: 'Srinagar',
                    addressRegion: 'Jammu and Kashmir',
                    addressCountry: 'IN',
                  },
                },
                {
                  '@type': 'WebSite',
                  '@id': 'https://flourish-ui.dev/#website',
                  url: 'https://flourish-ui.dev/',
                  name: 'Flourish UI',
                  description: 'An open collection of expressive, interactive React components with live previews and copyable source.',
                  inLanguage: 'en',
                  author: { '@id': 'https://www.zuhaibrashid.com/#person' },
                  publisher: { '@id': 'https://flourish-ui.dev/#organization' },
                },
                {
                  '@type': 'Organization',
                  '@id': 'https://flourish-ui.dev/#organization',
                  name: 'Flourish UI',
                  url: 'https://flourish-ui.dev/',
                  logo: 'https://flourish-ui.dev/icon.svg',
                  founder: { '@id': 'https://www.zuhaibrashid.com/#person' },
                  sameAs: ['https://github.com/Zuhaib-dev/Flourish-UI'],
                },
              ],
            }).replace(/</g, '\\u003c'),
          }}
        />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
