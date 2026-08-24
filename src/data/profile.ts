export type ResumeDocument = {
  id: string
  title: string
  file: string
}

export const profile = {
  fullName: 'Mahesh Babu Patnaikuni',
  name: 'P. Mahesh Babu',
  brand: 'MAHESH OS',
  eyebrow: 'IT SUPPORT • NETWORKING • PRACTICAL SYSTEMS',
  professionalHeadline: 'IT Support & Networking Learner | Practical Web Tools | Systems & Troubleshooting',
  headline: ['I BUILD', 'PRACTICAL', 'DIGITAL SYSTEMS.'],
  rotatingWords: ['CONNECTED SYSTEMS', 'SUPPORT WORKFLOWS', 'WEB TOOLS', 'PRACTICAL SOLUTIONS'],
  intro: 'I’m a Computer Science graduate who enjoys understanding how systems connect, helping with everyday technical issues and building small tools that make routine work easier. This portfolio shows what I have worked on, what I understand today and what I am still improving.',
  careerSummary: 'My experience so far sits between hands-on IT support and practical software projects. I have worked with asset records, system information, basic troubleshooting, Python web tools and SQLite, while continuing to strengthen my networking and security-aware fundamentals.',
  about: [
    'I’m P. Mahesh Babu, a Computer Science and Systems Engineering graduate with an earlier diploma in Electrical and Electronics Engineering.',
    'I enjoy understanding how devices, users and systems connect. My practical interests include desktop support, basic networking, system administration and small software tools that make everyday work easier.',
    'Through academic work and personal projects, I have used Python, Flask, Django, SQLite, HTML, CSS and JavaScript. I am also building stronger foundations in IP addressing, DNS, DHCP and connectivity troubleshooting.',
    'Right now, I am focused on learning consistently, documenting my work clearly and becoming someone a team can rely on for patient, practical technical support.',
  ],
  aiDisclosure: 'I use AI-assisted tools as learning and development resources for planning, coding support, debugging, testing and documentation. I review the output, test the work and keep improving my own understanding.',
  highlights: ['Hands-on IT Support', 'Systems & Connectivity', 'Practical Web Tools', 'Open to Learn & Contribute'],
  email: 'maheshbabupatnaikuni@gmail.com',
  phone: '+91 6302521797',
  linkedin: 'https://linkedin.com/in/maheshbabupatnaikuni',
  portfolioUrl: 'https://maheshbabupatnaikuni.github.io/mahesh-os-portfolio/',
  github: 'https://github.com/maheshbabupatnaikuni' as string | null,
  location: 'Bengaluru, Karnataka, India',
  hometown: 'Vizianagaram, Andhra Pradesh, India',
  availability: 'Available to join immediately',
  targetRoles: ['Network Support', 'NOC Support', 'IT Support', 'Desktop Support', 'Technical Support', 'Application Support', 'System Administration', 'Cybersecurity Intern', 'Entry-Level Software Engineer'],
  resume: { id: 'mahesh-babu', title: 'Mahesh Babu Resume', file: '/resume/MaheshBabu.pdf' } satisfies ResumeDocument,
  languages: [
    { name: 'Telugu', level: 'Native' },
    { name: 'English', level: 'Professional Working Proficiency' },
    { name: 'Hindi', level: 'Intermediate' },
  ],
}
