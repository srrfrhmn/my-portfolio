import Link from 'next/link'
import { useRouter } from 'next/router'
import NavStickman from './NavStickman'
import { useEffect, useState } from 'react'

const links = [
  { href: 'me', label: '/me' },
  { href: 'career', label: '/career' },
  { href: 'gallery', label: '/gallery' },
  { href: 'blog', label: '/blog' },
]

export default function Navigation() {
  const { pathname } = useRouter()
  const [active, setActive] = useState('me')
  useEffect(() => {
    if (pathname !== '/') return
    let frame = 0
    const update = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const threshold = window.innerWidth <= 640 ? 120 : window.innerHeight * 0.42
        let current = 'me'
        for (const { href } of links) {
          if ((document.getElementById(href)?.getBoundingClientRect().top ?? Infinity) <= threshold) current = href
        }
        if (window.scrollY > 0 && window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2) current = 'blog'
        setActive(current)
      })
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [pathname])
  return (
    <nav className="portfolio-nav" aria-label="Main navigation">
      {links.map(({ href, label }) => (
        <Link key={href} href={`/#${href}`} aria-current={(pathname === '/' ? active === href : href === 'blog') ? 'location' : undefined}>
          {label}
        </Link>
      ))}
      <NavStickman />
    </nav>
  )
}
