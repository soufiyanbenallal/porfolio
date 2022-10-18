import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Box from '../../../../shared/animation/Box'

export default function WorkHeaderComp() {

    
  return (
    <section className="container-lg relative w-full py-10 flex gap-20">
        <Box type='slideVertical' y={80} duration={1}  className="text-3xl text-gray-800 dark:text-gray-100 font-extrabold tracking-tight sm:text-4xl uppercase">
          Some Things I&apos;ve Built
        </Box>
        <div className="mt-6 text-gray-500 space-y-6">
          <Box type='slideVertical' duration={1} y={80}   className="text-gray-600">Project Features</Box>
          <Box type='slideVertical' duration={1} y={80}  >
            <p className="text-base ">
                Ecommerce website for a international business. based on shopify
                as a backend managing system. The idea of this project is to build
                highly flexible ecommerce that can be used for any business. and
                easily manage the whole process, from the backend to the frontend.
            </p>
          </Box>
          <Box type='slideVertical' duration={1} y={80}  >    
            <p className="text-base ">
                You can access to this project by clicking on the button below.
            </p>
          </Box>
          <Box type='slideVertical' duration={1} y={80}  >
            <p>
                {' '}
                The password is <b>soufiyan</b>
            </p>
          </Box>
        </div>
    </section>
  )
}
