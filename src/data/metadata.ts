import { getProject } from './projects'
import { profile } from './profile'

const homeTitle = 'P. Mahesh Babu | Software, IT Support and Systems Portfolio'
const homeDescription = 'Portfolio of P. Mahesh Babu, a Computer Science graduate showcasing practical web applications, IT asset management and technical support exposure.'
const homeSocialDescription = 'IT support, web applications, system tools and practical software projects.'

export function getRouteMetadata(pathname: string) {
  const demoMatch = pathname.match(/^\/projects\/([^/]+)\/demo\/?$/)
  const slug = demoMatch?.[1] || pathname.match(/^\/projects\/([^/]+)\/?$/)?.[1]
  const project = getProject(slug)
  const isRecruiter = /^\/recruiter\/?$/.test(pathname)
  const isDemo = Boolean(demoMatch && project)
  const relativePath = isRecruiter ? 'recruiter/' : isDemo ? `projects/${project?.slug}/demo/` : project ? `projects/${project.slug}/` : pathname.replace(/^\//, '')

  return {
    title: isRecruiter ? 'Recruiter Overview | Mahesh Babu Patnaikuni' : isDemo ? `${project?.name} Demo | P. Mahesh Babu` : project ? `${project.name} | P. Mahesh Babu` : homeTitle,
    description: isRecruiter ? 'A concise recruiter overview of Mahesh Babu Patnaikuni: IT support entry point, networking direction, practical project evidence, education and contact details.' : isDemo ? `Reserved interactive demo route for ${project?.name}. No unfinished functionality is presented as active.` : project?.summary || homeDescription,
    socialDescription: isRecruiter ? 'Early-career IT support and systems candidate building toward networking and future security-focused work.' : isDemo ? `Interactive demo route for ${project?.name}.` : project?.description || homeSocialDescription,
    canonicalUrl: new URL(relativePath, profile.portfolioUrl).href,
    imageUrl: project
      ? new URL(project.image.replace(/^\//, ''), profile.portfolioUrl).href
      : new URL('images/og-cover.svg', profile.portfolioUrl).href,
    imageAlt: project ? `${project.name} project overview` : 'P. Mahesh Babu portfolio',
    type: project && !isDemo ? 'article' : 'website',
  }
}
