import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'TuS Teamwear Sammelbestellung',
  description: 'Forza TuS',
  generator: 'soulstyled.de',
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
