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
import { getPortfolioMode } from './data/portfolioMode'
import { useLenis } from './hooks/useLenis'
import { useReducedMotionPreference } from './hooks/useReducedMotionPreference'

const HomePage = lazy(() => import('./pages/HomePage'))
const ProjectPage = lazy(() => import('./pages/ProjectPage'))
const ProjectDemoPage = lazy(() => import('./pages/ProjectDemoPage'))
const RecruiterPage = lazy(() => import('./pages/RecruiterPage'))

export default function App() {
  const location = useLocation()
  const portfolioMode = getPortfolioMode(location.pathname)
  const reducedMotion = useReducedMotionPreference()
  useLenis(portfolioMode === 'story')
  const [loading, setLoading] = useState(() => portfolioMode === 'story' && !reducedMotion && !sessionStorage.getItem('mahesh-os-loaded'))
  const complete = useCallback(() => { sessionStorage.setItem('mahesh-os-loaded', 'true'); setLoading(false) }, [])
  useEffect(() => { if (reducedMotion && loading) complete() }, [complete, loading, reducedMotion])
  useEffect(() => { document.documentElement.dataset.portfolioMode = portfolioMode }, [portfolioMode])
  return <MotionConfig reducedMotion="user"><a className="skip-link" href="#main-content">SKIP TO CONTENT</a><RouteMetadata/><RouteAccessibility/><Analytics/><AnimatePresence>{loading && <LoadingScreen onComplete={complete}/>}</AnimatePresence><BackgroundEffects/>{portfolioMode === 'story' && <><CustomCursor/><Navbar/></>}<Suspense fallback={<div className="route-loading">LOADING MODULE…</div>}><Routes location={location} key={location.pathname}><Route path="/" element={<HomePage/>}/><Route path="/recruiter" element={<RecruiterPage/>}/><Route path="/projects/:slug/demo" element={<ProjectDemoPage/>}/><Route path="/projects/:slug" element={<ProjectPage/>}/><Route path="*" element={<HomePage/>}/></Routes></Suspense><Footer/></MotionConfig>
}
