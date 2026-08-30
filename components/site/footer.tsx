import Link from 'next/link'
import { navItems, site } from '@/lib/content/site'

export function Footer() {
  const year = new Date().getFullYear()
  const links = site.links

  return (
    <footer className="surface-dark relative overflow-hidden border-t border-white/10">
      <div className="pointer-events-none absolute inset-0 grid-texture opacity-60" />
      <div className="shell relative py-16 lg:py-24">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="tech-label text-electric">Innocent Simon</p>
            <p className="mt-4 max-w-md heading-md text-arctic">{site.tagline}</p>
            <p className="mt-4 text-sm text-steel">{site.location}</p>
          </div>

          <nav aria-label="Footer">
            <p className="tech-label text-steel">Navigate</p>
            <ul className="mt-4 space-y-2.5">
              <li>
                <Link href="/" className="text-sm text-mist/80 transition-colors hover:text-electric">
                  Home
                </Link>
              </li>
              {navItems.map((item) => (
                <li key={item.to}>
                  <Link
                    href={item.to}
                    className="text-sm text-mist/80 transition-colors hover:text-electric"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="tech-label text-steel">Connect</p>
            <ul className="mt-4 space-y-2.5">
              {links.email && (
                <li>
                  <a
                    href={`mailto:${links.email}`}
                    className="text-sm text-mist/80 transition-colors hover:text-electric"
                  >
                    Email
                  </a>
                </li>
              )}
              {links.linkedin && (
                <li>
                  <a
                    href={links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-mist/80 transition-colors hover:text-electric"
                  >
                    LinkedIn
                  </a>
                </li>
              )}
              {links.github && (
                <li>
                  <a
                    href={links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-mist/80 transition-colors hover:text-electric"
                  >
                    GitHub
                  </a>
                </li>
              )}
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-mist/80 transition-colors hover:text-electric"
                >
                  Contact form
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="tech-label text-steel">© {year} Innocent Simon</p>
          <p className="tech-label text-steel">Built with intent · Tanzania → New York</p>
        </div>
      </div>
    </footer>
  )
}
