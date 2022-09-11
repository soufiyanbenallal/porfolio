/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-target-blank */
import React,{useState} from 'react';
import Link from 'next/link';
import DarkModeSwitcher from './DarkModeSwitcher';
import Logo from './Logo';
// import SocialMedia from './SocialMedia';
import { FADE_ANIM } from '../motions/home';
import { motion } from "framer-motion";
import { useRouter } from 'next/router'
import aarmy, { isAlreadyOpened} from "@aarmy/connect";
export default function Header() {
  const router = useRouter()
  const openWindow = () => {
    const res= isAlreadyOpened()
    console.log('isAlreadyOpened', res);
    if (res.opened) {
      return;
    }
    const url = 'http://localhost:3000/auth/authorize?client_id=123456789&redirect_to=https://soufiyan.com&small=true'
    aarmy.connect(url).then(data=>{
      console.log('test', data);
    }).catch(err=>{
      console.log('err', err);
    })
  }
  return (
    <motion.header {...FADE_ANIM} className="py-4 absolute top-0 left-0 w-full z-10">
      <nav className="container-lg flex justify-between items-center py-4">
        <Link href="/">
          <a className="max-w-max -ml-3">
            <Logo className="h-12 -my-2 dark:text-white text-gray-900" />
          </a>
        </Link>
        <div className="hidden md:flex items-center">
    
          {router.query['aarmy'] && <>
            <button
              onClick={openWindow}
              className="fill-curren text-gray-100 bg-red-400 px-4 py-1 rounded-full"
            >
              Connect with Aarmy 1
            </button>
            <span className="dark:text-gray-700 text-gray-400 mx-6">-</span>
            <a
              href='http://localhost:3000/auth/authorize?client_id=123456789&redirect_to=https://soufiyan.com'
              className="fill-curren text-gray-100 bg-blue-600 px-4 py-1 rounded-full"
            >
              Connect with Aarmy 2
            </a>
            <span className="dark:text-gray-700 text-gray-400 mx-6">-</span>
          </>}

          <a
            href="mailto:benallalsoufiane1@gmail.com?subject=🤝%20Project%20info.%20Let's%20talk"
            className="fill-current dark:text-gray-100 text-gray-900"
          >
            Let&apos;s talk
          </a>
          <span className="dark:text-gray-700 text-gray-400 mx-6">-</span>
          {
            router.pathname === '/' ?  <Link href="/blogs">
            <a className="fill-current dark:text-gray-100 text-gray-900">
              Blogs
            </a>
          </Link>
          : <Link href="/">
            <a className="fill-current dark:text-gray-100 text-gray-900">
            Home
            </a>
          </Link>
          }
          
          <span className="dark:text-gray-700 text-gray-400 mx-6">-</span>
          <DarkModeSwitcher />
        </div>
      </nav>
    </motion.header>
  );
}
