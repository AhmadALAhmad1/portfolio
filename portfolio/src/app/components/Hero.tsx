'use client';
import React from 'react';
import animation_hero from '../../../public/icons/animation.json';
import TelegramIcon from '@mui/icons-material/Telegram';
import Lottie from 'lottie-react';
import Typing from './TypeWriter';
import Link from 'next/link';
import { FaGithub } from 'react-icons/fa';
import { BsLinkedin } from 'react-icons/bs';

const Hero = () => {
  return (
    <section
      id='/'
      className='grid grid-cols-1 items-center justify-between gap-x-6 gap-y-1 px-3 pt-6 lg:min-h-[80vh] lg:grid-cols-2'
    >
      <div>
        <Typing />
        <section className='md:text-lg'>
          <h3 className='max-w-[55ch] indent-3'>
            I&apos;m an Experienced
            <b className='text-cyan-500'> Full-Stack Engineer </b> skilled in
            <b className='text-cyan-500'> MERN</b> and
            <b className='text-cyan-500'> LAMP </b> stacks, dedicated to
            crafting visually appealing, scalable, and efficient web
            applications. Proficient with a two-year background, adept at
            transforming ideas into seamless user experiences.
          </h3>
        </section>
        <div className='mt-4 flex flex-wrap items-center gap-3 gap-y-4'>
          <div className='flex gap-3'>
            <Link
              href='https://github.com/AhmadALAhmad1'
              target='_blank'
              passHref
            >
              <FaGithub className='transform-gpu text-[1.6rem] transition-transform duration-200 hover:scale-110 hover:text-cyan-500' />
            </Link>

            <Link
              href='https://www.linkedin.com/in/ahmad-al-ahmad/'
              target='_blank'
              passHref
            >
              <BsLinkedin className='transform-gpu text-[1.6rem] transition-transform duration-200 hover:scale-110 hover:text-cyan-500' />
            </Link>
          </div>
          <Link href='mailto:dev.ahmadlahmad@gmail.com'>
            <button className='hover:light:text-light hover:-75 rounded-lg bg-cyan-500 p-2 px-5 font-bold shadow-md transition-all duration-300 hover:scale-95 hover:shadow-light hover:dark:text-dark'>
              <span>
                <TelegramIcon />
              </span>{' '}
              Work with me
            </button>
          </Link>
        </div>
      </div>
      <div>
        <Lottie
          animationData={animation_hero}
          className='-mt-5 h-[360px] sm:h-[500px] md:h-[600px] lg:mt-0 lg:h-full '
        />
      </div>
    </section>
  );
};

export default Hero;
