import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Flower Select UI Design',
  description: 'Created with v0',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/previews/bloom-select/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/previews/bloom-select/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/previews/bloom-select/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/previews/bloom-select/apple-icon.png',
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
