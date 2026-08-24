import { Link } from 'react-router-dom'
import { profile } from '../data/profile'

export default function RecruiterPage() {
  return <main id="main-content" className="foundation-page route-main" tabIndex={-1}>
    <p className="eyebrow">MAHESH OS / V2 FOUNDATION</p>
    <h1>Recruiter Mode</h1>
    <p>{profile.name}'s focused recruiter experience is being prepared. The complete Story Mode portfolio remains the current public experience.</p>
    <Link to="/">RETURN TO STORY MODE</Link>
  </main>
}
