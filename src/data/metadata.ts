import { getProject } from './projects'
import { profile } from './profile'

const homeTitle = 'P. Mahesh Babu | Software, IT Support and Systems Portfolio'
const homeDescription = 'Portfolio of P. Mahesh Babu, a Computer Science graduate showcasing practical web applications, IT asset management and technical support exposure.'
const homeSocialDescription = 'IT support, web applications, system tools and practical software projects.'

export function getRouteMetadata(pathname: string) {
  const slug = pathname.match(/^\/projects\/([^/]+)\/?$/)?.[1]
  const project = getProject(slug)
  const relativePath = project ? `projects/${project.slug}/` : pathname.replace(/^\//, '')

  return {
    title: project ? `${project.name} | P. Mahesh Babu` : homeTitle,
    description: project?.summary || homeDescription,
    socialDescription: project?.description || homeSocialDescription,
    canonicalUrl: new URL(relativePath, profile.portfolioUrl).href,
    imageUrl: project
      ? new URL(project.image.replace(/^\//, ''), profile.portfolioUrl).href
      : new URL('images/og-cover.svg', profile.portfolioUrl).href,
    imageAlt: project ? `${project.name} project overview` : 'P. Mahesh Babu portfolio',
    type: project ? 'article' : 'website',
  }
}
