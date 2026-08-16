import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { getProject } from '../data/projects'

export default function ProjectPage() {
  const { slug } = useParams()
  const project = getProject(slug)
  if (!project) return <Navigate to="/" replace />

  return <main className="case-study" style={{ '--project-accent': project.accent } as React.CSSProperties}>
    <header className="case-hero">
      <Link to="/#projects" className="back-link"><ArrowLeft/> BACK TO PROJECTS</Link>
      <p className="eyebrow">CASE STUDY / {project.number}</p>
      <h1>{project.name}</h1>
      <p className="case-summary">{project.description}</p>
      <div className="case-meta">
        <div><span>Category</span><strong>{project.category}</strong></div>
        <div><span>Stack</span><strong>{project.technologies.slice(0, 3).join(' · ')}</strong></div>
        <div><span>Status</span><strong>{project.status}</strong></div>
      </div>
      <img src={project.image} alt={`${project.name} visual overview`} />
    </header>
    <div className="case-body">
      <aside><span>ON THIS PAGE</span>{['Overview', 'Solution', 'Features', 'Architecture', 'Process', 'Results'].map((item) => <a href={`#${item.toLowerCase()}`} key={item}>{item}</a>)}</aside>
      <div className="case-content">
        <section id="overview"><span className="case-number">01</span><h2>Problem statement</h2><p>{project.problem}</p></section>
        <section id="solution"><span className="case-number">02</span><h2>Proposed solution</h2><p>{project.solution}</p></section>
        <section id="features"><span className="case-number">03</span><h2>Main features</h2><ul className="feature-grid">{project.features.map((feature) => <li key={feature}>{feature}</li>)}</ul><h3>Technology stack</h3><div className="project-tags">{project.technologies.map((tech) => <span key={tech}>{tech}</span>)}</div></section>
        <section id="architecture"><span className="case-number">04</span><h2>System architecture</h2><div className="architecture"><div>CLIENT</div><i>→</i><div>APPLICATION</div><i>→</i><div>DATABASE</div></div><p>{project.architecture}</p><h3>Database overview</h3><p>{project.database}</p></section>
        <section id="process"><span className="case-number">05</span><h2>Development process</h2><ol>{project.process.map((step) => <li key={step}>{step}</li>)}</ol><h3>Challenges</h3><ul>{project.challenges.map((challenge) => <li key={challenge}>{challenge}</li>)}</ul></section>
        <section className="screenshots"><h2>Concept interface preview</h2><p>These graphics are portfolio concept visuals, not confidential application screenshots.</p><div><img src={project.image} alt={`${project.name} concept interface preview`} loading="lazy"/><img src={project.image} alt={`${project.name} secondary concept preview`} loading="lazy"/></div></section>
        <section id="results"><span className="case-number">06</span><h2>Results and next steps</h2><p>{project.results}</p><h3>Future improvements</h3><ul>{project.improvements.map((item) => <li key={item}>{item}</li>)}</ul></section>
        <div className="case-actions">{project.liveUrl ? <a href={project.liveUrl}>{(project.actionLabel || 'OPEN LIVE SITE').toUpperCase()} <ArrowUpRight/></a> : <span>{project.liveLabel || 'NOT AVAILABLE ONLINE'}</span>}{project.githubUrl ? <a href={project.githubUrl}>GITHUB <ArrowUpRight/></a> : <span>SOURCE NOT PUBLISHED</span>}</div>
      </div>
    </div>
  </main>
}
