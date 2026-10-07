import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Agent Orchestration Dashboard",
  description: "A dark mode orchestrator for AI agents",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} antialiased font-sans bg-[#111113] text-white selection:bg-[#3b82f6] selection:text-white`}>
        {children}
      </body>
    </html>
  );
}
