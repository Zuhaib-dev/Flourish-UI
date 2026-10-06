import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Digital Journal | Flourish UI",
  description: "A photorealistic 3D digital journal with interactive flipbook mechanics and cinematic visuals.",
  keywords: ["react", "nextjs", "journal", "flipbook", "3d", "framer-motion", "tailwind"],
  authors: [{ name: "Zuhaib Rashid" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${inter.variable} antialiased bg-[#f2f1ef]`}>
        {children}
      </body>
    </html>
  );
}
