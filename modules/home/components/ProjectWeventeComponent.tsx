import React from 'react'
import { motion } from 'framer-motion'
import Box from '../../../shared/animation/Box'

export default function ProjectWeventeComponent() {
  return (
   
    <section className="h-screen relative flex items-center">
        <Box type='fade' duration={1.5}>
        <img
            className="absolute left-0 top-1/2 -translate-y-1/2 h-[100vh] object-cover bg-black opacity-25"
            src="/projects/wevente.png"
            alt=""
        />
        </Box>

    <motion.article
      className="relative ml-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:p-12 rounded-l-3xl bg-gray-900 h-screen w-full"
    >
      {/* Content area */}
      <div className="pt-4 sm:pt-16 lg:pt-20">
        <Box type='slideVertical' duration={1}  className="text-3xl text-gray-800 dark:text-gray-100 font-extrabold tracking-tight sm:text-4xl uppercase">
          Some Things I&apos;ve Built
        </Box>
        <div className="mt-6 text-gray-500 space-y-6">
          <Box type='slideVertical' duration={1}   className="text-gray-600">Project Features</Box>
          <Box type='slideVertical' duration={1}  >
            <p className="text-base ">
                Ecommerce website for a international business. based on shopify
                as a backend managing system. The idea of this project is to build
                highly flexible ecommerce that can be used for any business. and
                easily manage the whole process, from the backend to the frontend.
            </p>
          </Box>
          <Box type='slideVertical' duration={1}  >    
            <p className="text-base ">
                You can access to this project by clicking on the button below.
            </p>
          </Box>
          <Box type='slideVertical' duration={1}  >
            <p>
                {' '}
                The password is <b>soufiyan</b>
            </p>
          </Box>
        </div>
      </div>

      {/* Stats section */}

      <Box type='slideVertical' duration={1} className="mt-10">
        <div className="mt-10">
          <a
            href="https://wevente.myshopify.com/"
            className="text-base font-medium text-red-base"
          >
            {' '}
            Learn more about Wevente <span aria-hidden="true">
              &rarr;
            </span>{' '}
          </a>
        </div>
      </Box>

    </motion.article>
  </section>
  )
}
