/* eslint-disable react/jsx-key */
import classNames from 'classnames'
import React from 'react'
import { motion } from "framer-motion";
{/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1070.58 290.27">
    <path d=
    "M0,109.09a44.76,44.76,0,0,0,7.2-8.9A62.88,62.88,0,0,0,13.07,85c4.73,3.6,11.74,16.29,16.47,25.38,4.36,8.52,8.72,16.09,17.62,17.42C25,127.08,7.39,118.75,0,109.09Zm72.35-6.63C72.35,69.13,4,68.94,4,31.44,4,8,28.22.38,47.16.38c-6.63,1.14-21,6.06-21,22C26.14,51,97,52.27,97,95.08c0,24-26.14,31.62-42.8,32.76C60.61,126.14,72.35,120.26,72.35,102.46Zm3.79-62.88c-11.94-7.19-3-36.17-22-39.2C70.64,1.52,83.33,8.71,93,19.13a44.44,44.44,0,0,0-6.63,9.47,35.85,35.85,0,0,0-3.79,12.88C80.68,41.1,78.41,40.91,76.14,39.58Z",
    />
    <path d=
    "M162.68,127.84c-36.93,0-61.74-28.22-61.93-63.64,0-32,19.13-57.76,50.95-62.49,0,0-26.89,11.17-26.89,52.46a107,107,0,0,0,1.13,15c6.82,50.76,45.83,58.14,45.83,58.14a64.91,64.91,0,0,1-8.71.57ZM203,71.4a97.52,97.52,0,0,0-.75-12.5C195.26,3.6,157.76.57,157.76.57A67,67,0,0,1,166.47,0c37.69,0,60.61,28.79,60.8,64.39,0,31.63-19.32,57.2-50.38,62.12C176.89,126.51,203,111.93,203,71.4Z",
    />
    <path d=
    "M236.35,76.89V31.44c0-20.83-2.08-24.24-5.3-31.25A148.65,148.65,0,0,0,247.34,1,154.75,154.75,0,0,0,264.19.19c-3.41,7-5.3,9.85-5.3,31.25V75c0,31.63,22.73,44.13,42.42,44.13,7.2,0,14-1.52,19.32-4.55-7.39,8.34-20.64,13.26-34.66,13.26C262.11,127.84,236.35,113.26,236.35,76.89Zm99,11.56a154.69,154.69,0,0,0-7-35.61C321.58,32.39,309.27,23.48,309.27.19c5.87.57,10.41.76,15.91,1a145.83,145.83,0,0,0,15.9-.95c-4.92,7.39-5.3,21.78-5.3,28V88.45Z",
    />
    <path d=
    "M361.16,127.08c-5.88,0-11.37.38-16.29.76,3.41-7,5.11-11.17,5.11-32.58V32.76c0-21.4-1.7-25.56-5.11-32.57C349.79.57,355.28,1,361,1,367,1,372.71.57,377.82.19c-3.41,7-5.11,11.17-5.11,32.57v62.5c0,21.41,1.7,25.57,5.11,32.58C372.71,127.46,367,127.08,361.16,127.08Zm17-66.47h-.38s18-16.48,36-16.48a108.76,108.76,0,0,0-1.14,15.53c0,5.87.57,10,1.52,18.37C397.71,61.36,381.23,60.61,378.2,60.61ZM386.72.19h54.36c-.57,4-.76,8.52-.95,13.26a103.83,103.83,0,0,0,.95,14C419.87,27.46,401.69,3.41,386.72.19Z",
    />
    <path d=
    "M461.15,127.08c-5.68,0-11.17.38-16.29.76,3.41-7,5.31-11.17,5.31-32.58V32.76c0-21.4-1.9-25.56-5.31-32.57C450,.57,455.28,1,461.15,1,467.21,1,472.7.57,478,.19c-3.41,7-5.31,11.17-5.31,32.57v62.5c0,21.41,1.9,25.57,5.31,32.58C472.7,127.46,467.21,127.08,461.15,127.08Z",
    />
    <path d=
    "M537.28,127.27c-5.87,0-11.17.19-16.28.57,3.41-6.82,5.3-11.17,5.3-32.58V69.7l-22.73-39C497.32,19.89,489.37,5.11,481.79.19h35.42l-.38,2.46c0,6.63,5.3,14.77,8.9,21.21l23.11,39.59V95.26c0,21.6,1.7,25.57,5.3,32.58C548.84,127.46,543.15,127.27,537.28,127.27Zm22.16-98.86c0-11-3.41-18-3.41-25a14.28,14.28,0,0,1,.19-2.84c5.31.38,11.18.76,17.43.76,6.82,0,13.44-.38,19.5-.76-6.62,1.89-40.9,56.82-40.9,56.82C557.93,45.08,559.44,35.79,559.44,28.41Z",
    />
    <path d=
    "M673.83,126.32a99.38,99.38,0,0,0-18,1.52,24.44,24.44,0,0,0,1.7-9.66c0-8.33-2.46-14.58-7.76-31.25a8.3,8.3,0,0,0-8-5.87H607c0,20.45,4.92,26.14,4.92,46.78a113.62,113.62,0,0,0-17.23-1.33A107.79,107.79,0,0,0,578,127.84c5.11-5.11,11-20.64,15.15-31.44l18.37-48.86c-3.41,14-4.54,24.62-4.54,33.33h34.47A4.48,4.48,0,0,0,646,76.33l-.19-1.52L631.22,30.87c-3.41-10.42-6.44-22.16-15-30.49h16.66a16.54,16.54,0,0,1,15.72,11.36L675,91.48c4.54,14.39,10.6,32.19,17,36.36A101.61,101.61,0,0,0,673.83,126.32Z",
    />
    <path d=
    "M793.52,127.46a29.57,29.57,0,0,1-25.19-14L714.55,27.08C708.86,17.61,701.67,4.17,695.8,0h11.55a30.81,30.81,0,0,1,26.13,14.58l52.28,84.47c6.06,9.85,14,23.68,19.69,28.41Zm-81.25-.38c-5.68,0-11.17.19-16.47.38,6.63-5.87,7.38-28.79,7.38-31.63V38.07h.19c4.55,49.05,26.33,71,26.33,89.39C724.2,127.27,718.33,127.08,712.27,127.08Zm76.14-73.29C782.92,33.14,769.28,14.58,769.28,0A98.58,98.58,0,0,0,786,1.33,145.3,145.3,0,0,0,805.45,0c-8.9,4.74-9.65,28.79-9.65,31.63V89.39A334.27,334.27,0,0,0,788.41,53.79Z",
    />
    <path d=
    "M247.33,289.51c-5.69,0-11.18.19-16.29.57,3.41-6.82,5.3-11,5.3-32.39v-62.5c0-21.4-1.89-25.76-5.3-32.57,6.82.56,11.55.56,19.51.56,4.92,0,9.28-.19,13.63-.56-3.41,6.81-5.3,11.17-5.3,32.57v62.5c0,21.4,1.89,25.57,5.3,32.39C258.88,289.7,253.39,289.51,247.33,289.51Zm24.62.57s41.85-3.79,41.85-33.34c0-28.41-37.5-30.3-47.34-30.3h-2.28c7-2.46,40.91-11.36,40.91-35,0-26.13-31.44-28.78-31.44-28.78a93.78,93.78,0,0,1,10.42-.38c21.59,0,43.56,6.25,43.56,27.08,0,14.58-12.12,25.76-39.21,28.41h2.66c32.57,0,45.26,19.69,45.26,36,0,16.86-9.28,36.37-60,36.37Z",
    />
    <path d=
    "M356.41,289.51c-5.68,0-11.17.38-16.29.76,3.6-7,5.31-11.18,5.31-32.58v-62.5c0-21.4-1.71-25.57-5.31-32.57,5.12.37,10.61.75,16.29.75,6.06,0,11.74-.38,16.86-.75-3.41,7-5.31,11.17-5.31,32.57v62.5c0,21.4,1.9,25.57,5.31,32.58C368.15,289.89,362.47,289.51,356.41,289.51ZM373.65,223h-.38s17.8-16.48,36-16.48a108.86,108.86,0,0,0-1.14,15.53c0,5.88.57,10,1.52,18.38C393.15,223.79,376.68,223,373.65,223Zm8.14,67.24c14-3.41,33.9-27.28,57.38-27.28a107.23,107.23,0,0,0-.75,11.75,133.12,133.12,0,0,0,.75,15.53Zm.38-127.65h54.35a96,96,0,0,0-.94,13.25,105.63,105.63,0,0,0,.94,14C415.31,189.89,397.13,165.83,382.17,162.62Z",
    />
    <path d=
    "M540.69,289.89a29.56,29.56,0,0,1-25.19-14l-53.79-86.36C456,180,448.83,166.59,443,162.43h11.55A30.82,30.82,0,0,1,480.65,177l52.27,84.47c6.06,9.85,14,23.67,19.7,28.41Zm-81.25-.38c-5.69,0-11.18.19-16.48.38,6.63-5.87,7.38-28.79,7.38-31.63V200.49h.19c4.55,49.06,26.33,71,26.33,89.4C471.37,289.7,465.5,289.51,459.44,289.51Zm76.13-73.3c-5.49-20.64-19.13-39.2-19.13-53.78a99.76,99.76,0,0,0,16.67,1.32,147.14,147.14,0,0,0,19.51-1.32c-8.9,4.73-9.66,28.78-9.66,31.62v57.77A333.91,333.91,0,0,0,535.57,216.21Z",
    />
    <path d=
    "M652.23,288.75a99.38,99.38,0,0,0-18,1.52,24.49,24.49,0,0,0,1.71-9.66c0-8.34-2.47-14.59-7.77-31.25a8.3,8.3,0,0,0-7.95-5.87H585.38c0,20.45,4.92,26.13,4.92,46.78a113.51,113.51,0,0,0-17.23-1.33,107.79,107.79,0,0,0-16.67,1.33c5.11-5.12,11-20.65,15.15-31.44L589.92,210c-3.41,14-4.54,24.62-4.54,33.34h34.47a4.49,4.49,0,0,0,4.54-4.55l-.19-1.51L609.62,193.3c-3.41-10.42-6.44-22.16-15-30.5h16.66A16.55,16.55,0,0,1,627,174.17l26.33,79.73c4.54,14.4,10.61,32.2,17,36.37A101.61,101.61,0,0,0,652.23,288.75Z",
    />
    <path d=
    "M690.48,289.51c-5.87,0-11.17.19-16.28.57,3.41-6.82,5.3-11.18,5.3-32.58V195c0-21.4-1.89-25.57-5.3-32.57a146.64,146.64,0,0,0,16.28.75,162.24,162.24,0,0,0,16.86-.75c-3.6,7-5.3,11.17-5.3,32.57v62.5c0,21.4,1.7,25.76,5.3,32.58C702,289.7,696.36,289.51,690.48,289.51Zm25.38.57c13.83-3.41,29.17-27.28,48.68-27.28a104,104,0,0,0-.95,14,92.55,92.55,0,0,0,.95,13.26Z",
    />
    <path d=
    "M784.61,289.51c-5.87,0-11.17.19-16.29.57,3.41-6.82,5.3-11.18,5.3-32.58V195c0-21.4-1.89-25.57-5.3-32.57a146.94,146.94,0,0,0,16.29.75,162.49,162.49,0,0,0,16.86-.75c-3.6,7-5.31,11.17-5.31,32.57v62.5c0,21.4,1.71,25.76,5.31,32.58C796.16,289.7,790.48,289.51,784.61,289.51Zm25.38.57c13.82-3.41,29.16-27.28,48.67-27.28a104,104,0,0,0-.95,14,92.55,92.55,0,0,0,.95,13.26Z",
    />
    <path d=
    "M958.28,288.75a99.58,99.58,0,0,0-18,1.52,24.49,24.49,0,0,0,1.71-9.66c0-8.34-2.46-14.59-7.77-31.25a8.28,8.28,0,0,0-8-5.87H891.42c0,20.45,4.93,26.13,4.93,46.78a113.76,113.76,0,0,0-17.24-1.33,107.89,107.89,0,0,0-16.67,1.33c5.12-5.12,11-20.65,15.16-31.44L896,210c-3.41,14-4.55,24.62-4.55,33.34h34.47a4.5,4.5,0,0,0,4.55-4.55l-.19-1.51L915.66,193.3c-3.41-10.42-6.44-22.16-15-30.5h16.67a16.57,16.57,0,0,1,15.72,11.37l26.32,79.73c4.55,14.4,10.61,32.2,17.05,36.37A101.61,101.61,0,0,0,958.28,288.75Z",
    />
    <path d=
    "M996.53,289.51c-5.87,0-11.18.19-16.29.57,3.41-6.82,5.3-11.18,5.3-32.58V195c0-21.4-1.89-25.57-5.3-32.57a146.94,146.94,0,0,0,16.29.75,162.49,162.49,0,0,0,16.86-.75c-3.6,7-5.31,11.17-5.31,32.57v62.5c0,21.4,1.71,25.76,5.31,32.58C1008.08,289.7,1002.4,289.51,996.53,289.51Zm25.38.57c13.82-3.41,29.16-27.28,48.67-27.28a104,104,0,0,0-.95,14,92.55,92.55,0,0,0,.95,13.26Z",
    />
</svg> */}
const icon = {
    hidden: {
      opacity: 0,
      pathLength: 0,
      fill: "rgba(255, 255, 255, 0)"
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      delay:3,
      fill: "rgba(255, 255, 255, 1)"
    }
  };
