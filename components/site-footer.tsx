import Link from 'next/link'
import { CircuitBoard, Mail, Linkedin, ArrowUpRight } from 'lucide-react'
import { nav, profile } from '@/lib/data'

export function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-navy text-navy-foreground">
      <div className="absolute inset-0 bg-grid-navy opacity-40" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Link href="/" className="flex items-center gap-2.5" aria-label="Innocent Simon — Home">
              <span className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <CircuitBoard className="size-5" aria-hidden="true" />
              </span>
              <span className="font-display text-base font-bold tracking-tight">Innocent Simon</span>
            </Link>
            <p className="mt-4 max-w-sm text-pretty text-sm leading-relaxed text-navy-foreground/70">
              Innovator, STEM educator, and electronics technologist building practical solutions
              through electronics, robotics, engineering design, and innovation.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-lg border border-navy-foreground/15 bg-navy-foreground/5 px-3 py-2 text-sm transition-colors hover:bg-navy-foreground/10"
              >
                <Mail className="size-4 text-primary" aria-hidden="true" />
                Email
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-navy-foreground/15 bg-navy-foreground/5 px-3 py-2 text-sm transition-colors hover:bg-navy-foreground/10"
              >
                <Linkedin className="size-4 text-primary" aria-hidden="true" />
                LinkedIn
                <ArrowUpRight className="size-3.5 text-navy-foreground/50" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div>
            <h2 className="text-mono-label text-xs font-semibold text-navy-foreground/60">Navigate</h2>
            <ul className="mt-4 space-y-2.5">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-navy-foreground/75 transition-colors hover:text-navy-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-mono-label text-xs font-semibold text-navy-foreground/60">Get in touch</h2>
            <ul className="mt-4 space-y-2.5 text-sm text-navy-foreground/75">
              <li>
                <a href={`mailto:${profile.email}`} className="break-all transition-colors hover:text-navy-foreground">
                  {profile.email}
                </a>
              </li>
              <li>{profile.location}</li>
              <li>
                <Link href="/resume" className="transition-colors hover:text-navy-foreground">
                  Download Resume
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-3 border-t border-navy-foreground/10 pt-6 text-xs text-navy-foreground/50 sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Innocent Simon. All rights reserved.</p>
          <p className="text-mono-label">Engineering · Innovation · STEM · Leadership</p>
        </div>
      </div>
    </footer>
  )
}
