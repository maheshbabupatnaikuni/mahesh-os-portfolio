import { lazy, Suspense, useMemo } from 'react'
import { ArrowLeft } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { getProject } from '../data/projects'
import { getProjectDemoLoader, type ProjectDemoLoader } from '../demos/demoRegistry'

function EmbeddedDemo({ loader, project }: { loader: ProjectDemoLoader; project: NonNullable<ReturnType<typeof getProject>> }) {
  const Demo = useMemo(() => lazy(loader), [loader])
  return <Suspense fallback={<div className="route-loading">LOADING DEMO…</div>}><Demo project={project}/></Suspense>
}

export default function ProjectDemoPage() {
  const { slug } = useParams()
  const project = getProject(slug)
  if (!project) return <Navigate to="/" replace/>

  const loader = project.experiences.liveDemo === 'portfolio' ? getProjectDemoLoader(project.slug) : undefined
  if (loader) return <EmbeddedDemo loader={loader} project={project}/>

  return <main id="main-content" className="foundation-page route-main" tabIndex={-1}>
    <Link to={`/projects/${project.slug}/`} className="back-link"><ArrowLeft/> BACK TO CASE STUDY</Link>
    <p className="eyebrow">DEMO ENVIRONMENT / NOT ACTIVE</p>
    <h1>{project.name}</h1>
    <p>{project.experiences.liveDemo === 'external' ? 'The current runnable experience opens externally. An in-portfolio interactive demo has not been published yet.' : 'No interactive demo is currently published for this project.'}</p>
    <small>This reserved route does not simulate or claim unfinished functionality.</small>
  </main>
}
