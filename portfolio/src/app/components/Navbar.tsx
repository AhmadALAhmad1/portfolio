'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import ThemeSwitch from './ThemeSwitch';
import Image from 'next/image';
import logo_a from '../../../public/images/logo.png';
const Navbar = () => {
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
    <div className='sticky mx-auto flex w-full items-center justify-between border-b px-6 py-4 sm:px-10'>
      <div className='flex items-center'>
        <Link href='/' className='z-10 text-3xl'>
          <Image src={logo_a} alt='' width={60} height={30} />
        </Link>
      </div>

      <ul className='hidden flex-grow justify-center sm:flex'>
        {links.map(({ id, link }) => (
          <li
            key={id}
            className='e cursor-pointer rounded-lg p-3 px-4 font-medium capitalize transition duration-200 hover:bg-blue-400  hover:text-dark'
          >
            <Link href={link}>{link}</Link>
          </li>
        ))}
      </ul>

      <div className='z-10 flex flex-wrap gap-6'>
        <button className='hover:opacity-50'>
          <ThemeSwitch />
        </button>
        <div
          onClick={() => setNav(!nav)}
          className='z-10 flex cursor-pointer flex-wrap gap-4 sm:hidden '
        >
          {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
      </div>

      {nav && (
        <ul className='absolute left-0 top-0 flex h-[50vh] w-full flex-col items-center justify-center bg-light text-dark dark:bg-dark dark:text-light '>
          {links.map(({ id, link }) => (
            <li
              key={id}
              className='hover:dark cursor-pointer rounded-lg px-2 py-4 text-2xl capitalize transition duration-200  ease-in-out hover:bg-blue-400 hover:text-dark'
            >
              <Link onClick={() => setNav(!nav)} href={link}>
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
