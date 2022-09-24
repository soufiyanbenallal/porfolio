import classNames from 'classnames'
import React from 'react'
import { motion } from "framer-motion";
import useTheme from '../../shared/hooks/useTheme';
import { container, defaultTransition, lineMiddle, lineTopBottom } from './logoNameConst';


export default function LogoNameComponent({className}) {
  const {isDark} = useTheme()
  const child = {
      hidden: {
        pathLength: 0,
        fill: isDark ? "rgba(170, 170, 170, .05)" : "rgba(100, 100, 100, .05)",
        y:4,
        x:4,
      },
      visible: {
        pathLength: 1,
        fill: isDark ? "rgba(170, 170, 170, 1)" : "rgba(100, 100, 100, 1)",
        y:-4,
        x:-4
      },
  };
    
  return (
    <motion.svg className={classNames('flex w-[80vw]', className)}
      key={isDark ? 'dark':'light'}
      viewBox="0 0 1366 627.29"
      initial="hidden"
      animate="visible"
      variants={container}
  
    >
      <defs>
        <linearGradient id="a" x1="55.21" y1="313.06" x2="1337.29" y2="329.63" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#b50841"/>
          <stop offset="0.32" stopColor="#e83005"/>
          <stop offset="0.69" stopColor="#af083f"/>
          <stop offset="1" stopColor="#f70656"/>
        </linearGradient>
        <linearGradient id="b" x1="55.25" y1="310.53" x2="1337.32" y2="327.09" xlinkHref="#a"/>
        <linearGradient id="c" x1="55.26" y1="309.5" x2="1337.33" y2="326.06" xlinkHref="#a"/>
        <linearGradient id="d" x1="55.29" y1="306.96" x2="1337.36" y2="323.53" xlinkHref="#a"/>
        <linearGradient id="e" x1="55.33" y1="304.06" x2="1337.4" y2="320.62" xlinkHref="#a"/>
        <linearGradient id="f" x1="55.35" y1="302.55" x2="1337.42" y2="319.11" xlinkHref="#a"/>
        <linearGradient id="g" x1="55.38" y1="300.53" x2="1337.45" y2="317.09" xlinkHref="#a"/>
        <linearGradient id="h" x1="55.4" y1="298.82" x2="1337.47" y2="315.38" xlinkHref="#a"/>
      </defs>  
        {
            lineTopBottom.map((path,key)=>{
                return  (
                    <motion.path  
                      key={'firstname-'+key} 
                      stroke='currentColor'
                      strokeWidth={.4}
                      variants={child}  
                      d={path}
                      initial="hidden"
                      animate="visible"
                      whileHover={{ scale: [null, 1.2, 1.1] }}
                      transition={{
                        pathLength: { 
                          duration: 2, 
                          delay: 2,
                          repeatDelay: Math.random(),
                          ...defaultTransition,

                        },
                        fill: { 
                          duration: 3, 
                          delay: 2,
                          ...defaultTransition,
                          repeatDelay: 4 * Math.random(),

                        },
                      }}
                    ></motion.path>

                )
            })
        }
        {
            lineMiddle.map((path,key)=>{
                return  (
                    <motion.path  
                      key={'firstname-'+key} 
                      fill={`url(${path.fill})`}
                      variants={{
                        hidden:{
                          opacity: .1,
                          y: 4,
                          x: 4,
                        },
                        visible:{
                          scale: 1,
                          opacity: 1,
                          y: -4,
                          x: -4,
                        }
                      }}
                      d={path.d}
                      initial="hidden"
                      whileHover={{ scale: [null, 1.2, 1.1] }}
                      animate="visible"
                      transition={{
                        opacity: { 
                          duration: 1.5, 
                          repeatType: 'mirror',
                          ease: "easeInOut",
                          repeat: Infinity,
                          repeatDelay: 3 * Math.random(),

                        },
                        y: { 
                          duration: 3, 
                          delay: 1.25 * Math.random(),
                          ...defaultTransition,
                        },
                        x: { 
                          duration: 3, 
                          delay: 1 * Math.random(),
                          ...defaultTransition,
                        },
                      }}
                    ></motion.path>

                )
            })
        }

    </motion.svg> 
  )
}
