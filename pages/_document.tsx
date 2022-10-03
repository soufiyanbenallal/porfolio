
import Document, { Html, Head, Main, NextScript } from 'next/document'
import React from 'react'
class MyDocument extends Document {
  render() {
    return (
      <Html lang='en' className='dark'>
         <Head>
          <link rel="manifest" href="/manifest.json" />
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument