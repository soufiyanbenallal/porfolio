import React,{ReactElement} from 'react';
import Link from 'next/link';
import DarkModeSwitcher from './DarkModeSwitcher';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router'
import aarmy, { isAlreadyOpened} from '@aarmy/connect';
import BuyMeCoffe from './BuyMeCoffe';
import LogoAnimationComponent from './logoAnimation/LogoAnimationComponent';
export default function Header(): ReactElement {
  const router = useRouter()
  const openWindow = () => {
    const res= isAlreadyOpened()
    if (res.opened) {
      return;
    }
    const url = 'http://localhost:3000/auth/authorize?client_id=123456789&redirect_to=https://soufiyan.com&small=true'
    aarmy.connect(url).then(data=>{
      console.log(data);
    }).catch(err=>{
      console.log('err', err);
    })
  }
  return (
    <motion.header className="py-4 absolute top-0 left-0 w-full z-20 font-one">
      <nav className="container-lg flex justify-between items-center py-4">
        <Link href="/">
          <a className="max-w-max -ml-3">
            {/* <Logo className="h-12 -my-2 dark:text-white text-gray-900" /> */}
            <LogoAnimationComponent className='dark:text-gray-100 w-16 -m-4'/>
          </a>
        </Link>
        <div className="hidden md:flex items-center">
        <BuyMeCoffe className='flex items-center space-x-2 border-[2px] border-red-base text-red-base px-3 py-1 rounded-md'  href="https://www.buymeacoffee.com/soufiyan" target="_blank" rel="noreferrer" />
        <span className="dark:text-gray-700 text-gray-400 mx-6">-</span>

          {router.query['aarmy'] && <>
            <button
              onClick={openWindow}
              className="fill-curren text-gray-100 bg-red-base px-4 py-1 rounded-full"
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
