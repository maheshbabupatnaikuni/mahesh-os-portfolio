import { ProjectCard } from '../components/ProjectCard'
import { SectionHeading } from '../components/SectionHeading'
import { projects } from '../data/projects'

export function Projects() { return <section id="projects" className="section projects story-section"><SectionHeading index="05" eyebrow="THE WORK / THREE PROJECTS" title="Three practical problems that helped me learn." description="Each project started with a workflow I wanted to understand better. Here is what I built, what worked and what I would improve next."/><div className="project-grid narrative">{projects.map((project) => <ProjectCard key={project.slug} project={project}/>)}</div></section> }
