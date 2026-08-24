import { useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { getRouteMetadata } from '../data/metadata'

function setMeta(selector: string, attribute: 'name' | 'property', key: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(selector)
  if (!element) {
    element = document.createElement('meta')
    element.setAttribute(attribute, key)
    document.head.appendChild(element)
  }
  element.content = content
}

export function RouteMetadata() {
  const location = useLocation()

  useLayoutEffect(() => {
    const metadata = getRouteMetadata(location.pathname)

    document.title = metadata.title
    document.querySelector<HTMLLinkElement>('link[rel="canonical"]')?.setAttribute('href', metadata.canonicalUrl)
    setMeta('meta[name="description"]', 'name', 'description', metadata.description)
    setMeta('meta[property="og:title"]', 'property', 'og:title', metadata.title)
    setMeta('meta[property="og:description"]', 'property', 'og:description', metadata.socialDescription)
    setMeta('meta[property="og:type"]', 'property', 'og:type', metadata.type)
    setMeta('meta[property="og:url"]', 'property', 'og:url', metadata.canonicalUrl)
    setMeta('meta[property="og:image"]', 'property', 'og:image', metadata.imageUrl)
    setMeta('meta[property="og:image:alt"]', 'property', 'og:image:alt', metadata.imageAlt)
    setMeta('meta[name="twitter:card"]', 'name', 'twitter:card', 'summary_large_image')
    setMeta('meta[name="twitter:title"]', 'name', 'twitter:title', metadata.title)
    setMeta('meta[name="twitter:description"]', 'name', 'twitter:description', metadata.socialDescription)
    setMeta('meta[name="twitter:image"]', 'name', 'twitter:image', metadata.imageUrl)
    setMeta('meta[name="twitter:image:alt"]', 'name', 'twitter:image:alt', metadata.imageAlt)
  }, [location.pathname])

  return null
}
