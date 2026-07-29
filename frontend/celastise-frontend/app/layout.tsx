import type { Metadata, Viewport } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'CELASTISE - Luxury Timepieces | Premium Watches',
  description:
    'Discover exquisite luxury watches and timepieces. Premium craftsmanship meets timeless elegance. Explore our exclusive collection of Rolex, Patek Philippe, and more.',
  keywords: [
    'luxury watches',
    'premium timepieces',
    'rolex',
    'patek philippe',
    'watch collection',
    'swiss watches',
    'chronograph',
    'automatic watches',
  ],
  authors: [{ name: 'CELASTISE' }],
  creator: 'CELASTISE',
  publisher: 'CELASTISE',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://celastise.com',
    title: 'CELASTISE - Luxury Timepieces',
    description: 'Premium luxury watch collection with exquisite craftsmanship',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'CELASTISE Luxury Watches',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CELASTISE - Luxury Timepieces',
    description: 'Premium luxury watch collection',
    images: ['/og-image.jpg'],
    creator: '@celastise',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#ba9d7f',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="theme-color" content="#ba9d7f" />
        <link rel="canonical" href="https://celastise.com" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body className="bg-celastise-50 text-celastise-900">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
