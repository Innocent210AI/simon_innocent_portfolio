import Link from 'next/link'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { site, proofPoints } from '@/lib/content/site'
import { siteImages } from '@/lib/content/media'
import { featuredProjects } from '@/lib/content/projects'
import { timeline } from '@/lib/content/timeline'
import { Reveal } from '@/components/motion/reveal'
import { CountUp } from '@/components/motion/count-up'
import { WordCycle } from '@/components/motion/word-cycle'
import { SectionHeading } from '@/components/site/section-heading'
import { ProjectCard } from '@/components/site/project-card'
import { Portrait } from '@/components/site/portrait'

const chapterPreview = timeline.filter((m) =>
  ['primary-school', 'veta', 'liysf', 'projekt-inspire', 'alfred'].includes(m.id),
)

export default function HomePage() {
  return (
    <div className="surface-dark">
      {/* Hero */}
      <section className="relative overflow-hidden grain">
        <div className="pointer-events-none absolute inset-0 radial-glow" />
        <div className="pointer-events-none absolute inset-y-0 left-1/2 hidden w-px bg-gradient-to-b from-transparent via-electric/25 to-transparent lg:block" />

        <div className="shell relative grid gap-14 pb-20 pt-32 lg:grid-cols-[1.15fr_0.85fr] lg:items-end lg:gap-16 lg:pb-28 lg:pt-44">
          <div>
            <Reveal className="tech-label flex items-center gap-2.5 text-electric">
              <span className="size-1.5 rounded-full bg-electric animate-pulse-electric" />
              {site.location}
            </Reveal>

            <h1 className="mt-7 display text-arctic">
              Innocent Simon | <WordCycle words={['Innovator', 'Technologist', 'STEM Educator']} />
            </h1>

            <Reveal delay={120} className="mt-8 max-w-xl body-lg text-mist/75">
              {site.intro}
            </Reveal>

            <Reveal delay={200} className="mt-10 flex flex-wrap items-center gap-3">
              <Link
                href="/work"
                className="group inline-flex items-center gap-2 rounded-control bg-signal px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-electric"
              >
                See the work
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/journey"
                className="inline-flex items-center gap-2 rounded-control border border-white/15 px-5 py-3 text-sm font-medium text-arctic transition-colors hover:border-electric/50 hover:bg-white/5"
              >
                The journey
              </Link>
            </Reveal>

            <Reveal delay={280} className="mt-12 flex flex-wrap gap-x-8 gap-y-3">
              {site.roles.map((role) => (
                <span key={role} className="tech-label text-steel">
                  {role}
                </span>
              ))}
            </Reveal>
          </div>

          <Reveal delay={160} className="relative">
            <Portrait
              src={site.portrait}
              alt={site.portraitAlt}
              caption="Innocent Simon"
              subcaption="Electronics · Robotics · STEM education"
            />


          </Reveal>
        </div>
      </section>

      {/* Positioning */}
      <section className="relative border-t border-white/10 section-y">
        <div className="shell grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionHeading eyebrow="Positioning" title="Technology that starts with a real problem." />
          <Reveal delay={100} className="space-y-6 body-lg text-mist/75">
            <p>
              My work begins with things I have actually seen: security personnel inspecting unfamiliar
              areas in person, students learning electricity from a chalkboard, farmers planting rice by
              hand. Every prototype is an attempt to answer one of those observations with something you
              can hold.
            </p>
            <p>
              The training is electronics — VETA Levels I through III, industrial work on airport
              inspection systems. The direction now is business: I am pursuing a Bachelor of Science in
              Business Administration at Alfred University because building a good prototype and building
              something that lasts are two different skills.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Proof */}
      <section className="relative overflow-hidden border-t border-white/10 bg-navy-deep section-y">
        <div className="pointer-events-none absolute inset-0 grid-texture opacity-50" />
        <div className="shell relative">
          <SectionHeading
            eyebrow="Measured"
            title="Numbers that belong to real events."
            description="Each figure below refers to a specific programme, cohort, or outreach — not a cumulative audience estimate."
          />
          <div className="mt-14 grid gap-px overflow-hidden rounded-panel border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-5">
            {proofPoints.map((point, i) => (
              <Reveal
                key={point.label}
                delay={i * 70}
                className="bg-navy-deep p-6 transition-colors hover:bg-navy"
              >
                <p className="text-4xl font-semibold tracking-tight text-arctic">
                  <CountUp value={point.value} prefix={point.prefix} suffix={point.suffix} />
                </p>
                <p className="mt-3 text-sm font-medium text-mist">{point.label}</p>
                <p className="mt-1.5 text-xs leading-relaxed text-steel">{point.note}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Selected work */}
      <section className="border-t border-white/10 section-y">
        <div className="shell">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading eyebrow="Selected work" title="Five prototypes, each built to answer something." />
            <Link href="/work" className="group inline-flex items-center gap-2 text-sm font-medium text-electric">
              All projects
              <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project, i) => (
              <Reveal key={project.slug} delay={i * 70}>
                <ProjectCard project={project} index={i} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Journey preview */}
      <section className="relative overflow-hidden border-t border-white/10 bg-navy-deep section-y">
        <div className="shell relative">
          <SectionHeading
            eyebrow="Journey"
            title="Scrap wood in Kigoma to a robotics club in New York."
            description="Five points on a longer line."
          />

          <ol className="relative mt-14 space-y-10 border-l border-white/12 pl-6 lg:pl-10">
            {chapterPreview.map((m, i) => (
              <Reveal as="li" key={m.id} delay={i * 70} className="relative">
                <span className="absolute -left-[1.65rem] top-2 size-2 rounded-full bg-electric lg:-left-[2.65rem]" />
                <p className="tech-label text-steel">{m.period}</p>
                <h3 className="mt-2 heading-md text-arctic">{m.title}</h3>
                <p className="mt-2 max-w-2xl text-sm leading-relaxed text-mist/70">{m.body}</p>
              </Reveal>
            ))}
          </ol>

          <Reveal delay={120} className="mt-12">
            <Link
              href="/journey"
              className="group inline-flex items-center gap-2 rounded-control border border-white/15 px-5 py-3 text-sm font-medium text-arctic transition-colors hover:border-electric/50 hover:bg-white/5"
            >
              Read the full journey
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden border-t border-white/10 section-y">
        <div className="pointer-events-none absolute inset-0 radial-glow" />
        <div className="shell relative text-center">
          <Reveal>
            <span className="tech-label text-electric">Open to</span>
            <h2 className="mx-auto mt-5 max-w-4xl heading-xl text-arctic">
              Collaboration, STEM programmes, research support, and building things that should exist.
            </h2>
            <div className="mt-10 flex justify-center">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-control bg-signal px-6 py-3.5 text-sm font-medium text-white transition-colors hover:bg-electric"
              >
                Start a conversation
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
