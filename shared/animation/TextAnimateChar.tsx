import React, { ReactElement } from "react";
import { motion } from "framer-motion";
interface IAnimatedTextCharacter {
  text: string
  className?: string
  delay?: number
}
export const AnimatedTextCharacter = ({ text , className= '', delay= .51}: IAnimatedTextCharacter): ReactElement => {
    // splitting text into letters
      const letters = Array.from(text);
    
    // Variants for Container
      const container = {
        hidden: { opacity: 0, delay: 8 },
        visible: (i = 1) => ({
          opacity: 1,
          delay: 80,
          transition: { staggerChildren: 0.03, delayChildren: delay * i },
        }),
      };
    
    // Variants for each letter
      const child = {
        visible: {
          opacity: 1,
          scale:1,
          y: 0,
          x: 0,
          transition: {
            type: "spring",
            damping: 12,
            stiffness: 100,
          },
        },
        hidden: {
          opacity: 0,
          y: 40,
          x: -40,
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
          style={{  display: "flex" }}
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