import Link from 'next/link';
import React from 'react';
import { TbBrandNextjs } from 'react-icons/tb';
import { FaGithub } from 'react-icons/fa';
import { BsLinkedin } from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';
import { cn } from '../utils/css';
const Footer = () => {
  const IconClassNames =
    'transform-gpu transition-transform duration-200 group-hover:text-cyan-500';
  const LinkClassNames =
    'group rounded-xl  bg-neutral-300 p-3 duration-300 hover:shadow-md hover:shadow-dark  dark:bg-neutral-800 dark:hover:shadow-light';
  return (
    <div className='flex items-center justify-center border-t-[1px] font-semibold'>
      <div className='py-5'>
        <Link target='_blank' href='https://nextjs.org/'>
          <button className='text-md flex items-center gap-1 px-10 hover:text-cyan-500 hover:underline'>
            Powered by
            <span>
              <TbBrandNextjs className='text-[1.3rem]' />
            </span>
          </button>
        </Link>
        <div className='mt-4 flex items-center justify-center gap-7 text-[1.7rem] flex-wrap'>
          <Link
            target='_blank'
            href='https://github.com/AhmadALAhmad1'
            className={cn(LinkClassNames)}
          >
            <FaGithub className={cn(IconClassNames)} />
            <span className='sr-only'>GitHub</span>
          </Link>

          <Link
            target='_blank'
            href='https://www.linkedin.com/in/ahmad-al-ahmad/'
            className={cn(LinkClassNames)}
          >
            <BsLinkedin className={cn(IconClassNames)} />
            <span className='sr-only'>GitHub</span>
          </Link>
          <Link
            target='_blank'
            href='https://mail.google.com/mail/?view=cm&fs=1&to=dev.ahmadalahmad@gmail.com'
            className={cn(LinkClassNames)}
          >
            <SiGmail className={cn(IconClassNames)} />
            <span className='sr-only'>GitHub</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
