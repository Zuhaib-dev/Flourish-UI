import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Verify Email",
  description: "Skeuomorphic email verification component.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans bg-[#f6f4eb] text-neutral-900 antialiased min-h-screen flex flex-col`}>
        {children}
      </body>
    </html>
  );
}
