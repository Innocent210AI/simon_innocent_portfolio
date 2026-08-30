import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { site } from '@/lib/content/site'
import { siteImages } from '@/lib/content/media'
import { capabilities, education, experienceGroups, experiences } from '@/lib/content/experience'
import { Reveal } from '@/components/motion/reveal'
import { SectionHeading } from '@/components/site/section-heading'
import { Portrait } from '@/components/site/portrait'

export const metadata: Metadata = {
  title: 'About — Innovator & STEM Educator',
  description:
    'Innocent Simon\u2019s background: VETA electronics training, airport industrial experience, STEM teaching, Alfred University business studies, and core capabilities.',
}

export default function AboutPage() {
  return (
    <div className="surface-dark">
      <section className="relative overflow-hidden border-b border-white/10 pb-16 pt-32 lg:pb-24 lg:pt-44">
        <div className="pointer-events-none absolute inset-0 grid-texture opacity-60" />
        <div className="pointer-events-none absolute inset-0 radial-glow" />
        <div className="shell relative grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <Reveal className="tech-label text-electric">About</Reveal>
            <h1 className="mt-6 display text-arctic">
              I have always been the person who takes it apart.
            </h1>
            <Reveal delay={120} className="mt-8 space-y-5 body-lg text-mist/75">
              <p>
                Before I started primary school I was already making things out of whatever was
                lying around, then modifying them until they worked better. That habit never left.
                It moved from wooden toy cars to model houses with real wiring, then to audio
                systems, antennas, and remote-control vehicles in secondary school.
              </p>
              <p>
                Vocational training at VETA gave that instinct a structure: electronics,
                troubleshooting, prototyping, system development. It also gave me the two projects
                that took me to a national competition in Dodoma, a trade fair in Dar es Salaam, and
                the Science Bazaar in London.
              </p>
              <p>
                I am now at Alfred University pursuing a Bachelor of Science in Business
                Administration. My engineering foundation is vocational and practical, not academic
                and pairing it with business is deliberate. Good prototypes need organisations
                around them to survive.
              </p>
            </Reveal>
          </div>

          <Reveal delay={160}>
            <Portrait src={site.portrait} alt={site.portraitAlt} ratio="aspect-[4/5]" />

            <div className="mt-4 relative overflow-hidden rounded-panel border border-white/10">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={siteImages.workbench || '/placeholder.svg'}
                alt="Illustrative render of an electronics workbench with tools, components, and a part-built prototype"
                loading="lazy"
                decoding="async"
                className="aspect-[16/7] w-full object-cover opacity-85"
              />
              <span className="absolute right-3 top-3 rounded-full border border-white/15 bg-midnight/70 px-2.5 py-1 text-[10px] uppercase tracking-[0.16em] text-steel backdrop-blur">
                Render
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Experience */}
      <section className="section-y">
        <div className="shell">
          <SectionHeading
            eyebrow="Experience"
            title="Technical practice, leadership, teaching, and global engagement."
          />

          <div className="mt-14 space-y-16">
            {experienceGroups.map((group) => {
              const rows = experiences.filter((e) => e.group === group)
              if (!rows.length) return null
              return (
                <div key={group}>
                  <h3 className="tech-label text-electric">{group}</h3>
                  <div className="mt-6 divide-y divide-white/10 border-y border-white/10">
                    {rows.map((e, i) => (
                      <Reveal
                        key={`${e.organization}-${e.role}`}
                        delay={Math.min(i, 4) * 50}
                        className="grid gap-4 py-7 md:grid-cols-[1fr_1.4fr] md:gap-10"
                      >
                        <div>
                          <p className="font-semibold text-arctic">{e.role}</p>
                          <p className="mt-1.5 text-sm text-mist/70">{e.organization}</p>
                          <p className="mt-3 tech-label text-steel">{e.date}</p>
                          <p className="mt-1 text-xs text-steel">{e.location}</p>
                        </div>
                        <div>
                          <ul className="space-y-2.5">
                            {e.points.map((p) => (
                              <li key={p} className="flex gap-3 text-sm text-mist/75">
                                <span className="mt-2 size-1 shrink-0 rounded-full bg-electric/70" />
                                <span className="leading-relaxed">{p}</span>
                              </li>
                            ))}
                          </ul>
                          {e.related && (
                            <Link
                              href={e.related.to}
                              className="group mt-4 inline-flex items-center gap-2 text-sm text-electric"
                            >
                              {e.related.label}
                              <ArrowRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                            </Link>
                          )}
                        </div>
                      </Reveal>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="border-t border-white/10 bg-navy-deep section-y">
        <div className="shell grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          <SectionHeading eyebrow="Education" title="Vocational electronics, then business." />
          <div className="space-y-px overflow-hidden rounded-panel border border-white/10 bg-white/10">
            {education.map((e, i) => (
              <Reveal key={e.institution} delay={i * 60} className="bg-navy-deep p-6 lg:p-8">
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <h3 className="heading-md text-arctic">{e.institution}</h3>
                  <span className="tech-label text-electric">{e.period}</span>
                </div>
                <p className="mt-3 text-sm font-medium text-mist">{e.credential}</p>
                <p className="mt-1.5 text-sm text-mist/65">{e.field}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="border-t border-white/10 section-y">
        <div className="shell">
          <SectionHeading eyebrow="Capabilities" title="What I actually do." />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((c, i) => (
              <Reveal key={c.group} delay={i * 60} className="panel-dark p-6">
                <h3 className="tech-label text-electric">{c.group}</h3>
                <ul className="mt-4 space-y-2">
                  {c.items.map((item) => (
                    <li key={item} className="text-sm text-mist/75">
                      {item}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 bg-navy-deep py-16">
        <div className="shell flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <p className="heading-md max-w-xl text-arctic">
            Want to talk about a project, a programme, or a collaboration?
          </p>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-control bg-signal px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-electric"
          >
            Get in touch
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </div>
  )
}
