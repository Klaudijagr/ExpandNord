import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'ExpandNord',
  description: 'Grow in the Nordics',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
