'use client'

import { useEffect, useState } from 'react'
import { useInView } from './reveal'

type CountUpProps = {
  value: number
  prefix?: string
  suffix?: string
  duration?: number
  className?: string
}

export function CountUp({
  value,
  prefix = '',
  suffix = '',
  duration = 1100,
  className,
}: CountUpProps) {
  const { ref, visible } = useInView<HTMLSpanElement>()
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!visible) return
    const reduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      setDisplay(value)
      return
    }
    let frame = 0
    const start = performance.now()
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration)
      const eased = 1 - Math.pow(1 - t, 3)
      setDisplay(Math.round(value * eased))
      if (t < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [visible, value, duration])

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display.toLocaleString('en-US')}
      {suffix}
    </span>
  )
}
