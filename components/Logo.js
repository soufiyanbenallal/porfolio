import React from 'react';
// className={className}
export default function Logo({ className }) {
  return (
<svg version="1.1" className={className || ''} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"  viewBox="0 0 196.9 337" xmlSpace="preserve">
<g>
	<linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="33.7364" y1="-35.6208" x2="229.7364" y2="307.3792">
		<stop  offset="0" style={{stopColor: '#D8092C'}}/>
		<stop  offset="1" style={{stopColor: '#CE5706'}}/>
	</linearGradient>
	<path className="st0" fill="url(#SVGID_1_)" d="M196.9,127v145l-69.4-40v-35.1H72.89c-4.11,0-8.15-1.08-11.7-3.13L5.2,161.5c-3.22-1.85-5.2-5.29-5.2-9V0
		h196.9l-62.31,62.31c-3.42,3.42-8.05,5.34-12.89,5.34H67.65V127H196.9z"/>
	<linearGradient id="SVGID_2_"  gradientUnits="userSpaceOnUse" x1="-47.8177" y1="10.9815" x2="148.1823" y2="353.9815">
		<stop  offset="0" style={{stopColor: '#D8092C'}}/>
		<stop  offset="1" style={{stopColor: '#CE5706'}}/>
	</linearGradient>
	<polyline className="st1" fill="url(#SVGID_2_)" points="0,216.9 127.5,294.67 196.9,337 196.9,317 127.5,274.67 0,196.9 	"/>
</g>
</svg>
  );
}
