import React, { ReactNode, useEffect } from 'react';
import { motion } from 'framer-motion';
import Footer from '../components/Footer';
import { FADE_ANIM } from '../motions/home';
import Header from '../components/Header';
function layoutAnimate() {
  const body = document.querySelector('body');
  document.addEventListener('scroll', () => {
    const scrollTop = document.documentElement.scrollTop;
    const wrapper = document.querySelector('.wrapper') as HTMLElement | null;
    const wrapperHeight = wrapper?.offsetHeight || 0;
    if (scrollTop + window.innerHeight > wrapperHeight) {
      body?.classList.add('tight');
      console.log('tight');
    } else {
      body?.classList.remove('tight');
    }
  });
}
export default function Layout({ children }:{children: ReactNode }) {
  useEffect(() => {
    const body = document.querySelector('body');

    body?.classList.add('dark:bg-gray-100');
    body?.classList.add('bg-gray-900');
    layoutAnimate();
  }, []);

  return (
    <>
      <main className="wrapper rounded-b-xl overflow-hidden">
        <Header />
{/* 
        <motion.div {...FADE_ANIM} >
          <div className="bg-lines opacity-30">
            <div className="container-lg">

            <div><span></span></div>
            <div><span></span></div>
            <div><span></span></div>
            <div><span></span></div>
            <div><span></span></div>
            </div>
          </div>
        </motion.div> */}
        
        {children}
        </main>
      <Footer />
    </>
  );
}
