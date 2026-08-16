export type SkillGroup = {
  category: string
  context: string
  skills: { name: string; proficiencyLabel: string; description: string }[]
}

const skill = (name: string, proficiencyLabel: string, description: string) => ({ name, proficiencyLabel, description })

export const skillGroups: SkillGroup[] = [
  {
    category: 'Building Web Tools',
    context: 'Technologies I have used while building and improving my three main projects.',
    skills: [
      skill('Python', 'Project exposure', 'Used for application logic in Flask and Django projects.'),
      skill('Flask', 'Project exposure', 'Used to build practical internal tracking applications.'),
      skill('Django', 'Academic project', 'Used in the VerifyCerts certificate verification project.'),
      skill('HTML · CSS · JavaScript', 'Basic working knowledge', 'Used to structure, style and add interactions to web interfaces.'),
    ],
  },
  {
    category: 'Data & IT Operations',
    context: 'Skills connected to asset records, invoices and day-to-day support work.',
    skills: [
      skill('SQLite & SQL', 'Foundational / project use', 'Used to store and query structured application data.'),
      skill('IT Asset Administration', 'Hands-on exposure', 'Collecting system details and maintaining asset information.'),
      skill('Windows Troubleshooting', 'Hands-on exposure', 'Identifying common desktop, software and user issues.'),
      skill('Technical Documentation', 'Working knowledge', 'Recording requirements, test cases, workflows and project notes.'),
    ],
  },
  {
    category: 'Networking Foundations',
    context: 'Core concepts I am strengthening through study, labs and practical troubleshooting.',
    skills: [
      skill('TCP/IP & IP Addressing', 'Foundational', 'Understanding basic addressing, subnets and how devices communicate.'),
      skill('DNS & DHCP', 'Foundational', 'Learning how names are resolved and network settings are assigned.'),
      skill('LAN, Wi-Fi & Routers', 'Basic working knowledge', 'Understanding common local network components and connections.'),
      skill('Connectivity Troubleshooting', 'Basic practical exposure', 'Checking cables, adapters, IP settings, reachability and common connection issues.'),
    ],
  },
  {
    category: 'Development Workflow',
    context: 'Tools I use to understand a task, build a solution and check my work.',
    skills: [
      skill('Git & GitHub', 'Working knowledge', 'Version control, repositories and project publishing.'),
      skill('Visual Studio Code', 'Working knowledge', 'Primary editor for project development and debugging.'),
      skill('AI-assisted Development', 'Guided workflow', 'AI resources support requirement analysis, coding, testing and documentation.'),
      skill('Microsoft Office', 'Working knowledge', 'Excel, Word and PowerPoint for operational and academic work.'),
    ],
  },
]
