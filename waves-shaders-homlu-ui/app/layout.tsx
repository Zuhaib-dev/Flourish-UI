import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Waves Shaders - Flourish UI",
  description: "An interactive organic wave field shader background with perceptual OKLab color mixing and dynamic mouse displacement.",
  authors: [{ name: "Zuhaib Rashid", url: "https://www.zuhaibrashid.com" }],
  creator: "Zuhaib Rashid",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased dark">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
