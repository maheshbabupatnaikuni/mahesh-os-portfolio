import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useReducedMotionPreference } from '../hooks/useReducedMotionPreference'

export function CustomCursor() {
  const reducedMotion = useReducedMotionPreference()
  const x = useMotionValue(-50), y = useMotionValue(-50)
  const springX = useSpring(x, { damping: 28, stiffness: 350 }), springY = useSpring(y, { damping: 28, stiffness: 350 })
  const [label, setLabel] = useState('')
  useEffect(() => {
    if (reducedMotion) return
    const move = (event: MouseEvent) => { x.set(event.clientX); y.set(event.clientY); setLabel((event.target as HTMLElement).closest('[data-cursor]')?.getAttribute('data-cursor') || '') }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [reducedMotion, x, y])
  if (reducedMotion) return null
  return <><motion.div className="cursor-dot" style={{ x, y }} /><motion.div className={`cursor-ring ${label ? 'active' : ''}`} style={{ x: springX, y: springY }}>{label}</motion.div></>
}
