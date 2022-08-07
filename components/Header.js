import React from 'react';
import Link from 'next/link';
import DarkModeSwitcher from './DarkModeSwitcher';
import Logo from './Logo';
// import SocialMedia from './SocialMedia';
import { FADE_ANIM } from '../motions/home';
import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.header {...FADE_ANIM} className="py-4 absolute top-0 left-0 w-full z-10">
      <nav className="container-fluid flex justify-between items-center py-4">
        <Link href="/">
          <a className="max-w-max">
            <Logo className="h-6 dark:text-white text-gray-900" />
          </a>
        </Link>
        <div className="hidden md:flex items-center space-x-6">
          <a
            href="mailto:benallalsoufiane1@gmail.com?subject=🤝%20Project%20info.%20Let's%20talk"
            className="fill-current dark:text-gray-100 text-gray-900"
          >
            Let&apos;s talk
          </a>
          <span className="dark:text-gray-700 text-gray-400">-</span>
          <Link href="/blogs">
            <a className="fill-current dark:text-gray-100 text-gray-900">
              Blogs
            </a>
          </Link>
          <span className="dark:text-gray-700 text-gray-400">-</span>
          <DarkModeSwitcher />
        </div>
      </nav>
    </motion.header>
  );
}
