import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cold Flame Drift - Flourish UI",
  description: "A field of grainy, hand-printed risograph flames sliding along a diagonal with interactive mouse curl and flare rings.",
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
