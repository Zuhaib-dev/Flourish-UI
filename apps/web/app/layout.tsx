import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google'
import WebMcpProvider from './webmcp-provider'
import { stats } from '@/config/components'
import './globals.css'

const cormorantGaramond = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
})

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-jakarta',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://flourish-ui.vercel.app'),
  alternates: {
    canonical: '/',
    types: {
      'application/rss+xml': 'https://flourish-ui.vercel.app/feed.xml',
    },
  },
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
    <html
      lang="en"
      className={`light ${cormorantGaramond.variable} ${playfairDisplay.variable} ${plusJakartaSans.variable}`}
      suppressHydrationWarning
    >
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
                  alternateName: 'flourish-ui.vercel.app',
                  description: 'An open collection of expressive, interactive React components with live previews and copyable source.',
                  inLanguage: 'en',
                  author: { '@id': 'https://www.zuhaibrashid.com/#person' },
                  publisher: { '@id': 'https://flourish-ui.vercel.app/#organization' },
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
                  '@type': 'SoftwareSourceCode',
                  '@id': 'https://flourish-ui.vercel.app/#software-source',
                  name: 'Flourish UI Component Library',
                  codeRepository: 'https://github.com/Zuhaib-dev/Flourish-UI',
                  programmingLanguage: 'TypeScript',
                  runtimePlatform: 'React and Next.js',
                  license: 'https://opensource.org/licenses/MIT',
                  author: { '@id': 'https://www.zuhaibrashid.com/#person' },
                  publisher: { '@id': 'https://flourish-ui.vercel.app/#organization' },
                  description: `An open-source collection of ${stats.components}+ expressive React and Next.js components with live previews, WebGL shaders, tactile skeuomorphism, and shadcn CLI registry support.`,
                  url: 'https://flourish-ui.vercel.app',
                },
                {
                  '@type': 'ItemList',
                  '@id': 'https://flourish-ui.vercel.app/#sitenav',
                  name: 'Flourish UI Navigation Links',
                  description: 'Primary navigation and sections of Flourish UI',
                  itemListElement: [
                    {
                      '@type': 'SiteNavigationElement',
                      position: 1,
                      name: 'Components',
                      description: `Browse ${stats.components}+ expressive React components with live previews, spring motion, and source code.`,
                      url: 'https://flourish-ui.vercel.app/components',
                    },
                    {
                      '@type': 'SiteNavigationElement',
                      position: 2,
                      name: 'Registry',
                      description: 'Install components directly into Next.js and React projects with the shadcn CLI.',
                      url: 'https://flourish-ui.vercel.app/registry',
                    },
                    {
                      '@type': 'SiteNavigationElement',
                      position: 3,
                      name: 'Developers',
                      description: 'REST API, OpenAPI 3.1 specifications, LLM feeds (llms.txt), and developer tools.',
                      url: 'https://flourish-ui.vercel.app/developers',
                    },
                    {
                      '@type': 'SiteNavigationElement',
                      position: 4,
                      name: 'About',
                      description: 'The story, design philosophy, and principles behind Flourish UI by Zuhaib Rashid.',
                      url: 'https://flourish-ui.vercel.app/about',
                    },
                    {
                      '@type': 'SiteNavigationElement',
                      position: 5,
                      name: 'Changelog',
                      description: 'Release notes, version milestones, and newly published React components.',
                      url: 'https://flourish-ui.vercel.app/changelog',
                    },
                    {
                      '@type': 'SiteNavigationElement',
                      position: 6,
                      name: 'Contact',
                      description: 'Contact creator Zuhaib Rashid for questions, collaboration, or custom requests.',
                      url: 'https://flourish-ui.vercel.app/contact',
                    },
                  ],
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
