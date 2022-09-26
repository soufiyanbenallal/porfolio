import React from 'react';
import { motion } from 'framer-motion';
import { FADE_ANIM } from '../../../motions/home';
import LogoNameComponent from '../../../components/heroSectionAnimation/LogoNameComponent';
import { AnimatedTextCharacter } from '../../../shared/animation/TextAnimateChar';
// import { ParallaxText } from '../../../motions/OnScroll';


export default function HeroSection() {
  return (
    <section className="relative w-screen h-screen flex flex-col ">
      
      <article className="relative z-10 py-6 text-center md:text-left w-full h-full flex flex-col justify-center items-center">
        {/* <motion.p {...FADE_ANIM} className='w-full text-center font-medium tracking-widest dark:text-gray-400 text-2xl mb-2'>Hello, I&apos;m</motion.p> */}
        <div className=' dark:text-gray-1000  font-one leading-[1]'>
          <LogoNameComponent className='dark:text-gray-100'/>
          <motion.div className="dark:text-gray-300 font-sans font-thin text-xl leading-6 space-y-2 mt-[-10vw] ml-[2vw]">
            <AnimatedTextCharacter text='Im A Frontend and UX/UI developer' />
            <AnimatedTextCharacter text='With a passion for creating slick digital experiences.' />
          </motion.div>
        </div>
        
        <div className=" top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute hidden">
          {/* <AnimatedTextCharacter text='SOUFIYAN' className="dark:text-red-base relative z-1 text-6xl md:text-[8rem] font-extrabold tracking-widest font-one text-center"/> */}
          {/* <LogoText className="dark:text-red-base relative z-1 text-6xl md:text-[8rem] font-extrabold tracking-widest font-one text-center"/> */}
       
        </div>
        
      </article>





      <motion.article {...FADE_ANIM} className="grid absolute left-0 w-screen top-28 z-1">
        {/* <ParallaxText baseVelocity={1} className=" w-screen flex opacity-80 gap-4">
          <span className='text-red-base text-lg font-extrabold uppercase leading-[1]'>Defining the Future of apps</span>
        </ParallaxText> */}
        {/* <ParallaxText baseVelocity={-1} className=" w-screen flex opacity-80 gap-4">
          <span className='text-red-base text-lg font-extrabold uppercase leading-[1]'>Defining the Future of apps</span>
        </ParallaxText> */}
      </motion.article>
    </section>
  );
}
