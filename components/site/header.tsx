'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navItems, site } from '@/lib/content/site'

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => setOpen(false), [pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const isActive = (to: string) => pathname === to || pathname.startsWith(`${to}/`)

  return (
    <header
      data-scrolled={scrolled}
      className="fixed inset-x-0 top-0 z-50 glass-nav transition-shadow duration-500 data-[scrolled=true]:shadow-[0_10px_40px_-24px_rgba(4,16,31,0.9)]"
    >
      <div className="shell flex h-16 items-center justify-between md:h-[74px]">
        <Link
          href="/"
          className="group flex items-center gap-3"
          aria-label={`${site.name} — home`}
        >
          <span className="relative flex size-2.5 items-center justify-center">
            <span className="absolute inset-0 rounded-full bg-electric animate-pulse-electric" />
            <span className="size-1 rounded-full bg-arc" />
          </span>
          <span className="text-sm font-semibold tracking-tight text-arctic">{site.name}</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
          {navItems.map((item) => (
            <Link
              key={item.to}
              href={item.to}
              data-active={isActive(item.to)}
              className="relative rounded-control px-3.5 py-2 text-sm text-mist/75 transition-colors hover:text-arctic data-[active=true]:text-arctic"
            >
              {item.label}
              <span className="pointer-events-none absolute inset-x-3.5 bottom-1 h-px origin-left scale-x-0 bg-electric transition-transform duration-300 group-data-[active=true]:scale-x-100 data-[active=true]:scale-x-100" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className="hidden rounded-control border border-electric/40 bg-signal/15 px-4 py-2 text-sm font-medium text-arctic transition-colors hover:bg-signal/30 md:inline-flex"
          >
            Get in touch
          </Link>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="inline-flex size-11 items-center justify-center rounded-control border border-white/12 text-arctic md:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      <div id="mobile-nav" hidden={!open} className="border-t border-white/10 bg-midnight/95 md:hidden">
        <nav className="shell flex flex-col py-4" aria-label="Mobile">
          {navItems.map((item, i) => (
            <Link
              key={item.to}
              href={item.to}
              style={{ animationDelay: `${i * 45}ms` }}
              data-active={isActive(item.to)}
              className="reveal-up border-b border-white/8 py-4 text-lg font-medium text-mist data-[active=true]:text-electric"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}
