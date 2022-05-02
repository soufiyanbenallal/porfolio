import Head from 'next/head';
import React, { useEffect } from 'react';
// import HeroSection from '../components/HeroSection'
import ServicesSection from '../components/ServicesSection';
import DarkModeSwitcher from '../components/DarkModeSwitcher'
// import Footer from '../components/Footer'
import Logo from '../components/Logo';
// import DetailsSection from '../components/DetailsSection'
import RecentWork from '../components/RecentWork';
import Layout from '../layouts/Layout';
import CatArt from '../components/CatArt';
import Header from '../components/Header';
import DotsSvg from '../components/DotsSvg';

export default function Home() {
  useEffect(() => {
    // document.documentElement.classList.add('dark');
    
  }, []);

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
          <section className="container-fluid px-4 relative overflow-hidden flex items-center">
            {/* <div className="eyeBall">
              <div className="iris"></div>
            </div>
            <div className="eyeLid"></div>
            <div className="lid"></div> */}
            {/* <img
              className="absolute right-0 top-1/2 -translate-y-1/2 transform z-0 max-w-md w-full"
              src="/bg-cat.svg"
              alt=""
            /> */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 transform z-0 max-w-md w-full">
              <CatArt className='text-gray-600 dark:text-gray-800 w-full max-w-md opacity-50' eyeClassName="text-gray-600 dark:text-gray-600 fill-current" />
            </div>
            <div className="relative z-10 py-32 text-center md:text-left">
              <h1 className="dark:text-gray-200 text-7xl md:text-9xl font-extrabold space-y-4 mb-12 relative mx-auto flex flex-col items-center md:items-start justify-center">
                <div className='tracking-wide'>
                  <span className='text-stroke'>DEF</span>
                  <span className=''>IN</span>
                  <span className='text-stroke'>ING </span>
                </div>
                <div className='text-[2.35rem] tracking-wider'><span className="">The Future of</span> <span>Apps</span> </div>
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
