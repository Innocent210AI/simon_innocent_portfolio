import type { Metadata } from 'next'
import Link from 'next/link'
import { Mail, MapPin, ArrowRight } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { PrintButton } from '@/components/resume/print-button'
import { LinkedInIcon } from '@/components/icon'
import { Button } from '@/components/ui/button'
import {
  profile,
  experienceGroups,
  education,
  skillGroups,
  awards,
  projects,
} from '@/lib/data'

export const metadata: Metadata = {
  title: 'Resume',
  description:
    'The resume of Innocent Simon — innovator, STEM educator, and electronics technologist. Experience, education, skills, and recognition.',
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-4 border-b border-border pb-2 text-mono-label text-sm font-semibold text-primary">
      {children}
    </h2>
  )
}

export default function ResumePage() {
  const featuredProjects = projects.filter((p) => p.featured)

  return (
    <>
      <div className="print:hidden">
        <PageHero
          eyebrow="Resume"
          title="Innocent Simon — Resume"
          description="A concise overview of experience, education, skills, and recognition. Print or save this page as a PDF."
          breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Resume' }]}
        />
      </div>

      <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="mb-8 flex flex-wrap gap-3 print:hidden">
          <PrintButton />
          <Button variant="ghost" render={<Link href="/contact" />}>
            Contact me
            <ArrowRight className="size-4" />
          </Button>
        </div>

        <article className="rounded-3xl border border-border bg-card p-8 shadow-sm sm:p-12 print:border-0 print:p-0 print:shadow-none">
          {/* Header */}
          <header className="border-b border-border pb-6">
            <h1 className="font-display text-3xl font-bold text-navy">{profile.name}</h1>
            <p className="mt-1.5 text-pretty font-medium text-primary">{profile.headline}</p>
            <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
              <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-1.5 hover:text-foreground">
                <Mail className="size-4 text-primary" aria-hidden="true" />
                {profile.email}
              </a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-foreground">
                <LinkedInIcon className="size-4 text-primary" />
                LinkedIn
              </a>
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="size-4 text-primary" aria-hidden="true" />
                {profile.location}
              </span>
            </div>
          </header>

          {/* Summary */}
          <section className="py-6">
            <SectionTitle>Summary</SectionTitle>
            <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
              {profile.tagline} Experienced in electronics engineering, robotics prototyping, STEM
              education, and international innovation programs, with a record of national and global
              recognition.
            </p>
          </section>

          {/* Experience */}
          <section className="py-6">
            <SectionTitle>Experience & Leadership</SectionTitle>
            <div className="space-y-5">
              {experienceGroups.flatMap((group) =>
                group.items.map((item, i) => (
                  <div key={`${group.id}-${i}`}>
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                      <h3 className="text-sm font-semibold text-foreground">{item.role}</h3>
                      {item.period ? (
                        <span className="text-xs text-muted-foreground">{item.period}</span>
                      ) : null}
                    </div>
                    <p className="text-sm text-primary">{item.org}</p>
                    <ul className="mt-1.5 space-y-1">
                      {item.bullets.map((b, j) => (
                        <li key={j} className="flex gap-2 text-sm leading-relaxed text-muted-foreground">
                          <span className="mt-2 size-1 shrink-0 rounded-full bg-primary/60" aria-hidden="true" />
                          <span className="text-pretty">{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )),
              )}
            </div>
          </section>

          {/* Two column: Education + Skills */}
          <div className="grid gap-8 py-6 sm:grid-cols-2">
            <section>
              <SectionTitle>Education</SectionTitle>
              <div className="space-y-4">
                {education.map((e) => (
                  <div key={e.school}>
                    <h3 className="text-sm font-semibold text-foreground">{e.school}</h3>
                    <p className="text-sm text-primary">{e.detail}</p>
                    <p className="text-xs text-muted-foreground">{e.note}</p>
                  </div>
                ))}
              </div>
            </section>

            <section>
              <SectionTitle>Skills</SectionTitle>
              <div className="space-y-3">
                {skillGroups.map((group) => (
                  <div key={group.title}>
                    <h3 className="text-xs font-semibold text-foreground">{group.title}</h3>
                    <p className="text-sm text-muted-foreground">{group.skills.join(' · ')}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Selected Projects */}
          <section className="py-6">
            <SectionTitle>Selected Projects</SectionTitle>
            <div className="space-y-3">
              {featuredProjects.map((p) => (
                <div key={p.slug}>
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                    <h3 className="text-sm font-semibold text-foreground">{p.title}</h3>
                    <span className="text-xs text-muted-foreground">
                      {p.categoryTag} · {p.year}
                    </span>
                  </div>
                  <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
                    {p.summary}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Awards */}
          <section className="pt-6">
            <SectionTitle>Awards & Recognition</SectionTitle>
            <ul className="space-y-2">
              {awards.map((a) => (
                <li key={a.title} className="flex flex-wrap items-baseline justify-between gap-x-4 text-sm">
                  <span className="text-foreground">
                    <span className="font-semibold">{a.title}</span>
                    <span className="text-muted-foreground"> — {a.org}</span>
                  </span>
                  <span className="text-xs text-muted-foreground">{a.year}</span>
                </li>
              ))}
            </ul>
          </section>
        </article>
      </div>
    </>
  )
}
