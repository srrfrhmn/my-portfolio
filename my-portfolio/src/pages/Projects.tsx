import { Term, Projects } from '@/lib/info'

export default function About() {

    return (
        <>
            <div className='text-left'>
                <h1 className='font-mono text-slate-800 mt-2'> <Term cd="about" /> cd projects/</h1>
                <h1 className='font-mono text-slate-800'> <Term cd="projects" /> ls </h1>
                <Projects/>
            </div>
        </>
    )
}