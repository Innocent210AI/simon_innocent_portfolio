import type { Metadata } from 'next'
import { FileText, Star } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { CtaBand } from '@/components/cta-band'
import { publications, featuredPublication } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Publications & Presentations',
  description:
    'Technical presentations, research projects, competition entries, and global forum materials by Innocent Simon.',
}

function groupByCategory<T extends { category: string }>(items: T[]) {
  const map = new Map<string, T[]>()
  for (const item of items) {
    const list = map.get(item.category) ?? []
    list.push(item)
    map.set(item.category, list)
  }
  return Array.from(map.entries())
}

export default function PublicationsPage() {
  const groups = groupByCategory(publications)

  return (
    <>
      <PageHero
        eyebrow="Publications & Presentations"
        title="Presenting ideas on national and global stages"
        description="Technical presentations, academic research, competition entries, and materials shared at innovation forums around the world."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Publications' }]}
      />

      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        {/* Featured */}
        <Reveal>
          <article className="relative overflow-hidden rounded-3xl border border-primary/20 bg-navy p-8 text-navy-foreground sm:p-10">
            <div className="absolute inset-0 bg-grid-navy opacity-40" aria-hidden="true" />
            <div
              className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-primary/25 blur-3xl"
              aria-hidden="true"
            />
            <div className="relative">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-navy-foreground/15 bg-navy-foreground/5 px-3 py-1 text-mono-label text-[11px] text-primary">
                <Star className="size-3.5" aria-hidden="true" />
                Featured Publication
              </span>
              <h2 className="mt-5 text-balance font-display text-2xl font-bold sm:text-3xl">
                {featuredPublication.title}
              </h2>
              <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-navy-foreground/70">
                <span className="text-primary">{featuredPublication.type}</span>
                <span aria-hidden="true">·</span>
                <span>{featuredPublication.year}</span>
                <span aria-hidden="true">·</span>
                <span>{featuredPublication.category}</span>
              </div>
              <p className="mt-4 max-w-2xl text-pretty leading-relaxed text-navy-foreground/80">
                {featuredPublication.description}
              </p>
            </div>
          </article>
        </Reveal>

        {/* Grouped list */}
        <div className="mt-16 space-y-14">
          {groups.map(([category, items]) => (
            <div key={category}>
              <SectionHeading eyebrow={`${items.length} item${items.length > 1 ? 's' : ''}`} title={category} />
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {items.map((pub, i) => (
                  <Reveal key={pub.title} delay={i * 50}>
                    <article className="flex h-full gap-4 rounded-2xl border border-border bg-card p-5">
                      <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <FileText className="size-5" aria-hidden="true" />
                      </span>
                      <div>
                        <h3 className="text-pretty font-display text-base font-semibold leading-snug text-foreground">
                          {pub.title}
                        </h3>
                        <div className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-0.5 text-xs text-muted-foreground">
                          <span className="text-mono-label text-[10px] text-primary">{pub.type}</span>
                          <span aria-hidden="true">·</span>
                          <span>{pub.year}</span>
                        </div>
                        <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
                          {pub.description}
                        </p>
                      </div>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  )
}