export default function LogoText({className}) {
      // splitting text into letters
      const letters =[
        // "M0,109.09a44.76,44.76,0,0,0,7.2-8.9A62.88,62.88,0,0,0,13.07,85c4.73,3.6,11.74,16.29,16.47,25.38,4.36,8.52,8.72,16.09,17.62,17.42C25,127.08,7.39,118.75,0,109.09Zm72.35-6.63C72.35,69.13,4,68.94,4,31.44,4,8,28.22.38,47.16.38c-6.63,1.14-21,6.06-21,22C26.14,51,97,52.27,97,95.08c0,24-26.14,31.62-42.8,32.76C60.61,126.14,72.35,120.26,72.35,102.46Zm3.79-62.88c-11.94-7.19-3-36.17-22-39.2C70.64,1.52,83.33,8.71,93,19.13a44.44,44.44,0,0,0-6.63,9.47,35.85,35.85,0,0,0-3.79,12.88C80.68,41.1,78.41,40.91,76.14,39.58Z",
        // "M162.68,127.84c-36.93,0-61.74-28.22-61.93-63.64,0-32,19.13-57.76,50.95-62.49,0,0-26.89,11.17-26.89,52.46a107,107,0,0,0,1.13,15c6.82,50.76,45.83,58.14,45.83,58.14a64.91,64.91,0,0,1-8.71.57ZM203,71.4a97.52,97.52,0,0,0-.75-12.5C195.26,3.6,157.76.57,157.76.57A67,67,0,0,1,166.47,0c37.69,0,60.61,28.79,60.8,64.39,0,31.63-19.32,57.2-50.38,62.12C176.89,126.51,203,111.93,203,71.4Z",
        // "M236.35,76.89V31.44c0-20.83-2.08-24.24-5.3-31.25A148.65,148.65,0,0,0,247.34,1,154.75,154.75,0,0,0,264.19.19c-3.41,7-5.3,9.85-5.3,31.25V75c0,31.63,22.73,44.13,42.42,44.13,7.2,0,14-1.52,19.32-4.55-7.39,8.34-20.64,13.26-34.66,13.26C262.11,127.84,236.35,113.26,236.35,76.89Zm99,11.56a154.69,154.69,0,0,0-7-35.61C321.58,32.39,309.27,23.48,309.27.19c5.87.57,10.41.76,15.91,1a145.83,145.83,0,0,0,15.9-.95c-4.92,7.39-5.3,21.78-5.3,28V88.45Z",
        // "M361.16,127.08c-5.88,0-11.37.38-16.29.76,3.41-7,5.11-11.17,5.11-32.58V32.76c0-21.4-1.7-25.56-5.11-32.57C349.79.57,355.28,1,361,1,367,1,372.71.57,377.82.19c-3.41,7-5.11,11.17-5.11,32.57v62.5c0,21.41,1.7,25.57,5.11,32.58C372.71,127.46,367,127.08,361.16,127.08Zm17-66.47h-.38s18-16.48,36-16.48a108.76,108.76,0,0,0-1.14,15.53c0,5.87.57,10,1.52,18.37C397.71,61.36,381.23,60.61,378.2,60.61ZM386.72.19h54.36c-.57,4-.76,8.52-.95,13.26a103.83,103.83,0,0,0,.95,14C419.87,27.46,401.69,3.41,386.72.19Z",
        // "M461.15,127.08c-5.68,0-11.17.38-16.29.76,3.41-7,5.31-11.17,5.31-32.58V32.76c0-21.4-1.9-25.56-5.31-32.57C450,.57,455.28,1,461.15,1,467.21,1,472.7.57,478,.19c-3.41,7-5.31,11.17-5.31,32.57v62.5c0,21.41,1.9,25.57,5.31,32.58C472.7,127.46,467.21,127.08,461.15,127.08Z",
        // "M537.28,127.27c-5.87,0-11.17.19-16.28.57,3.41-6.82,5.3-11.17,5.3-32.58V69.7l-22.73-39C497.32,19.89,489.37,5.11,481.79.19h35.42l-.38,2.46c0,6.63,5.3,14.77,8.9,21.21l23.11,39.59V95.26c0,21.6,1.7,25.57,5.3,32.58C548.84,127.46,543.15,127.27,537.28,127.27Zm22.16-98.86c0-11-3.41-18-3.41-25a14.28,14.28,0,0,1,.19-2.84c5.31.38,11.18.76,17.43.76,6.82,0,13.44-.38,19.5-.76-6.62,1.89-40.9,56.82-40.9,56.82C557.93,45.08,559.44,35.79,559.44,28.41Z",
        // "M673.83,126.32a99.38,99.38,0,0,0-18,1.52,24.44,24.44,0,0,0,1.7-9.66c0-8.33-2.46-14.58-7.76-31.25a8.3,8.3,0,0,0-8-5.87H607c0,20.45,4.92,26.14,4.92,46.78a113.62,113.62,0,0,0-17.23-1.33A107.79,107.79,0,0,0,578,127.84c5.11-5.11,11-20.64,15.15-31.44l18.37-48.86c-3.41,14-4.54,24.62-4.54,33.33h34.47A4.48,4.48,0,0,0,646,76.33l-.19-1.52L631.22,30.87c-3.41-10.42-6.44-22.16-15-30.49h16.66a16.54,16.54,0,0,1,15.72,11.36L675,91.48c4.54,14.39,10.6,32.19,17,36.36A101.61,101.61,0,0,0,673.83,126.32Z",
        // "M793.52,127.46a29.57,29.57,0,0,1-25.19-14L714.55,27.08C708.86,17.61,701.67,4.17,695.8,0h11.55a30.81,30.81,0,0,1,26.13,14.58l52.28,84.47c6.06,9.85,14,23.68,19.69,28.41Zm-81.25-.38c-5.68,0-11.17.19-16.47.38,6.63-5.87,7.38-28.79,7.38-31.63V38.07h.19c4.55,49.05,26.33,71,26.33,89.39C724.2,127.27,718.33,127.08,712.27,127.08Zm76.14-73.29C782.92,33.14,769.28,14.58,769.28,0A98.58,98.58,0,0,0,786,1.33,145.3,145.3,0,0,0,805.45,0c-8.9,4.74-9.65,28.79-9.65,31.63V89.39A334.27,334.27,0,0,0,788.41,53.79Z",
        
        "M247.33,289.51c-5.69,0-11.18.19-16.29.57,3.41-6.82,5.3-11,5.3-32.39v-62.5c0-21.4-1.89-25.76-5.3-32.57,6.82.56,11.55.56,19.51.56,4.92,0,9.28-.19,13.63-.56-3.41,6.81-5.3,11.17-5.3,32.57v62.5c0,21.4,1.89,25.57,5.3,32.39C258.88,289.7,253.39,289.51,247.33,289.51Zm24.62.57s41.85-3.79,41.85-33.34c0-28.41-37.5-30.3-47.34-30.3h-2.28c7-2.46,40.91-11.36,40.91-35,0-26.13-31.44-28.78-31.44-28.78a93.78,93.78,0,0,1,10.42-.38c21.59,0,43.56,6.25,43.56,27.08,0,14.58-12.12,25.76-39.21,28.41h2.66c32.57,0,45.26,19.69,45.26,36,0,16.86-9.28,36.37-60,36.37Z",
        "M356.41,289.51c-5.68,0-11.17.38-16.29.76,3.6-7,5.31-11.18,5.31-32.58v-62.5c0-21.4-1.71-25.57-5.31-32.57,5.12.37,10.61.75,16.29.75,6.06,0,11.74-.38,16.86-.75-3.41,7-5.31,11.17-5.31,32.57v62.5c0,21.4,1.9,25.57,5.31,32.58C368.15,289.89,362.47,289.51,356.41,289.51ZM373.65,223h-.38s17.8-16.48,36-16.48a108.86,108.86,0,0,0-1.14,15.53c0,5.88.57,10,1.52,18.38C393.15,223.79,376.68,223,373.65,223Zm8.14,67.24c14-3.41,33.9-27.28,57.38-27.28a107.23,107.23,0,0,0-.75,11.75,133.12,133.12,0,0,0,.75,15.53Zm.38-127.65h54.35a96,96,0,0,0-.94,13.25,105.63,105.63,0,0,0,.94,14C415.31,189.89,397.13,165.83,382.17,162.62Z",
        "M540.69,289.89a29.56,29.56,0,0,1-25.19-14l-53.79-86.36C456,180,448.83,166.59,443,162.43h11.55A30.82,30.82,0,0,1,480.65,177l52.27,84.47c6.06,9.85,14,23.67,19.7,28.41Zm-81.25-.38c-5.69,0-11.18.19-16.48.38,6.63-5.87,7.38-28.79,7.38-31.63V200.49h.19c4.55,49.06,26.33,71,26.33,89.4C471.37,289.7,465.5,289.51,459.44,289.51Zm76.13-73.3c-5.49-20.64-19.13-39.2-19.13-53.78a99.76,99.76,0,0,0,16.67,1.32,147.14,147.14,0,0,0,19.51-1.32c-8.9,4.73-9.66,28.78-9.66,31.62v57.77A333.91,333.91,0,0,0,535.57,216.21Z",
        "M652.23,288.75a99.38,99.38,0,0,0-18,1.52,24.49,24.49,0,0,0,1.71-9.66c0-8.34-2.47-14.59-7.77-31.25a8.3,8.3,0,0,0-7.95-5.87H585.38c0,20.45,4.92,26.13,4.92,46.78a113.51,113.51,0,0,0-17.23-1.33,107.79,107.79,0,0,0-16.67,1.33c5.11-5.12,11-20.65,15.15-31.44L589.92,210c-3.41,14-4.54,24.62-4.54,33.34h34.47a4.49,4.49,0,0,0,4.54-4.55l-.19-1.51L609.62,193.3c-3.41-10.42-6.44-22.16-15-30.5h16.66A16.55,16.55,0,0,1,627,174.17l26.33,79.73c4.54,14.4,10.61,32.2,17,36.37A101.61,101.61,0,0,0,652.23,288.75Z",
        "M690.48,289.51c-5.87,0-11.17.19-16.28.57,3.41-6.82,5.3-11.18,5.3-32.58V195c0-21.4-1.89-25.57-5.3-32.57a146.64,146.64,0,0,0,16.28.75,162.24,162.24,0,0,0,16.86-.75c-3.6,7-5.3,11.17-5.3,32.57v62.5c0,21.4,1.7,25.76,5.3,32.58C702,289.7,696.36,289.51,690.48,289.51Zm25.38.57c13.83-3.41,29.17-27.28,48.68-27.28a104,104,0,0,0-.95,14,92.55,92.55,0,0,0,.95,13.26Z",
        "M784.61,289.51c-5.87,0-11.17.19-16.29.57,3.41-6.82,5.3-11.18,5.3-32.58V195c0-21.4-1.89-25.57-5.3-32.57a146.94,146.94,0,0,0,16.29.75,162.49,162.49,0,0,0,16.86-.75c-3.6,7-5.31,11.17-5.31,32.57v62.5c0,21.4,1.71,25.76,5.31,32.58C796.16,289.7,790.48,289.51,784.61,289.51Zm25.38.57c13.82-3.41,29.16-27.28,48.67-27.28a104,104,0,0,0-.95,14,92.55,92.55,0,0,0,.95,13.26Z",
        "M958.28,288.75a99.58,99.58,0,0,0-18,1.52,24.49,24.49,0,0,0,1.71-9.66c0-8.34-2.46-14.59-7.77-31.25a8.28,8.28,0,0,0-8-5.87H891.42c0,20.45,4.93,26.13,4.93,46.78a113.76,113.76,0,0,0-17.24-1.33,107.89,107.89,0,0,0-16.67,1.33c5.12-5.12,11-20.65,15.16-31.44L896,210c-3.41,14-4.55,24.62-4.55,33.34h34.47a4.5,4.5,0,0,0,4.55-4.55l-.19-1.51L915.66,193.3c-3.41-10.42-6.44-22.16-15-30.5h16.67a16.57,16.57,0,0,1,15.72,11.37l26.32,79.73c4.55,14.4,10.61,32.2,17.05,36.37A101.61,101.61,0,0,0,958.28,288.75Z",
        "M996.53,289.51c-5.87,0-11.18.19-16.29.57,3.41-6.82,5.3-11.18,5.3-32.58V195c0-21.4-1.89-25.57-5.3-32.57a146.94,146.94,0,0,0,16.29.75,162.49,162.49,0,0,0,16.86-.75c-3.6,7-5.31,11.17-5.31,32.57v62.5c0,21.4,1.71,25.76,5.31,32.58C1008.08,289.7,1002.4,289.51,996.53,289.51Zm25.38.57c13.82-3.41,29.16-27.28,48.67-27.28a104,104,0,0,0-.95,14,92.55,92.55,0,0,0,.95,13.26Z",    
        ];
      const letters2 =[
        "M0,109.09a44.76,44.76,0,0,0,7.2-8.9A62.88,62.88,0,0,0,13.07,85c4.73,3.6,11.74,16.29,16.47,25.38,4.36,8.52,8.72,16.09,17.62,17.42C25,127.08,7.39,118.75,0,109.09Zm72.35-6.63C72.35,69.13,4,68.94,4,31.44,4,8,28.22.38,47.16.38c-6.63,1.14-21,6.06-21,22C26.14,51,97,52.27,97,95.08c0,24-26.14,31.62-42.8,32.76C60.61,126.14,72.35,120.26,72.35,102.46Zm3.79-62.88c-11.94-7.19-3-36.17-22-39.2C70.64,1.52,83.33,8.71,93,19.13a44.44,44.44,0,0,0-6.63,9.47,35.85,35.85,0,0,0-3.79,12.88C80.68,41.1,78.41,40.91,76.14,39.58Z",
        "M162.68,127.84c-36.93,0-61.74-28.22-61.93-63.64,0-32,19.13-57.76,50.95-62.49,0,0-26.89,11.17-26.89,52.46a107,107,0,0,0,1.13,15c6.82,50.76,45.83,58.14,45.83,58.14a64.91,64.91,0,0,1-8.71.57ZM203,71.4a97.52,97.52,0,0,0-.75-12.5C195.26,3.6,157.76.57,157.76.57A67,67,0,0,1,166.47,0c37.69,0,60.61,28.79,60.8,64.39,0,31.63-19.32,57.2-50.38,62.12C176.89,126.51,203,111.93,203,71.4Z",
        "M236.35,76.89V31.44c0-20.83-2.08-24.24-5.3-31.25A148.65,148.65,0,0,0,247.34,1,154.75,154.75,0,0,0,264.19.19c-3.41,7-5.3,9.85-5.3,31.25V75c0,31.63,22.73,44.13,42.42,44.13,7.2,0,14-1.52,19.32-4.55-7.39,8.34-20.64,13.26-34.66,13.26C262.11,127.84,236.35,113.26,236.35,76.89Zm99,11.56a154.69,154.69,0,0,0-7-35.61C321.58,32.39,309.27,23.48,309.27.19c5.87.57,10.41.76,15.91,1a145.83,145.83,0,0,0,15.9-.95c-4.92,7.39-5.3,21.78-5.3,28V88.45Z",
        "M361.16,127.08c-5.88,0-11.37.38-16.29.76,3.41-7,5.11-11.17,5.11-32.58V32.76c0-21.4-1.7-25.56-5.11-32.57C349.79.57,355.28,1,361,1,367,1,372.71.57,377.82.19c-3.41,7-5.11,11.17-5.11,32.57v62.5c0,21.41,1.7,25.57,5.11,32.58C372.71,127.46,367,127.08,361.16,127.08Zm17-66.47h-.38s18-16.48,36-16.48a108.76,108.76,0,0,0-1.14,15.53c0,5.87.57,10,1.52,18.37C397.71,61.36,381.23,60.61,378.2,60.61ZM386.72.19h54.36c-.57,4-.76,8.52-.95,13.26a103.83,103.83,0,0,0,.95,14C419.87,27.46,401.69,3.41,386.72.19Z",
        "M461.15,127.08c-5.68,0-11.17.38-16.29.76,3.41-7,5.31-11.17,5.31-32.58V32.76c0-21.4-1.9-25.56-5.31-32.57C450,.57,455.28,1,461.15,1,467.21,1,472.7.57,478,.19c-3.41,7-5.31,11.17-5.31,32.57v62.5c0,21.41,1.9,25.57,5.31,32.58C472.7,127.46,467.21,127.08,461.15,127.08Z",
        "M537.28,127.27c-5.87,0-11.17.19-16.28.57,3.41-6.82,5.3-11.17,5.3-32.58V69.7l-22.73-39C497.32,19.89,489.37,5.11,481.79.19h35.42l-.38,2.46c0,6.63,5.3,14.77,8.9,21.21l23.11,39.59V95.26c0,21.6,1.7,25.57,5.3,32.58C548.84,127.46,543.15,127.27,537.28,127.27Zm22.16-98.86c0-11-3.41-18-3.41-25a14.28,14.28,0,0,1,.19-2.84c5.31.38,11.18.76,17.43.76,6.82,0,13.44-.38,19.5-.76-6.62,1.89-40.9,56.82-40.9,56.82C557.93,45.08,559.44,35.79,559.44,28.41Z",
        "M673.83,126.32a99.38,99.38,0,0,0-18,1.52,24.44,24.44,0,0,0,1.7-9.66c0-8.33-2.46-14.58-7.76-31.25a8.3,8.3,0,0,0-8-5.87H607c0,20.45,4.92,26.14,4.92,46.78a113.62,113.62,0,0,0-17.23-1.33A107.79,107.79,0,0,0,578,127.84c5.11-5.11,11-20.64,15.15-31.44l18.37-48.86c-3.41,14-4.54,24.62-4.54,33.33h34.47A4.48,4.48,0,0,0,646,76.33l-.19-1.52L631.22,30.87c-3.41-10.42-6.44-22.16-15-30.49h16.66a16.54,16.54,0,0,1,15.72,11.36L675,91.48c4.54,14.39,10.6,32.19,17,36.36A101.61,101.61,0,0,0,673.83,126.32Z",
        "M793.52,127.46a29.57,29.57,0,0,1-25.19-14L714.55,27.08C708.86,17.61,701.67,4.17,695.8,0h11.55a30.81,30.81,0,0,1,26.13,14.58l52.28,84.47c6.06,9.85,14,23.68,19.69,28.41Zm-81.25-.38c-5.68,0-11.17.19-16.47.38,6.63-5.87,7.38-28.79,7.38-31.63V38.07h.19c4.55,49.05,26.33,71,26.33,89.39C724.2,127.27,718.33,127.08,712.27,127.08Zm76.14-73.29C782.92,33.14,769.28,14.58,769.28,0A98.58,98.58,0,0,0,786,1.33,145.3,145.3,0,0,0,805.45,0c-8.9,4.74-9.65,28.79-9.65,31.63V89.39A334.27,334.27,0,0,0,788.41,53.79Z",
        // "M247.33,289.51c-5.69,0-11.18.19-16.29.57,3.41-6.82,5.3-11,5.3-32.39v-62.5c0-21.4-1.89-25.76-5.3-32.57,6.82.56,11.55.56,19.51.56,4.92,0,9.28-.19,13.63-.56-3.41,6.81-5.3,11.17-5.3,32.57v62.5c0,21.4,1.89,25.57,5.3,32.39C258.88,289.7,253.39,289.51,247.33,289.51Zm24.62.57s41.85-3.79,41.85-33.34c0-28.41-37.5-30.3-47.34-30.3h-2.28c7-2.46,40.91-11.36,40.91-35,0-26.13-31.44-28.78-31.44-28.78a93.78,93.78,0,0,1,10.42-.38c21.59,0,43.56,6.25,43.56,27.08,0,14.58-12.12,25.76-39.21,28.41h2.66c32.57,0,45.26,19.69,45.26,36,0,16.86-9.28,36.37-60,36.37Z",
        // "M356.41,289.51c-5.68,0-11.17.38-16.29.76,3.6-7,5.31-11.18,5.31-32.58v-62.5c0-21.4-1.71-25.57-5.31-32.57,5.12.37,10.61.75,16.29.75,6.06,0,11.74-.38,16.86-.75-3.41,7-5.31,11.17-5.31,32.57v62.5c0,21.4,1.9,25.57,5.31,32.58C368.15,289.89,362.47,289.51,356.41,289.51ZM373.65,223h-.38s17.8-16.48,36-16.48a108.86,108.86,0,0,0-1.14,15.53c0,5.88.57,10,1.52,18.38C393.15,223.79,376.68,223,373.65,223Zm8.14,67.24c14-3.41,33.9-27.28,57.38-27.28a107.23,107.23,0,0,0-.75,11.75,133.12,133.12,0,0,0,.75,15.53Zm.38-127.65h54.35a96,96,0,0,0-.94,13.25,105.63,105.63,0,0,0,.94,14C415.31,189.89,397.13,165.83,382.17,162.62Z",
        // "M540.69,289.89a29.56,29.56,0,0,1-25.19-14l-53.79-86.36C456,180,448.83,166.59,443,162.43h11.55A30.82,30.82,0,0,1,480.65,177l52.27,84.47c6.06,9.85,14,23.67,19.7,28.41Zm-81.25-.38c-5.69,0-11.18.19-16.48.38,6.63-5.87,7.38-28.79,7.38-31.63V200.49h.19c4.55,49.06,26.33,71,26.33,89.4C471.37,289.7,465.5,289.51,459.44,289.51Zm76.13-73.3c-5.49-20.64-19.13-39.2-19.13-53.78a99.76,99.76,0,0,0,16.67,1.32,147.14,147.14,0,0,0,19.51-1.32c-8.9,4.73-9.66,28.78-9.66,31.62v57.77A333.91,333.91,0,0,0,535.57,216.21Z",
        // "M652.23,288.75a99.38,99.38,0,0,0-18,1.52,24.49,24.49,0,0,0,1.71-9.66c0-8.34-2.47-14.59-7.77-31.25a8.3,8.3,0,0,0-7.95-5.87H585.38c0,20.45,4.92,26.13,4.92,46.78a113.51,113.51,0,0,0-17.23-1.33,107.79,107.79,0,0,0-16.67,1.33c5.11-5.12,11-20.65,15.15-31.44L589.92,210c-3.41,14-4.54,24.62-4.54,33.34h34.47a4.49,4.49,0,0,0,4.54-4.55l-.19-1.51L609.62,193.3c-3.41-10.42-6.44-22.16-15-30.5h16.66A16.55,16.55,0,0,1,627,174.17l26.33,79.73c4.54,14.4,10.61,32.2,17,36.37A101.61,101.61,0,0,0,652.23,288.75Z",
        // "M690.48,289.51c-5.87,0-11.17.19-16.28.57,3.41-6.82,5.3-11.18,5.3-32.58V195c0-21.4-1.89-25.57-5.3-32.57a146.64,146.64,0,0,0,16.28.75,162.24,162.24,0,0,0,16.86-.75c-3.6,7-5.3,11.17-5.3,32.57v62.5c0,21.4,1.7,25.76,5.3,32.58C702,289.7,696.36,289.51,690.48,289.51Zm25.38.57c13.83-3.41,29.17-27.28,48.68-27.28a104,104,0,0,0-.95,14,92.55,92.55,0,0,0,.95,13.26Z",
        // "M784.61,289.51c-5.87,0-11.17.19-16.29.57,3.41-6.82,5.3-11.18,5.3-32.58V195c0-21.4-1.89-25.57-5.3-32.57a146.94,146.94,0,0,0,16.29.75,162.49,162.49,0,0,0,16.86-.75c-3.6,7-5.31,11.17-5.31,32.57v62.5c0,21.4,1.71,25.76,5.31,32.58C796.16,289.7,790.48,289.51,784.61,289.51Zm25.38.57c13.82-3.41,29.16-27.28,48.67-27.28a104,104,0,0,0-.95,14,92.55,92.55,0,0,0,.95,13.26Z",
        // "M958.28,288.75a99.58,99.58,0,0,0-18,1.52,24.49,24.49,0,0,0,1.71-9.66c0-8.34-2.46-14.59-7.77-31.25a8.28,8.28,0,0,0-8-5.87H891.42c0,20.45,4.93,26.13,4.93,46.78a113.76,113.76,0,0,0-17.24-1.33,107.89,107.89,0,0,0-16.67,1.33c5.12-5.12,11-20.65,15.16-31.44L896,210c-3.41,14-4.55,24.62-4.55,33.34h34.47a4.5,4.5,0,0,0,4.55-4.55l-.19-1.51L915.66,193.3c-3.41-10.42-6.44-22.16-15-30.5h16.67a16.57,16.57,0,0,1,15.72,11.37l26.32,79.73c4.55,14.4,10.61,32.2,17.05,36.37A101.61,101.61,0,0,0,958.28,288.75Z",
        // "M996.53,289.51c-5.87,0-11.18.19-16.29.57,3.41-6.82,5.3-11.18,5.3-32.58V195c0-21.4-1.89-25.57-5.3-32.57a146.94,146.94,0,0,0,16.29.75,162.49,162.49,0,0,0,16.86-.75c-3.6,7-5.31,11.17-5.31,32.57v62.5c0,21.4,1.71,25.76,5.31,32.58C1008.08,289.7,1002.4,289.51,996.53,289.51Zm25.38.57c13.82-3.41,29.16-27.28,48.67-27.28a104,104,0,0,0-.95,14,92.55,92.55,0,0,0,.95,13.26Z",    
        ];
  
      // Variants for Container
        const container = {
          hidden: { opacity: 0 },
          visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.05, delayChildren: 5 * i },
          }),
        };
      
      // Variants for each letter
        const child = {
            hidden: {
                pathLength: 0,
                fill: "rgba(255, 255, 255, 0)"
              },
              visible: {
                pathLength: 1,
                repeat: Infinity,
                fill: "rgba(255, 255, 255, 1)"
              },
             
    //       visible: {
    //         opacity: 1,
    //         scale:1,
    //         y: 0,
    //         transition: {
    //           type: "spring",
    //           damping: 12,
    //           stiffness: 100,
    //         },
    //         pathLength: 1,
    //         delay:3,
    //         durration:3,

    //         fill: "rgba(255, 255, 255, 1)"
    //       },
    //       hidden: {
    //   pathLength: 0,
    //     fill: "rgba(255, 255, 255, 0)",
    //         opacity: 0,
    //         y: 200,
    //         scale:.8,
    //             durration:3,
    //         transition: {
    //           type: "spring",
    //           damping: 12,
    //           stiffness: 100,
    //         },
    //       },
        };
  return (
    <motion.svg className={classNames('flex w-[80vw]', className)}
        variants={container}
        initial="hidden"
        animate="visible"
        viewBox="0 0 1070.58 290.27"


    >
             <mask
        id="path-1-outside-1"
        maskUnits="userSpaceOnUse"
        x="0.867188"
        y="0.21875"
        width="998"
        height="108"
        fill="black"
      >
        <rect fill="white" x="0.867188" y="0.21875" width="998" height="108" />
        <path d="M15.3672 105H1.86719V2.625H15.3672V105Z" />
      </mask>
        {
            letters.map((path,key)=>{
                return  (
                    <motion.path  
                 
                    stroke='currentColor'
                        strokeWidth={.5}
                        variants={child} key={key} d={path}
                        initial="hidden"
                        animate="visible"
                        transition={{
                            default: { duration: 2, ease: "easeInOut" },
                            fill: { duration: 3, ease: [1, 0, 0.8, 1]},
                            repeat: true,
                            staggerChildren: 0.05, delay: .2 *( Math.random()* 5),
                            
                          }}
               
                    ></motion.path>

                )
            })
        }
        {
            letters2.map((path,key)=>{
                return  (
                    <motion.path  
                 
                    stroke='currentColor'
                        strokeWidth={.5}
                        variants={child} key={'two-'+key} d={path}
                        initial="hidden"
                        animate="visible"
                        transition={{
                            default: { duration: 4, ease: "easeInOut",  repeat: Infinity, staggerChildren: 0.05, delay: .2 *( Math.random()* 5)},
                            fill: { duration: 3, ease: [1, 0, 0.8, 1]},
                            repeat: true,
                            staggerChildren: 0.05, delay: .2 *( Math.random()* 5),
                            
                          }}
               
                    ></motion.path>

                )
            })
        }
    </motion.svg>
  )
}
