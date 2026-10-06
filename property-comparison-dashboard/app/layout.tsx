import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Property Dashboard | Flourish UI",
  description: "A highly interactive, fluid property comparison dashboard with framer-motion animations.",
  authors: [{ name: "Zuhaib Rashid" }]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans bg-[#f7f6f0] text-neutral-800 antialiased h-screen overflow-hidden`}>
        {children}
      </body>
    </html>
  );
}
