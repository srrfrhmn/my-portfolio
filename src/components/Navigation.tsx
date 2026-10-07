import Link from 'next/link'
import { useRouter } from 'next/router'
import NavStickman from './NavStickman'

const links = [
  { href: '/', label: '/me' },
  { href: '/career', label: '/career' },
  { href: '/gallery', label: '/gallery' },
  { href: '/blog', label: '/blog' },
]

export default function Navigation() {
  const { pathname } = useRouter()
  return (
    <nav className="portfolio-nav" aria-label="Main navigation">
      {links.map(({ href, label }) => (
        <Link key={href} href={href} aria-current={pathname === href || (href !== '/' && pathname.startsWith(`${href}/`)) ? 'page' : undefined}>
          {label}
        </Link>
      ))}
      <NavStickman />
    </nav>
  )
}
