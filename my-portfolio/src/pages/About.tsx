import { Degree, Term, University, Technologies,} from '@/lib/info'

export default function About() {
    return (
        <>
        <div className='text-left'>
            <h1 className='font-mono text-slate-800'> <Term cd="introduction" /> cd about/</h1>
            <h1 className='font-mono text-slate-800'> <Term cd="about" /> cat myEducation.txt </h1>
            <h1 className='font-sans pb-1 text-2xl'> <University /> </h1>
            <h2 className='font-sans pb-6'><Degree/></h2>
            <h1 className='font-mono text-slate-800'> <Term cd="about" /> cat myPrimaryTechnologies.txt </h1>
            <h2 className='font-sans'><Technologies/></h2>
        </div>
        </>
    )
}