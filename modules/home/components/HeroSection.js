import React from 'react';
import { motion } from "framer-motion";
import { DISAPEAR_ANIM, FADE_ANIM, NAME_ANIM } from '../../../motions/home';
import { ParallaxText } from '../../../motions/OnScroll';
import LogoAnimate from '../../../components/LogoAnimate';
import LogoText from '../../../components/LogoText';

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
const AnimatedTextCharacter = ({ text , className, delay= 1}) => {
  // splitting text into letters
    const letters = Array.from(text);
  
  // Variants for Container
    const container = {
      hidden: { opacity: 0 },
      visible: (i = 1) => ({
        opacity: 1,
        transition: { staggerChildren: 0.05, delayChildren: delay * i },
      }),
    };
  
  // Variants for each letter
    const child = {
      visible: {
        opacity: 1,
        scale:1,
        y: 0,
        transition: {
          type: "spring",
          damping: 12,
          stiffness: 100,
        },
      },
      hidden: {
        opacity: 0,
        y: 200,
        scale:.8,
        transition: {
          type: "spring",
          damping: 12,
          stiffness: 100,
        },
      },
    };
  
    return (
      <motion.div
        style={{ overflow: "hidden", display: "flex" }}
        variants={container}
        initial="hidden"
        animate="visible"
        className={className}
      >
        {letters.map((letter, index) => (
          <motion.span variants={child} key={index}>
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </motion.div>
    );
  };
export default function HeroSection() {
  return (
    <section className="relative w-screen h-screen flex flex-col ">
      
      <article className="relative z-10 py-6 text-center md:text-left w-full h-full flex flex-col justify-center items-center">
        {/* <motion.p {...FADE_ANIM} className='w-full text-center font-medium tracking-widest dark:text-gray-400 text-2xl mb-2'>Hello, I&apos;m</motion.p> */}
        <div className=' dark:text-gray-1000  font-one leading-[1]'>
          <motion.div {...FADE_ANIM} className="text-gray-300 font-sans font-thin space-y-2">
            <p>A Developer and UX/UI developer </p>
            <p>With a passion for creating slick digital experiences.</p>
          </motion.div>
          <div className="flex">
            <AnimatedTextCharacter className='text-stroke -ml-80  text-[12rem]' text='SOUFIYAN' delay={1.5}></AnimatedTextCharacter>
            <motion.svg {...FADE_ANIM} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 1000 1000" className='text-white w-40 -mr-40'>
              <path
                d='M566.53,702.16L364.36,500l202.16-202.16l55.06,55.06c40.63,40.63-55.06,93.85-55.06,147.1  s95.67,106.47,55.06,147.1L566.53,702.16z'
                fill="currentColor"
              />
            </motion.svg>
          </div>
          <div className="flex">
            <motion.svg {...FADE_ANIM} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 1000 1000" className='text-white w-40 -ml-40 transform rotate-180'>
              <path
                d='M566.53,702.16L364.36,500l202.16-202.16l55.06,55.06c40.63,40.63-55.06,93.85-55.06,147.1  s95.67,106.47,55.06,147.1L566.53,702.16z'
                stroke="currentColor"
                fill='transparent'
                strokeWidth={10}
              />
            </motion.svg>
            <AnimatedTextCharacter className='text-stroke -mr-80  text-[12rem]' text='BENALLAL' delay={2}></AnimatedTextCharacter>
          </div>
          {/* <div>IYAN</div> */}
        </div>
        
        <div className=" top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 absolute hidden">
          {/* <AnimatedTextCharacter text='SOUFIYAN' className="dark:text-red-base relative z-1 text-6xl md:text-[8rem] font-extrabold tracking-widest font-one text-center"/> */}
          <LogoText className="dark:text-red-base relative z-1 text-6xl md:text-[8rem] font-extrabold tracking-widest font-one text-center"/>
       
        </div>
        
      </article>




{/* 
      <motion.article {...FADE_ANIM} className="absolute left-0 w-screen top-1/2 -translate-y-1/2 z-1">
        <ParallaxText baseVelocity={1} className=" w-screen flex opacity-20">
          <span className='text-red-base text-[12rem] font-extrabold font-one uppercase text-stroke leading-[1]'>Defining the Future of apps</span>
          <span className='text-gray-900 text-[12rem] font-extrabold font-one uppercase leading-[1]'>Defining the Future of apps</span>
        </ParallaxText>
      </motion.article> */}
    </section>
  );
}
