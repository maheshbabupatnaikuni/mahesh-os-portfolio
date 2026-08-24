import { useSyncExternalStore } from 'react'

const query = '(prefers-reduced-motion: reduce)'

const subscribe = (onChange: () => void) => {
  const mediaQuery = window.matchMedia(query)
  mediaQuery.addEventListener('change', onChange)
  return () => mediaQuery.removeEventListener('change', onChange)
}

const getSnapshot = () => window.matchMedia(query).matches

export function useReducedMotionPreference() {
  return useSyncExternalStore(subscribe, getSnapshot, () => false)
}
