'use client'

import { useEffect, useRef, useState, type ElementType, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

export function useInView<T extends HTMLElement>(options?: IntersectionObserverInit) {
  const ref = useRef<T | null>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    if (typeof IntersectionObserver === 'undefined') {
      setVisible(true)
      return
    }

    // Reveal immediately if already in (or above) the viewport on mount, so
    // content is never stuck hidden.
    const rect = node.getBoundingClientRect()
    if (rect.top < window.innerHeight) {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.disconnect()
          }
        }
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.12, ...options },
    )
    observer.observe(node)

    // Safety fallback: never leave content permanently invisible.
    const fallback = window.setTimeout(() => setVisible(true), 1400)

    return () => {
      observer.disconnect()
      window.clearTimeout(fallback)
    }
  }, [options])

  return { ref, visible }
}

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  as?: ElementType
}

export function Reveal({ children, className, delay = 0, as }: RevealProps) {
  const Tag = (as ?? 'div') as ElementType
  const { ref, visible } = useInView<HTMLDivElement>()

  return (
    <Tag
      ref={ref}
      data-visible={visible}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn('reveal', className)}
    >
      {children}
    </Tag>
  )
}
