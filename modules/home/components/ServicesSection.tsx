import React from 'react';
// import { motion, useTransform, useViewportScroll } from "framer-motion"
import  { Card, AnimatedTextWord } from '../../../components/Box'
import Box from '../../../shared/animation/Box';
export default function ServicesSection() {
  return (
    <Box type='fade' duration={.5} className="h-screen container-lg overflow-hidden flex items-center">
      {/* <Box /> */}
      <div className="grid grid-cols-1 gap-12  md:grid-cols-2 lg:grid-cols-3 rounded-b-xl ">
        <Box type='slideVertical' y={300} duration={.8} className="col-span-1 md:col-span-2 lg:col-span-3 ">
            <h2 className='text-red-base text-2xl'>The way</h2>
            <p className='dark:text-gray-200 text-[8rem] font-extrabold leading-[1] uppercase'>how i work</p>
        </Box>
        <Box type='slideVertical' className='dark:bg-gray-1000 bg-gray-200 p-7 rounded-3xl' >
          <svg    
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-12 h-12 mb-4 text-red-base"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
          <h3 className="mb-3 text-lg font-medium leading-tight text-gray-900 dark:text-gray-300">
            Project structure
          </h3>
          <p className="text-base leading-relaxed text-gray-600">
            Building structural project is the first step to start any project.
            In which case i more likley to integrate design system to my projects.
            As core that contains all the services, components and styles that are used.
            as modules that contains all the pages and components that are used.
          </p>
        </Box>
        <Box type='slideVertical' className='dark:bg-gray-1000 bg-gray-200 p-7 rounded-3xl' y={350} >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-12 h-12 mb-4 text-red-base"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
            />
          </svg>
          <h3 className="mb-3 text-lg font-medium leading-tight text-gray-900 dark:text-gray-300">
            Preferable tools
          </h3>
          <p className="text-base leading-relaxed text-gray-600">
            I prefer to use the tools that i&apos;m familiar with, and i&apos;m always.
            Typescript for the type safety and the intellisense.
            React for the component based architecture and the reusability.
            Redux for the state management and the scalability, and maybe recoil for future.
            Tailwindcss for the utility first approach and the customizability.
            Framer motion for the animations and the interactions.
          </p>
        </Box>
        <Box type='slideVertical' className='dark:bg-gray-1000 bg-gray-200 p-7 rounded-3xl'  y={400}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-12 h-12 mb-4 text-red-base"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20"
            />
          </svg>
          <h3 className="mb-3 text-lg font-medium leading-tight text-gray-900 dark:text-gray-300">
            UX/UI Design
          </h3>
          <p className="text-base leading-relaxed text-gray-600">
            I&apos;m a self taught designer, i&apos;m always trying to improve my skills.
            I&apos;m using figma for the prototyping and the design.
            I&apos;m using adobe illustrator for the vector editing and the design.
          </p>
        </Box>
      </div>
    </Box>
  );
}
