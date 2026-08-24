import { JourneyGuide } from '../components/JourneyGuide'
import { StoryBridge } from '../components/StoryBridge'
import { Hero } from '../sections/Hero'
import { About } from '../sections/About'
import { Experience } from '../sections/Experience'
import { Skills } from '../sections/Skills'
import { Certifications } from '../sections/Certifications'
import { Projects } from '../sections/Projects'
import { EducationResume } from '../sections/EducationResume'
import { Contact } from '../sections/Contact'
import { visibleCertifications } from '../data/certifications'

export default function HomePage() {
  return <><JourneyGuide/><main id="main-content" className="story-main route-main" tabIndex={-1}>
    <Hero/>
    <StoryBridge chapter="02" label="First, understand where I started" target="about"/>
    <About/>
    <StoryBridge chapter="03" label="Then, follow the experiences that shaped the work" target="experience"/>
    <Experience/>
    <StoryBridge chapter="04" label="See the small toolkit I use today" target="skills"/>
    <Skills/>
    {visibleCertifications.length > 0 && <><StoryBridge chapter="04+" label="Review the learning I can verify" target="certifications"/><Certifications/></>}
    <StoryBridge chapter="05" label="Now, explore the three projects I stand behind" target="projects"/>
    <Projects/>
    <StoryBridge chapter="06" label="Understand my foundation and direction" target="resume"/>
    <EducationResume/>
    <StoryBridge chapter="07" label="Continue the story with a conversation" target="contact"/>
    <Contact/>
  </main></>
}
