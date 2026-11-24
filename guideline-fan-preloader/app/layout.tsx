import type { Metadata } from "next"

import "./globals.css"

const description =
  "An editorial React preloader that unfolds seven photographs through a fan, a rotating cube, a picture ring, and a double-sided print."

export const metadata: Metadata = {
  title: "Guideline Fan Preloader | Flourish UI",
  description,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
