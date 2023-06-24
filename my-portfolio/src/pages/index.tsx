import { Inter } from 'next/font/google'
import type { Metadata } from 'next';
import Head from 'next/head'
import Intro from './Intro'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'

import Typing from '@/components/Typing';
import IntroTyped from '@/components/IntroTyped';

import React, { useState, useEffect } from 'react';

const inter = Inter({ subsets: ['latin'] })

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
  const [loadComponentA, setLoadComponentA] = useState(false);
  const [loadComponentB, setLoadComponentB] = useState(false);
  const [loadComponentC, setLoadComponentC] = useState(false);

  useEffect(() => {
    setLoadComponentA(true);
  }, []);

  useEffect(() => {
    if (loadComponentA) {
      setTimeout(() => {
        setLoadComponentB(true);
      }, 2000); // delay time (in ms) before the component starts loading
    }
  }, [loadComponentA]);

  useEffect(() => {
    if (loadComponentB) {
      setTimeout(() => {
        setLoadComponentC(true);
      }, 2000); // delay time (in ms) before the component starts loading
    }
  }, [loadComponentB]);

  return (
    <>
      <Head>
        <title>Sarraf Rahman&apos;s Portfolio</title>
        <meta property="og:image" content="https://srrfrhmn.com/srrf_logo.png" />
        <meta property="og:image:width" content="880" />
        <meta property="og:image:height" content="880" />
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
