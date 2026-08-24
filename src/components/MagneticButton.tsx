import { MouseEvent, ReactNode, useRef } from 'react'
import { motion } from 'framer-motion'
import { useReducedMotionPreference } from '../hooks/useReducedMotionPreference'

type Props = {
  href: string
  children: ReactNode
  variant?: 'primary' | 'ghost'
  download?: boolean
  target?: string
  cursor?: string
  analyticsEvent?: string
  analyticsName?: string
  analyticsLocation?: string
  analyticsTarget?: string
}

export function MagneticButton({ href, children, variant = 'ghost', download, target, cursor = 'OPEN', analyticsEvent, analyticsName, analyticsLocation, analyticsTarget }: Props) {
  const ref = useRef<HTMLAnchorElement>(null)
  const reducedMotion = useReducedMotionPreference()
  const move = (event: MouseEvent<HTMLAnchorElement>) => {
    if (!ref.current || reducedMotion || window.matchMedia('(pointer: coarse)').matches) return
    const rect = ref.current.getBoundingClientRect()
    ref.current.style.setProperty('--mx', `${(event.clientX - rect.left - rect.width / 2) * .12}px`)
    ref.current.style.setProperty('--my', `${(event.clientY - rect.top - rect.height / 2) * .12}px`)
  }
  const reset = () => { ref.current?.style.setProperty('--mx', '0px'); ref.current?.style.setProperty('--my', '0px') }
  return <motion.a ref={ref} href={href} className={`magnetic-button ${variant}`} download={download} target={target} rel={target ? 'noreferrer' : undefined} data-cursor={cursor} data-analytics-event={analyticsEvent} data-analytics-name={analyticsName} data-analytics-location={analyticsLocation} data-analytics-target={analyticsTarget} onMouseMove={move} onMouseLeave={reset} whileTap={reducedMotion ? undefined : { scale: .97 }}>{children}<span aria-hidden="true">↗</span></motion.a>
}
