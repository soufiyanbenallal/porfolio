import React, { useState,useEffect } from "react";
import { motion, useMotionValue, useTransform , useAnimation, AnimatePresence} from "framer-motion";
import { interpolate } from "flubber";

export const getIndex = (_, index) => index;


const p1 = 'M566.53,702.16L364.36,500l202.16-202.16l55.06,55.06c40.63,40.63-55.06,93.85-55.06,147.1  s95.67,106.47,55.06,147.1L566.53,702.16z';


const icon = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    y: 100,
    x: 0,
    rotate: -90,
    fill: "rgba(255, 255, 255, 0)"
  },
  visible: {
    opacity: 1,
    y: -60,
    x: 105,
    rotate: 0,
    pathLength: 1,
    fill: "rgba(255, 255, 255, 1)"
  }
};

const icon2 = {
  hidden: {
    opacity: 0,
    rotate: 0,
    fill: "rgba(255, 255, 255, 0)"
  },
  visible: {
    y: 60,
    x: -105,
    opacity: 1,
    rotate: -180,
    pathLength: 1,
    fill: "rgba(255, 255, 255, 0)"
  }
};

export default function  LogoAnimate (props){

  return (
    <motion.div
    {...props}
    transition={{
      delay: 2,
      type:'spring',
      duration: 2,
      bounce:.4
    
    }}
    initial={{ y: "calc(50vh - 60px)" , x: "calc(50vw - 87px)" , scale: 2.5 }}
    animate={{ y: 0, x:0 ,  scale: 1}}
    >
      <motion.svg
        
        xmlns="http://www.w3.org/2000/svg"
        x="0px" y="0px" viewBox="0 0 1000 1000" 
      >
        <motion.path
          d={p1}
          initial="hidden"
          animate="visible"
          variants={icon}
          strokeWidth="5"
          stroke="currentColor"
          transition={{
            default: { duration: 8, type:'spring',bounce:.4, delay: 0},
            fill: { duration: 1, ease: 'easeInOut',delay:1 }
          }}
        />
        <motion.path
          d={p1}
          initial="hidden"
          animate="visible"
          variants={icon2}
          strokeWidth="12"
          stroke="currentColor"
          transition={{
            delay: .3,
            default: { duration: 4, type:'spring',bounce:.7, },
            fill: { duration: 3, ease: 'easeInOut' }
          }}
        />
      </motion.svg>
      </motion.div>
  )
}
