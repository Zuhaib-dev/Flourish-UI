import type { Metadata } from 'next';
import { Outfit, Caveat, Dancing_Script } from 'next/font/google';
import './globals.css';

const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });
const caveat = Caveat({ subsets: ['latin'], variable: '--font-caveat' });
const dancingScript = Dancing_Script({ subsets: ['latin'], variable: '--font-dancing-script' });

export const metadata: Metadata = {
  title: 'Digital Signature Modal',
  description: 'Premium digital signature capture modal component.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${caveat.variable} ${dancingScript.variable}`}>
      <body className="font-sans bg-background text-on-surface antialiased selection:bg-primary/10">
        {children}
      </body>
    </html>
  );
}
