'use client'

import { useEffect, useState } from 'react'

type WordCycleProps = {
  words: string[]
  interval?: number
  className?: string
}

/**
 * Cycles words in place. The longest word is rendered invisibly to reserve
 * width and height, so the surrounding line never shifts.
 */
export function WordCycle({ words, interval = 2400, className }: WordCycleProps) {
  const [index, setIndex] = useState(0)
  const longest = words.reduce((a, b) => (b.length > a.length ? b : a), '')

  useEffect(() => {
    const reduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced || words.length < 2) return
    const id = window.setInterval(
      () => setIndex((i) => (i + 1) % words.length),
      interval,
    )
    return () => window.clearInterval(id)
  }, [words, interval])

  return (
    <span className={`relative inline-grid align-bottom ${className ?? ''}`}>
      <span aria-hidden="true" className="invisible col-start-1 row-start-1 whitespace-nowrap">
        {longest}
      </span>
      <span
        key={index}
        className="col-start-1 row-start-1 whitespace-nowrap text-electric"
        style={{ animation: 'wordIn 620ms var(--ease-out-expo) both' }}
      >
        {words[index]}
      </span>
      <span className="sr-only">{words.join(', ')}</span>
    </span>
  )
}
