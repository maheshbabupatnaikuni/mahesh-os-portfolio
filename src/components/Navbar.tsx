import { Menu, X } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useReducedMotionPreference } from '../hooks/useReducedMotionPreference'

const links = [['01', 'INTRO'], ['02', 'ABOUT'], ['03', 'EXPERIENCE'], ['04', 'SKILLS'], ['05', 'PROJECTS'], ['07', 'CONTACT']]

export function Navbar() {
  const headerRef = useRef<HTMLElement>(null)
  const previouslyFocused = useRef<HTMLElement | null>(null)
  const reducedMotion = useReducedMotionPreference()
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

  useEffect(() => {
    if (!open || !headerRef.current) return
    previouslyFocused.current = document.activeElement instanceof HTMLElement ? document.activeElement : null
    const rootChildren = Array.from(document.getElementById('root')?.children || []).filter((element) => element !== headerRef.current) as HTMLElement[]
    const isolated = rootChildren.map((element) => ({ element, inert: element.hasAttribute('inert'), ariaHidden: element.getAttribute('aria-hidden') }))
    const previousOverflow = document.body.style.overflow
    const previousPaddingRight = document.body.style.paddingRight
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth

    isolated.forEach(({ element }) => { element.setAttribute('inert', ''); element.setAttribute('aria-hidden', 'true') })
    document.body.style.overflow = 'hidden'
    if (scrollbarWidth > 0) document.body.style.paddingRight = `${scrollbarWidth}px`

    const focusable = () => Array.from(headerRef.current?.querySelectorAll<HTMLElement>('button:not([disabled]), a[href]') || []).filter((element) => !element.inert)
    requestAnimationFrame(() => focusable().find((element) => element.closest('.mobile-nav'))?.focus())
    const keydown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { event.preventDefault(); setOpen(false); return }
      if (event.key !== 'Tab') return
      const elements = focusable()
      const first = elements[0]
      const last = elements[elements.length - 1]
      if (!first || !last) return
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus() }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus() }
    }
    document.addEventListener('keydown', keydown)

    return () => {
      document.removeEventListener('keydown', keydown)
      isolated.forEach(({ element, inert, ariaHidden }) => {
        if (inert) element.setAttribute('inert', '')
        else element.removeAttribute('inert')
        if (ariaHidden === null) element.removeAttribute('aria-hidden')
        else element.setAttribute('aria-hidden', ariaHidden)
      })
      document.body.style.overflow = previousOverflow
      document.body.style.paddingRight = previousPaddingRight
      previouslyFocused.current?.focus()
    }
  }, [open])

  return <header ref={headerRef} className={`navbar ${scrolled ? 'scrolled' : ''}`}>
    <a className="brand name-brand" href={`${import.meta.env.BASE_URL}#intro`} aria-label="Mahesh Babu Patnaikuni portfolio home"><span>MAHESH BABU</span> PATNAIKUNI</a>
    <nav className="desktop-nav" aria-label="Primary navigation">{links.map(([number, label]) => <a className={active === label ? 'active' : ''} key={label} href={`${import.meta.env.BASE_URL}#${label.toLowerCase()}`}><small>{number}</small>{label}</a>)}</nav>
    <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? 'Close menu' : 'Open menu'}>{open ? <X/> : <Menu/>}</button>
    <AnimatePresence>{open && <motion.nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation" initial={reducedMotion ? false : { opacity: 0, clipPath: 'inset(0 0 100% 0)' }} animate={{ opacity: 1, clipPath: 'inset(0)' }} exit={reducedMotion ? { opacity: 0 } : { opacity: 0, clipPath: 'inset(0 0 100% 0)' }} transition={reducedMotion ? { duration: 0 } : undefined}>{links.map(([number, label], index) => <motion.a initial={reducedMotion ? false : { y: 24, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={reducedMotion ? { duration: 0 } : { delay: index * .05 }} key={label} href={`${import.meta.env.BASE_URL}#${label.toLowerCase()}`} onClick={() => setOpen(false)}><small>{number}</small>{label}</motion.a>)}</motion.nav>}</AnimatePresence>
  </header>
}
