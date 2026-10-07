import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Navigation from '@/components/Navigation'
import '../styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  const { pathname } = useRouter()
  const section = pathname === '/career' ? 'Career' : pathname === '/gallery' ? 'Gallery' : pathname.startsWith('/blog') ? 'Blog' : 'Software Engineer'
  return (
    <>
      <Head>
        <title>{`Sarraf Rahman | ${section}`}</title>
        <meta name="description" content="Sarraf Rahman's portfolio: software engineering, computer science and economics, and photography." key="description" />
        <meta property="og:title" content={`Sarraf Rahman | ${section}`} key="og-title" />
        <meta property="og:description" content="Software engineering, computer science and economics, and photography." key="og-description" />
        <meta property="og:image" content="https://srrfrhmn.com/srrf_logo.png" />
        <meta property="og:locale" content="en_CA" />
        <meta property="og:type" content="website" key="og-type" />
      </Head>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <div className="page">
        <Navigation />
        <Component {...pageProps} />
      </div>
    </>
  )
}
