import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link ref='icon' href='/logo.png' sizes='any'  />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
