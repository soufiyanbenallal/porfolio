import React from "react";
import { motion, useViewportScroll, useTransform } from "framer-motion";

export const Card = ({children}) => {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0.5, 1], [120, 0]);
  const opacity = useTransform(scrollYProgress, [0.5, 1], [0, 1]);

  return (
      <motion.div
        className="container"
        style={{
          translateY: scale,
          opacity
        }}
      >
        {children}
      </motion.div>
  );
};