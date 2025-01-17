import type { AppProps } from 'next/app'
import Head from 'next/head'

import Navigation from '@/components/Navigation';

import '@fontsource/kaisei-tokumin';
import '@fontsource/cascadia-code';

import '../styles/globals.css'
import '../styles/utils.module.css'

import ScrollIndicator from '@/components/scroll-indicator';


export default function App({ Component, pageProps }: AppProps) {
  return (
  <>
    <Head>
        <title>sarrafrahman</title>
        <meta property="og:image" content="https://srrfrhmn.com/srrf_logo.png" />
        <meta property="og:image:width" content="880" />
        <meta property="og:image:height" content="880" />
    </Head>
    <div className="page">
      <div className='page-cont'>
        <div className='fixed relative-position'>
          <Navigation />
        </div>
        <Component {...pageProps} />
      </div>
    </div>
    <ScrollIndicator />
  </>
  )
}
