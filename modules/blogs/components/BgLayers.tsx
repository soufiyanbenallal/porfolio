import React from 'react'
import { motion, useAnimation, useScroll, useTransform, motionValue } from 'framer-motion'
import { useInView } from 'react-intersection-observer';
import useWindowSize from '../../../shared/hooks/useWindowSize';

export default function BgLayers() {
    const {height} = useWindowSize()
    const h = height * 2
    const { scrollY } = useScroll();
    const x = useTransform(scrollY, [0, h], [50, -50]);
    const y = useTransform(scrollY, [0, h], [120, -120]);
    const move = {y, x}
    const x2 = useTransform(scrollY, [0, h], [-50, 50]);
    const y2 = useTransform(scrollY, [0, h], [-120, 120]);
    const inverseMove = {y: y2, x: x2}
  return (
    <div className='w-screen overflow-hidden relative h-[32rem] z-10 mb-64'>
        <motion.img initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} style={inverseMove} className='absolute -top-[16rem] left-0' src="bg/layer-1.png" alt="bg layers status animate" />
        <motion.img initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} style={move} className='absolute -top-[16rem] left-0' src="bg/layer-2.png" alt="bg layers status animate" />
        <motion.img initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} style={inverseMove} className='absolute -top-[16rem] left-0' src="bg/layer-3.png" alt="bg layers status animate" />
        <motion.img initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} style={move} className='absolute -top-[16rem] left-0' src="bg/layer-4.png" alt="bg layers status animate" />
        <motion.img initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} style={inverseMove} className='absolute -top-[16rem] left-0' src="bg/layer-6.png" alt="bg layers status animate" />
        <motion.img initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} style={move} className='absolute -top-[16rem] left-0' src="bg/layer-7.png" alt="bg layers status animate" />
        <motion.img initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} style={inverseMove} className='absolute -top-[16rem] left-0' src="bg/layer-8.png" alt="bg layers status animate" />
    </div>
  )
}
