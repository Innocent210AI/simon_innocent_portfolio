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
            <Reveal className="tech-label text-electric text-4xl">About</Reveal>
            <h1 className="mt-6 display text-arctic">
              
            </h1>
            <Reveal delay={120} className="mt-8 space-y-5 body-lg text-mist/75">
              <p>
                My name is Innocent Simon, and I am currently pursuing a Bachelor of Science in Business Administration at Alfred University, Building on a strong vocational background in Electronics through Tanzania's Vocational Education and Training Authority (VETA). My interests bring together technology, hands-on innovation, STEM education, leadership and entrepreneurship.
              </p> 
              <p>
                My innovation journey has involved designing and developing projects in robotics, electronics, STEM education technologies, and renewable energy. These experiences have strengthened my skills in prototyping, technical problem-solving, creativity and turning ideas into practical solutions.
              </p>
              <p>
                Through ProjekT Inspire, I participated in STEM Youth Bootcamps and earned 1st place in 2021 Scale-Up Project presentation for my STEM Skills Training Model. I also advanced to MAKISATU, Tanzania's National Competition on Science, Technology and Innovation, wher I presented my Innovation where I presented my Innovation at the national level. In 2022, I also participated as a VETA student inventor at the 46th Dar es Salaam International Trade Fair (Saba saba), representing VETA alongside other student innovators in an innovation exhibition and public demonstration.
              </p>
              <p>
                My STEM and innovation journey has also provided international opportunities. In 2022, I received the Clare Elwell Scholarship as a Young Scientist for Africa (YoSA) to participate in the 63rd London International Youth Science Forum (LIYSF) and represent ProjeKt Inspire, Tanzania, and Africa. I also participated in the Global Innovation Field Trip (GIFT) from 2021 to 2023, presenting topics related to innovation, robotics, artificial intelligence, STEM, and climate action.
              </p>
              <p>
                As I move forward, I continue developing my technical and innovation interests while expanding my knowledge of business, leadership, and entrepreneurship. My long-term goal is to combine these areas to develop practical technologies, create sustainable solutions to real-world challenges, and contribute to technological advancement and STEM education.
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
