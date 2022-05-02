import React from 'react'

export default function DotsSvg() {
  return (
    <div className='opacity-5'>
    <h1 className="absolute text-vertical whitespace-nowrap text-gray-700 dark:text-gray-700 text-[10rem] leading-none font-extrabold left-0 top-5  grid">
        <span>SHOW ME YOUR MAGIC</span>
        <span>BEYONDER</span>
    </h1>
    <svg
      className="absolute top-0 left-0 "
      width={404}
      height={404}
      fill="none"
      viewBox="0 0 404 392"
    >
      <defs>
        <pattern
          id="02f20b47-fd69-4224-a62a-4c9de5c763f7"
          x={0}
          y={0}
          width={20}
          height={20}
          patternUnits="userSpaceOnUse"
        >
          <rect
            x={0}
            y={0}
            width={2}
            height={2}
            className="dark:text-gray-200"
            fill="currentColor"
          />
        </pattern>
      </defs>
      <rect
        width={404}
        height={404}
        fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)"
      />
    </svg>
    </div>
  )
}
