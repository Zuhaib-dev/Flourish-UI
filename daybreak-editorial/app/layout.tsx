import type { Metadata } from 'next';
import { Newsreader, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const newsreader = Newsreader({ 
  subsets: ['latin'], 
  variable: '--font-newsreader',
  style: ['normal', 'italic'] 
});

const plusJakartaSans = Plus_Jakarta_Sans({ 
  subsets: ['latin'], 
  variable: '--font-plus-jakarta-sans' 
});

export const metadata: Metadata = {
  title: 'Daybreak Editorial',
  description: 'Sanctuary for Classical Narrative & Prose',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${newsreader.variable} ${plusJakartaSans.variable}`}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-background font-body-md text-on-surface antialiased">
        {children}
      </body>
    </html>
  );
}
