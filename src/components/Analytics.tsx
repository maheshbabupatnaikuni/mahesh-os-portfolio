import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { trackEvent, trackPageView } from '../lib/analytics'

const parameterName = (key: string) => key.replace(/^analytics/, '').replace(/^[A-Z]/, (character) => character.toLowerCase()).replace(/([A-Z])/g, '_$1').toLowerCase()

function readTracking(element: HTMLElement) {
  const eventName = element.dataset.analyticsEvent
  if (!eventName) return null

  const parameters = Object.entries(element.dataset).reduce<Record<string, string>>((result, [key, value]) => {
    if (key !== 'analyticsEvent' && key.startsWith('analytics') && value) result[parameterName(key)] = value
    return result
  }, {})

  return { eventName, parameters }
}

export function Analytics() {
  const location = useLocation()

  useEffect(() => {
    trackPageView({ pageTitle: document.title, pageLocation: window.location.href })
  }, [location.pathname, location.search])

  useEffect(() => {
    const trackElement = (element: HTMLElement | null) => {
      if (!element) return
      const tracking = readTracking(element)
      if (tracking) trackEvent(tracking.eventName, tracking.parameters)
    }
    const click = (event: MouseEvent) => {
      const element = event.target instanceof Element ? event.target.closest<HTMLElement>('[data-analytics-event]') : null
      if (element?.tagName !== 'FORM') trackElement(element)
    }
    const submit = (event: SubmitEvent) => {
      trackElement(event.target instanceof HTMLElement ? event.target.closest<HTMLElement>('[data-analytics-event]') : null)
    }

    document.addEventListener('click', click)
    document.addEventListener('submit', submit)
    return () => {
      document.removeEventListener('click', click)
      document.removeEventListener('submit', submit)
    }
  }, [])

  return null
}
