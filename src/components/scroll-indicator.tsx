import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { ScrollDown } from '@/lib/info'

export default function ScrollIndicator() {
  const [isAtBottom, setIsAtBottom] = useState(true)
  const router = useRouter()

  useEffect(() => {
    let frame = 0
    const checkPosition = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        setIsAtBottom(window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 1)
      })
    }
    window.addEventListener('scroll', checkPosition, { passive: true })
    window.addEventListener('resize', checkPosition)
    router.events.on('routeChangeComplete', checkPosition)
    checkPosition()
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', checkPosition)
      window.removeEventListener('resize', checkPosition)
      router.events.off('routeChangeComplete', checkPosition)
    }
  }, [router.events])

  return isAtBottom ? null : <div className="indicator" aria-hidden="true"><ScrollDown /></div>
}
