import { Inter } from 'next/font/google'
import Head from 'next/head'
import Intro from './Intro'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Sarraf Rahman&apos;s Portfolio</title>
      </Head>
      <main className={`main-cont p-4 md:p-10 lg:p-20 max-w-6xl`} >
        <Intro/>
        <About/>
        <Projects/>
        <Contact/>
      </main>
    </>
  )
}
