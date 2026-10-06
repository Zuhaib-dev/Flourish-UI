import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sign Up Modal | Flourish UI",
  description: "A premium split-layout sign up modal with glassmorphism.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} font-sans bg-[#f4f3f0] text-neutral-900 antialiased h-screen overflow-hidden`}>
        {children}
      </body>
    </html>
  );
}
