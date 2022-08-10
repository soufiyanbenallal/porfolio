import React from 'react';
import { motion } from "framer-motion";
import { DISAPEAR_ANIM, FADE_ANIM, NAME_ANIM } from '../../../motions/home';
import { ParallaxText } from '../../../motions/OnScroll';



export default function HeroSection() {
  return (
    <section className="paralax container-fluid px-4 w-full h-screen flex flex-col justify-center i2tems-center">
      {/* <div className="absolute right-0 top-0 z-0 w-screen h-screen overflow-hidden">
         <CatArt
          className="text-gray-600 dark:text-gray-800 w-full opacity-50"
          eyeClassName="text-gray-600 dark:text-gray-600 fill-current"
        /> 
      </div> */}
      <div className="relative z-10 py-6 text-center md:text-left w-full">
        <motion.p {...FADE_ANIM} className='w-full text-center font-medium tracking-widest dark:text-gray-400 text-xl mb-8 '>Hello, I&apos;m</motion.p>
        <div className="w-full relative">
          <motion.svg {...FADE_ANIM} viewBox="0 0 960 200" 
          className="text-animation absolute z-0 w-full left-9 top-1/2 transform -translate-y-1/2 md:text-[12rem]   ">
            <symbol id="s-text">
              <text textAnchor="middle" x="50%" y="80%">SOUFIYAN</text>
            </symbol>

            <g className = "g-ants">
              <use xlinkHref="#s-text" className="text-copy"></use>
              <use xlinkHref="#s-text" className="text-copy"></use>
              <use xlinkHref="#s-text" className="text-copy"></use>
              <use xlinkHref="#s-text" className="text-copy"></use>
            </g>
          </motion.svg>

          <h1 
          

            className="dark:text-white relative z-1 text-6xl md:text-[8rem] font-extrabold tracking-widest space-y-4 mb-12 text-center" >
            <motion.span {...NAME_ANIM}>SOUF</motion.span>
            <span className='relative'>
              <motion.span {...NAME_ANIM}>I</motion.span>
              <motion.span {...DISAPEAR_ANIM}>
                <motion.span 
                  initial={{ width: 1,height: 4000,opacity: 0,y: '-50%', x: '-50%'}}
                  animate={{ width: 20,height: 92,opacity: 1,y: 0, x: 0}}
                  exit={{ opacity: 0 }}

                  transition={{
                    type: "spring",
                    bounceDamping: 10,
                    duration: 3,
                  }}
                  className='dark:bg-red-600 bg-gray-100 absolute left-[9px] top-[28px]'></motion.span>
                {/* <motion.span {...LINE_ANIM} className='dark:bg-white bg-gray-100 absolute left-[9px] top-[28px]'></motion.span> */}
              </motion.span>
            </span>
            <motion.span  {...NAME_ANIM}>YAN</motion.span>
          </h1>
        </div>
        
      </div>
      <motion.div  {...FADE_ANIM} className="container mt-24">
      {/* <small>Defining The Future of Apps</small> */}
      <ParallaxText  baseVelocity={1} >
          <p className="text-3xl tracking-wider w-full dark:text-gray-300 text-center">
            I&apos;m Frontend developer, I produce elegant,
            performant and accessible digital experciences UI/ UX, please
            take a look around
          </p>

      </ParallaxText>
      <ParallaxText baseVelocity={-1}>
      <p className="text-3xl tracking-wider w-full dark:text-gray-300 text-center">
            I&apos;m Frontend developer, I produce elegant,
            performant and accessible digital experciences UI/ UX, please
            take a look around
          </p>
      </ParallaxText>

      </motion.div>
    </section>
  );
}
