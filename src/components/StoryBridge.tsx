import { ArrowDown } from 'lucide-react'
import { motion } from 'framer-motion'

export function StoryBridge({ label, target, chapter }: { label: string; target: string; chapter: string }) {
  return <motion.a className="story-bridge" href={`#${target}`} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, amount: .7 }}>
    <span>{chapter}</span><i/><p>{label}</p><ArrowDown size={16}/>
  </motion.a>
}
