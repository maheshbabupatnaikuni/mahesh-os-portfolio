import { SectionHeading } from '../components/SectionHeading'
import { skillGroups } from '../data/skills'

export function Skills() { return <section id="skills" className="section skills"><SectionHeading index="03" eyebrow="SKILLS / CAPABILITIES" title="A practical technical toolkit." description="Skills are labelled by current level to keep the profile clear and truthful."/><div className="skill-groups">{skillGroups.map((group) => <article className="skill-group" key={group.category}><h3>{group.category}</h3><div className="skill-list">{group.skills.map((skill) => <div className="skill-pill" key={`${group.category}-${skill.name}`} tabIndex={0}><span>{skill.name}<small>{skill.proficiencyLabel}</small></span><p>{skill.description}</p></div>)}</div></article>)}</div></section> }
