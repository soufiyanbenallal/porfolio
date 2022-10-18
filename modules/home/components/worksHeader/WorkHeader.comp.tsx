import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Box from '../../../../shared/animation/Box'

export default function WorkHeaderComp() {

    
  return (
    <section className="container  w-full py-10 flex gap-10 sticky top-0">
        <Box type='slideVertical' y={120} duration={1}  className="w-1/3 text-3xl text-gray-800 dark:text-gray-100 font-extrabold tracking-wide sm:text-4xl lg:text-5xl uppercase">
          Some Things I&apos;ve Built
        </Box>
        <div className="w-2/3 text-gray-500 space-y-6">
          <Box type='slideVertical'  duration={1.2} y={120} className="font-one text-transparent text-2xl bg-clip-text bg-gradient-to-r from-red-base to-red-hover">Wevente</Box>
          <Box type='slideVertical' duration={1.4} y={120}  >
            <p className="text-base ">
                Ecommerce website for a international business. based on shopify
                as a backend managing system. The idea of this project is to build
                highly flexible schema and smart customization.
            </p>
          </Box>
        </div>
    </section>
  )
}
