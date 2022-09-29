import React,{ ReactElement, ReactNode, useEffect } from 'react';
import { motion, useAnimation, useTransform, useScroll } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

type type = 'fade' | 'slideVertical' | 'slideHorizontal'
interface IBox {
    className?: string
    children: ReactNode, 
    type: type,
    x?: number,
    y?: number,
    duration?: number,
}


export default function Box({className, children, type, y=300,x=300, duration=1}: IBox): ReactElement {
    const control = useAnimation();
    const [ref, inView] = useInView();
    const variants = {
        fade: {
            visible: { opacity: 1},
            hidden: { opacity: 0,
              transition:{
                ease:'easeInOut',
              }
            }
        },
        slideVertical: {
            visible: { opacity: 1, scale: 1,y:0 },
            hidden: { opacity: 0, scale: 1, y,
              transition: {
                bounce: .4,
                type:'spring',
                damping: 8,
                stiffness: 50,
              }
            }
          },
        slideHorizontal: {
            visible: { opacity: 1, scale: 1,x:0 },
            hidden: { opacity: 0, scale: 1, x, }
        },
    };
    
    useEffect(() => {
        inView ? control.start('visible') : control.start('hidden');
    }, [control, inView]);

  return (
    <motion.div
    className={className ? className : 'w-full'}
    ref={ref}
    transition={{duration}}
    variants={variants[type]}
    initial="hidden"
    animate={control}
  >
    {children}
  </motion.div>
  )
}
