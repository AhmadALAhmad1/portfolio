import Link from 'next/link';
import React from 'react';
import { TbBrandNextjs } from 'react-icons/tb';
import { MdCopyright } from 'react-icons/md';
const Footer = () => {
  return (
    <div className='flex items-center justify-center border-t-2 font-light'>
      <div className='pb-5 pt-6'>
        <Link target='_blank' href='https://nextjs.org/'>
          <button className='text-md flex items-center gap-1 px-10 hover:text-cyan-500 hover:underline'>
            Powered by
            <span>
              <TbBrandNextjs className='text-[1rem]' />
            </span>
          </button>
        </Link>
        <p className='flex items-center gap-1 pt-4'>
          Ahmad Al Ahmad 2024
          <span>
            <MdCopyright />
          </span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
