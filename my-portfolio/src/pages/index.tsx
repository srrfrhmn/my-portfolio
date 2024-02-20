import type { Metadata } from 'next';

import {FullName, ShortIntro, Education} from '@/lib/info'
import {HL} from "@/lib/info"

export const metadata: Metadata = {
  title: {
    default: 'Sarraf Rahman',
    template: 'Sarraf Rahman',
  },
  description: 'Developer, innovator, technologist.',
  openGraph: {
    title: 'Sarraf Rahman',
    description: 'Developer, writer, and creator.',
    url: 'https://srrfrhmn.com/',
    siteName: 'Sarraf Rahman',
    images: [
      {
        url: 'https://srrfrhmn.com/srrf_logo.png',
        width: 880,
        height: 880,
      },
    ],
    locale: 'en-CA',
    type: 'website',
  }
};



export default function Home() {
  return (
    <>
      <main className={`landing main-cont p-4 md:p-10 lg:p-20 max-w-6xl`} >
          <div className='text-left'>
              <h1 className='default-font pb-2 text-4xl tracking-tighter'> <FullName /> </h1>
              <h1 className='default-font pb-2'> <ShortIntro />  </h1>
              <h2 className='default-font pb-2'><Education/></h2>
          </div>
      </main>
    </>
  )
}
