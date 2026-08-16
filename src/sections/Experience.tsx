import { SectionHeading } from '../components/SectionHeading'
import { experience } from '../data/experience'

export function Experience() { return <section id="experience" className="section experience story-section"><SectionHeading index="03" eyebrow="THE JOURNEY / EXPERIENCE" title="Most of my learning started with a real task in front of me."/><div className="timeline">{experience.map((item, index) => <article key={item.title}><div className="timeline-marker"><span>{String(index + 1).padStart(2, '0')}</span></div><div className="timeline-period">{item.period}</div><div><h3>{item.title}</h3>{item.organisation && <strong className="timeline-organisation">{item.organisation}</strong>}<p>{item.description}</p></div></article>)}</div></section> }
