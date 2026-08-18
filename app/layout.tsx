import './globals.css';
import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';

export const metadata: Metadata = {
  title: {
    default: 'FAECOM INC. | Architecture · BIM · Structural Engineering · MEP',
    template: '%s | FAECOM INC.',
  },
  description:
    'FAECOM INC. — Award-winning Architecture, Structural Engineering, Architectural BIM, LGSF, ICF, Timber Engineering and MEP Engineering across 10+ countries.',
  keywords: [
    'structural engineering',
    'architectural BIM',
    'LGSF engineering',
    'ICF construction',
    'mass timber engineering',
    'MEP engineering',
    'industrial buildings',
    'architecture firm',
    'FAECOM',
  ],
  authors: [{ name: 'FAECOM INC.' }],
  creator: 'FAECOM INC.',
  metadataBase: new URL('https://faecom.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://faecom.com',
    siteName: 'FAECOM INC.',
    title: 'FAECOM INC. | Engineering the Future',
    description:
      'World-class Architecture, Structural Engineering, BIM, LGSF, ICF, Timber, MEP and Industrial Buildings.',
    images: [{ url: '/images/hero.png', width: 1200, height: 630, alt: 'FAECOM INC.' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FAECOM INC. | Engineering the Future',
    description:
      'World-class Architecture, Structural Engineering, BIM, LGSF, ICF, Timber, MEP and Industrial Buildings.',
    images: ['/images/hero.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-video-preview': -1, 'max-image-preview': 'large' },
  },
  icons: {
    icon: '/images/logo.png',
    shortcut: '/images/logo.png',
    apple: '/images/logo.png',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SmoothScroll>
          <Nav />
          <main id="main-content">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
