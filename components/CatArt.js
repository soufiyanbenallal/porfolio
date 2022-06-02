/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
// import Lottie, { useLottie } from "lottie-react";
// import UIAnimation from "../lotties/bg-flow.json";
// import LottieControl from './LottieControll';
// { className = "",eyeClassName="" }
export default function CatArt() {
  // const options = {
  //     animationData: UIAnimation,
  //     loop: true,
  //     autoplay: true,
  //   };

  //   const { View } = useLottie(options);

  useEffect(() => {
    // const eye = document.querySelector('.st1');
    // const eye2 = document.querySelector('.st2');
    // eye && window.addEventListener('mousemove', (event) => {
    //     let x = -(window.innerWidth / 2 - event.pageX) / 10;
    //     let y = -(window.innerHeight / 2 - event.pageY) / 15;
    //     x > 25 && (x = 25);
    //     x < -25 && (x = -25);
    //     y > 15 && (y = 15);
    //     y < -15 && (y = -15);
    //     eye.style.transform = `translateY(${y}px) translateX(${x}px)`;
    //     eye2.style.transform = `translateY(${y}px) translateX(${x}px)`;
    // });
  }, []);

  return (
    //  <LottieControl />
    <div className="relative opacity-90">
      <div className="w-2/3 h-screen bg-gradient-to-r from-black via-black to-transparent absolute left-0 top-0 z-10"></div>
      <img src="/cover.png" className="w-full" alt="" />
    </div>
  );
}
