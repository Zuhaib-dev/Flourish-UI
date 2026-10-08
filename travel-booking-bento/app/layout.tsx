import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, Outfit, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-jakarta" });
const outfit = Outfit({ subsets: ["latin"], variable: "--font-outfit" });
const poppins = Poppins({ weight: ["400", "500", "600", "700", "800", "900"], subsets: ["latin"], variable: "--font-poppins" });

export const metadata: Metadata = {
  title: "Travel Booking Bento",
  description: "A beautiful travel booking bento dashboard",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable} ${outfit.variable} ${poppins.variable} font-sans antialiased bg-[#e2e3df]`}>
      <body>{children}</body>
    </html>
  );
}
