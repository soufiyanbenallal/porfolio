import Head from 'next/head'
/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import HeroSection from '../components/HeroSection'
import ServicesSection from '../components/ServicesSection'
import { motion } from 'framer-motion'
import DarkModeSwitcher from '../components/DarkModeSwitcher'
import Footer from '../components/Footer'

const navigation = [
  { name: 'WORKS', href: '#' },
  { name: 'ABOUT ME', href: '#' },
  { name: 'CONTACT', href: '#' }
]

export default function Home() {
  
  return (
    <>
      <Head>
        <title>PORTFOLIO | SOUFIYAN BENALLAL</title>
        <link rel="icon" href="/icon.png" />
      </Head>

      <main className="">
        <section className='py-3 flex justify-center bg-red-600 text-white font-bold top-0 sticky z-50'> Profile still in development !!</section>
        <section className="relative bg-dark overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="relative z-10 pb-8 bg-white dark:bg-gray-900 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
              <svg
                className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
                fill="currentColor"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                aria-hidden="true">
                <polygon points="50,0 100,0 50,100 0,100" />
              </svg>

              <Popover>
                {({ open }) => (
                  <>
                    <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
                      <nav
                        className="relative flex items-center justify-between sm:h-10 lg:justify-start"
                        aria-label="Global">
                        <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                          <div className="flex items-center justify-between w-full md:w-auto">
                            <a href="#">
                              <span className="sr-only">Workflow</span>

                              <img
                                src="/soufiyan-logo.png"
                                alt="soufiyan | wevente"
                                className="h-4 w-auto sm:h-4"
                              />
                            </a>
                            <div className="-mr-2 flex items-center md:hidden">
                              <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                <span className="sr-only">Open main menu</span>
                                <MenuIcon className="h-6 w-6" aria-hidden="true" />
                              </Popover.Button>
                            </div>
                          </div>
                        </div>
                        <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                          {navigation.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="font-medium text-gray-500 hover:text-gray-900">
                              {item.name}
                            </a>
                          ))}
                          <DarkModeSwitcher />
                        </div>
                      </nav>
                    </div>

                    <Transition
                      show={open}
                      as={Fragment}
                      enter="duration-150 ease-out"
                      enterFrom="opacity-0 scale-95"
                      enterTo="opacity-100 scale-100"
                      leave="duration-100 ease-in"
                      leaveFrom="opacity-100 scale-100"
                      leaveTo="opacity-0 scale-95">
                      <Popover.Panel
                        focus
                        static
                        className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
                        <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                          <div className="px-5 pt-4 flex items-center justify-between">
                            <div>
                              <img
                                src="/soufiyan-logo.png"
                                alt="soufiyan | wevente"
                                className="h-4 w-auto sm:h-4"
                              />
                            </div>
                            <div className="-mr-2">
                              <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                                <span className="sr-only">Close main menu</span>
                                <XIcon className="h-6 w-6" aria-hidden="true" />
                              </Popover.Button>
                            </div>
                          </div>
                          <div className="px-2 pt-2 pb-3 space-y-1">
                            {navigation.map((item) => (
                              <a
                                key={item.name}
                                href={item.href}
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">
                                {item.name}
                              </a>
                            ))}
                          </div>
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>

              <div className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                <div className="sm:text-center lg:text-left">
                  {/* <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl"> */}
                  <motion.h1
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl z-0">
                    <span className="block xl:inline">Hello</span>{' '}
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    <span className="block text-yellow-500 ">I'M SOUFIYAN</span>
                  </motion.h1>
                  <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                    Frontend developer, I produce elegant, performant and accessible digital
                    experciences UI & UX, please take a look around
                  </p>
                  <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                    <div className="rounded-md shadow">
                      <a
                        href="#"
                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10">
                        EXPLORE WORK
                      </a>
                    </div>
                    <div className="mt-3 sm:mt-0 sm:ml-3">
                      <a
                        href="#"
                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10">
                        VIEW PROFILE
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <img
              className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
              alt=""
            />
          </div>
        </section>
        <ServicesSection />
        <HeroSection />
        <section className="w-full bg-gray-200 dark:bg-gray-900 py-10">
          <div className="max-w-7xl mx-auto px-6 flex items-start justify-center">
            {/* Card is full width. Use in 12 col grid for best view. */}
            {/* Card code block start */}
            <div className="flex flex-col lg:flex-row mx-auto bg-white dark:bg-gray-800 shadow rounded">
              <div className="w-full lg:w-1/3 px-12 flex flex-col items-center py-10">
                <div className="w-24 h-24 mb-3 p-2 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                  <img
                    className="w-full h-full overflow-hidden object-cover rounded-full"
                    src="/profile.jpg"
                    alt="avatar"
                  />
                </div>
                <h2 className="text-gray-800 dark:text-gray-100 text-xl tracking-normal font-medium mb-1">
                  Soufiyan benallal
                </h2>
                <p className="flex text-gray-600 dark:text-gray-100 text-sm tracking-normal font-normal mb-3 text-center">
                  <span className="cursor-pointer mr-1 text-gray-600 dark:text-gray-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-map-pin"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <circle cx={12} cy={11} r={3} />
                      <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 0 1 -2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z" />
                    </svg>
                  </span>
                  Meknes, Morocco
                </p>
                <p className="text-gray-600 dark:text-gray-100 text-sm tracking-normal font-normal mb-8 text-center w-10/12">
                  The more I deal with the work as something that is my own, as something that is
                  personal, the more successful it is.
                </p>
                <div className="flex items-start">
                  <div className>
                    <h2 className="text-gray-600 dark:text-gray-100 text-2xl leading-6 mb-2 text-center">
                      82
                    </h2>
                    <p className="text-gray-800 dark:text-gray-100 text-sm leading-5">Reviews</p>
                  </div>
                  <div className="mx-6 lg:mx-3 xl:mx-6 px-8 lg:px-4 xl:px-8 border-l border-r">
                    <h2 className="text-gray-600 dark:text-gray-100 text-2xl leading-6 mb-2 text-center">
                      24
                    </h2>
                    <p className="text-gray-800 dark:text-gray-100 text-sm leading-5">Projects</p>
                  </div>
                  <div className>
                    <h2 className="text-gray-600 dark:text-gray-100 text-2xl leading-6 mb-2 text-center">
                      20
                    </h2>
                    <p className="text-gray-800 dark:text-gray-100 text-sm leading-5">Approved</p>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/3 px-12 border-t border-b lg:border-t-0 lg:border-b-0 lg:border-l lg:border-r border-gray-500 border-opacity-50  flex flex-col items-center py-10">
                <div className="mb-3 w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center cursor-pointer text-indigo-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-stack"
                    width={48}
                    height={48}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <polyline points="12 4 4 8 12 12 20 8 12 4" />
                    <polyline points="4 12 12 16 20 12" />
                    <polyline points="4 16 12 20 20 16" />
                  </svg>
                </div>
                <h2 className="text-gray-800 dark:text-gray-100 text-xl tracking-normal text-center font-medium mb-1 capitalize">
                  Senior front end 
                </h2>
                <p className="text-gray-600 dark:text-gray-100 text-sm tracking-normal font-normal mb-3 text-center">
                  Freelance
                </p>
                <p className="text-gray-600 dark:text-gray-100 text-sm tracking-normal font-normal mb-8 text-center w-10/12">
                  John is a true asset to us, providing advanced designing skills from years of
                  experience as UX designer.
                </p>
                <div className="flex items-start">
                  <div className="bg-gray-200 text-gray-600 dark:text-gray-100 dark:bg-gray-700 rounded text-xs leading-3 py-2 px-3">
                    Code
                  </div>
                  <div className="bg-gray-200 text-gray-600 dark:text-gray-100 dark:bg-gray-700 rounded mx-2 text-xs leading-3 py-2 px-3">
                    UI
                  </div>
                  <div className="bg-gray-200 text-gray-600 dark:text-gray-100 dark:bg-gray-700 rounded text-xs leading-3 py-2 px-3">
                    UX
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-1/3 flex-col flex justify-center items-center px-12 py-8">
                <h2 className="text-center text-2xl text-gray-800 dark:text-gray-100 font-medium tracking-normal">
                  $35
                </h2>
                <h2 className="text-center text-sm text-gray-600 dark:text-gray-100 font-normal mt-2 mb-4 tracking-normal">
                  Hourly Rate
                </h2>
                <h2 className="text-center text-2xl text-gray-800 dark:text-gray-100 font-medium tracking-normal">
                  2000
                </h2>
                <h2 className="text-center text-sm text-gray-600 dark:text-gray-100 font-normal mt-2 mb-4 tracking-normal">
                  Hours Worked
                </h2>
                <h2 className="text-center text-2xl text-gray-800 dark:text-gray-100 font-medium tracking-normal">
                  95%
                </h2>
                <h2 className="text-center text-sm text-gray-600 dark:text-gray-100 font-normal mt-2 mb-4 tracking-normal">
                  Success Rate
                </h2>
       
              </div>
            </div>
            {/* Card code block end */}
          </div>
        </section>

        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
                Pitchfork Kickstarter Taxidermy
              </h1>
              <p className="lg:w-1/2 w-full leading-relaxed text-gray-500">
                Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway
                tile poke farm-to-table.
              </p>
            </div>
            <div className="flex flex-wrap -m-4">
              <div className="xl:w-1/3 md:w-1/2 p-4">
                <div className="border border-gray-200 p-6 rounded-lg">
                  <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-6 h-6"
                      viewBox="0 0 24 24">
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                  </div>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                    Shooting Stars
                  </h2>
                  <p className="leading-relaxed text-base">
                    Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.
                  </p>
                </div>
              </div>
              <div className="xl:w-1/3 md:w-1/2 p-4">
                <div className="border border-gray-200 p-6 rounded-lg">
                  <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-6 h-6"
                      viewBox="0 0 24 24">
                      <circle cx="6" cy="6" r="3"></circle>
                      <circle cx="6" cy="18" r="3"></circle>
                      <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                    </svg>
                  </div>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                    The Catalyzer
                  </h2>
                  <p className="leading-relaxed text-base">
                    Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.
                  </p>
                </div>
              </div>
              <div className="xl:w-1/3 md:w-1/2 p-4">
                <div className="border border-gray-200 p-6 rounded-lg">
                  <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-6 h-6"
                      viewBox="0 0 24 24">
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Neptune</h2>
                  <p className="leading-relaxed text-base">
                    Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.
                  </p>
                </div>
              </div>
              <div className="xl:w-1/3 md:w-1/2 p-4">
                <div className="border border-gray-200 p-6 rounded-lg">
                  <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-6 h-6"
                      viewBox="0 0 24 24">
                      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7"></path>
                    </svg>
                  </div>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Melanchole</h2>
                  <p className="leading-relaxed text-base">
                    Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.
                  </p>
                </div>
              </div>
              <div className="xl:w-1/3 md:w-1/2 p-4">
                <div className="border border-gray-200 p-6 rounded-lg">
                  <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-6 h-6"
                      viewBox="0 0 24 24">
                      <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"></path>
                    </svg>
                  </div>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-2">Bunker</h2>
                  <p className="leading-relaxed text-base">
                    Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.
                  </p>
                </div>
              </div>
              <div className="xl:w-1/3 md:w-1/2 p-4">
                <div className="border border-gray-200 p-6 rounded-lg">
                  <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-6 h-6"
                      viewBox="0 0 24 24">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    </svg>
                  </div>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-2">
                    Ramona Falls
                  </h2>
                  <p className="leading-relaxed text-base">
                    Fingerstache flexitarian street art 8-bit waist co, subway tile poke farm.
                  </p>
                </div>
              </div>
            </div>
            <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Button
            </button>
          </div>
        </section>

        <div className="px-6 py-6 bg-purple-700 dark:bg-gray-800 md:py-12 md:px-12 lg:py-16 lg:px-16 xl:flex xl:items-center">
          <div className="xl:w-0 xl:flex-1">
            <h2 className="text-2xl leading-8 font-extrabold tracking-tight text-white sm:text-3xl sm:leading-9">
              Receive alert about new commit or pull request on your github
            </h2>
            <p className="mt-3 max-w-3xl text-lg leading-6 text-indigo-200">
              No account or email required. We use push notifications. You can choose between
              several modes and define your own alert threshold.
            </p>
          </div>
          <div className="mt-8 sm:w-full sm:max-w-md xl:mt-0 xl:ml-8">
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
              <button className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-purple-500 hover:bg-purple-400 focus:outline-none focus:bg-purple-400 transition duration-150 ease-in-out">
                Notify me
              </button>
            </div>
            <p className="mt-3 text-sm leading-5 text-indigo-200">
              We care about the protection of your data. Your data is safe and never used for
              commercial purposes.
            </p>
            <p className="text-sm leading-5 text-indigo-200">
              In order to receive the notifications, you must give permission sufficient to your web
              browser.
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}
