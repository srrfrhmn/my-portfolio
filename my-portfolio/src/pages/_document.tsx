import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
          <meta name="description" content="Sarraf Rahman's personal portfolio." />
          <meta name="keywords" content="Sarraf Rahman, Portfolio, Software Developer, McMaster University" />
          <meta name="author" content="Sarraf Rahman" />
          <meta property="og:title" content="Sarraf Rahman's Portfolio" />
          <meta property="og:description" content="Sarraf Rahman's personal portfolio. An Honours Economics and Computer Science student at McMaster University and a passionate software developer." />
          <meta property="og:image" content="https://www.srrfrhmn.com/srrf_logo.png" />
          <meta property="og:url" content="https://www.srrfrhmn.com" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
