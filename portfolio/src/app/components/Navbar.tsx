'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import ThemeSwitch from './ThemeSwitch';
import { motion } from 'framer-motion';

const Navbar = () => {
  const text = '<A/>';
  const [nav, setNav] = useState(false);
  const links = [
    {
      id: 1,
      link: 'home',
    },
    {
      id: 2,
      link: 'skills',
    },
    {
      id: 3,
      link: 'projects',
    },
    {
      id: 4,
      link: 'resume',
    },
  ];

  return (
    <div className='sticky top-0 z-[999] mx-auto flex w-full items-center justify-between border-b-[0.5px] px-6  py-4 backdrop-blur-xl sm:px-12'>
      <div className='flex items-center'>
        <Link href='/' className='z-40 text-3xl'>
          <h1 className='text-2xl font-extrabold sm:text-[1.6rem] '> {text}</h1>
        </Link>
      </div>

      <ul className='hidden flex-grow justify-center gap-2 sm:flex'>
        {links.map(({ id, link }) => (
          <li
            key={id}
            className='cursor-pointer rounded-lg p-2 px-4 font-medium capitalize hover:bg-cyan-500  hover:opacity-90'
          >
            <Link href={`#${link}`}>{link}</Link>
          </li>
        ))}
      </ul>

      <div className='z-40 flex flex-wrap gap-6'>
        <button className='hover:opacity-60' title='Toggle Light/Dark Mode'>
          <ThemeSwitch />
        </button>
        <div
          onClick={() => setNav(!nav)}
          className='z-40 flex cursor-pointer flex-wrap gap-4 rounded-md p-0.5 transition duration-200 hover:bg-neutral-100 hover:bg-opacity-30 sm:hidden'
        >
          <div className='rounded-md p-0.5 transition duration-200 hover:bg-neutral-700 hover:bg-opacity-30 '>
            {nav ? <FaTimes size={26} /> : <FaBars size={26} />}
          </div>
        </div>
      </div>

      {nav && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            onClick={() => setNav(false)}
            className='fixed inset-0 z-20'
          ></motion.div>
          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className='absolute left-0 top-0 z-30 flex max-h-[70vh] w-full flex-col items-center justify-center space-y-7 border-b-[0.5px] bg-light py-10 pt-20 text-dark dark:bg-neutral-900 dark:text-light'
          >
            {links.map(({ id, link }) => (
              <motion.li
                key={id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1, ease: 'easeInOut' }}
                className='hover:dark cursor-pointer rounded-lg px-3 py-2 text-[1.6rem] capitalize transition duration-200 ease-in-out hover:bg-blue-400 hover:text-dark'
              >
                <Link onClick={() => setNav(!nav)} href={`#${link}`}>
                  {link}
                </Link>
              </motion.li>
            ))}
          </motion.ul>
        </>
      )}
    </div>
  );
};

export default Navbar;
