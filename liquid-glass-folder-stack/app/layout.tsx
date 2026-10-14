import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://flourish-ui.vercel.app"),
  title: "Liquid Glass Folder Stack | Zuhaib Rashid — Flourish UI",
  description:
    "Tactile 3D frosted-glass interactive folder component with procedural domain-warped liquid marble artwork, spring hinge physics, keyboard navigation, and dynamic file stacks.",
  keywords: [
    "liquid glass folder stack",
    "glass folder cards",
    "frosted glass folder",
    "glassmorphism",
    "tactile folder ui",
    "3d folder interaction",
    "procedural marble art",
    "domain warped noise",
    "interactive card stack",
    "react folder component",
    "nextjs",
    "tailwind css",
    "shadcn",
    "Flourish UI",
    "Zuhaib Rashid",
  ],
  authors: [{ name: "Zuhaib Rashid", url: "https://www.zuhaibrashid.com" }],
  creator: "Zuhaib Rashid",
  publisher: "Flourish UI",
  category: "Technology",
  alternates: {
    canonical: "/components/liquid-glass-folder-stack",
  },
  openGraph: {
    title: "Liquid Glass Folder Stack | Flourish UI",
    description:
      "A tactile 3D frosted-glass folder drawn as an object with procedural liquid marble art, spring hinge tilt, and expandable files.",
    url: "/components/liquid-glass-folder-stack",
    siteName: "Flourish UI",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://raw.githubusercontent.com/Zuhaib-dev/Flourish-UI/main/liquid-glass-folder-stack/public/Preview.png",
        width: 1200,
        height: 630,
        alt: "Liquid Glass Folder Stack Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Liquid Glass Folder Stack | Zuhaib Rashid — Flourish UI",
    description:
      "Tactile 3D frosted-glass folder cards with domain-warped liquid art and spring hinge physics.",
    creator: "@xuhaibx9",
    images: [
      "https://raw.githubusercontent.com/Zuhaib-dev/Flourish-UI/main/liquid-glass-folder-stack/public/Preview.png",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#09090b",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareSourceCode",
              name: "Liquid Glass Folder Stack",
              description:
                "Tactile 3D frosted-glass interactive folder component with procedural domain-warped liquid marble artwork and spring hinge physics.",
              programmingLanguage: "TypeScript",
              author: {
                "@type": "Person",
                name: "Zuhaib Rashid",
                url: "https://www.zuhaibrashid.com",
                sameAs: [
                  "https://github.com/Zuhaib-dev",
                  "https://x.com/xuhaib_x9",
                  "https://www.linkedin.com/in/zuhaib-rashid-661345318/",
                ],
              },
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
