import React,{ useEffect } from "react";
import { motion, useAnimation, useTransform, useViewportScroll } from "framer-motion";
import { useInView } from "react-intersection-observer";

const boxVariant = {
  visible: { opacity: 1, scale: 1,translateY:0,   transition: {
    type: "spring",
    damping: 12,
    stiffness: 100,
  } },
  hidden: { opacity: 0, scale: 1, translateY:300, }
};


export const AnimatedTextWord = ({ text }) => {
  const words = text.split("");

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: 200,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      style={{ overflow: "hidden", display: "flex", fontSize: "2rem" }}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <h3 className="  dark:text-gray-100">
      {words.map((word, index) => (
        <motion.span
          variants={child}
          key={index}
        >
          {word}
        </motion.span>
      ))}
      </h3>
    </motion.div>
  );
};
export const AnimatedTextCharacter = ({ text }) => {
  const letters = Array.from(text);

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.03, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: -20,
      y: 10,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <motion.div
      style={{ overflow: "hidden", display: "flex", fontSize: "2rem" }}
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {letters.map((letter, index) => (
        <motion.span variants={child} key={index} className=" dark:text-gray-100">
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default function Box({ children }){

  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <motion.div
      className="w-full"
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
    >
      {inView && children}
    </motion.div>
  );
};

const h = 800// window.innerHeight

export function Card({children}) {
  const { scrollY } = useViewportScroll();
  const y2 = useTransform(scrollY, [0, h], [h, -200]);

  return (
  // <Box>

      <motion.div
        className="bg-gray-1000 p-7 rounded-3xl"
        style={{ y: y2}}
        >
      {children}
      </motion.div>  
        // </Box>
  );
}