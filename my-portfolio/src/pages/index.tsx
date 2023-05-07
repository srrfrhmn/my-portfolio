import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Term } from '@/lib/info'
import Intro from './Intro'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`main-cont p-4 md:p-10 lg:p-20 max-w-6xl`}
    >
      <Intro/>
    </main>
  )
}
