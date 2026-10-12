import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Northstar — Independent Creative Practice',
  description: 'Northstar is a small creative studio for brands, people, and places with something to say.',
  generator: 'Zuhaib Rashid',
  icons: {
    icon: [
      {
        url: '/previews/kinetic-hover/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/previews/kinetic-hover/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/previews/kinetic-hover/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/previews/kinetic-hover/apple-icon.png',
  },
  authors: [{ name: "Zuhaib Rashid", url: "https://www.zuhaibrashid.com" }],
  creator: "Zuhaib Rashid",
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
