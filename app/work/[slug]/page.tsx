import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { getAdjacentProjects, getProject, projects } from '@/lib/content/projects'
import { Reveal } from '@/components/motion/reveal'
import { ProjectVisual } from '@/components/site/project-visual'

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
  if (!project) {
    return { title: 'Project not found', robots: { index: false } }
  }
  return {
    title: `${project.title} — Case Study`,
    description: project.summary,
    openGraph: {
      title: `${project.title} — Innocent Simon`,
      description: project.summary,
      type: 'article',
    },
  }
}

function Block({ title, items }: { title: string; items?: string[] }) {
  if (!items?.length) return null
  return (
    <Reveal className="border-t border-white/10 py-10 first:border-t-0">
      <h2 className="tech-label text-electric">{title}</h2>
      <div className="mt-5 space-y-4 body-lg text-mist/75">
        {items.map((item) => (
          <p key={item}>{item}</p>
        ))}
      </div>
    </Reveal>
  )
}

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = getProject(slug)
  if (!project) notFound()

  const { previous, next } = getAdjacentProjects(project.slug)
  const cs = project.caseStudy

  return (
    <article className="surface-dark">
      <section className="relative overflow-hidden border-b border-white/10 pb-16 pt-32 lg:pb-20 lg:pt-44">
        <div className="pointer-events-none absolute inset-0 grid-texture opacity-50" />
        <div className="pointer-events-none absolute inset-0 radial-glow" />
        <div className="shell relative">
          <Link
            href="/work"
            className="group inline-flex items-center gap-2 text-sm text-steel transition-colors hover:text-electric"
          >
            <ArrowLeft className="size-4 transition-transform duration-300 group-hover:-translate-x-1" />
            All work
          </Link>

          <div className="mt-10 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <span className="tech-label text-electric">{project.category}</span>
              <h1 className="mt-5 display text-arctic">{project.title}</h1>
              <p className="mt-7 max-w-2xl body-lg text-mist/75">{project.purpose}</p>

              <dl className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-3">
                {[
                  ['Year', project.year],
                  ['Type', project.type],
                  ['Status', project.status],
                ].map(([k, v]) => (
                  <div key={k}>
                    <dt className="tech-label text-steel">{k}</dt>
                    <dd className="mt-1.5 text-sm text-mist">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <ProjectVisual project={project} ratio="aspect-[5/4]" />
          </div>
        </div>
      </section>

      <section className="section-y">
        <div className="shell grid gap-14 lg:grid-cols-[1fr_320px] lg:gap-20">
          <div>
            <Block title="Context" items={cs?.context} />
            <Block title="The problem" items={cs?.problem} />
            <Block title="The approach" items={cs?.solution} />

            {cs?.process?.map((group) => (
              <Reveal key={group.title} className="border-t border-white/10 py-10">
                <h2 className="tech-label text-electric">{group.title}</h2>
                <ul className="mt-5 space-y-3">
                  {group.items.map((item) => (
                    <li key={item} className="flex gap-3 text-mist/75">
                      <span className="mt-2.5 size-1 shrink-0 rounded-full bg-electric" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}

            <Block title="My contribution" items={cs?.contribution} />
            <Block title="Challenges" items={cs?.challenges} />
            <Block title="Outcome" items={cs?.outcome} />

            {cs?.showcases?.length ? (
              <Reveal className="border-t border-white/10 py-10">
                <h2 className="tech-label text-electric">Public showcases</h2>
                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  {cs.showcases.map((s) => (
                    <div key={s.title} className="panel-dark p-5">
                      <p className="font-medium text-arctic">{s.title}</p>
                      <p className="mt-2 text-sm leading-relaxed text-mist/70">{s.detail}</p>
                    </div>
                  ))}
                </div>
              </Reveal>
            ) : null}

            <Block title="What comes next" items={cs?.future} />
          </div>

          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="panel-dark p-6">
              <h2 className="tech-label text-steel">Skills applied</h2>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {project.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/12 px-2.5 py-1 text-[11px] text-mist/80"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {cs?.tools
                ?.filter((group) => !/technical skills/i.test(group.title))
                .map((group) => (
                  <div key={group.title} className="mt-7">
                    <h3 className="tech-label text-steel">{group.title}</h3>
                    <ul className="mt-3 space-y-1.5 text-sm text-mist/75">
                      {group.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}

              {project.intendedApplication && (
                <div className="mt-7">
                  <h3 className="tech-label text-steel">Intended application</h3>
                  <p className="mt-3 text-sm leading-relaxed text-mist/75">
                    {project.intendedApplication}
                  </p>
                </div>
              )}
            </div>

            {project.limitations && (
              <div className="mt-4 rounded-panel border border-electric/25 bg-signal/8 p-6">
                <h2 className="tech-label text-electric">Scope &amp; limitations</h2>
                <p className="mt-3 text-sm leading-relaxed text-mist/80">{project.limitations}</p>
              </div>
            )}
          </aside>
        </div>
      </section>

      <section className="border-t border-white/10 bg-navy-deep py-12">
        <div className="shell grid gap-4 sm:grid-cols-2">
          <Link
            href={`/work/${previous.slug}`}
            className="group rounded-panel border border-white/10 p-6 transition-colors hover:border-electric/40"
          >
            <span className="tech-label flex items-center gap-2 text-steel">
              <ArrowLeft className="size-3.5" /> Previous
            </span>
            <p className="mt-3 heading-md text-arctic">{previous.title}</p>
          </Link>
          <Link
            href={`/work/${next.slug}`}
            className="group rounded-panel border border-white/10 p-6 text-right transition-colors hover:border-electric/40"
          >
            <span className="tech-label flex items-center justify-end gap-2 text-steel">
              Next <ArrowRight className="size-3.5" />
            </span>
            <p className="mt-3 heading-md text-arctic">{next.title}</p>
          </Link>
        </div>
      </section>
    </article>
  )
}
