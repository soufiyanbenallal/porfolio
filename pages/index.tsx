import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react';
import HomeView from '../modules/home';
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>SOUFIYAN BENALLAL | PORTFOLIO</title>
        <link rel="icon" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />

      </Head>
      <HomeView />
    </>
  )
}

export default Home
