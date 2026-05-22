import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Sony WH-1000XM6 | Beyond Quiet',
  description: 'A premium product experience for Sony WH-1000XM6 wireless noise cancelling headphones.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preload" as="image" href="/frames/headphone/ezgif-frame-001.jpg" />
        <link rel="preload" as="image" href="/frames/headphone/ezgif-frame-002.jpg" />
        <link rel="preload" as="image" href="/frames/headphone/ezgif-frame-003.jpg" />
        <link rel="preload" as="image" href="/frames/headphone/ezgif-frame-004.jpg" />
        <link rel="preload" as="image" href="/frames/headphone/ezgif-frame-005.jpg" />
      </head>
      <body>{children}</body>
    </html>
  );
}
