import React, { ReactElement, ReactNode, useEffect, useRef } from 'react';
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
  useViewportScroll,
  useAnimation,
  MotionValue
} from 'framer-motion';
import { wrap } from '@motionone/utils';
import { useInView } from 'react-intersection-observer';
export function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

export interface IParallaxText { 
  children: ReactNode, 
  baseVelocity?:number, 
  className?: string
} 
export function ParallaxText({ children, baseVelocity = 100, className } :IParallaxText): ReactElement {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 20], [0, 1], {
    clamp: false
  });
  const x = useTransform(baseX, (v) => `${wrap(-139, 0, v)}%`);

  const directionFactor = useRef(1);
  const prevT = useRef(0);
  useAnimationFrame((t) => {
    if (!prevT.current) prevT.current = t;

    const timeDelta = t - prevT.current;
    let moveBy = directionFactor.current * baseVelocity * (timeDelta / 1000);

    /**
     * This is what changes the direction of the scroll once we
     * switch scrolling directions.
     */
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);

    prevT.current = t;
  });

  /**
   * The number of times to repeat the child text should be dynamically calculated
   * based on the size of the text and viewport. Likewise, the x motion value is
   * currently wrapped between -20 and -45% - this 25% is derived from the fact
   * we have four children (100% / 4). This would also want deriving from the
   * dynamically generated number of children.
   */
  return (
      <motion.div className={'scroller '+ className} style={{ x }}>
        {children}
        {children}
        {children}
        {children}
        {children}
      </motion.div>
  );
}
export interface ICards { 
  children: ReactNode, 
  num?:number, 
} 
export const Cards = ({ children, num = 900 }: ICards): ReactElement => {
  const control = useAnimation();
  const [ref, inView] = useInView();
  const { scrollYProgress } = useViewportScroll();

  useEffect(() => {
    if (inView) {
      control.start('visible');
    } else {
      control.start('hidden');
      control.stop();
    }
  }, [control, inView]);

  // const ref = useRef(null);
  // const { scrollYProgress } = useScroll({ target: ref });
  const y = useTransform(scrollYProgress, [-2, 1], [num, 0]);
  // const opacity = 1; // useTransform(scrollYProgress, [0.5, 1], [0, 1]);
  // const y = useParallax(scrollYProgress, 400);
  
  return (
    <div className="">

    <motion.div
   
      ref={ref}
      className="container"
   style={{ y }}
   animate={control}

   >
    {children}

  </motion.div>
   
    </div>
  );
};



