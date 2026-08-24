import { useEffect } from 'react'
import Lenis from 'lenis'
import { useReducedMotionPreference } from './useReducedMotionPreference'

export function useLenis() {
  const reducedMotion = useReducedMotionPreference()
  useEffect(() => {
    if (reducedMotion) return
    const lenis = new Lenis({ duration: 1.05, smoothWheel: true })
    let frame = 0
    const raf = (time: number) => { lenis.raf(time); frame = requestAnimationFrame(raf) }
    frame = requestAnimationFrame(raf)
    return () => { cancelAnimationFrame(frame); lenis.destroy() }
  }, [reducedMotion])
}
