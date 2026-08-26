import { impactMetrics } from '@/lib/data'
import { Reveal } from '@/components/reveal'

export function Impact() {
  return (
    <section className="relative overflow-hidden bg-navy py-20 text-navy-foreground sm:py-24">
      <div className="absolute inset-0 bg-dots opacity-20" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <Reveal className="flex flex-col items-center gap-3 text-center">
          <div className="flex items-center gap-2">
            <span className="h-px w-8 bg-primary" aria-hidden="true" />
            <span className="text-mono-label text-xs font-semibold text-primary">Impact at a Glance</span>
            <span className="h-px w-8 bg-primary" aria-hidden="true" />
          </div>
          <h2 className="text-balance text-3xl font-bold sm:text-4xl">Innovation with measurable reach</h2>
          <p className="max-w-2xl text-pretty leading-relaxed text-navy-foreground/70">
            Verified milestones across STEM education, international engagement, and competitive innovation programs.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-navy-foreground/10 bg-navy-foreground/10 md:grid-cols-3 lg:grid-cols-5">
          {impactMetrics.map((m, i) => (
            <Reveal
              key={m.label}
              delay={i * 70}
              className="flex flex-col gap-1.5 bg-navy p-6 transition-colors hover:bg-navy-foreground/[0.03]"
            >
              <span className="font-display text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                {m.value}
              </span>
              <span className="text-sm font-semibold text-navy-foreground">{m.label}</span>
              <span className="text-xs leading-relaxed text-navy-foreground/60">{m.context}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
