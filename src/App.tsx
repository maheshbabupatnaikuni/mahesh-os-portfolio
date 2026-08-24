import { lazy, Suspense, useCallback, useEffect, useState } from 'react'
import { AnimatePresence, MotionConfig } from 'framer-motion'
import { Route, Routes, useLocation } from 'react-router-dom'
import { BackgroundEffects } from './components/BackgroundEffects'
import { Analytics } from './components/Analytics'
import { CustomCursor } from './components/CustomCursor'
import { Footer } from './components/Footer'
import { LoadingScreen } from './components/LoadingScreen'
import { Navbar } from './components/Navbar'
import { RouteAccessibility } from './components/RouteAccessibility'
import { RouteMetadata } from './components/RouteMetadata'
import { useLenis } from './hooks/useLenis'
import { useReducedMotionPreference } from './hooks/useReducedMotionPreference'

const HomePage = lazy(() => import('./pages/HomePage'))
const ProjectPage = lazy(() => import('./pages/ProjectPage'))

export default function App() {
  useLenis()
  const location = useLocation()
  const reducedMotion = useReducedMotionPreference()
  const [loading, setLoading] = useState(() => !window.matchMedia('(prefers-reduced-motion: reduce)').matches && !sessionStorage.getItem('mahesh-os-loaded'))
  const complete = useCallback(() => { sessionStorage.setItem('mahesh-os-loaded', 'true'); setLoading(false) }, [])
  useEffect(() => { if (reducedMotion && loading) complete() }, [complete, loading, reducedMotion])
  return <MotionConfig reducedMotion="user"><a className="skip-link" href="#main-content">SKIP TO CONTENT</a><RouteMetadata/><RouteAccessibility/><Analytics/><AnimatePresence>{loading && <LoadingScreen onComplete={complete}/>}</AnimatePresence><BackgroundEffects/><CustomCursor/><Navbar/><Suspense fallback={<div className="route-loading">LOADING MODULE…</div>}><Routes location={location} key={location.pathname}><Route path="/" element={<HomePage/>}/><Route path="/projects/:slug" element={<ProjectPage/>}/><Route path="*" element={<HomePage/>}/></Routes></Suspense><Footer/></MotionConfig>
}
