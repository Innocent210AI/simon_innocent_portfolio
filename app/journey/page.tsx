import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { Reveal } from '@/components/reveal'
import { CtaBand } from '@/components/cta-band'
import { timeline } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Innovation Journey',
  description:
    "Innocent Simon's innovation journey — from early experimentation with local materials to electronics training, international science forums, and university.",
}

export default function JourneyPage() {
  return (
    <>
      <PageHero
        eyebrow="Innovation Journey"
        title="A lifelong path of building and learning"
        description="From taking apart objects as a child to representing Africa on international stages — a continuous journey of curiosity, craft, and impact."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Journey' }]}
      />

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <ol className="relative">
          <span
            className="absolute left-[15px] top-2 bottom-2 w-px bg-border sm:left-[19px]"
            aria-hidden="true"
          />
          {timeline.map((item, i) => (
            <li key={item.stage} className="relative pl-12 pb-12 last:pb-0 sm:pl-16">
              <span
                className="absolute left-0 top-4 z-10 flex size-8 items-center justify-center rounded-full border border-primary/30 bg-card text-mono-label text-xs font-semibold text-primary sm:size-10"
                aria-hidden="true"
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <Reveal delay={i * 60}>
                <div className="rounded-2xl border border-border bg-card p-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h2 className="font-display text-lg font-semibold text-foreground">
                      {item.stage}
                    </h2>
                    <span className="text-mono-label text-[11px] text-muted-foreground">
                      {item.period}
                    </span>
                  </div>
                  <p className="mt-3 text-pretty text-sm leading-relaxed text-muted-foreground">
                    {item.body}
                  </p>
                  {item.bullets ? (
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {item.bullets.map((b) => (
                        <li
                          key={b}
                          className="rounded-lg border border-border bg-muted/50 px-3 py-1.5 text-xs font-medium text-foreground"
                        >
                          {b}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </section>

      <CtaBand />
    </>
  )
}
