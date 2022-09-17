import React from 'react';
import Logo from './Logo';
export default function GetInTouch() {
  return (
      <div className="py-6 sm:py-12">
        <div className="text-center">
          <h2 className="text-center font-semibold text-red-base tracking-wide uppercase">
          <Logo className="relative -z-10 h-60 -mb-52 dark:text-white text-gray-900 mx-auto opacity-25" />
          </h2>
          <p className="text-4xl font-extrabold dark:text-gray-900 text-gray-100 sm:text-5xl sm:tracking-tight lg:text-4xl mb-6">
            Get In Touch
          </p>
          <p className="text-gray-500 dark:text-gray-800 text-xs mb-8 text-center w-full">
            If you fancy a chat feel free to drop me a line, my
            inbox is always open. Whether you have a question or just want to
            say hi.
          </p>
          <a
            href="mailto:benallalsoufiane1@gmail.com?subject=🤝%20Project%20info.%20Let's%20talk"
            className="w-full text-center mt-7 block px-6 py-4 border border-transparent text-base leading-4 font-medium rounded-md dark:text-red-base text-red-200 bg-red-base dark:bg-red-100 hover:dark:bg-red-200 dark:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-base"
          >Say hello</a>
        </div>
      </div>
  );
}
