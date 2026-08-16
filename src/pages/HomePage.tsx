import { JourneyGuide } from '../components/JourneyGuide'
import { StoryBridge } from '../components/StoryBridge'
import { Hero } from '../sections/Hero'
import { About } from '../sections/About'
import { Experience } from '../sections/Experience'
import { Skills } from '../sections/Skills'
import { Projects } from '../sections/Projects'
import { EducationResume } from '../sections/EducationResume'
import { Contact } from '../sections/Contact'

export default function HomePage() {
  return <><JourneyGuide/><main className="story-main">
    <Hero/>
    <StoryBridge chapter="02" label="First, understand where I started" target="about"/>
    <About/>
    <StoryBridge chapter="03" label="Then, follow the experiences that shaped the work" target="experience"/>
    <Experience/>
    <StoryBridge chapter="04" label="See the small toolkit I use today" target="skills"/>
    <Skills/>
    <StoryBridge chapter="05" label="Now, explore the three projects I stand behind" target="projects"/>
    <Projects/>
    <StoryBridge chapter="06" label="Understand my foundation and direction" target="resume"/>
    <EducationResume/>
    <StoryBridge chapter="07" label="Continue the story with a conversation" target="contact"/>
    <Contact/>
  </main></>
}
