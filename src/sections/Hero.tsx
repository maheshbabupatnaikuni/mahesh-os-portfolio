import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { profile } from '../data/profile'
import { MagneticButton } from '../components/MagneticButton'

export function Hero() {
  const imageRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce), (pointer: coarse)').matches) return
    const move = (event: PointerEvent) => gsap.to(imageRef.current, { x: (event.clientX / innerWidth - .5) * 16, y: (event.clientY / innerHeight - .5) * 12, duration: .8, overwrite: true })
    window.addEventListener('pointermove', move)
    return () => window.removeEventListener('pointermove', move)
  }, [])
  return <section id="intro" className="hero"><div className="hero-copy"><motion.p className="eyebrow" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .3 }}>{profile.eyebrow}</motion.p><h1>{profile.headline.map((line, index) => <span className={index === 1 ? 'outline' : ''} key={line}><motion.i initial={{ y: '110%' }} animate={{ y: 0 }} transition={{ delay: .08 + index * .12, duration: .8, ease: [0.22, 1, 0.36, 1] }}>{line}</motion.i></span>)}</h1><motion.p className="hero-intro" initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: .65 }}>{profile.intro}</motion.p><motion.div className="hero-actions" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: .8 }}><MagneticButton href="#projects" variant="primary" analyticsEvent="cta_click" analyticsName="view_projects" analyticsLocation="hero" analyticsTarget="projects">VIEW PROJECTS</MagneticButton><MagneticButton href="#resume" analyticsEvent="cta_click" analyticsName="choose_resume" analyticsLocation="hero" analyticsTarget="resume">CHOOSE RESUME</MagneticButton><MagneticButton href="#contact" analyticsEvent="cta_click" analyticsName="contact_me" analyticsLocation="hero" analyticsTarget="contact">CONTACT ME</MagneticButton></motion.div></div><div ref={imageRef} className="hero-visual" data-cursor="HELLO"><div className="portrait-frame"><img src={`${import.meta.env.BASE_URL}images/mahesh-profile.jpg`} alt="Portrait of P. Mahesh Babu" /><span className="portrait-label">PORTRAIT / 01</span></div><div className="orbit orbit-one"/><div className="orbit orbit-two"/></div><a className="scroll-indicator" href="#about"><ArrowDown size={16}/><span>SCROLL TO EXPLORE</span></a><div className="hero-status"><i/> {profile.availability.toUpperCase()}</div></section>
}
