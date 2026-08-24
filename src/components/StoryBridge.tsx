import { ArrowDown } from 'lucide-react'
import { motion } from 'framer-motion'
import { useReducedMotionPreference } from '../hooks/useReducedMotionPreference'

export function StoryBridge({ label, target, chapter }: { label: string; target: string; chapter: string }) {
  const reducedMotion = useReducedMotionPreference()
  return <motion.a className="story-bridge" href={`#${target}`} initial={reducedMotion ? false : { opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: .7 }} transition={reducedMotion ? { duration: 0 } : undefined}>
    <span>{chapter}</span><i/><p>{label}</p><ArrowDown size={16}/>
  </motion.a>
}
