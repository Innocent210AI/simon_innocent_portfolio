'use client'

import { useMemo, useState } from 'react'
import { timeline, timelineChapters } from '@/lib/content/timeline'
import { Reveal } from '@/components/motion/reveal'
import { cn } from '@/lib/utils'

export function JourneyTimeline() {
  const [chapter, setChapter] = useState<string>('All')
  const items = useMemo(
    () => (chapter === 'All' ? timeline : timeline.filter((m) => m.chapter === chapter)),
    [chapter],
  )

  return (
    <div>
      <div role="group" aria-label="Filter journey by chapter" className="flex flex-wrap gap-2">
        {timelineChapters.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setChapter(c)}
            aria-pressed={chapter === c}
            className={cn(
              'rounded-full border px-4 py-2 text-sm transition-colors',
              chapter === c
                ? 'border-electric/60 bg-signal/20 text-arctic'
                : 'border-white/12 text-steel hover:border-white/25 hover:text-mist',
            )}
          >
            {c}
          </button>
        ))}
      </div>

      <ol className="relative mt-14 border-l border-white/12 pl-6 lg:pl-12">
        {items.map((m, i) => (
          <Reveal as="li" key={m.id} delay={Math.min(i, 6) * 60} className="relative pb-14 last:pb-0">
            <span className="absolute -left-[1.68rem] top-2 size-2 rounded-full bg-electric shadow-[0_0_0_4px_rgba(45,140,255,0.15)] lg:-left-[3.18rem]" />
            <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
              <p className="tech-label text-electric">{m.period}</p>
              <p className="tech-label text-steel">{m.chapter}</p>
            </div>
            <h2 className="mt-3 heading-md text-arctic">{m.title}</h2>
            <p className="mt-1.5 text-sm text-steel">{m.location}</p>
            <p className="mt-4 max-w-2xl leading-relaxed text-mist/75">{m.body}</p>
            {m.tags?.length ? (
              <div className="mt-5 flex flex-wrap gap-1.5">
                {m.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/12 px-2.5 py-1 text-[11px] text-steel"
                  >
                    {t}
                  </span>
                ))}
              </div>
            ) : null}
          </Reveal>
        ))}
      </ol>
    </div>
  )
}
