'use client';
import React, { useState } from 'react';
import animation_hero from '../../../public/icons/animation.json';
import TelegramIcon from '@mui/icons-material/Telegram';
import Lottie from 'lottie-react';
import Typing from './TypeWriter';
const Hero = () => {
  return (
    <section className='grid grid-cols-1 items-center justify-between gap-x-6 gap-y-1 px-3 pt-4 lg:min-h-[80vh] lg:grid-cols-2'>
      <div>
        <Typing />
        <section className='text-md'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
          tempore rerum minima assumenda, at enim quae. Inventore similique
          minus obcaecati maxime! Ad corporis itaque magni eum illo, sapiente
          voluptates impedit?
        </section>
        <button className='hover:opacity- hover:light:text-light hover:-75 mt-3 rounded-lg bg-cyan-500 p-2 px-4 font-bold shadow-md transition-all duration-300 hover:dark:text-dark'>
          Work with me{' '}
          <span>
            <TelegramIcon />
          </span>
        </button>
      </div>
      <div className=''>
        <Lottie
          animationData={animation_hero}
          className='-mt-5 h-[360px] sm:h-[500px] md:h-[600px] lg:mt-0 lg:h-full '
        />
      </div>
    </section>
  );
};

export default Hero;
