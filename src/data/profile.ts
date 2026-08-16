export type ResumeProfile = {
  id: string
  title: string
  roles: string
  file: string
  available: boolean
}

export const profile = {
  fullName: 'Patnaikuni Mahesh Babu',
  name: 'P. Mahesh Babu',
  brand: 'MAHESH OS',
  eyebrow: 'IT • SOFTWARE • SYSTEMS',
  professionalHeadline: 'Aspiring Software Engineer | IT Support | Application Support | Practical Web Applications',
  headline: ['I BUILD', 'PRACTICAL', 'DIGITAL SYSTEMS.'],
  rotatingWords: ['IT SYSTEMS', 'WEB APPLICATIONS', 'AUTOMATION TOOLS', 'PRACTICAL SOLUTIONS'],
  intro: 'Computer Science graduate with hands-on exposure to IT support, asset management, technical documentation and practical web application development. I focus on building useful systems that simplify real operational work.',
  careerSummary: 'Computer Science graduate with hands-on exposure to Python web projects, SQLite, IT asset administration, basic technical troubleshooting and documentation. I use AI-assisted development tools to help understand requirements, build, test and improve practical applications.',
  about: [
    'I am P. Mahesh Babu, a Computer Science and Systems Engineering graduate with a diploma background in Electrical and Electronics Engineering.',
    'My interests span IT support, desktop troubleshooting, system administration, networking, cybersecurity and practical software development. I enjoy understanding how systems work, identifying operational problems and creating tools that make everyday processes easier to manage.',
    'Through my academic work and practical projects, I have used Python, Flask, Django, SQLite, HTML, CSS and JavaScript. I use AI-assisted development tools for requirement analysis, implementation support, debugging, testing and documentation.',
    'My current focus is strengthening my technical fundamentals, building genuine projects, documenting them properly and preparing for entry-level opportunities in software engineering, application support and IT operations.',
  ],
  aiDisclosure: 'I use AI-assisted development tools as part of my workflow for brainstorming, requirement analysis, implementation support, debugging, testing and documentation. I review, test and refine the resulting work to ensure it addresses the actual operational requirement.',
  highlights: ['Practical Projects', 'IT Operations Exposure', 'AI-Assisted Development', 'Available Immediately'],
  email: 'maheshbabupatnaikuni@gmail.com',
  phone: '+91 6302521797',
  linkedin: 'https://linkedin.com/in/maheshbabupatnaikuni',
  portfolioUrl: 'https://maheshbabupatnaikuni.github.io/mahesh-os-portfolio/',
  github: 'https://github.com/maheshbabupatnaikuni' as string | null,
  location: 'Bengaluru, Karnataka, India',
  hometown: 'Vizianagaram, Andhra Pradesh, India',
  availability: 'Available to join immediately',
  targetRoles: ['Associate Software Engineer', 'Entry-Level Software Engineer', 'Application Support', 'IT Support', 'Desktop Support', 'IT Executive', 'System Administration', 'Cybersecurity Intern', 'Technical Support'],
  resumeProfiles: [
    { id: 'software', title: 'Software Engineering Resume', roles: 'Associate Software Engineer · Entry-Level Software Engineer', file: '/resume/mahesh-babu-software-resume.pdf', available: false },
    { id: 'application-support', title: 'Application Support Resume', roles: 'Application Support · Technical Support', file: '/resume/mahesh-babu-application-support-resume.pdf', available: false },
    { id: 'it-support', title: 'IT Support Resume', roles: 'IT Support · Desktop Support · IT Executive · System Administration', file: '/resume/mahesh-babu-it-support-resume.pdf', available: false },
    { id: 'cybersecurity', title: 'Cybersecurity Resume', roles: 'Cybersecurity Intern · Security Support', file: '/resume/mahesh-babu-cybersecurity-resume.pdf', available: false },
  ] satisfies ResumeProfile[],
  languages: [
    { name: 'Telugu', level: 'Native' },
    { name: 'English', level: 'Professional Working Proficiency' },
    { name: 'Hindi', level: 'Intermediate' },
  ],
}
