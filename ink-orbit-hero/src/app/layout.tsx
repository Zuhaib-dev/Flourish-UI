import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ink Orbit Hero - Zuhaib Rashid",
  description: "A stunning hero section featuring a generative 3D ink sculpture that responds to drag, tilt, and click gestures.",
  keywords: ["Hero", "Ink Orbit", "3D", "Canvas", "React", "Zuhaib Rashid", "zuhaib-dev"],
  authors: [{ name: "Zuhaib Rashid" }],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
