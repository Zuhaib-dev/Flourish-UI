import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import WebMcpProvider from './webmcp-provider'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://flourish-ui.vercel.app'),
  alternates: { canonical: '/' },
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
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
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
  verification: {
    google: 'terZRkP5xAisMxUTVWZ_rW6MXSuOeuAFITryD0CBDxA',
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
                  description: 'Full Stack Developer and UI engineer creating expressive React and Next.js components.',
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
                  '@id': 'https://flourish-ui.vercel.app/#website',
                  url: 'https://flourish-ui.vercel.app/',
                  name: 'Flourish UI',
                  description: 'An open collection of expressive, interactive React components with live previews and copyable source.',
                  inLanguage: 'en',
                  author: { '@id': 'https://www.zuhaibrashid.com/#person' },
                  publisher: { '@id': 'https://flourish-ui.vercel.app/#organization' },
                  potentialAction: {
                    '@type': 'SearchAction',
                    target: {
                      '@type': 'EntryPoint',
                      urlTemplate: 'https://flourish-ui.vercel.app/components?search={search_term_string}',
                    },
                    'query-input': 'required name=search_term_string',
                  },
                },
                {
                  '@type': 'Organization',
                  '@id': 'https://flourish-ui.vercel.app/#organization',
                  name: 'Flourish UI',
                  url: 'https://flourish-ui.vercel.app/',
                  logo: 'https://flourish-ui.vercel.app/icon.svg',
                  founder: { '@id': 'https://www.zuhaibrashid.com/#person' },
                  sameAs: ['https://github.com/Zuhaib-dev/Flourish-UI'],
                  contactPoint: {
                    '@type': 'ContactPoint',
                    contactType: 'customer support',
                    email: 'zuhaibrashid01@gmail.com',
                    url: 'https://www.zuhaibrashid.com',
                  },
                  address: {
                    '@type': 'PostalAddress',
                    addressLocality: 'Srinagar',
                    addressRegion: 'Jammu and Kashmir',
                    addressCountry: 'IN',
                  },
                },
                {
                  '@type': 'SoftwareApplication',
                  '@id': 'https://flourish-ui.vercel.app/#software',
                  name: 'Flourish UI',
                  applicationCategory: 'DeveloperApplication',
                  operatingSystem: 'Any',
                  offers: {
                    '@type': 'Offer',
                    price: '0',
                    priceCurrency: 'USD',
                  },
                  license: 'https://opensource.org/licenses/MIT',
                  author: { '@id': 'https://www.zuhaibrashid.com/#person' },
                  publisher: { '@id': 'https://flourish-ui.vercel.app/#organization' },
                  description: 'An open-source collection of 50+ expressive React and Next.js components with live previews, WebGL shaders, tactile skeuomorphism, and shadcn CLI registry support.',
                  url: 'https://flourish-ui.vercel.app',
                },
              ],
            }).replace(/</g, '\\u003c'),
          }}
        />
        <WebMcpProvider />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
