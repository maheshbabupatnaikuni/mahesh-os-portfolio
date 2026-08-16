import { ProjectCard } from '../components/ProjectCard'
import { SectionHeading } from '../components/SectionHeading'
import { projects } from '../data/projects'

export function Projects() { return <section id="projects" className="section projects"><SectionHeading index="05" eyebrow="PROJECTS / SELECTED WORK" title="Systems designed around real problems." description="Six focused projects spanning IT operations, business workflows, security and student utilities."/><div className="project-grid">{projects.map((project) => <ProjectCard key={project.slug} project={project}/>)}</div></section> }
