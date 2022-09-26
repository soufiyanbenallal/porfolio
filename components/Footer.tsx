import React, { ReactElement } from 'react';
import { FADE_ANIM } from '../motions/home';
import Box from './Box';
import GetInTouch from './GetInTouch';
import SocialMedia from './SocialMedia';
import { motion } from 'framer-motion';
import Image from 'next/image';
// import Image from 'next/image';

export default function Footer(): ReactElement {
  return (
    <footer>
       <section className="container my-10 flex items-start justify-center min-h-[350px] overflow-hidden">
        {/* Card is full width. Use in 12 col grid for best view. */}
        {/* Card code block start */}
        <motion.article {...FADE_ANIM} className="fixed left-0 bottom-28 z-50 w-full">
          <SocialMedia className="container-lg text-gray-600"/>
        </motion.article>
        <article className="flex flex-col md:flex-row mx-auto rounded-xl md:divide-x divide-gray-500 divide-opacity-20 z-50">
          <Box className="w-full flex-1 px-12 flex flex-col items-center py-10">
            <div className="w-24 h-24 mb-3 p-2 rounded-full  flex items-center justify-center">
              <Image
                width={96}
                height={96}
                className="w-full h-full overflow-hidden object-cover rounded-full"
                src="/profile.jpg"
                alt="avatar"
              />
            </div>
            <h2 className="text-gray-200 dark:text-gray-900 text-xl tracking-normal font-medium mb-1">
              Soufiyan benallal
            </h2>
            <p className="flex text-gray-600 text-sm tracking-normal font-normal mb-3 text-center">
              <span className="cursor-pointer mr-1 text-gray-600">
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
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <circle cx={12} cy={11} r={3} />
                  <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 0 1 -2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z" />
                </svg>
              </span>
              Meknes, Morocco
            </p>
            <p className="text-gray-500 dark:text-gray-800 text-xs mb-8 text-center w-full">
              The more I deal with the work as something that is my own, as
              something that is personal, the more successful it is.
            </p>
          </Box>
          <Box className="w-full flex-1 px-12 flex flex-col items-center py-10">
            <GetInTouch />
          </Box>
          <Box className="w-full flex-1 px-12 flex flex-col items-center py-10">
            <div className="mb-3 w-24 h-24 rounded-full border-gray-1000 dark:border-gray-300 flex items-center justify-center cursor-pointer text-red-base">
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
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <polyline points="12 4 4 8 12 12 20 8 12 4" />
                <polyline points="4 12 12 16 20 12" />
                <polyline points="4 16 12 20 20 16" />
              </svg>
            </div>
            <h2 className="text-gray-200 dark:text-gray-900 text-xl tracking-normal text-center font-medium mb-1 capitalize">
              Frontend Engineering
            </h2>
            <p className="text-gray-600 text-sm tracking-normal font-normal mb-3 text-center">
              Freelance / contracter
            </p>
            <p className="text-gray-500 dark:text-gray-800 text-xs tracking-normal font-normal mb-8 text-center w-full">
              I am a person who is always looking for new challenges and new
              opportunities.
            </p>
            <div className="flex items-start space-x-3">
              <div className="dark:bg-gray-200 bg-gray-1000 text-gray-600 border dark:border-gray-300 border-gray-800 rounded-full text-xs leading-3 py-2 px-3">
                react
              </div>
              <div className="dark:bg-gray-200 bg-gray-1000 text-gray-600 border dark:border-gray-300 border-gray-800 rounded-full text-xs leading-3 py-2 px-3">
                sass
              </div>
              <div className="dark:bg-gray-200 bg-gray-1000 text-gray-600 border dark:border-gray-300 border-gray-800 rounded-full text-xs leading-3 py-2 px-3">
                UI/UX
              </div>
              <div className="dark:bg-gray-200 bg-gray-1000 text-gray-600 border dark:border-gray-300 border-gray-800 rounded-full text-xs leading-3 py-2 px-3">
                Nuxt
              </div>
            </div>
          </Box>
        </article>
        {/* Card code block end */}
    </section>
    </footer>
  );
}
