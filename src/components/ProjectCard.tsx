import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Project } from '../data/projects'

export function ProjectCard({ project }: { project: Project }) {
  return <article className="project-card" style={{ '--project-accent': project.accent } as React.CSSProperties} data-cursor="OPEN"><Link to={`/projects/${project.slug}`} className="project-image" aria-label={`View ${project.name} case study`}><img src={`${import.meta.env.BASE_URL}${project.image.replace(/^\//, '')}`} alt={`${project.name} interface concept`} loading="lazy" /></Link><div className="project-content"><div className="project-meta"><span>{project.number} / 06</span><span>{project.category}</span></div><span className="project-status">{project.status}</span><h3>{project.name}</h3><p>{project.summary}</p><div className="project-tags">{project.technologies.slice(0, 5).map((tech) => <span key={tech}>{tech}</span>)}</div><div className="project-actions">{project.liveUrl ? <a href={project.liveUrl}>{project.actionLabel || 'Open live site'} <ArrowUpRight size={15}/></a> : <span>{project.liveLabel || 'Not available online'}</span>}{project.githubUrl ? <a href={project.githubUrl}>GitHub <ArrowUpRight size={15}/></a> : <span>Source not published</span>}<Link to={`/projects/${project.slug}`}>Case study <ArrowUpRight size={15}/></Link></div></div></article>
}
