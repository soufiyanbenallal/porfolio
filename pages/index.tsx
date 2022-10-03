import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react';
import Layout from '../layouts/Layout';
import HomeView from '../modules/home';
const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>PORTFOLIO | SOUFIYAN BENALLAL</title>
        <link rel="icon" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />

      </Head>
      <HomeView />
    </Layout>
  )
}

export default Home
