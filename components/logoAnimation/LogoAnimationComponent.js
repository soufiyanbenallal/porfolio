import React from "react";
import { motion} from "framer-motion";
import { icon2, p1 } from "./logoAnimationConst";
import useTheme from "../../shared/hooks/useTheme";

export default function LogoAnimationComponent (props){
  const {isDark} = useTheme()
  const icon = {
    hidden: {
      opacity: 0,
      pathLength: 0,
      y: 100,
      x: 0,
      rotate: -90,
      fill:  isDark ? "rgba(170, 170, 170, .05)" : "rgba(100, 100, 100, .05)",
    },
    visible: {
      opacity: 1,
      y: -60,
      x: 105,
      rotate: 0,
      pathLength: 1,
      fill:  isDark ? "rgba(170, 170, 170, 1)" : "rgba(50, 50, 50, 1)",
    }
  };
  return (
    <motion.div
      {...props}
      transition={{
        delay: 2,
        type:'spring',
        duration: 1.5,
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
          strokeWidth="16"
          stroke="currentColor"
          fill='transparent'
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
