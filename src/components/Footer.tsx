import { profile } from '../data/profile'

export function Footer() { return <footer><div><strong>{profile.name}</strong><p>Designed and built as a personal digital workspace.</p></div><div><span>MAHESH OS / V1.1</span><span>© {new Date().getFullYear()}</span></div><div>{profile.github && <a href={profile.github}>GitHub</a>}<a href={profile.linkedin}>LinkedIn</a><a href={`${import.meta.env.BASE_URL}#intro`}>Back to top ↑</a></div></footer> }
