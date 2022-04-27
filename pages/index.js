import Head from 'next/head';
import React, { useEffect } from 'react';
// import HeroSection from '../components/HeroSection'
import ServicesSection from '../components/ServicesSection';
// import DarkModeSwitcher from '../components/DarkModeSwitcher'
// import Footer from '../components/Footer'
import Logo from '../components/Logo';
// import DetailsSection from '../components/DetailsSection'
import RecentWork from '../components/RecentWork';
import Layout from '../layouts/Layout';

export default function Home() {
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <>
      <Head>
        <title>SOUFIYAN BENALLAL | PORTFOLIO</title>
        <link rel="icon" href="/icon.png" />
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
        <div className="bg-gradient-to-r dark:from-black dark:via-gray-1000 dark:to-black inline-block w-full">
     
          <section className="my-8">
            <div className="container flex justify-between">
              <a href="" className=" max-w-max">
                <Logo className="h-6 text-black dark:text-white" />
              </a>
              {/* <DarkModeSwitcher /> */}
            </div>
          </section>
          <section className="relative overflow-hidden flex min-h-screen items-center">
            {/* <img
              className="absolute right-1/2 top-0 transform z-0 translate-x-1/2 max-w-3xl w-full"
              src="/bg-profile.jpg"
              alt=""
            /> */}
            <div className="container relative z-10 py-8 text-center">
              <h1 className="dark:text-gray-400 uppercase text-base mb-10 text-center">
                <span>Build the app you want, Get the your work done.</span>
              </h1>
              <h1 className="dark:text-white text-8xl font-medium space-y-4 mb-12 relative mx-auto text-center flex flex-col items-center justify-center">
                <span>Defining the</span>
                <span>future of Apps </span>
              </h1>
              <p className="mt-3 text-base dark:text-gray-300 max-w-sm mx-auto ">
                Hello, I&apos;m Soufiyan Frontend developer, I produce elegant,
                performant and accessible digital experciences UI/ UX, please
                take a look around
              </p>
            </div>
                      </section>
          <RecentWork />
          <RecentWork inverse />
          <ServicesSection />
          {/* <HeroSection /> */}
        </div>
      </Layout>
    </>
  );
}
