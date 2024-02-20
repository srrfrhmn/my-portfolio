import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet"/>
          <meta property="og:title" content="Sarraf Rahman" />
          <meta name="description" content="Sarraf Rahman" />
          <meta name="keywords" content="Sarraf Rahman, Portfolio, Software Developer, McMaster University" />
          <meta name="author" content="Sarraf Rahman" />
          <meta property="og:description" content="Developer, innovator, technologist." />
          <meta property="og:url" content="https://srrfrhmn.com/" />
          <meta property="og:site_name" content="Sarraf Rahman"/>
          <meta property="og:image" content="https://srrfrhmn.com/srrf_logo.png" />
          <meta property="og:image:width" content="880" />
          <meta property="og:image:height" content="880" />
          <meta property="og:locale" content="en-CA" />
          <meta property="og:type" content="website" />
          <meta name="robots" content="index,follow" />
          <meta name="googlebot" content="index,follow,max-video-preview:-1,max-image-preview:large,max-snippet:-1" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
