import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { profile } from '../data/profile'
import { MagneticButton } from '../components/MagneticButton'
import { useReducedMotionPreference } from '../hooks/useReducedMotionPreference'

export function Hero() {
  const imageRef = useRef<HTMLDivElement>(null)
  const reducedMotion = useReducedMotionPreference()
  useEffect(() => {
    if (reducedMotion || window.matchMedia('(pointer: coarse)').matches) return
    const image = imageRef.current
    const move = (event: PointerEvent) => gsap.to(image, { x: (event.clientX / innerWidth - .5) * 16, y: (event.clientY / innerHeight - .5) * 12, duration: .8, overwrite: true })
    window.addEventListener('pointermove', move)
    return () => { window.removeEventListener('pointermove', move); gsap.killTweensOf(image) }
  }, [reducedMotion])
  return <section id="intro" className="hero"><div className="hero-copy"><motion.p className="eyebrow" initial={reducedMotion ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={reducedMotion ? { duration: 0 } : { delay: .3 }}>{profile.eyebrow}</motion.p><h1>{profile.headline.map((line, index) => <span className={index === 1 ? 'outline' : ''} key={line}><motion.i initial={reducedMotion ? false : { y: '110%' }} animate={{ y: 0 }} transition={reducedMotion ? { duration: 0 } : { delay: .08 + index * .12, duration: .8, ease: [0.22, 1, 0.36, 1] }}>{line}</motion.i></span>)}</h1><motion.p className="hero-intro" initial={reducedMotion ? false : { opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={reducedMotion ? { duration: 0 } : { delay: .65 }}>{profile.intro}</motion.p><motion.div className="hero-actions" initial={reducedMotion ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={reducedMotion ? { duration: 0 } : { delay: .8 }}><MagneticButton href="#projects" variant="primary" analyticsEvent="cta_click" analyticsName="view_projects" analyticsLocation="hero" analyticsTarget="projects">VIEW PROJECTS</MagneticButton><MagneticButton href="#resume" analyticsEvent="cta_click" analyticsName="choose_resume" analyticsLocation="hero" analyticsTarget="resume">CHOOSE RESUME</MagneticButton><MagneticButton href="#contact" analyticsEvent="cta_click" analyticsName="contact_me" analyticsLocation="hero" analyticsTarget="contact">CONTACT ME</MagneticButton></motion.div></div><div ref={imageRef} className="hero-visual" data-cursor="HELLO"><div className="portrait-frame"><img src={`${import.meta.env.BASE_URL}images/mahesh-profile.jpg`} alt="Portrait of P. Mahesh Babu" /><span className="portrait-label">PORTRAIT / 01</span></div><div className="orbit orbit-one"/><div className="orbit orbit-two"/></div><a className="scroll-indicator" href="#about"><ArrowDown size={16}/><span>SCROLL TO EXPLORE</span></a><div className="hero-status"><i/> {profile.availability.toUpperCase()}</div></section>
}
