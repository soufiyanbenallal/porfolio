import '../styles/globals.css'
import type { AppProps } from 'next/app'
import React, { ReactElement } from 'react';
import Layout from '../layouts/Layout';


function MyApp({ Component, pageProps }: AppProps): ReactElement {
  
  return <Layout>
        <Component {...pageProps} />
      </Layout>
}

export default MyApp
