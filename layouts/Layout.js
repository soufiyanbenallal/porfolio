import React, { useEffect } from 'react';
import { motion } from "framer-motion";
import Footer from '../components/Footer';
import { FADE_ANIM } from '../motions/home';
function layoutAnimate() {
  const body = document.querySelector('body');
  document.addEventListener('scroll', () => {
    const scrollTop = document.documentElement.scrollTop;
    const wrapperHeight = document.querySelector('.wrapper').offsetHeight;
    if (scrollTop + window.innerHeight > wrapperHeight) {
      body.classList.add('tight');
      console.log('tight');
    } else {
      body.classList.remove('tight');
    }
  });
}
export default function Layout({ children }) {
  useEffect(() => {
    const body = document.querySelector('body');

    body.classList.add('dark:bg-gray-100');
    body.classList.add('bg-gray-900');
    layoutAnimate();
  }, []);

  return (
    <>
      <main className="wrapper rounded-b-xl overflow-hidden">
        <motion.div {...FADE_ANIM}>
        <div className="bg-lines">
          <div><span></span></div>
          <div><span></span></div>
          <div><span></span></div>
          <div><span></span></div>
          <div><span></span></div>
        </div>
        </motion.div>
        
        {children}
        </main>
      <Footer />
    </>
  );
}
