import React from 'react';
export default function GetInTouch() {
  return (
    <div className="">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-32 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-indigo-600 tracking-wide uppercase"></h2>
          <p className="mt-1 text-4xl font-extrabold text-gray-900 dark:text-gray-100 sm:text-5xl sm:tracking-tight lg:text-6xl">
            Get In Touch
          </p>
          <p className="max-w-xl mt-5 mx-auto text-xl text-gray-500">
            Although I’m not currently looking for any new opportunities, my
            inbox is always open. Whether you have a question or just want to
            say hi, I’ll try my best to get back to you!
          </p>
          <button
            type="button"
            className="mt-6 inline-flex items-center px-6 py-2 border border-transparent text-base leading-4 font-medium rounded-md text-indigo-700 dark:text-indigo-200 dark:bg-indigo-900 bg-indigo-100 hover:bg-indigo-200 dark:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Say hello
          </button>
        </div>
      </div>
    </div>
  );
}
