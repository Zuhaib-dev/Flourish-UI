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
  title: "Zuhaib Rashid's GitHub Skyline",
  description: "A gorgeous 3D isometric GitHub contribution skyline for Zuhaib Rashid (@zuhaib-dev).",
  keywords: ["GitHub", "Contributions", "Skyline", "3D", "Canvas", "React", "Zuhaib Rashid", "zuhaib-dev"],
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
