import React from 'react'
import { motion } from 'framer-motion'
import Box from '../../../shared/animation/Box'

export default function ProjectWeventeComponent() {
  return (
   
    <section className="h-screen relative flex flex-col items-center">
      <Box type='fade' duration={1.5}>
          <img
              className="w-full h-[100vh] object-cover bg-black opacity-25"
              src="/projects/wevente.png"
              alt=""
          />
      </Box>
  </section>
  )
}
