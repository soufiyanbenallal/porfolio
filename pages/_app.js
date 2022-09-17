import React from 'react';
import Layout from '../layouts/Layout';
/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
// import 'tailwindcss/tailwind.css'
import '../styles/globals.css';

// import {
//   AnimatePresence,
//   domAnimation, LazyMotion,
//   m
// } from "framer-motion"
// const fadeBack = {
//   name: "Fade Back",
//   variants: {
//     initial: {
//       opacity: 0,
//       scale: 0.8
//     },
//     animate: {
//       opacity: 1,
//       scale: 1
//     },
//     exit: {
//       opacity: 0,
//       scale: 0.4
//     }
//   },
//   transition: {
//     duration: 0.7
//   }
// };
function MyApp({ Component, pageProps }) {
  // const startIndex = 0;
  // const [animation, setAnimation] = useState(fadeBack);
  // const [exitBefore, setExitBefore] = useState(false);

  return <Layout>
        <Component {...pageProps} />
      </Layout>
//   return  <LazyMotion features={domAnimation}>
//   <AnimatePresence >
//     <m.div
//       key={router.route.name}
//       className="page-wrap"
//       initial="initial"
//       animate="animate"
//       exit="exit"
//       variants={fadeBack.variants}
//       transition={fadeBack.transition}
//     >
//       <Component {...pageProps} />
//     </m.div>
//   </AnimatePresence>
// </LazyMotion>;
}

export default MyApp;
