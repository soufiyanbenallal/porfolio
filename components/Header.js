import React from 'react';
import Link from 'next/link';
import DarkModeSwitcher from './DarkModeSwitcher';
import Logo from './Logo';
import SocialMedia from './SocialMedia';

export default function Header() {
  return (
    <header className="py-4 relative z-10">
      <nav className="container-fluid hidden md:flex justify-end mb-3 dark:text-indigo-500 text-gray-900">
        <SocialMedia />
      </nav>
      <nav className="container-fluid flex justify-between items-center py-4">
        <Link href="/">
          <a className="max-w-max">
            <Logo className="h-6 dark:text-white text-gray-900" />
          </a>
        </Link>
        <div className="hidden md:flex items-center space-x-6">
          <a
            href="#contact"
            className="fill-current dark:text-indigo-600 text-gray-900"
          >
            Let&apos;s talk
          </a>
          <span className="dark:text-gray-700 text-gray-400">-</span>
          <Link href="/blogs">
            <a className="fill-current dark:text-indigo-600 text-gray-900">
              Blogs
            </a>
          </Link>
          <span className="dark:text-gray-700 text-gray-400">-</span>
          <DarkModeSwitcher />
        </div>
      </nav>
    </header>
  );
}
