import React from 'react'

export default function DetailsSection() {
    return (
        <section className="w-full my-10">
          <div className="max-w-7xl mx-auto px-6 flex items-start justify-center">
            {/* Card is full width. Use in 12 col grid for best view. */}
            {/* Card code block start */}
            <div className="flex flex-col md:flex-row mx-auto bg-white dark:bg-gray-900 dark:bg-opacity-50 shadow rounded-xl md:divide-x divide-gray-500 divide-opacity-50">
              <div className="w-full flex-1 px-12 flex flex-col items-center py-10">
                <div className="w-24 h-24 mb-3 p-2 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                  <img
                    className="w-full h-full overflow-hidden object-cover rounded-full"
                    src="/profile.jpg"
                    alt="avatar"
                  />
                </div>
                <h2 className="text-gray-800 dark:text-gray-100 text-xl tracking-normal font-medium mb-1">
                  Soufiyan benallal
                </h2>
                <p className="flex text-gray-600 dark:text-gray-100 text-sm tracking-normal font-normal mb-3 text-center">
                  <span className="cursor-pointer mr-1 text-gray-600 dark:text-gray-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-map-pin"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round">
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <circle cx={12} cy={11} r={3} />
                      <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 0 1 -2.827 0l-4.244-4.243a8 8 0 1 1 11.314 0z" />
                    </svg>
                  </span>
                  Meknes, Morocco
                </p>
                <p className="text-gray-600 dark:text-gray-100 text-sm tracking-normal font-normal mb-8 text-center w-10/12">
                  The more I deal with the work as something that is my own, as something that is
                  personal, the more successful it is.
                </p>
                <div className="flex items-start">
                  <div >
                    <h2 className="text-gray-600 dark:text-gray-100 text-2xl leading-6 mb-2 text-center">
                      82
                    </h2>
                    <p className="text-gray-800 dark:text-gray-100 text-sm leading-5">Reviews</p>
                  </div>
                  <div className="mx-6 lg:mx-3 xl:mx-6 px-8 lg:px-4 xl:px-8 border-l border-r">
                    <h2 className="text-gray-600 dark:text-gray-100 text-2xl leading-6 mb-2 text-center">
                      24
                    </h2>
                    <p className="text-gray-800 dark:text-gray-100 text-sm leading-5">Projects</p>
                  </div>
                  <div >
                    <h2 className="text-gray-600 dark:text-gray-100 text-2xl leading-6 mb-2 text-center">
                      20
                    </h2>
                    <p className="text-gray-800 dark:text-gray-100 text-sm leading-5">Approved</p>
                  </div>
                </div>
              </div>
              <div className="w-full flex-1 px-12 flex flex-col items-center py-10">
                <div className="mb-3 w-24 h-24 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center cursor-pointer text-indigo-700">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-stack"
                    width={48}
                    height={48}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <polyline points="12 4 4 8 12 12 20 8 12 4" />
                    <polyline points="4 12 12 16 20 12" />
                    <polyline points="4 16 12 20 20 16" />
                  </svg>
                </div>
                <h2 className="text-gray-800 dark:text-gray-100 text-xl tracking-normal text-center font-medium mb-1 capitalize">
                  Senior front end 
                </h2>
                <p className="text-gray-600 dark:text-gray-100 text-sm tracking-normal font-normal mb-3 text-center">
                  Freelance
                </p>
                <p className="text-gray-600 dark:text-gray-100 text-sm tracking-normal font-normal mb-8 text-center w-10/12">
                  John is a true asset to us, providing advanced designing skills from years of
                  experience as UX designer.
                </p>
                <div className="flex items-start">
                  <div className="bg-gray-200 text-gray-600 dark:text-gray-100 dark:bg-gray-700 rounded text-xs leading-3 py-2 px-3">
                    react
                  </div>
                  <div className="bg-gray-200 text-gray-600 dark:text-gray-100 dark:bg-gray-700 rounded text-xs leading-3 py-2 px-3">
                    sass
                  </div>
                  <div className="bg-gray-200 text-gray-600 dark:text-gray-100 dark:bg-gray-700 rounded mx-2 text-xs leading-3 py-2 px-3">
                    UI
                  </div>
                  <div className="bg-gray-200 text-gray-600 dark:text-gray-100 dark:bg-gray-700 rounded text-xs leading-3 py-2 px-3">
                    UX
                  </div>
                </div>
              </div>
              <div className="w-full flex-1 flex-col flex justify-center items-center px-12 py-8">
                <h2 className="text-center text-2xl text-gray-800 dark:text-gray-100 font-medium tracking-normal">
                  $35
                </h2>
                <h2 className="text-center text-sm text-gray-600 dark:text-gray-100 font-normal mt-2 mb-4 tracking-normal">
                  Hourly Rate
                </h2>
                <h2 className="text-center text-2xl text-gray-800 dark:text-gray-100 font-medium tracking-normal">
                  2000
                </h2>
                <h2 className="text-center text-sm text-gray-600 dark:text-gray-100 font-normal mt-2 mb-4 tracking-normal">
                  Hours Worked
                </h2>
                <h2 className="text-center text-2xl text-gray-800 dark:text-gray-100 font-medium tracking-normal">
                  95%
                </h2>
                <h2 className="text-center text-sm text-gray-600 dark:text-gray-100 font-normal mt-2 mb-4 tracking-normal">
                  Success Rate
                </h2>
       
              </div>
            </div>
            {/* Card code block end */}
          </div>
        </section>
    )
}
