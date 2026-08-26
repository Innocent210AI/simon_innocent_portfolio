import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { Reveal } from '@/components/reveal'
import { CtaBand } from '@/components/cta-band'
import { Icon } from '@/components/icon'
import { experienceGroups } from '@/lib/data'

export const metadata: Metadata = {
  title: 'Experience & Leadership',
  description:
    'Professional, technical, leadership, and community experience of Innocent Simon — from electronics engineering roles to STEM education and international programs.',
}

export default function ExperiencePage() {
  return (
    <>
      <PageHero
        eyebrow="Experience & Leadership"
        title="Where I've worked, taught, and led"
        description="A record of professional roles, leadership positions, STEM education work, and international engagement across engineering, innovation, and community."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Experience' }]}
      />

      <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="space-y-16">
          {experienceGroups.map((group) => (
            <section key={group.id} aria-labelledby={`group-${group.id}`}>
              <Reveal className="flex items-start gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Icon name={group.icon} className="size-5" />
                </span>
                <div>
                  <h2
                    id={`group-${group.id}`}
                    className="text-balance font-display text-2xl font-bold text-navy"
                  >
                    {group.title}
                  </h2>
                  <p className="mt-1 text-pretty text-sm leading-relaxed text-muted-foreground">
                    {group.description}
                  </p>
                </div>
              </Reveal>

              <div className="mt-8 space-y-4 sm:pl-15">
                {group.items.map((item, i) => (
                  <Reveal key={`${item.role}-${i}`} delay={i * 60}>
                    <article className="rounded-2xl border border-border bg-card p-6">
                      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                        <h3 className="font-display text-lg font-semibold text-foreground">
                          {item.role}
                        </h3>
                        {item.period ? (
                          <span className="text-mono-label text-[11px] text-primary">
                            {item.period}
                          </span>
                        ) : null}
                      </div>
                      <p className="mt-1 text-sm font-medium text-muted-foreground">{item.org}</p>
                      {item.location ? (
                        <p className="mt-0.5 text-xs text-muted-foreground/70">{item.location}</p>
                      ) : null}

                      <ul className="mt-4 space-y-2">
                        {item.bullets.map((b, j) => (
                          <li key={j} className="flex gap-2.5 text-sm leading-relaxed text-muted-foreground">
                            <span
                              className="mt-2 size-1.5 shrink-0 rounded-full bg-primary/60"
                              aria-hidden="true"
                            />
                            <span className="text-pretty">{b}</span>
                          </li>
                        ))}
                      </ul>

                      {item.skills?.length ? (
                        <div className="mt-4 flex flex-wrap gap-2">
                          {item.skills.map((s) => (
                            <span
                              key={s}
                              className="rounded-lg border border-border bg-muted/50 px-2.5 py-1 text-xs text-foreground"
                            >
                              {s}
                            </span>
                          ))}
                        </div>
                      ) : null}
                    </article>
                  </Reveal>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>

      <CtaBand />
    </>
  )
}
