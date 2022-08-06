import Head from 'next/head';
import React from 'react';
import Layout from '../layouts/Layout';
import HomeView from '../modules/home';

export default function Home() {
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
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <Layout>
        <HomeView />
      </Layout>
    </>
  );
}
