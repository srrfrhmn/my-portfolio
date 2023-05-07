import { Term, FullName, ShortIntro, LongIntro} from '@/lib/info'

export default function Intro() {
    return (
        <>
        <div className='text-left'>
            <h1 className='font-mono text-slate-800'> <Term cd="introduction" /> cat myName.txt</h1>
            <h1 className='font-sans pb-4 text-4xl'> <FullName /> </h1>
            <h1 className='font-mono text-slate-800'> <Term cd="introduction"/> cat myIntroduction.txt</h1>
            <h1 className='font-sans pb-2'> <ShortIntro />  </h1>
            <h1 className='font-sans mb-12'> <LongIntro/> </h1>
        </div>
        </>
    )
}