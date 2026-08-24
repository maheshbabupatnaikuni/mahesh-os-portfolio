import { Download, Eye, FileText } from 'lucide-react'
import { education } from '../data/education'
import { profile } from '../data/profile'
import { SectionHeading } from '../components/SectionHeading'

export function EducationResume() {
  const resumeUrl = `${import.meta.env.BASE_URL}${profile.resume.file.replace(/^\//, '')}`

  return <section id="resume" className="section education-resume story-section">
    <SectionHeading index="06" eyebrow="THE DIRECTION / EDUCATION & RESUME" title="The foundation I have built—and the next step I’m preparing for." description="My education gave me the technical base. The rest is coming from practical work, steady learning and being honest about what I know."/>
    <div className="education-layout"><div className="education-list">{education.map((item) => <article key={`${item.degree}-${item.period}`}><span>{item.period}</span><h3>{item.degree}</h3><strong>{item.field}</strong><p>{item.institution}</p><small>{item.detail}</small></article>)}</div><div className="resume-card"><div className="resume-paper"><div className="resume-paper-head"><FileText/><span>RESUME</span></div><h3>{profile.name}</h3><p>IT Support · Service Desk · Desktop Support · Networking Fundamentals</p><dl><div><dt>Education</dt><dd>B.Tech — Computer Science and Systems Engineering</dd></div><div><dt>Current focus</dt><dd>IT Support · Networking Basics · Python · SQL</dd></div><div><dt>Status</dt><dd>{profile.availability}</dd></div></dl></div><div className="resume-actions"><a href={resumeUrl} target="_blank" rel="noreferrer" data-analytics-event="resume_click" data-analytics-resume-id={profile.resume.id} data-analytics-action="view" data-analytics-location="resume_section"><Eye size={16}/>VIEW RESUME</a><a href={resumeUrl} download data-analytics-event="resume_click" data-analytics-resume-id={profile.resume.id} data-analytics-action="download" data-analytics-location="resume_section"><Download size={16}/>DOWNLOAD</a></div></div></div>
  </section>
}
