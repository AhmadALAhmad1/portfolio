import React from 'react';
import { DiReact } from 'react-icons/di';
import { SiJavascript, SiTypescript } from 'react-icons/si';
import { SiVisualstudiocode } from 'react-icons/si';
import { SiTailwindcss } from 'react-icons/si';
import { FaCss3 } from 'react-icons/fa';
import { FaHtml5 } from 'react-icons/fa';
import { IoLogoNodejs } from 'react-icons/io5';
import { SiMongodb } from 'react-icons/si';
import { FaLaravel } from 'react-icons/fa';
import { FaPhp } from 'react-icons/fa';
import { SiMysql } from 'react-icons/si';
import { TbBrandNextjs } from 'react-icons/tb';
import { cn } from '../utils/css';
const Skills = () => {
  const IconsClass = cn(
    'transform duration-200 hover:transition-transform hover:scale-110'
  );

  return (
    <div id='skills' className='py-16'>
      <div className='flex flex-col items-center justify-center'>
        <h1 className='text-3xl font-bold'>Skills</h1>
        <p className='mt-2 text-center'>
          Explore the range of skills I bring to the table
        </p>
      </div>
      <div className='flex flex-wrap justify-center gap-4 space-y-2 sm:space-y-0 px-10 pt-8 text-[2.5em] sm:text-[3.5em]'>
        <SiVisualstudiocode
          className={cn(IconsClass, 'hover:text-blue-500 ')}
        />
        <TbBrandNextjs className={cn(IconsClass)} />
        <DiReact className={cn(IconsClass, 'hover:text-cyan-500 ')} />
        <SiJavascript className={cn(IconsClass, 'hover:text-yellow-500 ')} />
        <SiTypescript className={cn(IconsClass, 'hover:text-blue-400 ')} />
        <SiTailwindcss className={cn(IconsClass, 'hover:text-blue-500 ')} />
        <FaCss3 className={cn(IconsClass, 'hover:text-blue-400 ')} />
        <FaHtml5 className={cn(IconsClass, 'hover:text-orange-500 ')} />
        <IoLogoNodejs className={cn(IconsClass, 'hover:text-green-700 ')} />
        <SiMongodb className={cn(IconsClass, 'hover:text-green-500 ')} />
        <FaLaravel className={cn(IconsClass, 'hover:text-red-600 ')} />
        <FaPhp className={cn(IconsClass, 'hover:text-blue-700 ')} />
        <SiMysql className={cn(IconsClass, 'hover:text-blue-400 ')} />
      </div>
    </div>
  );
};

export default Skills;
