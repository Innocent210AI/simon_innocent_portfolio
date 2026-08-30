import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, JetBrains_Mono } from 'next/font/google'
import { Header } from '@/components/site/header'
import { Footer } from '@/components/site/footer'
import { ElectricCursor } from '@/components/motion/electric-cursor'
import { site } from '@/lib/content/site'
import './globals.css'

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://innocent-simon.vercel.app'),
  title: {
    default: 'Innocent Simon — Innovator, Technologist & STEM Educator',
    template: '%s | Innocent Simon',
  },
  description: site.intro,
  keywords: [
    'Innocent Simon',
    'STEM educator',
    'electronics technologist',
    'robotics',
    'renewable energy',
    'innovation',
    'engineering portfolio',
    'Tanzania',
    'prototyping',
  ],
  authors: [{ name: 'Innocent Simon' }],
  openGraph: {
    title: 'Innocent Simon — Innovator, Technologist & STEM Educator',
    description: site.intro,
    type: 'website',
    images: [{ url: site.portrait ?? '/images/hero-robot.png' }],
  },
  generator: 'v0.app',
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#050914',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${jetbrainsMono.variable} bg-background`}
    >
      <body className="antialiased font-sans">
        <a href="#main" className="skip-link">
          Skip to content
        </a>
        <ElectricCursor />
        <Header />
        <main id="main">{children}</main>
        <Footer />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
