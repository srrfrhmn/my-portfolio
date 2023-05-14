import { Term, Contact } from '@/lib/info'

export default function About() {

    return (
        <>
            <div className='text-left'>
                <h1 className='font-mono text-slate-800 mt-6'> <Term cd="projects" /> cd contact/</h1>
                <h1 className='font-mono text-slate-800'> <Term cd="contact" /> ls </h1>
                <Contact/>
            </div>
        </>
    )
}