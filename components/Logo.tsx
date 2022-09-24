import React, { ReactElement } from 'react';
// className={className}
export default function Logo({ className }:{className: string}): ReactElement {
  return (<svg className={className || ''} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160.86 196.67">
				<path d="M137.18,147.08,63.64,73.54,137.18,0l20,20c14.77,14.77-20,34.14-20,53.51s34.8,38.73,20,53.51Z" fill='currentColor'/>
				<path fill='currentColor' d="M23.68,62.32l60.81,60.81L23.68,183.94,10,170.28c-1-1-1.47-1.47-.49-4,1.41-3.63,5.09-8.38,8.65-13,6.8-8.79,14.5-18.74,14.5-30.16S25,101.76,18.18,93c-3.56-4.6-7.24-9.35-8.65-13-1-2.53-.49-3,.49-4L23.68,62.32m0-12.73-20,20c-14.77,14.78,20,34.14,20,53.51s-34.8,38.74-20,53.51l20,20,73.54-73.54L23.68,49.59Z" />
			</svg>
		);
}
