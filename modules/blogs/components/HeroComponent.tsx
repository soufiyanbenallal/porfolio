import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { AnimatedTextCharacter, AnimatedTextWord } from '../../../components/Box'
import Box from '../../../shared/animation/Box'


export default function HeroComponent() {
  return (
      <Box type='fade' duration={2} className="relative h-[calc(100vh-5rem)] flex items-center ">
        <div className="container-lg flex w-full relative z-20">
          <h1 className='dark:text-gray-200 text-7xl uppercase flex-1 max-w-xl'>
            One Story sounds good until another is told
          </h1>
          <article className='dark:text-gray-200 uppercase text-lg flex-1 text-right self-end py-2 font-light tracking-wide'>
            <AnimatedTextCharacter className='w-fit ml-auto' text='Stay curious' size={1}  delay={0}/>
            <AnimatedTextCharacter className='w-fit ml-auto' text='Full-service front creative' size={1} delay={.5} />
            <AnimatedTextCharacter className='w-fit ml-auto' text='Specialised in high-end Quality' size={1} delay={1} />
          </article>
        </div>
        <motion.div 
          initial={{opacity:0}} 
          animate={{opacity:.3}} 
          transition={{
            ease:'easeInOut',
            duration:3
          }}
          className="absolute top-0 left-0 w-screen h-full z-10">
          <Image src='/blog-hero.jpg' alt='BLOG statue | soufiyan benallal' layout='fill' objectFit='cover'/>
        </motion.div>
      </Box>
  )
}
