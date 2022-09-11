import React from 'react';
import { motion } from "framer-motion";
import { DISAPEAR_ANIM, FADE_ANIM, NAME_ANIM } from '../../../motions/home';
import { ParallaxText } from '../../../motions/OnScroll';



export default function HeroSection() {
  return (
    <section className="paralax container-fluid px-4 w-full h-screen flex flex-col ">
   
      <div className="relative  py-6 text-center md:text-left w-full h-full flex flex-col justify-center items-center">
        <motion.p {...FADE_ANIM} className='w-full text-center font-medium tracking-widest dark:text-gray-400 text-2xl mb-2'>Hello, I&apos;m</motion.p>
        <div className="w-full relative">
          <motion.svg {...FADE_ANIM} viewBox="0 0 960 200" 
          className="text-animation absolute z-0 w-full left-9 top-1/2 transform -translate-y-1/2 md:text-[12rem] text-[2rem]">
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

          <h1 className="dark:text-white relative z-1 text-6xl md:text-[8rem] font-extrabold tracking-widest space-y-4 text-center" >
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
                  className='bg-red-500 absolute left-[9px] top-[28px]'></motion.span>
                {/* <motion.span {...LINE_ANIM} className='dark:bg-white bg-gray-100 absolute left-[9px] top-[28px]'></motion.span> */}
              </motion.span>
            </span>
            <motion.span  {...NAME_ANIM}>YAN</motion.span>
          </h1>
         <div className="flex justify-center">
         <a href="https://www.buymeacoffee.com/soufiyan" target="_blank" rel="noreferrer">
              <img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" className='h-12 mt-6 relative' alt="Buy Me A Coffee" />
          </a>
         </div>
        </div>
        
      </div>
      <motion.div  {...FADE_ANIM} className="relative container h-1/6">
        {/* <ParallaxText  baseVelocity={1} >
            <p className="text-3xl tracking-wider w-full dark:text-gray-300 text-center">
              I&apos;m Frontend developer, I produce elegant,
              performant and accessible digital experciences UI/ UX, please
              take a look around
            </p>
        </ParallaxText> */}
        <div className="absolute left-10 top-0 h-full w-28 bg-gradient-to-r from-gray-100 dark:from-gray-900  to-transparent z-10"></div>
        <div className="absolute right-10 top-0 h-full w-28 bg-gradient-to-r from-transparent dark:to-gray-900 to-gray-100 z-10"></div>
        <ParallaxText baseVelocity={1} className="text-2xl tracking-wider dark:text-red-600 text-center">
          Defining The Future of Apps
        </ParallaxText>
        <ParallaxText baseVelocity={-1} className="text-2xl tracking-wider dark:text-gray-600 text-center">
          Defining The Future of Apps
        </ParallaxText>

      </motion.div>
    </section>
  );
}
