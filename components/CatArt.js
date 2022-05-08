/* eslint-disable react/prop-types */
import React,{useEffect} from 'react'
// import Lottie, { useLottie } from "lottie-react";
// import UIAnimation from "../lotties/bg-flow.json";
import LottieControl from './LottieControll';
export default function CatArt({ className = "",eyeClassName="" }) {
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
    }, [])
    
  return (
   <LottieControl /> 

  )
}
