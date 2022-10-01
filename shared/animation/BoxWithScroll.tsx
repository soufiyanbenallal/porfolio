import { motion, useScroll, useTransform } from 'framer-motion';
import React, { ReactNode, useEffect } from 'react'
import useWindowSize from '../hooks/useWindowSize';
interface IBoxWithScroll {
    children: ReactNode, 
    className?: string, 
    scale?: number, 
    opacity?: number
}
export default function BoxWithScroll({children, className = '', scale=1.5, opacity=0}: IBoxWithScroll) {
    const {height} = useWindowSize()
    const h = height /2
    const { scrollY } = useScroll();
    const res = useTransform(scrollY, [0, h], [1, scale]);
    const res2 = useTransform(scrollY, [0, h], [1, 0]);

    
    // const y = useTransform(scrollY, [0, h], [120, -120]);
    const move = {scale: res, opacity: res2}
    return (
        <motion.div style={move} className={className} >
            {children}
        </motion.div>
    )
}
