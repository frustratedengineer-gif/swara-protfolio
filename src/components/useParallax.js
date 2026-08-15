import { useEffect } from 'react'
import { useMotionValue, useSpring } from 'framer-motion'

/**
 * Subtle cursor-driven parallax, in pixels. Disabled for prefers-reduced-motion
 * and coarse (touch) pointers — depth should be felt, not noticed, and shouldn't
 * fight with scrolling on mobile.
 */
export function useParallax(amplitude = 10) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 50, damping: 20, mass: 0.6 })
  const springY = useSpring(y, { stiffness: 50, damping: 20, mass: 0.6 })

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const isCoarsePointer = window.matchMedia('(pointer: coarse)').matches
    if (reduceMotion || isCoarsePointer) return undefined

    const onMove = (e) => {
      x.set((e.clientX / window.innerWidth - 0.5) * amplitude)
      y.set((e.clientY / window.innerHeight - 0.5) * amplitude)
    }
    window.addEventListener('pointermove', onMove)
    return () => window.removeEventListener('pointermove', onMove)
  }, [amplitude, x, y])

  return { x: springX, y: springY }
}
