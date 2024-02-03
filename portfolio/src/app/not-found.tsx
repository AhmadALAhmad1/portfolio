import { Metadata } from 'next';
import React from 'react';
import Container from './utils/Container';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Page Not Found - Ahmad Al Ahmad',
  description:
    'Sorry, the page you are looking for does not exist. Explore more about Ahmad Al Ahmad and their work on the portfolio.',
  keywords: 'Page Not Found, 404 Error, Ahmad Al Ahmad, Portfolio',
};

const NotFoundPage = () => {
  return (
    <div className='flex h-[80vh] flex-col items-center justify-center px-4 lg:px-0'>
      <h1 className='text-7xl font-bold sm:text-9xl'>404</h1>
      <p className='mt-3 text-center font-mono font-bold'>
        Oops, the page you are looking for does not exist.
      </p>
      <div className='mt-3'>
        <Link href='/'>
          <button className='customPulse backHomeBtn pulse rounded-md p-3 px-10 shadow-md transition duration-500 hover:scale-105 sm:px-12'>
            ← Let&apos;s go Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
