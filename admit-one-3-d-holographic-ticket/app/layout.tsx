import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Admit One 3D Holographic Ticket - Flourish UI",
  description: "A high-fidelity 3D holographic foil admission ticket featuring procedural WebGL shaders and interactive physical tilt.",
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
