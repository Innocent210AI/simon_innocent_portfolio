import type { Metadata } from 'next'
import {
  arushaSchools,
  fieldNotes,
  kageraSchools,
  londonHighlights,
  route as travelRoute,
} from '@/lib/content/impact'
import { awards, mediaOutlets } from '@/lib/content/awards'
import { siteImages } from '@/lib/content/media'
import { Reveal } from '@/components/motion/reveal'
import { CountUp } from '@/components/motion/count-up'
import { SectionHeading } from '@/components/site/section-heading'

export const metadata: Metadata = {
  title: 'Impact — STEM Outreach, London & Recognition',
  description:
    'STEM outreach across Kagera and Arusha, the 63rd London International Youth Science Forum, national recognition, and media coverage.',
}

export default function ImpactPage() {
  return (
    <div className="surface-dark">
      <section className="relative overflow-hidden border-b border-white/10 pb-16 pt-32 lg:pb-20 lg:pt-44">
        <div className="pointer-events-none absolute inset-0 grid-texture opacity-60" />
        <div className="pointer-events-none absolute inset-0 radial-glow" />
        <div className="shell relative">
          <Reveal className="tech-label text-electric">Impact</Reveal>
          <h1 className="mt-6 display max-w-4xl text-arctic">Teaching is the part that scales.</h1>
          <Reveal delay={120} className="mt-7 max-w-2xl body-lg text-mist/70">
            Prototypes reach one room at a time. Students carry the thinking further — which is why
            most of the last three years went into classrooms, boot camps, and Saturday sessions.
          </Reveal>

          <Reveal
            delay={200}
            className="relative mt-12 overflow-hidden rounded-feature border border-white/10"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={siteImages.stemOutreach || '/placeholder.svg'}
              alt="Illustrative render of a hands-on STEM outreach session with students gathered around a demonstration model"
              loading="lazy"
              decoding="async"
              className="aspect-[21/9] w-full object-cover opacity-85"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-midnight via-midnight/20 to-transparent" />
            <span className="absolute right-4 top-4 rounded-full border border-white/15 bg-midnight/70 px-2.5 py-1 text-[10px] uppercase tracking-[0.16em] text-steel backdrop-blur">
              Render
            </span>
          </Reveal>
        </div>
      </section>

      {/* Field notes */}
      <section className="section-y">
        <div className="shell">
          <SectionHeading
            eyebrow="Field notes"
            title="Where the work actually happened."
            description="Every figure refers to the specific programme named beside it."
          />

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {fieldNotes.map((note, i) => (
              <Reveal
                key={note.index}
                delay={Math.min(i, 5) * 60}
                className="panel-dark flex flex-col p-6 lg:p-8"
              >
                <div className="flex items-baseline justify-between gap-4">
                  <span className="tech-label text-electric">{note.index}</span>
                  <span className="tech-label text-steel">{note.date}</span>
                </div>
                <h3 className="mt-4 heading-md text-arctic">{note.title}</h3>
                <p className="mt-1.5 text-sm text-steel">{note.place}</p>
                <p className="mt-4 flex-1 leading-relaxed text-mist/75">{note.body}</p>
                {note.stat && (
                  <p className="mt-6 border-t border-white/10 pt-4 tech-label text-arc">
                    {note.stat}
                  </p>
                )}
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Schools */}
      <section className="border-t border-white/10 bg-navy-deep section-y">
        <div className="shell grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeading
            eyebrow="Schools visited"
            title="Ten schools, two regions."
            description="Eight in Bukoba District, Kagera (2023) and two in Arusha (2024)."
          />
          <div className="grid gap-10 sm:grid-cols-2">
            <div>
              <p className="tech-label text-electric">
                Kagera · ~<CountUp value={3000} /> students
              </p>
              <ul className="mt-4 space-y-2.5">
                {kageraSchools.map((s) => (
                  <li key={s} className="flex gap-3 text-sm text-mist/75">
                    <span className="mt-2 size-1 shrink-0 rounded-full bg-electric/70" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="tech-label text-electric">Arusha</p>
              <ul className="mt-4 space-y-2.5">
                {arushaSchools.map((s) => (
                  <li key={s} className="flex gap-3 text-sm text-mist/75">
                    <span className="mt-2 size-1 shrink-0 rounded-full bg-electric/70" />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* London */}
      <section className="relative overflow-hidden border-t border-white/10 section-y">
        <div className="pointer-events-none absolute inset-0 radial-glow" />
        <div className="shell relative">
          <SectionHeading
            eyebrow="London 2022"
            title="The 63rd London International Youth Science Forum."
            description="Attended on a Clare Elwell Scholarship as a Young Scientist for Africa, representing ProjeKt Inspire, Tanzania, and Africa."
          />

          <Reveal delay={100} className="mt-12 panel-dark p-6 lg:p-8">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
              <div className="flex-1">
                <p className="tech-label text-steel">Origin</p>
                <p className="mt-2 heading-md text-arctic">{travelRoute.from.name}</p>
                <p className="mt-1 font-mono text-xs text-steel">{travelRoute.from.coords}</p>
              </div>
              <div className="relative h-px flex-1 bg-gradient-to-r from-electric/20 via-electric to-electric/20">
                <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-midnight px-3 tech-label text-electric">
                  {travelRoute.date}
                </span>
              </div>
              <div className="flex-1 sm:text-right">
                <p className="tech-label text-steel">Destination</p>
                <p className="mt-2 heading-md text-arctic">{travelRoute.to.name}</p>
                <p className="mt-1 font-mono text-xs text-steel">{travelRoute.to.coords}</p>
              </div>
            </div>
          </Reveal>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {londonHighlights.map((h, i) => (
              <Reveal
                key={h.title}
                delay={Math.min(i, 5) * 60}
                className="rounded-panel border border-white/10 p-6"
              >
                <h3 className="font-semibold text-arctic">{h.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-mist/70">{h.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition */}
      <section className="border-t border-white/10 bg-navy-deep section-y">
        <div className="shell">
          <SectionHeading
            eyebrow="Recognition"
            title="Awards, and who they belong to."
            description="Where an award was received by a team, it is labelled as such."
          />

          <div className="mt-12 divide-y divide-white/10 border-y border-white/10">
            {awards.map((a, i) => (
              <Reveal
                key={a.index}
                delay={Math.min(i, 5) * 50}
                className="grid gap-3 py-7 md:grid-cols-[60px_1fr_120px] md:items-start md:gap-8"
              >
                <span className="tech-label text-steel">{a.index}</span>
                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="heading-md text-arctic">{a.title}</h3>
                    {a.team && (
                      <span className="rounded-full border border-arc/40 px-2.5 py-0.5 text-[11px] text-arc">
                        Team award
                      </span>
                    )}
                  </div>
                  <p className="mt-1.5 text-sm text-steel">{a.organization}</p>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-mist/70">{a.context}</p>
                </div>
                <span className="tech-label text-electric md:text-right">{a.year}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Media */}
      <section className="border-t border-white/10 section-y">
        <div className="shell">
          <SectionHeading
            eyebrow="Media"
            title="Coverage of the security robot prototype."
            description="Tanzanian television, radio, and newspapers covered the prototype between 2022 and 2023. Links are not published here because verified archive URLs are not available."
          />
          <div className="mt-12 grid gap-px overflow-hidden rounded-panel border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {mediaOutlets.map((m, i) => (
              <Reveal
                key={m.name}
                delay={Math.min(i, 6) * 45}
                className="bg-midnight p-6 transition-colors hover:bg-navy-deep"
              >
                <p className="tech-label text-steel">{m.type}</p>
                <p className="mt-2.5 font-medium text-arctic">{m.name}</p>
                {m.programme && <p className="mt-1 text-sm text-mist/60">{m.programme}</p>}
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
