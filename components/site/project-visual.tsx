import { cn } from '@/lib/utils'
import type { Project } from '@/lib/content/projects'
import { projectImages } from '@/lib/content/media'

/**
 * Technical panel: a project render under a schematic overlay derived
 * deterministically from the slug, with a scan-line sweep.
 */
function seed(slug: string) {
  let n = 0
  for (let i = 0; i < slug.length; i++) n = (n * 31 + slug.charCodeAt(i)) % 9973
  return n
}

export function ProjectVisual({
  project,
  className,
  ratio = 'aspect-[4/3]',
}: {
  project: Project
  className?: string
  ratio?: string
}) {
  const s = seed(project.slug)
  const nodes: { x: number; y: number }[] = Array.from({ length: 5 }, (_, i) => ({
    x: 12 + ((s + i * 37) % 70),
    y: 16 + ((s * (i + 2) + 13) % 62),
  }))
  const n = (i: number) => nodes[i] ?? { x: 50, y: 50 }
  const image = projectImages[project.slug]

  return (
    <div
      className={cn(
        'group/visual relative overflow-hidden rounded-panel bg-navy-deep grid-texture',
        ratio,
        className,
      )}
      role="img"
      aria-label={
        image
          ? `Illustrative render representing ${project.title}. Not a photograph of the physical prototype.`
          : `Technical placeholder graphic for ${project.title}.`
      }
    >
      {image && (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={image || '/placeholder.svg'}
            alt=""
            loading="lazy"
            decoding="async"
            className="absolute inset-0 size-full object-cover opacity-85 transition-transform duration-[1200ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/visual:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy-deep via-navy-deep/45 to-navy-deep/10" />
          <span className="absolute right-3 top-3 rounded-full border border-white/15 bg-midnight/70 px-2.5 py-1 text-[10px] uppercase tracking-[0.16em] text-steel backdrop-blur">
            Render
          </span>
        </>
      )}
      <svg
        className="absolute inset-0 size-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d={`M2 ${n(0).y} H${n(1).x} V${n(2).y} H${n(3).x} V${n(4).y} H98`}
          fill="none"
          stroke="rgba(45,140,255,0.45)"
          strokeWidth="0.4"
        />
        <path
          d={`M${n(2).x} 98 V${n(1).y} H${n(4).x}`}
          fill="none"
          stroke="rgba(98,213,255,0.28)"
          strokeWidth="0.4"
        />
        {nodes.map((node, i) => (
          <circle key={i} cx={node.x} cy={node.y} r="0.9" fill="#62d5ff" opacity="0.8" />
        ))}
      </svg>

      <div className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3 bg-gradient-to-r from-transparent via-electric/12 to-transparent animate-scan" />

      <div className="absolute inset-0 flex flex-col justify-between p-5">
        <span className="tech-label text-electric">{project.category}</span>
        <div>
          <p className="tech-label text-steel">
            {project.year} · {project.status}
          </p>
          <p className="mt-1 max-w-[24ch] text-lg font-semibold leading-tight text-arctic">
            {project.title}
          </p>
        </div>
      </div>
    </div>
  )
}
