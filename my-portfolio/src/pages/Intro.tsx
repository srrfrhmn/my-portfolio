import { Term, FullName, ShortIntro, LongIntro, Hobbies} from '@/lib/info'
import Typing from '../components/Typing'

export default function Intro() {
    return (
        <>
            <div className='text-left'>
                <h1 className='font-mono text-slate-800'> <Term cd="introduction" /> cat myName.txt</h1>
                <h1 className='font-sans pb-4 text-4xl'> <Typing/> </h1>
                <h1 className='font-mono text-slate-800'> <Term cd="introduction"/> cat myIntroduction.txt</h1>
                <h1 className='font-sans pb-2'> <ShortIntro />  </h1>
                <h1 className='font-sans mb-2'> <LongIntro/> </h1>
                <h1 className='font-sans mb-4'> <Hobbies/> </h1>
            </div>
        </>
    )
}
