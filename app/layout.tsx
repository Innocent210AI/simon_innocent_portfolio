import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://innocent-simon.vercel.app'),
  title: {
    default: 'Innocent Simon — Innovator, STEM Educator & Electronics Technologist',
    template: '%s | Innocent Simon',
  },
  description:
    'Portfolio of Innocent Simon — innovator, STEM educator, and electronics technologist building practical solutions through electronics, robotics, engineering design, and innovation.',
  keywords: [
    'Innocent Simon',
    'STEM educator',
    'electronics technician',
    'robotics',
    'innovation',
    'engineering portfolio',
    'Tanzania',
    'prototyping',
  ],
  authors: [{ name: 'Innocent Simon' }],
  openGraph: {
    title: 'Innocent Simon — Innovator, STEM Educator & Electronics Technologist',
    description:
      'Building practical solutions through electronics, robotics, STEM education, engineering design, and innovation.',
    type: 'website',
  },
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#1877f2',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} bg-background`}>
      <body className="antialiased font-sans">
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
