import React from 'react'
import { motion } from 'framer-motion'
import Box from '../../../shared/animation/Box'

export default function ProjectWeventeComponent() {
  return (
   
    <section className="h-screen relative flex flex-col items-center container">
      <Box type='fade' duration={1.5}>
          <img
              className="w-full  object-contain bg-black "
              src="/projects/wevente.png"
              alt=""
          />
      </Box>
  </section>
  )
}
