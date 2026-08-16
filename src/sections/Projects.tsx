import { ProjectCard } from '../components/ProjectCard'
import { SectionHeading } from '../components/SectionHeading'
import { projects } from '../data/projects'

export function Projects() { return <section id="projects" className="section projects story-section"><SectionHeading index="05" eyebrow="THE WORK / THREE PROJECTS" title="Three problems. Three learning stories." description="These are the projects I want to discuss honestly—what I understood, what I built and what I still need to improve."/><div className="project-grid narrative">{projects.map((project) => <ProjectCard key={project.slug} project={project}/>)}</div></section> }
