import WorkItem from '@/components/WorkItem'

const positions = [
  {
    company: 'Robinhood',
    position: 'Software Engineer Intern',
    duration: 'May 2026 – August 2026',
    team: 'Brokerage · Trading Products · Options',
  },
  {
    company: 'Royal Bank of Canada',
    position: 'Software Engineer Intern',
    duration: 'September 2025 – December 2025',
    team: 'Payments · Digital Shared Services',
  },
  {
    company: 'Dayforce',
    position: 'Software Engineer Intern',
    duration: 'May 2024 – December 2024',
    team: 'Tax and Payments · International Money Movement',
  },
  {
    company: 'Mely.ai',
    position: 'Software Engineer Intern',
    duration: 'September 2023 – December 2023',
    team: 'Intelligent Document Processing',
  },
  {
    company: 'Doorbie',
    position: 'Software Engineer Intern',
    duration: 'January 2023 – August 2023',
    team: 'Property Management & Marketplace Platform',
  },
  {
    company: 'Prograsp',
    position: 'Programming Instructor',
    duration: 'August 2021 – February 2022',
  },
  {
    company: 'Junior Achievement',
    position: 'Project Manager',
    duration: 'September 2018 – March 2020',
  },
]

export default function Career() {
  return (
    <main id="main-content" className="main-cont">
      <h1 className="default-font mb-2 text-4xl tracking-tighter">my career</h1>
      <p className="text-neutral-400 text-sm">
        feel free to contact me about my{' '}
        <a className="text-white underline underline-offset-4" href="mailto:srrfrhmn@gmail.com">resume</a>{' '}
        for more details.
      </p>
      <hr className="page-divider" />

      <section className="career-education" aria-labelledby="education-heading">
        <h2 id="education-heading" className="career-section-label">Education</h2>
        <h3 className="text-lg font-semibold tracking-tight">McMaster University</h3>
        <p className="text-sm text-neutral-300">Honours BA in Computer Science and Economics</p>
        <p className="text-sm text-neutral-400 mt-1">Expected Graduation: December 2026</p>
      </section>

      <section aria-labelledby="experience-heading">
        <h2 id="experience-heading" className="career-section-label">Experience</h2>
        <ol className="career-timeline">
          {positions.map((position) => <WorkItem key={position.company} {...position} />)}
        </ol>
      </section>
    </main>
  )
}
