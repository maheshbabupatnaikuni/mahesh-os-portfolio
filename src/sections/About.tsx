import { motion } from 'framer-motion'
import { profile } from '../data/profile'
import { SectionHeading } from '../components/SectionHeading'

const storyChapters = [
  { label: 'WHERE I STARTED', title: 'Electrical foundations', text: 'My diploma in Electrical and Electronics Engineering first taught me to see a system as connected parts, not separate problems.' },
  { label: 'WHAT CHANGED', title: 'From support tasks to useful tools', text: 'Working with desktops, system details, connectivity and records made me curious about how technology supports everyday work. It also gave me ideas for small tools that could make those tasks simpler.' },
  { label: 'WHERE I AM GOING', title: 'Learning by doing', text: 'I am building stronger support, networking and software foundations through projects I can explain honestly, test carefully and keep improving.' },
]

export function About() {
  return <section id="about" className="section about story-section">
    <SectionHeading index="02" eyebrow="THE BEGINNING / ABOUT" title="I started by asking how systems actually work."/>
    <div className="about-story">
      <motion.div className="about-statement" initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .3 }}>
        <p className="about-lead">I’m still early in my career, so I prefer to show what I’m learning through <em>work I can explain</em>, test and improve.</p>
        <p>{profile.careerSummary}</p>
      </motion.div>
      <div className="story-chapters">{storyChapters.map((chapter, index) => <motion.article key={chapter.label} initial={{ opacity: 0, x: 35 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: .45 }} transition={{ delay: index * .08 }}><span>{String(index + 1).padStart(2, '0')} / {chapter.label}</span><h3>{chapter.title}</h3><p>{chapter.text}</p></motion.article>)}</div>
    </div>
    <p className="ai-note">{profile.aiDisclosure}</p>
    <div className="stats qualitative">{profile.highlights.map((highlight) => <div key={highlight}><strong>•</strong><span>{highlight}</span></div>)}</div>
  </section>
}
