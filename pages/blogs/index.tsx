import React from 'react';
import BlogView from '../../modules/blogs';
import Head from 'next/head';

export default function Index() {
  return (
    < >
      <Head>
        <title>BLOG | SOUFIYAN BENALLAL</title>
        <link rel="icon" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />

      </Head>
      <BlogView />
    </>
  );
}