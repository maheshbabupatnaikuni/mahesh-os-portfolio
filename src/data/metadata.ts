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
    title: isRecruiter ? 'Recruiter Mode | P. Mahesh Babu' : isDemo ? `${project?.name} Demo | P. Mahesh Babu` : project ? `${project.name} | P. Mahesh Babu` : homeTitle,
    description: isRecruiter ? 'A focused recruiter route for P. Mahesh Babu. The complete recruiter experience is being prepared.' : isDemo ? `Reserved interactive demo route for ${project?.name}. No unfinished functionality is presented as active.` : project?.summary || homeDescription,
    socialDescription: isRecruiter ? 'Recruiter Mode foundation for P. Mahesh Babu.' : isDemo ? `Interactive demo route for ${project?.name}.` : project?.description || homeSocialDescription,
    canonicalUrl: new URL(relativePath, profile.portfolioUrl).href,
    imageUrl: project
      ? new URL(project.image.replace(/^\//, ''), profile.portfolioUrl).href
      : new URL('images/og-cover.svg', profile.portfolioUrl).href,
    imageAlt: project ? `${project.name} project overview` : 'P. Mahesh Babu portfolio',
    type: project && !isDemo ? 'article' : 'website',
  }
}
