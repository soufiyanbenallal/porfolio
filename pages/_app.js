/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
// import 'tailwindcss/tailwind.css'
import '../styles/globals.css';
import '../styles/style.css';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
// /* eslint-disable react/prop-types */
// // import 'tailwindcss/tailwind.css'
// import React,{createContext} from "react";
// import App from "next/app";
// import '../styles/globals.css';
// import '../styles/style.css';
// import { Head } from "next/document";
// export const GlobalContext = createContext({});
// function MyApp({ Component, pageProps }) {
//   // const { global = {} } = pageProps;

//   return (
//     <>
//       <Head>
//         {/* <link
//           rel="shortcut icon"
//           href={getStrapiMedia(global.attributes.favicon)}
//         /> */}
//       </Head>
//       {/* <GlobalContext.Provider value={global}>
//       </GlobalContext.Provider> */}
//         <Component {...pageProps} />
//     </>
//   );
// }
// MyApp.getInitialProps = async (ctx) => {
//   // Calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(ctx);
//   // Fetch global site settings from Strapi
//   // const globalRes = await fetch("/global", {
//   //   populate: {
//   //     favicon: "*",
//   //     defaultSeo: {
//   //       populate: "*",
//   //     },
//   //   },
//   // });
//   // Pass the data to our page via props
//   // return { ...appProps, pageProps: { global: globalRes.data } };
//   return { ...appProps };
// };
// export default MyApp;
