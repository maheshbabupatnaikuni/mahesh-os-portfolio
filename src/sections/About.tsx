import { motion } from 'framer-motion'
import { profile } from '../data/profile'
import { SectionHeading } from '../components/SectionHeading'

const storyChapters = [
  { label: 'WHERE I STARTED', title: 'Electrical foundations', text: 'My diploma in Electrical and Electronics Engineering taught me to look at systems as connected parts—not isolated problems.' },
  { label: 'WHAT CHANGED', title: 'From records to software', text: 'IT support exposure showed me repetitive operational problems. That pushed me to build small web tools for assets, invoices and verification.' },
  { label: 'WHERE I AM GOING', title: 'Learning by building', text: 'I am developing stronger software and support fundamentals through honest projects I can explain, test and continue improving.' },
]

export function About() {
  return <section id="about" className="section about story-section">
    <SectionHeading index="02" eyebrow="THE BEGINNING / ABOUT" title="I started by asking how systems actually work."/>
    <div className="about-story">
      <motion.div className="about-statement" initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .3 }}>
        <p className="about-lead">I am not presenting myself as an expert. I am a graduate who learns by turning <em>real problems</em> into working projects.</p>
        <p>{profile.careerSummary}</p>
      </motion.div>
      <div className="story-chapters">{storyChapters.map((chapter, index) => <motion.article key={chapter.label} initial={{ opacity: 0, x: 35 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: .45 }} transition={{ delay: index * .08 }}><span>{String(index + 1).padStart(2, '0')} / {chapter.label}</span><h3>{chapter.title}</h3><p>{chapter.text}</p></motion.article>)}</div>
    </div>
    <p className="ai-note">{profile.aiDisclosure}</p>
    <div className="stats qualitative">{profile.highlights.map((highlight) => <div key={highlight}><strong>•</strong><span>{highlight}</span></div>)}</div>
  </section>
}
