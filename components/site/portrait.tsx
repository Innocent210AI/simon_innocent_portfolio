'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'

/**
 * Renders the portrait when a real image is available; otherwise shows a
 * designed placeholder frame. When the photo 404s (not uploaded yet), it
 * falls back to the placeholder rather than a broken image.
 */
export function Portrait({
  src,
  alt,
  caption,
  subcaption,
  className,
  ratio = 'aspect-[4/5]',
}: {
  src: string | null
  alt: string
  caption?: string
  subcaption?: string
  className?: string
  ratio?: string
}) {
  const [failed, setFailed] = useState(false)
  const showImage = Boolean(src) && !failed

  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-feature border border-white/10 bg-navy-deep',
        ratio,
        className,
      )}
    >
      {showImage ? (
        <>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={src as string}
            alt={alt}
            loading="eager"
            onError={() => setFailed(true)}
            className="photo-tint size-full object-cover hover:[filter:none]"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-midnight via-midnight/10 to-transparent" />
        </>
      ) : (
        <div className="grid-texture relative flex size-full flex-col items-center justify-center gap-4 p-6 text-center">
          <div className="pointer-events-none absolute inset-0 radial-glow opacity-70" />
          <span className="relative flex size-20 items-center justify-center rounded-full border border-electric/40 bg-signal/10">
            <span className="text-2xl font-semibold tracking-tight text-arctic">IS</span>
            <span className="absolute -right-1 -top-1 size-2.5 rounded-full bg-electric animate-pulse-electric" />
          </span>
          <div className="relative">
            <p className="tech-label text-electric">Portrait</p>
            <p className="mt-2 max-w-[24ch] text-sm leading-relaxed text-mist/70">
              Add your photo at{' '}
              <span className="font-mono text-arc">/public/images/innocent-portrait.jpg</span> and it
              appears here automatically.
            </p>
          </div>
        </div>
      )}

      {(caption || subcaption) && showImage && (
        <div className="absolute inset-x-0 bottom-0 p-5">
          {caption && <p className="tech-label text-electric">{caption}</p>}
          {subcaption && <p className="mt-1 text-sm text-mist/75">{subcaption}</p>}
        </div>
      )}
    </div>
  )
}
