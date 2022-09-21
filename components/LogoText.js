/* eslint-disable react/jsx-key */
import classNames from 'classnames'
import React from 'react'
import { motion } from "framer-motion";
const Souf = () => (
    <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 273.57 70.24">
        <path d="M0,59.94a24.58,24.58,0,0,0,4-4.89,34.56,34.56,0,0,0,3.22-8.32c2.6,2,6.45,8.94,9.05,13.94,2.4,4.68,4.79,8.85,9.68,9.57C13.74,69.83,4.06,65.25,0,59.94ZM39.75,56.3c0-18.32-37.56-18.42-37.56-39C2.19,4.37,15.51.21,25.91.21,22.27.83,14.36,3.54,14.36,12.28c0,15.71,38.92,16.44,38.92,40,0,13.22-14.36,17.38-23.52,18C33.3,69.31,39.75,66.08,39.75,56.3Zm2.08-34.55c-6.55-4-1.66-19.88-12.07-21.54A31.2,31.2,0,0,1,51.1,10.51a24.29,24.29,0,0,0-3.65,5.2,20,20,0,0,0-2.08,7.08A10.35,10.35,0,0,1,41.83,21.75Z"        />
        <path d="M99.79,70.24c-20.29,0-33.92-15.5-34-35,0-17.59,10.51-31.74,28-34.34C93.76.94,79,7.08,79,29.76A58.45,58.45,0,0,0,79.61,38c3.74,27.89,25.18,32,25.18,32a35.48,35.48,0,0,1-4.79.31Zm22.17-31a51.63,51.63,0,0,0-.42-6.87C117.69,2,97.09.31,97.09.31A36.69,36.69,0,0,1,101.88,0c20.7,0,33.3,15.82,33.4,35.38,0,17.38-10.61,31.43-27.68,34.14C107.6,69.52,122,61.5,122,39.23Z"        />
        <path d="M150.68,42.25v-25C150.68,5.83,149.53,4,147.76.1a80.09,80.09,0,0,0,9,.42A83.26,83.26,0,0,0,166,.1c-1.87,3.85-2.91,5.42-2.91,17.17V41.21c0,17.38,12.49,24.25,23.31,24.25A21.71,21.71,0,0,0,197,63c-4.06,4.58-11.35,7.28-19.05,7.28C164.83,70.24,150.68,62.23,150.68,42.25ZM205.1,48.6A85,85,0,0,0,201.25,29C197.51,17.79,190.74,12.9,190.74.1c3.23.32,5.73.42,8.74.52A78.45,78.45,0,0,0,208.22.1c-2.7,4.06-2.91,12-2.91,15.41V48.6Z"        />
        <path d="M229.66,69.83c-3.23,0-6.25.21-8.95.41,1.87-3.85,2.81-6.14,2.81-17.9V18c0-11.76-.94-14-2.81-17.9,2.7.21,5.72.42,8.84.42,3.33,0,6.46-.21,9.27-.42C236.94,4,236,6.24,236,18V52.34c0,11.76.93,14,2.81,17.9C236,70,232.88,69.83,229.66,69.83ZM239,33.3h-.2s9.88-9,19.77-9a59.33,59.33,0,0,0-.63,8.53,83.15,83.15,0,0,0,.84,10.09C249.74,33.72,240.69,33.3,239,33.3ZM243.71.1h29.86c-.31,2.19-.41,4.69-.52,7.29a57.59,57.59,0,0,0,.52,7.7C261.92,15.09,251.93,1.87,243.71.1Z"        />
    </svg>
)
const Iyan = () => (
    <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 229.35 70.24">
        <path d="M9,69.83c-3.12,0-6.14.21-8.95.41,1.87-3.85,2.91-6.14,2.91-17.9V18C2.91,6.24,1.87,4,0,.1,2.81.31,5.72.52,9,.52S15.3.31,18.21.1C16.34,4,15.3,6.24,15.3,18V52.34c0,11.76,1,14,2.91,17.9C15.3,70,12.28,69.83,9,69.83Z"/>
        <path d="M61.19,69.93c-3.23,0-6.14.11-8.95.31,1.87-3.74,2.91-6.14,2.91-17.9v-14L42.66,16.86c-3.43-5.93-7.8-14-12-16.76H50.16L50,1.46c0,3.64,2.91,8.11,4.89,11.65l12.7,21.75V52.34c0,11.87.93,14,2.91,17.9C67.54,70,64.41,69.93,61.19,69.93ZM73.36,15.61c0-6-1.87-9.89-1.87-13.74a8.18,8.18,0,0,1,.1-1.56c2.92.21,6.14.42,9.58.42,3.75,0,7.39-.21,10.72-.42-3.64,1-22.48,31.22-22.48,31.22C72.53,24.77,73.36,19.67,73.36,15.61Z"/>
        <path d="M146.62,69.41a54.84,54.84,0,0,0-9.88.83,13.47,13.47,0,0,0,.93-5.3c0-4.58-1.35-8-4.26-17.17A4.57,4.57,0,0,0,129,44.54H109.89c0,11.24,2.7,14.36,2.7,25.7a63.46,63.46,0,0,0-9.47-.72,60.4,60.4,0,0,0-9.16.72c2.81-2.81,6-11.34,8.33-17.27l10.09-26.85a77,77,0,0,0-2.49,18.32h18.94a2.47,2.47,0,0,0,2.49-2.5l-.1-.83-8-24.15C121.33,11.24,119.67,4.79,115,.21h9.15a9.09,9.09,0,0,1,8.64,6.24l14.47,43.81c2.49,7.91,5.82,17.69,9.36,20A56.06,56.06,0,0,0,146.62,69.41Z"/>
        <path d="M222.79,70A16.25,16.25,0,0,1,209,62.33L179.4,14.88C176.28,9.68,172.32,2.29,169.09,0h6.35A16.94,16.94,0,0,1,189.8,8l28.73,46.42c3.33,5.41,7.7,13,10.82,15.61Zm-44.64-.21c-3.12,0-6.14.1-9.06.21,3.65-3.23,4.06-15.82,4.06-17.38V20.92h.11c2.49,26.95,14.46,39,14.46,49.12C184.71,69.93,181.48,69.83,178.15,69.83ZM220,29.55C217,18.21,209.47,8,209.47,0a54,54,0,0,0,9.16.73A79.46,79.46,0,0,0,229.35,0C224.46,2.6,224,15.82,224,17.38V49.12A182.36,182.36,0,0,0,220,29.55Z"/>
    </svg>
)
export default function LogoText({className}) {
      // splitting text into letters
      const letters =[
            "M0,59.94a24.58,24.58,0,0,0,4-4.89,34.56,34.56,0,0,0,3.22-8.32c2.6,2,6.45,8.94,9.05,13.94,2.4,4.68,4.79,8.85,9.68,9.57C13.74,69.83,4.06,65.25,0,59.94ZM39.75,56.3c0-18.32-37.56-18.42-37.56-39C2.19,4.37,15.51.21,25.91.21,22.27.83,14.36,3.54,14.36,12.28c0,15.71,38.92,16.44,38.92,40,0,13.22-14.36,17.38-23.52,18C33.3,69.31,39.75,66.08,39.75,56.3Zm2.08-34.55c-6.55-4-1.66-19.88-12.07-21.54A31.2,31.2,0,0,1,51.1,10.51a24.29,24.29,0,0,0-3.65,5.2,20,20,0,0,0-2.08,7.08A10.35,10.35,0,0,1,41.83,21.75Z",
            "M99.79,70.24c-20.29,0-33.92-15.5-34-35,0-17.59,10.51-31.74,28-34.34C93.76.94,79,7.08,79,29.76A58.45,58.45,0,0,0,79.61,38c3.74,27.89,25.18,32,25.18,32a35.48,35.48,0,0,1-4.79.31Zm22.17-31a51.63,51.63,0,0,0-.42-6.87C117.69,2,97.09.31,97.09.31A36.69,36.69,0,0,1,101.88,0c20.7,0,33.3,15.82,33.4,35.38,0,17.38-10.61,31.43-27.68,34.14C107.6,69.52,122,61.5,122,39.23Z",
            "M150.68,42.25v-25C150.68,5.83,149.53,4,147.76.1a80.09,80.09,0,0,0,9,.42A83.26,83.26,0,0,0,166,.1c-1.87,3.85-2.91,5.42-2.91,17.17V41.21c0,17.38,12.49,24.25,23.31,24.25A21.71,21.71,0,0,0,197,63c-4.06,4.58-11.35,7.28-19.05,7.28C164.83,70.24,150.68,62.23,150.68,42.25ZM205.1,48.6A85,85,0,0,0,201.25,29C197.51,17.79,190.74,12.9,190.74.1c3.23.32,5.73.42,8.74.52A78.45,78.45,0,0,0,208.22.1c-2.7,4.06-2.91,12-2.91,15.41V48.6Z",
            "M229.66,69.83c-3.23,0-6.25.21-8.95.41,1.87-3.85,2.81-6.14,2.81-17.9V18c0-11.76-.94-14-2.81-17.9,2.7.21,5.72.42,8.84.42,3.33,0,6.46-.21,9.27-.42C236.94,4,236,6.24,236,18V52.34c0,11.76.93,14,2.81,17.9C236,70,232.88,69.83,229.66,69.83ZM239,33.3h-.2s9.88-9,19.77-9a59.33,59.33,0,0,0-.63,8.53,83.15,83.15,0,0,0,.84,10.09C249.74,33.72,240.69,33.3,239,33.3ZM243.71.1h29.86c-.31,2.19-.41,4.69-.52,7.29a57.59,57.59,0,0,0,.52,7.7C261.92,15.09,251.93,1.87,243.71.1Z",

        ];
  
      // Variants for Container
        const container = {
          hidden: { opacity: 0 },
          visible: (i = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.05, delayChildren: 3 * i },
          }),
        };
      
      // Variants for each letter
        const child = {
          visible: {
            opacity: 1,
            scale:1,
            y: 0,
            transition: {
              type: "spring",
              damping: 12,
              stiffness: 100,
            },
          },
          hidden: {
            opacity: 0,
            y: -200,
            scale:.8,
            transition: {
              type: "spring",
              damping: 12,
              stiffness: 100,
            },
          },
        };
  return (
    <motion.svg className={classNames('flex', className)}
        style={{ overflow: "hidden", display: "flex", fontSize: "8rem" }}
        variants={container}
        initial="hidden"
        animate="visible"
        viewBox="0 0 273.57 70.24"
    >
        {
            letters.map((path,key)=>{
                return  (
                    <motion.path  variants={child} key={key} d={path} fill='currentColor'></motion.path>

                )
            })
        }
    </motion.svg>
  )
}
