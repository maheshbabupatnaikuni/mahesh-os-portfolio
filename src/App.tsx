import { lazy, Suspense, useCallback, useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import { Route, Routes, useLocation } from 'react-router-dom'
import { BackgroundEffects } from './components/BackgroundEffects'
import { CustomCursor } from './components/CustomCursor'
import { Footer } from './components/Footer'
import { LoadingScreen } from './components/LoadingScreen'
import { Navbar } from './components/Navbar'
import { useLenis } from './hooks/useLenis'

const HomePage = lazy(() => import('./pages/HomePage'))
const ProjectPage = lazy(() => import('./pages/ProjectPage'))

export default function App() {
  useLenis()
  const location = useLocation()
  const [loading, setLoading] = useState(() => !sessionStorage.getItem('mahesh-os-loaded'))
  const complete = useCallback(() => { sessionStorage.setItem('mahesh-os-loaded', 'true'); setLoading(false) }, [])
  return <><AnimatePresence>{loading && <LoadingScreen onComplete={complete}/>}</AnimatePresence><BackgroundEffects/><CustomCursor/><Navbar/><Suspense fallback={<div className="route-loading">LOADING MODULE…</div>}><Routes location={location} key={location.pathname}><Route path="/" element={<HomePage/>}/><Route path="/projects/:slug" element={<ProjectPage/>}/><Route path="*" element={<HomePage/>}/></Routes></Suspense><Footer/></>
}
