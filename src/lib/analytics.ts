import { analyticsConfig } from '../config/analytics'

export type AnalyticsParameters = Record<string, string | number | boolean>

let initialized = false

const canTrack = () => import.meta.env.PROD && analyticsConfig.googleAnalytics.enabled && /^G-[A-Z0-9]+$/.test(analyticsConfig.googleAnalytics.measurementId)

export function initializeAnalytics() {
  if (!canTrack() || initialized || document.querySelector('script[data-analytics-provider="ga4"]')) return

  const { measurementId } = analyticsConfig.googleAnalytics
  window.dataLayer = window.dataLayer || []
  window.gtag = (...args: unknown[]) => { window.dataLayer?.push(args) }
  window.gtag('js', new Date())
  window.gtag('config', measurementId, { send_page_view: false })

  const script = document.createElement('script')
  script.async = true
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(measurementId)}`
  script.dataset.analyticsProvider = 'ga4'
  document.head.appendChild(script)
  initialized = true
}

export function trackPageView(parameters: { pageTitle: string; pageLocation: string }) {
  if (!canTrack()) return
  window.gtag?.('event', 'page_view', {
    page_title: parameters.pageTitle,
    page_location: parameters.pageLocation,
  })
}

export function trackEvent(eventName: string, parameters: AnalyticsParameters = {}) {
  if (!canTrack()) return
  window.gtag?.('event', eventName, parameters)
}
