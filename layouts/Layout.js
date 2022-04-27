import React, { useEffect } from 'react';
import Footer from '../components/Footer';
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
    layoutAnimate();
  }, []);

  return (
    <>
      <main className="wrapper rounded-b-xl">{children}</main>
      <Footer />
    </>
  );
}
