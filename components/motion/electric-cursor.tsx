'use client'

import { useEffect, useRef, useState } from 'react'

/**
 * Custom electric cursor: a precise dot with a trailing ring.
 * Disabled entirely on touch/coarse pointers and for reduced motion, where
 * the native cursor is left untouched.
 */
export function ElectricCursor() {
  const dotRef = useRef<HTMLDivElement | null>(null)
  const ringRef = useRef<HTMLDivElement | null>(null)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return
    const fine = window.matchMedia('(pointer: fine)').matches
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!fine || reduced) return
    setEnabled(true)
  }, [])

  useEffect(() => {
    if (!enabled) return
    document.documentElement.classList.add('has-electric-cursor')

    let x = window.innerWidth / 2
    let y = window.innerHeight / 2
    let rx = x
    let ry = y
    let raf = 0

    const onMove = (e: PointerEvent) => {
      x = e.clientX
      y = e.clientY
      const target = e.target as HTMLElement | null
      const interactive = target?.closest(
        "a, button, [role='button'], input, textarea, select, summary, [data-cursor='hover']",
      )
      ringRef.current?.setAttribute('data-hover', interactive ? 'true' : 'false')
    }
    const onDown = () => ringRef.current?.setAttribute('data-down', 'true')
    const onUp = () => ringRef.current?.setAttribute('data-down', 'false')
    const onLeave = () => ringRef.current?.setAttribute('data-out', 'true')
    const onEnter = () => ringRef.current?.setAttribute('data-out', 'false')

    const loop = () => {
      rx += (x - rx) * 0.18
      ry += (y - ry) * 0.18
      if (dotRef.current) dotRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`
      if (ringRef.current) ringRef.current.style.transform = `translate3d(${rx}px, ${ry}px, 0)`
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)

    window.addEventListener('pointermove', onMove, { passive: true })
    window.addEventListener('pointerdown', onDown)
    window.addEventListener('pointerup', onUp)
    document.addEventListener('mouseleave', onLeave)
    document.addEventListener('mouseenter', onEnter)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerdown', onDown)
      window.removeEventListener('pointerup', onUp)
      document.removeEventListener('mouseleave', onLeave)
      document.removeEventListener('mouseenter', onEnter)
      document.documentElement.classList.remove('has-electric-cursor')
    }
  }, [enabled])

  if (!enabled) return null

  return (
    <div aria-hidden="true">
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </div>
  )
}
