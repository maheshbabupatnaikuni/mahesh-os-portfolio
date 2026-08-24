import { useEffect, useRef } from 'react'
import { useLocation, useNavigationType } from 'react-router-dom'

export function RouteAccessibility() {
  const location = useLocation()
  const navigationType = useNavigationType()
  const positions = useRef(new Map<string, number>())

  useEffect(() => () => {
    positions.current.set(location.key, window.scrollY)
  }, [location.key])

  useEffect(() => {
    let frame = 0
    let attempts = 0
    const settleRoute = () => {
      const main = document.getElementById('main-content')
      if (!main && attempts < 60) {
        attempts += 1
        frame = requestAnimationFrame(settleRoute)
        return
      }

      frame = requestAnimationFrame(() => {
        if (navigationType === 'POP' && positions.current.has(location.key)) {
          window.scrollTo({ top: positions.current.get(location.key), behavior: 'auto' })
        } else if (location.hash) {
          document.getElementById(decodeURIComponent(location.hash.slice(1)))?.scrollIntoView({ behavior: 'auto' })
        } else {
          window.scrollTo({ top: 0, behavior: 'auto' })
        }

        main?.focus({ preventScroll: true })
      })
    }
    frame = requestAnimationFrame(settleRoute)

    return () => cancelAnimationFrame(frame)
  }, [location.hash, location.key, navigationType])

  return null
}
