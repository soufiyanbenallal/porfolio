import React, { useState,useEffect } from "react";
import { motion, useMotionValue, animate, useTransform } from "framer-motion";
import { interpolate } from "flubber";

export const getIndex = (_, index) => index;

export function useFlubber(progress, paths) {
  return useTransform(progress, paths.map(getIndex), paths, {
    mixer: (a, b) => interpolate(a, b, { maxSegmentLength: 0.1 })
  });
}
const p1 = 'M73.54,147.08,0,73.54,73.54,0l20,20c14.77,14.77-20,34.14-20,53.51s34.8,38.73,20,53.51Z';
const p2 = 'M144.13,76.37,73.5,147,0,73.5,73.5,0l70.63,70.63A4,4,0,0,1,144.13,76.37Z';

const paths1 = [p2, p1];
const paths = paths1


export default function LogoAnimate() {
  const [pathIndex, setPathIndex] = useState(0);
  const progress = useMotionValue(pathIndex);
  const path = useFlubber(progress, paths);
  const pathLength = useMotionValue(0);
  const opacity = useTransform(pathLength, [0.05, 0.15], [0, 1]);

  useEffect(() => {

    const animation = animate(progress, pathIndex, {
      duration: 0.8,
      ease: "easeInOut",
      delay:.1,
      onComplete: () => {
        if (pathIndex === 1) {
          // progress.set(0);
          // setPathIndex(1);
        } else {
          setPathIndex(pathIndex + 1);
        }
      }
    });

    return () => animation.stop();
  }, [pathIndex]);

  return (
    <svg >
        <motion.path d={path} 
                            fill="transparent"
                            transition={{ duration: 1 }}
                            strokeWidth="5"
                            stroke="#000"
         animate={{ pathLength: 1, 
          fillOpacity: 1,
      }}
      style={{ pathLength: pathLength, opacity: opacity }}
        />
    </svg>
  );
}
