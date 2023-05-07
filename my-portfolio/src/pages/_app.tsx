import '@/styles/globals.css'
import type { AppProps } from 'next/app'

import '@fontsource/kaisei-tokumin';
import '@fontsource/cascadia-code';

import '../styles/utils.module.css'

import { Term } from '../lib/info'


export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
