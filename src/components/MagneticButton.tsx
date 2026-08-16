import { MouseEvent, ReactNode, useRef } from 'react'
import { motion } from 'framer-motion'

type Props = { href: string; children: ReactNode; variant?: 'primary' | 'ghost'; download?: boolean; target?: string; cursor?: string }

export function MagneticButton({ href, children, variant = 'ghost', download, target, cursor = 'OPEN' }: Props) {
  const ref = useRef<HTMLAnchorElement>(null)
  const move = (event: MouseEvent<HTMLAnchorElement>) => {
    if (!ref.current || window.matchMedia('(pointer: coarse)').matches) return
    const rect = ref.current.getBoundingClientRect()
    ref.current.style.setProperty('--mx', `${(event.clientX - rect.left - rect.width / 2) * .12}px`)
    ref.current.style.setProperty('--my', `${(event.clientY - rect.top - rect.height / 2) * .12}px`)
  }
  const reset = () => { ref.current?.style.setProperty('--mx', '0px'); ref.current?.style.setProperty('--my', '0px') }
  return <motion.a ref={ref} href={href} className={`magnetic-button ${variant}`} download={download} target={target} rel={target ? 'noreferrer' : undefined} data-cursor={cursor} onMouseMove={move} onMouseLeave={reset} whileTap={{ scale: .97 }}>{children}<span aria-hidden="true">↗</span></motion.a>
}
