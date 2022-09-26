import React from 'react';
// eslint-disable-next-line no-unused-vars
// import { get } from '../../services/api.service';
// import Header from '../../components/Header';
// import classNames from 'classnames';
// import Image from 'next/image';
import BlogView from '../../modules/blogs';
import Head from 'next/head';

export default function Index() {
  return (
    < >
      <Head>
        <title>BLOG | SOUFIYAN BENALLAL</title>
        <link rel="icon" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />

      </Head>
      <BlogView />
      {/* <HeroContent> */}
  
      {/* </HeroContent> */}
    </>
  );
}

// // eslint-disable-next-line react/prop-types
// function HeroContent({ children }: {children: ReactNode}) {
//   return (
//     <div className="bg-gray-100 dark:bg-gray-900 min-h-screen flex flex-col justify-center items-center">
//       <div className="relative overflow-hidden w-full">
//         <Header />

//         <div className="relative pt-24">
//           <div className="absolute inset-0 flex flex-col" aria-hidden="true">
//             <div className="flex-1" />
//             <div className="flex-1 w-full dark:bg-gray-1000 bg-gray-200" />
//           </div>
//           <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
//             <div className="absolute top-1/2 left-1/2 w-full text-center transform -translate-x-1/2 -translate-y-1/2 z-10">
//               <h2 className="text-white text-5xl font-extrabold mb-12">
//                 Frontend development roadmap.
//               </h2>
//               <h3 className="text-gray-100 text-xl font-medium max-w-xl mx-auto">
//                 Frontend is a skill that is not only about coding, but also
//                 about the way you approach the problem.
//               </h3>
//             </div>
//             <Image
//               className="relative rounded-lg shadow-lg"
//               src="/blogs-bg.png"
//               layout='fill'
//               alt="App screenshot"
//             />
//           </div>
//         </div>
//       </div>
//       <div className="dark:bg-gray-1000 bg-gray-200">
//         <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
//           <h2 className="text-center text-gray-500 text-sm font-semibold uppercase tracking-wide">
//             Trusted by over 26,000 forward-thinking companies
//           </h2>
//           <div className="mt-8 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
//             <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
//               <img
//                 className="h-12"
//                 src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg"
//                 alt="Tuple"
//               />
//             </div>
//             <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
//               <img
//                 className="h-12"
//                 src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg"
//                 alt="Mirage"
//               />
//             </div>
//             <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
//               <img
//                 className="h-12"
//                 src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg"
//                 alt="StaticKit"
//               />
//             </div>
//             <div className="col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
//               <img
//                 className="h-12"
//                 src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg"
//                 alt="Transistor"
//               />
//             </div>
//             <div className="col-span-2 flex justify-center md:col-span-3 lg:col-span-1">
//               <img
//                 className="h-12"
//                 src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg"
//                 alt="Workcation"
//               />
//             </div>
//           </div>
//         </div>
//         <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
//           {children}
//         </div>
//       </div>
//     </div>
//   );
// }
