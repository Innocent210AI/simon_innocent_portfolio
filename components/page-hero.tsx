import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumbs,
}: {
  eyebrow: string
  title: string
  description?: string
  breadcrumbs?: { label: string; href?: string }[]
}) {
  return (
    <section className="relative overflow-hidden border-b border-border bg-navy text-navy-foreground">
      <div className="absolute inset-0 bg-grid-navy opacity-60" aria-hidden="true" />
      <div
        className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/25 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-6xl px-4 pb-14 pt-28 sm:px-6 md:pt-32 lg:px-8">
        {breadcrumbs ? (
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-1 text-sm text-navy-foreground/70">
              {breadcrumbs.map((c, i) => (
                <li key={c.label} className="flex items-center gap-1">
                  {c.href ? (
                    <Link href={c.href} className="transition-colors hover:text-navy-foreground">
                      {c.label}
                    </Link>
                  ) : (
                    <span className="text-navy-foreground">{c.label}</span>
                  )}
                  {i < breadcrumbs.length - 1 ? (
                    <ChevronRight className="size-3.5 text-navy-foreground/40" aria-hidden="true" />
                  ) : null}
                </li>
              ))}
            </ol>
          </nav>
        ) : null}
        <div className="flex items-center gap-2">
          <span className="h-px w-8 bg-primary" aria-hidden="true" />
          <span className="text-mono-label text-xs font-semibold text-primary/90">{eyebrow}</span>
        </div>
        <h1 className="mt-4 max-w-3xl text-balance text-4xl font-bold tracking-tight sm:text-5xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-5 max-w-2xl text-pretty text-lg leading-relaxed text-navy-foreground/75">
            {description}
          </p>
        ) : null}
      </div>
    </section>
  )
}
