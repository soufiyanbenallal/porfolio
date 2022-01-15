import Head from 'next/head'
import HeroSection from '../components/HeroSection'
import ServicesSection from '../components/ServicesSection'
import DarkModeSwitcher from '../components/DarkModeSwitcher'
import Footer from '../components/Footer'
import Logo from '../components/Logo'
import DetailsSection from '../components/DetailsSection'

export default function Home() {
  
  return (
    <>
      <Head>
        <title>SOUFIYAN BENALLAL | PORTFOLIO</title>
        <link rel="icon" href="/icon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap" rel="stylesheet"></link>
      </Head>

      <main className="bg-gradient-to-r dark:from-black to-black inline-block w-full">
        <section className='py-3 flex justify-center bg-black border-b border-gray-300 text-sm  border-opacity-20 text-red-500 top-0 sticky z-50'> Profile still in development !!</section>
        <section className="dark:bg-gray-100 bg-black my-8">
          <div className="container flex justify-between">
            <a href="" className="dark:bg-black bg-gray-100 block max-w-max">
              <Logo className="h-8 text-black dark:text-white" />
            </a>
            <DarkModeSwitcher />
          </div>
        </section>
        <section className="relative overflow-hidden flex min-h-md items-center">
          <div className="container relative z-10 py-8 ">
            <img className="absolute right-0" src="/bg-profile.jpg" alt="" />
            <h1 className="text-4xl tracking-tight font-bold text-gray-500  space-y-2 mb-12 z-0 sm:max-w-sm" >
              <span className="block xl:inline">Hello,</span> 
              <span className="block text-yellow-100 sm:text-5xl md:text-6xl py-2 border-r border-gray-300 text-sm  border-opacity-20">I&apos;m Soufiyan</span>
            </h1>
              <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-lg sm:max-w-sm md:mt-5 md:text-base lg:mx-0">
                Frontend developer, I produce elegant, 
                performant and accessible digital
                experciences UI & UX, please take a look around
              </p>
          </div>
         
        </section>
        <DetailsSection />
        <ServicesSection />
        <HeroSection />
      </main>

      <Footer />
    </>
  )
}
