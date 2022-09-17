import React from 'react';
import { motion } from "framer-motion";
import { DISAPEAR_ANIM, FADE_ANIM, NAME_ANIM } from '../../../motions/home';
import { ParallaxText } from '../../../motions/OnScroll';
import BuyMeCoffe from '../../../components/BuyMeCoffe';

// const Text = () => <svg  viewBox={`0 0 8200 ${1000 / 2}`}
// className=" w-full text-[28rem] uppercase">
//   <symbol id="s-text">
//     <text textAnchor="middle" x="50%" y="80%">Defining The Future of Apps</text>
//   </symbol>

//   <g className ="g-ants">
//     <use xlinkHref="#s-text" className="text-copy"></use>
//     <use xlinkHref="#s-text" className="text-copy"></use>
//     <use xlinkHref="#s-text" className="text-copy"></use>
//     <use xlinkHref="#s-text" className="text-copy"></use>
//     <use xlinkHref="#s-text" className="text-copy"></use>
//   </g>
// </svg>

export default function HeroSection() {
  return (
    <section className="relative w-screen h-screen flex flex-col ">
      <aticle className="relative z-10 py-6 text-center md:text-left w-full h-full flex flex-col justify-center items-center">
        <motion.p {...FADE_ANIM} className='w-full text-center font-medium tracking-widest dark:text-gray-400 text-2xl mb-2'>Hello, I&apos;m</motion.p>
        <div className="w-full relative">
 

          <h1 className="dark:text-white relative z-1 text-6xl md:text-[8rem] font-extrabold tracking-widest font-one space-y-4 text-center" >
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
                  className='bg-red-base absolute left-[9px] top-[28px]'></motion.span>
              </motion.span>
            </span>
            <motion.span  {...NAME_ANIM}>YAN</motion.span>
          </h1>
         <motion.div {...FADE_ANIM} className="flex justify-center">
          <BuyMeCoffe className='flex items-center space-x-2 border-2 border-yellow-400 text-yellow-400 px-3 py-1 rounded-md'  href="https://www.buymeacoffee.com/soufiyan" target="_blank" rel="noreferrer" />
         {/* <a href="https://www.buymeacoffee.com/soufiyan" target="_blank" rel="noreferrer">
              <img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" className='h-12 mt-6 relative' alt="Buy Me A Coffee" />
          </a> */}
         </motion.div>  
        </div>
        
      </aticle>




      <motion.article className="absolute left-0 w-screen top-1/2 -translate-y-1/2 z-1">
        <ParallaxText baseVelocity={1} className="h-1/2 w-screen flex opacity-20">
          {/* <Text /> */}
          <span className='text-red-base text-[12rem] font-extrabold uppercase text-stroke leading-[1]'>Defining the Future of apps</span>
          <span className='text-red-base text-[12rem] font-extrabold uppercase leading-[1]'>Defining the Future of apps</span>
        </ParallaxText>
        {/* <div className="h-1/2 w-screen flex">
          <Text />
        </div> */}
       {/* <ParallaxText baseVelocity={1} className='flex h-40'>
        <span className="text-white">defining the fuuture of apps</span>
        </ParallaxText> */}
        {/* <ParallaxText  baseVelocity={1} >
            <p className="text-3xl tracking-wider w-full dark:text-gray-300 text-center">
              I&apos;m Frontend developer, I produce elegant,
              performant and accessible digital experciences UI/ UX, please
              take a look around
            </p>
        </ParallaxText> */}
        {/* <div className="absolute left-10 top-0 h-full w-28 bg-gradient-to-r from-gray-100 dark:from-gray-900  to-transparent z-10"></div>
        <div className="absolute right-10 top-0 h-full w-28 bg-gradient-to-r from-transparent dark:to-gray-900 to-gray-100 z-10"></div> */}
        
        {/* <ParallaxText baseVelocity={-1} className='flex h'>
          <Text />
        </ParallaxText> */}
        {/* <ParallaxText baseVelocity={-1} className="text-2xl tracking-wider dark:text-gray-600 text-center">
          Defining The Future of Apps
        </ParallaxText> */}

      </motion.article>
    </section>
  );
}
