import Head from 'next/head';
import React from 'react';
// import HeroSection from '../components/HeroSection'
import ServicesSection from '../components/ServicesSection';
// import DetailsSection from '../components/DetailsSection'
import RecentWork from '../components/RecentWork';
import Layout from '../layouts/Layout';
import CatArt from '../components/CatArt';
import Header from '../components/Header';
import DotsSvg from '../components/DotsSvg';

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
        <div className="bg-split bg-gray-100 dark:bg-gray-900 inline-block w-full">
          <DotsSvg />
          <Header /> 
          <section className="container-fluid px-4 relative flex items-center">
            <div className="absolute right-0 -top-1/3 z-0  w-full">
              <CatArt className='text-gray-600 dark:text-gray-800 w-full max-w-md opacity-50' eyeClassName="text-gray-600 dark:text-gray-600 fill-current" />
            </div>
            <div className="relative z-10 py-32 text-center md:text-left">
              <h1 className="dark:text-gray-200 text-6xl md:text-8xl font-extrabold space-y-4 mb-12 relative mx-auto flex flex-col items-center md:items-start justify-center">
                <div className='tracking-wide'>
                  Defining
                </div>
                <div className='text-stroke text-[2rem] md:text-[5rem] tracking-wider'><span>The Future of</span> <span>Apps</span> </div>
              </h1>
              <p className="font-light dark:text-gray-500 max-w-sm text-shadow">
                Hello, I&apos;m Soufiyan Frontend developer, I produce elegant,
                performant and accessible digital experciences UI/ UX, please
                take a look around
              </p>
            </div>
          </section>
          <RecentWork />
          {/* <RecentWork inverse /> */}
          <ServicesSection />
          {/* <HeroSection /> */}
        </div>
      </Layout>
    </>
  );
}
