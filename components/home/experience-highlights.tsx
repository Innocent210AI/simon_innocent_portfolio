import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { experienceHighlights } from '@/lib/data'
import { Icon } from '@/components/icon'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { Button } from '@/components/ui/button'

export function ExperienceHighlights() {
  return (
    <section className="relative bg-secondary py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Experience Highlights"
            title="Where I have built and led"
            description="Roles across engineering labs, aviation electronics, international science forums, and STEM leadership."
          />
          <Button variant="outline" render={<Link href="/experience" />} className="shrink-0">
            Full Experience
            <ArrowRight className="size-4" />
          </Button>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {experienceHighlights.map((item, i) => (
            <Reveal key={item.title} delay={i * 70}>
              <Link
                href="/experience"
                className="group flex h-full flex-col gap-4 rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/5"
              >
                <span className="flex size-11 items-center justify-center rounded-lg bg-navy text-navy-foreground transition-colors group-hover:bg-primary">
                  <Icon name={item.icon} className="size-5" />
                </span>
                <div className="flex flex-col gap-1">
                  <h3 className="text-pretty text-sm font-semibold leading-snug text-navy">{item.title}</h3>
                  <p className="text-xs text-muted-foreground">{item.role}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
