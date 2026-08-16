import { ArrowUpRight, Linkedin, Mail, MapPin, Phone } from 'lucide-react'
import { ContactForm } from '../components/ContactForm'
import { profile } from '../data/profile'

export function Contact() {
  return <section id="contact" className="section contact story-section">
    <p className="eyebrow">07 / THE NEXT CHAPTER</p>
    <div className="contact-title"><h2>LET’S BUILD<br/>SOMETHING<br/><span>USEFUL.</span></h2><p>I am looking for an entry-level opportunity where I can keep learning, support real users and contribute to practical software or IT operations work.</p></div>
    <div className="contact-layout"><div className="contact-details"><a href={`mailto:${profile.email}`}><Mail/><span>Email<small>{profile.email}</small></span><ArrowUpRight/></a><a href={`tel:${profile.phone.replace(/\s/g, '')}`}><Phone/><span>Phone<small>{profile.phone}</small></span><ArrowUpRight/></a><a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin/><span>LinkedIn<small>Connect professionally</small></span><ArrowUpRight/></a><div><MapPin/><span>Current location<small>{profile.location}</small></span></div><div><MapPin/><span>Home background<small>{profile.hometown}</small></span></div></div><ContactForm/></div>
  </section>
}
