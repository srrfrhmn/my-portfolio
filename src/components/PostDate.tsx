export default function PostDate({ date }: { date: string }) {
  return (
    <time dateTime={date}>
      {new Date(`${date}T00:00:00Z`).toLocaleDateString('en-CA', {
        month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC',
      })}
    </time>
  )
}
