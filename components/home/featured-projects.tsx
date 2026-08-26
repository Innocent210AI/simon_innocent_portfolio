import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { projects } from '@/lib/data'
import { ProjectCard } from '@/components/project-card'
import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { Button } from '@/components/ui/button'

export function FeaturedProjects() {
  const featured = projects.filter((p) => p.featured)

  return (
    <section className="relative border-b border-border bg-background py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Featured Projects"
            title="Selected engineering & innovation work"
            description="From robotics and renewable energy to STEM education technology — practical prototypes built to solve real problems."
          />
          <Button variant="outline" render={<Link href="/projects" />} className="shrink-0">
            All Projects
            <ArrowRight className="size-4" />
          </Button>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((project, i) => (
            <Reveal key={project.slug} delay={i * 70}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
