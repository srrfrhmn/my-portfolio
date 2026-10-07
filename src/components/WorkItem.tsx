interface WorkItemProps {
  company: string
  position: string
  duration: string
  team?: string
}

export default function WorkItem({ company, position, duration, team }: WorkItemProps) {
  return (
    <li className="timeline-item">
      <span className="timeline-dot" aria-hidden="true" />
      <p className="timeline-date">{duration}</p>
      <h3 className="timeline-company">{company}</h3>
      <p className="timeline-position">{position}</p>
      {team && <p className="timeline-team"><span className="sr-only">Team: </span>{team}</p>}
    </li>
  )
}
