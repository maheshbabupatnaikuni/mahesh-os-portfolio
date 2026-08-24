import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { visibleCertifications } from '../data/certifications'
import { education } from '../data/education'
import { experience } from '../data/experience'
import { profile } from '../data/profile'
import { getProject, projects } from '../data/projects'
import { skillGroups, type SkillGroup } from '../data/skills'
import { trackV2Event } from '../lib/analytics'
import '../styles/recruiter.css'

type Skill = SkillGroup['skills'][number]

const allSkills = skillGroups.flatMap((group) => group.skills)
const supportedSkills = (names: string[]) => names.map((name) => allSkills.find((skill) => skill.name === name)).filter((skill): skill is Skill => Boolean(skill))
const practicalSkills = supportedSkills(['IT Asset Administration', 'Windows Troubleshooting', 'Technical Documentation', 'Python'])
const foundationalSkills = supportedSkills(['TCP/IP & IP Addressing', 'DNS & DHCP', 'LAN, Wi-Fi & Routers', 'SQLite & SQL'])
const strongestEvidence = ['it-asset-management-system', 'blockchain-certificate-verification'].map((slug) => getProject(slug)).filter((project): project is NonNullable<ReturnType<typeof getProject>> => Boolean(project))

export default function RecruiterPage() {
  const tracked = useRef(false)
  const resumeUrl = `${import.meta.env.BASE_URL}${profile.resume.file.replace(/^\//, '')}`

  useEffect(() => {
    if (tracked.current) return
    tracked.current = true
    trackV2Event('recruiter_mode_open', { location: 'recruiter_route' })
  }, [])

  const projectActions = (project: typeof projects[number], location: string) => <div className="recruiter-actions compact">
    {project.experiences.caseStudy && <Link to={`/projects/${project.slug}/`} data-analytics-event="project_card_click" data-analytics-project-id={project.slug} data-analytics-project-name={project.name} data-analytics-location={location}>CASE STUDY</Link>}
    {project.experiences.liveDemo === 'portfolio' && <Link to={`/projects/${project.slug}/demo/`} data-analytics-event="project_live_click" data-analytics-project-id={project.slug} data-analytics-project-name={project.name} data-analytics-location={location}>LIVE DEMO</Link>}
    {project.experiences.liveDemo === 'external' && project.liveUrl && <a href={project.liveUrl} target="_blank" rel="noreferrer" data-analytics-event="project_live_click" data-analytics-project-id={project.slug} data-analytics-project-name={project.name} data-analytics-location={location}>LIVE DEMO</a>}
    {project.experiences.sourceCode && project.githubUrl && <a href={project.githubUrl} target="_blank" rel="noreferrer" data-analytics-event="project_repository_click" data-analytics-project-id={project.slug} data-analytics-project-name={project.name} data-analytics-location={location}>SOURCE CODE</a>}
  </div>

  return <main id="main-content" className="recruiter-page route-main" tabIndex={-1}>
    <div className="recruiter-shell">
      <nav className="recruiter-topbar" aria-label="Recruiter Mode navigation"><strong>MAHESH OS <span>/ RECRUITER MODE</span></strong><Link to="/" data-analytics-event="cta_click" data-analytics-name="story_mode" data-analytics-location="recruiter_topbar">STORY MODE ↗</Link></nav>

      <section className="recruiter-hero" aria-labelledby="recruiter-title">
        <div>
          <p className="recruiter-kicker">COMPUTER SCIENCE AND SYSTEMS ENGINEERING GRADUATE</p>
          <h1 id="recruiter-title">Mahesh Babu Patnaikuni</h1>
          <p className="recruiter-summary">Early-career technology professional with practical exposure to IT support, asset workflows, troubleshooting and Python web projects. Building stronger networking foundations with a longer-term interest in security.</p>
          <div className="recruiter-location"><span>{profile.location}</span><span>{profile.availability}</span></div>
          <div className="recruiter-actions">
            <a href="#recruiter-projects" data-analytics-event="cta_click" data-analytics-name="view_projects" data-analytics-location="recruiter_hero">VIEW PROJECTS</a>
            <a href={resumeUrl} target="_blank" rel="noreferrer" data-analytics-event="resume_click" data-analytics-resume-id={profile.resume.id} data-analytics-action="view" data-analytics-location="recruiter_hero">VIEW RESUME</a>
            <a href="#recruiter-contact" data-analytics-event="cta_click" data-analytics-name="contact" data-analytics-location="recruiter_hero">CONTACT</a>
            <Link to="/" data-analytics-event="cta_click" data-analytics-name="story_mode" data-analytics-location="recruiter_hero">STORY MODE</Link>
          </div>
        </div>
        <div className="direction-panel" aria-labelledby="direction-title">
          <p id="direction-title">CURRENT DIRECTION <small>Career direction, not proficiency</small></p>
          <ol>
            <li><span>01</span><div><strong>IT Support</strong><small>Current Entry Point</small></div></li>
            <li><span>02</span><div><strong>Networking</strong><small>Building Fundamentals</small></div></li>
            <li><span>03</span><div><strong>Cybersecurity</strong><small>Future Direction</small></div></li>
          </ol>
        </div>
      </section>

      <section className="recruiter-section" aria-labelledby="skills-title">
        <header><p>01 / SKILLS</p><h2 id="skills-title">Skills by honest level</h2><span>No percentages. Only current exposure and direction.</span></header>
        <div className="recruiter-skill-grid">
          <article><h3>Hands-on / Practical</h3><ul>{practicalSkills.map((skill) => <li key={skill.name}><strong>{skill.name}</strong><span>{skill.description}</span></li>)}</ul></article>
          <article><h3>Foundational</h3><ul>{foundationalSkills.map((skill) => <li key={skill.name}><strong>{skill.name}</strong><span>{skill.description}</span></li>)}</ul></article>
          <article><h3>Currently Learning</h3><ul><li><strong>Networking fundamentals</strong><span>Strengthening addressing, connectivity, DNS, DHCP and local network concepts through study and practical troubleshooting.</span></li></ul></article>
          <article><h3>Future Direction</h3><ul><li><strong>Cybersecurity / Network Security</strong><span>A longer-term learning direction, not a claim of professional expertise.</span></li></ul></article>
        </div>
      </section>

      <section className="recruiter-section" aria-labelledby="evidence-title">
        <header><p>02 / EVIDENCE</p><h2 id="evidence-title">Strongest evidence</h2><span>Work that can be explained, inspected and improved.</span></header>
        <div className="evidence-grid">{strongestEvidence.map((project) => <article key={project.slug} style={{ '--project-accent': project.accent } as React.CSSProperties}>
          <div><span>{project.status}</span><h3>{project.name}</h3><p>{project.problem}</p></div>
          <ul>{project.evidence.implemented.map((item) => <li key={item}>{item}</li>)}</ul>
          {projectActions(project, 'recruiter_evidence')}
        </article>)}</div>
      </section>

      <section id="recruiter-projects" className="recruiter-section" aria-labelledby="projects-title">
        <header><p>03 / PROJECTS</p><h2 id="projects-title">Projects</h2><span>Capabilities appear only when they are actually available.</span></header>
        <div className="recruiter-projects">{projects.map((project) => <article key={project.slug}>
          <div className="recruiter-project-heading"><span>{project.number}</span><div><small>{project.status}</small><h3>{project.name}</h3></div></div>
          <div><small>PROBLEM</small><p>{project.problem}</p></div>
          <div><small>WHAT I IMPLEMENTED</small>{project.evidence.implemented.length ? <ul>{project.evidence.implemented.map((item) => <li key={item}>{item}</li>)}</ul> : <p>Implementation evidence will be added after the current rebuild is complete.</p>}</div>
          <div><small>TECHNOLOGIES</small><div className="recruiter-tags">{project.technologies.slice(0, 6).map((technology) => <span key={technology}>{technology}</span>)}</div></div>
          {projectActions(project, 'recruiter_projects')}
        </article>)}</div>
      </section>

      <section className="recruiter-section recruiter-two-column" aria-labelledby="experience-title">
        <header><p>04 / EXPERIENCE</p><h2 id="experience-title">Experience</h2><span>Practical and academic exposure, labelled clearly.</span></header>
        <div className="recruiter-timeline">{experience.map((item) => <article key={`${item.period}-${item.title}`}><span>{item.period}</span><div><h3>{item.title}</h3>{item.organisation && <strong>{item.organisation}</strong>}<p>{item.description}</p></div></article>)}</div>
      </section>

      <section className="recruiter-section recruiter-two-column" aria-labelledby="education-title">
        <header><p>05 / EDUCATION</p><h2 id="education-title">Education{visibleCertifications.length ? ' & verified certifications' : ''}</h2><span>Only completed education and verified credentials.</span></header>
        <div><div className="recruiter-education">{education.map((item) => <article key={`${item.degree}-${item.period}`}><span>{item.period}</span><h3>{item.degree}</h3><strong>{item.field}</strong><p>{item.institution}</p><small>{item.detail}</small></article>)}</div>{visibleCertifications.length > 0 && <div className="recruiter-certifications">{visibleCertifications.map((certification) => <article key={certification.title}><strong>{certification.title}</strong><span>{certification.issuer}</span></article>)}</div>}</div>
      </section>

      <section id="recruiter-contact" className="recruiter-contact" aria-labelledby="contact-title">
        <div><p>06 / RESUME & CONTACT</p><h2 id="contact-title">Let’s discuss the right opportunity.</h2><span>Open to relevant entry-level support and technology roles in Bengaluru.</span></div>
        <div className="recruiter-contact-actions">
          <a href={resumeUrl} target="_blank" rel="noreferrer" data-analytics-event="resume_click" data-analytics-resume-id={profile.resume.id} data-analytics-action="view" data-analytics-location="recruiter_contact">VIEW RESUME</a><a href={resumeUrl} download data-analytics-event="resume_click" data-analytics-resume-id={profile.resume.id} data-analytics-action="download" data-analytics-location="recruiter_contact">DOWNLOAD RESUME</a>
          <a href={`mailto:${profile.email}`} data-analytics-event="contact_click" data-analytics-method="email" data-analytics-location="recruiter_contact">EMAIL</a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" data-analytics-event="social_link_click" data-analytics-platform="linkedin" data-analytics-location="recruiter_contact">LINKEDIN</a>
          <Link to="/" data-analytics-event="cta_click" data-analytics-name="story_mode" data-analytics-location="recruiter_contact">PORTFOLIO STORY MODE</Link>
        </div>
      </section>
    </div>
  </main>
}
