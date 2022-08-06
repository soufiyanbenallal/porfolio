import React from 'react';
// import CatArt from '../../../components/CatArt';

export default function HeroSection() {
  return (
    <section className="container-fluid px-4 w-full h-screen flex flex-col justify-center items-center">
      {/* <div className="absolute right-0 top-0 z-0 w-screen h-screen overflow-hidden">
         <CatArt
          className="text-gray-600 dark:text-gray-800 w-full opacity-50"
          eyeClassName="text-gray-600 dark:text-gray-600 fill-current"
        /> 
      </div> */}
      <div className="relative z-10 py-6 text-center md:text-left w-full">
        <p className='w-full text-center font-medium tracking-widest dark:text-gray-400 text-xl mb-8 '>Hello, I&apos;m</p>
        <div className="w-full relative">
        <svg viewBox="0 0 960 200" 
        className="text-animation absolute z-0 w-full left-9 top-1/2 transform -translate-y-1/2 md:text-[12rem]   ">
          <symbol id="s-text">
            <text textAnchor="middle" x="50%" y="80%">SOUFIYAN</text>
          </symbol>

          <g className = "g-ants">
            <use xlinkHref="#s-text" className="text-copy"></use>
            <use xlinkHref="#s-text" className="text-copy"></use>
            <use xlinkHref="#s-text" className="text-copy"></use>
            <use xlinkHref="#s-text" className="text-copy"></use>
          </g>
        </svg>
        {/* <h1 className="absolute z-0 w-full left-9 top-1/2 transform -translate-y-1/2 text-stroke opacity-30 dark:text-gray-700 text-6xl md:text-[12rem] font-extrabold tracking-[5rem] space-y-4 mb-12 text-center" >
          {' '} SOUFIYAN
        </h1> */}
        <h1 className="dark:text-white relative z-1 text-6xl md:text-[8rem] font-extrabold tracking-widest space-y-4 mb-12 text-center" >
          SOUFIYAN
        </h1>
        </div>
        
      </div>
      <div className="container mt-12">
      <small>Defining The Future of Apps</small>
        <p className="text-2xl w-full dark:text-gray-500  text-shadow">
          I&apos;m Frontend developer, I produce elegant,
          performant and accessible digital experciences UI/ UX, please
          take a look around
        </p>
      </div>
    </section>
  );
}
