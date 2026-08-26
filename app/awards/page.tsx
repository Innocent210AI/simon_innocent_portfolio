import type { Metadata } from 'next'
import { Award as AwardIcon, Radio } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { CtaBand } from '@/components/cta-band'
import { awards, mediaCoverage } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Awards & Recognition',
  description:
    'Awards, scholarships, competition recognition, and media coverage earned by Innocent Simon across innovation, STEM, and international programs.',
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

export default function AwardsPage() {
  const groups = groupByCategory(awards)

  return (
    <>
      <PageHero
        eyebrow="Awards & Recognition"
        title="Recognized for innovation and impact"
        description="Competition wins, scholarships, national finalist selections, and media coverage across Tanzania and international programs."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Awards' }]}
      />

      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="space-y-14">
          {groups.map(([category, items]) => (
            <div key={category}>
              <SectionHeading eyebrow={`${items.length} recognition${items.length > 1 ? 's' : ''}`} title={category} />
              <div className="mt-6 space-y-4">
                {items.map((award, i) => (
                  <Reveal key={award.title} delay={i * 50}>
                    <article className="flex gap-4 rounded-2xl border border-border bg-card p-6">
                      <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <AwardIcon className="size-5" aria-hidden="true" />
                      </span>
                      <div className="flex-1">
                        <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                          <h3 className="text-pretty font-display text-lg font-semibold text-foreground">
                            {award.title}
                          </h3>
                          <span className="text-mono-label text-[11px] text-primary">
                            {award.year}
                          </span>
                        </div>
                        <p className="mt-1 text-sm font-medium text-muted-foreground">{award.org}</p>
                        <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
                          {award.context}
                        </p>
                      </div>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Media coverage */}
        <div className="mt-16 rounded-3xl border border-border bg-muted/40 p-8 sm:p-10">
          <SectionHeading
            eyebrow="In the media"
            title="Coverage of the work"
            description="Television, radio, and newspaper features across Tanzania covering projects and STEM innovation."
          />
          <ul className="mt-8 flex flex-wrap gap-3">
            {mediaCoverage.map((m) => (
              <li
                key={m}
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-4 py-2.5 text-sm font-medium text-foreground"
              >
                <Radio className="size-4 text-primary" aria-hidden="true" />
                {m}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
