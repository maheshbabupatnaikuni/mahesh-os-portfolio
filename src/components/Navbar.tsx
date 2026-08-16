import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const links = [['01', 'INTRO'], ['02', 'ABOUT'], ['03', 'EXPERIENCE'], ['04', 'SKILLS'], ['05', 'PROJECTS'], ['07', 'CONTACT']]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('INTRO')

  useEffect(() => {
    const update = () => setScrolled(window.scrollY > 30)
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id.toUpperCase())), { rootMargin: '-40% 0px -50%' })
    links.forEach(([, id]) => { const element = document.getElementById(id.toLowerCase()); if (element) observer.observe(element) })
    window.addEventListener('scroll', update, { passive: true })
    update()
    return () => { observer.disconnect(); window.removeEventListener('scroll', update) }
  }, [])

  return <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
    <a className="brand name-brand" href={`${import.meta.env.BASE_URL}#intro`} aria-label="Mahesh Babu Patnaikuni portfolio home"><span>MAHESH BABU</span> PATNAIKUNI</a>
    <nav className="desktop-nav" aria-label="Primary navigation">{links.map(([number, label]) => <a className={active === label ? 'active' : ''} key={label} href={`${import.meta.env.BASE_URL}#${label.toLowerCase()}`}><small>{number}</small>{label}</a>)}</nav>
    <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle menu">{open ? <X/> : <Menu/>}</button>
    <AnimatePresence>{open && <motion.nav className="mobile-nav" initial={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }} animate={{ opacity: 1, clipPath: 'inset(0)' }} exit={{ opacity: 0, clipPath: 'inset(0 0 100% 0)' }}>{links.map(([number, label], index) => <motion.a initial={{ y: 24, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: index * .05 }} key={label} href={`${import.meta.env.BASE_URL}#${label.toLowerCase()}`} onClick={() => setOpen(false)}><small>{number}</small>{label}</motion.a>)}</motion.nav>}</AnimatePresence>
  </header>
}
