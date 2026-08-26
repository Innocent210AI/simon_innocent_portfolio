import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight, Radio } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { CtaBand } from '@/components/cta-band'
import { Icon, categoryIcon } from '@/components/icon'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { projects, getProject } from '@/lib/data'

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) return { title: 'Project Not Found' }
  return {
    title: project.title,
    description: project.summary,
  }
}

function Prose({ children }: { children: React.ReactNode }) {
  return <p className="text-pretty leading-relaxed text-muted-foreground">{children}</p>
}

function Block({
  label,
  title,
  children,
}: {
  label: string
  title: string
  children: React.ReactNode
}) {
  return (
    <section className="border-t border-border py-10 first:border-t-0 first:pt-0">
      <div className="flex items-center gap-2">
        <span className="h-px w-8 bg-primary" aria-hidden="true" />
        <span className="text-mono-label text-xs font-semibold text-primary">{label}</span>
      </div>
      <h2 className="mt-3 font-display text-2xl font-bold text-navy">{title}</h2>
      <div className="mt-4 space-y-4">{children}</div>
    </section>
  )
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) notFound()

  const index = projects.findIndex((p) => p.slug === slug)
  const next = projects[(index + 1) % projects.length]

  return (
    <>
      <PageHero
        eyebrow={project.category}
        title={project.title}
        description={project.summary}
        breadcrumbs={[
          { label: 'Home', href: '/' },
          { label: 'Projects', href: '/projects' },
          { label: project.title },
        ]}
      />

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr] lg:gap-14">
          <div className="order-2 lg:order-1">
            {project.overview ? (
              <Block label="Overview" title="Project overview">
                <Prose>{project.overview}</Prose>
              </Block>
            ) : null}

            {project.story ? (
              <Block label="Inspiration" title="The story behind it">
                <Prose>{project.story}</Prose>
              </Block>
            ) : null}

            {project.problem ? (
              <Block label="Problem" title="The problem">
                <Prose>{project.problem}</Prose>
              </Block>
            ) : null}

            {project.solution ? (
              <Block label="Solution" title="My approach">
                <Prose>{project.solution}</Prose>
              </Block>
            ) : null}

            {project.process?.length ? (
              <Block label="Process" title="How I built it">
                <ol className="space-y-4">
                  {project.process.map((step, i) => (
                    <li key={i} className="flex gap-4">
                      <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-primary/10 text-mono-label text-xs font-semibold text-primary">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
                        {step}
                      </p>
                    </li>
                  ))}
                </ol>
              </Block>
            ) : null}

            {project.contribution ? (
              <Block label="My role" title="What I contributed">
                <Prose>{project.contribution}</Prose>
              </Block>
            ) : null}

            {project.challenges ? (
              <Block label="Challenges" title="Obstacles & problem-solving">
                <Prose>{project.challenges}</Prose>
              </Block>
            ) : null}

            {project.outcome ? (
              <Block label="Outcome" title="Results & impact">
                <Prose>{project.outcome}</Prose>
              </Block>
            ) : null}

            {project.future ? (
              <Block label="Next" title="Future development">
                <Prose>{project.future}</Prose>
              </Block>
            ) : null}

            {project.media?.length ? (
              <Block label="Coverage" title="Media coverage">
                <ul className="flex flex-wrap gap-2">
                  {project.media.map((m) => (
                    <li
                      key={m}
                      className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-card px-3 py-1.5 text-sm text-foreground"
                    >
                      <Radio className="size-3.5 text-primary" aria-hidden="true" />
                      {m}
                    </li>
                  ))}
                </ul>
              </Block>
            ) : null}
          </div>

          {/* Sticky sidebar */}
          <aside className="order-1 lg:order-2">
            <div className="lg:sticky lg:top-24">
              <div className="overflow-hidden rounded-2xl border border-border shadow-lg">
                <Image
                  src={project.image || '/placeholder.svg'}
                  alt={project.title}
                  width={640}
                  height={480}
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>

              <dl className="mt-5 divide-y divide-border rounded-2xl border border-border bg-card">
                <div className="flex items-center justify-between gap-4 p-4">
                  <dt className="text-mono-label text-[11px] text-muted-foreground">Category</dt>
                  <dd>
                    <Badge>
                      <Icon
                        name={categoryIcon[project.categoryTag] ?? 'Sparkles'}
                        className="size-3"
                      />
                      {project.categoryTag}
                    </Badge>
                  </dd>
                </div>
                <div className="flex items-center justify-between gap-4 p-4">
                  <dt className="text-mono-label text-[11px] text-muted-foreground">Type</dt>
                  <dd className="text-sm font-medium text-foreground">{project.type}</dd>
                </div>
                <div className="flex items-center justify-between gap-4 p-4">
                  <dt className="text-mono-label text-[11px] text-muted-foreground">Status</dt>
                  <dd className="text-sm font-medium text-foreground">{project.status}</dd>
                </div>
                <div className="flex items-center justify-between gap-4 p-4">
                  <dt className="text-mono-label text-[11px] text-muted-foreground">Year</dt>
                  <dd className="text-sm font-medium text-foreground">{project.year}</dd>
                </div>
              </dl>

              {project.tools?.length ? (
                <div className="mt-4 rounded-2xl border border-border bg-card p-5">
                  <h3 className="text-mono-label text-xs font-semibold text-muted-foreground">
                    Tools & Components
                  </h3>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {project.tools.map((t) => (
                      <li
                        key={t}
                        className="rounded-lg border border-border bg-muted/50 px-2.5 py-1 text-xs text-foreground"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}

              {project.skills?.length ? (
                <div className="mt-4 rounded-2xl border border-border bg-card p-5">
                  <h3 className="text-mono-label text-xs font-semibold text-muted-foreground">
                    Skills Applied
                  </h3>
                  <ul className="mt-3 flex flex-wrap gap-2">
                    {project.skills.map((s) => (
                      <li
                        key={s}
                        className="rounded-lg bg-primary/10 px-2.5 py-1 text-xs font-medium text-primary"
                      >
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
            </div>
          </aside>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <Button variant="outline" render={<Link href="/projects" />}>
            <ArrowLeft className="size-4" />
            All projects
          </Button>
          <Link
            href={`/projects/${next.slug}`}
            className="group inline-flex items-center gap-3 rounded-xl border border-border bg-card p-3 transition-colors hover:border-primary/40"
          >
            <span className="text-right">
              <span className="block text-mono-label text-[10px] text-muted-foreground">
                Next project
              </span>
              <span className="block text-sm font-semibold text-foreground">{next.title}</span>
            </span>
            <span className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground transition-transform group-hover:translate-x-0.5">
              <ArrowRight className="size-4" />
            </span>
          </Link>
        </div>
      </div>

      <CtaBand />
    </>
  )
}
