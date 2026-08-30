import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { CtaBand } from '@/components/cta-band'
import { Icon } from '@/components/icon'
import { Button } from '@/components/ui/button'
import { snapshot, skillGroups, education, profile } from '@/lib/data'

export const metadata: Metadata = {
  title: 'About',
  description:
    'Innocent Simon is an innovator, technologist, and STEM advocate developing practical solutions across robotics, STEM education, agriculture, and renewable energy — combining engineering, leadership, and entrepreneurship to create lasting impact.',
}

const values = [
  {
    icon: 'Lightbulb',
    title: 'Practical Innovation',
    body: 'Turning ideas into working prototypes that solve tangible, real-world problems.',
  },
  {
    icon: 'HeartHandshake',
    title: 'Community Impact',
    body: 'Using technology and education to create opportunities for others, especially youth.',
  },
  {
    icon: 'Wrench',
    title: 'Hands-On Craft',
    body: 'Learning by building — from locally sourced materials to advanced electronics.',
  },
  {
    icon: 'Globe',
    title: 'Global Perspective',
    body: 'Bringing a cross-cultural view shaped by Tanzania, international forums, and the US.',
  },
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="Innovator, educator, and builder of practical solutions"
        description="I combine electronics, robotics, engineering design, and entrepreneurship to solve real-world problems — and I teach the next generation to do the same."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
          <Reveal className="order-2 lg:order-1">
            <div className="prose-portfolio space-y-5 text-pretty text-base leading-relaxed text-muted-foreground">
              <p>
                My name is <span className="font-semibold text-foreground">Innocent Simon</span>, and I am an Innovator, technologist and STEM advocate passionate about developing practical solutions to real-world challenges.
                With a background in electronics and hands-on prototyping, I have worked on projects ranging from robotics and STEM education technologies to agricultural and renewable energy innovations.
              </p>
              <p>
                That curiosity grew into a formal foundation in electronics engineering through
                vocational training at VETA in Tanzania, where I developed hands-on skills in
                troubleshooting, prototyping, and technical systems. Along the way I built projects
                ranging from remote-controlled vehicles and amplified speakers to a military security
                robot prototype and a power-generation training model for STEM education.
              </p>
              <p>
                Beyond the workbench, I&apos;ve dedicated myself to STEM outreach — reaching thousands
                of students across schools in the Kagera region — and to representing Tanzania and
                Africa on international stages such as the London International Youth Science Forum.
                Today I&apos;m pursuing a Bachelor of Science in Business Administration at Alfred
                University, blending engineering, innovation, leadership, and entrepreneurship.
              </p>
              <p>
                My goal is simple: to develop impactful solutions that improve lives and create
                opportunities for future generations.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button render={<Link href="/journey" />}>
                Explore my journey
                <ArrowRight className="size-4" />
              </Button>
              <Button variant="outline" render={<Link href="/projects" />}>
                View my projects
              </Button>
            </div>
          </Reveal>

          <Reveal delay={120} className="order-1 lg:order-2">
            <div className="relative">
              <div className="overflow-hidden rounded-2xl border border-border shadow-lg">
                <Image
                  src="/images/workbench.png"
                  alt="An electronics engineering workbench with tools, circuit boards, and a robotics prototype"
                  width={640}
                  height={720}
                  className="aspect-[4/5] w-full object-cover"
                />
              </div>
              <dl className="mt-4 grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-border bg-card p-4">
                  <dt className="text-mono-label text-[10px] text-muted-foreground">Based in</dt>
                  <dd className="mt-1 text-sm font-semibold text-foreground">{profile.location}</dd>
                </div>
                <div className="rounded-xl border border-border bg-card p-4">
                  <dt className="text-mono-label text-[10px] text-muted-foreground">Focus</dt>
                  <dd className="mt-1 text-sm font-semibold text-foreground">
                    Electronics · Robotics · STEM
                  </dd>
                </div>
              </dl>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-border bg-muted/40">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <SectionHeading
            eyebrow="What I do"
            title="Where my work lives"
            description="Five connected areas that shape how I build, teach, and lead."
          />
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {snapshot.map((item, i) => (
              <Reveal key={item.title} delay={i * 70}>
                <article className="group h-full rounded-2xl border border-border bg-card p-6 transition-colors hover:border-primary/40">
                  <span className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon name={item.icon} className="size-5" />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
                    {item.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <SectionHeading
          eyebrow="Values"
          title="What guides my work"
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 70}>
              <div className="h-full rounded-2xl border border-border bg-card p-6">
                <Icon name={v.icon} className="size-6 text-primary" />
                <h3 className="mt-4 font-display text-base font-semibold text-foreground">
                  {v.title}
                </h3>
                <p className="mt-2 text-pretty text-sm leading-relaxed text-muted-foreground">
                  {v.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-muted/40">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHeading eyebrow="Education" title="Training & study" align="left" />
              <div className="mt-8 space-y-4">
                {education.map((e, i) => (
                  <Reveal key={e.school} delay={i * 70}>
                    <div className="rounded-2xl border border-border bg-card p-6">
                      <h3 className="font-display text-base font-semibold text-foreground">
                        {e.school}
                      </h3>
                      <p className="mt-1 text-sm font-medium text-primary">{e.detail}</p>
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{e.note}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            <div>
              <SectionHeading eyebrow="Skills" title="Capabilities" align="left" />
              <div className="mt-8 space-y-6">
                {skillGroups.map((group, i) => (
                  <Reveal key={group.title} delay={i * 70}>
                    <div>
                      <h3 className="text-mono-label text-xs font-semibold text-muted-foreground">
                        {group.title}
                      </h3>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {group.skills.map((s) => (
                          <span
                            key={s}
                            className="rounded-lg border border-border bg-card px-3 py-1.5 text-sm text-foreground"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
