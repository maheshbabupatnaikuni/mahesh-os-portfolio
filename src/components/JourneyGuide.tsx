import { useEffect, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { visibleCertifications } from '../data/certifications'

const stages = [
  { id: 'intro', short: 'Start', chapter: '01' },
  { id: 'about', short: 'Origin', chapter: '02' },
  { id: 'experience', short: 'Journey', chapter: '03' },
  { id: 'skills', short: 'Toolkit', chapter: '04' },
  ...(visibleCertifications.length ? [{ id: 'certifications', short: 'Learning', chapter: '04+' }] : []),
  { id: 'projects', short: 'Work', chapter: '05' },
  { id: 'resume', short: 'Direction', chapter: '06' },
  { id: 'contact', short: 'Next', chapter: '07' },
]

export function JourneyGuide() {
  const [active, setActive] = useState('intro')
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 28 })

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id)), { rootMargin: '-42% 0px -48%' })
    stages.forEach(({ id }) => { const section = document.getElementById(id); if (section) observer.observe(section) })
    return () => observer.disconnect()
  }, [])

  return <aside className="journey-guide" aria-label="Portfolio story progress">
    <span className="journey-title">YOUR JOURNEY</span>
    <div className="journey-track"><motion.i style={{ scaleY: progress, scaleX: progress }}/></div>
    <nav>{stages.map((stage) => <a key={stage.id} href={`#${stage.id}`} className={active === stage.id ? 'active' : ''} aria-current={active === stage.id ? 'step' : undefined}><b>{stage.chapter}</b><span>{stage.short}</span></a>)}</nav>
  </aside>
}
