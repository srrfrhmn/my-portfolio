import { FullName, AnimatedWave, Contact } from '@/lib/info'

export default function Home() {
  return (
    <main id="main-content" className="landing main-cont">
      <h1 className="default-font text-4xl tracking-tighter flex items-center">
        <FullName />
        <AnimatedWave />
      </h1>
      <Contact />
    </main>
  )
}
