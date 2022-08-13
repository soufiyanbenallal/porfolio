import React from 'react';
export default function GetInTouch() {
  return (
      <div className="max-w-7xl mx-auto py-6 sm:py-12">
        <div className="text-center">
          <h2 className="text-base font-semibold text-red-600 tracking-wide uppercase"></h2>
          <p className="mt-1 text-4xl font-extrabold dark:text-gray-900 text-gray-100 sm:text-5xl sm:tracking-tight lg:text-4xl mb-6">
            Get In Touch
          </p>
          <p className="max-w-xl mt-5 mx-auto text-sm text-gray-500">
            If you fancy a chat feel free to drop me a line, my
            inbox is always open. Whether you have a question or just want to
            say hi.
          </p>
          <a
            href="mailto:benallalsoufiane1@gmail.com?subject=🤝%20Project%20info.%20Let's%20talk"
            className="w-full text-center mt-7 block px-6 py-4 border border-transparent text-base leading-4 font-medium rounded-md dark:text-red-700 text-red-200 bg-red-900 dark:bg-red-100 hover:dark:bg-red-200 dark:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >Say hello</a>
        </div>
      </div>
  );
}
