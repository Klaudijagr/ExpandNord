import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const viewport: Viewport = {
  themeColor: '#0A2D28',
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: 'ExpandNord – Baltic ↔ Nordic Business Expansion',
  description:
    'Business expansion consultancy connecting Baltic and Nordic markets. Expert guidance for market entry, legal compliance, and business development.',
  keywords: [
    'business expansion',
    'Baltic',
    'Nordic',
    'Lithuania',
    'Norway',
    'market entry',
    'consultancy',
  ],
  authors: [{ name: 'ExpandNord' }],
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/favicon.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  openGraph: {
    title: 'ExpandNord – Baltic ↔ Nordic Business Expansion',
    description: 'Business expansion consultancy connecting Baltic and Nordic markets.',
    type: 'website',
    locale: 'en_US',
    siteName: 'ExpandNord',
    url: 'https://expandnord.com',
    images: [
      {
        url: 'https://expandnord.com/hero.webp',
        alt: 'ExpandNord - Baltic and Nordic Business Expansion',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ExpandNord – Baltic ↔ Nordic Business Expansion',
    description: 'Business expansion consultancy connecting Baltic and Nordic markets.',
    images: ['https://expandnord.com/hero.webp'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-sans">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
