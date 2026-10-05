import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Folio Guestbook',
  description: 'A skeuomorphic digital guestbook',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@500;700&amp;family=Epilogue:wght@600;700&amp;family=Kalam:wght@400&amp;family=Literata:ital,wght@0,400;0,600;1,400&amp;family=Patrick+Hand&amp;family=Shadows+Into+Light&amp;family=Work+Sans:wght@500;600&amp;display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&amp;display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased selection:bg-primary-fixed selection:text-on-primary-fixed">
        {children}
      </body>
    </html>
  );
}
