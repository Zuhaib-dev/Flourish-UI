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
  title: "Voyage Planner | Flourish UI",
  description: "A gorgeous, soft-skeuomorphic trip planner widget featuring realistic ticket cutouts and glassmorphic folders.",
  keywords: ["react", "nextjs", "voyage", "travel", "skeuomorphic", "glassmorphism", "tailwind", "framer-motion"],
  authors: [{ name: "Zuhaib Rashid" }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
